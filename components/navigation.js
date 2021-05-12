export default function Navigation({ logoutEvent }) {
  return (
    <header className="w-5/6 m-auto">
      <nav className="w-full border border-black">
        <ul className="flex flex-row p-3">
          <li className="w-1/5 p-3 text-center border border-black"><a href="/">Profile</a></li>
          <li className="w-1/5 p-3 text-center border border-black"><a href="../dilemmas">Dilemmas</a></li>
          <li className="w-1/5 p-3 text-center border border-black"><a href="../about">About Us</a></li>
          <li className="w-1/5 p-3 text-center border border-black"><a href="/" onClick={logoutEvent}>Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}