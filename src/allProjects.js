function allProjects(){
    // let projects = [];
    const id = crypto.randomUUID();

    const addProject = (item) => localStorage.setItem(id, JSON.stringify(item)); 
    // const addProject = (item) => projects.push(item);
    // console.log(JSON.parse(localStorage.getItem("project")));
    let objName = JSON.parse(localStorage.getItem(id));
    
    // const getProjects = () => projects;
    const getProjects = (item) => localStorage.getItem(item)

    return {addProject, getProjects};
    // return {addProject}
}

export const projects = allProjects;