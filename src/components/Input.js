import React, { useState }  from 'react'
import './Input.css'
// el import de useDispatch deberia ir sin {}
import { useDispatch } from 'react-redux'
import { saveToDo } from '../features/ToDoSlice'

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addToDo = () => {
        if(input === ''){
            alert('You must write something!')
        }else{
            dispatch(saveToDo({
                item: input,
                done: false,
                id: Date.now()
            }))
            setInput('')
        }
    }
    
    return (
        <div className="input">
            <input id="inputType" type="text" value={input} onChange={ev => setInput(ev.target.value)} placeholder="Type here..." />
            <button onClick={addToDo}>Add!</button>
        </div>
    )
}

export default Input