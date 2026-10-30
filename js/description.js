const response = await fetch("./data/info.json");

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
const description = data.description;
const links = data.links;

const root = document.getElementById("description");

const description_text = `${description} <br /><br /> <u>Check out my profiles:</u> <br /><br />`
const inner_html_array = [description_text]

for (const name of Object.keys(links)) {
    const link_text = `
    <a href="${links[name]}" target="_blank" rel="noopener noreferrer">            
        <div class="profile">${name}</div>
    </a>
    `
    inner_html_array.push(link_text)
}

root.innerHTML = inner_html_array.join("\n")