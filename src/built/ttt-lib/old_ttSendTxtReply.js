"use strict";
const ttReply_1 = require("./ttReply");
const ttRequestType_1 = require("./ttRequestType");
class ttSendTxtReply extends ttReply_1.default {
    constructor(obj) {
        let reqType = ttRequestType_1.default.NONE; // default for empty constructor
        if (typeof (obj) == "string")
            reqType = obj; // ttRequestType sent in constructor
        else if (typeof (obj) == "object")
            reqType = obj.requestType; // ttRequest sent in constructor
        super(reqType);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttSendTxtReply;
//# sourceMappingURL=old_ttSendTxtReply.js.map