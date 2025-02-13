import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Image content */}
        <div>
            <Image src="/images/about.png" alt="about" width={600} height={600} />
        </div>
        <div>
        <BoxText>About us</BoxText>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]'>
        Everything you need to grow Your Business
        </h1>
        <p className='mt-3 leading-relaxed text-sm:text-base text-gray-700'>
        皆様のお店、会社などの成長に必要なビジネスのお手伝いに、全力で携わらせていただきます！まずはご相談から！ <br/>We will do our best to help you with the business you need to grow your store or company! Let's start with a consultation!
        </p>
        {/* <button className='mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967] cursor-pointer'>
        Learn More &#8594;
        </button> */}
        <div className='mt-8 border-1-2 border-gray-200'>
            <div className='ml-6'>
                <p className='text-gray-700 font-medium'>皆様が他で使用している他のツールで、データやアプリを確認することにも役に立ちます。<br/>The many integrations you can link to are very useful for seeing your data in other tools you use. &quot;
                </p>
              <div className='flex items-center space-x-6 mt-6'>
                <Image
                 src="/images/u1.jpg"
                 alt='user'
                 width={40}
                 height={40} className='rounded-full'
                  />
                  <div>
                  <p className='font-medium'>'Jessica Doe'</p>
                  <p className='text-gray-700 text-sm'>Web Developer @TechDev</p>
                  </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About