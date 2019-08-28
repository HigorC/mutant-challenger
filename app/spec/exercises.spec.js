const request = require("request");
const base_url = "https://jsonplaceholder.typicode.com/users"
const execises = require("../exercises");

describe("Test of exercises.js", () => {

    beforeAll((done) => {
        request.get(base_url, ((err, res) => {
            objResponse = JSON.parse(res.body);
            done();
        }))
    })

    describe("Exercices", function () {
        it("Exercice 1", () => {
            const exercise_1 = execises.exercise_1(objResponse);

            expect(exercise_1).toEqual([
                "hildegard.org",
                "anastasia.net",
                "ramiro.info",
                "kale.biz",
                "demarco.info",
                "ola.org",
                "elvis.io",
                "jacynthe.com",
                "conrad.com",
                "ambrose.net"
            ]);
        })

        it("Exercice 2", () => {
            const exercise_2 = execises.exercise_2(objResponse);

            expect(exercise_2).toEqual([{
                nome: 'Chelsey Dietrich',
                email: 'Lucio_Hettinger@annie.ca',
                empresa: 'Keebler LLC'
            },
            {
                nome: 'Clementina DuBuque',
                email: 'Rey.Padberg@karina.biz',
                empresa: 'Hoeger LLC'
            },
            {
                nome: 'Clementine Bauch',
                email: 'Nathan@yesenia.net',
                empresa: 'Romaguera-Jacobson'
            },
            {
                nome: 'Ervin Howell',
                email: 'Shanna@melissa.tv',
                empresa: 'Deckow-Crist'
            },
            {
                nome: 'Glenna Reichert',
                email: 'Chaim_McDermott@dana.io',
                empresa: 'Yost and Sons'
            },
            {
                nome: 'Kurtis Weissnat',
                email: 'Telly.Hoeger@billy.biz',
                empresa: 'Johns Group'
            },
            {
                nome: 'Leanne Graham',
                email: 'Sincere@april.biz',
                empresa: 'Romaguera-Crona'
            },
            {
                nome: 'Mrs. Dennis Schulist',
                email: 'Karley_Dach@jasper.info',
                empresa: 'Considine-Lockman'
            },
            {
                nome: 'Nicholas Runolfsdottir V',
                email: 'Sherwood@rosamond.me',
                empresa: 'Abernathy Group'
            },
            {
                nome: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                empresa: 'Robel-Corkery'
            }]);
        })

        it("Exercice 3", () => {
            const exercise_3 = execises.exercise_3(objResponse);

            expect(exercise_3.length).toBe(7);

            expect(exercise_3[0].id).toBe(2);
            expect(exercise_3[0].name).toBe("Ervin Howell");

            expect(exercise_3[6].id).toBe(10);
            expect(exercise_3[6].name).toBe("Clementina DuBuque");
        })
    })
})