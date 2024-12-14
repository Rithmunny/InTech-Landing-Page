import PropTypes from "prop-types";

const Root = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[881px] relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto ${className}`}
    >
      <section className="flex-1 rounded-11xl bg-white flex flex-col items-start justify-start pt-[5px] px-0 pb-6 box-border gap-8 max-w-full text-left text-xl text-darkturquoise font-outfit mq450:gap-4">
        <div className="self-stretch h-[446px] relative rounded-11xl bg-white hidden" />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[869px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full [row-gap:20px]">
              <img
                className="h-[60px] w-[60px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[496px] max-w-full mq675:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] relative font-bold inline-block min-w-[79px] z-[1] text-[inherit] mq450:text-base">
                      <span>IN</span>
                      <span className="text-orange">TECH</span>
                    </a>
                  </div>
                  <a className="[text-decoration:none] relative font-bold text-black z-[1] mq450:text-base">
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[5px] relative bg-orange z-[1]" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[53px] pr-[58px] box-border max-w-full text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="h-[72px] w-[327px] flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-[17px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[93px] z-[1] mq450:text-base">
                  Username
                </a>
              </div>
              <div className="self-stretch flex-1 rounded-mini bg-white border-darkturquoise border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-[18px] pb-[13px] max-w-full z-[1]">
                <div className="h-[47px] w-[327px] relative rounded-mini bg-white border-darkturquoise border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[100px] [border:none] [outline:none] font-outfit text-sm bg-[transparent] relative text-silver text-left inline-block p-0 z-[2]"
                  placeholder="Enter username"
                  type="text"
                />
              </div>
            </div>
            <div className="h-[72px] w-[327px] flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start py-0 pl-[19px] pr-[18px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[51px] z-[1] mq450:text-base">
                  Email
                </a>
              </div>
              <div className="self-stretch flex-1 rounded-mini bg-white border-darkturquoise border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3 px-[19px] pb-[13px] max-w-full z-[1]">
                <div className="h-[47px] w-[327px] relative rounded-mini bg-white border-darkturquoise border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[72px] [border:none] [outline:none] font-outfit text-sm bg-[transparent] relative text-silver text-left inline-block p-0 z-[2]"
                  placeholder="Enter email"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full text-center text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-[774px] flex flex-row items-start justify-start gap-[34px] max-w-full mq450:gap-[17px] mq750:flex-wrap">
            <div className="w-[200px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border mq750:flex-1">
              <div className="self-stretch rounded-mini bg-darkturquoise flex flex-row items-start justify-start pt-5 px-[15px] pb-[21px] z-[1]">
                <div className="h-[91px] w-[200px] relative rounded-mini bg-darkturquoise hidden" />
                <div className="flex-1 relative z-[2] mq450:text-base">
                  Mobile Attendance System
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[351px] max-w-full text-left text-black mq675:min-w-full">
              <div className="flex flex-row items-start justify-start py-0 pl-[101px] pr-[100px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative z-[1] mq450:text-base">
                  Select Demo
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[47px] max-w-full text-center text-white mq675:gap-[23px]">
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div className="w-[487px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                    <div className="w-[200px] rounded-mini bg-darkturquoise flex flex-row items-start justify-start pt-5 px-[15px] pb-[21px] box-border z-[1]">
                      <div className="h-[91px] w-[200px] relative rounded-mini bg-darkturquoise hidden" />
                      <div className="flex-1 relative z-[2] mq450:text-base">
                        Smart Laundry System
                      </div>
                    </div>
                    <div className="w-[200px] rounded-mini bg-darkturquoise flex flex-row items-start justify-start pt-5 pb-[21px] pl-2.5 pr-[9px] box-border z-[1]">
                      <div className="h-[91px] w-[200px] relative rounded-mini bg-darkturquoise hidden" />
                      <div className="flex-1 relative z-[2] mq450:text-base">{`Face Recognition & Attendance System`}</div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-2.5 pb-[9px] pl-[119px] pr-[118px] bg-orange rounded-11xl flex flex-row items-start justify-center z-[1] hover:bg-darkgoldenrod mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-11 w-[303px] relative rounded-11xl bg-orange hidden" />
                  <b className="flex-1 relative text-xl font-outfit text-white text-center z-[2] mq450:text-base">
                    Submit
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Root;
