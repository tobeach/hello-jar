export default class ttParty {
    public  Id:                 string; // An independent reference (1:1-indirection) so that a party can change their phone number.
    public  phoneNumber:        string;
    public  vanityName:         string;
    // following are better derived from Tag datastore:
    // public  tagsAuthored:       number;
    // public  tagsAccepted:       number;
    // public  tagsCompleted:      number;
}
