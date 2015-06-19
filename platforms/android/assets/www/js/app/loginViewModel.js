'use strict'

var LoginViewModel = function(parent){

    var self = this;

    self.login = function() {
        window.plugins.googleplus.login(
            {
                'iOSApiKey': '6535513912-uvpf249ak7avodois85tkjmh2lc2j952.apps.googleusercontent.com'
            },
            function (obj) {
                document.querySelector("#userPhoto").src = obj.imageUrl;
                document.querySelector("#userPhoto").style.visibility = 'visible';
                document.querySelector("#userName").innerHTML = "Hola, " + obj.displayName;
                console.log(obj);
                parent.showProductsSection();
                
            },
            function (msg) {
                alert('error:' + msg);
                console.error(msg);
            }
        );
    };    

    window.onerror = function(what, line, file) {
        alert(what + '; ' + line + '; ' + file);
    };

    function handleOpenURL (url) {
        document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
    }

};