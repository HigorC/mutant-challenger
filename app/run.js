const request = require('request');
const execises = require("./exercises");
const esManager = require("./elasticsearch-manager");

request.get("https://jsonplaceholder.typicode.com/users", ((err, res) => {
    if (err) {
        esManager.saveLog("Erro", err);
        return;
    }

    const responseJson = JSON.parse(res.body);

    const exercise_1 = execises.exercise_1(responseJson);
    const exercise_2 = execises.exercise_2(responseJson);
    const exercise_3 = execises.exercise_3(responseJson);


    // while (true) {

    // }

    esManager.whenElasticIsReady().then(res => {
        console.log("########################");
        console.log("entoru aqui");

        esManager.saveLog("Exercício 1 - Websites de todos os usuários", (exercise_1));
        esManager.saveLog("Exercício 2 - Nomes, emails e empresas, ordenados pelo nome", exercise_2);
        esManager.saveLog("Exercício 3 - Todos os usuários que possuem 'suite' no endereço", exercise_3);
        
        
    })



   
}))