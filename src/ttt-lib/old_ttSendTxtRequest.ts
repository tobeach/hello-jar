import ttRequest        from       "./ttRequest";
import ttRequestType    from       "./ttRequestType";

export default class ttSendTxtRequest extends ttRequest {
    public  targetMobile:       string;         // The mobile number of the phone that will receive the txt message.
    public  txtMessage:         string;         // The txt message sent to the targetMobile phone number.

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
