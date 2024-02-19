import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"


const CreateTodoPage = () => {
    const dispatch = useDispatch()
    const [value,setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodoAction(value))
        setValue('')
    }


    return <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button>ADD</button>

        <Link to={'/'}>To List</Link>
    </form>
}

export default CreateTodoPage