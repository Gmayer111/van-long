import React from "react";

const CloseIcon = ({ iconStroke = "white" }: { iconStroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke={iconStroke}
    width={"35px"}
    height={"35px"}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export default CloseIcon;
