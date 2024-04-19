import Image from "next/image";
import { Globe, Frown, ThumbsUp, Smile, Share2, MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function Status() {
    const data = [
        {
            id: 0,
            name: "Hai Chiều",
            desc: "Chỉ ai trong cuộc mới hiểu...",
            imgName: "/haichieu.jpg",
            url: "/status1.jpg",
        },

        {
            id: 1,
            name: "Diêm thống Nhất",
            desc: "Factos cho anh em đội đỏ trong hang 🤡🔥",
            imgName: "/thongnhat.jpg",
            url: "/status2.jpg",
        },
        {
            id: 2,
            name: "Hội người Hèn",
            desc: "Gòi xog",
            imgName: "/hoinguoihen.jpg",
            url: "/status3.jpg",
        },
        {
            id: 3,
            name: "Dương Sơn Lâm",
            desc: "Vốn là người hàng ngày tiếp cận với nhiều phóng sự về chuyện lừa đảo trên mạng trong “Chuyển động 24h” và cũng là người luôn ý thức sâu sắc việc mình là đàn ông đã có vợ, tôi trả lời ngay, không nghĩ nhiều. ",
            imgName: "/duongsonlam.jpg",
            url: "/status4.jpg",
        },
        {
            id: 4,
            name: "Kiến Không Ngủ",
            desc: "‼️🔥 Địa điểm hot nhất lúc này: Sơn La",
            imgName: "/kienkhongngu.jpg",
            url: "/status5.jpg",
        },
    ];

    return (
        <div className=" rounded-lg my-4">
            {data.map((item, index) => (
                <div className="my-5 bg-[#242526]" key={index}>
                    <div className="flex gap-3 items-center px-4 pt-4">
                        <div className="">
                            <Image width={40} height={40} src={item.imgName} alt="" className="rounded-full" />
                        </div>
                        <div className="">
                            <h1 className="text-white font-bold">{item.name}</h1>
                            <div className="flex gap-2 items-center text-[14px]">
                                <p>1d</p>
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <Globe size={14} />
                            </div>
                        </div>
                    </div>
                    <p className="text-white my-3 px-4">{item.desc} </p>
                    <div className="relative bg-white w-full h-[500px]">
                        <div className="absolute w-full h-full">
                            <Image style={{ objectFit: "cover" }} fill src={item.url} alt="" />
                        </div>
                    </div>
                    <div className=" px-4 py-2">
                        <div className="flex justify-between items-center py-2">
                            <div className="flex gap-1">
                                <Smile color="#FEE57F" />
                                <ThumbsUp color="#097EFF" />
                                <Frown color="#FAB655" />
                                <p className="ml-1 ">6.1K</p>
                            </div>
                            <div className="flex gap-2">
                                <p>188 comments</p>
                                <p>49 shares</p>
                            </div>
                        </div>
                        <div className="flex justify-between border-t border-[#ccc] py-2">
                            <div className="flex flex-1 justify-center gap-1  items-center hover:bg-[#303031] py-2 rounded-lg cursor-pointer">
                                <ThumbsUp />
                                <p>Like</p>
                            </div>
                            <div className="flex flex-1 justify-center gap-1  items-center hover:bg-[#303031] py-2 rounded-lg cursor-pointer">
                                <MessageCircleMore />
                                <p>Comment</p>
                            </div>
                            <div className="flex flex-1 justify-center gap-1  items-center hover:bg-[#303031] py-2 rounded-lg cursor-pointer">
                                <Share2 />
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
