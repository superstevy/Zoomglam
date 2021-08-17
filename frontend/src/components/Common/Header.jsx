import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTags } from "../../reducks/tags/selectors.js";
import { fetchTags } from "../../reducks/tags/operations";

export default function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const tags = getTags(selector);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div>
      <header>
        <section className="navbar">
          <div className="container">
            <nav className="zoom">
              <b>Z</b>oomglam
            </nav>
            <nav className="navigation">
              <hr />
              <input type="button" value="Favorites" />
            </nav>
          </div>
          <div className="tags">
            <nav>
              {tags &&
                tags.map((tag) => {
                  return <input type="submit" key={tag.id} value={tag.name} />;
                })}
            </nav>
          </div>
        </section>
      </header>
    </div>
  );
}
