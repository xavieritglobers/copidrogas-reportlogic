import { MasterData, InstanceOptions, IOContext } from "@vtex/api";




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

    public  async createMDReport(hash:string, email:string, formData:any)
    {
          
      

      let data = {
          lastEmailSentTo:email,
          hashname:hash, 
          reportFile:formData
      }

      const docCreated =  await this.createDocument({
        dataEntity: 'DR',
        fields: data,
      });


     
      return docCreated
     
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