"use strict";
var ttTagType = (function () {
    function ttTagType() {
    }
    return ttTagType;
}());
ttTagType.NONE = "0";
ttTagType.EMPTY = "10"; // initial store, before pre-populated with id, url, etc.
ttTagType.BLANK = "20"; // upgraded EMPTY tag with id, shortUrl, authorPin
ttTagType.MEETING = "30"; // 'standard' 2-party tag.
exports.__esModule = true;
exports["default"] = ttTagType;
