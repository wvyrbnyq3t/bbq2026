import type { ComponentProps, HTMLAttributes } from "react";

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  const classNames = ["c-card__inner", className].filter(Boolean).join(" ");
  return (
    <div className="c-card">
      <div className={classNames} {...props} />
    </div>
  );
};

type CardTitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

const CardTitle = ({ className, level, ...props }: CardTitleProps) => {
  const classNames = ["c-card-title", className].filter(Boolean).join(" ");
  const HeadingTag = `h${level || 3}` as const;

  return <HeadingTag className={classNames} {...props} />;
};

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  const classNames = ["c-card-content", className].filter(Boolean).join(" ");
  return <div className={classNames} {...props} />;
};

export { Card, CardTitle, CardContent };
