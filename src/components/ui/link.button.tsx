import { Link } from "react-router-dom";

const LinkButton = ({
  children,
  flexDir,
  absolute,
  position,
  to,
}: {
  children: JSX.Element;
  flexDir: "flex-row" | "flex-row-reverse";
  absolute: boolean;
  position?: "left-top" | "right-top";
  to: string;
}) => {
  return (
    <Link
      className={`hover:bg-black w-[120px] hover:font-bold hover:scale-x-110  justify-center transition-all gap-2 border  flex rounded-xl bg-white text-black hover:text-white p-3 ${flexDir} ${
        absolute && "absolute"
      } ${
        position === "left-top"
          ? "top-4 left-4 origin-left"
          : position === "right-top"
          ? "top-4 right-4 origin-right"
          : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export { LinkButton };
