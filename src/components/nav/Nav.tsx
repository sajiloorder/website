import Link from "next/link";
import Logo from "../ui/logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";





export default function Nav() {
  return (
    <nav className=" flex flex-row bg-white text-primary justify-between items-center mb-2 px-4 py-3  ">
      {/* menu-icon */}
      <AiOutlineMenu className="cursor-pointer  hover:text-green-400" />

      {/* <MobileNav /> */}
      <div className="flex flex-row gap-2 justify-between items-center  ">
        {/* logo */}

        <Link href="/">
          <Logo />
        </Link>

      </div>

      {/* only for desktop */}
      {/* <div className="hidden sm:flex flex-row gap-2 ">
        <Link href="">example</Link>
    
      </div> */}

      <div className="flex flex-row gap-2 ">
        {/* cart-icon */}
        <AiOutlineShoppingCart className="cursor-pointer text-primary hover:text-green-400" />

        {/* user-icon */}
        <AiOutlineUser className="cursor-pointer text-primary  hover:text-green-400" />
      </div>
    </nav>
  );
}
