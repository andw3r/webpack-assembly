import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);

  // locking body when nav is active
  useEffect(() => {
    activeNav
      ? document.body.classList.add("locked")
      : document.body.classList.remove("locked");
  });

  return (
    <nav className={activeNav ? "nav active" : "nav"}>
      <div class="container">
        <div className="nav__wrapper">
          <div class="nav__logo">
            <a href="#">#LOGO</a>
          </div>
          <ul class="menu">
            <li class="menu__item">
              <a href="#" class="menu__item-link">
                Portfolio
              </a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__item-link">
                Info
              </a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__item-link">
                Contacts
              </a>
            </li>
          </ul>
          <div
            class={activeNav ? "burger active" : "burger"}
            onClick={() => {
              setActiveNav(!activeNav);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
