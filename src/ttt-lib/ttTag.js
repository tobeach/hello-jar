"use strict";
var ttTagType_1 = require("./ttTagType");
var ttGeoPoint_1 = require("./ttGeoPoint");
var ttTag = (function () {
    function ttTag(obj) {
        if (typeof (obj) == "object") {
            this.type = obj.type; // ...so copy the ttTag sent in.
            //this.id                 = obj.id;
            //this.shortUrl           = obj.shortUrl;
            this.subject = obj.subject;
            this.notes = obj.notes;
            this.tmMeetingStart = obj.tmMeetingStart;
            this.tmMeetingEnd = obj.tmMeetingEnd;
            //this.meetingLenSecs     = obj.meetingLenSecs;
            this.markerLocation = obj.markerLocation;
            this.markerDescription = obj.markerDescription;
            //this.authorId           = obj.authorId;
            this.authorMobile = obj.authorMobile;
            this.authorHandle = obj.authorHandle;
            //this.authorPin          = obj.authorPin;
            this.isAuthorSigned = obj.isAuthorSigned;
            //this.clientId           = obj.clientId;
            //this.clientMobile       = obj.clientMobile;
            //this.clientHandle       = obj.clientHandle;
            //this.clientPin          = obj.clientPin;
            this.isClientSigned = obj.isClientSigned;
            this.authorPenalty = obj.authorPenalty;
            this.authorReward = obj.authorReward;
            this.clientPenalty = obj.clientPenalty;
            this.clientReward = obj.clientReward;
            // Restricted properties
            this.tmCreationCodeMade = new Date();
            ;
            this.tmCreationCodeSigned = new Date();
            ;
            this.numCreationCodeSends = 0;
        }
        else {
            if (typeof (obj) == "string")
                this.type = obj;
            else
                this.type = ttTagType_1["default"].MEETING; // set a default type for empty constructor
            this.tmMeetingStart = new Date();
            this.tmMeetingEnd = new Date();
            this.markerLocation = new ttGeoPoint_1["default"]();
            this.isAuthorSigned = false;
            this.isClientSigned = false;
            // Restricted properties            
            this.tmCreationCodeMade = new Date();
            ;
            this.tmCreationCodeSigned = new Date();
            ;
            this.numCreationCodeSends = 0;
        }
    }
    //*******************************************
    ttTag.prototype.hideRestrictedProperties = function () {
        //*******************************************
        console.log("hideRestrictedProperties.");
        /*
            this.creationCode           = null;
            this.numCreationCodeSends   = null;
            this.tmCreationCodeMade     = null;
            this.tmCreationCodeSigned   = null;
            this.parentId               = null;
        */
    };
    //*******************************************
    ttTag.prototype.durationInSeconds = function () {
        //*******************************************
        var durationInMilliseconds = this.tmMeetingEnd.getTime() - this.tmMeetingStart.getTime();
        if (durationInMilliseconds > 999)
            return Math.floor(durationInMilliseconds / 1000);
        return 0;
    };
    return ttTag;
}());
exports.__esModule = true;
exports["default"] = ttTag;
