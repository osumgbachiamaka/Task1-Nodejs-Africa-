const PORT =        process.env.PORT || 3000,
    express =       require('express'),
    bodyParser =    require('body-parser')
   
const router =           express()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router