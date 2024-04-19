import Image from "next/image";
import { Contact, History, BookMarked, UsersRound, Tv, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavLeft() {
    return (
        <div className="w-1/3 px-5 py-3 hidden md:block">
            <div className="fixed z-10">
                <div className="">
                    <ul className="flex flex-col text-sm w-[80%] gap-1">
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/avatar.jpg" alt="" />
                                <h1 className="font-bold">Trọng An</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Contact size={30} color="#1C89F6" /> <h1 className="font-bold">Friends</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <History size={30} color="#2694E2" /> <h1 className="font-bold">Memories</h1>
                            </Link>
                        </li>{" "}
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <BookMarked size={30} color="#BE45C5" /> <h1 className="font-bold">Saved</h1>
                            </Link>
                        </li>{" "}
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <UsersRound size={30} color="#1A82F5" /> <h1 className="font-bold">Groups</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Tv size={30} color="#44D0C0" /> <h1 className="font-bold">Video</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <ChevronDown size={30} className="bg-[#303031] rounded-full" /> <h1 className="font-bold">See more</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="border-t border-[#ccc] my-2 w-[70%]"></div>
                <div className="">
                    <h1 className="py-2">Your shortcuts</h1>
                    <ul className="flex flex-col text-sm w-[70%] gap-1">
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/shortcut1.jpg" alt="" />
                                <h1 className="font-bold">Tuyển dụng thực tập IT</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/shortcut2.png" alt="" />
                                <h1 className="font-bold">Group WhiteHat</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/shortcut3.jpg" alt="" />
                                <h1 className="font-bold">Sinh viên DNTU</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/shortcut4.png" alt="" />
                                <h1 className="font-bold">Tiến lên Miền Nam Cybergame</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <Image className="rounded-full" width={40} height={40} src="/shortcut5.jpg" alt="" />
                                <h1 className="font-bold">J2TEAM Community</h1>
                            </Link>
                        </li>
                        <li className="hover:bg-[#303031] p-2 rounded-lg">
                            <Link href="#" className="flex items-center gap-3">
                                <ChevronDown size={30} className="bg-[#303031] rounded-full" /> <h1 className="font-bold">See more</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
