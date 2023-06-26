import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useTypedSelector } from "@/app/store/hooks/useTypedSelector";

interface UseThemeHook {
  mode: "light" | "dark";
  handleToggleTheme: () => void;
}

export const useTheme = (): UseThemeHook => {
  const { mode } = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = (): void => {
    dispatch(toggleTheme());
  };

  return { mode, handleToggleTheme };
};
