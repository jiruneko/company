import Image from "next/image";
import React from "react";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl text-blue-950 font-bold ">
          Key Features Of The Product
        </h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
        当社の提供するソフトウェアは、高性能で際立っており、驚異的な速度とシームレスなマルチタスクを実現します。
        </p>
      </div>
      {/* Main grid  */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Inner grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 1st box  */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="bg-white p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700 mt-0 letter-spacing">
              Web developpment
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
            要望に合わせたWebアプリを開発。ECサイトからブログアプリ、独自のSNSまで様々な業務環境及びサービスを実現します。
            </p>
          </div>
          {/* 2nd box  */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="bg-white p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <GoWorkflow className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
              Metaverse
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              バーチャル上で人と人とが繋がれる空間をご用意。企業やお店だけでなく、福祉分野でもその利便性と安心感が注目されています。
            </p>
          </div>
          {/* 3rd box  */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="bg-white p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <LuPen className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
               Mobile App development
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              お持ちのスマートフォンやタブレットで、いつでもどこでも端末からログインできます。もちろんWebアプリとの連携も行います！
            </p>
          </div>
          {/* 4th box  */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="bg-white p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdAccessAlarm className="w-6 h-6 text-orange-400" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                AI App development
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              機械学習でのシステムだけでなく、昨今注目を浴びている生成AIの開発やソリューションも提示・解決いたします。開発のご相談から承ります。
            </p>
          </div>
        </div>
        {/* Image Content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <Image src="/images/f1.png" alt="feature" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
