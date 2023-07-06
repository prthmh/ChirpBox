import React from "react";
import "./FilterTab.css";
import { usePost } from "../../context/PostContext";
import { useState } from "react";
import { ACTIONS } from "../../utils/constants";

const FilterTab = () => {
  const {
    postState: { filter },
    postDispatch,
  } = usePost();
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <div className="filter_tab">
      <div> {filter} Posts</div>
      <div
        className="filter_btn"
        onClick={() => setShowFilterModal((prevState) => !prevState)}
      >
        <i className="fa-solid fa-filter"></i>

        {showFilterModal && (
          <div className="filter_modal">
            <button
              className="filter_select"
              style={{
                backgroundColor:
                  filter === "Trending" ? "var(--main-bg-color)" : "",
                border:
                  filter === "Trending"
                    ? ""
                    : "1px solid var(--text-color-dark)",
              }}
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Trending",
                });
                setShowFilterModal(false);
              }}
            >
              <i className="fa-solid fa-arrow-trend-up"></i> Trending
            </button>
            <button
              className="filter_select"
              style={{
                backgroundColor:
                  filter === "Latest" ? "var(--main-bg-color)" : "",
                border:
                  filter === "Latest" ? "" : "1px solid var(--text-color-dark)",
              }}
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Latest",
                });
                setShowFilterModal(false);
              }}
            >
              <i className="fa-sharp fa-solid fa-arrow-up"></i> Latest
            </button>
            <button
              className="filter_select"
              style={{
                backgroundColor:
                  filter === "Oldest" ? "var(--main-bg-color)" : "",
                border:
                  filter === "Oldest" ? "" : "1px solid var(--text-color-dark)",
              }}
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Oldest",
                });
                setShowFilterModal(false);
              }}
            >
              <i className="fa-sharp fa-solid fa-arrow-down"></i> Oldest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
