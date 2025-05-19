function Navbar() {
  const navItems = ['Services', 'Infrastructure', 'Products', 'Contact Us'];

  return (
    <div className="flex justify-center items-center gap-12 py-1 bg-red-500">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 rounded-md hover:bg-white text-white font-orbitron hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
          <h1 className="text-xl font-bold">{item}</h1>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
