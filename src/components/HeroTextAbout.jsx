import React from "react";
import { FaFacebook, FaHandHoldingUsd, FaInstagram, FaNapster, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLinuxprofessionalinstitute } from "react-icons/si";

function HeroTextAbout() {
    return (
        <div>
            <div className="container lg:px-[128px] px-4 mx-auto">
                <div className="flex-wrap lg:flex md:flex md:justify-between lg:justify-between w-[100%] mt-5 flex">
                    <h1 className="text-[34px] font-bold text-orange-600 lg:w-[30%] md:w-[30%] rounded-sm hover:bg-[#f8f0f0] p-3">
                        Introduction <span className="text-indigo-900">To Best</span> <br />
                        <span className="text-indigo-900">Digital Agency!</span>
                    </h1>
                    <p className="text-[18px] text-gray-700 lg:w-[30%] md:w-[30%] hover:bg-[#f8f0f0] p-3 rounded-sm ">
                        Welcome to our world of creativity and innovation. At Our SHop, we are
                        passionate about delivering unique and impactful experiences through
                        our work. 
                    </p>
                    <p className="text-[18px] text-gray-700 lg:w-[30%] md:w-[30%] hover:bg-[#f8f0f0] p-3 rounded-sm">
                        Founded on the belief that great work starts with great collaboration,
                        our team is dedicated to working closely with clients to understand
                        their vision and turn it into reality.
                    </p>
                </div>

                <h1 className="text-center mt-15 text-[40px] font-bold">About Us</h1>
                <div className="w-[100%] flex justify-between lg:flex-nowrap md:flex-wrap flex-wrap mt-[-30px]">
                    <div className="flex items-center md:w-[48%] mt-15 gap-3 bg-[#ddd6d6] p-5 rounded-xl lg:w-[30%] bg-sw hover:translate-x-[10px] hover:translate-y-[-10px] transition-all">
                        <div className="w-[50px] p-3 rounded-full h-[50px] flex items-center justify-center bg-orange-600">
                            <FaHandHoldingUsd className="text-white text-[34px]"/>
                        </div>
                        <div>
                            <span className="text-bold text-[24px]">Finance Analysis</span>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste.</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-5 md:mt-15 md:w-[48%] gap-3 bg-[#ddd6d6] p-5 rounded-xl lg:w-[30%]  bg-sw hover:translate-x-[10px] hover:translate-y-[-10px] transition-all">
                        <div className="w-[50px] p-3 rounded-full h-[50px] flex items-center justify-center bg-black">
                            <FaNapster className="text-white text-[34px]"/>
                        </div>
                        <div>
                            <span className="text-bold text-[24px]">Best Price Guaranteed</span>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste.</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-5 lg:mt-15 md:mt-7 md:w-[48%] gap-3 bg-[#ddd6d6] p-5 rounded-xl lg:w-[30%]  bg-sw hover:translate-x-[10px] hover:translate-y-[-10px] transition-all">
                        <div className="w-[50px] p-3 rounded-full h-[50px] flex items-center justify-center bg-orange-600">
                            <SiLinuxprofessionalinstitute className="text-white text-[34px]"/>
                        </div>
                        <div>
                            <span className="text-bold text-[24px]">Professional Team</span>
                            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-25 md:mt-20 w-[100%]">
                    <div className="lg:w-[65%] md:w-[65%] w-[100%] mt-5 lg:mt-0 md:mt-0 relative lg:h-[450px] md:h-[300px]">
                        <img src="https://invozone.com/static/d505d0e5c358edea4ecc69a274b7c653/build_web_development_team_structure_bb9fd16c6d.webp" alt=""
                        className="w-full h-full object-center rounded-xl"/>
                        <div className="lg:w-[80%] md:w-[80%] w-[100%] lg:absolute lg:end-[-55%] h-[120px] md:absolute md:end-[-55%] mt-5 lg:mt-0 md:mt-0 lg:top-15 md:top-7 lg:h-[350px] md:h-[240px]">
                            <img src="https://www.amexiogroup.com/wp-content/uploads/2023/08/workplace-full.jpeg" 
                            alt="" className="w-full h-full object-center rounded-xl"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=" bg-[#e6e2e2] ">
                <div className="container lg:px-[128px] px-4 mx-auto">
                    <div className="lg:mt-40 md:mt-20 pt-20 mt-10"> 
                    <h1 className="text-orange-600 text-[40px] font-bold text-center">Team <span className="text-indigo-900">Members</span></h1>
                    <p className="text-center w-[500x] text-[16px] mt-2">Lorem ipsum dolor sit amet consecteturReprehenderit voluptatum repellendus <br /> 
                        quidem eaque Lorem ipsum dolor sit amet consectetur <br/></p>

                    <div className="w-[100%] flex gap-[2%] flex-wrap lg:flex-nowrap md:flex-wrap py-20">

                        <div className="lg:w-[24%] w-[100%] mb-5 md:w-[49%] bg-[#f7f1f1] rounded-xl h-[400px] bg-sw relative">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" 
                            className="w-full h-[65%] rounded-t-xl object-center" alt="" />
                            <div className="bg-orange-600 w-[60%] mx-auto rounded-2xl p-5 relative top-[-20px]">
                                <h1 className="text-[#ece1e1] text-[20px]">Long Menyoeung</h1>
                                <span className="text-[#ece1e1] text-[16px]">Front-End Developer</span>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaFacebook className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaInstagram className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaYoutube className="text-[24px]"/></span>
                            </div>
                        </div>

                        <div className="lg:w-[24%] w-[100%] mb-5 md:w-[49%] bg-[#f7f1f1] rounded-xl h-[400px] bg-sw relative">
                            <img src="https://t3.ftcdn.net/jpg/01/42/01/84/360_F_142018449_yR0avsaJqbIx8NA47sINMoaxdtn1sPzh.jpg" 
                            className="w-full h-[65%] rounded-t-xl object-center" alt="" />
                            <div className="bg-orange-600 w-[60%] mx-auto rounded-2xl p-5 relative top-[-20px]">
                                <h1 className="text-[#ece1e1] text-[20px]">Mohamad Salah</h1>
                                <span className="text-[#ece1e1] text-[16px]">Back-End Developer</span>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaFacebook className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaInstagram className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaYoutube className="text-[24px]"/></span>
                            </div>
                        </div>

                        <div className="lg:w-[24%] w-[100%] mb-5 md:w-[49%]  bg-[#f7f1f1] rounded-xl h-[400px] bg-sw relative">
                            <img src="https://www.womenofinfluence.ca/wp-content/uploads/2021/02/Jessica_ketwaroo_green-1-e1692387031590.png" 
                            className="w-full h-[65%] rounded-t-xl object-center" alt="" />
                            <div className="bg-orange-600 w-[60%] mx-auto rounded-2xl p-5 relative top-[-20px]">
                                <h1 className="text-[#ece1e1] text-[20px]">Anna Emmy</h1>
                                <span className="text-[#ece1e1] text-[16px]">UX/UI Designer</span>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaFacebook className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaInstagram className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaYoutube className="text-[24px]"/></span>
                            </div>
                        </div>

                        <div className="lg:w-[24%] w-[100%] mb-5 md:w-[49%] bg-[#f7f1f1] rounded-xl h-[400px] bg-sw relative">
                            <img src="https://media.sgff.io/sgff_r1eHetbDYb/2019-07-01/1562003484024/img_chapter_2.png" 
                            className="w-full h-[65%] rounded-t-xl object-center" alt="" />
                            <div className="bg-orange-600 w-[60%] mx-auto rounded-2xl p-5 relative top-[-20px]">
                                <h1 className="text-[#ece1e1] text-[20px]">Ema Hernandes</h1>
                                <span className="text-[#ece1e1] text-[16px]">Graphic Designer</span>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaFacebook className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaInstagram className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaTwitter className="text-[24px]"/></span>
                                <span className="bg-white bg-sw rounded-full p-1 hover:scale-110 cursor-pointer"><FaYoutube className="text-[24px]"/></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroTextAbout;
