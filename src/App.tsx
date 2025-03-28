import { HashRouter as Route, Routes } from "react-router-dom";
import { NotFound } from "./pages";
import { AuthChecker } from "./components";
import { routesToRender } from "./routes";
import { useAppSelector } from "./hooks";

const App = () => {
  const role = useAppSelector((state) => state.userSlice.role);

  return (
    <div className="max-w-[900px] h-dvh">
      <AuthChecker />
      <Routes>
        {routesToRender(role).map(({ path, element }) => (
          <Route key={path} basename={path} children={element} />
        ))}
        <Route basename="*" children={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
