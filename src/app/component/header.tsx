import Image from "next/image";
import { Search, Facebook, Tv, Store, Home, UsersRound, Gamepad2, Bell, MessageCircleMore, Aperture, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed z-10 w-full border-y border-[#393a3b] ">
            <div className="bg-[#242526] flex items-center justify-between text-[#bbb] px-5 py-2">
                <div className="logo flex gap-2 w-[25%] ">
                    <div className="bg-[#0866FF] w-[40px] h-[40px] rounded-full flex justify-center items-end">
                        <Facebook color="" fill="#fff" size={35} />
                    </div>
                    <div className="search rounded-3xl bg-[#3a3b3c] flex gap-3 px-3 py-2 justify-center items-center">
                        <Search color="#ccc" size={20} />
                        <input type="text" className="border-none outline-none bg-[#3a3b3c] hidden xl:block" placeholder="Search Facebook..." />
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-center w-[50%]">
                    <ul className="flex items-center justify-center w-[70%]">
                        <li className="flex-1 ">
                            <Link className="justify-center items-center flex  px-10 py-2 hover:bg-[#3A3B3C] hover:rounded-lg border-b-2 border-[#0866FF] text-[#0866FF]" href="#">
                                <Home />
                            </Link>
                        </li>
                        <li className="flex-1 ">
                            <Link className="justify-center items-center flex  px-10 py-2 hover:bg-[#3A3B3C] rounded-lg" href="#">
                                <Tv />
                            </Link>
                        </li>
                        <li className="flex-1 ">
                            <Link className="justify-center items-center flex  px-10 py-2 hover:bg-[#3A3B3C] rounded-lg" href="#">
                                <Store />
                            </Link>
                        </li>
                        <li className="flex-1 ">
                            <Link className="justify-center items-center flex  px-10 py-2 hover:bg-[#3A3B3C] rounded-lg" href="#">
                                <UsersRound />
                            </Link>
                        </li>
                        <li className="flex-1 ">
                            <Link className="justify-center items-center flex  px-10 py-2 hover:bg-[#3A3B3C] rounded-lg" href="#">
                                <Gamepad2 />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile w-[25%] ">
                    <ul className="flex justify-end items-center gap-3 text-white">
                        <li>
                            <Link href="#" className="flex justify-center items-center bg-[#3A3B3C] p-2 rounded-full hover:bg-[#3A3B3C]">
                                <Aperture />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex justify-center items-center bg-[#3A3B3C] p-2 rounded-full hover:bg-[#3A3B3C]">
                                <MessageCircleMore />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex justify-center items-center bg-[#3A3B3C] p-2 rounded-full hover:bg-[#3A3B3C]">
                                <Bell />
                            </Link>
                        </li>
                        <li className="relative">
                            <Link href="#">
                                <Image className="rounded-full" width={40} height={40} src="/avatar.jpg" alt="" />
                            </Link>
                            <ChevronDown size={15} className="absolute z-10 bottom-0 right-0 bg-[#3A3B3C] rounded-full w-4 h-4" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
