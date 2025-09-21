import { useTheme, ThemeProvider } from "./context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Context API Demo</h1>
      <p>Tema atual: <b>{theme}</b></p>
      <button onClick={toggleTheme}>
        Alternar Tema
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
