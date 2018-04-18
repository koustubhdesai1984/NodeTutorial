(function(){
    app.service('AddtoCart',[function(){
        var products = [];
        this.add = function(p){
            products.push(p);
        }
        this.cart=function(){
            return products;
        }
    }]);
    app.config([ '$provide', function($provide) {
        
    }]);
})()