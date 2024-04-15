import Image from "next/image";
import { Search, Facebook, Tv, Store, Home, UsersRound, Gamepad2 } from "lucide-react";
export default function Header() {
    return (
        <div className="bg-[#242526] flex items-center  justify-between text-[#bbb] px-5 py-2">
            <div className="logo flex gap-2 ">
                <div className="bg-[#0866FF] w-[40px] h-[40px] rounded-full flex justify-center items-end">
                    <Facebook color="" fill="#fff" size={35} />
                </div>
                <div className="search rounded-3xl bg-[#3a3b3c] flex gap-3 px-3 py-2 justify-center items-center">
                    <Search color="#ccc" size={20} />
                    <input type="text" className="border-none outline-none bg-[#3a3b3c] " placeholder="Search Facebook..." />
                </div>
            </div>
            <div className="flex gap-5 items-center w-1/3">
                <Home />
                <Tv />
                <Store />
                <UsersRound />
                <Gamepad2 />
            </div>
            <div className="profile w-1/3">profile</div>
        </div>
    );
}
