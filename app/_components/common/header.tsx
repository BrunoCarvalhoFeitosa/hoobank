"use client"
import { navigation } from "@/constants"
import Link from "next/link"
import { HoobankLogoSvg } from "@/public/svg/hoobank-logo-svg"

export const Header = () => {
    return (
        <header className="mx-auto py-5 px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
                <div>
                    <Link href="/">
                        <HoobankLogoSvg width="180" height="45" />
                    </Link>
                </div>
                <div className="relative z-10">
                    <ul className="flex items-center gap-7 md:gap-10">
                        {navigation.map((item) => (
                            <li
                                key={item.id}
                                className="text-sm md:text-base text-white hover:text-gray-400 transition-colors duration-300"
                            >
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}