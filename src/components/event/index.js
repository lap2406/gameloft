import { Fragment } from "react";
import React, { useState } from 'react';
import Slider from "react-slick";


const Event = () => {
    const [currentNews, setCurrentNews] = useState(1);
    const settingsEvent = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "130px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3200,
        slidesToScroll: 1,
        speed: 500,
        appendDots: dots => <div className="">{dots}</div>,
        lazyLoad: true,
        arrows: true,
        pauseOnHover: false,
        // appendArrows: (),
        nextArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
            <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(-8 -12)" fill="#2699fb" />
        </svg>
        ),
        prevArrow: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
            <path id="arrow" d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z" transform="translate(56 52) rotate(180)" fill="#2699fb" />
        </svg>
        ),

        afterChange: current => setCurrentNews(current + 1),
        customPaging: i => (
            <div className="custom-dots relative text-[17px] font-normal text-[#2699FB]">
                <div className="spin circle flex items-center justify-center rounded-full w-9 h-9">{((i + 1) < 10) ? '0' + (i + 1).toString() : (i + 1).toString()}</div>

            </div>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "30px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,

                }
            }
        ],
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


    ];

    return (
        <Fragment>
            <div className="min-h-screen bg-[#D8EDFF] w-full overflow-hidden">
                <div className="min-h-screen">
                    <div className="sm:py-20 pt-14 pb-7 container mx-auto px-3 sm:px-5">
                        <div className="">
                            <h3 className="text-[#2699FB] font-bold sm:text-[45px] text-[25px] leading-6 sm:leading-10 sm:mb-5 mb-3">Special Events & Promotional</h3>
                            <p className="text-[#2699FB] font-normal sm:text-[25px] text-lg leading-5 sm:leading-6 mb-2">Live Game Updates</p>
                        </div>

                    </div>
                    <div className="all-Event">
                        <div className="w-full overflow-hidden pt-2 pb-10 relative">
                            <Slider {...settingsEvent} className="slick-event ">
                                {imagesLiveGame.map((item, index) => (
                                    <div className="p-3" key={index}>
                                        <div className="bg-[#2699FB] group flex flex-col justify-between rounded min-h-[531px] relative">
                                            <div className="title-event p-5 ">
                                                <div className="flex justify-between items-start mb-3">
                                                    <h3 className="uppercase sm:text-[35px] sm:leading-9 text-[21px] leading-5 w-10/12 font-bold text-white relative mb-2">
                                                        short title here
                                                        <div className="absolute w-[77px] h-[2px] bg-white left-0 -bottom-2" />
                                                    </h3>
                                                    <div className="flex w-[34px] h-[34px] bg-white rounded-full items-center justify-center sm:flex hidden">
                                                        <svg id="Group_121" data-name="Group 121" xmlns="http://www.w3.org/2000/svg" width="14.223" height="14.731" viewBox="0 0 14.223 14.731">
                                                            <g id="Ellipse_241" data-name="Ellipse 241" transform="translate(9.144 0)" fill="#141414" stroke="#141414" strokeWidth="1">
                                                                <circle cx="2.54" cy="2.54" r="2.54" stroke="none" />
                                                                <circle cx="2.54" cy="2.54" r="2.04" fill="none" />
                                                            </g>
                                                            <g id="Ellipse_242" data-name="Ellipse 242" transform="translate(9.144 9.144)" fill="#141414" stroke="#141414" strokeWidth="1">
                                                                <ellipse cx="2.54" cy="2.794" rx="2.54" ry="2.794" stroke="none" />
                                                                <ellipse cx="2.54" cy="2.794" rx="2.04" ry="2.294" fill="none" />
                                                            </g>
                                                            <g id="Ellipse_243" data-name="Ellipse 243" transform="translate(0 5.08)" fill="#141414" stroke="#141414" strokeWidth="1">
                                                                <ellipse cx="2.54" cy="2.794" rx="2.54" ry="2.794" stroke="none" />
                                                                <ellipse cx="2.54" cy="2.794" rx="2.04" ry="2.294" fill="none" />
                                                            </g>
                                                            <path id="Path_206" data-name="Path 206" d="M1020.609,818.6l-7.7,4.354,7.7,4.354" transform="translate(-1009.987 -815.301)" fill="none" stroke="#141414" strokeLinejoin="round" strokeWidth="1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-[15px] leading-4 font-normal text-white line-clamp-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... </p>
                                            </div>

                                            <div className="text-white sm:text-[35px] sm:leading-9 text-[21px] leading-5 p-5 font-bold uppercase rounded mt-auto bg-gradient-to-t from-black h-1/2 ">
                                                <p className="content-event">
                                                    short title here
                                                </p>
                                                <button className="readmore-event uppercase sm:text-[21px] text-xs sm:leading-5 border-[3px] border-white flex items-center justify-center py-5 w-full">read more</button>
                                            </div>
                                            <div className="absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="239.357" height="122.673" viewBox="0 0 239.357 122.673">
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

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Event;