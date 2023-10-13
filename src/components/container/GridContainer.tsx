interface GridContainerProps {
  children?: React.ReactNode;
  colNumber?: number;
}
const GridContainer = ({ children, colNumber = 12 }: GridContainerProps) => {
  const gridClass = `grid grid-cols-${colNumber} gap-4`;
  return <div className={gridClass}>{children}</div>;
};

export default GridContainer;
