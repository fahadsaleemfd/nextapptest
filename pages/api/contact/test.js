const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid');

export default function handler(req, res) {
    

    if (req.method === 'POST') {
      var name = req.body.name
      var last_name = req.body.last_name
      var email = req.body.email
      var message = req.body.message

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ name: name }))
  }

  

  





}