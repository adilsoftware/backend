var express = require('express');
var router = express.Router();
var Empresa = require('./empresa')
router.post('/', (req, res) => {
    let e = new Empresa({
        nome: req.body.nome,
        email: req.body.email,
        cnpj: req.body.cnpj
    });
    e.save((err, estud) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Empresa.find().exec((err, est) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Empresa.deleteOne({_id:req.params.id}, (err) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Empresa.findById(req.params.id, (err, est) => {
        if (err)
        res.status(500).send(err);
        else if (!est)
        res.status(404).send({});
        else {
            est.nome = req.body.nome,
            est.email = req.body.email,
            est.cnpj = req.body.cnpj
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
