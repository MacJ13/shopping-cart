/* eslint-disable react/prop-types */
const Modal = ({ onClick, children }) => {
  return (
    <div className="modal" onClick={onClick}>
      {children}
    </div>
  );
};

export default Modal;
