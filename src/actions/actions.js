import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes";

export const add_todo= (text) =>({

    type : ADD_TODO,
    payload : {text}

})
export const toggle_todo= (id) =>({

    type : TOGGLE_TODO, 
    payload : {id}
})
export const remove_todo= (id) =>({

    type : REMOVE_TODO, 
    payload : {id}
})

export const markCompleted= (id) =>({
    type : MARK_COMPLETED, 
    payload : {id}

})

export const markIncomplete= (id) =>({

    type : markIncomplete, 
    payload : {id}

})
export const filterTodos= (filter) =>({

    type : FILTER_TODOS, 
    payload : {filter}

})
export const markAllCompleted= () =>({

    type : MARK_ALL_COMPLETED, 
    payload : {}

})
export const updateSearch= (search) =>({

    type : UPDATE_SEARCH_TERM, 
    payload : {search}

})
