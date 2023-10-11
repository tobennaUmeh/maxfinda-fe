interface GridContainerProps {
  children?: React.ReactNode;
}
const GridContainer = ({ children }: GridContainerProps) => {
  return <div className="grid grid-cols-12 gap-2">{children}</div>;
};

export default GridContainer;
