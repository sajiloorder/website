"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const MobileNav = () => {

    const [open, setOpen] = useState(false)


    return (
        <div className=" ">
            <Image src="/menu.png"
                alt="" width={28}
                height={28}
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className="absolute bg-[#fae89e] text-teal-800 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link >
                    <Link href="/" >Contact</Link >
                    <Link href="/" >About</Link >
                    <Link href="/" >Cart(1)</Link >
                    <Link href="/" >Logout</Link >
                </div >
            )
            }
        </div >
    )
}
export default MobileNav