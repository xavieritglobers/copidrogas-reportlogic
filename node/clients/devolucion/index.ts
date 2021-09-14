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
    sellerId:string, 
    page:number,
    offset:number ) =>
    {

        try{


          

        initialDate= new Date(initialDate)
        finalDate = new Date(finalDate)



        let initialDateFormated = `${initialDate.getFullYear()}-${initialDate.getMonth()+1<10?"0"+(initialDate.getMonth()+1):initialDate.getMonth()+1}-${initialDate.getDate()<10?"0"+initialDate.getDate():initialDate.getDate()}`
        let finalDateFormated = `${finalDate.getFullYear()}-${finalDate.getMonth()+1<10?"0"+(finalDate.getMonth()+1):finalDate.getMonth()+1}-${finalDate.getDate()<10?"0"+finalDate.getDate():finalDate.getDate()}`
      
      
     
     let fields=[
      
        "address",
				"city",
				"date",
				"email",
				"fullRefundPrice",
				"identification",
				"idReturn",
				"name",
				"orderID",
				"products",
				"reason",
				"sellerID",
				"sellerName",
				"state",
        "id"
        ]
       
    let conditions = `date between ${initialDateFormated}  AND ${finalDateFormated}  `

   
    
    if(cc!=='' && cc!=='undefined' && typeof cc!=='undefined')
    {
       conditions+=` AND identification = '${cc}' `
    }

    if(status!=='Todos')
    {
      conditions += `AND state='${status}'`
    }

    if(orderformid!=='' && orderformid!=='undefined' && typeof orderformid!=='undefined')
    {
      conditions+=` AND orderID = '${orderformid}' `
    }

    if(sellerId!=='Todos')
    {
      conditions+=` AND sellerName = '${sellerId}' `
    }

    
   
  


        const d =  await this.searchDocumentsWithPaginationInfo({
            dataEntity: 'DV',
            fields: fields,
            where: conditions,
            sort:'date ASC',
            pagination:{page:page,pageSize:offset}
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
    sellerId:string,
    page:number,
    offset:number ) => {


    try {

       

    const d = await this.getInfoFromMD(initialDate, 
        finalDate, 
        cc,
        orderformid,
        status, 
        sellerId,
        page,
        offset)


      const data:any = d.data
      
       
      const devs = [];

     

      for(var i = 0;i<data.length;i++)
      {

        const dev = {

          orderformid:data[i].orderID,
          fechacreado:data[i].date,
          seller:{name:data[i].sellerName, id:data[i].sellerID},
          cliente:{name:data[i].name, cedula:data[i].identification, address:data[i].address, city:data[i].city},
          status:data[i].state,
          totalprods:data[i].products?.length,
          motivo:data[i].reason,
          totaldevolucion:data[i].fullRefundPrice,
          documentid:data[i].id




        }
        devs.push(dev)
      }


    

      const devoluciones = {
        devoluciones:devs,
        paginacion:d.pagination
      }

     
     
    return devoluciones
      


     


    } catch (error) {

      console.log(error)
      throw new Error(error)

      };
    }
  }


