"use client";
import Link from "next/link";

// for the active classe
import { usePathname } from "next/navigation"; //can not do it on the srever

interface NavLinkType {
  name: string;
  url: string;
}

const navLinks: NavLinkType[] = [
  { name: "home", url: "/" },
  { name: "pokemon", url: "/pokemon" },
  { name: "types", url: "/types" },
  { name: "about", url: "/about" },
];

const Navigation = () => {
  const path = usePathname();
  // for class active
  return (
    <nav className="menu">
      {navLinks.map((item: NavLinkType, index: number) => (
        <Link
          key={index}
          className={`menu__item--${item.name} ${
            path === item.url ? "active" : ""
          }`}
          href={item.url}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
