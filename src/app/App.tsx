import type { FC } from "react";
import { Suspense } from "react";
import "@/app/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { useTheme } from "@/features/theme/hooks/useTheme";
import { Header } from "@/widgets/Header/ui/Header";
import { AppRouter } from "./providers/router";

export const App: FC = (): JSX.Element => {
  const { mode, handleToggleTheme } = useTheme();
  return (
    <div className={`app ${mode}`}>
      <BrowserRouter>
        <Suspense fallback="">
          <Header />
          <main className="main">
            <AppRouter />
          </main>
          <button onClick={handleToggleTheme}>Сменить тему</button>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
