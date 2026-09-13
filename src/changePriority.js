function changePriority (total,project,todo,option){
    // return object.getTodos()[0].setPriority(option);
    total.getProjects()[project].getTodos()[todo].setPriority(option);
}

export const priority = changePriority;