
const gustos = [];
globalThis.cont;

function addGusto(string){
    gustos[cont]=string;
    if(typeof cont== 'undefined'){
        cont=1
    }else{
        cont++;
    }
    console.log(cont)
    this.consoleLog(gustos);
}

function consoleLog(array){
    array.forEach(element => {
        console.log(element);
    });
}

function makeTable(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}