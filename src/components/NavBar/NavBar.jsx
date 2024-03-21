import React from "react";

import { RiMenu2Line } from "react-icons/ri";
import Link from "../Link/Link";

const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <RiMenu2Line className="text-2xl md:hidden" />
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
