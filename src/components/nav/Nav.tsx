import Link from "next/link";
import Logo from "../ui/logo/Logo";

export default function Nav() {
  return (
    <nav className="flex  flex-row justify-between px-5 py-2 ">
      {/* menu-icon */}
      <div className="flex flex-row gap-2">
        <div>
          <button className="">Menu</button>
        </div>
        {/* logo */}
        <Logo />
      </div>
      <div className="flex flex-row gap-2">
        {/* cart-icon */}
        <div>
          <button>Cart</button>
        </div>
        {/* user-icon */}
        <div>
          <button>User</button>
        </div>
      </div>
    </nav>
  );
}
