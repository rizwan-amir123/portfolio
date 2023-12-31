export default function Header() {
  return (
    <header className="flex items-end
    px-5 py-3 top-0 z-10 animate-text
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    text-white fixed place-content-center w-full">
      <nav>
        <ul className="flex place-content-center px-70">
          <li className="mx-10 font-medium hover:underline hover:underline-offset-4 decoration-4 ">
          <a href="/#projects">Projects</a>
          </li>
          <li className="mx-10 font-medium hover:underline hover:underline-offset-4 decoration-4">
          <a href="/#about">About</a>
          </li>
          <li className="mx-10 font-medium hover:underline hover:underline-offset-4 decoration-4">
          Blog
          </li>
          <li className="mx-10 font-medium hover:underline hover:underline-offset-4 decoration-4">
          <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

