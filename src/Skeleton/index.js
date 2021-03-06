/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import tw, { css, styled } from "twin.macro";
import { keyframes } from "@emotion/react";

const animation = keyframes`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }`;

const StyledSkeleton = styled.span(({ width, height, vertical }) => [
  `
  display: flex;
  border-radius: 5px;
  background-image: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 100%;
  width: ${width}px;
  min-height: ${height}px;
`,
]);

const Skeleton = ({ width, height, className, vertical }) => (
  <div
    className="skeleton"
    css={[vertical && tw`inline-flex items-end justify-between mr-2`]}
  >
    <StyledSkeleton
      className={className}
      width={width}
      height={height}
      vertical={vertical}
      css={[
        tw`flex-col`,
        css`
          animation: ${animation} 8s ease-in-out infinite;
        `,
      ]}
    />
  </div>
);

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

Skeleton.defaultProps = {
  width: 160,
  height: 24,
  vertical: false,
};

export default Skeleton;
