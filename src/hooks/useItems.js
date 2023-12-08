import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url =
      "https://warehouse-management-server-public-iu-sumon.vercel.app/items";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return [items, setItems];
};

export default useItems;
