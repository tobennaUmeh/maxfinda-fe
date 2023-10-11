import React, { useState, useEffect, useRef, HTMLProps } from "react";

interface IconProps extends HTMLProps<SVGSVGElement> {
  name: string;
  size?: number;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  fill = "#000",
  ...rest
}) => {
  const ImportedIconRef = useRef<React.FC | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`./icons/${name}.svg`);
        console.log(namedImport);
        ImportedIconRef.current = namedImport;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const ImportedIcon = ImportedIconRef.current;
    return (
      <svg width={size} height={size} fill={fill} {...rest}>
        <ImportedIcon />
      </svg>
    );
  }

  return null;
};

export default Icon;
