var AppViewModel = function(){

    var self = this;
    
    //the devicePlatform sets the strategy for TokenStore 
    self.tokenStore = new TokenStore();
    
    self.loginVM = ko.observable(new LoginViewModel(self));
    self.productsVM = ko.observable(new ProductsViewModel(self));
    
    self.isLoginVisible = ko.observable(true);
    self.isProductsSectionVisible = ko.observable();
    
    self.showProductsSection = function(){
        self.hideAll();
        self.productsVM().getProducts();
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