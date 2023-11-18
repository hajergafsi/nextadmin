import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"facebook"}</title>
    <path d="M30.996 16.091C30.995 7.81 24.282 1.097 16 1.097S1.004 7.811 1.004 16.093c0 7.455 5.44 13.639 12.566 14.8l.086.012V20.427H9.848v-4.336h3.808v-3.302a5.293 5.293 0 0 1 5.684-5.834l-.018-.001c1.199.017 2.359.123 3.491.312l-.134-.019v3.69h-1.892a2.168 2.168 0 0 0-2.444 2.351l-.001-.009v2.812h4.159l-.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814z" />
  </svg>
);
export { SvgComponent as Facebook };
