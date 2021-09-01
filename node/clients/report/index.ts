import { MasterData, InstanceOptions, IOContext } from "@vtex/api";
import { DevolucionClient } from "../devolucion";




export class MdHandler extends MasterData {
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

    public  async createMDReport(reportFilter:any, hash:string, email:string, formData:any, paginacion:any)
    {
          
      const {total} = paginacion

      /*Validamos si existe un reporte con el hash ya creado*/ 
      const doc:any = await this.searchDocuments({
        dataEntity:'DR', 
        fields:["_all"], 
        where:`hashname=${hash}`,
        pagination:{page:1, pageSize:1}
      })

      

      let docToReturn = {Id:'',Href:'',DocumentId:''}

      let data = {
        lastEmailSentTo:email,
        hashname:hash, 
        reportFile:formData,
        timesSended:1
       }
      /*Si el documento no existe, se debe crear uno nuevo*/ 
      if(doc.length===0)
      {
        /*Se crea un nuevo documento*/ 
        
        /*Si no tengo la data completa en memoria, 
        debo consultar de nuevo, con los filtros del reporte*/ 
        if(total !== formData.length)
        {
          const devClient = new DevolucionClient(this.context,this.options)
          let dfMD = await devClient.devoluciones(reportFilter.initialDate,
                                                  reportFilter.finalDate, 
                                                  reportFilter.cc,
                                                  reportFilter.orderformid,
                                                  reportFilter.status,
                                                  reportFilter.sellerId,
                                                  1,
                                                  total)

          const devoluciones = dfMD?.devoluciones
          formData = new Array()
          for(var i= 0;i<devoluciones?.length;i++)
          {
        
         
        
            let dev = devoluciones[i]
        
            
        
            let fecha = dev.fechacreado.substring(0,10).split("-")
            let item = {
        
                orderformid:dev.orderformid,
                fcreacion:`${fecha[1]}/${fecha[2]}/${fecha[0]}`,
                seller:dev.seller.name,
                sellerId:dev.seller.id,
                clientname: dev.cliente.name,
                clientId: dev.cliente.cedula,
                clientaddress:`${dev.cliente.address}, ${dev.cliente.city}`,
                status: dev.status,
                motivo:dev.motivo,
                totaldevolucion:`${Intl.NumberFormat('en-US', { style: 'currency', currency:'usd' }).format(dev.totaldevolucion)}`,
                totalprods:dev.totalprods,
                documentid:dev.documentid
            }
             formData.push(item)
             
          }

          data = {
            lastEmailSentTo:email,
            hashname:hash, 
            reportFile:formData,
            timesSended:1
           }
        

            
        }

        try{

           docToReturn =  await this.createDocument({
          dataEntity: 'DR',
          fields: data,
          })
          
        return docToReturn
        }
        catch (error)
        {
           console.log(error)
          throw new Error(error)
        }

      }
      else{
        console.log(doc[0])
        let ndata = {
          lastEmailSentTo:email,
          timesSended:doc[0].timesSended+1}
        try{

        await this.updatePartialDocument({
          dataEntity: 'DR',
          fields:ndata,
          id:doc[0].id 
          
        })
        return doc
      }
      catch (error)
      {
        console.log(error)
        throw new Error(error)
      }

        

      }

     


     
      

   
     


     
     

      
      
     
    }


    public async viewMDReport(id:string)
    {

     

      let fields=[
      
        "reportFile"
      ]
      const data =  await this.getDocument({
        dataEntity: 'DR',
        id:id,
        fields: fields,
      });

    

      return data


    }

}