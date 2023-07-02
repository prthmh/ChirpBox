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
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Trending",
                });
                setShowFilterModal(false);
              }}
            >
              Trending
            </button>
            <button
              className="filter_select"
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Latest",
                });
                setShowFilterModal(false);
              }}
            >
              Latest
            </button>
            <button
              className="filter_select"
              onClick={(event) => {
                event.stopPropagation();
                postDispatch({
                  type: ACTIONS.FILTER_POST,
                  payload: "Oldest",
                });
                setShowFilterModal(false);
              }}
            >
              Oldest
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
