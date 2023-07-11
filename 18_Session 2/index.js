const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const MongoStore = require('connect-mongo')
const handlebars = require('express-handlebars')

const ViewRoutes = require('./routes/view.routes')
const AuthRoutes = require('./routes/auth.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

app.use(session({
  store: MongoStore.create({
    mongoUrl:'mongodb+srv://coder:123456ca@clustercodermongo.m5px3pd.mongodb.net/ecommercecoder'
  }) ,
  secret:'secretCoder',
  resave:true,
  saveUninitialized:true
}))

app.get('/sessionSet', (req, res)=>{
  req.session.user = 'Camilo',
  req.session.age = 78

  res.send('Session create')
})

app.get('/logout', (req, res)=>{
  req.session.destroy(err => {
    if(err) res.send('Failed logout')
    res.send('Logout ok!!')
  })
})

app.get('/sessionGet', (req, res)=>{
  res.send(req.session)
})

app.use('/view', ViewRoutes)
app.use('/auth', AuthRoutes)


app.listen(8080, ()=>{
  console.log('Server Ok')
})