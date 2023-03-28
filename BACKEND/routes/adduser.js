const express = require('express')
const router = express.Router()

//adding new user to the database
router.post('/', (req, res) => {
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx =>
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0].email,
                name: name,
                joined: new Date()
            })
            .then(user => res.json(user))
        })
        .then(trx.commit)
        .catch(trx.rollback)
    )
    .catch(err => {
        if(err.detail === `Key (email)=(${email}) already exists.`) {
            res.status(400).json("Email already in use");
        }
        else {
            res.json('Unable to register');
        }
    })  
})
router.put('/:id', (req, res) => {
    res.json({message: `Update goals ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
    res.json({message: `Delete goals ${req.params.id}`})
})
module.exports = router