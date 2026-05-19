const Loading = () => {
  return <div className="l-loading" />;
};

const LoadingDots = () => {
  return (
    <span className="c-loadingDots">
      <span className="c-loadingDots__dot"></span>
      <span className="c-loadingDots__dot"></span>
      <span className="c-loadingDots__dot"></span>
    </span>
  );
};

export { Loading, LoadingDots };
