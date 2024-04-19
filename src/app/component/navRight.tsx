import Image from "next/image";
import { ArrowRightLeft, BoomBox, Gift, Search } from "lucide-react";
import Link from "next/link";
import Dot from "./etc/dot";
import { Button } from "@/components/ui/button";

export default function NavRight() {
    const data = [
        {
            id: 1,
            name: "Hữu Điền",
            img: "/ava2.jpg",
        },
        {
            id: 2,
            name: "Duy Đăng",
            img: "/ava3.jpg",
        },
        {
            id: 3,
            name: "Hữu Tài",
            img: "/ava6.png",
        },
        {
            id: 4,
            name: "Minh Trung",
            img: "/ava4.jpg",
        },
        {
            id: 5,
            name: "Phạm Hoàng",
            img: "/ava5.jpg",
        },
        {
            id: 6,
            name: "Nguyễn Kim Anh",
            img: "/ava6.jpg",
        },
        {
            id: 7,
            name: "Phạm Trần Đăng Khoa",
            img: "/ava7.jpg",
        },
        {
            id: 8,
            name: "Nguyễn Trọng Vũ",
            img: "/ava8.jpg",
        },
    ];

    return (
        <div className="w-1/3 px-5 py-3   ">
            <div className="fixed z-10 flex flex-col items-end pr-4  ">
                <div className="w-[80%] ">
                    <div className="sponsored ">
                        <h1 className="text-lg">Sponsored</h1>
                        <div className="flex items-center gap-2 hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                            <div className=" h-[90px] overflow-hidden rounded-lg">
                                <Image className="rounded-lg" width={150} height={100} src="/status1.jpg" alt="" />
                            </div>
                            <div className="">
                                <h3>Câu chuyện cười tiểu phẩm hài hước </h3>
                                <p>digikey.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                            <div className=" h-[90px] overflow-hidden rounded-lg">
                                <Image className="rounded-lg" width={150} height={100} src="/status3.jpg" alt="" />
                            </div>
                            <div className="">
                                <h3>Ôi đàn bà là những niềm dauuu </h3>
                                <p>datafetch.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#3e4042] my-2"></div>
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg">Your Pages and profiles</h1>
                            <Dot />
                        </div>
                        <div className="flex gap-2 items-center hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="rounded-full" width={45} height={45} src="/shortcut5.jpg" alt="" />
                            </div>
                            <h3>Người của tương lai</h3>
                        </div>
                        <div className="">
                            <div className="flex gap-2 hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                                <ArrowRightLeft size={20} />
                                <p>Switch to Page</p>
                            </div>
                            <div className="flex gap-2 hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                                <BoomBox size={20} />
                                <p>Switch to Page</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#3e4042] my-2"></div>
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className="text-lg">Friend Request</h1>
                            <Link className="text-[#2176ff]" href="#">
                                See All
                            </Link>
                        </div>
                        <div className="w-full flex items-center gap-4 hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                            <Image className="rounded-full" width={50} height={50} src="/ava2.jpg" alt="" />
                            <div className="w-full">
                                <div className="flex justify-between ">
                                    <h3>Duyên Lê</h3>
                                    <div className="flex gap-1 items-center">
                                        <p className="text-[#2176ff]">2h </p>
                                        <div className="w-2 h-2 bg-[#2176ff] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-1">
                                    <Button className="text-white bg-[#2176ff] w-full">Confirm</Button>
                                    <Button className="text-white bg-[#444546] w-full">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#3e4042] my-2"></div>

                    <div className="">
                        <h1 className="text-lg">Birthdays</h1>
                        <div className="flex gap-3 items-center hover:bg-[#303031] p-2 rounded-lg cursor-pointer">
                            <Gift color="#38abfb" size={50} />
                            <p>
                                <b>Nhâm Linh</b> and <b>Phạm Thy</b> have their birthdays today
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-[#3e4042] my-2"></div>
                    <div className="my-2">
                        <div className="flex justify-between">
                            <h1>Contacts</h1>
                            <div className="flex gap-5">
                                <Search />
                                <Dot></Dot>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <Image width={50} height={50} src="/ava3.jpg" alt=""></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
