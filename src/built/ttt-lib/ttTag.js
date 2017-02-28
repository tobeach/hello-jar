"use strict";
const ttTagType_1 = require("./ttTagType");
const ttGeoPoint_1 = require("./ttGeoPoint");
class ttTag {
    // Only an empty constructor is used.
    // Note: Be careful because ttTag is a POJO and fn
    // bodies are not sent with over the network.
    constructor(type = ttTagType_1.default.MEETING) {
        this.type = type;
        this.token = null;
        this.tmMeetingStart = new Date(0);
        this.tmMeetingEnd = new Date(0);
        this.markerLocation = new ttGeoPoint_1.default();
        this.tmTagSaved = new Date(0);
        this.isTagSaved = false;
        this.tmAuthorSigned = new Date(0);
        this.isAuthorSigned = false;
        this.tmClientSigned = new Date(0);
        this.isClientSigned = false;
    }
    static load(target, source) {
        // Only absorb valid ttTag properties from the source.
        if (!(typeof source.type === "undefined"))
            target.type = source.type;
        if (!(typeof source.token === "undefined"))
            target.token = source.token;
        if (!(typeof source.tagUrl === "undefined"))
            target.tagUrl = source.tagUrl;
        if (!(typeof source.subject === "undefined"))
            target.subject = source.subject;
        if (!(typeof source.notes === "undefined"))
            target.notes = source.notes;
        if (!(typeof source.tmMeetingStart === "undefined"))
            target.tmMeetingStart = source.tmMeetingStart;
        if (!(typeof source.tmMeetingEnd === "undefined"))
            target.tmMeetingEnd = source.tmMeetingEnd;
        if (!(typeof source.meetingLenSecs === "undefined"))
            target.meetingLenSecs = source.meetingLenSecs;
        if (!(typeof source.markerLocation === "undefined"))
            target.markerLocation = source.markerLocation;
        if (!(typeof source.markerDescription === "undefined"))
            target.markerDescription = source.markerDescription;
        if (!(typeof source.authorPenalty === "undefined"))
            target.authorPenalty = source.authorPenalty;
        if (!(typeof source.authorReward === "undefined"))
            target.authorReward = source.authorReward;
        if (!(typeof source.clientPenalty === "undefined"))
            target.clientPenalty = source.clientPenalty;
        if (!(typeof source.clientReward === "undefined"))
            target.clientReward = source.clientReward;
        if (!(typeof source.tmTagSaved === "undefined"))
            target.tmTagSaved = source.tmTagSaved;
        if (!(typeof source.isTagSaved === "undefined"))
            target.isTagSaved = source.isTagSaved;
        if (!(typeof source.tmAuthorSigned === "undefined"))
            target.tmAuthorSigned = source.tmAuthorSigned;
        if (!(typeof source.isAuthorSigned === "undefined"))
            target.isAuthorSigned = source.isAuthorSigned;
        if (!(typeof source.tmClientSigned === "undefined"))
            target.tmClientSigned = source.tmClientSigned;
        if (!(typeof source.isClientSigned === "undefined"))
            target.isClientSigned = source.isClientSigned;
    }
    /***********************
        constructor(obj: ttTag);
    
        constructor(obj?: any) {
            if( typeof(obj) == "object" ) {             // ttTag sent in constructor
                this.type = obj.type;                   // ...so copy the ttTag sent in.
    
                this.id                 = obj.id;
                this.shortUrl           = obj.shortUrl;
    
                this.subject            = obj.subject;
                this.notes              = obj.notes;
    
                this.tmMeetingStart     = obj.tmMeetingStart;
                this.tmMeetingEnd       = obj.tmMeetingEnd;
                this.meetingLenSecs     = obj.meetingLenSecs;
    
                this.markerLocation     = obj.markerLocation;
                this.markerDescription  = obj.markerDescription;
            
                this.authorId           = obj.authorId;
                this.authorMobile       = obj.authorMobile;
                this.authorHandle       = obj.authorHandle;
                this.authorPin          = obj.authorPin;
                this.isAuthorSigned     = obj.isAuthorSigned;
                
                this.clientId           = obj.clientId;
                this.clientMobile       = obj.clientMobile;
                this.clientHandle       = obj.clientHandle;
                this.clientPin          = obj.clientPin;
                this.isClientSigned     = obj.isClientSigned;
    
                this.authorPenalty      = obj.authorPenalty;
                this.authorReward       = obj.authorReward;
                this.clientPenalty      = obj.clientPenalty;
                this.clientReward       = obj.clientReward;
    
                // Restricted properties
    
                this.tmCreationCodeMade     = new Date();;
                this.tmCreationCodeSigned   = new Date();;
                this.numCreationCodeSends   = 0;
    
                if ( !(typeof this.creationCode === "undefined") ) this.creationCode = obj.creationCode;
                else this.creationCode = null;
    
                if ( !(typeof this.numCreationCodeSends === "undefined") ) this.numCreationCodeSends = obj.numCreationCodeSends;
                else this.numCreationCodeSends = null;
    
                if ( !(typeof this.tmCreationCodeMade === "undefined") ) this.tmCreationCodeMade = obj.tmCreationCodeMade;
                else this.tmCreationCodeMade = null;
    
                if ( !(typeof this.tmCreationCodeSigned === "undefined") ) this.tmCreationCodeSigned = obj.tmCreationCodeSigned;
                else this.tmCreationCodeSigned = null;
                
                if ( !(typeof this.parentId === "undefined") ) this.parentId = obj.parentId;
                else this.parentId = null;
            }
            else {  // either ttTagType or empty sent in constructor
                if( typeof(obj) == "string" )       // ttTagType sent in constructor
                    this.type = obj;
                else                                // empty sent in constructor
                    this.type = ttTagType.MEETING; // set a default type for empty constructor
    
                this.tmMeetingStart     = new Date();
                this.tmMeetingEnd       = new Date();
                this.markerLocation     = new ttGeoPoint();
                this.isAuthorSigned     = false;
                this.isClientSigned     = false;
    
                // Restricted properties
                this.tmCreationCodeMade     = new Date();;
                this.tmCreationCodeSigned   = new Date();;
                this.numCreationCodeSends   = 0;
            }
        }
    ***********/
    //*******************************************
    static durationInSeconds(tag) {
        //*******************************************
        let durationInMilliseconds = tag.tmMeetingEnd.getTime() - tag.tmMeetingStart.getTime();
        if (durationInMilliseconds > 999)
            return Math.floor(durationInMilliseconds / 1000);
        return 0;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttTag;
//# sourceMappingURL=ttTag.js.map