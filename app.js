// je crée une variable qui utilise la méthode require pour importer le fichier mock-coworkings.js
const express = require('express')
const app = express()
const port = 3000

// je crée une variable qui utilise la méthode require pour importer le fichier mock-coworkings.js
const coworkings = require('./mock-coworkings');

// j'utilise get pour récupérer les données de l'api
app.get('/api/coworkings', (req, res) => {
// Renvoyer tous les coworkings au format json, uniquement ceux dont la surface est supérieure à 500
 
const result = coworkings.filter(element => element.superficy >500);

 };


    // je renvoie la variable coworking
    res.json(coworkings)
})
//  j'utilise get pour récupérer les données de l'api
app.get('/api/coworkings/:id', (req, res) => {
  // Afficher le nom du coworking qui correspond à l'id en paramètre
  // je crée une variable qui va chercher dans le tableau coworkings l'id correspondant à l'id de l'url
  let myCoworking = coworkings.find((data) => {
    // je parse l'id de l'url en int pour pouvoir le comparer à l'id du tableau
    // le parseInt sert à convertir une chaine de caractère en nombre
    // le parseInt est nécessaire car l'id de l'url est une chaine de caractère
    return data.id === parseInt(req.params.id)
  })
  res.send(`Nom du coworking : ${myCoworking.name}`)
})

// j'utilise listen pour écouter le port 3108
app.listen(port, () => {
  console.log(`L'app sur le port ${port}`)
})
