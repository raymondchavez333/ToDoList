function createToDO(title, description, dueDate, priority) {

    let getTitle = () => title;
    let getDescription = () => description;
    let getDueDate = () => dueDate;
    let getPriority = () => priority;


    return {getTitle, getDescription, getDueDate, getPriority};
}

// function createToDO(title) {

//     const getTitle = () => title;
    
//     return {getTitle};
// }

export const ToDo = createToDO;