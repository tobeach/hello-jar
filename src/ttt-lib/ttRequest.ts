export default class ttRequest {
    public  type:           string;    // "SYNC" || "ASYNC"
    public  name:           string;    // Used to help interpret data: - eg: "makeTag.1"
    public  data:           any;       // input param object(s).

    public constructor(type: string = "ASYNC", name: string = null, data: any = null) {
        this.type = type;
        this.name = name;
        this.data = data;
    }
}