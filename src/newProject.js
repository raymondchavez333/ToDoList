function createProject (name){

    const getName = () => name;

    let todos = [];

    function addToArray(todo){
        todos.push(todo);
        return todos;
    }

    // const addTodos = (item) => todos.push(item); 
    const addTodos = (item) => localStorage.setItem(`Project: ${name}`, JSON.stringify(addToArray(item)));
    // const getTodos = () => todos;
    const getTodos = () => JSON.parse(localStorage.getItem(`Project: ${name}`));

    return {getName, addTodos, getTodos};
    // return {getName, addTodos};
}
    
export const proj = createProject;