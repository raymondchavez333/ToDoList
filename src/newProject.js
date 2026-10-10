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

    const modifyArray = (todo) => {
        
        // let newTodos = todos.filter((item) => item.title !== todo);
        let newTodos = todos.map(item => {
            if(item.title === todo.title){
                return todo;
            }
            else{
                return item;
            }
        });

        todos = newTodos;
        localStorage.setItem(`Project: ${name}`, JSON.stringify(todos));
       
    }

    const getArrayTodos = () => todos;

    return {getName, addTodos, getTodos, modifyArray, getArrayTodos};
    // return {getName, addTodos};
}
    
export const proj = createProject;