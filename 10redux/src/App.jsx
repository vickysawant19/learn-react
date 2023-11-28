import { Provider } from "react-redux"
import AddTodo from "./components/addTodo"
import Todos from "./components/todos"
import { store } from "./app/store"

import "./App.css"

function App() {

  return (
    <>
    <Provider store={store}>
     <AddTodo/>
     <Todos/>
     </Provider>
    </>
  )
}

export default App
