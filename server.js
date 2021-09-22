const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({origin:"http://localhost:8000",credentials : true}));
// app.use(function(req, res, next) {
//   req.header("Access-Control-Allow-Origin", "*");
//   req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});


// app.use('/login/admin', (req, res) => {
//   res.send({
//     //token: JSON.stringify(req)
//     token: ''
    
//   });
//   console.log(req)
  
// });
// app.use('/loginLecturer', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
// });

// app.use('/loginTechOfficer', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
// });

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));