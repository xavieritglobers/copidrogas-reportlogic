export const historicoDevoluciones = async (

  

    _: unknown,
    { id }: 
    { id:string },
    { clients: { historicoDevoluciones: historicoDevolucionClient } }: Context
  ) => historicoDevolucionClient.historicoDevoluciones(id)
  
  
  