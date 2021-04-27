import * as React from 'react';

const SvgFilm = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M853.333 96H170.667C130.133 96 96 130.133 96 170.667v682.666C96 893.867 130.133 928 170.667 928h682.666C893.867 928 928 893.867 928 853.333V170.667C928 130.133 893.867 96 853.333 96zM864 480H714.667V373.333H864V480zm-213.333 0H373.333V160h277.334v320zm-341.334 0H160V373.333h149.333V480zM160 544h149.333v106.667H160V544zm213.333 0h277.334v320H373.333V544zm341.334 0H864v106.667H714.667V544zM864 170.667v138.666H714.667V160h138.666c6.4 0 10.667 4.267 10.667 10.667zM170.667 160h138.666v149.333H160V170.667c0-6.4 4.267-10.667 10.667-10.667zM160 853.333V714.667h149.333V864H170.667c-6.4 0-10.667-4.267-10.667-10.667zM853.333 864H714.667V714.667H864v138.666c0 6.4-4.267 10.667-10.667 10.667z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgFilm);
export default ForwardRef;
