export const devoluciones = async (

  _: unknown,
  { initialDate, finalDate, cc, orderformid,status, page, offset }: 
  { initialDate:Date, finalDate:Date, cc:string, orderformid:string,status:string, page:number, offset:number },
  { clients: { devoluciones: devolucionClient } }: Context
) => devolucionClient.devoluciones(initialDate, finalDate, cc, orderformid,status, page, offset)
