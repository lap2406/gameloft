import { Fragment } from "react";
import contactus from 'assets/images/contactus.png';
import React, { useState } from 'react';
import Slider from "react-slick";

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Fragment>
            <div className="min-h-screen bg-[green] ">
                <div className="container mx-auto  min-h-screen">
                    <div>
                        <h2> Single Item</h2>
                        <Slider settings={settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Slick;