import ttRequest        from       "./ttRequest";
import ttRequestType    from       "./ttRequestType";

export default class ttSignTagRequest extends ttRequest {
    public  id:             string;         // The tag id
    public  creationCode:   string;         // The 4-digit creation code sent via txt-msg to the tag-author

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
