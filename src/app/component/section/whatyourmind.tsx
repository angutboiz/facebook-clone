import Image from "next/image";
import { Plus, Laugh, Camera, Video } from "lucide-react";
import Link from "next/link";

export default function WhatYourMind() {
    return (
        <div className="bg-[#242526] p-4 rounded-lg my-4">
            <div className="flex flex-col gap-3 ">
                <div className="flex gap-3">
                    <Image className="rounded-full" width={40} height={40} src="/avatar.jpg" alt="" />
                    <input className="bg-[#3A3B3C] py-2 px-4 rounded-full w-full" type="text" placeholder="What's on your mind, An?" />
                </div>
                <div className="border-t border-[#575757]"></div>
                <div className="flex justify-between items-center px-10">
                    <div className="flex gap-3">
                        <Video color="#EA2848" />
                        <h1>Live video</h1>
                    </div>
                    <div className="flex gap-3">
                        <Camera color="#45BD62" />
                        <h1>Photo/Video</h1>
                    </div>
                    <div className="flex gap-3">
                        <Laugh color="#F7B928" />
                        <h1>Live video</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
