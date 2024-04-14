import { useState } from "react";
import { BsPlus, BsPlusCircleFill, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add_Todo } from "../actions/actions";
import { UPDATE_SEARCH_TERM } from "../actions/actionTypes";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
 
const Todo = () => {
    
    const dispatch = useDispatch()
    
    const[newTodoText,setNewTodoText] = useState("") ;
    const[searchTerm,setSeachTerm] = useState("") ;
    // console.log(newTodoText);
    const handleAddToDo = (text) => {
        dispatch(add_Todo(text))
    }
    const handleAddToDoClick = () =>{
        if(newTodoText.trim()!== ""){
            handleAddToDo(newTodoText.trim());
            setNewTodoText("")
        }
    }

    const handleSearchChange = (value) =>{
        setSeachTerm(value);
        dispatch(UPDATE_SEARCH_TERM())
    }

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
        <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase ">Personal Todo Application</h2>

 
        <div className="flex item-center mb-4">
            <input value={newTodoText} onChange={(e) =>setNewTodoText(e.target.value)} type="text" name="text" id="addTodoInput" placeholder="Add Task" className="flex-grow p-2 border-b-2 bg-gray-300 focus:outline-none focus:border-blue-500" />

            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg bg-blue-600 focus:outline" onClick={handleAddToDoClick}><BsPlus /></button>
        </div>


        {/* Filter and Search */}
        

        <div className="flex items-center justify-between">
            <FilterButton />

            <div className="flex item-center mb-4">
            <input value={searchTerm} onChange={(e) =>handleSearchChange(e.target.value)} type="text" name="text" id="addTodoInput" placeholder="Seach" className="flex-grow p-2 border-b-2 bg-gray-300 focus:outline-none focus:border-blue-500" />
            
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg bg-blue-600 focus:outline" ><BsSearch /></button>
            </div> 

        </div>

        <TodoList />
      
    </div>
  )
}

export default Todo;
