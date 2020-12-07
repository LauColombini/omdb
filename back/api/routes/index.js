const router = require('express').Router();
const { Users, Favorites } = require("../models")
//requerir los models
//register login logut me add favorites
const passport = require("passport")

/*
  ALL YOUR ROUTES HERE!
*/

router.post('/favorites' , (req,res,next)=>{
Favorites.create({
  Title: req.body.title,
  Poster: req.body.poster
})
.then((favs)=>{
  const user = req.body.user
  favs.setUser(user)
})
.then(()=>{
  res.status(200).send('Agregada a favoritos')

})
})


router.get('/favorites/:id',(req,res,next)=>{
  const id = req.params.id
  Favorites.findAll({
    where:{
      userId: id
    }
  })
  .then((favs)=>{
    res.send(favs)
  })
})


router.delete('/favorites/delete/:id',(req,res,next)=>{
  const id = req.params.id
  Favorites.destroy({
    where:{
      id: id
    }
  })
  .then(()=>{
    res.send('Pelicula eliminada de favoritos, F :c')
  })
})


router.post("/register", (req, res) => {
  console.log(req.body)
  Users.create(req.body)
    .then(user => res.status(201).send(user))
})

router.post("/login", passport.authenticate('local'), (req, res, next) => {
  console.log("requser de login", req.user)
  res.send(req.user)

})

router.post("/logout", (req, res) => {
  req.logout();
  res.send('Su sesion ha finalizado');
})

router.get('/me', (req, res) => {
  if (req.user) return res.send(req.user)
  res.send(401).end()
})

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;