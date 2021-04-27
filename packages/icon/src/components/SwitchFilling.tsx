import * as React from 'react';

const SvgSwitchFilling = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M934.4 659.2l-174.933-224c-4.267-4.267-10.667-8.533-17.067-8.533-2.133 0-4.267 0-6.4 2.133-8.533 2.133-14.933 10.667-14.933 19.2v110.933H405.333c-12.8 0-21.333 8.534-21.333 21.334v179.2c0 14.933 8.533 25.6 21.333 25.6h313.6V896c0 8.533 6.4 17.067 14.934 19.2 8.533 2.133 17.066 0 23.466-6.4l174.934-221.867c8.533-8.533 8.533-19.2 2.133-27.733zM640 441.6V262.4c0-14.933-8.533-25.6-21.333-25.6h-313.6V128c0-8.533-6.4-17.067-14.934-19.2s-17.066 0-23.466 6.4L89.6 334.933c-6.4 8.534-6.4 19.2 0 29.867l174.933 224c4.267 4.267 10.667 8.533 17.067 8.533 2.133 0 4.267 0 6.4-2.133 8.533-2.133 14.933-10.667 14.933-19.2V465.067h315.734C631.467 462.933 640 454.4 640 441.6z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgSwitchFilling);
export default ForwardRef;
