import { Fragment } from "react";
import { Rate } from 'antd';
import eshop from 'assets/images/eshop.png';
import microsoft from 'assets/images/microsoft.png';
import steam from 'assets/images/steam.png';


const Slider = () => {

    return (
        <Fragment>
            <div className="w-full flex flex-col justify-between" style={{height : "calc(100vh - 63px)"}}>
                <div className="bg-[#2699FB] relative  flex items-end " style={{height : "calc(100vh - 63px - 72px)"}}>
                    <div className="absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="350.991" height="187.885" viewBox="0 0 350.991 187.885">
                            <g id="Group_436" data-name="Group 436" transform="translate(10.778 8.215)" opacity="0.3">
                                <g id="Polygon_2" data-name="Polygon 2" transform="translate(-0.212 -0.329)" fill="#fff">
                                    <path d="M 292.2830505371094 177.5 L 287 177.5 L 0 177.5 L -5.28303861618042 177.5 L -1.933153867721558 173.4148101806641 L 141.5668487548828 -1.585192322731018 L 143.5 -3.942730665206909 L 145.4331512451172 -1.585192322731018 L 288.9331665039062 173.4148101806641 L 292.2830505371094 177.5 Z" stroke="none" />
                                    <path d="M 143.5 0 L 0 175 L 287 175 L 143.5 0 M 143.5 -7.885452270507812 L 297.5660705566406 180 L -10.56607055664062 180 L 143.5 -7.885452270507812 Z" stroke="none" fill="#bce0fd" />
                                </g>
                                <g id="Polygon_1" data-name="Polygon 1" transform="translate(176.788 79.671)" fill="#fff">
                                    <path d="M 159.2126617431641 97 L 155 97 L 1.4210854715202e-14 97 L -4.212666511535645 97 L -1.549729108810425 93.73574829101562 L 75.95027160644531 -1.264250040054321 L 77.5 -3.16391658782959 L 79.04972839355469 -1.264250040054321 L 156.5497283935547 93.73574829101562 L 159.2126617431641 97 Z" stroke="none" />
                                    <path d="M 77.5 0 L 0 95 L 155 95 L 77.5 0 M 77.5 -6.327842712402344 L 163.4253387451172 99 L -8.425338745117188 99 L 77.5 -6.327842712402344 Z" stroke="none" fill="#bce0fd" />
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div className="container mx-auto py-10">
                        <div className="text-white w-7/12">
                            <div className="mb-6">
                                <h3 className="text-white text-[45px] font-bold leading-tight mb-1">Gameloft game</h3>
                                <div className="flex items-center">
                                    <div className="mr-2">Racing / Action </div> |
                                    <Rate className="ml-2" border={"white"} allowHalf defaultValue={4} />
                                </div></div>
                            <p className="line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#D8EDFF] py-4">
                    <div className=" container mx-auto">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[20px] font-bold ">Download latest version </h3>
                            <div className="flex items-center justify-between">
                                <img className="ml-[6px] w-[123px] h-10" src={eshop} alt="eshop" />
                                <img className="ml-[6px] w-[123px] h-10" src={microsoft} alt="microsoft" />
                                <img className="ml-[6px] w-[123px] h-10" src={steam} alt="steam" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Slider;