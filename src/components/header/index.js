import React, { Fragment } from "react";

const Header = () => {

    return (
        <Fragment>
            <div className="bg-[#A8D6FD] fixed left-0 right-0 top-0 z-[1000] header" >
                <div className="flex justify-between items-center big-container px-3 sm:px-5 mx-auto sm:py-3 py-1">
                    <div className="w-[112px] sm:w-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="196.568" height="38.959" viewBox="0 0 196.568 38.959">
                            <path id="Path_209" data-name="Path 209" d="M102.118,26.265V25.51a.977.977,0,0,1,1.055-.928h7.8V21.3l-7.821.018a.881.881,0,0,1-.908-.881V19.164a.837.837,0,0,1,.925-.881h8.7l.088-3.458H100.276a2.205,2.205,0,0,0-2.245,2.406V29.062s-.294,1.986,2.421,1.986h11.526V27.205h-8.894s-.967-.044-.967-.928M93.457,14.818h-2.48c-.667.021-1.116.829-1.116.829l-4.572,7.345s-.267.411-.473.411-.485-.42-.485-.42-4.472-6.852-4.777-7.345c-.529-.881-1.108-.831-1.108-.831H76.41c-1.96,0-1.963,2.248-1.963,2.248l-.088,13.965,4.51-.041V20.962s5.109,9.09,5.5,9.769c.2.294.323.408.458.408s.294-.088.488-.408c0-.024,5.538-10.175,5.538-10.175L90.836,31.08H95.2s.038-11.285.038-13.738-1.78-2.527-1.78-2.527m-39.793,7.6H48.251s.018.176.053.382a1.387,1.387,0,0,1,1.064.984c.021.188.035.97.035,2.306,0,1.072-.588,1.143-.588,1.143H45.354a2.071,2.071,0,0,1-2.23-1.722V20.712A2.172,2.172,0,0,1,45.3,18.435H53.64V14.821s-5.668-.05-9.86-.05S38.714,17.8,38.714,19v5.953c0,6.085,4.5,6.114,4.5,6.114h8.1A2.514,2.514,0,0,0,54,28.8s-.029-4.995,0-5.659-.347-.726-.347-.726M65.01,14.774H62.4a1.4,1.4,0,0,0-1.369.925L55.168,31.116l4.7-.047,1.114-3.446s5.844.024,5.744.018c.588,1.789,1.052,3.4,1.052,3.4h4.954s-5.847-14.7-6.3-15.531a1.512,1.512,0,0,0-1.419-.729m-3,9.49L63.8,19.114l1.7,5.159Zm63.3,3h-5.336a.972.972,0,0,1-.961-.961V14.865h-4.357s.065,12.554.065,14.488c0,1.848,1.446,1.7,1.692,1.7H127.55c-1.425,0-2.233-3.758-2.233-3.758m13.624-12.425h-6.993a4.488,4.488,0,0,0-4.463,4.519v6.8s.411,4.942,3.949,4.942c5.779,0,7.933-.109,7.933-.109a5.052,5.052,0,0,0,4.2-5.042V19.443s-.42-4.578-4.627-4.578m-2.08,12.516c-1.087,0-3.4-.026-3.4-.026s-1.681.132-1.681-2.092c0-2.533.12-5.189.12-5.189a1.637,1.637,0,0,1,1.866-1.7h3.676a1.9,1.9,0,0,1,1.839,2.036c0,1.995-.132,4.88-.132,4.88s.35,2.08-2.286,2.08m32.025-12.534H148.6c-2.095,0-2.3,1.354-2.3,1.963V30.98l4.2.059s-.015-4.921-.015-5.6c0-.881,1.149-.9,1.149-.9H155.4V21.564h-3.82c-1.175,0-1.175-.688-1.175-.688V18.405h10.5V31.039h4.172V18.464s3.82.1,7.231,0c-.564-2.118-2.115-3.634-3.408-3.634" transform="translate(24.262 -0.874)" fill="#141414" />
                            <path id="Path_210" data-name="Path 210" d="M46.775,46.785a22.483,22.483,0,0,0,2.48-.1c3.232-.461,5.262-1.819,7.2-5.377a13.356,13.356,0,0,0,.937-5.112l.029-5.524a30.311,30.311,0,0,0-.405-4.407,8.545,8.545,0,0,0-2.283-4.16,6.132,6.132,0,0,0-1.872-1.36,10.313,10.313,0,0,0-2.788-.881,53.659,53.659,0,0,0-6.055-.217L32.59,19.572l-7.971.156a30.377,30.377,0,0,0-3.185.144,4.072,4.072,0,0,0-2.415.981A3.82,3.82,0,0,0,17.6,22.789a18.206,18.206,0,0,0-.25,3.723s.129,4.457.15,5.1c0,.4.162.526.27.561s2.774.341,2.779.353V32.47a2.738,2.738,0,0,1,2.371-1.642c1.789-.106,21.507-.405,23.12-.441a3.484,3.484,0,0,1,1.554.232,1.175,1.175,0,0,1,.529.588,7.638,7.638,0,0,1,.241,1.686s-.026,1.763-.026,2.265a2.523,2.523,0,0,1-2.7,2.612c-1.228.041-23.9-.2-23.9-.2a6.443,6.443,0,0,1-2.7-.555c-2.259-1.193-2.982-2.918-3.023-6.625,0-2.556.018-8.579.018-8.579a6.5,6.5,0,0,1,1.8-4.58c1.469-1.4,4.6-1.334,5.036-1.316h.112c.764,0,8.426,0,11.165-.076,2.876-.073,17.449.347,18.181.382a5.068,5.068,0,0,1,2.186.552,7.713,7.713,0,0,1,1.992,1.554A9.513,9.513,0,0,1,58.548,22.6c.259,1.692.588,7.757.588,7.757s.153,6.32-.435,8.617a10.889,10.889,0,0,1-2.938,5.794c-.373.382-.74.764-.74.764v.021h0c-.026.062-.088.112,0,.32a2.242,2.242,0,0,0,1.072.881c.353.167,1.011-.115,1.663-.529A10.427,10.427,0,0,0,61.965,41.6,19.678,19.678,0,0,0,63.4,34.3c0-.517-.053-9.7-.053-9.7a38.341,38.341,0,0,0-.294-6.1,15.59,15.59,0,0,0-2.459-5.92A8.283,8.283,0,0,0,57.332,9.8a11.873,11.873,0,0,0-1.719-.708c-2.644-.881-5.859-.881-8.52-.964S33.1,7.967,33.1,7.967s-8.033.05-11.353.217c-5.253.259-6.575.358-8.955,1.366A8.454,8.454,0,0,0,8.26,14.906a21.455,21.455,0,0,0-.353,5.224l.109,13.786A31.523,31.523,0,0,0,8.2,38.288c.376,2.873.881,4.152,1.381,4.918a7.163,7.163,0,0,0,2.891,2.615h0l.073.035a22.089,22.089,0,0,0,6.373.964c2.856.115,10.709.1,12.769.106Z" transform="translate(-7.88 -7.967)" fill="#141414" />
                        </svg>

                    </div>
                    <div className="w-[24px] sm:w-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="26.372" viewBox="0 0 45 26.372">
                            <g id="Group_350" data-name="Group 350" transform="translate(2.5 -1.5)">
                                <line id="Line_9" data-name="Line 9" x2="40" transform="translate(0 25.372)" fill="none" stroke="#141414" strokeLinecap="round" strokeWidth="5" />
                                <line id="Line_10" data-name="Line 10" x2="30.89" transform="translate(0 14.686)" fill="none" stroke="#141414" strokeLinecap="round" strokeWidth="5" />
                                <line id="Line_11" data-name="Line 11" x2="40" transform="translate(0 4)" fill="none" stroke="#141414" strokeLinecap="round" strokeWidth="5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Header;