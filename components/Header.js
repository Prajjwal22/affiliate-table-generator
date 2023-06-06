import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full h-28 bg-yellow-400 mb-10">
      <div className="mx-auto max-w-6xl flex flex-row items-center justify-between w-full h-full">
        <span className="text-xl text-black font-bold">
          Affiliate Table Generator
        </span>
        <div className="flex flex-row gap-7 items-center">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer"><Link href="/">Top 3 Boxes</Link></span>
          <span className="cursor-pointer">Pros & Cons</span>
          <span className="cursor-pointer"><Link href="productbox">Product Box</Link></span>
          <span className="cursor-pointer bg-black text-yellow-400 p-2 rounded">Contact</span>
        </div>
      </div>
    </header>
  );
}
