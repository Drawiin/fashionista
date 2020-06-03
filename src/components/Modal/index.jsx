import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Modal({ title, children, modal, toggleModal }) {
  function visibilityModal() {
    if (modal === null) {
      return 'hidden';
    } else if (modal) {
      return 'slideIn';
    } else {
      return 'slideOut';
    }
  }

  function visibilityBackground() {
    if (modal === null) {
      return 'hidden';
    } else if (modal) {
      return 'fadeIn';
    } else {
      return 'fadeOut';
    }
  }

  return (
    <>
      <div className={`modal ${visibilityModal()}`}>
        <header className="modal__header">
          <FiArrowLeft color="#000000" size={30} onClick={toggleModal} />
          <h1 className="modal__title">{title}</h1>
        </header>
        <div className="modal__content">{children}</div>
      </div>
      <div className={`modal__background ${visibilityBackground()}`}></div>
    </>
  );
}
