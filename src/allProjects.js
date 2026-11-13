function allProjects(){
    let projects = [];
    // const id = crypto.randomUUID();

    // const addProject = (item) => localStorage.setItem(id, JSON.stringify(item)); 
    const addProject = (item) => {
        console.log(item);
        projects.push(item)};
    // console.log(JSON.parse(localStorage.getItem("project")));
    // let objName = JSON.parse(localStorage.getItem(id));
    
    const getProjects = () => projects;
    // const getProjects = (item) => localStorage.getItem(item)

    const modifyProjects = (item) => projects = item;

    return {addProject, getProjects, modifyProjects};
    // return {addProject}
}

export const projects = allProjects;