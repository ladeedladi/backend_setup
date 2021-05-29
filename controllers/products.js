const path=require('path')

const rootDir=require('../util1/path')
exports.getAddproducts=(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views1','add-product.html'))
}
exports.postAddproducts=(req,res,next)=>{
  console.log(req.body)
  res.redirect('/shop')
  
}
exports.custProduct=(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views1','shop.html'))
}
console.log(rootDir);