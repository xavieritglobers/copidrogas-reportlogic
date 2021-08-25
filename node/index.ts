import {
  ParamsContext,
  RecorderState,
  Service,
  ServiceContext,
  method
} from '@vtex/api'

import { Clients } from './clients'
//import { createReport } from "./resolvers/createReport";
import { devoluciones } from './resolvers/devolucion'
import { createCSVReport } from './middlewares/reports'
import { viewCVSReport } from './middlewares/reports'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Query: {
        devoluciones
      
       
      },
     /* Mutation: {
       // createReport,
      }*/
      
    },
  },
  routes:{
    status: method({
      POST: [createCSVReport],
    
    }),
    viewReport: method({
      GET: [viewCVSReport],
    
    }),
  }
})
