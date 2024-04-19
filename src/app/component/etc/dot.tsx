import React from "react";

export default function Dot() {
    return (
        <div className="w-[30px] h-[30px] flex items-center justify-center gap-[2px] rounded-full hover:bg-[#303031] cursor-pointer">
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
        </div>
    );
}
