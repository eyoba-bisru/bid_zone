import dateUtil from "@/lib/dateUtil";
import React, { useEffect, useState } from "react";

const useTimer = (bidFinish: Date) => {
  const [bidFinished, setBidFinished] = useState(dateUtil(bidFinish));

  useEffect(() => {
    const interval = setInterval(() => {
      return setBidFinished(dateUtil(bidFinish));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [bidFinish]);

  return bidFinished;
};

export default useTimer;
