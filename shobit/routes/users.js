const express = require('express');
 
const mongoose = require('mongoose');
const app = express();
const User = require('../model/car');
const router = express.Router();
 

 
router.get('/', function(req, res) {
    User.find(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})
 
router.post('/add', function(req, res) {
        // console.log("working")
        const name = req.body.name
        const password = req.body.password
        new User({
            name:name,
            password: password,
        }).save(function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    })
    //////////////////////////////////////////////////////updating data///////////////////////////////////
// router.post('/update/:id', (req, res, next) => {
//     const id = req.params.id;
//     let UserUpdate = {
//         _id: id,
//         name: req.body.name,
//         subject: req.body.subject,
//         phone: req.body.phone,
//         email: req.body.email,
//         message: req.body.message
//     };
//     User.findOneAndUpdate({ _id: id }, UserUpdate, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(data)
//             res.json(data)
//         }
 
//     })
// })
 
/////////////////edit
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, function(err, data) {
        res.json(data);
    })
})
 
//////////////////////////////////////////////////delete data///////////////////////////////////////////////
// router.get('/delete/:id', (req, res) => {
//     let id = req.params.id
//     User.findOneAndRemove(id, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json(data)
//             console.log(data)
//         }
//     })
// })
module.exports = router;