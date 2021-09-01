import { json } from 'co-body'
var crypto = require('crypto');
const { Parser } = require('json2csv');


export async function createCSVReport(ctx: Context, next: () => Promise<any>) {
 
  const {
  
    clients: { mdHanlder: mdHandler },
  } = ctx


    const body = await json(ctx.req)

  
    const {items, reportFilter, paginacion} = body

 

    let inidate = reportFilter.initialDate.split("T")[0]
    inidate = inidate.split("-")

    const iDate = `${inidate[1]}/${inidate[2]}/${inidate[0]}`


    let finidate = reportFilter.finalDate.split("T")[0]
    finidate = finidate.split("-")

    const fDate = `${finidate[1]}/${finidate[2]}/${finidate[0]}`
    
    const sellerEmail = ctx.request.header['x-vtex-caller']
    const sellerId = reportFilter.sellerId

    const orderformid = reportFilter.orderformid
    const cc = reportFilter.cc 
    const estado = reportFilter.status
    const cadforname = `${sellerId}${iDate}${fDate}${orderformid}${cc}${estado}`

    /*
    GENERAMOS UN HASH CON EL FILTRO, 
      PARA GUARDAR EL ARCHIVO Y VALIDAR SI YA EXISTE*/ 
    const hash = crypto.createHash('md5').update(cadforname).digest('hex');
    
    
    
     /*Si recibo items vacío, genero el reporte completo de la info de DB
    Si recibo items con data, uso esa data, para crear el CSV. 
    En caso de que el reporte ya exista en el MD, no se genera de nuevo, solo se enviará el email*/ 
    if(items.length>0)
    {
      
            const docStatus = await mdHandler.createMDReport(reportFilter, hash, sellerEmail, items, paginacion)
          
          
            if(docStatus.Id || docStatus.length!==0)
            {
    
              ctx.status = 200
              ctx.body = ""
              ctx.set('Cache-Control', 'private')
    
            }
           
            
  
 }
 

  
    await next()
  }


 export  async function viewCVSReport(ctx: Context, next: () => Promise<any>)
 {
      const hash = ctx.originalUrl.split("/")[2]
      const {
  
        clients: { mdHanlder: mdHandler },
      } = ctx

      
      const data:any = await mdHandler.viewMDReport(hash.substr(3))
    
      try {
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(data?.reportFile);
        
        ctx.status = 200
        ctx.set('Content-disposition', `attachment; filename=${hash}.csv`);
        ctx.set('Content-Type', 'text/csv')
        ctx.set('Cache-Control', 'private')
        ctx.body=csv
      } catch (err) {
        console.error(err);
      }
     

       
       await next()

 }