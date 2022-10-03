import React, { useState, useEffect } from "react";

function useHistory() {
  const [gethistory, setGetHistory] = useState();
  useEffect(() => {
    if (typeof window !== undefined) {
      setGetHistory(localStorage.getItem("ill@history") as any);
    }
  }, []);
  return [gethistory];
}

export default useHistory;
