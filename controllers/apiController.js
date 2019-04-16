const Incomes = require('../models/incomeModel');
const Expenses = require('../models/expenseModel');
const Users = require('../models/userModel');

const bodyParser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt');

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        console.log(req.user);
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = (app, passport) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
        Users.findById(id, function(err, user) {
            done(err, user);
        });
    });

    app.get('/dashboard', isLoggedIn, (req, res) => {
        res.send({
            user : req.user // get the user out of session and pass to template
        });
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash : true 
    }));

    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash : true 
    }));

    app.get('/api/budget'), (req, res) => {
        Budget.findAll().then((err, budget) => {
            if (err) throw err;
            res.send(JSON.stringify(budget));
        });
    }

    app.get('/api/incomes', (req, res) => {
        Incomes.find({ type: 'inc'}, (err, incomes) => {
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

    app.get('/api/expenses', (req, res) => {
        Expenses.find({ type: 'exp'}, (err, expenses) => {
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
            let newIncome = Incomes({
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
          Users.findOne({'username':username}, (err, user) => {
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
            } else {
              // if there is no user with that email
              // create the user
              var newUser = new Users();
              // set the user's local credentials
              newUser.username = username;
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
