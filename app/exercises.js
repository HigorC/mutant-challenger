const esManager = require("./elasticsearch-manager");
const request = require('request');

function resolveExercise(exercise) {
    return new Promise((resolve, reject) => {
        request.get(process.env.URL_GET_USERS, ((errRequest, resRequest) => {
            const responseJson = JSON.parse(resRequest.body);

            switch (exercise) {
                case 1:
                    result = exercise_1(responseJson);
                    msg = "Exercício 1 - Websites de todos os usuários";
                    break;
                case 2:
                    result = exercise_2(responseJson);
                    msg = "Exercício 2 - Nomes, emails e empresas, ordenados pelo nome";
                    break;
                case 3:
                    result = exercise_3(responseJson);
                    msg = "Exercício 3 - Todos os usuários que possuem 'suite' no endereço";
                    break;
                default:
                    reject("Este exercício não existe.");
                    return;
            }

            esManager.saveLog(msg, result).then(resSave => {
                resolve({ exercise: msg, result: result });
            }).catch(errSave => {
                reject("Erro ao salvar log, possívelmente o Elastic Search está em processo de inicialização, aguarde alguns segundos e tente novamente");
            });
        }))
    })
}

function exercise_1(responseJson) {
    return responseJson.map(user => {
        return {
            website: user.website
        }
    });
}

function exercise_2(responseJson) {
    return responseJson.map(user => {
        return {
            nome: user.name,
            email: user.email,
            empresa: user.company.name,
        }
    }).sort(function (a, b) {
        let nameA = a.nome.toLowerCase(), nameB = b.nome.toLowerCase()
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })
}

function exercise_3(responseJson) {
    return responseJson.filter(user => user.address.suite.toLowerCase().includes("suite"));
}

module.exports = {
    resolveExercise, exercise_1, exercise_2, exercise_3
}