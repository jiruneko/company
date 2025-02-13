import BoxText from "@/components/Helper/BoxText";
import React from "react";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <BoxText>Our Services</BoxText>
        {/* heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Our Services Made For You?
        </h1>
        {/* description */}
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%] xl:w-[50%] text-gray-600">
        当社は、Web開発、AI技術、クラウドソリューションを活用し、多様なWebサービスを提供する企業です。システム開発から運用保守まで一貫対応し、最新技術を駆使して、効率的かつ革新的なサービスを実現します。
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* 1st Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaRocket className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-600">
                スタートアップ企業様の素早い業務のご依頼にもすぐに対応！　是非ともお任せください。
              </p>
            </div>
          </div>
          {/* 2nd Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaBriefcase className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Bussiness</p>
              <p className="text-sm text-gray-600">
              企業のDX推進を支援し、最適なシステム開発を通じて業務効率化と競争力強化を実現します。
              </p>
            </div>
          </div>
          {/* 3rd Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-600">
               規模の大小は問いません。オリジナルECサイトが必要になった時は是非おたよりください。
              </p>
            </div>
          </div>
          {/* 4th Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Digital Design</p>
              <p className="text-sm text-gray-600">
                本職のWebデザイナーが美しいグラフィックとイラストであなたのサイトを唯一無二のものに！
              </p>
            </div>
          </div>
          {/* 5thService */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Unlimited Colors
              </p>
              <p className="text-sm text-gray-600">
                最良のスタイルシート言語で見栄えも良くカラフルなデザインやモノトーンにも対応。
              </p>
            </div>
          </div>
          {/* 6th Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
              <FaChess className="w-6 h-6 text-orange-400" />
            </div>
            {/* text content */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Strategy Solution
              </p>
              <p className="text-sm text-gray-600">
              多様なITソリューションを提供。皆様の会社のビジネスにも出張・協力致します！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
