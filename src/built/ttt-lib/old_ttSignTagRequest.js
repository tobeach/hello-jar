"use strict";
const ttRequest_1 = require("./ttRequest");
const ttRequestType_1 = require("./ttRequestType");
class ttSignTagRequest extends ttRequest_1.default {
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
exports.default = ttSignTagRequest;
//# sourceMappingURL=old_ttSignTagRequest.js.map