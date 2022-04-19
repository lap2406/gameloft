import { Fragment } from "react";
import React, { useState } from 'react';
import Slider from "react-slick";
import images from "assets/images/live-game/1.png";

const Post = () => {
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
        ),
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settingsNews = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        appendDots: dots => <div className="">{dots}</div>,
        lazyLoad: true,
        arrows: true,
        responsive: [

            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
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
        }

    ];

    return (
        <Fragment>
            <div className="min-h-screen bg-white ">
                <div className="min-h-screen">
                    <div className="sm:pt-20 pt-20 pb-6 container mx-auto px-3 sm:px-5">
                        <div className="mb-5">
                            <h3 className="text-[#2699FB] font-bold sm:text-[45px] text-[25px] leading-6 sm:leading-10 mb-5">Game Community Hub</h3>
                            <p className="text-[#2699FB] font-bold text-[25px] leading-6 mb-5 sm:block hidden">Live Game Updates</p>
                        </div>
                        <Slider {...settingsLiveGame} className="slick-live-game">
                            {imagesLiveGame.map((item, index) => (
                                <div key={index} className="flex justify-center text-center">
                                    <div className="flex justify-center mb-2">
                                        <a href="https://asphaltlegends.com/" target="_blank" className={item.active ? " p-1 rounded-full border-[3px] border-[#2699FB]" : "p-1 rounded-full border-[3px] border-white"}>
                                            <img className="sm:w-24 w-[70px] sm:h-24 h-[70px]" src={images} alt={item.title} />
                                        </a>
                                    </div>
                                    <div className="text-[#2699FB] sm:text-lg text-[13px] sm:font-normal font-semibold">{item.title}</div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div className="all-post">
                        <div className="container mx-auto grid grid-cols-5 items-center justify-between px-3 sm:px-5 ">
                            <div className="flex items-center justify-between sm:col-span-4 col-span-5 mb-3">
                                <h3 className="text-[#2699FB] font-bold text-[30px] leading-7">All Posts</h3>
                                <div className=" flex">
                                    <div className=" w-10 h-10 flex items-center justify-center mr-6">
                                        <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="39.898" height="39.898" viewBox="0 0 39.898 39.898">
                                            <ellipse id="Ellipse_1098" data-name="Ellipse 1098" cx="19.949" cy="19.949" rx="19.949" ry="19.949" transform="translate(0 0)" fill="#2699fb" />
                                            <g id="Group_1145" data-name="Group 1145" transform="translate(8.926 12.101)">
                                                <path id="Path_398" data-name="Path 398" d="M48.345,36.264a9.514,9.514,0,0,1-2.739.75,4.781,4.781,0,0,0,2.1-2.638,9.546,9.546,0,0,1-3.028,1.157,4.772,4.772,0,0,0-8.126,4.35A13.536,13.536,0,0,1,26.721,34.9,4.774,4.774,0,0,0,28.2,41.267a4.735,4.735,0,0,1-2.16-.6c0,.02,0,.041,0,.06a4.771,4.771,0,0,0,3.825,4.675,4.787,4.787,0,0,1-2.153.083A4.773,4.773,0,0,0,32.163,48.8a9.626,9.626,0,0,1-7.06,1.974A13.56,13.56,0,0,0,45.979,39.349c0-.207,0-.413-.014-.617a9.669,9.669,0,0,0,2.38-2.468Z" transform="translate(-25.103 -34.028)" fill="#fff" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className=" w-10 h-10 flex items-center justify-center mr-6">
                                        <svg id="Group_1219" data-name="Group 1219" xmlns="http://www.w3.org/2000/svg" width="39.89" height="39.898" viewBox="0 0 39.89 39.898">
                                            <path id="Path_396" data-name="Path 396" d="M1.108,1.951C-2.017,5.2-1.378,8.647-1.378,19.125c0,8.7-1.518,17.423,6.427,19.477,2.481.638,24.463.638,26.941,0,3.308-.854,6-3.537,6.367-8.215.051-.653.051-21.852,0-22.518C37.965,2.881,34.9.009,30.855-.573c-.926-.134-1.112-.174-5.865-.182C8.13-.747,4.434-1.5,1.108,1.951Z" transform="translate(1.494 0.818)" fill="#2699fb" />
                                            <path id="Path_397" data-name="Path 397" d="M81.53,66.8c-6.018,0-11.732-.535-13.915,5.066-.9,2.314-.771,5.318-.771,9.621,0,3.775-.121,7.324.771,9.619,2.178,5.605,7.938,5.068,13.911,5.068,5.762,0,11.7.6,13.913-5.068.9-2.337.771-5.3.771-9.619,0-5.738.317-9.442-2.466-12.223C90.926,66.444,87.116,66.8,81.523,66.8Zm-1.316,2.647c12.552-.02,14.15-1.415,13.268,17.97-.313,6.856-5.534,6.1-11.951,6.1-11.7,0-12.037-.335-12.037-12.04,0-11.842.928-12.027,10.719-12.037Zm9.155,2.438a1.762,1.762,0,1,0,1.762,1.762A1.762,1.762,0,0,0,89.369,71.881Zm-7.839,2.06a7.542,7.542,0,1,0,7.539,7.542,7.542,7.542,0,0,0-7.539-7.542Zm0,2.647c6.472,0,6.48,9.791,0,9.791S75.049,76.588,81.53,76.588Z" transform="translate(-61.529 -61.531)" fill="#fff" />
                                        </svg>
                                    </div>
                                    <div className=" w-10 h-10 flex items-center justify-center mr-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="39.516" height="39.517" viewBox="0 0 39.516 39.517">
                                            <path id="Path_394" data-name="Path 394" d="M37.335,0H2.179A2.181,2.181,0,0,0,0,2.181V37.337a2.181,2.181,0,0,0,2.181,2.179H37.335a2.181,2.181,0,0,0,2.181-2.18h0V2.179A2.181,2.181,0,0,0,37.335,0Zm0,0" transform="translate(0 0)" fill="#2699fb" />
                                            <path id="Path_395" data-name="Path 395" d="M218.307,110.873V95.591h5.152l.772-5.982h-5.924V85.8c0-1.728.48-2.905,2.957-2.905h3.14V77.559a42.212,42.212,0,0,0-4.6-.235c-4.554,0-7.67,2.779-7.67,7.883v4.4H207v5.981h5.133v15.282Zm0,0" transform="translate(-191.024 -71.356)" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:ml-auto sm:col-span-1 col-span-5 mb-3">

                                <div className="relative w-full sm:w-auto">
                                    <input type="text" placeholder="Search" className=" text-[15px] w-full border px-3 border-[#2699FB] placeholder-[#2699FB] italic py-2 focus:outline-none focus-visible:shadow-blue-300 focus-visible:shadow  focus-visible:border-blue-300 hover:border-blue-300" />
                                    <div className="absolute right-3 top-0 bottom-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.9" height="16.9" viewBox="0 0 16.9 16.9">
                                            <path id="Path_99" data-name="Path 99" d="M16.9,15.412,13.392,11.9A7.277,7.277,0,0,0,14.881,7.44,7.394,7.394,0,0,0,7.44,0,7.394,7.394,0,0,0,0,7.44a7.394,7.394,0,0,0,7.44,7.44A7.277,7.277,0,0,0,11.9,13.392L15.412,16.9ZM2.126,7.44A5.263,5.263,0,0,1,7.44,2.126,5.263,5.263,0,0,1,12.755,7.44,5.263,5.263,0,0,1,7.44,12.755,5.263,5.263,0,0,1,2.126,7.44Z" fill="#2699fb" />
                                        </svg>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-full overflow-hidden py-8 relative">
                            <Slider {...settingsNews} className="slick-news ">
                                {imagesLiveGame.map((item, index) => (
                                    <div className="p-3" key={index} >
                                        <div className="bg-[#D5ECFF] p-5 flex flex-col justify-between border border-[#2699FB] rounded min-h-[383px] relative">
                                            <div className="flex justify-between items-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32.583" height="32.583" viewBox="0 0 32.583 32.583">
                                                    <path id="Path_394" data-name="Path 394" d="M30.785,0H1.8A1.8,1.8,0,0,0,0,1.8V30.786a1.8,1.8,0,0,0,1.8,1.8H30.785a1.8,1.8,0,0,0,1.8-1.8h0V1.8a1.8,1.8,0,0,0-1.8-1.8Zm0,0" transform="translate(0 0)" fill="#4267b2" />
                                                    <path id="Path_395" data-name="Path 395" d="M216.323,104.987v-12.6h4.248l.636-4.932h-4.884V84.313c0-1.425.4-2.4,2.438-2.4h2.589v-4.4a34.806,34.806,0,0,0-3.794-.194c-3.755,0-6.324,2.291-6.324,6.5v3.63H207v4.932h4.232v12.6Zm0,0" transform="translate(-193.827 -72.403)" fill="#fff" />
                                                </svg>
                                                <div className="flex w-[34px] h-[34px] bg-white rounded-full items-center justify-center">
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
                                            <p className="text-[#2699FB] text-[13px] leading-4 line-clamp-4 mt-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
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
                                <div className="font-bold text-xl">{(currentNews < 10) ? '0' + currentNews.toString() : currentNews.toString()}</div>/{imagesLiveGame.length}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Post;