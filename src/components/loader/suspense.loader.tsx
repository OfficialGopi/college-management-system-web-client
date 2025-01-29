import "./suspense.loader.styles.css";

const SuspenseLoader = () => {
  return (
    <div className="w-full h-full">
      <div className="loadingSuspenseSpinner">
        <div className="loadingSuspense">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SuspenseLoader;
