'use strict'

var LoginViewModel = function(parent){

    var self = this;

    self.login = function() {
        window.plugins.googleplus.login(
            {
                'iOSApiKey': '6535513912-uvpf249ak7avodois85tkjmh2lc2j952.apps.googleusercontent.com'
            },
            function (obj) {
                //Login was successfull
                //obj has the data from google account
                document.querySelector("#userPhoto").src = obj.imageUrl;
                document.querySelector("#userPhoto").style.visibility = 'visible';
                document.querySelector("#userName").innerHTML = "Hola, " + obj.displayName;
                console.log(obj);
                self.getApiToken('google', obj.userId, obj.oauthToken, function(error){
                    if (error){
                        console.error(error);
                        alert('Hubo un problema al autenticar');
                        return;
                    }

                    //Go to products screen
                    parent.showProductsSection();
                });
            },
            function (msg) {
                //something was wrong
                alert('error:' + msg);
                console.error(msg);
            }
        );
    };

    self.getApiToken = function(thirdParty, userId, oauthToken, callback){

        //TODO: change ip to local IP if needed for testing
        var url = 'http://unabsecuredapi-mreyesexamples.rhcloud.com/api/login?';
        url = url + 'thirdparty=' + thirdParty + '&';
        url = url + 'userid=' + userId + '&';
        url = url + 'accesstoken=' + oauthToken;

        $.ajax({

            url: url,
            type: 	'GET',
            contentType: 'application/json; charset=utf-8',
            success: function(data){
                console.log(data);
                if (data && data.token){
                    self.saveTokenInLocalDevice(data.token, function(error){
                        return callback(error);                        
                    });                    
                } else {
                    return callback({error: 'NO_JWT_TOKEN_RECEIVED'});
                }                
            },
            error: function(xhr, type){
                console.log('error');
                return callback({error: 'NO_JWT_TOKEN_RECEIVED'});
            }

        });
    };
    
    self.saveTokenInLocalDevice = function(token, callback){
        
        var tokenStore = parent.tokenStore;
        
        tokenStore.saveToken(token, function(error){
            callback(error);
        });
        
    };

};