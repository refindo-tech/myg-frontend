import React from 'react';

interface IconProps {
    size?: number;
    fill?: string;
    width?: number;
    height?: number;
}

export const AddCommentIcon: React.FC<IconProps> = ({
  size = 24,
  fill = "currentColor",
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    viewBox="-5 0 41 29"
    focusable="false"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.8335 7.44816H26.1668M21.5002 2.78149V12.1148M7.61566 23.1982C6.09977 23.0488 4.9615 22.593 4.20083 21.8308C2.8335 20.4647 2.8335 18.2643 2.8335 13.8648V13.2815C2.8335 8.88199 2.8335 6.68166 4.20083 5.31549C5.56816 3.94933 7.76733 3.94816 12.1668 3.94816H13.9168M8.0835 21.4482C7.84433 22.6172 6.7745 25.1418 7.86883 25.9573C8.4405 26.3738 9.35166 25.9293 11.1752 25.0403C12.4538 24.4162 13.7488 23.701 15.1477 23.379C15.6587 23.2623 16.1802 23.2122 16.8335 23.1982C21.233 23.1982 23.4333 23.1982 24.7995 21.8308C26.105 20.5265 26.1645 18.4615 26.1668 14.4482M9.8335 16.7815H16.8335M9.8335 10.9482H13.3335"
      stroke="#333333"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default AddCommentIcon;