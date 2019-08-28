const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.URL_CLIENT_ES }) 

async function saveLog(msg, result) {
    console.log("Salvando log...");
    
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

module.exports = { saveLog }