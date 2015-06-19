var ProductsViewModel = function(parent){

    var self = this;
    
    self.products = ko.observableArray();
    
    self.getProducts = function(){
    
        $.ajax({

            url: 	'http://unabsecuredapi-mreyesexamples.rhcloud.com/api/products',
            type: 	'GET',
            beforeSend: function (request){
                request.setRequestHeader('x-access-token', 'JWTOKEN');
            },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(data){
                console.log(data);
                self.products(data);
            },
            error: function(xhr, type){
                console.log('error');
            }

        });
        
    };
    
    self.logout = function() {
        window.plugins.googleplus.logout(
            function (result) {
                parent.showLogin();
            }
        );
    };
    
};