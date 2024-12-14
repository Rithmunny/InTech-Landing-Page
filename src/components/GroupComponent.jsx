import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  groupDivAlignSelf,
  cardAlignSelf,
  cardJustifyContent,
  icroundLogIn,
  checkIn,
  am,
  amDisplay,
  amMinWidth,
  onTime,
  attendanceCardRowsAlignSelf,
  attendanceCardRowsJustifyContent,
  checkInMinWidth,
  onTimeMinWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: groupDivAlignSelf,
    };
  }, [groupDivAlignSelf]);

  const attendanceStatusStyle = useMemo(() => {
    return {
      alignSelf: cardAlignSelf,
      justifyContent: cardJustifyContent,
    };
  }, [cardAlignSelf, cardJustifyContent]);

  const amStyle = useMemo(() => {
    return {
      display: amDisplay,
      minWidth: amMinWidth,
    };
  }, [amDisplay, amMinWidth]);

  const checkInStyle = useMemo(() => {
    return {
      minWidth: checkInMinWidth,
    };
  }, [checkInMinWidth]);

  const onTimeStyle = useMemo(() => {
    return {
      minWidth: onTimeMinWidth,
    };
  }, [onTimeMinWidth]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white flex flex-col items-start justify-start pt-[15px] pb-[13px] pl-[35px] pr-[23px] gap-[26px] z-[1] text-left text-sm text-gray font-outfit ${className}`}
      style={groupDivStyle}
    >
      <div className="w-[167px] h-[123px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white hidden" />
      <div
        className="self-stretch flex flex-row items-start justify-between gap-5"
        style={attendanceStatusStyle}
      >
        <div className="h-[29px] w-[29px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 w-full h-full z-[1]" />
          <img
            className="absolute top-[3px] left-[2px] w-6 h-6 overflow-hidden z-[2]"
            alt=""
            src={icroundLogIn}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div
            className="relative font-light inline-block min-w-[54px] z-[1]"
            style={checkInStyle}
          >
            {checkIn}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[5px] text-teal font-inter">
        <b
          className="relative inline-block min-w-[68px] whitespace-nowrap z-[1]"
          style={amStyle}
        >
          {am}
        </b>
        <div
          className="relative font-light font-outfit text-gray inline-block min-w-[54px] z-[1]"
          style={onTimeStyle}
        >
          {onTime}
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  icroundLogIn: PropTypes.string,
  checkIn: PropTypes.string,
  am: PropTypes.string,
  onTime: PropTypes.string,

  /** Style props */
  groupDivAlignSelf: PropTypes.string,
  cardAlignSelf: PropTypes.string,
  cardJustifyContent: PropTypes.string,
  amDisplay: PropTypes.string,
  amMinWidth: PropTypes.string,
  attendanceCardRowsAlignSelf: PropTypes.string,
  attendanceCardRowsJustifyContent: PropTypes.string,
  checkInMinWidth: PropTypes.string,
  onTimeMinWidth: PropTypes.string,
};

export default GroupComponent;
