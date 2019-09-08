const PORT =        process.env.PORT || 3000,
    express =       require('express'),
    bodyParser =    require('body-parser')
    router =        require('./routes/route')
   
const app =           express()


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(router)


app.listen(PORT, function(){
    console.log('Server started on port '+PORT);
});