export default function Header() {
  return (
    <header className="bg-tailwindGreen flex items-center justify-between  px-10 py-4 text-white">
      <h1 className="text-3xl font-semibold">Simple Header</h1>
      <nav className="space-x-1 font-bold text-white">
        <a href="#Home" className="text-tailwindGreen rounded-md bg-white px-3 py-2">
          Home
        </a>
        <a href="#Newsletter" className="hover:text-tailwindGreen rounded-md px-3 py-2 hover:bg-white">
          Newsletter
        </a>
        <a href="#Contact" className="hover:text-tailwindGreen rounded-md px-3 py-2 hover:bg-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
