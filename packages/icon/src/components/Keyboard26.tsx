import * as React from 'react';

const SvgKeyboard26 = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333zm-64-448c17.067 0 32-14.933 32-32v-42.666c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.666c0 17.067 14.933 32 32 32zm128 0c17.067 0 32-14.933 32-32v-42.666c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.666c0 17.067 14.933 32 32 32zm-256 0c17.067 0 32-14.933 32-32v-42.666c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.666c0 17.067 14.933 32 32 32zm384-106.666c-17.067 0-32 14.933-32 32v42.666c0 17.067 14.933 32 32 32s32-14.933 32-32v-42.666c0-17.067-14.933-32-32-32zm-256 256c17.067 0 32-14.934 32-32V512c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.667c0 17.066 14.933 32 32 32zm128 0c17.067 0 32-14.934 32-32V512c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.667c0 17.066 14.933 32 32 32zm-224-32V512c0-17.067-14.933-32-32-32s-32 14.933-32 32v42.667c0 17.066 14.933 32 32 32s32-14.934 32-32zM704 480c-17.067 0-32 14.933-32 32v42.667c0 17.066 14.933 32 32 32s32-14.934 32-32V512c0-17.067-14.933-32-32-32zm-21.333 170.667H341.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h341.334c17.066 0 32-14.934 32-32s-14.934-32-32-32z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgKeyboard26);
export default ForwardRef;
