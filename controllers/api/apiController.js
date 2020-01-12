const Incomes = require('../../models/incomeModel');
const Expenses = require('../../models/expenseModel');
const Users = require('../../models/userModel');

const bodyParser = require('body-parser');

module.exports = (app, passport) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // route middleware to make sure a user is logged in
    const isLoggedIn = (req, res, next) => {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated()) {
            console.log('isLoggedIn worked');
            return next();
        }
        // if they aren't redirect them to the home page
        else {
            console.log('Error in isLoggedIn');
            return res.redirect('/');
        } 
    }

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
        Users.findById(id, function(err, user) { 
            done(err, user);
        });
    });

    app.get('/api/userinfo', isLoggedIn, (req, res) => {
        res.send(JSON.stringify(req.user));
    });

    // =====================================
    // BUDGET APIs =========================
    // =====================================
    app.get('/api/budget'), (req, res) => {
        Budget.findAll().then((err, budget) => {
            if (err) throw err;
            res.send(JSON.stringify(budget));
        });
    }

    app.get('/api/incomes', isLoggedIn, (req, res) => {
        Incomes.find({ 
            userID: req.session.passport.user,
            type: 'inc'
        }, (err, incomes) => {
            if (err) throw err;
            res.send(JSON.stringify(incomes));
        });
    });

    app.delete(`/api/incomes/:id`, (req, res) => {
        Incomes.findByIdAndRemove(req.params.id, err => {
            if (err) throw err;
            res.send('Success');
        });
    });

    app.get('/api/expenses', isLoggedIn, (req, res) => {
        Expenses.find({ 
            userID: req.session.passport.user,
            type: 'exp'
        }, (err, expenses) => {
            if (err) throw err;
            res.send(JSON.stringify(expenses));
        });
    });

    app.delete(`/api/expenses/:id`, (req, res) => {
        Expenses.findByIdAndRemove(req.params.id, err => {
            if (err) throw err;
            res.send('Success');
        });
    });


    app.post('/api/database', (req, res) => {
        //console.log(req.body);
        
        if (req.body.type == 'inc') {
            console.log(req.body);
            let newIncome = Incomes({
                userID: req.body.userID,
                year: req.body.year,
                month: req.body.month,
                type: req.body.type,
                description: req.body.description,
                price: req.body.price
            });
            newIncome.save(err => {
                if (err) throw err;
                res.send(req.body);
            });
        }
        else if (req.body.type == 'exp') {
            let newExpense = Expenses({
                userID: req.body.userID,
                year: req.body.year,
                month: req.body.month,
                type: req.body.type,
                description: req.body.description,
                price: req.body.price
            });
            newExpense.save(err => {
                if (err) throw err;
                res.send(req.body);
            });
        }
    });
}
