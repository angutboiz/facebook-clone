import Image from "next/image";
import { Search } from "lucide-react";
import Story from "./component/section/story";
import WhatYourMind from "./component/section/whatyourmind";
import Status from "./component/section/status";
export default function Home() {
    return (
        <div className="w-[50%]">
            <Story></Story>
            <WhatYourMind></WhatYourMind>
            <Status></Status>
        </div>
    );
}
