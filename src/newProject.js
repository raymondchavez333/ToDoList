function createProject (name){

    const getName = () => name;

    // let todos = [];

    // const addTodos = (item) => todos.push(item); 
    const addTodos = (item) => localStorage.setItem(name, JSON.stringify(item));
    // const getTodos = () => todos;
    const getTodos = () => localStorage.getItem(name);

    return {getName, addTodos, getTodos};
    // return {getName, addTodos};
}
    
export const proj = createProject;