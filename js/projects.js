const response = await fetch("./data/projects.json");

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
const projects = data.projects;

const root = document.getElementById("project-list-view");

projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-list-element";

    div.innerHTML = `
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <div class="project-name">${project.name}</div>
    </a>
    <div class="project-role">${project.role}</div>
    <div>${project.description}</div>
`;

    root.appendChild(div);
});
