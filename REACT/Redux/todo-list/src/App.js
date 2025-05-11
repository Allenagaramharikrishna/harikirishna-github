import { Form } from "./components/Form";
import { Todos } from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/Todoapp/actions";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-List USING REACT-REDUX</h1>
      <Form />
      <Todos />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
