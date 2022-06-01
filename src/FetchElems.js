import { useEffect } from "react";
import { useState } from "react";

const useFetchElems = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        //Response property "ok" is bool from fetch
        if (!res.ok) {
          //Throw custom error based on (res.ok === false) bool
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, []);
  //console.log(`This Data ${data}`)
  return { data, isPending, error };
};

export default useFetchElems;
