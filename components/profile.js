export default function Profile({ username, profileInfo }) {

  return (
    <main className="w-5/6 m-auto my-4">
      <div>
        <section>
          <h3>{username}</h3>
          <h4>{profileInfo.header}</h4>
          <img src={profileInfo.image}></img>
          <p>{profileInfo.bio}</p>
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