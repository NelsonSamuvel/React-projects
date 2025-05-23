import logo from "../assets/svg/logo.svg";

const Header = () => {
  return (
    <div className="col-span-3  px-4 py-1">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <h1 className="text-2xl font-semibold">
          Flip-<span className="text-amber-600">IQ</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Header;
