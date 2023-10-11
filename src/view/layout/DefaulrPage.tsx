interface DefaultPageProps {
  children?: React.ReactNode;
}

export const DefaultPage = ({ children }: DefaultPageProps) => {
  return <section className="bg-[#e8ecf4] w-full p-3 pr-6">{children}</section>;
};
