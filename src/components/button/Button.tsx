interface buttonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: buttonProps) => {
  return (
    <button
      className="py-4 text-white text-2xl transition-all hover:text-highlight-200 border-2 border-highlight-200 hover:bg-white bg-highlight-200 rounded-full  w-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SmallButton = ({ text, onClick }: buttonProps) => {
  return (
    <button
      className="py-2 text-white text-lg mt-2 transition-all hover:text-highlight-200 border-2 border-highlight-200 hover:bg-white bg-highlight-200 rounded-full w-[7rem]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
