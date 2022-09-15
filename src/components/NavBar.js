import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((e, i) => {
        const href = "#" + e;
        return (
          <a key={i} href={href}>
            {e}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
