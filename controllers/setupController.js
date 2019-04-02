var Incomes = require('../models/incomeModel');

module.exports = function(app) {
    
   app.get('/api/setupIncomes', function(req, res) {
       
       // seed database
       var starterIncomes = [
           {
                description: "Salary",
                price: "2000"
           },
           {
                description: "Freelance",
                price: "200"
           },
           {
                description: "Babysitting",
                price: "50"
           }
       ];
       Incomes.create(starterIncomes, function(err, results) {
           res.send(results);
       }); 
   });
    
}