import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { GlobalCss, MainContainer } from "./main-styles";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
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
