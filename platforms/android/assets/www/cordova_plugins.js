cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.googleplus/www/GooglePlus.js",
        "id": "nl.x-services.plugins.googleplus.GooglePlus",
        "clobbers": [
            "window.plugins.googleplus"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.googleplus": "1.1.2",
    "com.google.playservices": "21.0.1"
}
// BOTTOM OF METADATA
});