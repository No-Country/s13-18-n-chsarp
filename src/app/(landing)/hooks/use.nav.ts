import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useNav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    if (modalIsOpen && isBigScreen) {
      setModalIsOpen(false);
    }
  }, [isBigScreen]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  return {
    isBigScreen,
    modalIsOpen,
    setModalIsOpen,
  };
};
