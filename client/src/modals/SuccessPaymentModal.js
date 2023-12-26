import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./Modal.css";

export default function SuccessPaymentModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className='success-modal fail-modal'>
              <BsCheckCircle className='verified-icon' />
              <CloseOutlinedIcon
                className='close-icon'
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <div className='success-message'>
              <h5 className='text-danger'>Success</h5>
              <p>Your payment has been verified successfully!!!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
