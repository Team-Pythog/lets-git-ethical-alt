import axios from 'axios'

// export const ethicsUrl = 'https://lets-git-ethical-be.herokuapp.com/ethics_app/'
export const ethicsUrl = 'http://localhost:8000/ethics_app/'
export const accountsUrl = 'https://lets-git-ethical-be.herokuapp.com/account/'

export class Dilemma {

  constructor(info) {
    this.id = info.id;
    this.title = info.title;
    this.image = info.image;
    this.text = info.text;
    this.response_0 = info.response_0;
    this.response_1 = info.response_1;
  }

  static fromValues(values) {
    const info = {
      id: -1, // will be overwritten once cache revalidates
      title: values.title,
      image: values.image,
      text: values.text,
      response_0: values.response_0,
      response_1: values.response_1,
    }

    return new Dilemma(info);
  }
}

// get a JSON Web Token from server
export async function getToken(values) {
  // const url = "http://lets-git-ethical-be.herokuapp.com/token-auth/";
  const url = "http://localhost:8000/token-auth/";

  const response = await axios.post(url, values);

  // const refreshUrl = "http://lets-git-ethical-be.herokuapp.com/token-auth/refresh";
  // const refreshUrl = "http://localhost:8000/token-auth/refresh";

  // const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

  // return refreshResponse.data.access;
  return response.data.token;
}

// GET from API with authentication
export async function fetchWithToken(url, token) {

  const config = makeConfig(token);

  const response = await axios.get(url, config);

  const dilemmas = response.data.map(info => new Dilemma(info));
  console.log(dilemmas)
  return dilemmas;
}


// POST to API with authentication
export async function postWithToken(token, values) {

  const body = {
    id: -1, // will be overwritten once cache revalidates
    title: values.title,
    image: values.image,
    text: values.text,
    response_0: values.response_0,
    response_1: values.response_1,
  }

  const config = makeConfig(token);

  const response = await axios.post(ethicsUrl, body, config);

  return response.data;
}


// helper function to handle getting Authorization headers EXACTLY right

function makeConfig(token) {
  return {
    headers: {
      'Authorization': 'JWT ' + token
    }
  }
}
// function makeConfig(token) {
//   return {
//     headers: {
//       'Authorization': 'Bearer ' + token
//     }
//   }
// }