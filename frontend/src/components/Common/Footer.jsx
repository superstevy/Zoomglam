import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchImages } from "../../reducks/images/operations";
import { getHasNext } from "../../reducks/images/selectors.js";

export default function Footer() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const hasNext = getHasNext(selector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  }, []);

  const clickShowMore = () => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  };
  return (
    <div>
      <footer className="more">
        {hasNext && (
          <input
            type="submit"
            value="Show more"
            onClick={() => clickShowMore()}
          />
        )}
        <hr />
        <div className="zoom">
          <b>Z</b>oomglam
        </div>
      </footer>
    </div>
  );
}
