import * as React from 'react';

const SvgAshbin = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M874.667 241.067H672v-70.4C672 130.133 637.867 96 597.333 96H426.667C386.133 96 352 130.133 352 170.667v70.4H149.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h53.334v548.266c0 40.534 34.133 74.667 74.666 74.667h469.334c40.533 0 74.666-34.133 74.666-74.667V305.067h53.334c17.066 0 32-14.934 32-32s-14.934-32-32-32zM416 170.667c0-6.4 4.267-10.667 10.667-10.667h170.666c6.4 0 10.667 4.267 10.667 10.667v70.4H416v-70.4zm341.333 682.666c0 6.4-4.266 10.667-10.666 10.667H277.333c-6.4 0-10.666-4.267-10.666-10.667v-544h490.666v544zM426.667 736c17.066 0 32-14.933 32-32V490.667c0-17.067-14.934-32-32-32s-32 14.933-32 32V704c0 17.067 14.933 32 32 32zm170.666 0c17.067 0 32-14.933 32-32V490.667c0-17.067-14.933-32-32-32s-32 14.933-32 32V704c0 17.067 14.934 32 32 32z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgAshbin);
export default ForwardRef;
