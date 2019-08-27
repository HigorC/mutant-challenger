function exercise_1(responseJson) {
    return responseJson.map(user => user.website);
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
    exercise_1,
    exercise_2,
    exercise_3
}