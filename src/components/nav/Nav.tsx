import Link from "next/link";
import Logo from "../ui/logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className=" flex flex-row justify-between items-center px-5 py-4  ">
      {/* menu-icon */}
      <AiOutlineMenu className="cursor-pointer  hover:text-blue-500" />
      <div className="flex flex-row gap-2 justify-between items-center  ">
        {/* logo */}
        <Logo />
      </div>

      {/* only for desktop */}
      {/* <div className="hidden sm:flex flex-row gap-2 ">
        <Link href="">example</Link>
    
      </div> */}

      <div className="flex flex-row gap-2 ">
        {/* cart-icon */}
        <AiOutlineShoppingCart className="cursor-pointer  hover:text-blue-500" />

        {/* user-icon */}
        <AiOutlineUser className="cursor-pointer hover:text-blue-500" />
      </div>
    </nav>
  );
}
