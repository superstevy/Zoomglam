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
            <a href="/" className="home-link">
              <nav className="zoom">
                <b>Z</b>oomglam
              </nav>
            </a>

            <nav className="navigation">
              <hr />
              <a href="/favorites" className="favorite-link">
                <input type="button" value="Favorites" />
              </a>
            </nav>
          </div>
          <div className="tags">
            <nav>
              {tags["results"] &&
                tags["results"].map((tag) => (
                  <a href={`/search?tag_id=${tag.id}`}>
                    <input type="submit" key={tag.id} value={tag.name} />
                  </a>
                ))}
            </nav>
          </div>
        </section>
      </header>
    </div>
  );
}
