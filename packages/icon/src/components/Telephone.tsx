import * as React from 'react';

const SvgTelephone = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M817.067 586.667c-32-4.267-64-12.8-96-23.467-38.4-14.933-81.067-4.267-110.934 23.467L582.4 614.4C512 569.6 452.267 512 409.6 441.6l27.733-27.733c27.734-29.867 38.4-72.534 23.467-110.934-10.667-29.866-19.2-61.866-23.467-96-6.4-51.2-51.2-89.6-104.533-89.6H224c-32 0-59.733 12.8-78.933 34.134-19.2 21.333-29.867 51.2-27.734 81.066 12.8 117.334 53.334 230.4 117.334 328.534 57.6 91.733 136.533 170.666 228.266 228.266 98.134 64 211.2 104.534 328.534 117.334H800c25.6 0 51.2-10.667 70.4-27.734 21.333-19.2 34.133-49.066 34.133-76.8v-108.8C908.8 640 868.267 595.2 817.067 586.667zm25.6 106.666v108.8c0 10.667-4.267 23.467-12.8 29.867-8.534 8.533-19.2 10.667-29.867 10.667C693.333 832 588.8 793.6 499.2 736 416 682.667 343.467 610.133 290.133 526.933c-57.6-89.6-96-194.133-106.666-300.8 0-10.666 2.133-23.466 10.666-32 8.534-8.533 19.2-12.8 29.867-12.8h108.8c21.333 0 38.4 14.934 40.533 34.134 4.267 36.266 14.934 74.666 27.734 108.8 6.4 14.933 2.133 32-8.534 42.666L345.6 413.867c-10.667 10.666-12.8 25.6-4.267 38.4 55.467 96 134.4 174.933 230.4 230.4 12.8 6.4 27.734 4.266 38.4-4.267l46.934-46.933c10.666-10.667 27.733-14.934 42.666-8.534 36.267 12.8 72.534 21.334 108.8 27.734 19.2 2.133 34.134 19.2 34.134 42.666 0-2.133 0-2.133 0 0z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgTelephone);
export default ForwardRef;
