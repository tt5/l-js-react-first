import {useDarkMode} from "../contexts/DarkModeContext"

export function Button({ children, ...rest }) {
  const isDarkMode = useDarkMode((ctx) => ctx.isDarkMode);
  const style = {
    backgroundColor: isDarkMode ? "#333" : "#CCC",
    border: "1px solid",
    color: "inherit",
  };

  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
}
