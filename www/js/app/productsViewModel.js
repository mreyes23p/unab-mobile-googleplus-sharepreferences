var ProductsViewModel = function(parent){

    var self = this;
    
    self.tokenStore = parent.tokenStore;

    self.products = ko.observableArray();

    self.getProducts = function(){

        self.tokenStore.getToken(function(error, token){
            if (error){
                console.error(error);
                alert('Ha ocurrido un error al obtener los productos');
                return;
            }

            console.log('API token to send: ' + token);
            //TODO: change ip to PaaS ip service in the cloud
            var url = 'http://192.168.0.15:8000/api/products';
            $.ajax({

                url: 	url,
                type: 	'GET',
                beforeSend: function (request){
                    request.setRequestHeader('x-access-token', token);
                },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function(data){
                    console.log(data);
                    self.products(data);
                },
                error: function(xhr, type){
                    console.log('error');
                    alert('No se pudo obtener el listado de productos');
                }

            });
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