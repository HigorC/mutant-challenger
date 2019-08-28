const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://es01:9200' }) // Rodar no container
// const client = new Client({ node: 'http://localhost:9200' }) // Rodar local

// Promessa que só retorna quando o Elastic Search está disponível
function whenElasticIsReady() {
    return new Promise((resolve, reject) => {
        waiting = setInterval(() => {
            client.search({
                index: 'logs'
            }, (err, res) => {
                if (res.statusCode && res.statusCode != 400) {
                    console.log("ES disponível... salvando logs...");
                    clearInterval(waiting);
                    resolve();
                } else {
                    console.log("ES ainda não está disponível, aguardando por 7s...");
                }
            })
        }, 7000)
    })
}

async function saveLog(msg, result) {
    await client.index({
        index: 'logs',
        type: "object",
        body: {
            timestamp: new Date(),
            log: {
                msg: msg,
                result: JSON.stringify(result)
            }
        }
    })
}

module.exports = { saveLog, whenElasticIsReady }