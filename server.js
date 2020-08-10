const express = require('express');
const app = express();


const mockUserData=[
    {name:'Calvin'},
    {name:'Jill'}
]
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Dope!',
        users: mockUserData
    })
})

app.listen(8000,function(){
    console.log("server is running Calvin J")
})
