import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <g clipPath={`url(#${id})`}>
        <rect
          width="32"
          height="40"
          rx="5.33333"
          transform="matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)"
          fill="#7645D9"
        />
        <rect
          x="-1.66675"
          y="24.29"
          width="32"
          height="40"
          rx="5.33333"
          transform="rotate(-30 -1.66675 24.29)"
          fill="#CAB3F8"
        />
        <g opacity="0.1">
          <path
            d="M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z"
            fill="white"
          />
          <path d="M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z" fill="white" />
          <path
            d="M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
