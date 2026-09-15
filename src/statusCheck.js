function statusCheck(total,project,todo){
    // return object.getTodos()[0].setStatus();
    total.getProjects()[project].getTodos()[todo].setStatus();
}

export const status = statusCheck;