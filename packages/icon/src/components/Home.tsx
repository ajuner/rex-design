import * as React from 'react';

const SvgHome = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M923.733 394.667C838.4 324.267 716.8 219.733 561.067 85.333c-27.734-23.466-70.4-23.466-98.134 0C307.2 219.733 185.6 324.267 100.267 394.667 85.333 409.6 74.667 428.8 74.667 448c0 38.4 32 70.4 70.4 70.4H192v358.4c0 29.867 23.467 53.333 53.333 53.333h160c29.867 0 53.334-23.466 53.334-53.333V669.867h106.666V876.8c0 29.867 23.467 53.333 53.334 53.333h160c29.866 0 53.333-23.466 53.333-53.333V518.4h46.933c38.4 0 70.4-32 70.4-70.4 0-21.333-10.666-40.533-25.6-53.333zm-44.8 59.733h-57.6c-29.866 0-53.333 23.467-53.333 53.333v358.4H629.333v-204.8C629.333 631.467 605.867 608 576 608H448c-29.867 0-53.333 23.467-53.333 53.333v206.934H256V507.733c0-29.866-23.467-53.333-53.333-53.333h-57.6c-4.267 0-6.4-2.133-6.4-6.4 0-2.133 2.133-4.267 2.133-6.4 85.333-70.4 206.933-174.933 362.667-309.333 4.266-4.267 10.666-4.267 14.933 0C674.133 266.667 795.733 371.2 881.067 441.6c2.133 2.133 2.133 2.133 2.133 4.267 2.133 6.4-2.133 8.533-4.267 8.533z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgHome);
export default ForwardRef;
