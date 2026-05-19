import type { HTMLAttributes } from "react";

const Page = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="l-page">
      <div className="l-page__inner" {...props} />
    </div>
  );
};

type PageHeaderProps = {
  position: "fixed" | "sticky";
} & HTMLAttributes<HTMLDivElement>;

const PageHeader = ({ position, ...props }: PageHeaderProps) => {
  return (
    <header className={`l-page-header l-page-header--${position}`}>
      <div className="l-page-header__inner" {...props} />
    </header>
  );
};

const PageHeaderTitle = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className="l-page-header__title" {...props} />;
};

const PageContent = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className="l-page-content">
      <div className="l-page-content-inner" {...props} />
    </main>
  );
};

const PageFooter = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className="l-page-footer">
      <div className="l-page-footer__inner" {...props} />
    </footer>
  );
};

export { Page, PageHeader, PageHeaderTitle, PageContent, PageFooter };
