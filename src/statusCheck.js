function statusCheck(object){
    return object.getTodos()[0].setStatus();
}

export const status = statusCheck;