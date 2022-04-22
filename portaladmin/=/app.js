const express = require('express');
const app = express();
const compression = require('compression')

app.use(compression())  // app.use(compression()) 要写在  dist 静态资源托管之前  使用compression  gzip 压缩 js体积
app.use(express.static('./dist'))

app.listen(80,()=>{
	console.log('http://127.0.0.1')
})