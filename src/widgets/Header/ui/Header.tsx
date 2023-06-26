import type { FC } from "react";
import styles from "./Header.module.css";
import { ReactComponent as ReactIcon } from "@/shared/assets/icons/react.svg";
import { ReactComponent as MenuIcon } from "@/shared/assets/icons/menu.svg";
import { ReactComponent as GithubIcon } from "@/shared/assets/icons/github.svg";
import { IconButton } from "@/shared/ui/IconButton/IconButton";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <IconButton>
          <MenuIcon className={styles.menu} />
        </IconButton>
        <div className={styles.logo}>
          <ReactIcon />
          <div className={styles.name}>
            posts<span>APP</span>
          </div>
        </div>
        <ul className={styles.navList}>
          <IconButton>
            <li>Main</li>
          </IconButton>
          <IconButton>
            <li>About me</li>
          </IconButton>
        </ul>
      </div>
      <IconButton>
        <GithubIcon className={styles.git} />
      </IconButton>
    </header>
  );
};
