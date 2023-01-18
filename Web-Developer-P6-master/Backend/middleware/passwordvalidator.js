let passwordValidator = require('password-validator');

let schema = new passwordValidator();

schema
    .is().min(8)                                    
    .is().max(20)                                  
    .has().uppercase()                              
    .has().lowercase()                             
    .has().digits()                                
                             
module.exports = (req, res, next) => {
    if (schema.validate(req.body.password)) {
        next();
    } else {
        return res.status(404).json({ error: `Le mot de passe doit contenir au moin entre 8 à 20 caractère ainsi qu'une majuscule, une minuscule et un chiffre." ${schema.validate('req.body.password', { list: true })}` })
    }
}