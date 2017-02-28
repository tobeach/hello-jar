import ttRequest        from       "./ttRequest";
import ttRequestType    from       "./ttRequestType";

export default class ttReply {
    public  request:            ttRequest;

    public  rc:                 string;         // Bittag rc    
    public  rcMessage:          string;         // Bittag msg

    public  txId:               string;         // transaction id from service (Bittag or 3rd party)
    public  errCode:            string;         // error code from service (Bittag or 3rd party)
    public  errMessage:         string;         // error message from service (Bittag or 3rd party)


    constructor();
    constructor(obj: ttRequestType);
    constructor(obj: ttRequest);
    constructor(obj?: any) {

        let reqType: ttRequestType = ttRequestType.NONE; // default for empty constructor
        if( typeof(obj) == "string" )
            reqType = obj;              // ttRequestType sent in constructor
        else if( typeof(obj) == "object" )
            reqType = obj.requestType; // ttRequest sent in constructor
            
        this.request = new ttRequest(reqType);
    }
}