
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/post" className="text-white hover:text-gray-300">
              Post
            </Link>
          </li>
          <li>
            <Link href="/eventexmpl" className="text-white hover:text-gray-300">
              Event
            </Link>
          </li>
          <li>
            <Link href="/usestate" className="text-white hover:text-gray-300">
              UseState
            </Link>
          </li>
          <li>
            <Link href="/theme" className="text-white hover:text-gray-300">
              Theme
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
