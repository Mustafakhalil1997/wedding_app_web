import React, { useCallback, useEffect, useState } from "react";

const ShowGifts = () => {
  const [gifts, setGifts] = useState();

  const fetchGifts = useCallback(async () => {
    const url =
      "https://weddingproject2-ce55f-default-rtdb.firebaseio.com/gifts.json";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Falied to fetch gifts");
      }
      const data = await response.json();
      console.log("results", data);
      // console.log("gifts ", gifts);

      const transformedGifts = data.map((gift) => {
        return {
          name: gift.name,
          image: gift.image,
        };
      });
      setGifts(transformedGifts);
    } catch (error) {}
  }, [setGifts]);

  useEffect(() => {
    fetchGifts();
  }, [fetchGifts]);

  return (
    <React.Fragment>
      <p>This is the Gifts Page</p>
      {!gifts && <p>No gifts available</p>}
      {gifts && <p>{gifts}</p>}
    </React.Fragment>
  );
};

export default ShowGifts;
