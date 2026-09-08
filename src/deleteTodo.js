function deleteTodo (object){
    object.getTodos().pop();
    return object.getTodos();
}

export const deleter = deleteTodo;