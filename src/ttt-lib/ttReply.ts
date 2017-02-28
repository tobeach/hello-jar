export default class ttReply {
    public  rc:             number;     // Bittag rc     
    public  message:        string;     // Bittag msg
    public  name:           string;     // Freeform label to help interpret data
    public  data:           any;        // any object

    public constructor(rc: number = 0, message: string = "", dataType: string = null, data: any = null ) {
        this.rc = rc;
        this.message = message;
        this.name = dataType;
        this.data = data;
    }
}