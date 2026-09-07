function createProject (name){

    const getName = () => name;

    let todos = [];

    const addTodos = (item) => todos.push(item); 
    const getTodos = () => todos;

    return {getName, addTodos, getTodos};
}

export const proj = createProject;