import { JanusClient, InstanceOptions, IOContext } from "@vtex/api";



const data = [
  {
      "idhistorico": 1,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-13T13:47:26.886Z",
          "valorTotal": 201261
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-22T19:48:43.714Z"
  },
  {
      "idhistorico": 2,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-05T13:35:32.249Z",
          "valorTotal": 214211
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-16T13:06:09.068Z"
  },
  {
      "idhistorico": 3,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-07T12:45:28.685Z",
          "valorTotal": 38582
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-23T03:47:32.840Z"
  },
  {
      "idhistorico": 4,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-24T09:27:11.640Z",
          "valorTotal": 28414
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-15T07:42:42.696Z"
  },
  {
      "idhistorico": 5,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-27T16:28:45.960Z",
          "valorTotal": 181964
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-13T01:45:19.324Z"
  },
  {
      "idhistorico": 6,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-21T16:23:25.510Z",
          "valorTotal": 113349
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-12T22:44:12.032Z"
  },
  {
      "idhistorico": 7,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-17T18:52:13.470Z",
          "valorTotal": 228348
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-25T06:46:05.736Z"
  },
  {
      "idhistorico": 8,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-06T06:23:03.079Z",
          "valorTotal": 211346
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-25T13:41:28.675Z"
  },
  {
      "idhistorico": 9,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-21T09:06:16.277Z",
          "valorTotal": 237716
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-21T12:11:40.465Z"
  },
  {
      "idhistorico": 10,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-01T06:03:04.867Z",
          "valorTotal": 30008
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-07T12:10:40.996Z"
  },
  {
      "idhistorico": 11,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-25T09:23:47.397Z",
          "valorTotal": 98345
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-09T19:20:46.212Z"
  },
  {
      "idhistorico": 12,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-29T18:13:34.452Z",
          "valorTotal": 40461
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-18T05:01:36.021Z"
  },
  {
      "idhistorico": 13,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-20T20:08:04.889Z",
          "valorTotal": 215394
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-04T03:28:54.350Z"
  },
  {
      "idhistorico": 14,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-11T12:34:53.430Z",
          "valorTotal": 30967
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T16:00:07.102Z"
  },
  {
      "idhistorico": 15,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-08T14:46:26.643Z",
          "valorTotal": 49436
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-02T11:29:47.299Z"
  },
  {
      "idhistorico": 16,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-28T15:28:41.493Z",
          "valorTotal": 68035
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T14:47:59.343Z"
  },
  {
      "idhistorico": 17,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-14T04:07:51.391Z",
          "valorTotal": 240040
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-03T00:11:29.105Z"
  },
  {
      "idhistorico": 18,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-24T23:01:02.885Z",
          "valorTotal": 229100
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T12:06:16.374Z"
  },
  {
      "idhistorico": 19,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-01T05:41:15.191Z",
          "valorTotal": 125378
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-09T07:32:17.416Z"
  },
  {
      "idhistorico": 20,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-07T22:56:46.764Z",
          "valorTotal": 148808
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T18:49:14.838Z"
  },
  {
      "idhistorico": 21,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-02T14:22:27.746Z",
          "valorTotal": 83515
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-28T14:12:07.176Z"
  },
  {
      "idhistorico": 22,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-19T21:45:41.881Z",
          "valorTotal": 218189
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-18T04:25:11.361Z"
  },
  {
      "idhistorico": 23,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-06T23:42:26.278Z",
          "valorTotal": 100000
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-27T19:30:12.896Z"
  },
  {
      "idhistorico": 24,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-29T12:30:51.014Z",
          "valorTotal": 195183
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-04T16:02:59.596Z"
  },
  {
      "idhistorico": 25,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-27T22:07:38.059Z",
          "valorTotal": 189220
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-29T17:00:58.068Z"
  },
  {
      "idhistorico": 26,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-22T00:29:27.873Z",
          "valorTotal": 240975
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-16T16:01:22.251Z"
  },
  {
      "idhistorico": 27,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-26T17:30:18.038Z",
          "valorTotal": 158541
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-24T16:12:58.379Z"
  },
  {
      "idhistorico": 28,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-05T10:55:48.580Z",
          "valorTotal": 117634
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-02T06:54:00.301Z"
  },
  {
      "idhistorico": 29,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-23T10:12:32.760Z",
          "valorTotal": 71693
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T09:16:16.119Z"
  },
  {
      "idhistorico": 30,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-16T21:18:05.940Z",
          "valorTotal": 76066
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-09T08:05:12.102Z"
  },
  {
      "idhistorico": 31,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-17T00:05:08.522Z",
          "valorTotal": 240469
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-07T06:25:11.558Z"
  },
  {
      "idhistorico": 32,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-26T15:33:30.421Z",
          "valorTotal": 249309
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-06T21:50:46.079Z"
  },
  {
      "idhistorico": 33,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-16T12:40:06.956Z",
          "valorTotal": 236342
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-23T04:13:22.041Z"
  },
  {
      "idhistorico": 34,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-15T10:38:27.948Z",
          "valorTotal": 199654
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-09T07:58:34.811Z"
  },
  {
      "idhistorico": 35,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-05T09:04:53.591Z",
          "valorTotal": 186811
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-05T19:05:23.150Z"
  },
  {
      "idhistorico": 36,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-21T15:38:53.820Z",
          "valorTotal": 149033
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-26T06:53:59.228Z"
  },
  {
      "idhistorico": 37,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-05T15:59:11.097Z",
          "valorTotal": 131409
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-21T04:32:25.003Z"
  },
  {
      "idhistorico": 38,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-10T10:33:40.534Z",
          "valorTotal": 204257
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-26T23:43:12.382Z"
  },
  {
      "idhistorico": 39,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-24T03:55:21.863Z",
          "valorTotal": 223977
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-12T01:22:02.684Z"
  },
  {
      "idhistorico": 40,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-30T16:37:52.452Z",
          "valorTotal": 167398
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-01T09:04:54.406Z"
  },
  {
      "idhistorico": 41,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-16T22:43:45.628Z",
          "valorTotal": 248257
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-02T06:05:56.346Z"
  },
  {
      "idhistorico": 42,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-11T11:21:43.595Z",
          "valorTotal": 104098
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-31T02:57:40.799Z"
  },
  {
      "idhistorico": 43,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-24T20:23:08.039Z",
          "valorTotal": 87690
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-30T01:15:01.369Z"
  },
  {
      "idhistorico": 44,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-11T19:32:17.779Z",
          "valorTotal": 56391
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-23T21:29:08.630Z"
  },
  {
      "idhistorico": 45,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-16T13:37:07.261Z",
          "valorTotal": 60763
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-05T11:26:25.645Z"
  },
  {
      "idhistorico": 46,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-13T09:11:35.953Z",
          "valorTotal": 116340
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-28T20:40:40.840Z"
  },
  {
      "idhistorico": 47,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-19T22:12:27.197Z",
          "valorTotal": 134929
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-17T21:34:39.533Z"
  },
  {
      "idhistorico": 48,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-19T04:14:11.251Z",
          "valorTotal": 175535
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T00:52:50.846Z"
  },
  {
      "idhistorico": 49,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-01T09:19:09.754Z",
          "valorTotal": 241143
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-11T02:51:16.537Z"
  },
  {
      "idhistorico": 50,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-10T20:51:50.350Z",
          "valorTotal": 33474
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-09T16:56:16.668Z"
  },
  {
      "idhistorico": 51,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-21T01:35:56.492Z",
          "valorTotal": 231162
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T06:30:51.634Z"
  },
  {
      "idhistorico": 52,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-10T14:21:57.904Z",
          "valorTotal": 240726
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-18T01:51:51.772Z"
  },
  {
      "idhistorico": 53,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-29T11:51:36.597Z",
          "valorTotal": 243239
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-23T10:30:49.775Z"
  },
  {
      "idhistorico": 54,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-19T23:52:53.441Z",
          "valorTotal": 77447
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-28T10:40:39.467Z"
  },
  {
      "idhistorico": 55,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-14T06:51:30.708Z",
          "valorTotal": 192562
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-09T05:03:22.087Z"
  },
  {
      "idhistorico": 56,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-07T02:47:17.839Z",
          "valorTotal": 129016
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-03T17:30:01.569Z"
  },
  {
      "idhistorico": 57,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-15T12:12:28.222Z",
          "valorTotal": 214996
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-31T09:34:00.521Z"
  },
  {
      "idhistorico": 58,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-02T02:45:21.141Z",
          "valorTotal": 141893
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-03T19:23:51.415Z"
  },
  {
      "idhistorico": 59,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-19T00:15:05.558Z",
          "valorTotal": 218329
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-24T22:51:05.104Z"
  },
  {
      "idhistorico": 60,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-01T22:10:24.221Z",
          "valorTotal": 139666
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-26T12:25:33.393Z"
  },
  {
      "idhistorico": 61,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-08T02:36:46.964Z",
          "valorTotal": 127409
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T14:14:20.321Z"
  },
  {
      "idhistorico": 62,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-01T05:07:14.539Z",
          "valorTotal": 243789
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-29T10:21:57.110Z"
  },
  {
      "idhistorico": 63,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-27T09:29:52.590Z",
          "valorTotal": 32692
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-02T20:58:57.814Z"
  },
  {
      "idhistorico": 64,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-24T06:52:13.633Z",
          "valorTotal": 133985
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-21T17:52:01.868Z"
  },
  {
      "idhistorico": 65,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-26T05:57:02.254Z",
          "valorTotal": 96651
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-08T20:37:21.616Z"
  },
  {
      "idhistorico": 66,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-21T04:45:17.238Z",
          "valorTotal": 38129
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-26T22:33:01.256Z"
  },
  {
      "idhistorico": 67,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-02T18:06:38.106Z",
          "valorTotal": 62987
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-02T20:36:48.775Z"
  },
  {
      "idhistorico": 68,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-21T20:58:39.921Z",
          "valorTotal": 100228
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-16T07:10:46.476Z"
  },
  {
      "idhistorico": 69,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-08-16T15:12:08.162Z",
          "valorTotal": 216956
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T22:03:03.468Z"
  },
  {
      "idhistorico": 70,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-30T09:43:18.345Z",
          "valorTotal": 144070
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-05T00:01:32.362Z"
  },
  {
      "idhistorico": 71,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-16T08:03:28.799Z",
          "valorTotal": 242469
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-26T15:54:13.938Z"
  },
  {
      "idhistorico": 72,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-20T03:15:20.584Z",
          "valorTotal": 101670
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-11T17:22:12.655Z"
  },
  {
      "idhistorico": 73,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-03T21:49:57.755Z",
          "valorTotal": 65637
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T08:31:41.619Z"
  },
  {
      "idhistorico": 74,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-25T11:04:47.309Z",
          "valorTotal": 115436
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-01T05:19:32.497Z"
  },
  {
      "idhistorico": 75,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-18T01:18:40.767Z",
          "valorTotal": 190739
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-20T14:01:04.401Z"
  },
  {
      "idhistorico": 76,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-30T13:25:58.851Z",
          "valorTotal": 76545
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-24T20:58:39.411Z"
  },
  {
      "idhistorico": 77,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-26T16:51:48.324Z",
          "valorTotal": 57885
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T02:57:59.317Z"
  },
  {
      "idhistorico": 78,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-01T15:24:24.751Z",
          "valorTotal": 227771
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-16T01:09:55.195Z"
  },
  {
      "idhistorico": 79,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-25T00:32:39.424Z",
          "valorTotal": 20853
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-17T19:15:22.149Z"
  },
  {
      "idhistorico": 80,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-09T04:50:39.127Z",
          "valorTotal": 144047
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-31T10:16:07.394Z"
  },
  {
      "idhistorico": 81,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-16T22:08:09.686Z",
          "valorTotal": 94748
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-13T13:25:17.155Z"
  },
  {
      "idhistorico": 82,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-11T00:45:49.460Z",
          "valorTotal": 245285
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-23T17:21:36.324Z"
  },
  {
      "idhistorico": 83,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-04T21:10:55.588Z",
          "valorTotal": 57908
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T04:04:07.982Z"
  },
  {
      "idhistorico": 84,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-10T01:31:54.077Z",
          "valorTotal": 207576
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-09T23:19:31.055Z"
  },
  {
      "idhistorico": 85,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-04T20:52:28.326Z",
          "valorTotal": 212215
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T02:23:43.704Z"
  },
  {
      "idhistorico": 86,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-09T20:56:28.498Z",
          "valorTotal": 148634
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-24T07:04:36.331Z"
  },
  {
      "idhistorico": 87,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-03T07:03:14.242Z",
          "valorTotal": 240463
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-29T00:27:30.583Z"
  },
  {
      "idhistorico": 88,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-24T07:47:20.760Z",
          "valorTotal": 72255
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-03T09:19:05.593Z"
  },
  {
      "idhistorico": 89,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-11T16:40:16.391Z",
          "valorTotal": 167007
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-19T06:30:00.129Z"
  },
  {
      "idhistorico": 90,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-11T00:05:09.136Z",
          "valorTotal": 173697
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-18T12:47:50.430Z"
  },
  {
      "idhistorico": 91,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-25T23:31:09.897Z",
          "valorTotal": 192364
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-24T00:31:34.254Z"
  },
  {
      "idhistorico": 92,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-29T23:16:48.205Z",
          "valorTotal": 171503
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-05T18:12:33.630Z"
  },
  {
      "idhistorico": 93,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-21T17:57:05.882Z",
          "valorTotal": 147019
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-06T20:42:13.521Z"
  },
  {
      "idhistorico": 94,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-12T08:14:09.531Z",
          "valorTotal": 170801
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-15T03:41:39.349Z"
  },
  {
      "idhistorico": 95,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-24T06:08:20.071Z",
          "valorTotal": 221615
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-10T05:17:22.955Z"
  },
  {
      "idhistorico": 96,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-17T15:34:05.897Z",
          "valorTotal": 182968
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-23T01:12:26.132Z"
  },
  {
      "idhistorico": 97,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-03T03:17:41.646Z",
          "valorTotal": 224371
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-26T07:48:17.289Z"
  },
  {
      "idhistorico": 98,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-18T07:24:24.566Z",
          "valorTotal": 49902
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-16T02:53:43.974Z"
  },
  {
      "idhistorico": 99,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-18T04:01:38.456Z",
          "valorTotal": 132863
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T11:34:39.437Z"
  },
  {
      "idhistorico": 100,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-16T19:13:39.917Z",
          "valorTotal": 125839
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-29T23:12:45.253Z"
  },
  {
      "idhistorico": 101,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-31T00:40:54.401Z",
          "valorTotal": 125840
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-04T23:59:16.365Z"
  },
  {
      "idhistorico": 102,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-10T01:41:12.273Z",
          "valorTotal": 222496
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-13T07:08:05.476Z"
  },
  {
      "idhistorico": 103,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-15T15:22:22.327Z",
          "valorTotal": 204926
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-27T11:05:02.191Z"
  },
  {
      "idhistorico": 104,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-31T13:57:50.151Z",
          "valorTotal": 110192
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-15T08:12:16.810Z"
  },
  {
      "idhistorico": 105,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-06T17:37:30.061Z",
          "valorTotal": 232811
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T10:50:33.909Z"
  },
  {
      "idhistorico": 106,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-14T08:24:46.917Z",
          "valorTotal": 64268
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-19T22:42:44.504Z"
  },
  {
      "idhistorico": 107,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-17T07:30:04.312Z",
          "valorTotal": 110289
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-17T17:51:23.382Z"
  },
  {
      "idhistorico": 108,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-23T18:01:49.964Z",
          "valorTotal": 177103
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-01T07:41:26.450Z"
  },
  {
      "idhistorico": 109,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-19T08:02:26.608Z",
          "valorTotal": 193248
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-26T06:44:39.606Z"
  },
  {
      "idhistorico": 110,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-17T02:30:39.084Z",
          "valorTotal": 29128
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-26T12:02:58.837Z"
  },
  {
      "idhistorico": 111,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-02T18:34:23.522Z",
          "valorTotal": 52793
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-30T01:41:52.267Z"
  },
  {
      "idhistorico": 112,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-23T02:22:24.341Z",
          "valorTotal": 215670
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-08T20:40:52.472Z"
  },
  {
      "idhistorico": 113,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-08T12:58:47.550Z",
          "valorTotal": 224726
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T15:14:01.285Z"
  },
  {
      "idhistorico": 114,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-21T19:12:58.960Z",
          "valorTotal": 79496
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-25T02:46:50.083Z"
  },
  {
      "idhistorico": 115,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-08T08:07:37.971Z",
          "valorTotal": 243664
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-02T11:14:04.436Z"
  },
  {
      "idhistorico": 116,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-08T06:55:58.520Z",
          "valorTotal": 230537
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-26T22:25:15.348Z"
  },
  {
      "idhistorico": 117,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-09T11:03:50.021Z",
          "valorTotal": 159188
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-08T22:40:25.457Z"
  },
  {
      "idhistorico": 118,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-26T13:50:38.500Z",
          "valorTotal": 157839
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-17T02:52:46.912Z"
  },
  {
      "idhistorico": 119,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-26T03:16:11.908Z",
          "valorTotal": 207960
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-22T20:52:36.549Z"
  },
  {
      "idhistorico": 120,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-21T13:02:33.920Z",
          "valorTotal": 174928
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-19T10:58:02.081Z"
  },
  {
      "idhistorico": 121,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-05T11:10:50.836Z",
          "valorTotal": 198941
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-04T12:43:09.811Z"
  },
  {
      "idhistorico": 122,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-18T14:27:36.788Z",
          "valorTotal": 25122
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-11T15:38:07.068Z"
  },
  {
      "idhistorico": 123,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-01T15:31:18.528Z",
          "valorTotal": 190697
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-28T00:54:37.960Z"
  },
  {
      "idhistorico": 124,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-23T02:59:07.837Z",
          "valorTotal": 77907
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-16T07:50:36.589Z"
  },
  {
      "idhistorico": 125,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-12T12:36:42.381Z",
          "valorTotal": 158679
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-12T11:22:18.033Z"
  },
  {
      "idhistorico": 126,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-01T18:35:59.295Z",
          "valorTotal": 69325
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-05T11:41:33.463Z"
  },
  {
      "idhistorico": 127,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-01T01:49:40.947Z",
          "valorTotal": 237227
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-23T12:57:58.897Z"
  },
  {
      "idhistorico": 128,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-04T22:44:07.422Z",
          "valorTotal": 123097
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-29T01:32:29.283Z"
  },
  {
      "idhistorico": 129,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-23T18:45:49.907Z",
          "valorTotal": 172101
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-23T03:48:46.211Z"
  },
  {
      "idhistorico": 130,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-25T09:14:57.411Z",
          "valorTotal": 143682
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T18:06:23.438Z"
  },
  {
      "idhistorico": 131,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-30T02:35:18.355Z",
          "valorTotal": 117194
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-22T10:52:17.859Z"
  },
  {
      "idhistorico": 132,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-12T05:09:32.674Z",
          "valorTotal": 206296
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-10T23:43:11.222Z"
  },
  {
      "idhistorico": 133,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-28T13:27:40.827Z",
          "valorTotal": 149921
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-19T00:58:37.601Z"
  },
  {
      "idhistorico": 134,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-14T07:45:31.452Z",
          "valorTotal": 48131
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-12T23:06:21.918Z"
  },
  {
      "idhistorico": 135,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-16T19:49:40.080Z",
          "valorTotal": 39554
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-23T15:46:22.789Z"
  },
  {
      "idhistorico": 136,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-09T21:49:46.536Z",
          "valorTotal": 227779
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-29T21:23:39.590Z"
  },
  {
      "idhistorico": 137,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-11T15:36:20.675Z",
          "valorTotal": 135740
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-14T10:56:21.536Z"
  },
  {
      "idhistorico": 138,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-24T14:35:54.488Z",
          "valorTotal": 29373
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-26T01:28:46.129Z"
  },
  {
      "idhistorico": 139,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-07T01:49:05.393Z",
          "valorTotal": 246644
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-03T11:03:21.716Z"
  },
  {
      "idhistorico": 140,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-11T04:08:11.216Z",
          "valorTotal": 218338
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-29T16:43:39.921Z"
  },
  {
      "idhistorico": 141,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-07T16:26:08.600Z",
          "valorTotal": 20721
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T12:20:52.356Z"
  },
  {
      "idhistorico": 142,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-08-03T06:15:21.275Z",
          "valorTotal": 56916
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-19T00:11:28.282Z"
  },
  {
      "idhistorico": 143,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-12T13:49:18.375Z",
          "valorTotal": 170644
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-27T16:12:17.586Z"
  },
  {
      "idhistorico": 144,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-03T02:36:52.756Z",
          "valorTotal": 98809
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-21T08:38:04.088Z"
  },
  {
      "idhistorico": 145,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-05T00:23:09.128Z",
          "valorTotal": 153928
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-23T11:52:26.165Z"
  },
  {
      "idhistorico": 146,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-16T21:40:49.647Z",
          "valorTotal": 29835
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-02T19:29:44.551Z"
  },
  {
      "idhistorico": 147,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-27T13:14:29.969Z",
          "valorTotal": 214539
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-08T17:24:47.417Z"
  },
  {
      "idhistorico": 148,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-21T05:20:56.323Z",
          "valorTotal": 200540
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-27T11:47:56.731Z"
  },
  {
      "idhistorico": 149,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-02T01:24:52.219Z",
          "valorTotal": 38617
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-17T07:16:23.114Z"
  },
  {
      "idhistorico": 150,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-11T20:50:06.224Z",
          "valorTotal": 236775
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-18T10:40:37.698Z"
  },
  {
      "idhistorico": 151,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-30T15:21:44.835Z",
          "valorTotal": 135288
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-24T05:23:28.190Z"
  },
  {
      "idhistorico": 152,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-23T05:22:27.416Z",
          "valorTotal": 168820
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-02T15:25:25.388Z"
  },
  {
      "idhistorico": 153,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-07T06:37:19.377Z",
          "valorTotal": 249266
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-02T14:04:48.531Z"
  },
  {
      "idhistorico": 154,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-05T23:48:23.194Z",
          "valorTotal": 237815
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-21T05:10:39.591Z"
  },
  {
      "idhistorico": 155,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-06T11:34:27.424Z",
          "valorTotal": 213206
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-23T21:34:21.122Z"
  },
  {
      "idhistorico": 156,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-02T15:51:13.235Z",
          "valorTotal": 30181
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-24T02:30:23.839Z"
  },
  {
      "idhistorico": 157,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-12T07:28:55.977Z",
          "valorTotal": 189798
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-30T21:24:06.730Z"
  },
  {
      "idhistorico": 158,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-23T04:05:30.050Z",
          "valorTotal": 197270
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-03T01:03:31.428Z"
  },
  {
      "idhistorico": 159,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-21T07:56:48.586Z",
          "valorTotal": 50018
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-30T23:23:14.723Z"
  },
  {
      "idhistorico": 160,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-11T23:50:57.117Z",
          "valorTotal": 249195
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T11:05:16.849Z"
  },
  {
      "idhistorico": 161,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-17T02:36:34.580Z",
          "valorTotal": 27179
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-07T12:22:22.029Z"
  },
  {
      "idhistorico": 162,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-24T21:33:36.208Z",
          "valorTotal": 204248
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-25T22:33:37.189Z"
  },
  {
      "idhistorico": 163,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-09T06:13:30.769Z",
          "valorTotal": 167139
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-06T12:16:31.864Z"
  },
  {
      "idhistorico": 164,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-09T23:49:52.308Z",
          "valorTotal": 109817
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-16T08:30:11.357Z"
  },
  {
      "idhistorico": 165,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-05T18:05:40.855Z",
          "valorTotal": 124392
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-08T15:41:31.296Z"
  },
  {
      "idhistorico": 166,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-04T01:40:33.889Z",
          "valorTotal": 219417
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-12T20:39:48.140Z"
  },
  {
      "idhistorico": 167,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-07T22:27:08.176Z",
          "valorTotal": 56137
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-18T18:27:28.335Z"
  },
  {
      "idhistorico": 168,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-15T01:42:36.191Z",
          "valorTotal": 200909
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-01T00:55:37.094Z"
  },
  {
      "idhistorico": 169,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-30T10:18:32.369Z",
          "valorTotal": 187242
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-27T06:34:40.699Z"
  },
  {
      "idhistorico": 170,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-25T12:32:20.633Z",
          "valorTotal": 141833
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-08T05:34:30.862Z"
  },
  {
      "idhistorico": 171,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-24T21:56:14.622Z",
          "valorTotal": 224483
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T15:16:53.740Z"
  },
  {
      "idhistorico": 172,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-18T11:03:10.673Z",
          "valorTotal": 45299
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-17T22:59:18.793Z"
  },
  {
      "idhistorico": 173,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-24T23:51:32.016Z",
          "valorTotal": 196642
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-21T17:57:44.209Z"
  },
  {
      "idhistorico": 174,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-07T10:06:28.737Z",
          "valorTotal": 234544
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-03T22:13:05.956Z"
  },
  {
      "idhistorico": 175,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-28T23:47:12.200Z",
          "valorTotal": 71858
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-18T04:28:53.682Z"
  },
  {
      "idhistorico": 176,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-14T15:02:47.934Z",
          "valorTotal": 247019
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-07T19:55:27.521Z"
  },
  {
      "idhistorico": 177,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-01T22:17:46.152Z",
          "valorTotal": 31632
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-23T00:25:09.915Z"
  },
  {
      "idhistorico": 178,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-23T22:18:54.530Z",
          "valorTotal": 100323
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-08T07:06:47.348Z"
  },
  {
      "idhistorico": 179,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-23T04:14:17.817Z",
          "valorTotal": 225898
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-31T03:06:15.978Z"
  },
  {
      "idhistorico": 180,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-12T04:39:43.740Z",
          "valorTotal": 131748
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-18T08:47:14.275Z"
  },
  {
      "idhistorico": 181,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-31T12:57:19.603Z",
          "valorTotal": 139074
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-10T23:20:33.038Z"
  },
  {
      "idhistorico": 182,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-08T18:04:03.375Z",
          "valorTotal": 195013
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-03T16:36:58.067Z"
  },
  {
      "idhistorico": 183,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-12T21:30:07.559Z",
          "valorTotal": 136207
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-24T06:46:39.707Z"
  },
  {
      "idhistorico": 184,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-01T16:09:56.190Z",
          "valorTotal": 196912
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-07T11:38:17.834Z"
  },
  {
      "idhistorico": 185,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-20T10:38:51.867Z",
          "valorTotal": 203396
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-02T14:09:02.744Z"
  },
  {
      "idhistorico": 186,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-18T03:11:15.880Z",
          "valorTotal": 103995
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-26T17:16:33.676Z"
  },
  {
      "idhistorico": 187,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-16T22:37:04.285Z",
          "valorTotal": 68490
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T02:11:52.374Z"
  },
  {
      "idhistorico": 188,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-25T15:02:09.317Z",
          "valorTotal": 212095
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-03T07:28:00.515Z"
  },
  {
      "idhistorico": 189,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-11T18:38:11.908Z",
          "valorTotal": 210062
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-18T15:34:02.891Z"
  },
  {
      "idhistorico": 190,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-24T13:42:02.985Z",
          "valorTotal": 197015
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-27T05:19:20.337Z"
  },
  {
      "idhistorico": 191,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-08-05T21:35:23.396Z",
          "valorTotal": 166377
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-28T18:34:57.771Z"
  },
  {
      "idhistorico": 192,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-12T13:09:13.671Z",
          "valorTotal": 117151
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T00:41:45.142Z"
  },
  {
      "idhistorico": 193,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-04T15:27:09.881Z",
          "valorTotal": 127916
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T17:11:46.623Z"
  },
  {
      "idhistorico": 194,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-19T05:54:52.453Z",
          "valorTotal": 154427
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-01T05:37:29.832Z"
  },
  {
      "idhistorico": 195,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-12T16:31:06.439Z",
          "valorTotal": 45704
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-24T09:08:35.434Z"
  },
  {
      "idhistorico": 196,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-10T04:43:51.380Z",
          "valorTotal": 163586
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-18T09:28:33.167Z"
  },
  {
      "idhistorico": 197,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-07T21:27:59.226Z",
          "valorTotal": 63911
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-28T17:40:03.017Z"
  },
  {
      "idhistorico": 198,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-04T03:00:45.211Z",
          "valorTotal": 191623
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-13T14:02:16.725Z"
  },
  {
      "idhistorico": 199,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-24T11:12:45.439Z",
          "valorTotal": 175242
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-12T18:00:01.219Z"
  },
  {
      "idhistorico": 200,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-28T05:27:07.626Z",
          "valorTotal": 143457
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T18:08:40.475Z"
  },
  {
      "idhistorico": 201,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-06T13:20:11.261Z",
          "valorTotal": 241791
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-06T20:06:11.844Z"
  },
  {
      "idhistorico": 202,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-05T14:00:09.162Z",
          "valorTotal": 231941
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-19T13:10:12.390Z"
  },
  {
      "idhistorico": 203,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-12T07:08:48.214Z",
          "valorTotal": 209717
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-14T08:10:08.960Z"
  },
  {
      "idhistorico": 204,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-12T17:14:14.913Z",
          "valorTotal": 130784
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-15T04:04:55.863Z"
  },
  {
      "idhistorico": 205,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-08-10T15:54:30.248Z",
          "valorTotal": 86984
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-03T10:23:34.345Z"
  },
  {
      "idhistorico": 206,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-11T18:30:39.226Z",
          "valorTotal": 167181
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-11T14:58:05.549Z"
  },
  {
      "idhistorico": 207,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-07T07:30:34.750Z",
          "valorTotal": 231778
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-11T04:53:42.781Z"
  },
  {
      "idhistorico": 208,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-08-15T01:32:13.856Z",
          "valorTotal": 124013
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-26T20:31:31.117Z"
  },
  {
      "idhistorico": 209,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-31T23:33:44.915Z",
          "valorTotal": 209642
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-25T00:54:46.457Z"
  },
  {
      "idhistorico": 210,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-07T22:32:45.476Z",
          "valorTotal": 172142
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-16T17:01:56.009Z"
  },
  {
      "idhistorico": 211,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-02T22:06:47.171Z",
          "valorTotal": 217369
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-25T06:39:32.522Z"
  },
  {
      "idhistorico": 212,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-20T23:44:38.361Z",
          "valorTotal": 188451
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-23T22:49:48.044Z"
  },
  {
      "idhistorico": 213,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-10T08:02:07.856Z",
          "valorTotal": 194899
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-08T08:20:07.115Z"
  },
  {
      "idhistorico": 214,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-04T16:21:15.680Z",
          "valorTotal": 67978
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-21T00:37:58.436Z"
  },
  {
      "idhistorico": 215,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-28T02:01:32.741Z",
          "valorTotal": 138356
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-12T08:26:30.643Z"
  },
  {
      "idhistorico": 216,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-07T16:43:24.225Z",
          "valorTotal": 73578
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-23T10:11:22.107Z"
  },
  {
      "idhistorico": 217,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-29T23:12:18.713Z",
          "valorTotal": 149605
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-06T16:40:18.664Z"
  },
  {
      "idhistorico": 218,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-07T00:01:50.431Z",
          "valorTotal": 246556
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-02T03:32:50.769Z"
  },
  {
      "idhistorico": 219,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-30T03:41:59.660Z",
          "valorTotal": 79304
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-27T16:31:25.786Z"
  },
  {
      "idhistorico": 220,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-07T06:20:45.317Z",
          "valorTotal": 111779
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T09:38:32.065Z"
  },
  {
      "idhistorico": 221,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-25T08:00:34.332Z",
          "valorTotal": 52479
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-04T03:22:04.567Z"
  },
  {
      "idhistorico": 222,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-09T12:30:56.264Z",
          "valorTotal": 165096
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-13T02:31:49.326Z"
  },
  {
      "idhistorico": 223,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-09T23:39:59.647Z",
          "valorTotal": 27620
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T09:11:33.738Z"
  },
  {
      "idhistorico": 224,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-11T10:07:48.581Z",
          "valorTotal": 172438
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-24T08:00:29.914Z"
  },
  {
      "idhistorico": 225,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-09T06:52:15.144Z",
          "valorTotal": 153550
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-24T22:46:18.899Z"
  },
  {
      "idhistorico": 226,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-04T02:24:49.845Z",
          "valorTotal": 179499
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-22T02:40:12.404Z"
  },
  {
      "idhistorico": 227,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-16T08:55:00.573Z",
          "valorTotal": 239844
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-10T17:52:40.782Z"
  },
  {
      "idhistorico": 228,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-27T05:24:35.915Z",
          "valorTotal": 106719
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-12T14:32:27.774Z"
  },
  {
      "idhistorico": 229,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-22T02:30:28.284Z",
          "valorTotal": 75987
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-17T05:14:28.234Z"
  },
  {
      "idhistorico": 230,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-14T03:27:15.328Z",
          "valorTotal": 117419
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-19T09:11:26.161Z"
  },
  {
      "idhistorico": 231,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-08-04T03:46:20.618Z",
          "valorTotal": 50197
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-16T21:47:36.519Z"
  },
  {
      "idhistorico": 232,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-08T17:09:24.524Z",
          "valorTotal": 93914
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-13T03:06:32.060Z"
  },
  {
      "idhistorico": 233,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-06T00:59:28.944Z",
          "valorTotal": 95661
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-12T18:28:55.708Z"
  },
  {
      "idhistorico": 234,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-25T03:11:12.688Z",
          "valorTotal": 26352
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T06:37:43.696Z"
  },
  {
      "idhistorico": 235,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-07T22:52:29.426Z",
          "valorTotal": 22620
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-06T04:22:44.650Z"
  },
  {
      "idhistorico": 236,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-21T23:26:34.825Z",
          "valorTotal": 56590
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-21T11:25:46.001Z"
  },
  {
      "idhistorico": 237,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-12T08:20:11.893Z",
          "valorTotal": 181569
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-21T14:42:34.635Z"
  },
  {
      "idhistorico": 238,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-23T00:24:52.578Z",
          "valorTotal": 122823
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-02T14:29:29.908Z"
  },
  {
      "idhistorico": 239,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-04T16:53:16.453Z",
          "valorTotal": 203760
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T09:09:44.941Z"
  },
  {
      "idhistorico": 240,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-01T19:05:31.930Z",
          "valorTotal": 229267
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-15T17:02:59.120Z"
  },
  {
      "idhistorico": 241,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-22T10:13:57.077Z",
          "valorTotal": 158159
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-21T07:34:19.314Z"
  },
  {
      "idhistorico": 242,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-30T07:56:27.429Z",
          "valorTotal": 129835
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-17T11:52:49.233Z"
  },
  {
      "idhistorico": 243,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-30T04:37:39.230Z",
          "valorTotal": 43929
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-02T19:59:17.748Z"
  },
  {
      "idhistorico": 244,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-03T07:53:10.435Z",
          "valorTotal": 108158
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-23T22:43:04.819Z"
  },
  {
      "idhistorico": 245,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-03T07:44:23.620Z",
          "valorTotal": 52115
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-08T11:30:42.730Z"
  },
  {
      "idhistorico": 246,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-06T07:10:04.920Z",
          "valorTotal": 231647
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-07T08:00:04.162Z"
  },
  {
      "idhistorico": 247,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-24T11:44:58.809Z",
          "valorTotal": 223157
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-28T11:46:46.340Z"
  },
  {
      "idhistorico": 248,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-05T23:35:51.657Z",
          "valorTotal": 197713
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-22T13:44:35.470Z"
  },
  {
      "idhistorico": 249,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-08T13:44:36.369Z",
          "valorTotal": 62491
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-14T03:31:30.821Z"
  },
  {
      "idhistorico": 250,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-15T15:37:38.832Z",
          "valorTotal": 93002
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-24T11:54:07.746Z"
  },
  {
      "idhistorico": 251,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-11T02:48:22.267Z",
          "valorTotal": 150523
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-30T18:03:14.613Z"
  },
  {
      "idhistorico": 252,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-21T21:31:48.379Z",
          "valorTotal": 237822
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-20T02:17:47.138Z"
  },
  {
      "idhistorico": 253,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-10T22:46:23.312Z",
          "valorTotal": 38234
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-30T19:24:02.316Z"
  },
  {
      "idhistorico": 254,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-16T14:33:03.155Z",
          "valorTotal": 27978
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-09T17:19:41.297Z"
  },
  {
      "idhistorico": 255,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-11T09:46:38.947Z",
          "valorTotal": 22562
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-22T20:38:52.113Z"
  },
  {
      "idhistorico": 256,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-02T03:09:19.493Z",
          "valorTotal": 121095
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-03T07:11:05.547Z"
  },
  {
      "idhistorico": 257,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-27T08:38:36.551Z",
          "valorTotal": 236910
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-29T20:38:26.293Z"
  },
  {
      "idhistorico": 258,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-05T14:36:47.634Z",
          "valorTotal": 121581
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-08T08:58:16.587Z"
  },
  {
      "idhistorico": 259,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-17T00:01:56.988Z",
          "valorTotal": 38196
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T13:11:06.671Z"
  },
  {
      "idhistorico": 260,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-12T08:55:27.780Z",
          "valorTotal": 223690
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-22T05:21:10.926Z"
  },
  {
      "idhistorico": 261,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-17T22:52:30.571Z",
          "valorTotal": 58647
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-12T17:48:45.684Z"
  },
  {
      "idhistorico": 262,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-25T13:23:41.857Z",
          "valorTotal": 156762
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-27T23:55:21.352Z"
  },
  {
      "idhistorico": 263,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-14T16:03:44.964Z",
          "valorTotal": 195584
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-30T06:53:07.347Z"
  },
  {
      "idhistorico": 264,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-17T14:08:00.704Z",
          "valorTotal": 66623
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-15T22:35:50.247Z"
  },
  {
      "idhistorico": 265,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-26T21:57:01.931Z",
          "valorTotal": 154994
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-15T13:10:58.956Z"
  },
  {
      "idhistorico": 266,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-20T15:53:07.656Z",
          "valorTotal": 149691
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T02:57:11.641Z"
  },
  {
      "idhistorico": 267,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-08-18T03:30:51.098Z",
          "valorTotal": 208400
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-19T09:56:29.386Z"
  },
  {
      "idhistorico": 268,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-15T13:57:08.866Z",
          "valorTotal": 243162
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-14T18:11:54.790Z"
  },
  {
      "idhistorico": 269,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-17T00:25:19.928Z",
          "valorTotal": 73912
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-22T20:24:49.589Z"
  },
  {
      "idhistorico": 270,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-10T23:19:22.426Z",
          "valorTotal": 116190
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-22T20:23:38.639Z"
  },
  {
      "idhistorico": 271,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-12T06:06:21.867Z",
          "valorTotal": 149764
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-05T23:32:35.556Z"
  },
  {
      "idhistorico": 272,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-18T17:12:52.643Z",
          "valorTotal": 149049
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-15T08:15:50.422Z"
  },
  {
      "idhistorico": 273,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-31T10:23:57.969Z",
          "valorTotal": 35523
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-21T06:14:12.009Z"
  },
  {
      "idhistorico": 274,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-07T17:07:50.164Z",
          "valorTotal": 191645
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-28T20:05:46.283Z"
  },
  {
      "idhistorico": 275,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-31T09:52:49.478Z",
          "valorTotal": 227880
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T21:49:58.842Z"
  },
  {
      "idhistorico": 276,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-14T23:41:18.275Z",
          "valorTotal": 151388
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-26T11:31:34.527Z"
  },
  {
      "idhistorico": 277,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-05T20:59:56.070Z",
          "valorTotal": 71330
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-18T17:51:19.577Z"
  },
  {
      "idhistorico": 278,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-17T06:32:23.026Z",
          "valorTotal": 20100
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-28T11:43:18.277Z"
  },
  {
      "idhistorico": 279,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-17T19:13:58.004Z",
          "valorTotal": 238061
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-14T06:23:59.418Z"
  },
  {
      "idhistorico": 280,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-28T10:51:05.206Z",
          "valorTotal": 25553
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-18T12:02:47.719Z"
  },
  {
      "idhistorico": 281,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-23T15:35:23.067Z",
          "valorTotal": 196894
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-19T14:46:15.777Z"
  },
  {
      "idhistorico": 282,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-06T23:12:37.558Z",
          "valorTotal": 243175
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-06T21:27:08.467Z"
  },
  {
      "idhistorico": 283,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-10T00:10:15.797Z",
          "valorTotal": 240440
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-09T23:36:05.018Z"
  },
  {
      "idhistorico": 284,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-28T08:48:03.003Z",
          "valorTotal": 84613
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-20T13:36:46.529Z"
  },
  {
      "idhistorico": 285,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-17T17:57:14.371Z",
          "valorTotal": 90917
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-17T04:50:47.907Z"
  },
  {
      "idhistorico": 286,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-30T12:34:11.400Z",
          "valorTotal": 190454
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-14T14:56:27.735Z"
  },
  {
      "idhistorico": 287,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-22T02:25:08.775Z",
          "valorTotal": 233245
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-06T13:43:25.154Z"
  },
  {
      "idhistorico": 288,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-16T23:04:56.042Z",
          "valorTotal": 149474
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-18T22:57:10.225Z"
  },
  {
      "idhistorico": 289,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-26T21:35:19.345Z",
          "valorTotal": 153419
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-19T02:57:54.085Z"
  },
  {
      "idhistorico": 290,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-13T00:59:03.495Z",
          "valorTotal": 56392
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-17T23:54:48.242Z"
  },
  {
      "idhistorico": 291,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-22T07:06:29.848Z",
          "valorTotal": 133547
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-04T21:38:52.970Z"
  },
  {
      "idhistorico": 292,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-11T22:21:44.268Z",
          "valorTotal": 60484
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-20T22:52:39.476Z"
  },
  {
      "idhistorico": 293,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-16T06:38:37.918Z",
          "valorTotal": 114873
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-13T16:50:37.243Z"
  },
  {
      "idhistorico": 294,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-25T00:45:28.527Z",
          "valorTotal": 113643
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-14T09:25:58.896Z"
  },
  {
      "idhistorico": 295,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-29T13:44:54.232Z",
          "valorTotal": 132075
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-29T09:37:14.705Z"
  },
  {
      "idhistorico": 296,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-03T23:36:36.109Z",
          "valorTotal": 176040
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-23T10:00:22.234Z"
  },
  {
      "idhistorico": 297,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-14T06:46:15.299Z",
          "valorTotal": 148508
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-12T22:40:05.579Z"
  },
  {
      "idhistorico": 298,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-18T00:41:33.710Z",
          "valorTotal": 82932
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-31T20:28:49.769Z"
  },
  {
      "idhistorico": 299,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-17T12:19:33.256Z",
          "valorTotal": 127634
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-29T11:35:11.346Z"
  },
  {
      "idhistorico": 300,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-03T04:28:45.123Z",
          "valorTotal": 240562
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-28T11:15:27.989Z"
  },
  {
      "idhistorico": 301,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-30T21:58:08.315Z",
          "valorTotal": 120468
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-09T09:30:51.759Z"
  },
  {
      "idhistorico": 302,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-16T05:29:06.993Z",
          "valorTotal": 65642
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-30T02:36:41.613Z"
  },
  {
      "idhistorico": 303,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-07T19:54:57.040Z",
          "valorTotal": 109755
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-08T17:23:28.150Z"
  },
  {
      "idhistorico": 304,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-06T23:02:17.642Z",
          "valorTotal": 71550
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-02T04:05:50.521Z"
  },
  {
      "idhistorico": 305,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T02:07:12.158Z",
          "valorTotal": 141276
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-29T19:57:36.706Z"
  },
  {
      "idhistorico": 306,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-04T00:23:09.213Z",
          "valorTotal": 205159
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-01T13:36:55.525Z"
  },
  {
      "idhistorico": 307,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-25T21:40:18.369Z",
          "valorTotal": 119862
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T05:05:26.312Z"
  },
  {
      "idhistorico": 308,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-22T19:59:25.228Z",
          "valorTotal": 154992
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T08:04:16.925Z"
  },
  {
      "idhistorico": 309,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-29T07:59:08.554Z",
          "valorTotal": 185297
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-12T07:25:49.194Z"
  },
  {
      "idhistorico": 310,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-29T15:54:53.800Z",
          "valorTotal": 181373
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-27T03:33:46.907Z"
  },
  {
      "idhistorico": 311,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-14T02:57:03.075Z",
          "valorTotal": 113692
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-12T11:09:40.577Z"
  },
  {
      "idhistorico": 312,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-10T21:06:55.350Z",
          "valorTotal": 27575
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-19T01:19:37.845Z"
  },
  {
      "idhistorico": 313,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-14T04:42:02.493Z",
          "valorTotal": 162117
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-10T11:33:12.421Z"
  },
  {
      "idhistorico": 314,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-09T22:20:18.562Z",
          "valorTotal": 53902
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-16T14:08:49.449Z"
  },
  {
      "idhistorico": 315,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-22T11:55:17.839Z",
          "valorTotal": 127451
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-20T09:57:56.663Z"
  },
  {
      "idhistorico": 316,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-19T22:38:37.736Z",
          "valorTotal": 169985
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-26T05:13:58.413Z"
  },
  {
      "idhistorico": 317,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-08T08:21:10.332Z",
          "valorTotal": 21829
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-20T18:36:24.429Z"
  },
  {
      "idhistorico": 318,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-30T13:29:32.559Z",
          "valorTotal": 25358
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-29T19:26:53.013Z"
  },
  {
      "idhistorico": 319,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-19T16:27:45.920Z",
          "valorTotal": 183583
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-14T03:06:20.239Z"
  },
  {
      "idhistorico": 320,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-28T10:43:24.027Z",
          "valorTotal": 51917
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-17T13:58:13.442Z"
  },
  {
      "idhistorico": 321,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-12T09:55:09.828Z",
          "valorTotal": 96325
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-28T14:07:47.704Z"
  },
  {
      "idhistorico": 322,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-15T03:55:06.696Z",
          "valorTotal": 112300
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-20T19:02:08.889Z"
  },
  {
      "idhistorico": 323,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-27T10:24:32.111Z",
          "valorTotal": 38542
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-04T12:56:43.749Z"
  },
  {
      "idhistorico": 324,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-07T00:49:53.593Z",
          "valorTotal": 137852
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-07T23:52:29.170Z"
  },
  {
      "idhistorico": 325,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-17T20:49:57.472Z",
          "valorTotal": 94509
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-26T01:05:58.488Z"
  },
  {
      "idhistorico": 326,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-28T03:23:53.828Z",
          "valorTotal": 225201
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-11T12:42:57.900Z"
  },
  {
      "idhistorico": 327,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-16T08:01:23.144Z",
          "valorTotal": 107587
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-28T06:08:26.979Z"
  },
  {
      "idhistorico": 328,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-13T01:52:37.158Z",
          "valorTotal": 194142
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-16T01:43:40.406Z"
  },
  {
      "idhistorico": 329,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-16T06:38:28.578Z",
          "valorTotal": 43510
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-17T21:54:54.435Z"
  },
  {
      "idhistorico": 330,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-04T05:25:19.097Z",
          "valorTotal": 246901
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-24T15:37:26.200Z"
  },
  {
      "idhistorico": 331,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-06T16:46:21.421Z",
          "valorTotal": 118466
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-14T13:38:06.571Z"
  },
  {
      "idhistorico": 332,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-23T07:49:20.398Z",
          "valorTotal": 64389
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-19T02:01:45.680Z"
  },
  {
      "idhistorico": 333,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-05T22:06:36.222Z",
          "valorTotal": 162796
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-05T07:31:35.322Z"
  },
  {
      "idhistorico": 334,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-21T15:15:52.791Z",
          "valorTotal": 203469
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T20:42:38.090Z"
  },
  {
      "idhistorico": 335,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-05T14:54:14.176Z",
          "valorTotal": 22643
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-02T08:04:04.726Z"
  },
  {
      "idhistorico": 336,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-18T18:06:47.279Z",
          "valorTotal": 123898
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-04T17:59:15.240Z"
  },
  {
      "idhistorico": 337,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-16T16:13:23.699Z",
          "valorTotal": 91267
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-28T10:52:57.441Z"
  },
  {
      "idhistorico": 338,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-12T20:14:14.665Z",
          "valorTotal": 69529
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T01:30:11.324Z"
  },
  {
      "idhistorico": 339,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-15T13:27:55.907Z",
          "valorTotal": 213335
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-11T14:56:58.730Z"
  },
  {
      "idhistorico": 340,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-01T04:55:36.221Z",
          "valorTotal": 225208
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-22T01:49:49.022Z"
  },
  {
      "idhistorico": 341,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-02T11:28:31.268Z",
          "valorTotal": 118452
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-14T21:31:38.493Z"
  },
  {
      "idhistorico": 342,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-09T06:00:06.847Z",
          "valorTotal": 24654
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-21T08:18:09.707Z"
  },
  {
      "idhistorico": 343,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-27T02:20:27.609Z",
          "valorTotal": 104205
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-25T02:49:05.440Z"
  },
  {
      "idhistorico": 344,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-07T06:05:19.286Z",
          "valorTotal": 106832
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-10T02:28:34.929Z"
  },
  {
      "idhistorico": 345,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-07T22:36:13.731Z",
          "valorTotal": 142731
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-17T20:24:02.734Z"
  },
  {
      "idhistorico": 346,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-20T08:26:52.295Z",
          "valorTotal": 207411
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-20T06:09:25.404Z"
  },
  {
      "idhistorico": 347,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-11T05:59:32.717Z",
          "valorTotal": 202456
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-09T14:41:07.435Z"
  },
  {
      "idhistorico": 348,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-20T00:21:45.391Z",
          "valorTotal": 149000
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-07T19:49:58.664Z"
  },
  {
      "idhistorico": 349,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T15:48:37.793Z",
          "valorTotal": 97238
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-14T22:45:12.656Z"
  },
  {
      "idhistorico": 350,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-22T04:00:04.766Z",
          "valorTotal": 223137
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-10T11:34:32.790Z"
  },
  {
      "idhistorico": 351,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-08T22:04:34.590Z",
          "valorTotal": 131622
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-29T14:12:18.857Z"
  },
  {
      "idhistorico": 352,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-20T17:25:23.510Z",
          "valorTotal": 177038
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-21T17:50:49.088Z"
  },
  {
      "idhistorico": 353,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-10T15:57:32.239Z",
          "valorTotal": 20569
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-25T03:16:01.176Z"
  },
  {
      "idhistorico": 354,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-14T23:30:23.066Z",
          "valorTotal": 49977
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-05T07:50:24.414Z"
  },
  {
      "idhistorico": 355,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-03-01T09:25:22.464Z",
          "valorTotal": 103879
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-28T03:14:42.232Z"
  },
  {
      "idhistorico": 356,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-05T12:29:03.526Z",
          "valorTotal": 236907
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-25T19:07:45.083Z"
  },
  {
      "idhistorico": 357,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-04T03:52:31.899Z",
          "valorTotal": 127241
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-26T16:54:53.939Z"
  },
  {
      "idhistorico": 358,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-25T16:25:00.309Z",
          "valorTotal": 100450
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-12T10:41:08.347Z"
  },
  {
      "idhistorico": 359,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-31T03:26:47.446Z",
          "valorTotal": 95024
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-28T08:01:25.637Z"
  },
  {
      "idhistorico": 360,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-01T14:47:47.969Z",
          "valorTotal": 59176
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-03T13:39:00.689Z"
  },
  {
      "idhistorico": 361,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-28T18:56:50.392Z",
          "valorTotal": 189730
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T07:46:32.268Z"
  },
  {
      "idhistorico": 362,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-02T03:57:50.225Z",
          "valorTotal": 207917
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-07T20:33:14.291Z"
  },
  {
      "idhistorico": 363,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-23T23:59:59.947Z",
          "valorTotal": 50521
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-06T15:46:13.038Z"
  },
  {
      "idhistorico": 364,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-18T19:06:34.693Z",
          "valorTotal": 109489
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-26T06:45:17.825Z"
  },
  {
      "idhistorico": 365,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-05T12:07:17.452Z",
          "valorTotal": 198283
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-14T11:18:21.673Z"
  },
  {
      "idhistorico": 366,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-18T04:25:33.988Z",
          "valorTotal": 198239
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T18:44:08.498Z"
  },
  {
      "idhistorico": 367,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-14T07:25:15.257Z",
          "valorTotal": 180584
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-25T17:50:24.661Z"
  },
  {
      "idhistorico": 368,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-15T18:34:05.091Z",
          "valorTotal": 44231
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-08T08:27:03.340Z"
  },
  {
      "idhistorico": 369,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-20T14:33:31.440Z",
          "valorTotal": 26508
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-07T01:55:23.153Z"
  },
  {
      "idhistorico": 370,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-31T14:40:12.600Z",
          "valorTotal": 74166
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-26T01:11:24.166Z"
  },
  {
      "idhistorico": 371,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-27T05:53:22.874Z",
          "valorTotal": 128751
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-02T09:42:49.597Z"
  },
  {
      "idhistorico": 372,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-06T07:17:54.362Z",
          "valorTotal": 130683
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-28T03:09:12.212Z"
  },
  {
      "idhistorico": 373,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-20T18:15:15.779Z",
          "valorTotal": 92395
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T13:17:48.740Z"
  },
  {
      "idhistorico": 374,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-25T04:28:25.185Z",
          "valorTotal": 218100
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-12T02:57:34.021Z"
  },
  {
      "idhistorico": 375,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-30T16:38:52.194Z",
          "valorTotal": 29711
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-02T17:01:19.934Z"
  },
  {
      "idhistorico": 376,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-05T16:11:32.179Z",
          "valorTotal": 116984
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-31T19:06:26.409Z"
  },
  {
      "idhistorico": 377,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-04T10:43:13.088Z",
          "valorTotal": 38074
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-15T21:57:47.851Z"
  },
  {
      "idhistorico": 378,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-14T04:20:41.379Z",
          "valorTotal": 82169
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T13:34:37.472Z"
  },
  {
      "idhistorico": 379,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-19T19:20:18.636Z",
          "valorTotal": 164516
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-20T15:02:16.110Z"
  },
  {
      "idhistorico": 380,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-05T06:07:44.114Z",
          "valorTotal": 56452
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-12T18:55:30.967Z"
  },
  {
      "idhistorico": 381,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-01T00:01:06.507Z",
          "valorTotal": 133698
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-20T11:12:27.869Z"
  },
  {
      "idhistorico": 382,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-14T12:22:09.628Z",
          "valorTotal": 121736
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T14:42:04.431Z"
  },
  {
      "idhistorico": 383,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-07T10:15:03.907Z",
          "valorTotal": 106514
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-30T01:24:39.410Z"
  },
  {
      "idhistorico": 384,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-21T16:50:49.394Z",
          "valorTotal": 111676
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-24T07:07:03.115Z"
  },
  {
      "idhistorico": 385,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-16T19:31:06.663Z",
          "valorTotal": 92807
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T05:06:34.929Z"
  },
  {
      "idhistorico": 386,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-07T16:30:05.592Z",
          "valorTotal": 137385
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-16T13:15:10.976Z"
  },
  {
      "idhistorico": 387,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-24T03:47:12.248Z",
          "valorTotal": 45221
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-20T13:05:38.447Z"
  },
  {
      "idhistorico": 388,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-11T14:35:16.876Z",
          "valorTotal": 235718
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-06T00:34:10.945Z"
  },
  {
      "idhistorico": 389,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-04T08:12:00.058Z",
          "valorTotal": 119954
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-20T17:53:15.953Z"
  },
  {
      "idhistorico": 390,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-25T16:31:13.598Z",
          "valorTotal": 57025
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-12T15:22:08.180Z"
  },
  {
      "idhistorico": 391,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-15T18:40:24.840Z",
          "valorTotal": 224427
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-15T21:32:17.100Z"
  },
  {
      "idhistorico": 392,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-03T21:14:02.843Z",
          "valorTotal": 191327
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T16:49:14.317Z"
  },
  {
      "idhistorico": 393,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-08-10T18:48:11.686Z",
          "valorTotal": 56280
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-26T07:13:50.207Z"
  },
  {
      "idhistorico": 394,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-07T16:43:32.273Z",
          "valorTotal": 79655
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-03T08:46:36.958Z"
  },
  {
      "idhistorico": 395,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-25T03:04:42.050Z",
          "valorTotal": 110598
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-28T03:55:19.907Z"
  },
  {
      "idhistorico": 396,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-04T11:26:17.124Z",
          "valorTotal": 243296
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-10T18:34:06.095Z"
  },
  {
      "idhistorico": 397,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-10T12:41:46.162Z",
          "valorTotal": 43414
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-29T17:31:53.691Z"
  },
  {
      "idhistorico": 398,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-20T18:23:26.485Z",
          "valorTotal": 23792
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-12T21:31:04.383Z"
  },
  {
      "idhistorico": 399,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-18T02:59:06.574Z",
          "valorTotal": 37057
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-08T01:57:56.393Z"
  },
  {
      "idhistorico": 400,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-22T02:59:01.052Z",
          "valorTotal": 114425
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-16T22:01:34.448Z"
  },
  {
      "idhistorico": 401,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-12T00:35:07.207Z",
          "valorTotal": 151741
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-26T04:22:34.889Z"
  },
  {
      "idhistorico": 402,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-24T06:11:29.531Z",
          "valorTotal": 71006
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-25T03:40:14.381Z"
  },
  {
      "idhistorico": 403,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-05T17:34:34.352Z",
          "valorTotal": 68764
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-05T07:52:59.589Z"
  },
  {
      "idhistorico": 404,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-28T01:15:09.257Z",
          "valorTotal": 132726
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-15T09:25:41.925Z"
  },
  {
      "idhistorico": 405,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-14T13:20:05.488Z",
          "valorTotal": 217290
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-12T03:32:14.801Z"
  },
  {
      "idhistorico": 406,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-11T04:54:18.364Z",
          "valorTotal": 109742
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-18T05:41:17.757Z"
  },
  {
      "idhistorico": 407,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-25T20:41:25.891Z",
          "valorTotal": 146430
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-17T09:12:00.634Z"
  },
  {
      "idhistorico": 408,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-08-05T18:36:48.839Z",
          "valorTotal": 245941
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-20T14:36:48.345Z"
  },
  {
      "idhistorico": 409,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-17T09:53:10.380Z",
          "valorTotal": 245256
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T02:30:48.664Z"
  },
  {
      "idhistorico": 410,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-26T07:37:40.877Z",
          "valorTotal": 71733
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-19T16:07:15.416Z"
  },
  {
      "idhistorico": 411,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-03-28T06:57:30.020Z",
          "valorTotal": 148905
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-27T12:33:41.698Z"
  },
  {
      "idhistorico": 412,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-08-01T18:36:48.247Z",
          "valorTotal": 43660
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-08T22:37:16.382Z"
  },
  {
      "idhistorico": 413,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-24T11:45:43.071Z",
          "valorTotal": 156850
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-05T07:10:43.480Z"
  },
  {
      "idhistorico": 414,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-15T02:38:14.941Z",
          "valorTotal": 112755
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-21T20:29:58.980Z"
  },
  {
      "idhistorico": 415,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-10T15:54:17.383Z",
          "valorTotal": 224564
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T17:46:14.529Z"
  },
  {
      "idhistorico": 416,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-04T03:48:32.642Z",
          "valorTotal": 196438
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-29T09:41:22.976Z"
  },
  {
      "idhistorico": 417,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-22T03:38:15.915Z",
          "valorTotal": 227364
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-09T16:17:30.849Z"
  },
  {
      "idhistorico": 418,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-30T13:25:39.266Z",
          "valorTotal": 110884
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-22T03:59:12.118Z"
  },
  {
      "idhistorico": 419,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-20T20:26:56.829Z",
          "valorTotal": 31598
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T06:01:57.074Z"
  },
  {
      "idhistorico": 420,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-10T01:33:44.552Z",
          "valorTotal": 188536
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-10T10:08:49.639Z"
  },
  {
      "idhistorico": 421,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-02T20:55:17.810Z",
          "valorTotal": 236090
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-01T01:01:48.459Z"
  },
  {
      "idhistorico": 422,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-04T12:38:20.038Z",
          "valorTotal": 37618
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-05T05:24:08.021Z"
  },
  {
      "idhistorico": 423,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-08-09T13:41:42.373Z",
          "valorTotal": 188173
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-03T03:29:14.895Z"
  },
  {
      "idhistorico": 424,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-05T00:03:42.914Z",
          "valorTotal": 153303
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-18T18:38:14.752Z"
  },
  {
      "idhistorico": 425,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-19T08:13:51.104Z",
          "valorTotal": 43589
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-24T18:07:03.854Z"
  },
  {
      "idhistorico": 426,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-12T03:41:04.509Z",
          "valorTotal": 27045
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-21T04:02:14.155Z"
  },
  {
      "idhistorico": 427,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-07T09:24:57.272Z",
          "valorTotal": 58351
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-02T10:46:09.902Z"
  },
  {
      "idhistorico": 428,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-22T16:56:27.446Z",
          "valorTotal": 196847
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-01T19:20:50.996Z"
  },
  {
      "idhistorico": 429,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-04T21:12:00.163Z",
          "valorTotal": 157075
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-11T18:41:46.965Z"
  },
  {
      "idhistorico": 430,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-27T18:58:18.814Z",
          "valorTotal": 89474
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-09T11:29:18.634Z"
  },
  {
      "idhistorico": 431,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-01T09:31:22.002Z",
          "valorTotal": 153514
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-15T00:41:47.851Z"
  },
  {
      "idhistorico": 432,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-31T13:17:09.486Z",
          "valorTotal": 50014
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-23T08:21:18.012Z"
  },
  {
      "idhistorico": 433,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-08T06:00:09.801Z",
          "valorTotal": 80818
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-05T01:52:45.028Z"
  },
  {
      "idhistorico": 434,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-17T05:07:42.174Z",
          "valorTotal": 158557
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-28T06:24:35.192Z"
  },
  {
      "idhistorico": 435,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-21T07:02:21.231Z",
          "valorTotal": 206105
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-12T04:49:14.003Z"
  },
  {
      "idhistorico": 436,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-27T01:27:13.187Z",
          "valorTotal": 122140
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-20T08:43:51.263Z"
  },
  {
      "idhistorico": 437,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-11T19:39:55.736Z",
          "valorTotal": 221701
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-23T17:06:48.222Z"
  },
  {
      "idhistorico": 438,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-31T13:41:42.556Z",
          "valorTotal": 235785
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-25T00:00:02.980Z"
  },
  {
      "idhistorico": 439,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-26T17:41:58.089Z",
          "valorTotal": 156898
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-30T02:16:31.581Z"
  },
  {
      "idhistorico": 440,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-04T04:25:21.748Z",
          "valorTotal": 55860
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-18T00:58:28.744Z"
  },
  {
      "idhistorico": 441,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-15T14:30:37.016Z",
          "valorTotal": 190693
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-23T21:00:40.958Z"
  },
  {
      "idhistorico": 442,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-14T03:09:21.890Z",
          "valorTotal": 135842
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-19T20:33:24.367Z"
  },
  {
      "idhistorico": 443,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-27T09:20:43.912Z",
          "valorTotal": 51391
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-28T23:21:22.039Z"
  },
  {
      "idhistorico": 444,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-05T17:06:26.079Z",
          "valorTotal": 225721
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-26T11:15:34.935Z"
  },
  {
      "idhistorico": 445,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-05T09:55:23.415Z",
          "valorTotal": 210329
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T16:49:26.490Z"
  },
  {
      "idhistorico": 446,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-22T10:00:32.059Z",
          "valorTotal": 21156
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-21T13:53:33.850Z"
  },
  {
      "idhistorico": 447,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-06T16:09:07.395Z",
          "valorTotal": 122335
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-11T04:09:25.124Z"
  },
  {
      "idhistorico": 448,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-13T08:01:15.898Z",
          "valorTotal": 185769
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-24T21:42:59.324Z"
  },
  {
      "idhistorico": 449,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-08-04T04:09:18.443Z",
          "valorTotal": 160780
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-10T10:37:20.147Z"
  },
  {
      "idhistorico": 450,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-14T01:26:39.938Z",
          "valorTotal": 27074
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-24T09:20:41.458Z"
  },
  {
      "idhistorico": 451,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-05T18:03:56.917Z",
          "valorTotal": 77749
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-01T21:16:45.095Z"
  },
  {
      "idhistorico": 452,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-29T14:24:15.331Z",
          "valorTotal": 79854
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-02T17:54:34.944Z"
  },
  {
      "idhistorico": 453,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-02T09:44:01.833Z",
          "valorTotal": 247608
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-28T17:36:22.710Z"
  },
  {
      "idhistorico": 454,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-21T12:39:29.246Z",
          "valorTotal": 176345
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-04T08:26:24.769Z"
  },
  {
      "idhistorico": 455,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-30T21:39:21.137Z",
          "valorTotal": 76958
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-11T06:06:38.333Z"
  },
  {
      "idhistorico": 456,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-04T22:09:09.332Z",
          "valorTotal": 144618
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-22T13:30:52.507Z"
  },
  {
      "idhistorico": 457,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-19T13:03:50.371Z",
          "valorTotal": 62900
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-11T14:52:46.932Z"
  },
  {
      "idhistorico": 458,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-01T20:35:05.855Z",
          "valorTotal": 188284
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-06T17:33:43.264Z"
  },
  {
      "idhistorico": 459,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-29T04:28:57.877Z",
          "valorTotal": 179271
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-14T09:21:09.392Z"
  },
  {
      "idhistorico": 460,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-11T18:31:37.037Z",
          "valorTotal": 138525
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-10T12:04:39.464Z"
  },
  {
      "idhistorico": 461,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-28T08:37:00.694Z",
          "valorTotal": 106975
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T12:02:16.815Z"
  },
  {
      "idhistorico": 462,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T17:19:52.879Z",
          "valorTotal": 58282
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-07T17:23:36.838Z"
  },
  {
      "idhistorico": 463,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-26T20:50:05.728Z",
          "valorTotal": 74028
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-17T14:19:57.486Z"
  },
  {
      "idhistorico": 464,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-08T15:14:35.729Z",
          "valorTotal": 55610
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-13T16:56:58.160Z"
  },
  {
      "idhistorico": 465,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-08T03:53:57.178Z",
          "valorTotal": 148299
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-24T18:48:33.856Z"
  },
  {
      "idhistorico": 466,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-25T07:17:06.674Z",
          "valorTotal": 121151
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-27T17:17:35.620Z"
  },
  {
      "idhistorico": 467,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-15T16:19:01.973Z",
          "valorTotal": 48438
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-14T16:18:59.092Z"
  },
  {
      "idhistorico": 468,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-20T08:31:04.169Z",
          "valorTotal": 94680
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-06T21:37:37.669Z"
  },
  {
      "idhistorico": 469,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-03T16:08:22.922Z",
          "valorTotal": 203942
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-11T06:37:52.766Z"
  },
  {
      "idhistorico": 470,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-30T16:15:20.042Z",
          "valorTotal": 33554
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T22:44:07.462Z"
  },
  {
      "idhistorico": 471,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-04T20:18:39.105Z",
          "valorTotal": 50543
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-28T15:36:05.321Z"
  },
  {
      "idhistorico": 472,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-02T13:35:09.108Z",
          "valorTotal": 67429
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-07T08:21:51.762Z"
  },
  {
      "idhistorico": 473,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-06T06:42:12.078Z",
          "valorTotal": 147121
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-07T11:34:37.441Z"
  },
  {
      "idhistorico": 474,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-30T11:36:18.258Z",
          "valorTotal": 36880
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-01T10:19:27.251Z"
  },
  {
      "idhistorico": 475,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-02T22:25:31.244Z",
          "valorTotal": 73511
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-22T23:57:37.740Z"
  },
  {
      "idhistorico": 476,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-09T11:14:34.569Z",
          "valorTotal": 210810
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-23T03:07:45.867Z"
  },
  {
      "idhistorico": 477,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-03T15:41:01.678Z",
          "valorTotal": 26655
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-18T09:24:02.312Z"
  },
  {
      "idhistorico": 478,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-24T23:20:45.873Z",
          "valorTotal": 24479
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-28T10:54:00.206Z"
  },
  {
      "idhistorico": 479,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-16T13:25:46.953Z",
          "valorTotal": 167457
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-04T02:53:31.653Z"
  },
  {
      "idhistorico": 480,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-28T20:06:06.282Z",
          "valorTotal": 38287
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-18T19:37:50.053Z"
  },
  {
      "idhistorico": 481,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-11T08:00:09.235Z",
          "valorTotal": 245106
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-06T00:55:40.502Z"
  },
  {
      "idhistorico": 482,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-04T23:29:20.999Z",
          "valorTotal": 200864
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-25T19:50:09.490Z"
  },
  {
      "idhistorico": 483,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-19T21:42:55.434Z",
          "valorTotal": 48640
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T01:10:11.108Z"
  },
  {
      "idhistorico": 484,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-06T04:06:21.116Z",
          "valorTotal": 21019
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-09T19:01:11.301Z"
  },
  {
      "idhistorico": 485,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-02T03:17:19.139Z",
          "valorTotal": 182901
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-27T17:32:52.945Z"
  },
  {
      "idhistorico": 486,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-08T03:55:43.388Z",
          "valorTotal": 228471
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-11T04:42:12.764Z"
  },
  {
      "idhistorico": 487,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-08-17T23:44:19.198Z",
          "valorTotal": 161766
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T23:58:49.531Z"
  },
  {
      "idhistorico": 488,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-15T21:03:20.876Z",
          "valorTotal": 48985
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-03T03:10:01.118Z"
  },
  {
      "idhistorico": 489,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-21T23:46:15.385Z",
          "valorTotal": 36916
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-29T02:36:59.674Z"
  },
  {
      "idhistorico": 490,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-15T03:52:07.270Z",
          "valorTotal": 87592
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-19T20:14:08.639Z"
  },
  {
      "idhistorico": 491,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-07T06:32:43.964Z",
          "valorTotal": 151551
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-01T07:10:43.560Z"
  },
  {
      "idhistorico": 492,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-04T01:40:42.427Z",
          "valorTotal": 188451
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-07T07:42:34.505Z"
  },
  {
      "idhistorico": 493,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-09T07:09:51.739Z",
          "valorTotal": 204848
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-21T00:43:04.786Z"
  },
  {
      "idhistorico": 494,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-11T05:05:18.647Z",
          "valorTotal": 224930
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-05T10:55:06.083Z"
  },
  {
      "idhistorico": 495,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-05T09:52:36.790Z",
          "valorTotal": 47326
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-16T22:05:18.853Z"
  },
  {
      "idhistorico": 496,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-25T18:50:37.136Z",
          "valorTotal": 37799
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-05T16:54:25.979Z"
  },
  {
      "idhistorico": 497,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-03T10:10:11.357Z",
          "valorTotal": 60606
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-20T02:51:07.728Z"
  },
  {
      "idhistorico": 498,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-17T13:20:59.739Z",
          "valorTotal": 147395
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-11T06:41:15.397Z"
  },
  {
      "idhistorico": 499,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-13T19:02:32.778Z",
          "valorTotal": 23453
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-29T07:15:55.247Z"
  },
  {
      "idhistorico": 500,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-27T18:27:58.769Z",
          "valorTotal": 63237
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-07T00:08:19.726Z"
  },
  {
      "idhistorico": 501,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-09T11:41:19.141Z",
          "valorTotal": 153039
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-07T09:22:48.853Z"
  },
  {
      "idhistorico": 502,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-02T06:21:36.869Z",
          "valorTotal": 247361
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-06T17:12:46.813Z"
  },
  {
      "idhistorico": 503,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-01T03:39:06.215Z",
          "valorTotal": 127127
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T17:23:20.125Z"
  },
  {
      "idhistorico": 504,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-24T10:45:04.961Z",
          "valorTotal": 123867
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-13T15:46:32.802Z"
  },
  {
      "idhistorico": 505,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-19T09:52:06.721Z",
          "valorTotal": 133948
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-11T08:42:01.313Z"
  },
  {
      "idhistorico": 506,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-27T13:39:04.123Z",
          "valorTotal": 117164
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-14T13:19:47.975Z"
  },
  {
      "idhistorico": 507,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-06T07:17:59.364Z",
          "valorTotal": 215460
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T01:25:45.844Z"
  },
  {
      "idhistorico": 508,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-26T14:21:55.298Z",
          "valorTotal": 147327
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-23T21:01:55.994Z"
  },
  {
      "idhistorico": 509,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-01T00:10:53.301Z",
          "valorTotal": 113132
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-30T05:09:29.436Z"
  },
  {
      "idhistorico": 510,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-04T05:16:21.519Z",
          "valorTotal": 132858
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-24T07:07:59.281Z"
  },
  {
      "idhistorico": 511,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-14T23:35:41.215Z",
          "valorTotal": 132655
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-09T20:12:43.710Z"
  },
  {
      "idhistorico": 512,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-14T01:34:06.215Z",
          "valorTotal": 146832
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-15T15:08:12.000Z"
  },
  {
      "idhistorico": 513,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-12T02:15:09.036Z",
          "valorTotal": 45399
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T09:22:27.528Z"
  },
  {
      "idhistorico": 514,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-28T18:50:23.642Z",
          "valorTotal": 100241
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-01T03:20:14.967Z"
  },
  {
      "idhistorico": 515,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-11T22:17:23.465Z",
          "valorTotal": 41016
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-10T03:26:15.013Z"
  },
  {
      "idhistorico": 516,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-21T17:28:22.540Z",
          "valorTotal": 239823
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-25T01:12:28.560Z"
  },
  {
      "idhistorico": 517,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-24T14:08:09.864Z",
          "valorTotal": 141716
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-30T06:52:04.817Z"
  },
  {
      "idhistorico": 518,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-15T10:02:50.257Z",
          "valorTotal": 243281
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-07T02:03:02.458Z"
  },
  {
      "idhistorico": 519,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-27T04:13:32.387Z",
          "valorTotal": 188550
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T02:44:26.019Z"
  },
  {
      "idhistorico": 520,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-30T09:54:26.163Z",
          "valorTotal": 136751
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-11T19:59:53.767Z"
  },
  {
      "idhistorico": 521,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-17T07:02:22.783Z",
          "valorTotal": 37241
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-16T14:01:18.303Z"
  },
  {
      "idhistorico": 522,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-08-05T17:09:25.638Z",
          "valorTotal": 193117
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-19T18:14:54.325Z"
  },
  {
      "idhistorico": 523,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-03T21:01:56.152Z",
          "valorTotal": 136708
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-30T03:57:28.929Z"
  },
  {
      "idhistorico": 524,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-08-01T15:18:51.389Z",
          "valorTotal": 180406
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-10T22:43:18.688Z"
  },
  {
      "idhistorico": 525,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-10T12:55:14.273Z",
          "valorTotal": 44873
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-05T13:30:09.947Z"
  },
  {
      "idhistorico": 526,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-03T17:45:42.544Z",
          "valorTotal": 131031
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-10T22:01:30.115Z"
  },
  {
      "idhistorico": 527,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-07T17:58:47.512Z",
          "valorTotal": 148115
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-08T09:00:20.034Z"
  },
  {
      "idhistorico": 528,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-11T08:35:37.539Z",
          "valorTotal": 181060
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-09T18:01:24.717Z"
  },
  {
      "idhistorico": 529,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-25T18:38:53.236Z",
          "valorTotal": 148959
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-08T07:35:03.078Z"
  },
  {
      "idhistorico": 530,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-27T09:27:45.031Z",
          "valorTotal": 124303
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-23T10:25:27.454Z"
  },
  {
      "idhistorico": 531,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-07T03:25:19.927Z",
          "valorTotal": 217009
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-19T10:33:31.093Z"
  },
  {
      "idhistorico": 532,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-07T23:56:58.548Z",
          "valorTotal": 196196
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-23T10:37:06.907Z"
  },
  {
      "idhistorico": 533,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-13T15:44:17.704Z",
          "valorTotal": 190692
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-02T14:46:58.197Z"
  },
  {
      "idhistorico": 534,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-29T00:58:08.181Z",
          "valorTotal": 43603
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-07T15:54:44.582Z"
  },
  {
      "idhistorico": 535,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-20T11:40:16.229Z",
          "valorTotal": 121388
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-03T22:53:22.622Z"
  },
  {
      "idhistorico": 536,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-23T22:08:35.495Z",
          "valorTotal": 154623
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-29T00:46:29.806Z"
  },
  {
      "idhistorico": 537,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-04T11:01:56.034Z",
          "valorTotal": 196073
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T13:37:52.869Z"
  },
  {
      "idhistorico": 538,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-01T00:30:32.194Z",
          "valorTotal": 220973
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-16T03:11:25.072Z"
  },
  {
      "idhistorico": 539,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-27T08:19:53.960Z",
          "valorTotal": 205311
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T23:06:36.707Z"
  },
  {
      "idhistorico": 540,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-26T09:05:34.962Z",
          "valorTotal": 158541
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-02T01:58:43.863Z"
  },
  {
      "idhistorico": 541,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-23T13:01:31.543Z",
          "valorTotal": 249117
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-13T17:07:20.595Z"
  },
  {
      "idhistorico": 542,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-01T02:50:53.067Z",
          "valorTotal": 36603
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-05T13:31:12.615Z"
  },
  {
      "idhistorico": 543,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-06T12:02:47.936Z",
          "valorTotal": 234746
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-11T22:51:47.923Z"
  },
  {
      "idhistorico": 544,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-28T09:17:44.837Z",
          "valorTotal": 36538
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-28T10:28:55.278Z"
  },
  {
      "idhistorico": 545,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-03T09:52:09.264Z",
          "valorTotal": 20699
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-05T15:53:01.425Z"
  },
  {
      "idhistorico": 546,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-30T17:34:15.417Z",
          "valorTotal": 119590
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-31T01:54:33.340Z"
  },
  {
      "idhistorico": 547,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-21T13:02:54.180Z",
          "valorTotal": 214669
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-26T11:09:51.774Z"
  },
  {
      "idhistorico": 548,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-13T19:35:07.680Z",
          "valorTotal": 190328
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-06T09:54:09.852Z"
  },
  {
      "idhistorico": 549,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-23T19:50:51.006Z",
          "valorTotal": 157356
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-30T19:56:13.193Z"
  },
  {
      "idhistorico": 550,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-08T11:59:38.708Z",
          "valorTotal": 192716
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-12T23:04:21.366Z"
  },
  {
      "idhistorico": 551,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-21T05:02:35.108Z",
          "valorTotal": 196136
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-01T06:01:42.983Z"
  },
  {
      "idhistorico": 552,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-22T06:40:13.114Z",
          "valorTotal": 197846
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-29T12:50:50.723Z"
  },
  {
      "idhistorico": 553,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-15T15:48:46.368Z",
          "valorTotal": 211410
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T13:24:40.948Z"
  },
  {
      "idhistorico": 554,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-15T02:03:10.912Z",
          "valorTotal": 117251
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-10T09:32:38.356Z"
  },
  {
      "idhistorico": 555,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-08T03:17:09.615Z",
          "valorTotal": 81944
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-17T16:56:51.335Z"
  },
  {
      "idhistorico": 556,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-03T04:20:20.603Z",
          "valorTotal": 177555
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-10T20:15:20.262Z"
  },
  {
      "idhistorico": 557,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-04T02:29:15.903Z",
          "valorTotal": 245089
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T11:53:01.512Z"
  },
  {
      "idhistorico": 558,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-13T00:57:00.937Z",
          "valorTotal": 84603
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-14T08:43:14.542Z"
  },
  {
      "idhistorico": 559,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-04T15:48:34.931Z",
          "valorTotal": 222707
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-16T23:00:02.245Z"
  },
  {
      "idhistorico": 560,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-24T13:38:39.846Z",
          "valorTotal": 60546
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-03T09:16:22.442Z"
  },
  {
      "idhistorico": 561,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-16T22:28:13.101Z",
          "valorTotal": 150708
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-12T13:32:46.605Z"
  },
  {
      "idhistorico": 562,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-18T07:07:22.582Z",
          "valorTotal": 71373
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-16T23:47:42.176Z"
  },
  {
      "idhistorico": 563,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-01T21:45:41.815Z",
          "valorTotal": 101027
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T16:19:06.059Z"
  },
  {
      "idhistorico": 564,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-12T04:46:14.439Z",
          "valorTotal": 91746
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-20T06:52:52.439Z"
  },
  {
      "idhistorico": 565,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-24T09:51:05.248Z",
          "valorTotal": 165589
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-03T16:44:22.843Z"
  },
  {
      "idhistorico": 566,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-10T06:49:27.334Z",
          "valorTotal": 38976
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-12T13:18:47.530Z"
  },
  {
      "idhistorico": 567,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-15T20:17:24.891Z",
          "valorTotal": 35716
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-22T15:26:14.108Z"
  },
  {
      "idhistorico": 568,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-24T13:28:13.172Z",
          "valorTotal": 245666
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-21T12:59:42.955Z"
  },
  {
      "idhistorico": 569,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-19T18:25:52.211Z",
          "valorTotal": 81474
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-24T10:16:37.903Z"
  },
  {
      "idhistorico": 570,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-03T21:10:58.638Z",
          "valorTotal": 66000
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-25T13:13:18.279Z"
  },
  {
      "idhistorico": 571,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-04T01:02:24.061Z",
          "valorTotal": 162577
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-10T03:17:39.273Z"
  },
  {
      "idhistorico": 572,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-06T11:31:40.600Z",
          "valorTotal": 119899
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-16T14:28:21.509Z"
  },
  {
      "idhistorico": 573,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-26T06:16:28.732Z",
          "valorTotal": 44559
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-05T04:47:44.582Z"
  },
  {
      "idhistorico": 574,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-16T18:10:22.845Z",
          "valorTotal": 113496
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-17T17:25:58.084Z"
  },
  {
      "idhistorico": 575,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-08-04T11:36:24.390Z",
          "valorTotal": 151411
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-28T12:31:04.621Z"
  },
  {
      "idhistorico": 576,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-13T14:45:40.264Z",
          "valorTotal": 88207
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-08T10:32:48.223Z"
  },
  {
      "idhistorico": 577,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-21T20:40:18.608Z",
          "valorTotal": 218344
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-12T08:26:26.245Z"
  },
  {
      "idhistorico": 578,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-18T09:21:59.748Z",
          "valorTotal": 152976
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-26T04:14:03.271Z"
  },
  {
      "idhistorico": 579,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-10T01:40:02.699Z",
          "valorTotal": 200784
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-20T12:26:52.528Z"
  },
  {
      "idhistorico": 580,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T19:17:19.640Z",
          "valorTotal": 225451
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-14T08:31:49.527Z"
  },
  {
      "idhistorico": 581,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-22T08:19:41.381Z",
          "valorTotal": 136026
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T00:26:31.537Z"
  },
  {
      "idhistorico": 582,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-04T10:42:54.108Z",
          "valorTotal": 58620
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-29T16:28:40.248Z"
  },
  {
      "idhistorico": 583,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-13T14:52:08.427Z",
          "valorTotal": 186332
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-03T17:06:01.619Z"
  },
  {
      "idhistorico": 584,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-12T15:43:20.227Z",
          "valorTotal": 32729
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-23T16:37:40.677Z"
  },
  {
      "idhistorico": 585,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-28T18:05:40.727Z",
          "valorTotal": 131451
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-30T05:36:49.544Z"
  },
  {
      "idhistorico": 586,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-14T16:20:32.672Z",
          "valorTotal": 141918
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-14T04:04:47.108Z"
  },
  {
      "idhistorico": 587,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-09T10:17:31.814Z",
          "valorTotal": 40969
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-23T22:42:15.522Z"
  },
  {
      "idhistorico": 588,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-29T17:43:57.479Z",
          "valorTotal": 128911
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-17T18:27:57.821Z"
  },
  {
      "idhistorico": 589,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-31T09:44:14.202Z",
          "valorTotal": 69652
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-21T09:37:48.523Z"
  },
  {
      "idhistorico": 590,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-25T10:53:43.424Z",
          "valorTotal": 147024
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-21T20:34:33.309Z"
  },
  {
      "idhistorico": 591,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-26T06:09:15.998Z",
          "valorTotal": 35300
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T03:59:17.767Z"
  },
  {
      "idhistorico": 592,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-06T13:07:45.592Z",
          "valorTotal": 127667
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-03T06:01:02.649Z"
  },
  {
      "idhistorico": 593,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-25T23:16:25.834Z",
          "valorTotal": 29836
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-24T21:38:21.454Z"
  },
  {
      "idhistorico": 594,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-15T13:58:22.632Z",
          "valorTotal": 61957
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-13T21:38:57.383Z"
  },
  {
      "idhistorico": 595,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-09T20:46:24.663Z",
          "valorTotal": 240141
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T04:53:07.157Z"
  },
  {
      "idhistorico": 596,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-03T12:05:02.870Z",
          "valorTotal": 154549
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-14T19:24:32.716Z"
  },
  {
      "idhistorico": 597,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-24T00:12:40.451Z",
          "valorTotal": 215453
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-12T14:02:57.116Z"
  },
  {
      "idhistorico": 598,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-15T12:48:13.123Z",
          "valorTotal": 233127
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-11T01:40:51.069Z"
  },
  {
      "idhistorico": 599,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-08-12T23:45:50.972Z",
          "valorTotal": 140556
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-30T11:22:02.764Z"
  },
  {
      "idhistorico": 600,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-04T07:41:17.444Z",
          "valorTotal": 171662
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-02T03:20:06.068Z"
  },
  {
      "idhistorico": 601,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-06T06:05:38.997Z",
          "valorTotal": 167990
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-29T13:31:25.121Z"
  },
  {
      "idhistorico": 602,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-10T21:49:40.687Z",
          "valorTotal": 108327
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T18:34:50.720Z"
  },
  {
      "idhistorico": 603,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-11T07:17:07.389Z",
          "valorTotal": 57631
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-03T10:08:08.665Z"
  },
  {
      "idhistorico": 604,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-04T22:15:09.947Z",
          "valorTotal": 48155
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-29T16:05:26.537Z"
  },
  {
      "idhistorico": 605,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-15T05:22:52.926Z",
          "valorTotal": 164774
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-08T16:24:29.016Z"
  },
  {
      "idhistorico": 606,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-30T13:35:48.069Z",
          "valorTotal": 225480
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-17T17:20:01.118Z"
  },
  {
      "idhistorico": 607,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-21T11:39:13.935Z",
          "valorTotal": 167020
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T21:18:15.784Z"
  },
  {
      "idhistorico": 608,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-21T22:19:55.077Z",
          "valorTotal": 123258
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T01:56:55.403Z"
  },
  {
      "idhistorico": 609,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-13T18:55:54.382Z",
          "valorTotal": 188670
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-20T14:49:33.617Z"
  },
  {
      "idhistorico": 610,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-13T05:47:12.408Z",
          "valorTotal": 190394
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-10T16:02:15.137Z"
  },
  {
      "idhistorico": 611,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-11T06:04:01.456Z",
          "valorTotal": 31755
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T15:58:03.332Z"
  },
  {
      "idhistorico": 612,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-31T05:07:30.204Z",
          "valorTotal": 58684
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-15T02:04:33.558Z"
  },
  {
      "idhistorico": 613,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-12T03:16:18.056Z",
          "valorTotal": 111051
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T08:37:13.463Z"
  },
  {
      "idhistorico": 614,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-15T19:17:42.254Z",
          "valorTotal": 114464
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-11T20:36:36.314Z"
  },
  {
      "idhistorico": 615,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-05T14:12:37.053Z",
          "valorTotal": 27889
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-10T04:21:18.290Z"
  },
  {
      "idhistorico": 616,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-31T08:34:25.105Z",
          "valorTotal": 145446
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-03T16:56:03.291Z"
  },
  {
      "idhistorico": 617,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-27T18:52:33.797Z",
          "valorTotal": 215810
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-06T13:06:27.532Z"
  },
  {
      "idhistorico": 618,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-11T21:57:12.263Z",
          "valorTotal": 39912
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-22T05:31:46.219Z"
  },
  {
      "idhistorico": 619,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-17T22:11:08.952Z",
          "valorTotal": 151637
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-06T03:48:44.163Z"
  },
  {
      "idhistorico": 620,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-20T21:18:17.117Z",
          "valorTotal": 216239
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-29T22:38:50.167Z"
  },
  {
      "idhistorico": 621,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-12T20:22:56.980Z",
          "valorTotal": 249743
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-26T00:27:37.572Z"
  },
  {
      "idhistorico": 622,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-27T20:16:58.672Z",
          "valorTotal": 200103
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-01T19:13:16.234Z"
  },
  {
      "idhistorico": 623,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-18T17:30:53.640Z",
          "valorTotal": 246556
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T03:19:20.755Z"
  },
  {
      "idhistorico": 624,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-08-16T08:58:21.398Z",
          "valorTotal": 119228
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-10T21:24:30.977Z"
  },
  {
      "idhistorico": 625,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-03T14:03:23.721Z",
          "valorTotal": 79600
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T02:26:23.791Z"
  },
  {
      "idhistorico": 626,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-20T18:35:39.283Z",
          "valorTotal": 183852
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-16T00:28:19.977Z"
  },
  {
      "idhistorico": 627,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-26T07:21:15.924Z",
          "valorTotal": 113369
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-27T06:45:26.804Z"
  },
  {
      "idhistorico": 628,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-09T08:51:46.958Z",
          "valorTotal": 85965
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-16T06:42:48.404Z"
  },
  {
      "idhistorico": 629,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-25T13:26:31.847Z",
          "valorTotal": 48444
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-30T06:50:24.868Z"
  },
  {
      "idhistorico": 630,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-08T17:43:14.802Z",
          "valorTotal": 132242
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-08T12:05:36.619Z"
  },
  {
      "idhistorico": 631,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T18:35:11.770Z",
          "valorTotal": 86111
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-27T00:33:29.915Z"
  },
  {
      "idhistorico": 632,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-07T22:38:42.904Z",
          "valorTotal": 48103
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-27T19:11:44.756Z"
  },
  {
      "idhistorico": 633,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-08T16:32:47.111Z",
          "valorTotal": 239514
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-06T05:31:28.539Z"
  },
  {
      "idhistorico": 634,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-18T01:53:05.905Z",
          "valorTotal": 21439
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-11T14:27:16.893Z"
  },
  {
      "idhistorico": 635,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-22T18:29:22.893Z",
          "valorTotal": 157312
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-03T15:14:06.541Z"
  },
  {
      "idhistorico": 636,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-03T12:21:12.886Z",
          "valorTotal": 71022
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-12T11:58:17.643Z"
  },
  {
      "idhistorico": 637,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-04T00:54:31.690Z",
          "valorTotal": 132141
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-20T03:04:54.005Z"
  },
  {
      "idhistorico": 638,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-02T07:52:58.307Z",
          "valorTotal": 49670
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-27T08:08:27.497Z"
  },
  {
      "idhistorico": 639,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-31T09:11:22.478Z",
          "valorTotal": 26779
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-08T10:33:27.493Z"
  },
  {
      "idhistorico": 640,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-20T04:31:31.543Z",
          "valorTotal": 179628
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-26T00:01:50.694Z"
  },
  {
      "idhistorico": 641,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-09T03:53:44.161Z",
          "valorTotal": 21936
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-05T04:09:11.385Z"
  },
  {
      "idhistorico": 642,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-27T23:51:26.466Z",
          "valorTotal": 93174
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-09T17:14:55.483Z"
  },
  {
      "idhistorico": 643,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-27T02:46:27.286Z",
          "valorTotal": 157501
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-13T05:59:12.651Z"
  },
  {
      "idhistorico": 644,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-11T00:35:23.568Z",
          "valorTotal": 213971
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T15:29:48.706Z"
  },
  {
      "idhistorico": 645,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-20T01:24:00.234Z",
          "valorTotal": 170066
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-07T01:37:00.959Z"
  },
  {
      "idhistorico": 646,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-05T03:30:13.289Z",
          "valorTotal": 33611
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-13T04:50:07.567Z"
  },
  {
      "idhistorico": 647,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-31T03:33:54.757Z",
          "valorTotal": 114953
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-06T05:08:42.565Z"
  },
  {
      "idhistorico": 648,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-08T16:48:03.991Z",
          "valorTotal": 60616
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-19T20:43:10.287Z"
  },
  {
      "idhistorico": 649,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-30T19:30:10.201Z",
          "valorTotal": 105626
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-23T10:07:27.579Z"
  },
  {
      "idhistorico": 650,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-16T09:47:54.201Z",
          "valorTotal": 140011
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-02T18:44:47.550Z"
  },
  {
      "idhistorico": 651,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-13T02:25:14.358Z",
          "valorTotal": 220338
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-29T05:24:49.804Z"
  },
  {
      "idhistorico": 652,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-17T12:59:25.738Z",
          "valorTotal": 247370
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-10T02:04:14.535Z"
  },
  {
      "idhistorico": 653,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-09T10:02:35.279Z",
          "valorTotal": 59492
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-25T14:29:39.802Z"
  },
  {
      "idhistorico": 654,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-27T20:32:48.131Z",
          "valorTotal": 30242
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-20T22:03:44.598Z"
  },
  {
      "idhistorico": 655,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-11T04:19:37.411Z",
          "valorTotal": 228305
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-28T22:57:03.546Z"
  },
  {
      "idhistorico": 656,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-16T12:06:57.077Z",
          "valorTotal": 114712
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-16T20:44:00.463Z"
  },
  {
      "idhistorico": 657,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-04T02:37:13.407Z",
          "valorTotal": 55790
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T14:17:09.011Z"
  },
  {
      "idhistorico": 658,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-24T16:56:33.920Z",
          "valorTotal": 222953
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-18T16:06:25.565Z"
  },
  {
      "idhistorico": 659,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-25T16:14:04.591Z",
          "valorTotal": 73586
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-09T01:57:56.320Z"
  },
  {
      "idhistorico": 660,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-28T08:51:26.487Z",
          "valorTotal": 101120
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-18T23:30:15.351Z"
  },
  {
      "idhistorico": 661,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-11T02:00:11.630Z",
          "valorTotal": 155564
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T11:23:14.036Z"
  },
  {
      "idhistorico": 662,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-02T09:11:21.068Z",
          "valorTotal": 244050
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-21T16:23:12.005Z"
  },
  {
      "idhistorico": 663,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-08-03T21:15:27.573Z",
          "valorTotal": 157101
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-27T19:19:15.343Z"
  },
  {
      "idhistorico": 664,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-07T06:25:13.691Z",
          "valorTotal": 154446
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-17T01:17:21.837Z"
  },
  {
      "idhistorico": 665,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-12T01:47:43.030Z",
          "valorTotal": 113572
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-11T07:38:47.188Z"
  },
  {
      "idhistorico": 666,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-21T03:50:02.198Z",
          "valorTotal": 134254
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-30T10:41:36.978Z"
  },
  {
      "idhistorico": 667,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-04T05:44:49.249Z",
          "valorTotal": 238982
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-06T18:23:14.395Z"
  },
  {
      "idhistorico": 668,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-11T15:12:43.074Z",
          "valorTotal": 102563
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-03T06:49:19.667Z"
  },
  {
      "idhistorico": 669,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-04T00:49:00.695Z",
          "valorTotal": 182006
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-23T16:38:54.236Z"
  },
  {
      "idhistorico": 670,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-03T04:22:30.976Z",
          "valorTotal": 105351
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-10T12:04:59.638Z"
  },
  {
      "idhistorico": 671,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-29T05:22:04.993Z",
          "valorTotal": 171105
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-02T16:14:41.281Z"
  },
  {
      "idhistorico": 672,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-06T06:38:37.180Z",
          "valorTotal": 178290
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-04T15:39:14.685Z"
  },
  {
      "idhistorico": 673,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T04:01:27.653Z",
          "valorTotal": 38261
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T17:35:42.001Z"
  },
  {
      "idhistorico": 674,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-31T12:12:39.459Z",
          "valorTotal": 249271
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-06T07:20:53.449Z"
  },
  {
      "idhistorico": 675,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-17T18:18:30.657Z",
          "valorTotal": 249706
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-17T18:32:41.719Z"
  },
  {
      "idhistorico": 676,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-04T20:08:06.116Z",
          "valorTotal": 223960
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-06T10:01:38.752Z"
  },
  {
      "idhistorico": 677,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-29T16:36:51.563Z",
          "valorTotal": 141734
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-17T08:03:35.280Z"
  },
  {
      "idhistorico": 678,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-13T22:51:39.835Z",
          "valorTotal": 223395
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-22T07:07:19.166Z"
  },
  {
      "idhistorico": 679,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-08T18:57:54.486Z",
          "valorTotal": 234156
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-09T01:06:14.924Z"
  },
  {
      "idhistorico": 680,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-13T14:46:14.910Z",
          "valorTotal": 62829
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T15:38:55.368Z"
  },
  {
      "idhistorico": 681,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-10T06:10:33.374Z",
          "valorTotal": 72715
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-15T01:39:39.178Z"
  },
  {
      "idhistorico": 682,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-14T13:27:48.472Z",
          "valorTotal": 205380
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-01T10:19:04.613Z"
  },
  {
      "idhistorico": 683,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-15T13:23:54.575Z",
          "valorTotal": 161934
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-19T16:36:53.331Z"
  },
  {
      "idhistorico": 684,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-12T14:44:23.748Z",
          "valorTotal": 182388
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T03:29:22.455Z"
  },
  {
      "idhistorico": 685,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-29T04:52:18.756Z",
          "valorTotal": 208286
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-04T19:16:41.963Z"
  },
  {
      "idhistorico": 686,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-24T07:24:54.935Z",
          "valorTotal": 29796
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-13T14:17:07.675Z"
  },
  {
      "idhistorico": 687,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-07T19:09:57.189Z",
          "valorTotal": 36642
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T06:21:43.275Z"
  },
  {
      "idhistorico": 688,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-10T09:28:29.018Z",
          "valorTotal": 164616
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-15T13:24:19.503Z"
  },
  {
      "idhistorico": 689,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-03T15:51:53.799Z",
          "valorTotal": 42567
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-20T06:45:02.577Z"
  },
  {
      "idhistorico": 690,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-15T16:24:25.976Z",
          "valorTotal": 61787
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-03T00:26:57.579Z"
  },
  {
      "idhistorico": 691,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-28T16:54:08.917Z",
          "valorTotal": 100087
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-20T05:53:09.828Z"
  },
  {
      "idhistorico": 692,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-25T13:21:04.296Z",
          "valorTotal": 88905
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T01:34:32.236Z"
  },
  {
      "idhistorico": 693,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-05T15:17:46.513Z",
          "valorTotal": 60836
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-01T08:31:02.926Z"
  },
  {
      "idhistorico": 694,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-02T14:06:27.554Z",
          "valorTotal": 26591
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-09T08:13:09.306Z"
  },
  {
      "idhistorico": 695,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-09T09:32:05.768Z",
          "valorTotal": 244742
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-26T22:30:16.361Z"
  },
  {
      "idhistorico": 696,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-18T12:28:27.769Z",
          "valorTotal": 29892
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T07:13:22.436Z"
  },
  {
      "idhistorico": 697,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-10T05:25:02.911Z",
          "valorTotal": 191881
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-02T23:52:37.681Z"
  },
  {
      "idhistorico": 698,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-01T05:25:33.849Z",
          "valorTotal": 247718
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-17T12:57:57.540Z"
  },
  {
      "idhistorico": 699,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-02T14:32:24.750Z",
          "valorTotal": 151863
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-07T08:40:08.044Z"
  },
  {
      "idhistorico": 700,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-29T03:47:05.888Z",
          "valorTotal": 109270
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-30T06:21:28.862Z"
  },
  {
      "idhistorico": 701,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-17T23:38:43.081Z",
          "valorTotal": 212321
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-12T11:28:40.750Z"
  },
  {
      "idhistorico": 702,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-21T01:34:08.743Z",
          "valorTotal": 133889
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-15T02:17:20.324Z"
  },
  {
      "idhistorico": 703,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-18T23:45:03.631Z",
          "valorTotal": 199874
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T10:19:54.223Z"
  },
  {
      "idhistorico": 704,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-03T06:26:35.350Z",
          "valorTotal": 31971
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-17T13:10:32.489Z"
  },
  {
      "idhistorico": 705,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-08-10T11:56:38.602Z",
          "valorTotal": 63201
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-19T11:38:42.950Z"
  },
  {
      "idhistorico": 706,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-22T03:19:53.651Z",
          "valorTotal": 72306
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-15T23:21:12.704Z"
  },
  {
      "idhistorico": 707,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-27T10:35:52.936Z",
          "valorTotal": 97822
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T08:50:23.287Z"
  },
  {
      "idhistorico": 708,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-17T14:33:54.023Z",
          "valorTotal": 147342
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-13T02:41:27.392Z"
  },
  {
      "idhistorico": 709,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-23T10:20:41.716Z",
          "valorTotal": 213250
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-18T05:02:04.582Z"
  },
  {
      "idhistorico": 710,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-02T03:05:39.236Z",
          "valorTotal": 181456
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-26T12:11:45.904Z"
  },
  {
      "idhistorico": 711,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-28T20:21:51.149Z",
          "valorTotal": 229334
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-05T06:08:30.431Z"
  },
  {
      "idhistorico": 712,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-27T10:03:30.183Z",
          "valorTotal": 174603
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-22T10:13:49.959Z"
  },
  {
      "idhistorico": 713,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-29T06:00:14.930Z",
          "valorTotal": 68195
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-21T01:36:19.420Z"
  },
  {
      "idhistorico": 714,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-08-10T06:37:21.328Z",
          "valorTotal": 228194
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-28T00:33:52.708Z"
  },
  {
      "idhistorico": 715,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-02T08:20:56.824Z",
          "valorTotal": 55328
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-13T09:59:02.100Z"
  },
  {
      "idhistorico": 716,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-10T17:57:48.490Z",
          "valorTotal": 80544
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-22T11:52:49.533Z"
  },
  {
      "idhistorico": 717,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-08T13:12:02.599Z",
          "valorTotal": 161004
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-14T05:48:33.414Z"
  },
  {
      "idhistorico": 718,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-11T04:54:56.904Z",
          "valorTotal": 108090
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-06T03:30:29.038Z"
  },
  {
      "idhistorico": 719,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-19T23:24:41.482Z",
          "valorTotal": 226779
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-19T13:48:05.155Z"
  },
  {
      "idhistorico": 720,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-03T15:12:27.311Z",
          "valorTotal": 71307
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-17T01:08:11.289Z"
  },
  {
      "idhistorico": 721,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-25T12:11:46.166Z",
          "valorTotal": 108711
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-07T13:25:30.941Z"
  },
  {
      "idhistorico": 722,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-14T01:14:03.814Z",
          "valorTotal": 104388
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T12:13:32.610Z"
  },
  {
      "idhistorico": 723,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-14T12:13:05.570Z",
          "valorTotal": 80552
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-16T19:28:09.232Z"
  },
  {
      "idhistorico": 724,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-24T23:57:51.015Z",
          "valorTotal": 49699
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-30T09:28:03.494Z"
  },
  {
      "idhistorico": 725,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-10T02:17:18.444Z",
          "valorTotal": 84157
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-03T14:03:46.961Z"
  },
  {
      "idhistorico": 726,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-03T20:20:43.552Z",
          "valorTotal": 109312
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-09T01:36:42.906Z"
  },
  {
      "idhistorico": 727,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-16T18:03:25.270Z",
          "valorTotal": 47992
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-27T00:05:10.152Z"
  },
  {
      "idhistorico": 728,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-22T02:19:21.919Z",
          "valorTotal": 152316
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-08T19:58:31.610Z"
  },
  {
      "idhistorico": 729,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-01T15:58:27.406Z",
          "valorTotal": 167337
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-19T16:19:57.228Z"
  },
  {
      "idhistorico": 730,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-30T17:37:09.476Z",
          "valorTotal": 187318
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-25T03:30:10.934Z"
  },
  {
      "idhistorico": 731,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-15T15:39:21.452Z",
          "valorTotal": 54972
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-17T09:18:49.149Z"
  },
  {
      "idhistorico": 732,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-26T19:32:56.671Z",
          "valorTotal": 49951
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-21T06:41:15.631Z"
  },
  {
      "idhistorico": 733,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-12T06:32:33.876Z",
          "valorTotal": 80299
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-01T15:12:21.850Z"
  },
  {
      "idhistorico": 734,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-26T14:18:59.837Z",
          "valorTotal": 27994
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-18T22:07:48.762Z"
  },
  {
      "idhistorico": 735,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-09T19:10:37.988Z",
          "valorTotal": 28008
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-08T03:38:37.292Z"
  },
  {
      "idhistorico": 736,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-28T02:18:36.211Z",
          "valorTotal": 87847
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-11T08:38:06.824Z"
  },
  {
      "idhistorico": 737,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-03T00:23:21.399Z",
          "valorTotal": 79644
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-23T16:09:19.210Z"
  },
  {
      "idhistorico": 738,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-27T14:13:04.447Z",
          "valorTotal": 134202
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-30T18:01:50.969Z"
  },
  {
      "idhistorico": 739,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-15T23:41:52.144Z",
          "valorTotal": 157515
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-09T14:09:41.111Z"
  },
  {
      "idhistorico": 740,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-17T20:29:28.449Z",
          "valorTotal": 199025
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-22T05:32:00.171Z"
  },
  {
      "idhistorico": 741,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-17T06:16:47.843Z",
          "valorTotal": 248590
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-16T21:57:28.942Z"
  },
  {
      "idhistorico": 742,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-04T21:37:16.533Z",
          "valorTotal": 189880
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-28T04:36:00.788Z"
  },
  {
      "idhistorico": 743,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-14T17:39:29.075Z",
          "valorTotal": 37238
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-20T10:30:50.028Z"
  },
  {
      "idhistorico": 744,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-14T13:22:12.290Z",
          "valorTotal": 183153
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-16T10:48:07.822Z"
  },
  {
      "idhistorico": 745,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-29T12:10:03.246Z",
          "valorTotal": 112367
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-18T06:29:09.560Z"
  },
  {
      "idhistorico": 746,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-01T16:06:55.224Z",
          "valorTotal": 178772
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-29T14:55:34.290Z"
  },
  {
      "idhistorico": 747,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-22T03:35:52.903Z",
          "valorTotal": 106922
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-21T05:09:06.370Z"
  },
  {
      "idhistorico": 748,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-11T09:58:22.639Z",
          "valorTotal": 187407
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-03T22:54:17.522Z"
  },
  {
      "idhistorico": 749,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-19T19:09:05.303Z",
          "valorTotal": 116186
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-03T11:51:29.937Z"
  },
  {
      "idhistorico": 750,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-20T09:50:31.686Z",
          "valorTotal": 24958
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-08T23:03:57.906Z"
  },
  {
      "idhistorico": 751,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-08-01T10:09:05.848Z",
          "valorTotal": 182479
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T21:34:05.079Z"
  },
  {
      "idhistorico": 752,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-30T10:19:11.884Z",
          "valorTotal": 21960
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-24T10:12:17.335Z"
  },
  {
      "idhistorico": 753,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-09T18:15:19.732Z",
          "valorTotal": 89849
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-01T10:34:29.103Z"
  },
  {
      "idhistorico": 754,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-23T13:42:13.137Z",
          "valorTotal": 57431
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-17T16:45:51.790Z"
  },
  {
      "idhistorico": 755,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-07T20:28:18.326Z",
          "valorTotal": 76455
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-15T07:48:45.090Z"
  },
  {
      "idhistorico": 756,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-31T00:48:09.820Z",
          "valorTotal": 79113
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-15T20:53:00.743Z"
  },
  {
      "idhistorico": 757,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-16T01:39:55.440Z",
          "valorTotal": 51922
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-19T13:30:52.236Z"
  },
  {
      "idhistorico": 758,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-16T15:28:05.691Z",
          "valorTotal": 189210
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-23T15:43:00.013Z"
  },
  {
      "idhistorico": 759,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-22T20:07:45.793Z",
          "valorTotal": 212003
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-20T03:32:36.367Z"
  },
  {
      "idhistorico": 760,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-23T06:54:51.769Z",
          "valorTotal": 241225
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-22T19:49:58.146Z"
  },
  {
      "idhistorico": 761,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-12T08:57:45.044Z",
          "valorTotal": 223096
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-27T21:20:57.868Z"
  },
  {
      "idhistorico": 762,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-29T03:59:54.762Z",
          "valorTotal": 117015
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-09T19:39:04.811Z"
  },
  {
      "idhistorico": 763,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-18T20:53:26.588Z",
          "valorTotal": 203408
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-29T00:55:51.780Z"
  },
  {
      "idhistorico": 764,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-29T08:12:44.351Z",
          "valorTotal": 179550
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-28T22:03:42.247Z"
  },
  {
      "idhistorico": 765,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-17T23:09:26.583Z",
          "valorTotal": 27115
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-04T22:03:42.129Z"
  },
  {
      "idhistorico": 766,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-02T23:33:14.746Z",
          "valorTotal": 227412
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-18T01:46:43.625Z"
  },
  {
      "idhistorico": 767,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-12T19:35:11.965Z",
          "valorTotal": 181386
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-18T09:34:20.351Z"
  },
  {
      "idhistorico": 768,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-05T23:46:49.266Z",
          "valorTotal": 213155
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-08T01:37:19.066Z"
  },
  {
      "idhistorico": 769,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-08-04T08:12:01.204Z",
          "valorTotal": 109522
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-10T19:28:21.049Z"
  },
  {
      "idhistorico": 770,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-24T10:48:30.862Z",
          "valorTotal": 241623
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-29T22:45:25.162Z"
  },
  {
      "idhistorico": 771,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-03T21:12:17.314Z",
          "valorTotal": 112003
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T16:57:41.171Z"
  },
  {
      "idhistorico": 772,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-25T02:33:49.647Z",
          "valorTotal": 180903
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-13T12:26:01.995Z"
  },
  {
      "idhistorico": 773,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-23T01:20:46.435Z",
          "valorTotal": 32887
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-13T09:05:47.161Z"
  },
  {
      "idhistorico": 774,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-08T01:59:51.604Z",
          "valorTotal": 124131
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-07T12:12:14.416Z"
  },
  {
      "idhistorico": 775,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-14T05:24:18.020Z",
          "valorTotal": 225868
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-26T02:04:24.597Z"
  },
  {
      "idhistorico": 776,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-15T01:00:01.980Z",
          "valorTotal": 61925
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-10T07:38:56.787Z"
  },
  {
      "idhistorico": 777,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-02T23:43:38.778Z",
          "valorTotal": 135096
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-27T14:55:23.280Z"
  },
  {
      "idhistorico": 778,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-03T19:48:44.774Z",
          "valorTotal": 157769
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-19T20:42:07.901Z"
  },
  {
      "idhistorico": 779,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-24T15:31:28.888Z",
          "valorTotal": 148413
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-14T16:35:48.279Z"
  },
  {
      "idhistorico": 780,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-29T18:03:01.559Z",
          "valorTotal": 55937
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-17T04:19:36.888Z"
  },
  {
      "idhistorico": 781,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-18T16:46:31.093Z",
          "valorTotal": 150953
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-02T15:55:40.547Z"
  },
  {
      "idhistorico": 782,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-04T22:31:04.770Z",
          "valorTotal": 188739
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-30T23:58:05.841Z"
  },
  {
      "idhistorico": 783,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-09T15:51:34.914Z",
          "valorTotal": 178894
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-14T22:12:41.162Z"
  },
  {
      "idhistorico": 784,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-14T20:03:27.264Z",
          "valorTotal": 108203
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-17T01:03:42.691Z"
  },
  {
      "idhistorico": 785,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-16T23:29:29.653Z",
          "valorTotal": 139056
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-13T14:38:04.521Z"
  },
  {
      "idhistorico": 786,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-12T15:32:23.191Z",
          "valorTotal": 125995
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-26T06:13:02.522Z"
  },
  {
      "idhistorico": 787,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-09T18:05:38.631Z",
          "valorTotal": 65082
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-28T03:21:17.366Z"
  },
  {
      "idhistorico": 788,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-19T01:48:08.038Z",
          "valorTotal": 126550
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-22T22:25:56.934Z"
  },
  {
      "idhistorico": 789,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-07T06:39:27.269Z",
          "valorTotal": 170687
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-04T10:34:03.280Z"
  },
  {
      "idhistorico": 790,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-08T04:05:33.303Z",
          "valorTotal": 88475
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-12T17:53:33.602Z"
  },
  {
      "idhistorico": 791,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-28T23:32:35.202Z",
          "valorTotal": 220100
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-06T18:32:39.294Z"
  },
  {
      "idhistorico": 792,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-07T16:47:17.450Z",
          "valorTotal": 75414
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-29T06:34:29.143Z"
  },
  {
      "idhistorico": 793,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-12T16:53:47.384Z",
          "valorTotal": 196068
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T10:21:33.841Z"
  },
  {
      "idhistorico": 794,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-08T18:50:02.778Z",
          "valorTotal": 56577
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-02T01:33:11.967Z"
  },
  {
      "idhistorico": 795,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-14T13:51:13.848Z",
          "valorTotal": 158158
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-21T04:48:44.856Z"
  },
  {
      "idhistorico": 796,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-28T20:05:04.691Z",
          "valorTotal": 246030
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-09T04:02:16.995Z"
  },
  {
      "idhistorico": 797,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-25T06:08:21.376Z",
          "valorTotal": 220397
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T15:25:30.434Z"
  },
  {
      "idhistorico": 798,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-19T22:47:45.739Z",
          "valorTotal": 193571
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-12T19:39:48.354Z"
  },
  {
      "idhistorico": 799,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-11T23:24:09.414Z",
          "valorTotal": 47757
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-24T16:31:20.452Z"
  },
  {
      "idhistorico": 800,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-04T02:03:38.093Z",
          "valorTotal": 65419
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-28T00:13:57.268Z"
  },
  {
      "idhistorico": 801,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-09T23:03:12.271Z",
          "valorTotal": 37915
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-20T09:43:56.727Z"
  },
  {
      "idhistorico": 802,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-12T07:59:50.509Z",
          "valorTotal": 40630
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-10T01:43:11.159Z"
  },
  {
      "idhistorico": 803,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-17T12:11:03.116Z",
          "valorTotal": 196822
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-14T00:09:30.024Z"
  },
  {
      "idhistorico": 804,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-16T00:51:21.242Z",
          "valorTotal": 176434
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-06T21:19:02.256Z"
  },
  {
      "idhistorico": 805,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-20T21:01:34.890Z",
          "valorTotal": 193942
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-21T11:39:58.145Z"
  },
  {
      "idhistorico": 806,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-24T02:01:57.392Z",
          "valorTotal": 179634
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-08T22:35:34.001Z"
  },
  {
      "idhistorico": 807,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-06T17:11:04.986Z",
          "valorTotal": 241437
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-02T20:43:28.541Z"
  },
  {
      "idhistorico": 808,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-14T02:57:34.854Z",
          "valorTotal": 107394
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-29T00:50:03.629Z"
  },
  {
      "idhistorico": 809,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-23T02:29:49.133Z",
          "valorTotal": 160285
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-25T14:33:01.804Z"
  },
  {
      "idhistorico": 810,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-01T13:11:29.084Z",
          "valorTotal": 26239
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-14T09:37:07.705Z"
  },
  {
      "idhistorico": 811,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-29T21:23:45.361Z",
          "valorTotal": 61312
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-03T23:13:34.951Z"
  },
  {
      "idhistorico": 812,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-31T21:28:04.374Z",
          "valorTotal": 45434
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-23T15:00:34.721Z"
  },
  {
      "idhistorico": 813,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-29T04:46:44.825Z",
          "valorTotal": 82201
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-24T09:11:19.478Z"
  },
  {
      "idhistorico": 814,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-28T10:50:37.094Z",
          "valorTotal": 20792
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-14T02:45:10.633Z"
  },
  {
      "idhistorico": 815,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-17T06:31:01.499Z",
          "valorTotal": 221987
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-27T10:32:28.489Z"
  },
  {
      "idhistorico": 816,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-15T04:38:08.062Z",
          "valorTotal": 218150
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-08T17:16:45.342Z"
  },
  {
      "idhistorico": 817,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-07T21:35:13.088Z",
          "valorTotal": 124307
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T20:51:18.545Z"
  },
  {
      "idhistorico": 818,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-02T12:34:01.431Z",
          "valorTotal": 45987
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-05T16:11:24.371Z"
  },
  {
      "idhistorico": 819,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-30T23:51:40.047Z",
          "valorTotal": 79680
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-02T11:01:18.037Z"
  },
  {
      "idhistorico": 820,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-10T02:49:43.014Z",
          "valorTotal": 133385
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T00:05:03.068Z"
  },
  {
      "idhistorico": 821,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-22T10:05:27.488Z",
          "valorTotal": 46366
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-09T02:32:15.948Z"
  },
  {
      "idhistorico": 822,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-16T15:28:12.741Z",
          "valorTotal": 170977
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-22T17:21:39.184Z"
  },
  {
      "idhistorico": 823,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-02T00:38:28.212Z",
          "valorTotal": 132262
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-08T02:57:38.125Z"
  },
  {
      "idhistorico": 824,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-05T02:48:37.475Z",
          "valorTotal": 192714
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-09T02:49:23.096Z"
  },
  {
      "idhistorico": 825,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-12T01:53:34.870Z",
          "valorTotal": 231876
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-03T22:45:06.715Z"
  },
  {
      "idhistorico": 826,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-04T14:55:04.299Z",
          "valorTotal": 225021
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-19T09:57:36.231Z"
  },
  {
      "idhistorico": 827,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-24T13:42:41.016Z",
          "valorTotal": 105834
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-17T11:28:19.630Z"
  },
  {
      "idhistorico": 828,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-07T03:23:36.974Z",
          "valorTotal": 206977
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-08T07:29:22.449Z"
  },
  {
      "idhistorico": 829,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-13T04:55:36.114Z",
          "valorTotal": 222889
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-30T01:43:08.981Z"
  },
  {
      "idhistorico": 830,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-10T07:20:53.855Z",
          "valorTotal": 214622
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T18:48:22.089Z"
  },
  {
      "idhistorico": 831,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-21T10:42:24.000Z",
          "valorTotal": 136655
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-01T17:30:26.427Z"
  },
  {
      "idhistorico": 832,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-18T15:17:25.246Z",
          "valorTotal": 245113
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-08T12:03:12.976Z"
  },
  {
      "idhistorico": 833,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-18T06:47:04.751Z",
          "valorTotal": 160814
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-23T02:11:30.070Z"
  },
  {
      "idhistorico": 834,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-16T18:03:34.786Z",
          "valorTotal": 33543
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-13T13:39:12.580Z"
  },
  {
      "idhistorico": 835,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-16T03:58:21.934Z",
          "valorTotal": 114915
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-06T13:54:51.451Z"
  },
  {
      "idhistorico": 836,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-12T04:57:17.117Z",
          "valorTotal": 157023
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-31T16:13:18.050Z"
  },
  {
      "idhistorico": 837,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-04T22:56:22.478Z",
          "valorTotal": 213890
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-12T23:45:30.664Z"
  },
  {
      "idhistorico": 838,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-15T05:10:15.860Z",
          "valorTotal": 153102
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-28T19:53:56.075Z"
  },
  {
      "idhistorico": 839,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-07T10:54:43.642Z",
          "valorTotal": 64106
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-18T18:04:11.708Z"
  },
  {
      "idhistorico": 840,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-08-05T05:43:33.793Z",
          "valorTotal": 245593
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-25T19:48:55.396Z"
  },
  {
      "idhistorico": 841,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-07T03:32:09.745Z",
          "valorTotal": 55538
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-16T01:45:35.894Z"
  },
  {
      "idhistorico": 842,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-19T08:36:41.388Z",
          "valorTotal": 205382
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T14:24:57.088Z"
  },
  {
      "idhistorico": 843,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-07T16:49:15.052Z",
          "valorTotal": 109235
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-11T11:54:38.551Z"
  },
  {
      "idhistorico": 844,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-03T18:08:03.830Z",
          "valorTotal": 192790
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-20T18:42:12.720Z"
  },
  {
      "idhistorico": 845,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-10T03:32:38.979Z",
          "valorTotal": 106985
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-27T23:22:39.982Z"
  },
  {
      "idhistorico": 846,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-17T09:27:47.124Z",
          "valorTotal": 59609
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-16T11:10:41.330Z"
  },
  {
      "idhistorico": 847,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-10T17:51:21.579Z",
          "valorTotal": 196412
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-22T16:53:28.914Z"
  },
  {
      "idhistorico": 848,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-17T09:18:04.996Z",
          "valorTotal": 73593
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-08T15:52:54.135Z"
  },
  {
      "idhistorico": 849,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-18T14:51:21.682Z",
          "valorTotal": 50765
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-11T08:05:19.768Z"
  },
  {
      "idhistorico": 850,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T01:11:58.193Z",
          "valorTotal": 131178
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-11T03:52:25.103Z"
  },
  {
      "idhistorico": 851,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-02-18T04:48:23.144Z",
          "valorTotal": 240482
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-29T20:56:32.702Z"
  },
  {
      "idhistorico": 852,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-17T14:03:29.741Z",
          "valorTotal": 116383
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-03T01:41:17.904Z"
  },
  {
      "idhistorico": 853,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-09T22:15:27.541Z",
          "valorTotal": 77544
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-01T19:34:10.800Z"
  },
  {
      "idhistorico": 854,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-16T13:11:21.720Z",
          "valorTotal": 147813
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-22T14:52:11.423Z"
  },
  {
      "idhistorico": 855,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-01T10:40:39.983Z",
          "valorTotal": 99267
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-30T15:23:36.930Z"
  },
  {
      "idhistorico": 856,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-12T15:04:59.509Z",
          "valorTotal": 156735
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-20T20:58:58.975Z"
  },
  {
      "idhistorico": 857,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-06T23:12:40.783Z",
          "valorTotal": 192556
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-18T07:52:46.634Z"
  },
  {
      "idhistorico": 858,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-18T12:06:44.711Z",
          "valorTotal": 72234
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-21T14:01:01.473Z"
  },
  {
      "idhistorico": 859,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-11T23:11:09.745Z",
          "valorTotal": 180681
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-14T13:47:23.439Z"
  },
  {
      "idhistorico": 860,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-16T06:38:37.007Z",
          "valorTotal": 116758
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-23T01:38:43.895Z"
  },
  {
      "idhistorico": 861,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-17T19:34:55.137Z",
          "valorTotal": 192319
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-18T20:37:36.716Z"
  },
  {
      "idhistorico": 862,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-07T21:15:02.424Z",
          "valorTotal": 155654
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-13T04:20:35.006Z"
  },
  {
      "idhistorico": 863,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-11T03:27:26.044Z",
          "valorTotal": 235808
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-16T07:32:45.704Z"
  },
  {
      "idhistorico": 864,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-19T17:59:04.158Z",
          "valorTotal": 48479
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-03T02:25:42.292Z"
  },
  {
      "idhistorico": 865,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-18T02:47:20.478Z",
          "valorTotal": 230776
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T06:52:58.138Z"
  },
  {
      "idhistorico": 866,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-27T01:22:30.888Z",
          "valorTotal": 88201
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-16T23:03:39.429Z"
  },
  {
      "idhistorico": 867,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-03-23T15:10:49.161Z",
          "valorTotal": 79045
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-16T21:52:30.961Z"
  },
  {
      "idhistorico": 868,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-11T00:12:39.022Z",
          "valorTotal": 135928
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-17T05:30:11.225Z"
  },
  {
      "idhistorico": 869,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-20T07:57:45.672Z",
          "valorTotal": 83958
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-04T09:23:35.595Z"
  },
  {
      "idhistorico": 870,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-16T00:34:55.804Z",
          "valorTotal": 143178
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-20T02:11:16.608Z"
  },
  {
      "idhistorico": 871,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-31T16:33:10.113Z",
          "valorTotal": 42087
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-12T07:07:14.972Z"
  },
  {
      "idhistorico": 872,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-08T12:49:08.827Z",
          "valorTotal": 48103
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-11T05:56:18.220Z"
  },
  {
      "idhistorico": 873,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-18T17:52:33.418Z",
          "valorTotal": 27039
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-12T22:53:51.140Z"
  },
  {
      "idhistorico": 874,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-17T15:16:48.130Z",
          "valorTotal": 92889
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-25T09:41:04.916Z"
  },
  {
      "idhistorico": 875,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-29T02:24:56.745Z",
          "valorTotal": 57751
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-05T15:08:55.412Z"
  },
  {
      "idhistorico": 876,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-21T05:59:38.531Z",
          "valorTotal": 62298
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-02T01:40:48.232Z"
  },
  {
      "idhistorico": 877,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-13T18:47:48.829Z",
          "valorTotal": 179682
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-23T21:42:30.337Z"
  },
  {
      "idhistorico": 878,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-05T22:41:20.550Z",
          "valorTotal": 204474
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-27T14:02:47.557Z"
  },
  {
      "idhistorico": 879,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-14T05:58:24.763Z",
          "valorTotal": 192961
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-20T07:22:34.494Z"
  },
  {
      "idhistorico": 880,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-14T21:41:58.416Z",
          "valorTotal": 34278
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T12:05:15.713Z"
  },
  {
      "idhistorico": 881,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-06T15:56:59.795Z",
          "valorTotal": 187545
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-25T02:09:31.763Z"
  },
  {
      "idhistorico": 882,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-01T20:35:39.174Z",
          "valorTotal": 151272
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-19T20:53:18.287Z"
  },
  {
      "idhistorico": 883,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-02-11T20:46:35.140Z",
          "valorTotal": 64688
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-03T07:55:54.774Z"
  },
  {
      "idhistorico": 884,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-21T06:12:02.591Z",
          "valorTotal": 165468
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T15:34:39.756Z"
  },
  {
      "idhistorico": 885,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-19T15:16:44.128Z",
          "valorTotal": 120405
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-05T21:29:36.088Z"
  },
  {
      "idhistorico": 886,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-28T11:10:01.365Z",
          "valorTotal": 225104
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-16T20:32:46.201Z"
  },
  {
      "idhistorico": 887,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-16T06:06:59.370Z",
          "valorTotal": 187395
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-23T15:11:45.029Z"
  },
  {
      "idhistorico": 888,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-08T20:58:17.396Z",
          "valorTotal": 171069
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-29T23:47:44.060Z"
  },
  {
      "idhistorico": 889,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-28T04:24:18.189Z",
          "valorTotal": 89089
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-02T17:16:42.350Z"
  },
  {
      "idhistorico": 890,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-29T07:09:36.249Z",
          "valorTotal": 186946
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-02T03:51:48.354Z"
  },
  {
      "idhistorico": 891,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-18T22:53:23.744Z",
          "valorTotal": 215060
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-25T08:31:42.014Z"
  },
  {
      "idhistorico": 892,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-17T02:50:01.211Z",
          "valorTotal": 209534
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-27T22:45:33.267Z"
  },
  {
      "idhistorico": 893,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-01T23:51:55.523Z",
          "valorTotal": 179444
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-11T20:27:14.233Z"
  },
  {
      "idhistorico": 894,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-07T15:36:04.473Z",
          "valorTotal": 167653
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-28T16:46:13.626Z"
  },
  {
      "idhistorico": 895,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-06T10:02:21.772Z",
          "valorTotal": 140775
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-31T09:28:32.179Z"
  },
  {
      "idhistorico": 896,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-13T21:01:20.149Z",
          "valorTotal": 23458
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-05T18:44:29.135Z"
  },
  {
      "idhistorico": 897,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-26T21:52:55.179Z",
          "valorTotal": 190309
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-10T04:53:18.216Z"
  },
  {
      "idhistorico": 898,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-22T13:49:07.480Z",
          "valorTotal": 165399
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-13T11:49:56.684Z"
  },
  {
      "idhistorico": 899,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-14T02:57:41.130Z",
          "valorTotal": 164989
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-01T09:02:57.732Z"
  },
  {
      "idhistorico": 900,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-02T02:55:23.270Z",
          "valorTotal": 237757
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-14T22:10:50.369Z"
  },
  {
      "idhistorico": 901,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-13T17:09:28.111Z",
          "valorTotal": 72564
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-17T16:07:47.721Z"
  },
  {
      "idhistorico": 902,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-25T07:21:07.196Z",
          "valorTotal": 226287
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-07T18:50:16.885Z"
  },
  {
      "idhistorico": 903,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-09T18:33:03.562Z",
          "valorTotal": 157936
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-06T06:45:27.756Z"
  },
  {
      "idhistorico": 904,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-15T10:08:53.820Z",
          "valorTotal": 56092
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-27T03:26:40.013Z"
  },
  {
      "idhistorico": 905,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-29T05:24:44.766Z",
          "valorTotal": 40804
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-04T22:52:53.521Z"
  },
  {
      "idhistorico": 906,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-04T11:28:29.652Z",
          "valorTotal": 183142
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-12T19:07:59.871Z"
  },
  {
      "idhistorico": 907,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-08-08T09:00:46.629Z",
          "valorTotal": 179970
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-22T08:10:01.765Z"
  },
  {
      "idhistorico": 908,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-22T08:28:06.258Z",
          "valorTotal": 65627
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-24T09:21:24.615Z"
  },
  {
      "idhistorico": 909,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-14T05:14:18.025Z",
          "valorTotal": 140361
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-21T15:39:17.227Z"
  },
  {
      "idhistorico": 910,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-18T00:54:21.077Z",
          "valorTotal": 213545
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-20T04:40:19.369Z"
  },
  {
      "idhistorico": 911,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-03T11:52:39.402Z",
          "valorTotal": 203364
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-01T23:52:31.589Z"
  },
  {
      "idhistorico": 912,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-07T21:09:25.723Z",
          "valorTotal": 49524
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-23T12:28:01.729Z"
  },
  {
      "idhistorico": 913,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-11T22:25:32.561Z",
          "valorTotal": 174801
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-19T17:31:09.937Z"
  },
  {
      "idhistorico": 914,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-10T11:41:14.966Z",
          "valorTotal": 97110
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-21T21:23:49.504Z"
  },
  {
      "idhistorico": 915,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-24T08:06:34.571Z",
          "valorTotal": 53046
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-13T16:33:12.596Z"
  },
  {
      "idhistorico": 916,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T19:14:17.648Z",
          "valorTotal": 64110
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-22T07:47:06.425Z"
  },
  {
      "idhistorico": 917,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-04-25T15:08:03.462Z",
          "valorTotal": 137696
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-24T11:57:20.490Z"
  },
  {
      "idhistorico": 918,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-27T14:51:58.025Z",
          "valorTotal": 107268
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-10T01:11:25.009Z"
  },
  {
      "idhistorico": 919,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-22T11:27:55.339Z",
          "valorTotal": 92422
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-22T02:52:40.354Z"
  },
  {
      "idhistorico": 920,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-09T12:46:16.929Z",
          "valorTotal": 148937
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-21T22:25:53.564Z"
  },
  {
      "idhistorico": 921,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-06-16T18:52:56.645Z",
          "valorTotal": 193093
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-31T23:25:45.448Z"
  },
  {
      "idhistorico": 922,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-28T11:30:05.028Z",
          "valorTotal": 244452
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-17T14:03:08.197Z"
  },
  {
      "idhistorico": 923,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-22T21:04:30.667Z",
          "valorTotal": 112621
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-18T16:07:14.195Z"
  },
  {
      "idhistorico": 924,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-07T07:56:09.024Z",
          "valorTotal": 224538
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-01T16:10:36.705Z"
  },
  {
      "idhistorico": 925,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-25T07:39:25.074Z",
          "valorTotal": 241960
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-24T23:45:59.782Z"
  },
  {
      "idhistorico": 926,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-20T09:24:35.384Z",
          "valorTotal": 185095
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-21T06:32:47.033Z"
  },
  {
      "idhistorico": 927,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-10T23:21:53.496Z",
          "valorTotal": 91691
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T22:22:43.702Z"
  },
  {
      "idhistorico": 928,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-06T08:12:14.685Z",
          "valorTotal": 130804
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-31T10:34:32.229Z"
  },
  {
      "idhistorico": 929,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-13T23:10:09.578Z",
          "valorTotal": 73955
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-26T23:15:33.188Z"
  },
  {
      "idhistorico": 930,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-14T04:11:00.745Z",
          "valorTotal": 84355
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-04T09:23:31.768Z"
  },
  {
      "idhistorico": 931,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-06T02:21:59.055Z",
          "valorTotal": 146757
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-31T12:39:02.814Z"
  },
  {
      "idhistorico": 932,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-19T16:07:46.429Z",
          "valorTotal": 185720
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-10T08:11:17.434Z"
  },
  {
      "idhistorico": 933,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-27T12:44:10.791Z",
          "valorTotal": 243846
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T03:46:39.142Z"
  },
  {
      "idhistorico": 934,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-21T18:25:00.115Z",
          "valorTotal": 194039
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-29T08:27:24.776Z"
  },
  {
      "idhistorico": 935,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-02-18T15:16:23.312Z",
          "valorTotal": 243826
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-18T21:33:26.568Z"
  },
  {
      "idhistorico": 936,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T23:40:15.611Z",
          "valorTotal": 32716
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-10T02:06:16.013Z"
  },
  {
      "idhistorico": 937,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-30T12:23:38.830Z",
          "valorTotal": 97051
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-28T17:50:55.122Z"
  },
  {
      "idhistorico": 938,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-20T13:17:55.121Z",
          "valorTotal": 248017
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-16T02:19:09.587Z"
  },
  {
      "idhistorico": 939,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-03T09:54:14.330Z",
          "valorTotal": 21723
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-05T01:36:13.554Z"
  },
  {
      "idhistorico": 940,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-29T11:35:07.600Z",
          "valorTotal": 93118
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-02T04:28:30.483Z"
  },
  {
      "idhistorico": 941,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-07T03:39:32.980Z",
          "valorTotal": 168908
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-31T20:56:25.239Z"
  },
  {
      "idhistorico": 942,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-12T20:23:42.503Z",
          "valorTotal": 97073
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T00:46:12.044Z"
  },
  {
      "idhistorico": 943,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-16T09:48:41.425Z",
          "valorTotal": 224859
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-08T07:39:21.960Z"
  },
  {
      "idhistorico": 944,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-26T14:24:06.127Z",
          "valorTotal": 144442
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-13T03:34:27.507Z"
  },
  {
      "idhistorico": 945,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-05T17:49:01.121Z",
          "valorTotal": 93377
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-20T01:06:19.124Z"
  },
  {
      "idhistorico": 946,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-21T23:08:48.153Z",
          "valorTotal": 91268
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-10T06:21:44.444Z"
  },
  {
      "idhistorico": 947,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-17T04:38:05.910Z",
          "valorTotal": 145648
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T11:40:03.134Z"
  },
  {
      "idhistorico": 948,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-25T21:52:18.224Z",
          "valorTotal": 118348
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-05T04:31:30.175Z"
  },
  {
      "idhistorico": 949,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-04T08:23:09.718Z",
          "valorTotal": 134469
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-13T14:22:06.963Z"
  },
  {
      "idhistorico": 950,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-06T21:03:03.053Z",
          "valorTotal": 175788
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-01T17:53:09.689Z"
  },
  {
      "idhistorico": 951,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-21T14:13:06.497Z",
          "valorTotal": 135928
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-25T09:21:23.084Z"
  },
  {
      "idhistorico": 952,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-11T12:15:15.167Z",
          "valorTotal": 75807
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T05:29:02.704Z"
  },
  {
      "idhistorico": 953,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-31T04:08:27.400Z",
          "valorTotal": 116093
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-20T10:23:32.521Z"
  },
  {
      "idhistorico": 954,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-02T08:46:42.360Z",
          "valorTotal": 52344
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-11T16:02:48.859Z"
  },
  {
      "idhistorico": 955,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-05T19:41:36.342Z",
          "valorTotal": 204688
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-21T12:31:01.352Z"
  },
  {
      "idhistorico": 956,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-14T20:45:43.682Z",
          "valorTotal": 138001
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-24T21:45:06.061Z"
  },
  {
      "idhistorico": 957,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-05T15:58:20.880Z",
          "valorTotal": 148444
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-24T19:03:41.973Z"
  },
  {
      "idhistorico": 958,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-15T23:15:17.147Z",
          "valorTotal": 87628
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-02T14:29:22.230Z"
  },
  {
      "idhistorico": 959,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-28T12:00:22.783Z",
          "valorTotal": 41214
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-05T22:33:52.819Z"
  },
  {
      "idhistorico": 960,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-16T08:15:05.865Z",
          "valorTotal": 47034
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-08T03:12:44.520Z"
  },
  {
      "idhistorico": 961,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-06T16:32:07.358Z",
          "valorTotal": 236029
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-24T13:30:39.122Z"
  },
  {
      "idhistorico": 962,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-08T11:05:11.915Z",
          "valorTotal": 213117
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-25T07:10:25.397Z"
  },
  {
      "idhistorico": 963,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-07T18:18:19.817Z",
          "valorTotal": 21402
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-05T18:11:46.953Z"
  },
  {
      "idhistorico": 964,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-27T14:37:21.507Z",
          "valorTotal": 178129
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-03T01:47:57.828Z"
  },
  {
      "idhistorico": 965,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-03T20:24:45.636Z",
          "valorTotal": 91446
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T15:56:20.707Z"
  },
  {
      "idhistorico": 966,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-04T07:53:34.868Z",
          "valorTotal": 96877
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-23T10:02:37.349Z"
  },
  {
      "idhistorico": 967,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-03-09T13:08:25.240Z",
          "valorTotal": 232765
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-25T07:18:40.516Z"
  },
  {
      "idhistorico": 968,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-24T09:13:44.201Z",
          "valorTotal": 188471
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-10T16:32:59.357Z"
  },
  {
      "idhistorico": 969,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-14T05:25:10.636Z",
          "valorTotal": 122489
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-22T15:23:32.591Z"
  },
  {
      "idhistorico": 970,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-17T09:34:52.989Z",
          "valorTotal": 108868
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-05T15:35:59.835Z"
  },
  {
      "idhistorico": 971,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-12T14:24:19.602Z",
          "valorTotal": 201590
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-26T13:13:27.186Z"
  },
  {
      "idhistorico": 972,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-18T06:23:17.390Z",
          "valorTotal": 138230
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-01T00:37:37.620Z"
  },
  {
      "idhistorico": 973,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-28T10:43:33.716Z",
          "valorTotal": 46375
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T04:04:40.201Z"
  },
  {
      "idhistorico": 974,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-19T04:14:37.294Z",
          "valorTotal": 105860
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-27T01:21:09.335Z"
  },
  {
      "idhistorico": 975,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-11T05:14:52.294Z",
          "valorTotal": 65863
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-04T03:29:09.468Z"
  },
  {
      "idhistorico": 976,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-07T07:28:52.123Z",
          "valorTotal": 204588
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-28T11:46:32.607Z"
  },
  {
      "idhistorico": 977,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-08-09T15:18:09.731Z",
          "valorTotal": 145323
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T09:41:14.653Z"
  },
  {
      "idhistorico": 978,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-07-30T19:12:21.137Z",
          "valorTotal": 188227
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-06T15:31:40.819Z"
  },
  {
      "idhistorico": 979,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-12T03:58:20.610Z",
          "valorTotal": 124345
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-12T00:05:18.691Z"
  },
  {
      "idhistorico": 980,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-25T05:57:36.795Z",
          "valorTotal": 192584
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-07T17:47:14.674Z"
  },
  {
      "idhistorico": 981,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-25T15:28:52.803Z",
          "valorTotal": 167015
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-22T21:48:55.064Z"
  },
  {
      "idhistorico": 982,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-31T09:32:10.128Z",
          "valorTotal": 57123
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-22T03:37:54.558Z"
  },
  {
      "idhistorico": 983,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-02-21T10:36:25.601Z",
          "valorTotal": 96912
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-01T18:21:37.471Z"
  },
  {
      "idhistorico": 984,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-26T15:25:50.948Z",
          "valorTotal": 91959
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-28T12:19:41.297Z"
  },
  {
      "idhistorico": 985,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073721",
              "name": "PEDRO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-02T19:27:44.536Z",
          "valorTotal": 166535
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-06T07:58:46.776Z"
  },
  {
      "idhistorico": 986,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-24T19:37:47.791Z",
          "valorTotal": 203786
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-03T19:26:15.388Z"
  },
  {
      "idhistorico": 987,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-25T08:11:51.278Z",
          "valorTotal": 210843
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-28T15:17:57.327Z"
  },
  {
      "idhistorico": 988,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-12T21:01:57.629Z",
          "valorTotal": 142675
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T18:16:00.452Z"
  },
  {
      "idhistorico": 989,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-20T13:23:44.890Z",
          "valorTotal": 209876
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-18T18:33:49.591Z"
  },
  {
      "idhistorico": 990,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-10T04:27:17.329Z",
          "valorTotal": 181775
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T00:19:37.920Z"
  },
  {
      "idhistorico": 991,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-06T19:42:31.438Z",
          "valorTotal": 180665
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T20:16:29.099Z"
  },
  {
      "idhistorico": 992,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-04-19T15:33:16.045Z",
          "valorTotal": 230645
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-04T12:55:39.024Z"
  },
  {
      "idhistorico": 993,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-09T13:55:18.884Z",
          "valorTotal": 75709
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-03T03:22:01.937Z"
  },
  {
      "idhistorico": 994,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073722",
              "name": "JUAN"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-08-04T19:07:15.204Z",
          "valorTotal": 137925
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-08T20:39:16.079Z"
  },
  {
      "idhistorico": 995,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-01T04:40:22.357Z",
          "valorTotal": 98536
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-25T07:12:23.162Z"
  },
  {
      "idhistorico": 996,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-21T00:31:33.481Z",
          "valorTotal": 216527
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-15T00:22:26.751Z"
  },
  {
      "idhistorico": 997,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-25T06:38:51.343Z",
          "valorTotal": 30339
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-01T05:03:36.642Z"
  },
  {
      "idhistorico": 998,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073724",
              "name": "ANA"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-09T16:18:30.170Z",
          "valorTotal": 20492
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-25T19:50:40.136Z"
  },
  {
      "idhistorico": 999,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-04T11:39:59.619Z",
          "valorTotal": 213456
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-13T17:18:17.229Z"
  }
]


export class DevolucionClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super( context, {...options});
  }

  public devoluciones = async (initialDate: Date, 
    finalDate: Date, 
    cc: string,
    orderformid: string,
    status:string, 
    page:Number,
    offset:Number ) => {
    try {

    initialDate= new Date(initialDate)
    finalDate = new Date(finalDate)
     
  
   let items: any[]=[]
   let toRender={ items:items }
   toRender.items = data.filter((element:any)=>
    {
        let initialDateFormated = new Date(initialDate.getFullYear(), initialDate.getMonth(),  initialDate.getDate()).getTime()
        let finalDateFormated = new Date(finalDate.getFullYear(), finalDate.getMonth(),  finalDate.getDate()).getTime()
        let elementDateFormated = element.devolucion.fechacreado.substring(0,10)
        elementDateFormated = elementDateFormated.split("-")
        /*getDate -> Month is 0 indexed*/ 
        elementDateFormated = new Date(elementDateFormated[0], elementDateFormated[1]-1,  elementDateFormated[2]).getTime()
     
     
        if(status!=='Todos')
            return elementDateFormated <= finalDateFormated && elementDateFormated >= initialDateFormated && element.estado == status
        else
            return elementDateFormated <= finalDateFormated && elementDateFormated >= initialDateFormated 
      
    })
    if(cc!=='' && typeof cc!=='undefined' && cc!=='undefined')
    {
        
      toRender.items = toRender.items.filter((element:any)=>{
            
            return element.devolucion.cliente.cedula.toString()===cc.toString()})

    }
    if(orderformid!=='' && typeof orderformid!=='undefined' && orderformid!=='undefined')
    {
      toRender.items = toRender.items.filter((element:any)=>{
            
            return element.devolucion.orderformid.toString()==orderformid.toString()}
        )

    }
    
    
  

    
    console.log(page, offset)
      
    return toRender
      


     


    } catch (error) {

      throw new Error(error)

      };
    }
  }


