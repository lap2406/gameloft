import { Fragment } from "react";
import logo from 'assets/images/logo-footer.png';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const Footer = () => {

    return (
        <Fragment>
            <div className="sm:min-h-screen bg-[#2699FB] footer relative w-full overflow-hidden">
                <div className="sm:hidden absolute top-0 left-0 right-0 bg-[#C4E4FF] text-center py-3">
                    <h3 className="text-xs text-[#2699FB] font-bold mb-5">Follow Us</h3>
                    <div className="flex mb-4 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150.942" height="30" viewBox="0 0 150.942 30">
                            <g id="Group_801" data-name="Group 801" transform="translate(-1369.058 -4381)">
                                <path id="facebook_1_" data-name="facebook (1)" d="M0,0V29.5H15.711V18.1H11.87V13.453h3.841V9.546A5.144,5.144,0,0,1,20.855,4.4H24.87V8.585H22a1.635,1.635,0,0,0-1.635,1.635v3.234H24.8L24.185,18.1H20.362V29.5H29.5V0Z" transform="translate(1369.058 4381)" fill="#2699fb" />
                                <g id="linkedin" transform="translate(1409.375 4381)">
                                    <rect id="Rectangle_1824" data-name="Rectangle 1824" width="30" height="30" transform="translate(-0.375)" fill="#2699fb" />
                                    <g id="Group_718" data-name="Group 718" transform="translate(4.457 4.48)">
                                        <path id="Path_320" data-name="Path 320" d="M71.333,69.215a2.469,2.469,0,1,1-2.486,2.466A2.479,2.479,0,0,1,71.333,69.215Z" transform="translate(-68.847 -69.215)" fill="#c4e4ff" />
                                        <path id="Path_321" data-name="Path 321" d="M77.776,188.381H74.881a.68.68,0,0,1-.68-.68v-12.35a.68.68,0,0,1,.68-.68h2.895a.68.68,0,0,1,.68.68V187.7A.68.68,0,0,1,77.776,188.381Z" transform="translate(-73.854 -167.845)" fill="#c4e4ff" />
                                        <path id="Path_322" data-name="Path 322" d="M194.806,173.95a4.688,4.688,0,0,0-4.688-4.688h-.742a4.17,4.17,0,0,0-3.648,2.153l-.039,0v-1.516a.282.282,0,0,0-.282-.282h-3.612a.282.282,0,0,0-.282.282V183.04a.282.282,0,0,0,.282.282h3.69a.282.282,0,0,0,.283-.282v-7.594a2.407,2.407,0,0,1,2.36-2.418,2.387,2.387,0,0,1,2.415,2.387v7.626a.282.282,0,0,0,.282.282h3.7a.282.282,0,0,0,.282-.282V173.95Z" transform="translate(-174.219 -162.786)" fill="#c4e4ff" />
                                    </g>
                                </g>
                                <g id="twitter" transform="translate(1450.183 4381)">
                                    <rect id="Rectangle_1825" data-name="Rectangle 1825" width="30" height="30" transform="translate(-0.183)" fill="#2699fb" />
                                    <path id="Path_323" data-name="Path 323" d="M60.359,111.692a12.7,12.7,0,0,0,19.488-10.733q0-.263-.01-.522a9.979,9.979,0,0,0,2.207-2.266,10.3,10.3,0,0,1-2.521.654h-.008l.007,0a4.721,4.721,0,0,0,1.939-2.473,15.47,15.47,0,0,1-2.163.9c-.209.069-.428.138-.653.2a4.456,4.456,0,0,0-7.593,4.053A13.419,13.419,0,0,1,61.9,96.881s-2.13,2.908,1.269,5.9a4.578,4.578,0,0,1-1.925-.574,4.235,4.235,0,0,0,3.522,4.423,4.077,4.077,0,0,1-1.966.082,4.393,4.393,0,0,0,4.1,3.112,8.559,8.559,0,0,1-6.543,1.87Z" transform="translate(-56.451 -89.824)" fill="#c4e4ff" />
                                </g>
                                <g id="youtube" transform="translate(1490.5 4381)">
                                    <rect id="Rectangle_1826" data-name="Rectangle 1826" width="30" height="30" transform="translate(-0.5)" fill="#2699fb" />
                                    <g id="Group_719" data-name="Group 719" transform="translate(5.966 4.083)">
                                        <path id="Path_324" data-name="Path 324" d="M103.235,214.651a.93.93,0,0,0-.074-.328.353.353,0,0,0-.317-.217.552.552,0,0,0-.433.162.287.287,0,0,0-.072.108l0,3.494v.086l.034.045a.693.693,0,0,0,.37.227.358.358,0,0,0,.473-.283.848.848,0,0,0,.019-.176C103.238,216.731,103.24,215.691,103.235,214.651Zm0,0a.93.93,0,0,0-.074-.328.353.353,0,0,0-.317-.217.552.552,0,0,0-.433.162.287.287,0,0,0-.072.108l0,3.494v.086l.034.045a.693.693,0,0,0,.37.227.358.358,0,0,0,.473-.283.848.848,0,0,0,.019-.176C103.238,216.731,103.24,215.691,103.235,214.651Zm3.912-5.268q-6.2-.133-12.406,0a2.639,2.639,0,0,0-2.581,2.638v6.458a2.639,2.639,0,0,0,2.581,2.639q6.2.133,12.406,0a2.639,2.639,0,0,0,2.582-2.639v-6.458A2.639,2.639,0,0,0,107.146,209.383Zm-11.191,9.684H94.762v-6.74H93.528V211.2h3.664v1.125H95.955Zm4.267-2.8v2.8H99.166v-.64c-.038.041-.06.063-.08.085a1.937,1.937,0,0,1-.814.583.988.988,0,0,1-.495.045.608.608,0,0,1-.478-.381,1.478,1.478,0,0,1-.109-.609c0-.77,0-4.847,0-4.887h1.053c0,.036.006,2.962.006,4.389a1.167,1.167,0,0,0,.016.233.257.257,0,0,0,.37.206,1.151,1.151,0,0,0,.51-.4.185.185,0,0,0,.02-.107v-4.329l1.056,0Zm4.017,2.239a.866.866,0,0,1-.9.636,1.193,1.193,0,0,1-.9-.411l-.1-.109v.441H101.28V211.2h1.058v2.59a1.063,1.063,0,0,1,.114-.181,1.214,1.214,0,0,1,.609-.387.917.917,0,0,1,1.1.5,2.044,2.044,0,0,1,.168.884q0,1.65,0,3.3A1.929,1.929,0,0,1,104.238,218.509Zm3.907-.221a1.294,1.294,0,0,1-1.117.916,1.768,1.768,0,0,1-1.009-.1,1.4,1.4,0,0,1-.8-1.019,3.073,3.073,0,0,1-.077-.657c-.008-.862,0-1.724,0-2.585a1.74,1.74,0,0,1,.417-1.211,1.539,1.539,0,0,1,1.317-.508,1.844,1.844,0,0,1,.46.083,1.281,1.281,0,0,1,.873,1.036,3.123,3.123,0,0,1,.058.586c.008.46,0,1.473,0,1.473h-2.025v1.452a.472.472,0,1,0,.943,0V217h1.088A5.274,5.274,0,0,1,108.145,218.287Zm-.966-3.7a.472.472,0,1,0-.943,0v.815h.943Zm-4.018-.26a.353.353,0,0,0-.317-.217.552.552,0,0,0-.433.162.287.287,0,0,0-.072.108l0,3.494v.086l.034.045a.693.693,0,0,0,.37.227.358.358,0,0,0,.473-.283.848.848,0,0,0,.019-.176c0-1.04,0-2.08,0-3.119A.93.93,0,0,0,103.161,214.324Z" transform="translate(-92.159 -199.85)" fill="#c4e4ff" />
                                        <path id="Path_325" data-name="Path 325" d="M259.787,94.99v5.842H258.7V100.2c-.12.118-.222.228-.334.327a1.462,1.462,0,0,1-.688.358.687.687,0,0,1-.879-.468,1.542,1.542,0,0,1-.07-.436V94.99h1.074v4.455a1.008,1.008,0,0,0,.015.177.244.244,0,0,0,.345.209,1.155,1.155,0,0,0,.519-.4.193.193,0,0,0,.016-.109V94.99Z" transform="translate(-246.082 -92.924)" fill="#c4e4ff" />
                                        <path id="Path_326" data-name="Path 326" d="M137.273,66.151c-.235-.99-.727-3.081-.727-3.081h-1.232s.946,3.139,1.37,4.538a.559.559,0,0,1,.022.159v3.21h1.136v-3.21a.559.559,0,0,1,.022-.159c.423-1.4,1.37-4.538,1.37-4.538H138s-.492,2.091-.727,3.081Z" transform="translate(-132.521 -63.07)" fill="#c4e4ff" />
                                        <path id="Path_327" data-name="Path 327" d="M196.358,92.731h0a1.55,1.55,0,0,0-1.55,1.55v3.033a1.55,1.55,0,0,0,1.55,1.55h0a1.55,1.55,0,0,0,1.55-1.55V94.281A1.55,1.55,0,0,0,196.358,92.731Zm.447,4.644a.447.447,0,1,1-.894,0V94.22a.447.447,0,1,1,.894,0Z" transform="translate(-188.163 -90.811)" fill="#c4e4ff" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="container px-3 sm:px-5 mx-auto relative">
                    <div className="sm:py-28 py-32 flex sm:flex-nowrap flex-wrap justify-between items-start ">
                        <div className="">
                            <div className="sm:w-[400px] w-full sm:h-[121px] sm:mt-0 mt-8 mb-8">
                                <img className="sm:w-[400px] w-full sm:h-[121px]" src={logo} alt="logo" />
                            </div>
                            <div className="sm:block hidden ">
                                <h3 className="text-[25px] text-white font-bold mb-5">Follow Us</h3>
                                <div className="flex mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="260.941" height="52" viewBox="0 0 260.941 52">
                                        <g id="Group_1107" data-name="Group 1107" transform="translate(0 -0.053)">
                                            <path id="facebook_1_" data-name="facebook (1)" d="M0,0V51.133H27.232V31.382H20.575V23.318h6.657V16.547A8.917,8.917,0,0,1,36.149,7.63h6.959V14.88h-4.98a2.834,2.834,0,0,0-2.834,2.834v5.6h7.688L41.92,31.382H35.295V51.133H51.133V0Z" transform="translate(0 0.197)" fill="#fff" />
                                            <g id="linkedin" transform="translate(69.942)">
                                                <rect id="Rectangle_1824" data-name="Rectangle 1824" width="52" height="52" transform="translate(0 0.053)" fill="#fff" />
                                                <g id="Group_718" data-name="Group 718" transform="translate(7.666 7.963)">
                                                    <path id="Path_320" data-name="Path 320" d="M73.156,69.215a4.279,4.279,0,1,1-4.309,4.274A4.3,4.3,0,0,1,73.156,69.215Z" transform="translate(-68.847 -69.215)" fill="#2699fb" />
                                                    <path id="Path_321" data-name="Path 321" d="M80.4,198.435H75.38a1.179,1.179,0,0,1-1.179-1.179V175.85a1.179,1.179,0,0,1,1.179-1.179H80.4a1.179,1.179,0,0,1,1.179,1.179v21.406A1.179,1.179,0,0,1,80.4,198.435Z" transform="translate(-73.6 -162.839)" fill="#2699fb" />
                                                    <path id="Path_322" data-name="Path 322" d="M204.555,177.388a8.126,8.126,0,0,0-8.126-8.126h-1.287a7.228,7.228,0,0,0-6.324,3.732.55.55,0,0,0-.067-.008v-2.628a.49.49,0,0,0-.49-.49H182a.49.49,0,0,0-.49.49v22.785a.489.489,0,0,0,.489.49l6.4,0a.49.49,0,0,0,.49-.49V179.982a4.172,4.172,0,0,1,4.09-4.19,4.138,4.138,0,0,1,4.185,4.138v13.218a.49.49,0,0,0,.489.49l6.412,0a.489.489,0,0,0,.49-.49V177.388Z" transform="translate(-168.871 -158.037)" fill="#2699fb" />
                                                </g>
                                            </g>
                                            <g id="twitter" transform="translate(140.942)">
                                                <rect id="Rectangle_1825" data-name="Rectangle 1825" width="52" height="52" transform="translate(0 0.053)" fill="#fff" />
                                                <path id="Path_323" data-name="Path 323" d="M60.36,123.169a22.014,22.014,0,0,0,33.779-18.6q0-.455-.018-.905c.44-.346,3.159-2.526,3.826-3.927a17.854,17.854,0,0,1-4.37,1.134h-.014l.012-.007c.2-.133,2.984-2.028,3.361-4.287a26.816,26.816,0,0,1-3.749,1.563c-.362.12-.741.239-1.132.348a7.724,7.724,0,0,0-13.162,7.025A23.259,23.259,0,0,1,63.039,97.5s-3.692,5.04,2.2,10.222a7.936,7.936,0,0,1-3.336-.995,7.34,7.34,0,0,0,6.1,7.667,7.067,7.067,0,0,1-3.407.143,7.614,7.614,0,0,0,7.1,5.394,14.835,14.835,0,0,1-11.341,3.241Z" transform="translate(-53.911 -85.069)" fill="#2699fb" />
                                            </g>
                                            <g id="youtube" transform="translate(208.942)">
                                                <rect id="Rectangle_1826" data-name="Rectangle 1826" width="52" height="52" transform="translate(0 0.053)" fill="#fff" />
                                                <g id="Group_719" data-name="Group 719" transform="translate(11.898 7.273)">
                                                    <path id="Path_324" data-name="Path 324" d="M111.357,218.564a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm0,0a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm6.78-9.132q-10.749-.231-21.5,0a4.574,4.574,0,0,0-4.475,4.573V225.2a4.574,4.574,0,0,0,4.475,4.574q10.751.231,21.5,0a4.574,4.574,0,0,0,4.476-4.574V214.005A4.574,4.574,0,0,0,118.137,209.432Zm-19.4,16.786H96.672V214.535h-2.14V212.58h6.351v1.95H98.738Zm7.4-4.849v4.85H104.3v-1.109c-.066.071-.1.109-.138.148a3.357,3.357,0,0,1-1.41,1.011,1.712,1.712,0,0,1-.857.077,1.054,1.054,0,0,1-.829-.66,2.562,2.562,0,0,1-.19-1.056c0-1.335,0-8.4,0-8.47H102.7c0,.062.01,5.134.011,7.608a2.022,2.022,0,0,0,.028.4.446.446,0,0,0,.642.358,2,2,0,0,0,.884-.692.32.32,0,0,0,.035-.185v-7.5l1.831,0Zm6.962,3.881a1.5,1.5,0,0,1-1.557,1.1,2.067,2.067,0,0,1-1.561-.712l-.177-.189v.765h-1.833V212.579H109.8v4.489a1.842,1.842,0,0,1,.2-.313,2.105,2.105,0,0,1,1.056-.671,1.589,1.589,0,0,1,1.9.864,3.543,3.543,0,0,1,.292,1.532q.005,2.859,0,5.719A3.345,3.345,0,0,1,113.1,225.25Zm6.771-.384a2.242,2.242,0,0,1-1.937,1.588,3.064,3.064,0,0,1-1.748-.178,2.427,2.427,0,0,1-1.387-1.766,5.327,5.327,0,0,1-.134-1.139c-.015-1.493-.008-2.988,0-4.481a3.017,3.017,0,0,1,.723-2.1,2.668,2.668,0,0,1,2.283-.881,3.194,3.194,0,0,1,.8.145,2.22,2.22,0,0,1,1.512,1.8,5.411,5.411,0,0,1,.1,1.017c.015.8-.006,2.553-.006,2.553h-3.511v2.517a.817.817,0,1,0,1.635,0v-1.294h1.886A9.141,9.141,0,0,1,119.868,224.866Zm-1.675-6.42a.817.817,0,1,0-1.635,0v1.413h1.635Zm-6.964-.45a.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.055v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305c0-1.8.006-3.605,0-5.407A1.611,1.611,0,0,0,111.229,218Z" transform="translate(-92.159 -192.908)" fill="#2699fb" />
                                                    <path id="Path_325" data-name="Path 325" d="M262.025,94.99v10.125h-1.876l0-1.088c-.207.2-.385.4-.579.567a2.534,2.534,0,0,1-1.193.62,1.19,1.19,0,0,1-1.523-.811,2.673,2.673,0,0,1-.121-.756V94.99H258.6v7.722a1.749,1.749,0,0,0,.026.306.423.423,0,0,0,.6.362,2,2,0,0,0,.9-.693.334.334,0,0,0,.028-.189V94.99Z" transform="translate(-238.269 -91.409)" fill="#2699fb" />
                                                    <path id="Path_326" data-name="Path 326" d="M138.71,68.411c-.407-1.717-1.261-5.341-1.261-5.341h-2.135s1.64,5.44,2.374,7.866a.968.968,0,0,1,.038.275v5.563h1.969V71.211a.968.968,0,0,1,.038-.275c.734-2.426,2.374-7.866,2.374-7.866h-2.135s-.853,3.624-1.261,5.341Z" transform="translate(-130.472 -63.07)" fill="#2699fb" />
                                                    <path id="Path_327" data-name="Path 327" d="M197.495,92.731h0a2.687,2.687,0,0,0-2.687,2.687v5.258a2.687,2.687,0,0,0,2.687,2.687h0a2.687,2.687,0,0,0,2.687-2.687V95.418A2.686,2.686,0,0,0,197.495,92.731Zm.775,8.05a.775.775,0,1,1-1.55,0v-5.47a.775.775,0,1,1,1.55,0Z" transform="translate(-183.291 -89.403)" fill="#2699fb" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>


                                </div>
                            </div>
                            <Select
                                className="sm:block hidden"
                                suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" width="10.076" height="6.452" viewBox="0 0 10.076 6.452">
                                    <path id="Path_208" data-name="Path 208" d="M848.953,876.7l3.624,3.624L856.2,876.7" transform="translate(-847.538 -875.287)" fill="none" stroke="#2699fb" strokeLinecap="round" strokeWidth="2" />
                                </svg>
                                }
                                defaultValue="english" style={{ width: 150 }} >
                                <Select.Option value="english" >
                                    <div className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.864" height="24.864" viewBox="0 0 24.864 24.864">
                                            <path id="Path_4" data-name="Path 4" d="M3.73,3.73A11.286,11.286,0,0,1,12.432,0a11.286,11.286,0,0,1,8.7,3.73,11.286,11.286,0,0,1,3.73,8.7,11.286,11.286,0,0,1-3.73,8.7,11.286,11.286,0,0,1-8.7,3.73,11.286,11.286,0,0,1-8.7-3.73A12.407,12.407,0,0,1,0,12.432,11.286,11.286,0,0,1,3.73,3.73ZM14.09,22.378q1.243,0,3.108-1.865a9.05,9.05,0,0,0,1.45-4.351,3.431,3.431,0,0,0-1.036-2.486,3.647,3.647,0,0,0-2.694-1.243H12.846a6.05,6.05,0,0,1-1.865-.414,1.881,1.881,0,0,1-.622-1.45,1.076,1.076,0,0,1,.414-.829,1.571,1.571,0,0,1,.829-.414,1.414,1.414,0,0,1,1.036.622c.414.207.622.414.829.414a1.246,1.246,0,0,0,.829-.207,1.246,1.246,0,0,0,.207-.829,3.3,3.3,0,0,0-1.036-2.072A8.57,8.57,0,0,0,14.5,3.315.446.446,0,0,0,14.09,2.9a6.405,6.405,0,0,0-1.658-.414A10.365,10.365,0,0,0,7.045,4.144,5.216,5.216,0,0,0,5.18,8.288a5.305,5.305,0,0,0,1.658,3.937,5.661,5.661,0,0,0,3.937,1.658h0v.829a2.66,2.66,0,0,0,.829,2.072,3.017,3.017,0,0,0,1.865,1.243v3.73c0,.207,0,.207.207.414S13.882,22.378,14.09,22.378Z" fill="#2699fb" />
                                        </svg>
                                        <div className="ml-2">English</div>
                                    </div>
                                </Select.Option>
                                <Select.Option value="vietnam" >
                                    <div className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.864" height="24.864" viewBox="0 0 24.864 24.864">
                                            <path id="Path_4" data-name="Path 4" d="M3.73,3.73A11.286,11.286,0,0,1,12.432,0a11.286,11.286,0,0,1,8.7,3.73,11.286,11.286,0,0,1,3.73,8.7,11.286,11.286,0,0,1-3.73,8.7,11.286,11.286,0,0,1-8.7,3.73,11.286,11.286,0,0,1-8.7-3.73A12.407,12.407,0,0,1,0,12.432,11.286,11.286,0,0,1,3.73,3.73ZM14.09,22.378q1.243,0,3.108-1.865a9.05,9.05,0,0,0,1.45-4.351,3.431,3.431,0,0,0-1.036-2.486,3.647,3.647,0,0,0-2.694-1.243H12.846a6.05,6.05,0,0,1-1.865-.414,1.881,1.881,0,0,1-.622-1.45,1.076,1.076,0,0,1,.414-.829,1.571,1.571,0,0,1,.829-.414,1.414,1.414,0,0,1,1.036.622c.414.207.622.414.829.414a1.246,1.246,0,0,0,.829-.207,1.246,1.246,0,0,0,.207-.829,3.3,3.3,0,0,0-1.036-2.072A8.57,8.57,0,0,0,14.5,3.315.446.446,0,0,0,14.09,2.9a6.405,6.405,0,0,0-1.658-.414A10.365,10.365,0,0,0,7.045,4.144,5.216,5.216,0,0,0,5.18,8.288a5.305,5.305,0,0,0,1.658,3.937,5.661,5.661,0,0,0,3.937,1.658h0v.829a2.66,2.66,0,0,0,.829,2.072,3.017,3.017,0,0,0,1.865,1.243v3.73c0,.207,0,.207.207.414S13.882,22.378,14.09,22.378Z" fill="#2699fb" />
                                        </svg>
                                        <div className="ml-2">Tiếng Việt</div>
                                    </div>
                                </Select.Option>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-3 items-center justify-between sm:w-auto w-full">
                            <div className="mb-6 flex flex-col justify-center">
                                <h3 className="text-[25px] text-white mb-7 sm:block hidden">VISIT</h3>
                                <div className="text-white sm:text-lg text-xs">
                                    <p className="mb-2">Gameloft Games</p>
                                    <p className="mb-2">Gameloft Careers</p>
                                    <p className="mb-2">Gameloft News</p>
                                    <p className="mb-2">Gameloft Forum</p>
                                    <p className="mb-2">Gameloft Corporate</p>
                                    <p className="mb-2">Gameloft Advertising</p>
                                    <p className="mb-2">Gameloft Support</p>
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col justify-center">
                                <h3 className="text-[25px] text-white mb-7 sm:block hidden">LEGAL</h3>
                                <div className="text-white sm:text-lg text-xs">
                                    <p className="mb-2">Terms of Use</p>
                                    <p className="mb-2">Privacy Policy</p>
                                    <p className="mb-2">Cookies Policy</p>
                                    <p className="mb-2">EULA</p>
                                    <p className="mb-2">Legal Notices</p>
                                    <p className="mb-2">Event Rules</p>
                                    <p className="mb-2">Business Contacts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" px-3 sm:px-5 absolute bottom-0 left-0 right-0 text-center py-5 text-white sm:border-t-2 border-white">
                    <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
                    <p>All other trademarks are the property of their respective owners</p>
                </div>
            </div>
        </Fragment>
    )

}
export default Footer;