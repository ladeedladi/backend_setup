const path=require('path')
const express=require('express');
const app=express();


const adminroutes=require('./routes/admin')
const shopRoutes=require('./routes/sho')
const formRoutes=require('./routes/form')

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminroutes);

app.use('/shop',shopRoutes);
app.use(formRoutes)

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})

app.listen(3000)