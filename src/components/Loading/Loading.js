import React from "react";

import i18n from './../../i18n'

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <p>{i18n.t('loading')}</p>
    </div>
  );
};
