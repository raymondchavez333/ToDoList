// function createToDO(title="Hello", description= "anything just type it here", dueDate= "month/day/year", priority="high/medium/low") {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;

//     let getTitle = () => this.title;
//     let getDescription = () => this.description;
//     let getDueDate = () => this.dueDate;
//     let getPriority = () => this.priority;


//     return {getTitle, getDescription, getDueDate, getPriority};
// }

function createToDO(title) {

    const getTitle = () => title;
    
    return {getTitle};
}

export const ToDo = createToDO;