module.exports = function (app) {
  //   map.get('/users', 'user#getUsers');
  app.get('/test',(req,res,next)=>{
    res.json({message:'Test Page'})
  })
  app.post('/authenticate', 'user#authenticateUser');
};
