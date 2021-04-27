import * as React from 'react';

const SvgFileAdd = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M842.667 285.867L654.933 98.133C640 83.2 622.933 76.8 601.6 76.8H234.667C194.133 74.667 160 108.8 160 149.333v725.334c0 40.533 34.133 74.666 74.667 74.666h554.666c40.534 0 74.667-34.133 74.667-74.666v-537.6c0-19.2-8.533-38.4-21.333-51.2zm-44.8 44.8h-179.2c-6.4 0-10.667-4.267-10.667-10.667V140.8l189.867 189.867zm-8.534 554.666H234.667c-6.4 0-10.667-4.266-10.667-10.666V149.333c0-6.4 4.267-10.666 10.667-10.666H544V320c0 40.533 34.133 74.667 74.667 74.667H800v480c0 6.4-4.267 10.666-10.667 10.666zM618.667 586.667H544V512c0-17.067-14.933-32-32-32s-32 14.933-32 32v74.667h-74.667c-17.066 0-32 14.933-32 32s14.934 32 32 32H480v74.666c0 17.067 14.933 32 32 32s32-14.933 32-32v-74.666h74.667c17.066 0 32-14.934 32-32s-14.934-32-32-32z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgFileAdd);
export default ForwardRef;
