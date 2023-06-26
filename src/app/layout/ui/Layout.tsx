import type { FC, ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
