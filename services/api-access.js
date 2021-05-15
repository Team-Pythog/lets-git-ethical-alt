import axios from 'axios'

export const ethicsUrl = 'https://lets-git-ethical-be.herokuapp.com/ethics_app/'
// export const ethicsUrl = 'http://localhost:8000/ethics_app/'

export class Dilemma {
  constructor(info) {
    this.title = info.title;
    this.image = info.image;
    this.text = info.text;
    this.response_0 = info.response_0;
    this.response_1 = info.response_1;
  }
}

export class Profile {
  constructor(info) {
    this.image = info.image;
    this.header = info.header;
    this.bio = info.bio;
  }
}

export async function getToken(values) {
  const sessionUrl = "https://lets-git-ethical-be.herokuapp.com/token-auth/";
  // const sessionUrl = "http://localhost:8000/token-auth/";


  const sessionResponse = await axios.post(sessionUrl, values);
  console.log(sessionResponse.data.token)

  const refreshUrl = "https://lets-git-ethical-be.herokuapp.com/token-auth/refresh";
  // const refreshUrl = "http://localhost:8000/token-auth/refresh";

  const refreshResponse = await axios.post(refreshUrl, { token: sessionResponse.data.token });
  console.log(refreshResponse.data.token)

  return refreshResponse.data.token;
}

export async function dilemmaFetch(url, token) {

  const config = makeConfig(token);

  const response = await axios.get(url, config);

  const dilemmas = response.data.map(info => new Dilemma(info));

  return dilemmas;
}

export async function dilemmaPost(token, values) {

  const body = {
    title: values.title,
    image: values.image,
    text: values.text,
    response_0: values.response_0,
    response_1: values.response_1,
  }

  const config = makeConfig(token);

  const response = await axios.post(ethicsUrl, body, config);

  console.log(response.data)

  return response.data;
}

export async function profileFetch(username, token) {

  const profileUrl = `https://lets-git-ethical-be.herokuapp.com/account/profile/${username}`
  // const profileUrl = `http://localhost:8000/account/profile/${username}`

  const config = makeConfig(token);

  const response = await axios.get(profileUrl, config);

  const profileInfo = new Profile(response.data);

  return profileInfo;
}

export async function profilePost(token, values) {

  const body = {
    image: values.image,
    header: values.header,
    bio: values.bio,
  }

  const config = makeConfig(token);

  const response = await axios.post(accountsUrl, body, config);

  return response.data;
}


function makeConfig(token) {
  return {
    headers: {
      'Authorization': 'JWT ' + token
    }
  }
}