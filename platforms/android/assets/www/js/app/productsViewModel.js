var ProductsViewModel = function(parent){

    var self = this;
    
    self.logout = function() {
        window.plugins.googleplus.logout(
            function (result) {
                parent.showLogin();
            }
        );
    };
    
};