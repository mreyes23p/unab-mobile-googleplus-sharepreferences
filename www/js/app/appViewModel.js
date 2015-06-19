var AppViewModel = function(){

    var self = this;
    
    self.loginVM = ko.observable(new LoginViewModel(self));
    self.productsVM = ko.observable(new ProductsViewModel(self));
    
    self.isLoginVisible = ko.observable(true);
    self.isProductsSectionVisible = ko.observable();
    
    self.showProductsSection = function(){
        self.hideAll();
        self.isProductsSectionVisible(true);
    };
    
    self.showLogin = function(){
        self.hideAll();
        self.isLoginVisible(true);
    };
    
    self.hideAll = function(){    
        self.isLoginVisible(false);
        self.isProductsSectionVisible(false);        
    };
    
};