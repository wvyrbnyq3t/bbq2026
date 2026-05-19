import type { HTMLAttributes } from "react";

const Flexbox = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const classNames = ["l-flexBox", className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <div className="l-flexBox__inner" {...props} />
    </div>
  );
};

export default Flexbox;
