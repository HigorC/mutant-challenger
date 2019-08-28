const express = require('express');
const router = express.Router();
const execises = require("./exercises");

router.get('/exercise/:ex', (req, res) => {
    if (!req.params.ex) res.status(400).send("Erro na rota.")

    exercicioNumber = parseInt(req.params.ex)

    if (isNaN(exercicioNumber)) {
        res.send("Informe um exercício válido: 1, 2 ou 3.");
    }

    execises.resolveExercise(exercicioNumber).then(result => {
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    }).catch(err => {
        res.status(400).send(err);
    })
})

module.exports = router;