import React from "react";
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    className="size-6"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      stroke="currentColor"
      strokeLinecap="round"
      stroke-Linejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export default SearchIcon;
