function deleteProject (projects){
    projects.getProjects().pop();
    return object.getProjects();
}

export const deleterProj = deleteProject;