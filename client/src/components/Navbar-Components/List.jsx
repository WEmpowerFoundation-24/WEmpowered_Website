import { navlink } from "/src/utils/NavList";

export default function List() {
  return (
    <>
        {navlink.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="hover:text-white cursor-pointer text-lg font-Gilroy-500 hover:font-bold"
            >
              {link.title}
            </a>
          </li>
        ))}
    </>
  );
}