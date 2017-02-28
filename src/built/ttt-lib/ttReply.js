"use strict";
class ttReply {
    constructor(rc = 0, message = "", dataType = null, data = null) {
        this.rc = rc;
        this.message = message;
        this.name = dataType;
        this.data = data;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttReply;
//# sourceMappingURL=ttReply.js.map