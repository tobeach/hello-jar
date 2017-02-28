
export default class ttRequestType { 
    public static  NONE:            string      = "NONE";      // The request type is not defined.
    public static  SYNC:            string      = "SYNC";      // The request connection persists until the function completes.
    public static  ASYNC:           string      = "ASYNC";     // The request connection closes after it receives the request.
}