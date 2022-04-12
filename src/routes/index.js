 const express = require('express');
 const router = express.Router();

router.get('/', (req,res)=>{
	res.render('index.html', { title: 'Inicio - CAIME'});	
})

router.get('/contact', (req,res)=>{
	res.render('contact.html', { title: 'Contact Page'});	
})

router.get('/proyectos', (req,res)=>{
	res.render('proyectos.html', { title: 'Proyectos - CAIME'});	
})


module.exports = router;