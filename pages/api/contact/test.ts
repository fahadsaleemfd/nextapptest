import {NextApiRequest , NextApiResponse} from 'next'
const low = require('lowdb')
export default function handler(req : NextApiRequest, res:NextApiResponse) {
    

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