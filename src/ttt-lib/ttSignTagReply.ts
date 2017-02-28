import ttReply          from       "./ttReply";
import ttRequest        from       "./ttRequest";
import ttRequestType    from       "./ttRequestType";

export default class ttSignTagReply extends ttReply {
    public  authorPin:          string;         
    public  txtCallBackNumber:  string;         

    constructor();
    constructor(obj: ttRequestType);
    constructor(obj: ttRequest);
    constructor(obj?: any) {

        let reqType: ttRequestType = ttRequestType.NONE; // default for empty constructor
        if( typeof(obj) == "string" )
            reqType = obj;              // ttRequestType sent in constructor
        else if( typeof(obj) == "object" )
            reqType = obj.requestType; // ttRequest sent in constructor
            
        super(reqType);
    }
}
