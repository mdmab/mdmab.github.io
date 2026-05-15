const topbar = document.createElement("div");
topbar.className = "topbar";
topbar.innerHTML = `
<a href="projects.html">
    <div class="button">Projects</div>
</a>
<a href="index.html">
    <div class="button">Home</div>
</a>
`;

document.getElementById("root").appendChild(topbar);
