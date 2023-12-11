import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className={`alert ${variant} text-center alert-message mt-3`}>
      <div className="error-icon">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      </div>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
