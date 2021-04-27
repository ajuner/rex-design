import * as React from 'react';

const SvgDatabaseConfig = (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M406.513 615.854c-111.949-6.855-207.655-35.33-263.656-75.09v76.672c0 52.256 114.005 95.654 263.656 103.985v52.626c-111.949-6.855-207.655-35.277-263.656-75.089v76.671h-52.73V274.684c0-101.93 165.258-184.559 369.117-184.559s369.117 82.63 369.117 184.559v166.525h-52.73V369.81c-64.596 53.574-182.134 89.432-316.387 89.432s-251.791-35.858-316.387-89.432v89.432c0 52.256 114.005 95.654 263.656 103.985v52.626zm52.73 317.968c-203.858 0-369.117-70.818-369.117-158.193h52.731c0 58.268 141.636 105.462 316.387 105.462v52.731zm0-527.31c174.751 0 316.387-59.06 316.387-131.828S633.994 142.856 459.244 142.856s-316.387 59.059-316.387 131.828S284.493 406.51 459.244 406.51zM918.11 752.426l-36.7-21.356c2.056-11.231 3.374-22.674 3.374-34.539a190.887 190.887 0 00-3.374-34.538l36.7-21.41a31.797 31.797 0 0011.496-43.239l-31.375-54.787a31.217 31.217 0 00-42.87-11.601l-37.123 21.62a187.723 187.723 0 00-58.954-34.803V490.88c0-17.454-14.026-31.638-31.375-31.638h-62.75a31.533 31.533 0 00-31.375 31.638v26.893a187.723 187.723 0 00-58.953 34.803l-37.123-21.62a31.217 31.217 0 00-42.87 11.6l-31.375 54.841a31.797 31.797 0 0011.495 43.24l36.701 21.356a190.887 190.887 0 00-3.374 34.538c0 11.865 1.318 23.308 3.374 34.54l-36.7 21.408a31.797 31.797 0 00-11.496 43.24l31.375 54.787a31.217 31.217 0 0042.87 11.601l37.123-21.62c17.349 14.87 37.017 26.999 58.953 34.803v26.893c0 17.454 14.027 31.638 31.375 31.638h62.75a31.533 31.533 0 0031.375-31.638V875.29a187.723 187.723 0 0058.954-34.803l37.122 21.62a31.27 31.27 0 0042.87-11.6l31.376-54.841a31.797 31.797 0 00-11.496-43.24zm-38.968 31.164l-14.448 24.626a14.607 14.607 0 01-19.774 5.167l-40.181-22.78a145.01 145.01 0 01-79.255 45.033v31.27c0 7.804-6.486 14.184-14.501 14.184h-28.897a14.343 14.343 0 01-14.5-14.237v-31.217a145.01 145.01 0 01-79.256-45.032l-40.18 22.78a14.607 14.607 0 01-19.775-5.168l-14.448-24.626a14.026 14.026 0 015.273-19.352l40.34-22.885a138.63 138.63 0 01-7.647-44.822c0-15.713 2.848-30.69 7.699-44.821L519.2 628.825a14.026 14.026 0 01-5.273-19.353l14.448-24.625a14.607 14.607 0 0119.774-5.168l40.181 22.78a145.01 145.01 0 0179.255-45.032v-31.27c0-7.857 6.486-14.184 14.501-14.184h28.897c8.015 0 14.5 6.327 14.5 14.237v31.217a145.01 145.01 0 0179.256 45.032l40.18-22.78a14.607 14.607 0 0119.775 5.168l14.448 24.625a14.026 14.026 0 01-5.273 19.353l-40.34 22.885c4.747 14.132 7.647 29.108 7.647 44.821 0 15.714-2.848 30.69-7.646 44.822l40.34 22.885a14.026 14.026 0 015.272 19.352zM696.533 617.436a79.097 79.097 0 100 158.193 79.097 79.097 0 000-158.193zm0 105.462a26.366 26.366 0 110-52.731 26.366 26.366 0 010 52.731z" />
  </svg>
);

const ForwardRef = React.forwardRef(SvgDatabaseConfig);
export default ForwardRef;
