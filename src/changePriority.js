function changePriority (object,option){
    return object.getTodos()[0].setPriority(option);
}

export const priority = changePriority;