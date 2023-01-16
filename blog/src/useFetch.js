import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [stdErr, setStdErr] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(
    () => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              // setStdErr(er);
              throw Error("couldn't fetch the data");
            }
            return res.json();
          })
          .then((data) => {
            setBlogs(data);
            setIsPending(false);
            setStdErr(false);
          })
          .catch((err) => {
            setIsPending(false);
            setStdErr(err.message);
            console.log(err.message);
          });
      }, 1000);
    },
    [url]
  );
  
  return {blogs,isPending,stdErr};
};

export default useFetch;
