"use strict";
var ttGeoPoint = (function () {
    function ttGeoPoint(latitude, longitude) {
        if (latitude === void 0) { latitude = 0.1; }
        if (longitude === void 0) { longitude = 0.1; }
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return ttGeoPoint;
}());
exports.__esModule = true;
exports["default"] = ttGeoPoint;
