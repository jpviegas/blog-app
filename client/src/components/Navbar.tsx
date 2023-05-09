import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-0 flex justify-around bg-indigo-200 p-4 md:sticky md:flex-row">
      <div>
        <Link to={"/"}>LOGO</Link>
      </div>
      <nav>
        <ul className="flex flex-col gap-3 text-xl sm:flex-row">
          <li>
            <Link to={"/?cat=art"}>ART</Link>
          </li>
          <li>
            <Link to={"/?cat=science"}>SCIENCE</Link>
          </li>
          <li>
            <Link to={"/?cat=technology"}>TECHNOLOGY</Link>
          </li>
          <li>
            <Link to={"/?cat=cinema"}>CINEMA</Link>
          </li>
          <li>
            <Link to={"/?cat=design"}>DESIGN</Link>
          </li>
          <li>
            <Link to={"/?cat=food"}>FOOD</Link>
          </li>
          <li>JP</li>
          <li className="cursor-pointer font-normal underline">Logout</li>
          <li>
            <Link
              className="h-1/2 w-1/2 rounded-full border-2 border-gray-300 bg-[--color-lightGreen] p-1 hover:border-2 hover:border-solid hover:border-teal-500 hover:bg-white"
              to={"/write"}
            >
              Write
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
