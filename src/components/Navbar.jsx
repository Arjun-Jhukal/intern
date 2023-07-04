import { Link } from "react-router-dom";
import menuItems from "../data.json";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";

const Navbar = ({ onChange, onSubmit, searchValue }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [searchStatus, setSearchStatus] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const changeActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="header__logo">
            <Link to={"/"}>Jhukal A.</Link>
          </div>
          <ul className={showMobileMenu ? "navbar__items active" : "navbar__items"}>
            {menuItems.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link
                    to={`${navItem.linkTo}`}
                    className={activeMenu == navItem.menuLink ? "active" : ""}
                    onClick={() => changeActiveMenu(navItem.menuLink)}
                  >
                    {navItem.menuLink}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="navbar__btns">
            <button className="btn__search" onClick={() => setSearchStatus(!searchStatus)}>
              <AiOutlineSearch size={32} />
            </button>

            <button className="burger d-lg-none" onClick={toggleMobileMenu}>
              {!showMobileMenu ? <FaBars size={32} /> : <AiOutlineClose size={32} />}
            </button>
          </div>
          <form className={searchStatus ? "search__form active" : "search__form"} onSubmit={onSubmit}>
            <input type="search" placeholder="Search By Name" ref={inputFocus} value={searchValue} onChange={(e) => onChange(e)} />
            <button type="submit">
              <AiOutlineSearch size={32} />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
