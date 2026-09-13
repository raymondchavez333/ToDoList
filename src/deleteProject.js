function deleteProject (total,project){
    // projects.getProjects().pop();
    // return object.getProjects();
    total.getProjects().splice(project,1);
}

export const deleterProj = deleteProject;