import type { FC } from "react";
import { useRef } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { useModal } from "@/shared/hooks/useOutsideClick";

interface MenuProps {
  handleCloseMenu: () => void;
}

export const Menu: FC<MenuProps> = ({ handleCloseMenu }): JSX.Element => {
  const { closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent): void => {
    console.log("Был клик");
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  return (
    <div className={styles.menu}>
      <div ref={modalRef} className={styles.menuContent}>
        <ul className={styles.navList}>
          <li>
            <Link to="/">
              <IconButton>Main</IconButton>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <IconButton>About me</IconButton>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
