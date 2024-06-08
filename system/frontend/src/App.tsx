import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalCss, MainContainer } from "./main-styles";
import Home from "./views/home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <MainContainer>
      <GlobalCss />
      <RouterProvider router={routes} />
    </MainContainer>
  );
}

export default App;
