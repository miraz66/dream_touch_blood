import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ children, onClose, css }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to close the modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={css}>
      <div ref={modalRef} className="bg-white p-6 rounded shadow-md">
        {children}
      </div>
    </div>
  );
};

//fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  onClose: PropTypes.bool.isRequired,
  css: PropTypes.string.isRequired,
};

export default Modal;
