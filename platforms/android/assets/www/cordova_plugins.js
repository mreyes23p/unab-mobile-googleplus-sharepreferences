cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.googleplus/www/GooglePlus.js",
        "id": "nl.x-services.plugins.googleplus.GooglePlus",
        "clobbers": [
            "window.plugins.googleplus"
        ]
    },
    {
        "file": "plugins/in.edelworks.sharedpreferences/www/sharedpreferences.js",
        "id": "in.edelworks.sharedpreferences.SharedPreferences",
        "clobbers": [
            "sharedpreferences"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.googleplus": "1.1.2",
    "in.edelworks.sharedpreferences": "0.1.0",
    "org.apache.cordova.device": "0.3.0",
    "com.google.playservices": "21.0.1"
}
// BOTTOM OF METADATA
});