import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

export const Alert = () => {
  const aContext = useContext(AlertContext);

  const { alert } = aContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'>{alert.msg}</i>
      </div>
    )
  );
};
