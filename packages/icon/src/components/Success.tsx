import * as React from 'react';

const SvgSuccess = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333zm189.867-503.466L448 637.867 322.133 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.334 149.333c6.4 6.4 14.933 8.534 23.466 8.534s17.067-2.134 23.467-8.534L750.933 428.8c12.8-12.8 12.8-32 0-44.8-14.933-12.8-36.266-12.8-49.066-2.133z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgSuccess);
export default ForwardRef;
