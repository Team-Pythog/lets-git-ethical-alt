export default function Navigation({ logoutEvent }) {
  return (
    <header className="w-5/6 m-auto">
      <nav className="w-full text-white bg-blue-200 border border-black rounded-lg">
        <ul className="flex flex-row p-3">
          <li className="w-1/4 p-3 mx-2 text-center bg-pink-700 border border-black rounded-md"><a href="/">Profile</a></li>
          <li className="w-1/4 p-3 mx-2 text-center bg-pink-700 border border-black rounded-md"><a href="../dilemmas">Dilemmas</a></li>
          <li className="w-1/4 p-3 mx-2 text-center bg-pink-700 border border-black rounded-md"><a href="../about">About Us</a></li>
          <li className="w-1/4 p-3 mx-2 text-center bg-pink-700 border border-black rounded-md"><a href="/" onClick={logoutEvent}>Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}