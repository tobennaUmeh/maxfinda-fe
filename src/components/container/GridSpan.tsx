type GridSpanProps = {
  children?: React.ReactNode;
  spanWidth?: number | "full";
  colStart?: number;
  colEnd?: number;
};

const GridSpan = ({ children, spanWidth = "full" }: GridSpanProps) => {
  // const spanClass = `col-start-${colStart} col-end-${colEnd}`;
  const spanClass = `col-span-${spanWidth}`;
  console.log(spanClass);
  return <div className={spanClass}>{children}</div>;
};

export default GridSpan;
