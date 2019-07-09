const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Registro = require('../models/Registro.js');

//guardando los datos para la navegación entre páginas
passport.serializeUser((registro, done) => {
    done(null, registro.id);
});

// consulta a la BD con el id
passport.deserializeUser(async (id, done) => {
    const registro = await Registro.findById(id);
    done(null, registro);
});

//qué hacemos con los datos del cliene (usuario)
passport.use('local-singnup', new LocalStrategy({
    usernameField: 'nombre',
    usernameField: 'nombreUsuario',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, nombre, email, password, done) => {
    
    const  reg = Registro.findOne({email: email})
    if (reg) {
        return done(null, false, req.flash('registrarMessage', 'El correo ya existe.'));
    }else {
        const registro = new Registro();
        newRegistro.nombre = nombre;
        newRegistro.email = email;
        newRegistro.password = newRegistro.encryptPassword(password);
        await newRegistro.save();
        done(null, newRegistro);        
    }
}));