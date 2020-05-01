import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Box = ({
  flex,
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  children,
  className,
  rootCard,
  noPadding,
}) => {
  return (
    <div
      className={classNames("overflow-hidden", className, {
        flex: Boolean(flex),
        "bg-white": !Boolean(backgroundColor),
        [`items-${alignItems}`]: Boolean(alignItems),
        [`justify-${justifyContent}`]: Boolean(justifyContent),
        [`bg-${backgroundColor}`]: Boolean(backgroundColor),
        [`flex-${flexDirection}`]: Boolean(flexDirection),
        [`mb-4 shadow rounded-sm`]: Boolean(rootCard),
        [`px-4 py-5 sm:px-6 sm:py-4`]: !Boolean(noPadding),
      })}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  flex: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  backgroundColor: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  rootCard: PropTypes.bool,
  noPadding: PropTypes.bool,
};

export default Box;
