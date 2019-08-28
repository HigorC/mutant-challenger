const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.URL_CLIENT_ES }) 

// Promessa que só retorna quando o Elastic Search está disponível
function whenElasticIsReady() {
    return new Promise((resolve, reject) => {
        waiting = setInterval(() => {
            client.search({
                index: 'logs'
            }, (err, res) => {
                if (res.statusCode && res.statusCode != 400) {
                    console.log("ES disponível...");
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
    console.log("Salvando log...");
    console.log(msg);
    console.log(result);
    
    await client.index({
        index: 'logs',
        type: "log",
        body: {
            timestamp: new Date(),
            log: {
                msg: msg,
                result: result
            }
        }
    })
}

module.exports = { saveLog, whenElasticIsReady }