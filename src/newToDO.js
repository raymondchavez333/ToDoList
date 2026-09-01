function createToDO(title, description, dueDate, priority) {

    let getTitle = () => title;
    let getDescription = () => description;
    let getDueDate = () => dueDate;
    let getPriority = () => priority;


    return {getTitle, getDescription, getDueDate, getPriority};
}


export const ToDo = createToDO;