import { IconProps } from "./types";

const BackIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 48 48"
    fill="currentColor"
  >
    <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
  </svg>
);
export default BackIcon;
