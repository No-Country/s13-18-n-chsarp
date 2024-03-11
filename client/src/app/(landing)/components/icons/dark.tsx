interface Props {
  className?: string;
  width: number;
  height: number;
}
export const Dark = ({ className, width, height }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M25.5 4.25C17.2763 4.25 10.625 10.9013 10.625 19.125C10.625 24.1825 13.1538 28.6237 17 31.3225V36.125C17 37.2938 17.9562 38.25 19.125 38.25H31.875C33.0438 38.25 34 37.2938 34 36.125V31.3225C37.8462 28.6237 40.375 24.1825 40.375 19.125C40.375 10.9013 33.7237 4.25 25.5 4.25ZM19.125 42.5H31.875V44.625C31.875 45.7938 30.9188 46.75 29.75 46.75H21.25C20.0812 46.75 19.125 45.7938 19.125 44.625V42.5Z" />
    </svg>
  );
};
