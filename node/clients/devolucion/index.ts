import { InstanceOptions, IOContext, MasterData } from "@vtex/api";






export class DevolucionClient extends MasterData {
    constructor(context: IOContext, options?: InstanceOptions) {
        super(context, {
          ...options,
          headers: {
            ...(options && options.headers),
            ...{ Accept: "application/vnd.vtex.ds.v10+json" },
            ...(context.adminUserAuthToken
              ? { VtexIdclientAutCookie: context.adminUserAuthToken }
              : null),
            ...(context.storeUserAuthToken
              ? { VtexIdclientAutCookie: context.storeUserAuthToken }
              : null),
            ...(context.authToken
              ? { VtexIdclientAutCookie: context.authToken }
              : null),
          },
        });
      }
  
 private getInfoFromMD = async (
    initialDate: Date, 
    finalDate: Date, 
    cc: string,
    orderformid: string,
    status:string, 
    page:number,
    offset:number ) =>
    {

        try{

        initialDate= new Date(initialDate)
        finalDate = new Date(finalDate)



        let initialDateFormated = `${initialDate.getFullYear()}-${initialDate.getMonth()+1<10?"0"+(initialDate.getMonth()+1):initialDate.getMonth()+1}-${initialDate.getDate()<10?"0"+initialDate.getDate():initialDate.getDate()}`
        let finalDateFormated = `${finalDate.getFullYear()}-${finalDate.getMonth()+1<10?"0"+(finalDate.getMonth()+1):finalDate.getMonth()+1}-${finalDate.getDate()<10?"0"+finalDate.getDate():finalDate.getDate()}`
      
        console.log(initialDateFormated, finalDateFormated)


        console.log(`${finalDate}${initialDate}${cc}${orderformid}${status}${page}${offset}`)

        
      let fields=[
      
                "email",
                "sellerName",
                "date"
        ]
       
    let conditions = `date between ${initialDateFormated} AND ${finalDateFormated} `



        const d =  await this.searchDocumentsWithPaginationInfo({
            dataEntity: 'DV',
            fields: fields,
            where: conditions,
            sort:'date ASC',
            pagination:{page:1,pageSize:5}
        });
        

        
    

        return d
    }
    catch (error) {

        console.log(error)
        throw new Error(error)
  
        };
}
    

  public devoluciones = async (initialDate: Date, 
    finalDate: Date, 
    cc: string,
    orderformid: string,
    status:string, 
    page:number,
    offset:number ) => {



    try {

       

    const d = await this.getInfoFromMD(initialDate, 
        finalDate, 
        cc,
        orderformid,
        status, 
        page,
        offset)



        console.log("DATA", d)
   


      
    return []
      


     


    } catch (error) {

      console.log(error)
      throw new Error(error)

      };
    }
  }


