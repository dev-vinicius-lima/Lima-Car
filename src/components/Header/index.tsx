import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logoLima from "../../assets/lima-veiculos.jpg";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

const Header = () => {
  const { signed, loadingAuth } = useContext(AuthContext);

  return (
    <div className="w-full flex items-center justify-center h-18 bg-white drop-shadow mb-4">
      <header className="flex w-full max-w-7xl items-center justify-between px-10 mx-auto">
        <Link to={"/"}>
          <img src={logoLima} alt="logo do site" className="w-full h-20" />
        </Link>
        {!loadingAuth && signed && (
          <Link to={"/dashboard"}>
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiLogIn size={24} color="#000" />
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to={"/login"}>
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiUser size={24} color="#000" />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
