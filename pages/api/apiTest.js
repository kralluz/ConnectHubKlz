const nc = require("next-connect");

const handler = nc()
    .get((req, res) => {
        res.status(200).json({ message: "Requisição GET" });
    })
    .post((req, res) => {
        res.status(200).json({ message: "Requisição POST" });
    })
    .patch((req, res) => {
        res.status(200).json({ message: "Requisição PATCH" });
    })
    .delete((req, res) => {
        res.status(200).json({ message: "Requisição DELETE" });
    });

export default handler;
