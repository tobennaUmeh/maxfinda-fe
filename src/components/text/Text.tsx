type TextProps = {
  text: string;
  style?: string;
};

export const Text: React.FC<TextProps> = ({ text, style = "" }) => (
  <div className={style}>{text}</div>
);
