function createProject (name){

    let getName = () => name;

    let todos = [];

    let addTodos = (item) => todos.push(item); 
    let getTodos = () => todos;

    return {getName, addTodos, getTodos};
}

export const proj = createProject;