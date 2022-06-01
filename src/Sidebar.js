import useFetchElems from "./FetchElems";
import Elements from "./Elements";

const Sidebar = () => {
  const {
    data: elements,
    isPending,
    error,
  } = useFetchElems("http://localhost:9000/elements");

  return (
    <div className="sidebar">
      <div className="sidebar">
        <h3>Elements</h3>
        {error && <div>{`${error}`}</div>}
        {error && (
          <div>{`Is 'npx json-server --watch data/db.json --port 8500' online?`}</div>
        )}
        {isPending && <div>Loading...</div>}
        {elements && <Elements elements={elements} title="All elements" />}
      </div>
    </div>
  );
};

export default Sidebar;
