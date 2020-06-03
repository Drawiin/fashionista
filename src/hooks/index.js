import { useState } from 'react';

function useModal() {
  const [modal, setModal] = useState(null);

  function toggleModal() {
    if (modal === null) {
      setModal(true);
    } else if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  return [modal, toggleModal];
}

export default useModal;
