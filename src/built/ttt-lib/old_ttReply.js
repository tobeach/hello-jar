"use strict";
const ttRequest_1 = require("./ttRequest");
const ttRequestType_1 = require("./ttRequestType");
class ttReply {
    constructor(obj) {
        let reqType = ttRequestType_1.default.NONE; // default for empty constructor
        if (typeof (obj) == "string")
            reqType = obj; // ttRequestType sent in constructor
        else if (typeof (obj) == "object")
            reqType = obj.requestType; // ttRequest sent in constructor
        this.request = new ttRequest_1.default(reqType);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttReply;
//# sourceMappingURL=old_ttReply.js.map