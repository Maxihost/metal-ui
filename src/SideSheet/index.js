import React, { useState, useEffect, useRef, cloneElement } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Box from "../Box";

function XIcon() {
  return (
    <svg
      fill="none"
      className="text-gray-600"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="16px"
      height="16px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

const SidesheetContent = ({ id, children }) => {
  if (typeof window === "undefined") return null;

  let element = useRef(
    document.getElementById(id) || document.createElement("div")
  );

  useEffect(() => {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }
    return () => {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);

  return createPortal(children, element.current);
};

const Sidesheet = ({
  content,
  action,
  title,
  children,
  className,
  width = 400,
}) => {
  const sideSheet = useRef();
  const portal = useRef();
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [sideSheetPosition, setSidesheetPosition] = useState(null);

  const onOutSideClick = (event) => {
    event.stopPropagation();
    if (
      sideSheet.current.contains(event.target) ||
      (portal.current && portal.current.contains(event.target))
    ) {
      return;
    } else {
      closeTransition();
    }
  };

  const closeTransition = () => {
    setTransition(false);
    setTimeout(() => setOpen(false), 500);
  };

  useEffect(() => {
    setSidesheetPosition({
      transition: `transform .4s cubic-bezier(.3,0,0,1)`,
      transform: transition
        ? `translateX(calc(100vw - ${width}px - 20px))`
        : `translateX(100vw)`,
      top: 0,
      bottom: 0,
      width: width,
      height: "calc(100% - 20px)",
    });
  }, [open, transition]);

  useEffect(() => {
    document.addEventListener("mousedown", onOutSideClick);

    return () => {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);

  return (
    <div
      ref={sideSheet}
      className={classNames("relative inline-block text-left", className)}
    >
      {cloneElement(children, {
        onClick: (e) => {
          e.stopPropagation();
          setTransition(false);
          if (!open) {
            setOpen(true);
            setTimeout(() => setTransition(true), 0);
          }
        },
      })}
      {open && (
        <SidesheetContent id="sidesheet">
          <div
            className={classNames(
              "fixed z-50 inset-0 opacity-25 duration-300 delay-200 transition",
              {
                "bg-gray-300": transition,
                "bg-transparent": !transition,
              }
            )}
          />
          <div
            ref={portal}
            style={{
              ...sideSheetPosition,
            }}
            className={
              "fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
            }
          >
            <Box
              flex
              alignItems="center"
              className="relative border-b border-gray-200 rounded rounded-b-none"
            >
              <div className="text-gray-600 flex-auto truncate leading-6">
                {title}
              </div>
              <Box
                flex
                backgroundColor="transparent"
                className="cursor-pointer"
                noPadding
              >
                <div onClick={() => closeTransition()}>
                  <XIcon />
                </div>
              </Box>
            </Box>
            <Box
              flex
              flexDirection="col"
              className="sidesheet-content relative overflow-y-auto flex-1 rounded"
            >
              <Box noPadding flex flexDirection="col" className="h-full">
                {content}
              </Box>
            </Box>
            {action && (
              <Box
                flex
                justifyContent="center"
                alignItems="center"
                className="sidesheet-action h-16 border-t border-gray-200 relative flex-initial rounded rounded-t-none"
              >
                {action}
              </Box>
            )}
          </div>
        </SidesheetContent>
      )}
    </div>
  );
};

Sidesheet.propTypes = {
  content: PropTypes.element,
  children: PropTypes.element,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Sidesheet;
