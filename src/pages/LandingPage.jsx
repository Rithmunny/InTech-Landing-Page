import { useState, useCallback } from "react";
import Root from "../components/Root";
import PortalPopup from "../components/PortalPopup";
import GroupComponent from "../components/GroupComponent";

const LandingPage = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[23.4px] box-border gap-[174px] leading-[normal] tracking-[normal] mq800:gap-[87px] mq450:gap-[43px]">
        <section className="w-[1752.1px] h-[1718.1px] absolute !m-[0] top-[218.8px] left-[-1051.7px]">
          <div className="absolute top-[0.04px] left-[704.02px] [background:linear-gradient(237.95deg,_rgba(255,_166,_0,_0.62),_rgba(255,_255,_255,_0))] w-[1350.8px] h-[1116.1px] [transform:_rotate(39.1deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[617.2px] left-[1126.7px] w-[301.9px] h-[551.5px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full text-left text-45xl text-darkturquoise font-outfit">
          <div className="flex-1 [background:linear-gradient(72.19deg,_rgba(217,_217,_217,_0),_rgba(0,_217,_241,_0.76))] flex flex-col items-start justify-start pt-2 px-[25px] pb-[79.5px] box-border gap-[71px] max-w-full z-[1] mq800:gap-[35px] mq800:pt-5 mq800:pb-[52px] mq800:box-border mq450:gap-[18px] mq450:pb-[34px] mq450:box-border">
            <div className="w-[1512px] h-[770px] relative [background:linear-gradient(72.19deg,_rgba(217,_217,_217,_0),_rgba(0,_217,_241,_0.76))] hidden max-w-full" />
            <header className="w-[1426px] flex flex-row items-end justify-between top-[0] z-[99] sticky gap-5 max-w-full text-left text-xl text-darkturquoise font-outfit">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-[60px] w-[60px] relative object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                  <a className="[text-decoration:none] relative font-bold inline-block min-w-[79px] z-[2] text-[inherit]">
                    <span>IN</span>
                    <span className="text-orange">TECH</span>
                  </a>
                </div>
              </div>
              <div className="w-[751px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full text-black">
                <div className="self-stretch flex flex-row items-end justify-start gap-16 max-w-full mq800:gap-8 mq450:gap-4">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1125:hidden">
                      <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
                        <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[56px] z-[2]">
                          Home
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[83px] z-[2]">
                          Products
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
                        <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[85px] whitespace-nowrap z-[2]">
                          About Us
                        </a>
                      </div>
                      <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[102px] whitespace-nowrap z-[2]">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <button className="cursor-pointer border-orange border-[1px] border-solid pt-2 px-4 pb-2.5 bg-orange rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-darkgoldenrod hover:border-darkgoldenrod hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="h-[47px] w-[182px] relative rounded-3xs bg-orange border-orange border-[1px] border-solid box-border hidden" />
                    <a
                      className="[text-decoration:none] relative text-xl font-bold font-outfit text-white text-left cursor-pointer z-[1]"
                      onClick={openFrame}
                    >
                      Request a Demo
                    </a>
                  </button>
                </div>
              </div>
            </header>
            <div className="w-[1177.9px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
                <div className="w-[633px] flex flex-col items-start justify-start pt-[72px] px-0 pb-0 box-border max-w-full mq800:min-w-full mq1125:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] z-[2] mq800:text-32xl mq450:text-19xl">
                      <span>{`Smarter Workplaces, `}</span>
                      <span className="text-orange">Secure Solutions.</span>
                    </h1>
                    <div className="self-stretch relative text-5xl font-light text-black z-[3] mq450:text-lgi">
                      <p className="m-0">
                        Revolutionize workplace efficiency and security through
                      </p>
                      <p className="m-0">
                        innovative smart technology solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[551.5px] w-[301.9px] relative object-contain z-[3] mq1125:flex-1"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <img
          className="w-[503.7px] h-[674px] absolute !m-[0] top-[96px] right-[-24.7px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <section className="w-[1100px] flex flex-row items-start justify-end pt-0 px-[33px] pb-[57px] box-border max-w-full text-left text-45xl text-darkturquoise font-outfit mq450:pb-[37px] mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-12">
              <GroupComponent
                icroundLogIn="/icroundlogin.svg"
                checkIn="Check In"
                am="09:00 am"
                onTime="On Time"
              />
              <GroupComponent
                groupDivAlignSelf="unset"
                cardAlignSelf="unset"
                cardJustifyContent="flex-start"
                icroundLogIn="/icroundlogin-1.svg"
                checkIn="Check  Out"
                am="05:00 pm"
                amDisplay="inline-block"
                amMinWidth="68px"
                onTime="Go Home"
                checkInMinWidth="69px"
                onTimeMinWidth="60px"
              />
            </div>
            <div className="w-[779px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq800:text-32xl mq450:text-19xl">
                    <span>Mobile Attendance</span>
                    <span className="text-black">{` `}</span>
                    <span className="text-orange">System</span>
                  </h1>
                </div>
                <div className="self-stretch relative text-xl font-light text-black mq450:text-base">
                  Effortlessly track employee attendance with our seamless
                  clock-in/out feature and real-time monitoring. Stay updated
                  with accurate records, ensuring efficiency and reliability for
                  your workforce.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full text-left text-45xl text-darkturquoise font-outfit">
          <div className="self-stretch [background:linear-gradient(90deg,_#fff,_rgba(0,_217,_241,_0.41))] flex flex-row items-end justify-between pt-[17px] pb-[18px] pl-[122px] pr-[33px] box-border max-w-full gap-5 z-[1] mq1325:flex-wrap mq800:pl-[61px] mq800:box-border mq450:pl-5 mq450:box-border">
            <div className="h-[636px] w-[1512px] relative [background:linear-gradient(90deg,_#fff,_rgba(0,_217,_241,_0.41))] hidden max-w-full" />
            <div className="w-[781px] flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border max-w-full mq1325:flex-1 mq800:pb-[29px] mq800:box-border mq1125:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-full mq800:gap-[39px] mq450:gap-[19px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                    <h1 className="m-0 relative text-inherit font-bold font-[inherit] inline-block max-w-full z-[2] mq800:text-32xl mq450:text-19xl">
                      <span>{`Smart Laundry `}</span>
                      <span className="text-orange">System</span>
                    </h1>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-xl text-black">
                      <div className="flex-1 relative font-light inline-block max-w-full z-[2] mq450:text-base">
                        Simplify your laundry routine with QR code activation
                        and automated weekly system refresh. Enjoy a hassle-free
                        and efficient experience tailored to modern living.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[79px] text-sm text-black mq800:gap-[39px] mq1125:flex-wrap mq450:gap-5">
                  <div className="w-[170px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border gap-[19px] z-[2]">
                    <div className="self-stretch h-[238px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white hidden" />
                    <div className="flex flex-row items-start justify-start pt-0 pb-2 pl-[43px] pr-11">
                      <b className="relative inline-block min-w-[83px] z-[1]">
                        Big Washer 1
                      </b>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5 text-3xs">
                      <div className="flex-1 flex flex-col items-end justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[27px] pr-[19px]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-1">
                            <div className="flex flex-col items-start justify-start pt-[83px] px-0 pb-0">
                              <div className="relative font-thin inline-block min-w-[6px] z-[1]">
                                2
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-start gap-[13.5px]">
                              <div className="h-[67px] flex-1 relative">
                                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-100 w-full h-full z-[1]" />
                                <div className="absolute w-[calc(100%_-_17px)] top-[9px] right-[9px] left-[8px] h-[50px]">
                                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[2]" />
                                    <img
                                      className="absolute top-[8px] left-[13px] w-6 h-6 overflow-hidden z-[3]"
                                      alt=""
                                      src="/bxswasher.svg"
                                    />
                                  </div>
                                  <div className="absolute top-[31px] left-[10px] font-thin inline-block w-[31px] h-[13px] min-w-[31px] whitespace-nowrap z-[3]">
                                    00:00
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[83px] px-0 pb-0">
                                <div className="relative font-thin inline-block min-w-[6px] z-[1]">
                                  6
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-5 mt-[-1px]">
                          <div className="relative font-thin inline-block min-w-[62px] z-[1]">
                            current usage
                          </div>
                          <div className="relative font-thin inline-block min-w-[42px] z-[1]">
                            max load
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-4 pl-16 pr-[63px] bg-mediumspringgreen rounded-t-none rounded-b-mini flex flex-row items-start justify-start z-[1] hover:bg-forestgreen">
                      <div className="h-[45px] w-[169px] relative rounded-t-none rounded-b-mini bg-mediumspringgreen hidden" />
                      <div className="relative text-3xs font-outfit text-black text-left inline-block min-w-[42px] z-[2]">
                        Available
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[21px]">
                    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white flex flex-col items-end justify-start pt-[21px] pb-0 pl-0 pr-px gap-[19px] z-[2]">
                      <div className="self-stretch h-[238px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white hidden" />
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[13px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[27px]">
                          <div className="flex flex-row items-start justify-start py-0 pl-[29px] pr-7">
                            <b className="relative inline-block min-w-[85px] z-[1]">
                              Big Washer 2
                            </b>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-3xs">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-[38px]">
                              <div className="flex-1 flex flex-row items-start justify-start">
                                <div className="h-[67px] flex-1 relative">
                                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red-100 w-full h-full z-[1]" />
                                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                                    <img
                                      className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                                      alt=""
                                      src="/ellipse-42.svg"
                                    />
                                    <div className="absolute w-[calc(100%_-_17px)] top-[9px] right-[9px] left-[8px] h-[50px]">
                                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[3]" />
                                      <img
                                        className="absolute top-[8px] left-[13px] w-6 h-6 overflow-hidden z-[4]"
                                        alt=""
                                        src="/bxswasher-1.svg"
                                      />
                                      <div className="absolute top-[31px] left-[12px] font-thin inline-block w-7 h-[13px] min-w-[28px] whitespace-nowrap z-[5]">
                                        20:06
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-start">
                              <div className="flex flex-row items-start justify-end py-0 pl-[27px] pr-[19px]">
                                <div className="w-[95.5px] flex flex-row items-start justify-between gap-5">
                                  <div className="relative font-thin inline-block min-w-[6px] shrink-0 z-[1]">
                                    2
                                  </div>
                                  <div className="relative font-thin inline-block min-w-[6px] shrink-0 z-[1]">
                                    6
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-between gap-5 mt-[-1px]">
                                <div className="relative font-thin inline-block min-w-[62px] z-[1]">
                                  current usage
                                </div>
                                <div className="relative font-thin inline-block min-w-[42px] z-[1]">
                                  max load
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-4 pl-[71px] pr-[70px] bg-red-300 rounded-t-none rounded-b-mini flex flex-row items-start justify-start z-[1] hover:bg-red-200">
                        <div className="h-[45px] w-[169px] relative rounded-t-none rounded-b-mini bg-red-300 hidden" />
                        <div className="relative text-3xs font-outfit text-black text-left inline-block min-w-[28px] z-[2]">
                          In Use
                        </div>
                      </button>
                    </div>
                  </div>
                  <img
                    className="self-stretch w-[257px] relative rounded-mini max-h-full object-cover min-h-[238px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className="w-[323px] relative max-h-full object-cover max-w-full z-[2] mq1325:flex-1"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
          <div className="self-stretch [background:linear-gradient(186.08deg,_#fff,_rgba(222,_144,_0,_0.62))] flex flex-row items-start justify-between pt-[114px] pb-[91.2px] pl-[122px] pr-0 box-border max-w-full gap-5 mq1325:flex-wrap mq1325:pl-5 mq1325:pr-5 mq1325:box-border mq800:pt-[74px] mq800:pb-[59px] mq800:box-border">
            <div className="h-[728px] w-[1512px] relative [background:linear-gradient(186.08deg,_#fff,_rgba(222,_144,_0,_0.62))] hidden max-w-full" />
            <div className="w-[423.5px] flex flex-col items-start justify-start gap-[41.2px] max-w-full mq1325:flex-1 mq800:min-w-full mq450:gap-[21px]">
              <img
                className="self-stretch flex-1 relative rounded-6xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                <img
                  className="h-[240.8px] flex-1 relative rounded-6xl max-w-full overflow-hidden object-contain z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
            </div>
            <div className="w-[765px] flex flex-col items-start justify-start pt-[116px] px-0 pb-0 box-border max-w-full mq1325:flex-1 mq1125:min-w-full mq450:pt-[75px] mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] z-[1] mq800:text-32xl mq450:text-19xl">
                  <span>{`Face Recognition and Attendance `}</span>
                  <span className="text-orange">System</span>
                </h1>
                <div className="w-[694px] relative text-xl font-light text-black inline-block max-w-full box-border pr-5 z-[1] mq450:text-base">
                  Enhance workplace security and efficiency with real-time face
                  recognition seamlessly integrated into CCTV systems.
                  Automatically detect and record attendance with cutting-edge
                  technology.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-end justify-start gap-[90px] max-w-full text-left text-[96px] text-black font-outfit mq800:gap-[45px] mq450:gap-[22px]">
          <div className="w-[1440px] flex flex-row items-start justify-end pt-0 px-[52px] pb-[26px] box-border max-w-full mq1325:pl-[26px] mq1325:pr-[26px] mq1325:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[37px] max-w-full mq800:gap-[18px] mq1125:flex-wrap">
              <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full mq800:min-w-full mq1125:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq800:text-[48px] mq450:text-[29px]">
                  <span>{`Why `}</span>
                  <span className="text-darkturquoise">IN</span>
                  <span className="text-orange">TECH?</span>
                </h1>
              </div>
              <div className="h-64 flex-1 relative min-w-[538px] max-w-full text-5xl mq800:min-w-full">
                <img
                  className="absolute top-[71px] left-[12px] w-6 h-6 overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/mingcutetimeline.svg"
                />
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start w-full h-full">
                  <div className="relative leading-[64px] font-medium z-[1] mq450:text-lgi mq450:leading-[51px]">
                    <p className="m-0">
                      At InTech, we deliver solutions that prioritize:
                    </p>
                    <p className="m-0 whitespace-pre-wrap">
                      {" "}
                      Efficiency: Streamline operations and save time with smart
                      technology.
                    </p>
                    <p className="m-0 whitespace-pre-wrap">
                      {" "}
                      Security: Safeguard your workplace with advanced, reliable
                      systems.
                    </p>
                    <p className="m-0 whitespace-pre-wrap">
                      {" "}
                      Innovation: Stay ahead with cutting-edge solutions
                      designed for the future.
                    </p>
                  </div>
                  <img
                    className="w-[26px] h-[26px] absolute !m-[0] top-[79px] left-[0px] overflow-hidden shrink-0 object-cover z-[2]"
                    alt=""
                    src="/iconparksolidsetting@2x.png"
                  />
                  <img
                    className="w-6 h-6 absolute !m-[0] bottom-[87px] left-[2px] overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/materialsymbolssecurity.svg"
                  />
                  <img
                    className="w-6 h-6 absolute !m-[0] bottom-[23px] left-[2px] overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/hugeiconsaiinnovation03.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full text-[40px] text-darkturquoise">
            <div className="self-stretch h-6 relative bg-orange" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[58px] pr-[52px] box-border max-w-full mq800:pl-[29px] mq800:pr-[26px] mq800:box-border">
              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq1325:flex-wrap">
                <div className="w-[639px] flex flex-col items-start justify-start gap-[46px] max-w-full mq1325:flex-1 mq800:gap-[23px] mq800:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-[124px] w-[124px] relative object-cover z-[1]"
                        alt=""
                        src="/image-1-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[43.5px] px-0 pb-0">
                        <h1 className="m-0 self-stretch h-[39.1px] relative text-inherit font-bold font-[inherit] inline-block shrink-0 mq800:text-[32px] mq450:text-5xl">
                          <span>IN</span>
                          <span className="text-orange">TECH</span>
                        </h1>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-0 box-border max-w-full text-5xl text-black">
                      <div className="flex-1 relative font-light inline-block max-w-full mq450:text-lgi">
                        Be the leading provider of cutting-edge smart
                        technology, creatingsmarter, more efficient, and secure
                        work environments for businesses of allsizes.
                      </div>
                    </div>
                  </div>
                  <div className="w-[543px] flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full text-xl text-black">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
                        <b className="relative inline-block min-w-[56px] mq450:text-base">
                          Home
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <b className="relative inline-block min-w-[83px] mq450:text-base">
                          Products
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
                        <b className="relative inline-block min-w-[85px] mq450:text-base">
                          About Us
                        </b>
                      </div>
                      <b className="relative inline-block min-w-[102px] mq450:text-base">
                        Contact Us
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[499px] flex flex-col items-start justify-start gap-[22px] max-w-full text-5xl text-orange mq1325:flex-1 mq800:min-w-full">
                  <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px] box-border max-w-full">
                    <div className="relative font-semibold mq450:text-lgi">
                      Contact us through Phone Number
                    </div>
                  </div>
                  <div className="self-stretch rounded-6xl bg-white border-orange border-[0px] border-solid box-border flex flex-row items-start justify-between pt-3 pb-[13px] pl-[47px] pr-3.5 max-w-full gap-5 text-dimgray mq800:flex-wrap mq800:pl-[23px] mq800:box-border">
                    <img
                      className="h-[66px] w-[499px] relative rounded-6xl hidden max-w-full"
                      alt=""
                      src="/rectangle-90.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <div className="relative font-light whitespace-nowrap z-[1] mq450:text-lgi">
                        +885 12 345 678
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-1.5 pb-[5px] pl-[51px] pr-[49px] bg-orange rounded-6xl flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
                      <div className="h-[41px] w-48 relative rounded-6xl bg-orange hidden" />
                      <div className="relative text-5xl font-medium font-outfit text-white text-left inline-block min-w-[92px] z-[2]">
                        Call now
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-3.5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[9px] max-w-full mq450:flex-wrap">
                      <div className="relative font-semibold inline-block min-w-[102px] mq450:text-lgi">
                        Address :
                      </div>
                      <div className="flex-1 relative font-light text-dimgray inline-block min-w-[231px] max-w-full mq450:text-lgi">
                        <p className="m-0">
                          Green Arcade 1, 2 And 3, Thmey Village, Chambak
                          Commune,
                        </p>
                        <p className="m-0">
                          Phnom Srouch District, Kampong Speu Province, Cambodia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[27px] max-w-full">
            <div className="self-stretch h-px relative bg-orange" />
            <div className="w-[1501px] flex flex-row items-start justify-end py-0 px-[66px] box-border max-w-full mq800:pl-[33px] mq800:pr-[33px] mq800:box-border">
              <footer className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 text-left text-xl text-black font-outfit mq800:flex-wrap">
                <div className="w-[363px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="relative mq450:text-base">{`Terms & Conditions`}</div>
                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[129px] mq450:text-base">
                      Privacy Policy
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-end justify-start gap-[24.6px]">
                  <img
                    className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0 min-h-[47px]"
                    loading="lazy"
                    alt=""
                    src="/icbaselinefacebook.svg"
                  />
                  <img
                    className="h-[42.7px] w-[42.7px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/formkittwitter.svg"
                  />
                  <img
                    className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0 min-h-[47px]"
                    loading="lazy"
                    alt=""
                    src="/riinstagramfill.svg"
                  />
                  <img
                    className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0 min-h-[47px]"
                    loading="lazy"
                    alt=""
                    src="/lineiconstiktokalt.svg"
                  />
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default LandingPage;
