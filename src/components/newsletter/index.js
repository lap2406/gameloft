import { Fragment } from "react";
import contactus from 'assets/images/contactus.png';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';

const Newsletter = () => {

    return (
        <Fragment>
            <div className="sm:min-h-screen bg-[#EBF6FF] w-full overflow-hidden">
                <div className="container mx-auto flex justify-between items-center sm:min-h-screen py-12 sm:py-0">
                    <div className="hidden sm:block"><img src={contactus} alt="" /></div>
                    <div className="sm:w-1/2 sm:px-16 px-5 ">
                        <div className="mb-7">
                            <h3 className="text-[#2699FB] font-bold text-[25px] leading-6 mb-2">Stay in the Know!</h3>
                            <p className="text-[#2699FB] text-xs">Don't get left behind!</p>
                        </div>
                        <Form>
                            <Form.Item label="" >
                                <Input placeholder="Name" className="bg-transparent border-[#2699FB] placeholder-[#2699FB] text-xs" />
                            </Form.Item>
                            <Form.Item label="" >
                                <Input placeholder="Email" className="bg-transparent border-[#2699FB] placeholder-[#2699FB] text-xs" />
                            </Form.Item>
                            <Form.Item label="" >
                                <Select
                                   
                                    suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" width="10.076" height="6.452" viewBox="0 0 10.076 6.452">
                                        <path id="Path_208" data-name="Path 208" d="M848.953,876.7l3.624,3.624L856.2,876.7" transform="translate(-847.538 -875.287)" fill="none" stroke="#2699fb" strokeLinecap="round" strokeWidth="2" />
                                    </svg>
                                    }
                                    placeholder="Country" >
                                    <Select.Option value="Việt Nam" >Việt Nam</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="">
                                <Select
                                    placeholder="Platform" className="bg-transparent"
                                    suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" width="10.076" height="6.452" viewBox="0 0 10.076 6.452">
                                        <path id="Path_208" data-name="Path 208" d="M848.953,876.7l3.624,3.624L856.2,876.7" transform="translate(-847.538 -875.287)" fill="none" stroke="#2699fb" strokeLinecap="round" strokeWidth="2" />
                                    </svg>
                                    }
                                >
                                    <Select.Option value="Reddit">Reddit</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="13yearsold" valuePropName="checked" noStyle>
                                    <Checkbox className="text-[#2699FB] flex items-start">By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions </Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="agreePromotional" valuePropName="checked" noStyle>
                                    <Checkbox className="text-[#2699FB] flex items-start">I agree to receive promotional offers relating to all Gameloft games and services.</Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <div className="flex justify-center">
                                <button type="submit" className="text-[10px] px-8 py-2.5 border border-[#2699FB] text-[#2699FB] rounded">Button</button>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
export default Newsletter;