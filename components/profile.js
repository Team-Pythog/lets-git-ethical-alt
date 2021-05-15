export default function Profile({ username }) {

  const profileHeader = typeof window !== 'undefined' ? localStorage.getItem('profile_header') : null
  const profileImage = typeof window !== 'undefined' ? localStorage.getItem('profile_image') : null
  const profileBio = typeof window !== 'undefined' ? localStorage.getItem('profile_bio') : null

  return (
    <main className="w-5/6 p-3 m-auto my-4 bg-purple-400 rounded-md">
      <div>

          <h3 className="text-2xl text-green-200">Welcome {username}!</h3>
        <section className="grid grid-flow-row grid-flow-col grid-cols-2 grid-rows-1 text-white bg-red-300 rounded-lg place-items-center auto-cols-fr">
          <div className="p-3 grid-start-1">
            <h4 className="text-3xl">{profileHeader}</h4>
            <img className="border border-white rounded-lg " src={profileImage}></img>
          </div>
          <p className="p-3 mx-2 bg-blue-500 rounded-lg grid-end-2">{profileBio}</p>

        </section>
        <section>

        </section>
      </div>
      {/* <div className="w-full border border-black">
        <div className="w-1/6 mx-8 my-8 border border-black">
          <img className="" src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
          <h1 className="text-center border border-black ">Ewok</h1>
          <button className="w-full border border-black">Edit</button>
        </div>
      </div>

      <section className="p-3 my-4 border border-black">
        <div className="w-11/12 m-auto my-3 border border-black">
          <h2>Hello, {username}</h2>
          <article className="border border-black">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the</article>
          <p className="border border-black">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the</p>
          <ul className="flex flex-row border border-black">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </section>

      <section className="">
        <div className="flex flex-row w-full border border-black">
          <ul className="flex flex-row">
            <li className="w-1/6 mx-2 border border-black">
              <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
              <p className="text-center">% Match</p>
            </li>
            <li className="w-1/6 mx-2">
              <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
            </li>
            <li className="w-1/6 mx-2">
              <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
            </li>
            <button className="w-1/6 p-10 mx-2 text-center border border-black flex-end ">View All</button>
          </ul>
        </div>
      </section> */}
    </main>
  );
}