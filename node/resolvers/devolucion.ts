export const devoluciones = async (

  

  _: unknown,
  { initialDate, finalDate, cc, orderformid, status, sellerId, page, offset }: 
  { initialDate:Date, finalDate:Date, cc:string, orderformid:string,status:string, sellerId:string, page:number, offset:number },
  { clients: { devoluciones: devolucionClient } }: Context
) => devolucionClient.devoluciones(initialDate, finalDate, cc, orderformid, status, sellerId, page, offset)


