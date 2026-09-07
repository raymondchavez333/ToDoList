function createToDO(title, description, dueDate, priority) {

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    let status = "unchecked";
    
    const getStatus = () => status;
    const setStatus = () => status === "unchecked" ? status = "checked" : status = "unchecked";
    const setPriority = (option) => priority = option;

    return {getTitle, getDescription, getDueDate, getPriority, getStatus, setStatus, setPriority};
}


export const ToDo = createToDO;