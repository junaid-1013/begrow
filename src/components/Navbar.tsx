"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "#home" },
        { title: "About", path: "#about" },
        { title: "Services", path: "#services" },
        { title: "Projects", path: "#projects" },
        { title: "Blogs", path: "#blogs" },
        { title: "Contact", path: "#contact" },
    ]

    return (
        <nav className="bg-white w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-purple-600">Begrowsoft</h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex lg:space-x-12 md:space-y-0 md:space-x-6">
                        {menus.map((item, idx) => (
                            <li key={idx}
                                className="text-gray-600 hover:text-purple-600 hover:font-semibold
                                link-underline link-underline-black link-underline:hover ">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                        <div className="flex items-center space-x-2 p-2">
                            <Phone className="h-5 w-5 flex-none text-purple-600 fill-purple-600" />
                            <p
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"

                            >+92-324-9534084</p>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}