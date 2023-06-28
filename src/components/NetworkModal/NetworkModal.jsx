import React from "react";
import "./NetworkModal.css";
import UserList from "../UserList/UserList";

const NetworkModal = ({ showNetworkModal, setShowNetworkModal }) => {
  const handleModalClose = () => {
    setShowNetworkModal({ ...showNetworkModal, show: false, type: "" });
  };
  return (
    <div className="network_section">
      <div className="network_header">
        <h3 style={{marginTop: "0"}} >{showNetworkModal.type}</h3>
        <div className="cancel_btn" onClick={handleModalClose} style={{cursor: "pointer"}} >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <UserList usersInList={showNetworkModal.users} />
    </div>
  );
};

export default NetworkModal;
