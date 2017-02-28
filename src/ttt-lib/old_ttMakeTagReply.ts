
export default class ttMakeTagReply {
    public authorPin:           string;     // The data part of the goo.gl short link. eg: "CXhTcm" for link: "https://goo.gl/CXhTcm"
    public txtCallBackNumber:   string;     // The twilio number to which the author's phone must send an sms containing authorPin.
}
