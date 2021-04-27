import * as React from 'react';

const SvgMinusCircle = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M512 949.333C270.933 949.333 74.667 753.067 74.667 512S270.933 74.667 512 74.667 949.333 270.933 949.333 512 753.067 949.333 512 949.333zm0-810.666C307.2 138.667 138.667 307.2 138.667 512S307.2 885.333 512 885.333 885.333 716.8 885.333 512 716.8 138.667 512 138.667zM682.667 544H341.333c-17.066 0-32-14.933-32-32s14.934-32 32-32h341.334c17.066 0 32 14.933 32 32s-14.934 32-32 32z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgMinusCircle);
export default ForwardRef;
