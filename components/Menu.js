import Link from "next/link";
import Image from "next/image";

function Menu() {
  return (
    <header className="fixed z-50 w-full px-12 py-4 flex justify-center items-center">
      <Link href="/">
        <>
          {" "}
          <Image
            src="/kran.svg"
            alt="Logo"
            width={200}
            height={50}
            className="mt-4"
          />
        </>
      </Link>
    </header>
  );
}

export default Menu;
