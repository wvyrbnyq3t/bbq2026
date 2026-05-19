import type { HTMLAttributes, ComponentProps } from "react";

const Container = ({ children, className, style, ...props }: ComponentProps<"div">) => {
  const combinedClassNames = ["l-container", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassNames} {...props}>
      <div className="l-container__inner" style={style}>
        {children}
      </div>
    </div>
  );
};

type ContainerTitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

const ContainerTitle = ({
  className,
  level,
  ...props
}: ContainerTitleProps) => {
  const combinedClassNames = ["l-container__title", className]
    .filter(Boolean)
    .join(" ");

  const Tag = `h${level}` as const;

  return <Tag className={combinedClassNames} {...props} />;
};

export { Container, ContainerTitle };
