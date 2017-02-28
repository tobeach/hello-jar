import ttTag            from "./ttt-lib/ttTag";
import ttRequest        from "./ttt-lib/ttRequest";
import ttReply          from "./ttt-lib/ttReply";

const baseBittagApiUrl     = "https://us-central1-tt-dev1.cloudfunctions.net/";

//***************************************************
function feeAsNumber(selection: string): number {
//***************************************************    
    if( selection == "none" )
        return 0;
    if( selection == "$ 0.25" )
        return 0.25;
    if( selection == "$ 1.00" )
        return 1;
    if( selection == "$ 5.00" )
        return 5;
    if( selection == "$ 10.00" )
        return 10;

    return null; // invalid selection value.
}

//***************************************************
function durationAsSeconds(selection: string): number {
//***************************************************    
    if( selection == "Just show up" )
        return 0;
    if( selection == "1 minute" )
        return 60;
    if( selection == "5 minutes" )
        return 300;
    if( selection == "15 minutes" )
        return 900;
    if( selection == "30 minutes" )
        return 1800;
    if( selection == "1 hour" )
        return 3600;

    return null; // invalid selection value.
}

//***************************************************
function dateTimeStrAsDate(dateTimeStr: string): Date {
//***************************************************    
    return new Date(dateTimeStr);
}

//***************************************************
export function makeTag(dom) {
//***************************************************
    var url     = baseBittagApiUrl + "makeTag";

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();                
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");                

        let tag: ttTag = new ttTag();

        tag.subject                     = dom.$$('#maketag-tag-subject').value;
        // assign a default meeting subject.
        if( tag.subject == undefined || tag.subject.trim() == "" ) tag.subject = "My meeting";
        tag.notes                       = dom.$$('#maketag-tag-notes').value;

        tag.markerDescription           = dom.workingTag.markerDescription;         // = dom.$$('#maketag-marker-description').value;
        tag.markerLocation.latitude     = dom.workingTag.markerLocation.latitude;   // = dom.$$('#maketag-marker-lat').value;
        tag.markerLocation.longitude    = dom.workingTag.markerLocation.longitude;  // = dom.$$('#maketag-marker-lng').value;     

        tag.tmMeetingStart              = dateTimeStrAsDate(dom.$$('#maketag-meeting-start-date').value + " " +
                                                            dom.$$('#maketag-meeting-start-time').value);
        tag.meetingLenSecs              = durationAsSeconds(dom.$$('#maketag-meeting-duration').value);
        tag.tmMeetingEnd                = new Date(tag.tmMeetingStart.valueOf() + ( tag.meetingLenSecs * 1000));

        let authorMobile:string         = "+1" + dom.$$('#maketag-author-mobile').value.replace(/-/g,'');

        tag.authorReward                = feeAsNumber(dom.$$('#maketag-author-reward').value);    
        tag.authorPenalty               = feeAsNumber(dom.$$('#maketag-author-penalty').value);        
        tag.clientReward                = feeAsNumber(dom.$$('#maketag-client-reward').value);
        tag.clientPenalty               = feeAsNumber(dom.$$('#maketag-client-penalty').value);
                
        req.onload = function() {
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
        req.onerror = function() {
        reject(Error("Network Error"));
        };

        // Make the request
        let request: ttRequest = new ttRequest("SYNC","makeTag.1",{"authorMobile":authorMobile,"ttTag":tag});
        req.send(JSON.stringify(request));
        //req.send(request);
    });
}

//***************************************************
export function signTag(dom) {
//***************************************************
    var url     = baseBittagApiUrl + "signTag";

    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();                
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");                

        let creationCode = dom.$$('#signtag-code').value;
        console.log("signtag() creationCode:" + creationCode);

        let data: any = {"creationCode":creationCode,"token":dom.workingTag.token};
        let request: ttRequest = new ttRequest("SYNC","signTag.1",data);
                
        req.onload = function() {
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
        req.onerror = function() {
        reject(Error("Network Error"));
        };

        // Make the request
        req.send(JSON.stringify(request));
    });    
}

//***************************************************
export function newTag() : ttTag {
//***************************************************
    return new ttTag();
};
    