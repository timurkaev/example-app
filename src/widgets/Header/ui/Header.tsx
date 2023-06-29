import { useState, type FC } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as ReactIcon } from "@/shared/assets/icons/react.svg";
import { ReactComponent as MenuIcon } from "@/shared/assets/icons/menu.svg";
import { ReactComponent as GithubIcon } from "@/shared/assets/icons/github.svg";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { Menu } from "@/widgets/Menu";
import { useModal } from "@/shared/hooks/useOutsideClick";

export const Header: FC = (): JSX.Element => {
  const { isOpen, openModal } = useModal();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (): void => {
    setShowMenu(true);
  };

  const handleCloseMenu = (): void => {
    setShowMenu(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <IconButton onClick={openModal}>
            <MenuIcon className={styles.menu} />
          </IconButton>
          <div className={styles.logo}>
            <ReactIcon />
            <div className={styles.name}>
              posts<span>APP</span>
            </div>
          </div>
        </div>
        <Link to="https://github.com/timurkaev/example-app">
          <IconButton>
            <GithubIcon className={styles.git} />
          </IconButton>
        </Link>
      </header>
      {isOpen ? <Menu handleCloseMenu={handleCloseMenu} /> : null}
    </>
  );
};
