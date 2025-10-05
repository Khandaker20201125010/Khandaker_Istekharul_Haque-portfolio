import Image from "next/image";
import projectBg from '../../../public/images/projectBg.png'

const AboutBanner = () => {
    return (
        <div>
            <div className="relative w-full h-[600px]">
                <Image
                    src={projectBg}
                    alt="Projects Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0  flex flex-col gap-5 items-center justify-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-white text-clip-text bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 uppercase">About Myself</h2>
                    <p className='text-gray-300 font-semibold'>A Full Stack Web Developer </p>
                </div>
            </div>

        </div>
    );
};

export default AboutBanner;