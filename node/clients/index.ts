/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { IOClients } from '@vtex/api'

import { DevolucionClient } from './devolucion'
import { MdHandler } from './report'


export class Clients extends IOClients {

  public get devoluciones()
  {
    return this.getOrSet('devoluciones', DevolucionClient )
  }

  public get mdHanlder()
  {
    return this.getOrSet('mdHanlder', MdHandler )
  }


}
