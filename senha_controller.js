var express = require('express');
var router = express.Router();
var Senha = require('./senha')
router.post('/', (req, res) => {
    let e = new Senha({
        senha: req.body.senha,
        data: req.body.data,
        empresa: req.body.empresa
    });
    e.save((err, estud) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Senha.find().exec((err, est) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Senha.deleteOne({_id:req.params.id}, (err) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Senha.findById(req.params.id, (err, est) => {
        if (err)
        res.status(500).send(err);
        else if (!est)
        res.status(404).send({});
        else {
            est.senha = req.body.senha,
            est.data = req.body.data,
            est.empresa = req.body.empresa
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
