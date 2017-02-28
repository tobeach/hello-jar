(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tt = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const ttTag_1 = require("./ttt-lib/ttTag");
const ttRequest_1 = require("./ttt-lib/ttRequest");
const baseBittagApiUrl = "https://us-central1-tt-dev1.cloudfunctions.net/";
//***************************************************
function feeAsNumber(selection) {
    //***************************************************    
    if (selection == "none")
        return 0;
    if (selection == "$ 0.25")
        return 0.25;
    if (selection == "$ 1.00")
        return 1;
    if (selection == "$ 5.00")
        return 5;
    if (selection == "$ 10.00")
        return 10;
    return null; // invalid selection value.
}
//***************************************************
function durationAsSeconds(selection) {
    //***************************************************    
    if (selection == "Just show up")
        return 0;
    if (selection == "1 minute")
        return 60;
    if (selection == "5 minutes")
        return 300;
    if (selection == "15 minutes")
        return 900;
    if (selection == "30 minutes")
        return 1800;
    if (selection == "1 hour")
        return 3600;
    return null; // invalid selection value.
}
//***************************************************
function dateTimeStrAsDate(dateTimeStr) {
    //***************************************************    
    return new Date(dateTimeStr);
}
//***************************************************
function makeTag(dom) {
    //***************************************************
    var url = baseBittagApiUrl + "makeTag";
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        let tag = new ttTag_1.default();
        tag.subject = dom.$$('#maketag-tag-subject').value;
        // assign a default meeting subject.
        if (tag.subject == undefined || tag.subject.trim() == "")
            tag.subject = "My meeting";
        tag.notes = dom.$$('#maketag-tag-notes').value;
        tag.markerDescription = dom.workingTag.markerDescription; // = dom.$$('#maketag-marker-description').value;
        tag.markerLocation.latitude = dom.workingTag.markerLocation.latitude; // = dom.$$('#maketag-marker-lat').value;
        tag.markerLocation.longitude = dom.workingTag.markerLocation.longitude; // = dom.$$('#maketag-marker-lng').value;     
        tag.tmMeetingStart = dateTimeStrAsDate(dom.$$('#maketag-meeting-start-date').value + " " +
            dom.$$('#maketag-meeting-start-time').value);
        tag.meetingLenSecs = durationAsSeconds(dom.$$('#maketag-meeting-duration').value);
        tag.tmMeetingEnd = new Date(tag.tmMeetingStart.valueOf() + (tag.meetingLenSecs * 1000));
        let authorMobile = "+1" + dom.$$('#maketag-author-mobile').value.replace(/-/g, '');
        tag.authorReward = feeAsNumber(dom.$$('#maketag-author-reward').value);
        tag.authorPenalty = feeAsNumber(dom.$$('#maketag-author-penalty').value);
        tag.clientReward = feeAsNumber(dom.$$('#maketag-client-reward').value);
        tag.clientPenalty = feeAsNumber(dom.$$('#maketag-client-penalty').value);
        req.onload = function () {
            // This is called even on 404 etc, so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        let request = new ttRequest_1.default("SYNC", "makeTag.1", { "authorMobile": authorMobile, "ttTag": tag });
        req.send(JSON.stringify(request));
        //req.send(request);
    });
}
exports.makeTag = makeTag;
//***************************************************
function signTag(dom) {
    //***************************************************
    var url = baseBittagApiUrl + "signTag";
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        let creationCode = dom.$$('#signtag-code').value;
        console.log("signtag() creationCode:" + creationCode);
        let data = { "creationCode": creationCode, "token": dom.workingTag.token };
        let request = new ttRequest_1.default("SYNC", "signTag.1", data);
        req.onload = function () {
            // This is called even on 404 etc, so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send(JSON.stringify(request));
    });
}
exports.signTag = signTag;
//***************************************************
function newTag() {
    //***************************************************
    return new ttTag_1.default();
}
exports.newTag = newTag;
;

},{"./ttt-lib/ttRequest":3,"./ttt-lib/ttTag":4}],2:[function(require,module,exports){
"use strict";
class ttGeoPoint {
    constructor(latitude = 0.0, longitude = 0.0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttGeoPoint;

},{}],3:[function(require,module,exports){
"use strict";
class ttRequest {
    constructor(type = "ASYNC", name = null, data = null) {
        this.type = type;
        this.name = name;
        this.data = data;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttRequest;

},{}],4:[function(require,module,exports){
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

},{"./ttGeoPoint":2,"./ttTagType":5}],5:[function(require,module,exports){
"use strict";
class ttTagType {
}
ttTagType.NONE = "0";
ttTagType.EMPTY = "10"; // initial store, before pre-populated with id, url, etc.
ttTagType.BLANK = "20"; // upgraded EMPTY tag with id, shortUrl, authorPin
ttTagType.MEETING = "30"; // 'standard' 2-party tag.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ttTagType;

},{}]},{},[1])(1)
});