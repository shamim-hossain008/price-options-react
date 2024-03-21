import React, { useState } from "react";

import { RiCloseCircleLine, RiMenu2Line } from "react-icons/ri";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="p-6 bg-red-400">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <RiCloseCircleLine /> : <RiMenu2Line />}
      </div>
      <ul
        //   className={`md:flex duration-1000 absolute bg-red-400 px-6 shadow-lg rounded-2xl
        // ${open ? " " : "hidden"}`}
        className={`md:flex duration-1000 absolute md:static bg-red-400 px-6  rounded-2xl
      ${open ? "top-16" : "-top-32"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
