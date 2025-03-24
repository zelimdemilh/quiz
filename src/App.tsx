import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages";
import { AuthChecker } from "./components";
import { routesToRender } from "./Routes";
import { useAppSelector } from "./hooks";

const App = () => {
  const role = useAppSelector((state) => state.userSlice.role);

  return (
    <div className="maax-w-[900px] h-dvh">
      <AuthChecker />
      <Routes>
        {routesToRender(role).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
