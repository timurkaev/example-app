import { useState } from "react";

type UseModalResult = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = (): UseModalResult => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
