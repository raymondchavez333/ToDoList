function allProjects(project){
    let projects = [];

    const addProject = (item) => projects.push(item); 
    const getProjects = () => projects;

    return {addProject, getProjects};
}

export const projects = allProjects();