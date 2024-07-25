import React from 'react';

const SearchIcon = ({ width = 20, height = 21, stroke = "#6D8493", strokeWidth = 1.25, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M16.0417 9.50008C16.0417 13.0669 13.1502 15.9584 9.58333 15.9584C6.01649 15.9584 3.125 13.0669 3.125 9.50008C3.125 5.93324 6.01649 3.04175 9.58333 3.04175C13.1502 3.04175 16.0417 5.93324 16.0417 9.50008Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 14.5L17.5 17"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};


export default SearchIcon;
