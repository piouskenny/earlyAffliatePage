import Logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="bg-white py-3 flex items-center justify-between">
      {/* EarlyLogo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="md:w-20 md:h-10 w-16 h-8 mr-2" />
      </div>

      <div className="links flex items-center">
        <a
          href="https://early.school/affiliate/?page=user"
          className="bg-red-600 text-white px-10 rounded-full py-1 md:py-2"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Nav;
