import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./App/store";
import router from "./routers/routers";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
