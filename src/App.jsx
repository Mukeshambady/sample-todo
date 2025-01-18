import { Provider } from "react-redux";
import AddTask from "./component/add-task/AddTask";
import store from "./util/reduxStore/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <main className="m-5">
          <AddTask />
        </main>
      </Provider>
    </>
  );
}

export default App;
