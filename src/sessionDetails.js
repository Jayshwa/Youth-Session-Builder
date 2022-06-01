import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetchElems from "./FetchElems";

const SessionDetails = () => {
  const { id } = useParams();
  const {
    data: elements,
    isPending,
    error,
  } = useFetchElems("http://localhost:8500/elements/" + id);
  const history = useHistory();

  const handleClick = () => {
    /*fetch("http://localhost:8500/elements/" + elements.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });*/
  };

  return (
    <div className="session-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {elements && (
        <article>
          <h2>{elements.session}</h2>
          {console.log(elements.body)}
          <p>{elements.body}</p>
          <div className="button-container">
            <button className="print-button" onClick={handleClick}>
              Print
            </button>{" "}
            <button className="delete-button" onClick={handleClick}>
              Delete
            </button>{" "}
            <button className="delete-button" onClick={handleClick}>
              Delete
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default SessionDetails;
