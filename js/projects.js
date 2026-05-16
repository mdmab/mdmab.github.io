const projects = [
    {
        name: "TFTP",
        role: "Author",
        link: "https://github.com/mdmab/TFTP",
        description:
            "A basic implementation of TFTP server and client according to RFC \
            1350, from scratch.",
    },
    {
        name: "Bug Underflow",
        role: "Author",
        link: "https://github.com/mdmab/bugunderflow",
        description:
            "A discussion site, created using TypeScript and Next.Js framework, \
            as part of a larger academic project.",
    },
    {
        name: "CodeBattle 2024",
        role: "Contributor",
        link: "https://github.com/MituChowdhury/CodeBattle2024",
        description: `An online multiplayer game made specifically for the event of \
        <i>CodeBattle</i> in <i>SUST CSE Carnival 2024</i>.`,
    },
];

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
