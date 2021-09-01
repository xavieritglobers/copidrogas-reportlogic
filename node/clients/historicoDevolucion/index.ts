import { InstanceOptions, IOContext, MasterData } from "@vtex/api";


export class HistoricoDevolucionClient extends MasterData {
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

     
  
 private getInfoFromMD = async (id:string ) =>
    {

        try{


          

      
        
      let fields=[
      
        "date",
        "Commets",
        "attachements",
        "state"]

    const conditions = `devolucionid=${id}`

        const d =  await this.searchDocuments({
            dataEntity: 'HD',
            fields: fields,
            where: conditions, 
            sort: 'date ASC',
            pagination:{page:1, pageSize:100}
         
          
        });
        
       
        
    

        return d
    }
    catch (error) {

        console.log(error)
        throw new Error(error)
  
        };
}
    

  public historicoDevoluciones = async (id:string) => {

    
    try {

       

    const d = await this.getInfoFromMD(id)
    
    const data:any = d

    
    const historicos = []
    for(var i =0;i<data.length;i++)
    {
        
        const historico = {



            date:data[i].date,
            comments:data[i].Commets,
            attachements:data[i].attachements,
            state:data[i].state


        }
       
        historicos.push(historico)
    }

    const retorno = {
        historicos:historicos
    }



    return retorno

     } catch (error) {

      console.log(error)
      throw new Error(error)

      };
    }
  }


