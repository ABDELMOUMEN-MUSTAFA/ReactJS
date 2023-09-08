import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [dark, setDark] = useDarkMode();
  return (
    <>
      <span onClick={() => setDark(!dark)} className="dark-mode">
        {dark ? <MdModeNight /> : <MdLightMode />}
      </span>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
