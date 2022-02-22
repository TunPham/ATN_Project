

class Site{
    index(req,res){
        res.render('index')
    }
};

module.exports = new Site()