import * as React from 'react';

const SvgArrowDoubleLeft = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M842.667 864c-8.534 0-14.934-2.133-21.334-8.533L480 546.133c-6.4-6.4-10.667-14.933-10.667-23.466 0-8.534 4.267-17.067 10.667-23.467l341.333-309.333c12.8-12.8 34.134-10.667 44.8 2.133 12.8 12.8 10.667 34.133-2.133 44.8L548.267 522.667 864 808.533c12.8 10.667 14.933 32 2.133 44.8-6.4 6.4-14.933 10.667-23.466 10.667zM512 864c-8.533 0-14.933-2.133-21.333-8.533L149.333 546.133c-6.4-6.4-10.666-14.933-10.666-23.466 0-8.534 4.266-17.067 10.666-23.467l341.334-309.333c12.8-12.8 34.133-10.667 44.8 2.133 12.8 12.8 10.666 34.133-2.134 44.8L217.6 522.667l315.733 285.866c12.8 12.8 14.934 32 2.134 44.8-6.4 6.4-14.934 10.667-23.467 10.667z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgArrowDoubleLeft);
export default ForwardRef;
