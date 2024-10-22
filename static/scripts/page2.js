const rows = 6;
const cols = 6;
const table = document.getElementById('myTable');
let count = 1;
for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = count;
        count++;

        cell.addEventListener('mouseenter', function() {
            if (cell === table.rows[1].cells[2]) { 
                const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                cell.style.backgroundColor = randomColor; 
            }
        });

        cell.addEventListener('click', function() {
            if (cell === table.rows[1].cells[2]) { 
                const colorInput = document.createElement("input"); 
                colorInput.type = "color"; 
                colorInput.onchange = function() {
                    cell.style.backgroundColor = colorInput.value; 
                };
                colorInput.click(); 
            }
        });

        cell.addEventListener('dblclick', function() {
            if (cell === table.rows[1].cells[2]) { 
                const colIndex = cell.cellIndex; 
                for (let i = 0; i < rows; i++) {
                    const currentCell = table.rows[i].cells[colIndex]; 
                    if (i >= 1 && i % 2 === 1) { 
                        currentCell.style.backgroundColor = cell.style.backgroundColor; 
                    }
                }
            }
        });
    }
}