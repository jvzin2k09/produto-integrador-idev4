const prompt = require('prompt-sync')();
const fs = require('fs');


function loadDB() {
    try {
        const raw = fs.readFileSync("./db2.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Erro ao ler bd.json:', err.message);
        return {
            grupos:[]
        };
    }
}

loadDB();

function saveDB(db) {
    try {
        fs.writeFileSync("db2.json", JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar bd.json:', err.message);
        return false;
    }
}

saveDB(db);

let db = loadDB();