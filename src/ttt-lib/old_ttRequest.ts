import ttRequestType    from       "./ttRequestType";

export default class ttRequest {
    public  requestType:        ttRequestType;  // SYNC / ASYNC

    constructor(requestType: ttRequestType = ttRequestType.NONE) {
        this.requestType    = requestType;
    }
}
