import { first } from "lodash";
import { useCallback, useEffect, useState } from "react";

const useDebounce = (method, time) => {
  let timerID = null;
  const [latestArguments, setArguments] = useState([]);
 
  const debounceMethod = useCallback(() => {
      timerID = setTimeout(() => {
        method(latestArguments);
        clearTimeout(timerID);
        timerID = null;
      }, timerID);
    });
  return { debounceMethod };
};

export default useDebounce;
