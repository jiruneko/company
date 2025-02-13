"use client";
import BoxText from "@/components/Helper/BoxText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* テキストコンテンツ */}
        <div className="lg:col-span-2">
          <BoxText>Our Team</BoxText>
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            Our Team of Exceptional Talent, Innovation, and Vision
          </h1>
          <p className="mt-4 text-gray-700">
            多様な専門スキルを持つエンジニアやデザイナーが協力し、最先端の技術で高品質なサービスを提供。柔軟な発想と迅速な対応力を活かし、クライアント様の課題解決に全力を尽くします。
          </p>
          <div className="mt-8">
            {/* 修正: Link を使用して /team に遷移できるようにする */}
            <Link
              href="/team"
              className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Our Team</span>
            </Link>
          </div>
        </div>

        {/* 画像コンテンツ */}
        <div className="lg:col-span-3 flex flex-wrap justify-center gap-6">
          {/* 1つ目の画像 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="relative overflow-hidden w-64"
          >
            <Image
              src="/images/daihyo.jpg"
              alt="team"
              width={250}
              height={300}
              className="rounded-lg w-64 h-68 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-64 h-[5rem] p-4 bg-green-500 rounded-lg text-center">
              <p className="text-lg text-white font-bold">KENJI EIZUKA</p>
              <p className="text-gray-200">(Founder ＆ Engineer)</p>
            </div>
          </div>

          {/* 2つ目の画像 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="relative overflow-hidden w-64"
          >
            <Image
              src="/images/pink.jpg"
              alt="team"
              width={250}
              height={300}
              className="rounded-lg w-64 h-68 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-64 h-[5rem] p-4 bg-rose-500 rounded-lg text-center">
              <p className="text-lg text-white font-bold">AUDREY</p>
              <p className="text-gray-200">(Web Designer & Artist)</p>
            </div>
          </div>

          {/* 3つ目の画像 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="relative overflow-hidden w-64"
          >
            <Image
              src="/images/blue.jpg"
              alt="team"
              width={250}
              height={300}
              className="rounded-lg w-64 h-68 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-64 h-[5rem] p-4 bg-blue-500 rounded-lg text-center">
              <p className="text-lg text-white font-bold">TETSUYA</p>
              <p className="text-gray-200">(Accounting)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
