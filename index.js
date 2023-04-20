const express = require('express')
const app = express()
const path = require('path')

//configiraciones de la app
app.set('port', 3000)
app.set('view engine', 'ejs');


//middlewares
app.use(express.static(path.join(__dirname,'public')))
console.log(__dirname)


//rutas
app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/informacion',(req, res)=>{
    res.render('informacion')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  


app.listen(app.get('port'), ()=>{
    console.log('aplicacion corriendo en el puerto',app.get('port'))
})

module.exports = app;

