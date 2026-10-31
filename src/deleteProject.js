function deleteProject (project){
    // projects.getProjects().pop();
    // return object.getProjects();
    localStorage.removeItem(`Project: ${project.getName()}`);
    console.log(project.getName());
}

export const deleterProj = deleteProject;