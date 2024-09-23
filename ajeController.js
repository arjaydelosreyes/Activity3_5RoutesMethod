const aje = {
  
    about:(req, res) => {
        res.render('about');
    
},
    dashboard:(req, res) => {
        res.render('dashboard');
    
},
    index:(req, res) => {
        res.render('index');
    
},
    login:(req, res) => {
        res.render('login');
    
},
    profile:(req, res) => {
        res.render('profile');
    }
};

module.exports = aje;