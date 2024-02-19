import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const TodoListPage = () => {
    const {todoList} = useSelector((state) => state.todo)
    return <div>
        <h2>todo list</h2>
        {todoList.map((item, i) => <div key={i}>{item}</div>)}
        <Link to={'/create'}>To Create</Link>
    </div>
}

export default TodoListPage

