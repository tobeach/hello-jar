export default class ttTagType { 
    public static  NONE:            string      = "0";
    public static  EMPTY:           string      = "10"; // initial store, before pre-populated with id, url, etc.
    public static  BLANK:           string      = "20"; // upgraded EMPTY tag with id, shortUrl, authorPin
    public static  MEETING:         string      = "30"; // 'standard' 2-party tag.
}