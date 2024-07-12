type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  home: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.75}
        d="M21 14h-5m0 2v-3.5a2.5 2.5 0 0 1 5 0V16M4.5 13h6M3 16l4.5-9l4.5 9"
      ></path>
    </svg>
  ),
};
