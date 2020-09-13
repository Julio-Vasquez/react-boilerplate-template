import React from "react";
import "./Loading.scss"

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};
