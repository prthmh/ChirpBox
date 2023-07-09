import React from "react";
import "./PageTemplate.css";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";
import TopBar from "../../components/TopBar/TopBar";

const PageTemplate = ({ children }) => {
  return (
    <>
      <div className="top">
        <TopBar />
      </div>
      <div className="page">
        <div className="page_nav_section">
          <PageNavigations />
        </div>
        <div className="page_content">{children}</div>
        <div className="suggest_section">
          <SuggestedUserList />
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
