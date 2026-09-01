function createProject (name){

    let getName = () => name;

    return {getName};
}

export const proj = createProject;