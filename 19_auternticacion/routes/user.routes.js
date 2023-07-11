const express = require('express')
const {createHash, isValidPassword} = require('../utils/bcrypts')
const passport = require('passport')
const {Router} = express

const router = new Router()

let users = []

router.get('/all', (req, res)=>{
  res.send(users)
})

// router.post('/register', (req, res)=>{
//   let userNew = req.body
//   userNew.id = Math.random()
//   userNew.password = createHash(userNew.password)
//   users.push(userNew)
//   res.send({message:'User created', userNew})
// })

router.post('/register', passport.authenticate('register', {failureRedirect:'/user/failedregister'}),  (req, res)=>{
  res.send('user registered')
})

router.get('/failedregister', (req, res)=>{
  res.send('Failed user register')
})

router.post('/login', (req, res)=>{
  let userData = req.body
  let user = users.find(u =>{
    return u.email == userData.email
  })
  if(!user) res.send('User not found')
  if(!isValidPassword(user, userData.password)) res.send('User invalid')
  res.send('User loged')
})

module.exports = router