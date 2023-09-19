export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#47B2E4]  px-10 py-4 text-white">
      <h1 className="text-3xl font-semibold">Simple Header</h1>
      <nav className="space-x-1 font-bold text-white">
        <a href="#Home" className="rounded-md bg-white px-3 py-2 text-[#47B2E4]">
          Home
        </a>
        <a href="#Newsletter" className="rounded-md px-3 py-2 hover:bg-white hover:text-[#47B2E4]">
          Newsletter
        </a>
        <a href="#Contact" className="rounded-md px-3 py-2 hover:bg-white hover:text-[#47B2E4]">
          Contact
        </a>
      </nav>
    </header>
  )
}
