

class Site{
    index(req,res){
        res.render('index')
    }
};

class Allproduct{
    index(req,res){
        res.render('allproduct')
    }
}
module.exports = new Site()