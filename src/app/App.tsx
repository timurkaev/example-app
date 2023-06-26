import type { FC } from "react";
import "@/app/styles/index.css";
import { useTheme } from "@/features/theme/hooks/useTheme";
import { Header } from "@/widgets/Header/ui/Header";

export const App: FC = (): JSX.Element => {
  const { mode, handleToggleTheme } = useTheme();
  return (
    <div className={`app ${mode}`}>
      <Header />
      <button onClick={handleToggleTheme}>Сменить тему</button>
    </div>
  );
};
