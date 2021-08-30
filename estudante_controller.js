var express = require('express');
var router = express.Router();
var Estudante = require('./estudante')
router.post('/', (req, res) => {
    let e = new Estudante({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf
    });
    e.save((err, estud) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Estudante.find().exec((err, est) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Estudante.deleteOne({_id:req.params.id}, (err) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Estudante.findById(req.params.id, (err, est) => {
        if (err)
        res.status(500).send(err);
        else if (!est)
        res.status(404).send({});
        else {
            est.nome = req.body.nome,
            est.email = req.body.email,
            est.cpf = req.body.cpf
            est.save((err, est)=>{
                if (err)
                res.status(500).send(err);
                else
                res.status(200).send(est);
            })
        }
    })
})
module.exports = router;
