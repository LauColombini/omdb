const Users = require('./Users')
const Favorites = require('./Favorites')
const db = require('../db')


Favorites.belongsTo(Users)
Users.hasMany(Favorites)












module.exports = {Users, Favorites,db}