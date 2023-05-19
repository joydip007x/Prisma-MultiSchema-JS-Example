
/** 
    * @This is a @OPTIONAL File is to Help Prisma Client Auto-Complete
    * @If u @delete this  prisma-client-js.js ,
    * @Express Server will still work ( implying you remove imports in index.js too)
    * https://stackoverflow.com/questions/72102079/single-instance-prisma-client-autocomplete-not-working 
    * @If you dont feel any issue , ignore this

*/
import { PrismaClient } from "@prisma/client";

export default class Db extends PrismaClient {
    static instance;
    constructor(){
        if(!Db.instance){
            Db.instance = new PrismaClient()
        }
        return Db.instance;
    }
}
