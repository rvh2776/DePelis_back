const {Router} = require('express');

const {moviesRouter} = require('./moviesRouter');
// const postRouter = require('./postRouter');

const router = Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .send('Back funcionando!!')
})

router.use('/movies', moviesRouter);


module.exports = router;