function createProject (name){

    let getName = () => name;

    let todos = [];

    let getTodos = () => todos;

    return {getName, getTodos};
}

export const proj = createProject;