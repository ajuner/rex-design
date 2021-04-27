import * as React from 'react';

const SvgDynamicFilling = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M456.533 55.467c-12.8-4.267-27.733 2.133-36.266 12.8L185.6 430.933c-6.4 10.667-6.4 21.334-2.133 32C189.867 473.6 200.533 480 211.2 480h234.667c17.066 0 32-14.933 32-32V85.333C480 70.4 471.467 57.6 456.533 55.467zM810.667 544H576c-17.067 0-32 14.933-32 32v362.667c0 14.933 8.533 25.6 23.467 29.866 2.133 0 6.4 2.134 8.533 2.134 10.667 0 21.333-4.267 27.733-14.934L838.4 593.067c6.4-10.667 6.4-21.334 2.133-32S821.333 544 810.667 544zM448 544H85.333c-14.933 0-27.733 8.533-29.866 23.467-4.267 12.8 2.133 27.733 12.8 36.266L430.933 838.4c4.267 4.267 10.667 4.267 17.067 4.267 4.267 0 10.667-2.134 14.933-4.267C473.6 832 480 821.333 480 810.667V576c0-17.067-14.933-32-32-32zm507.733-123.733L593.067 185.6c-10.667-6.4-21.334-6.4-32-2.133C550.4 189.867 544 200.533 544 211.2v234.667c0 17.066 14.933 32 32 32h362.667c14.933 0 25.6-8.534 29.866-23.467s0-25.6-12.8-34.133z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgDynamicFilling);
export default ForwardRef;
