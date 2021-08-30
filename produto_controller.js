var express = require('express');
var router = express.Router();
var Produto = require('./produto')
router.post('/', (req, res) => {
    let e = new Produto({
        produto: req.body.produto,
        marca: req.body.marca,
        valor: req.body.valor
    });
    e.save((err, estud) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(estud);
    })
})
router.get('/', (req, res) => {
    Produto.find().exec((err, est) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send(est);
    })
})
router.delete('/:id', (req, res) => {
    Produto.deleteOne({_id:req.params.id}, (err) => {
        if(err)
        res.status(500).send(err);
        else
        res.status(200).send({});
    })
})
router.patch('/:id', (req, res) => {
    Produto.findById(req.params.id, (err, est) => {
        if (err)
        res.status(500).send(err);
        else if (!est)
        res.status(404).send({});
        else {
            est.produto = req.body.produto,
            est.marca = req.body.marca,
            est.valor = req.body.valor
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
