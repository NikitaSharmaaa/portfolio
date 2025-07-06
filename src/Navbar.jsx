export default function Navbar() {
  return (
    <nav className="text-white sticky px-4 sm:px-6 py-4 bg-gradient-to-r from-black to-[#4B0000] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-heading font-italic">Nikita Sharma</h1>
        <ul className="flex flex-wrap justify-center gap-4 text-body font-medium">
          <li><a href="#home" className="hover:underline underline-offset-4 cursor-pointer">Home</a></li>
          <li><a href="#experience" className="hover:underline underline-offset-4 cursor-pointer">Projects</a></li>
          <li><a href="#skills" className="hover:underline underline-offset-4 cursor-pointer">Skills</a></li>
          <li><a href="#beyond" className="hover:underline underline-offset-4 cursor-pointer">Beyond Code</a></li>
          <li><a href="#contact" className="hover:underline underline-offset-4 cursor-pointer">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
