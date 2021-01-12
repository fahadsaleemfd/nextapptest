import {NextApiRequest , NextApiResponse} from 'next'
var nodemailer = require('nodemailer');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid');
require('dotenv').config()

// Create table
db.defaults({ contact_us: [] }).write()

var transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.USER_ID,
    pass: process.env.PASSWORD
  }
});


 
export default async function handler(req : NextApiRequest, res:NextApiResponse) {
  
  if (req.method === 'POST') {
    var name = req.body.name
    var last_name = req.body.last_name
    var email = req.body.email
    var message = req.body.message

    var mailOptions = {
      from: email,
      to: process.env.RECIEVER_EMAIL,
      subject: process.env.EMAIL_SUBJECT,
      text: message
    };

  db.get('contact_us')
  .push({id: shortid.generate() , name: name, lastname: last_name , email: email , message: message})
  .write()
 
  transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
      });
  
    res.end(JSON.stringify({ message : 'Email has been sent!' }))
    
 
   

  }

 



   
  }