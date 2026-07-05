export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-violet-400">
          Loom And Lite
        </h1>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#" className="transition hover:text-violet-400">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-violet-400">
              Tutorials
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-violet-400">
              Categories
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-violet-400">
              AI Assistant
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-violet-400">
              Login
            </a>
          </li>
        </ul>

        <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold transition hover:bg-violet-500">
          Get Started
        </button>
      </nav>
    </header>
  );
}
