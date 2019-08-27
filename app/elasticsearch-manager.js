const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
const request = require('request');


function whenElasticIsReady() {
    return new Promise((resolve, reject) => {
        waiting = setInterval(() => {
            client.search({
                index: 'logs'
            }, (err, res) => {
                console.log(!err);
                console.log(err);
                if (res)
                    console.log(res.statusCode);

                if (res.statusCode && res.statusCode != 400) {
                    console.log("ES pronto...");
                    clearInterval(waiting);
                    resolve();
                } else {
                    console.log("ES não respondeu, aguardando por 5s...");
                }
            })
        }, 5000)


        // waiting = setInterval(() => {
        //     request.get("http://127.0.0.1:9200/", ((err, res) => {

        //         console.log(!err);
        //         console.log(err);

        //         if (res)
        //             console.log(res.statusCode);

        //         if (!err && res.statusCode == 200) {
        //             console.log("ES pronto...");
        //             clearInterval(waiting);
        //             resolve();
        //         }
        //         console.log("ES não respondeu, aguardando por 5s...");
        //     }))
        // }, 5000)
    })
}

async function saveLog(msg, result) {
    await client.index({
        index: 'logs',
        type: "object",
        body: {
            timestamp: new Date(),
            log: {
                agora: true,
                msg: msg,
                result: JSON.stringify(result)
            }
        }
    }, ((err, resp, status) => {
        if (err) {
            console.log("$$$$$$$$$$ ERRO $$$$$$$$$$");
            console.log(err);
            return;
        }
    }))
}

module.exports = { saveLog, whenElasticIsReady }