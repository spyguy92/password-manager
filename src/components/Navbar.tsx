const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          Password
          <span className="text-green-500"> Manager/&gt;</span>
        </div>
        <a href="https://github.com/spyguy92/password-manager">
          <button className="text-white bg-green-700 my-5 rounded-full flex items-center justify-between ring-white ring-1">
            <img
              src="/icons/github-mark-white.png"
              className="p-1 w-10"
              alt=""
            />
            <span className="font-bold px-2">Github</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
