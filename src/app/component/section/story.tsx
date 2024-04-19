import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
export default function Story() {
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
        <div className="rounded-lg my-4  story">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/4">
                        <div className=" rounded-xl w-[150px] h-[230px] relative overflow-hidden  ">
                            <Image style={{ objectFit: "cover" }} fill src="/ava.jpg" alt="" />
                            <div className="absolute bg-[#242526] w-full bottom-0 h-[50px]  ">
                                <div className="absolute  w-[40px] h-[40px] bg-[#242526] flex justify-center items-center rounded-full top-[-18px] mx-auto left-0 right-0">
                                    <div className=" bg-[#233950] rounded-full w-[35px] h-[35px]  flex justify-center items-center">
                                        <Plus color="#0866FF" />
                                    </div>
                                </div>
                                <p className="text-center mt-5 text-sm">Create story</p>
                            </div>
                        </div>
                    </CarouselItem>
                    {data.map((item, index) => (
                        <CarouselItem className="basis-1/4" key={index}>
                            <div className="relative rounded-xl w-[150px] h-[230px] overflow-hidden  ">
                                <Image style={{ objectFit: "cover" }} fill src={item.url} alt="" />
                                <div className="absolute m-2">
                                    <div className="rounded-full overflow-hidden w-[40px] h-[40px] border-[4px] border-[#0866FF]">
                                        <Image width={40} height={40} src={item.imgName} alt="" />
                                    </div>
                                </div>
                                <p className="absolute bg-[#0000005b] font-bold text-white bottom-0  mx-auto text-center w-full text-[13px] pt-2">{item.name}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
