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
                self.getApiToken('google', obj.oauthToken, function(error){
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

    self.getApiToken = function(thirdParty, oauthToken, callback){

        var url = 'http://unabsecuredapi-mreyesexamples.rhcloud.com/api/login?';
        url = url + 'who=' + thirdParty + '&';
        url = url + 'accesstoken=' + oauthToken;

        $.ajax({

            url: url
            type: 	'GET',
            contentType: 'application/json; charset=utf-8',
            success: function(data){
                console.log(data);
                if (data && data.jwtoken){
                    return callback(data.jwtoken);
                }
                return callback({error: 'NO_JWT_TOKEN_RECEIVED'});
            },
            error: function(xhr, type){
                console.log('error');
                return callback({error: 'NO_JWT_TOKEN_RECEIVED'});
            }

        });
    };

};