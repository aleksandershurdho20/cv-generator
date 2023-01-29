import { useState,useCallback } from "react";

const useToggle = (initialState = false) => {
  const [visible, setVisibility] = useState(initialState);

  const toggle = useCallback(() => setVisibility((prev) => !prev), []);


  return {visible, toggle, setVisibility};
};

export default useToggle;