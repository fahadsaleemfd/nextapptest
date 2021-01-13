import {NextApiRequest , NextApiResponse} from 'next'
var fs = require('fs');
export default function handler(req : NextApiRequest, res:NextApiResponse) {
  
  
  fs.appendFile(Math.random()+'mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

    if (req.method === 'POST') {
      var name = req.body.name
      var last_name = req.body.last_name
      var email = req.body.email
      var message = req.body.message
      return res.json({
        message : name
      })
  }

  

  





}