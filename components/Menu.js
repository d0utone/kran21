import Link from "next/link";

function Menu() {
  const navItems = [{ label: "Home", link: "/" }];

  return (
    <header className="fixed shadow-md z-50 w-full px-12 py-4 flex justify-between items-center">
      <Link href="/">KRAN.vc</Link>
      <nav className="hidden md:flex space-x-10">
        {navItems.map((n, idx) => (
          <div className="relative" key={idx}>
            <button type="button" className=" group" aria-expanded="false">
              <Link href={n.link}>{n.label}</Link>
            </button>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Menu;
