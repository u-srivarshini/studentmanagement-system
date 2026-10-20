
let students = [];
const form = document.getElementById("form");
const list = document.getElementById("list");
const search = document.getElementById("search");

function display() {
    list.innerHTML = "";
    students.filter(s =>
        (s.roll + s.name).toLowerCase().includes(search.value.toLowerCase())
    ).forEach((s, i) => {
        const row = list.insertRow();
        [s.roll, s.name, s.course].forEach(v => {
            row.insertCell().textContent = v;
        });
        const cell = row.insertCell();
        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => {
            students.splice(i, 1);
            display();
        };
        cell.appendChild(btn);
    });
}

form.onsubmit = e => {
    e.preventDefault();
    const roll = document.getElementById("roll").value.trim();

    if (students.some(s => s.roll.toLowerCase() === roll.toLowerCase())) {
        alert("Roll number already exists!");
        return;
    }

    students.push({
        roll,
        name: document.getElementById("name").value.trim(),
        course: document.getElementById("course").value.trim()
    });

    form.reset();
    display();
};

search.oninput = display;
