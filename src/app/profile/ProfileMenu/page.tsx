"use client";
import { useContext } from "react";
import { NavContext } from "@/context/nav-context";

import Link from "next/link";
import Image from "next/image";
import { div } from "framer-motion/client";


const LINKS = [
    {
        id: 1,
        name: "Location",
        href: "/",
    },
    {
        id: 2,
        name: "Change password",
        href: "/menu",
    },
    {
        id: 3,
        name: "Shipping",
        href: "/about",
    },
    {
        id: 4,
        name: "Payment",
        href: "/contact",
    },
    {
        id: 5,
        name: "offer",
        href: "/contact",
    },
    {
        id: 6,
        name: "FAQ",
        href: "/contact",
    },
];
export default function ProfileMenu() {
    const { closeProfile } = useContext(NavContext);
    return (
        <div className="flex justify-end">
            <section className=" absolute w-[350px] h-[430px]  bg-primary justify-end border-none text-white px-2 border  z-10">
                <div className="flex  items-center gap-2 p-4   max-w-sm mx-auto">
                    <Image
                        src="/images/ronaldo.jpg" // ✅ put your image in /public/profile.jpg
                        alt="Profile"
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Ronaldo</h2>
                        <p className="text-gray-200 text-sm">Location</p>
                    </div>
                </div>
                <div className=" flex mt-6 flex-col gap-4 px-2">

                    {LINKS.map((link) => (
                        <Link key={link.id} href={link.href} onClick={closeProfile}>
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex justify-center">
                        <button className="flex w-30 items-center gap-2 justify-center bg-white text-primary p-2 rounded-xl hover:bg-white transition duration-300  ">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </section>

        </div>

    );
}
