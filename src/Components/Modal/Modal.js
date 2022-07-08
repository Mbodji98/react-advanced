import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        OPEN
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                sequi! Temporibus rerum autem libero expedita sunt asperiores
                laudantium ipsam labore, nulla veniam! Cumque atque sapiente a
                sunt non laborum placeat, eum distinctio dicta iure voluptate
                dolore, in quae est explicabo! Quod, qui! Repudiandae soluta
                nisi quo dolore doloribus, magni est.
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
