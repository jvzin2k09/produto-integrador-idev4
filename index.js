const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');


function loadDB() {
    try {
        const raw = fs.readFileSync("./bd.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Erro ao ler bd.json:', err.message);
        return {
            nome_praca: '',
            pontos_bicicleta: [],
            usuarios: [],
            corridas: []
        };
    }
}

function saveDB(db) {
    try {
        fs.writeFileSync("db.json", JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar bd.json:', err.message);
        return false;
    }
}

function getNextId(nome) {
    const db = loadDB()

    const values = db.name || [];

let maxId = 0;
for (let i = 0; i < usuarios.length; i++) {
    const u = usuarios[i];
    if (typeof u.id === 'number' && u.id > maxId) {
        maxId = u.id;
    }
}
      const newId = maxId !== 0 ? maxId + 1 : 1;
}

const db = loadDB();

 console.log(db["usuarios"][0]["nome"])
 console.log(db["corridas"][0]["inicio"]) 
 console.log(db["pontos_bicicleta"][1]["bicicletas"])
 console.log(db["pontos_bicicleta"][2]["bicicletas"][3]["tipo"])

 db["usuarios"][1]["nome"] = "Isabela"
 console.log(db["usuarios"][1])
 saveDB(db)

 db["usuarios"].push({"id": 3, "nome": "Isaque"})
saveDB(db)