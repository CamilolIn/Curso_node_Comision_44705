const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const {passportCall, authorization} = require('../config/passport')


const {Router} = express

const router = new Router()


router.post('/login', (req, res)=>{
    if(req.body.username == 'camilo@gamail.com' && req.body.password == '123456'){
      let token = jwt.sign(
        {email: req.body.username, password: req.body.password, role:'user'},
        'coderSecrect',
        {expiresIn:'24h'}
      )
      res.cookie('cookieToken', token, {
        maxAge:60*60*1000
      }).send({message:'user Loged'})
    }
})

router.get('/home', passport.authenticate('jwt', {session:false}), (req, res)=>{
  res.send(req.user)
})

// router.get('/home', passportCall('jwt'), authorization('user'), (req, res)=>{
//   res.send(req.user)
// })



module.exports = router