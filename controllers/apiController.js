const Incomes = require('../models/incomeModel');
const Expenses = require('../models/expenseModel');
const Users = require('../models/userModel');

const bodyParser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt');

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


    app.get('/dashboard', isLoggedIn, (req, res) => {
        res.send(JSON.stringify(req.user)); 
    });


    app.post('/auth/login', passport.authenticate('login', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash : true 
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    app.post('/auth/signup', passport.authenticate('signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash : true 
    }));




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

    // Passport Sign-Up
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true
      },
      (req, username, password, done) => {
        findOrCreateUser = () =>{
          // find a user in Mongo with provided username
          Users.findOne({
              'username': username,
              'email': req.body.email
            }, (err, user) => {
            // In case of any error return
            if (err){
              console.log('Error in SignUp: '+err);
              return done(err);
            }
            // already exists
            if (user) {
              console.log('User already exists');
              return done(null, false, 
                 req.flash('message','User Already Exists'));
            } 
            else {
              // if there is no user with that email
              // create the user
              var newUser = new Users();
              // set the user's local credentials
              newUser.username = username;
              newUser.email = req.body.email;
              newUser.password = createHash(password);
     
              // save the user
              newUser.save(function(err) {
                if (err){
                  console.log('Error in Saving user: '+err);  
                  throw err;  
                }
                console.log('User Registration succesful');    
                return done(null, newUser);
              });
            }
          });
        };
         
        // Delay the execution of findOrCreateUser and execute 
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
      })
    );

    // Generates hash using bCrypt
    const createHash = (password) => {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

    // Passport Login
    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    (req, username, password, done) => { 
        // check in mongo if a user with username exists or not
        Users.findOne({ 'username' :  username }, 
        (err, user) => {
            // In case of any error, return using the done method
            if (err) {
                return done(err);
            }
            // Username does not exist, log error & redirect back
            if (!user){
                console.log('User Not Found with username '+username);
                return done(null, false, 
                        req.flash('message', 'User Not found.'));                 
            }
            // User exists but wrong password, log the error 
            if (!isValidPassword(user, password)){
                console.log('Invalid Password');
                return done(null, false, 
                    req.flash('message', 'Invalid Password'));
            }
            // User and password both match, return user from 
            // done method which will be treated like success
            return done(null, user);
            }
        );
    }));

    const isValidPassword = (user, password) => {
        return bCrypt.compareSync(password, user.password);
    }
}
