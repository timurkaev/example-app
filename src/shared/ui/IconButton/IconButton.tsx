import type { FC, ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";
import cn from "classnames";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </button>
  );
};
