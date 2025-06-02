const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 fixed top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
