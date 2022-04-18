import { Fragment } from "react";
import React, { useState } from 'react';
import Slider from "react-slick";
import images from "assets/images/live-game/1.png";
import { Input } from "antd";

const Content = () => {
    const [currentNews, setCurrentNews] = useState(1);
    const settingsLiveGame = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,
        cssEase: "linear",
        appendDots: dots => <ul>{dots}</ul>,
        lazyLoad: true,
        prevArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="24.744" height="44.175" viewBox="0 0 24.744 44.175">
            <path id="Shape_670_copy" data-name="Shape 670 copy" d="M595.083,2302.383l16.654,16.419a3.22,3.22,0,0,0,4.5,0,3.111,3.111,0,0,0,0-4.443l-18.745-18.477a3.666,3.666,0,0,0-4.82,0l-18.744,18.477a3.111,3.111,0,0,0,0,4.443,3.217,3.217,0,0,0,4.5,0Zm0,0" transform="translate(-2294.974 617.171) rotate(-90)" fill="#2699fb" />
        </svg>

        ),
        nextArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="24.744" height="44.175" viewBox="0 0 24.744 44.175">
            <path id="Shape_670_copy" data-name="Shape 670 copy" d="M595.083,2302.383l16.654,16.419a3.22,3.22,0,0,0,4.5,0,3.111,3.111,0,0,0,0-4.443l-18.745-18.477a3.666,3.666,0,0,0-4.82,0l-18.744,18.477a3.111,3.111,0,0,0,0,4.443,3.217,3.217,0,0,0,4.5,0Zm0,0" transform="translate(2319.719 -572.996) rotate(90)" fill="#2699fb" />
        </svg>
        ),
        customPaging: i => (
            <div className="custom-dots">
                <div className="absolute animate-spin h-5 w-5 mr-3"></div>
                <div className="">{i + 1}</div>
            </div>
        )
    };
    const settingsContent = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        speed: 500,
        appendDots: dots => <div className="">{dots}</div>,
        lazyLoad: true,
        arrows: true,
        // appendArrows: (),
        nextArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
            <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(-8 -12)" fill="#2699fb" />
        </svg>
        ),
        prevArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
            <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(56 52) rotate(180)" fill="#2699fb" />
        </svg>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "30px",
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

        afterChange: current => setCurrentNews(current + 1),
    };
    const imagesLiveGame = [
        {
            active: true,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },
        {
            active: true,
            title: "Short Title"
        },
        {
            active: false,
            title: "Short Title"
        },

    ];

    return (
        <Fragment>
            <div className="min-h-screen bg-white w-full overflow-hidden">
                <div className="min-h-screen">
                    <div className="pt-28 pb-12 container mx-auto ">
                        <div className="">
                            <h3 className="text-[#2699FB] font-bold text-[45px] leading-10 mb-5">Exclusive Game Content</h3>
                            <p className="text-[#2699FB] font-normal text-[25px] leading-6 mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                        </div>

                    </div>
                    <div className="all-post">

                        <div className="w-full overflow-hidden py-8 relative">
                            <Slider {...settingsContent} className="slick-news ">
                                {imagesLiveGame.map((item, index) => (
                                    <div className="p-3">
                                        <div key={index} className="bg-[#D5ECFF] p-5 flex flex-col justify-between border border-[#2699FB] rounded min-h-[383px] relative">
                                            <div className="flex justify-end items-center ">

                                                <div className="flex w-[34px] h-[34px] bg-white rounded-full items-center justify-center relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.462" height="16.837" viewBox="0 0 18.462 16.837">
                                                        <path id="Path_328" data-name="Path 328" d="M0,10.062V0" transform="translate(9.199 1)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                                        <path id="Path_329" data-name="Path 329" d="M-1315.015-710.748l3.133,3.289,2.976-3.289" transform="translate(1321.05 718.983)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                                        <path id="Path_330" data-name="Path 330" d="M16.462-2.8V0H0V-2.8" transform="translate(1 15.837)" fill="none" stroke="#141414" stroke-linecap="round" stroke-width="2" />
                                                    </svg>
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75 z-0"></span>

                                                </div>


                                            </div>

                                            <div className="absolute overflow-hidden flex justify-center transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="120" viewBox="0 0 250 120">
                                                    <g id="Group_1428" data-name="Group 1428" transform="translate(11.245 7.678)" opacity="0.39">
                                                        <g id="Polygon_2" data-name="Polygon 2" transform="translate(-0.358 -0.005)" fill="#2699fb">
                                                            <path d="M 194.443603515625 112.5 L 189 112.5 L 0 112.5 L -5.443605422973633 112.5 L -1.896315813064575 108.3708953857422 L 92.60368347167969 -1.62910521030426 L 94.5 -3.836447477340698 L 96.39631652832031 -1.62910521030426 L 190.8963165283203 108.3708953857422 L 194.443603515625 112.5 Z" stroke="none" />
                                                            <path d="M 94.5 0 L 0 110 L 189 110 L 94.5 0 M 94.5 -7.672920227050781 L 199.8871917724609 115 L -10.88719177246094 115 L 94.5 -7.672920227050781 Z" stroke="none" fill="#bce0fd" />
                                                        </g>
                                                        <g id="Polygon_1" data-name="Polygon 1" transform="translate(117.642 47.995)" fill="#2699fb">
                                                            <path d="M 106.2348556518555 64 L 102 64 L 0 64 L -4.234857082366943 64 L -1.544585704803467 60.72945785522461 L 49.45541381835938 -1.270542860031128 L 51 -3.148271322250366 L 52.54458618164062 -1.270542860031128 L 103.5445861816406 60.72945785522461 L 106.2348556518555 64 Z" stroke="none" />
                                                            <path d="M 51 0 L 0 62 L 102 62 L 51 0 M 51 -6.296531677246094 L 110.4697341918945 66 L -8.469734191894531 66 L 51 -6.296531677246094 Z" stroke="none" fill="#bce0fd" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </Slider>
                            <div className="flex justify-center text-xl py-3 text-[#2699FB]">
                                <div className="font-bold text-xl ">{(currentNews < 10) ? '0' + currentNews.toString() : currentNews.toString()}</div>/{imagesLiveGame.length}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Content;