# copidrogas-reportlogic
Módulo que presta el servicio de conexión para generar reportes de devoluciones. 

## Proyecto Node 
El proyecto ofrece una interfaz que permite generar una conexión entre MD y cualquier interfaz de usuario, con el objetivo de revisar la información de las solicitudes de devolución solicitadas al MarketPlace y los sellers usuarios del servicio de VTEX. 

La aplicación permite las siguientes solicitudes: 

## GraphQL: 
1. devoluciones: 
    Se deben proveer los siguientes datos: 
     initialDate, finalDate, cc, orderformid, status, sellerId, page, offset
     Las fechas deben recibirse en formato ("mm/dd/yyyy")
     Los demás campos son procesados como String 
     El servicio retorna un array de Objetos de tipo Devolucion: 

                "address",
				"city",
				"date",
				"email",
				"fullRefundPrice",
				"identification",
				"idReturn",
				"name",
				"orderID",
				"products",
				"reason",
				"sellerID",
				"sellerName",
				"state",
                "id"
       

2. historicoDevoluciones: Se encarga de devolver los detalles de una solicitud de devolución a partir de su ID. 
             "date",
             "Commets",
             "attachements",
             "state"


## GET
/viewreport/:hash

Servicio API que permite la descarga de un archivo CSV, a partir de un identificador que llega como hash. 

El servicio solicita los datos al MASTER DATA y crea el archivo para descarga. 

El hash recibido debe tener un id válido

## POST 
/report

Servicio API que permite la creación de un reporte de devoluciones. 
Recibe como parámetros: 
 
1. items: Array de Objetos Devolución, con los datos que serán almacenados en el reporte. 
2. reportFilter: Objeto Filtro que contiene los parámetros de búsqueda del reporte. Se usan como cadena para crear un hash que permita un ID único del reporte. 
3. paginacion: Objeto con datos de paginación para revisar integridad de la información. 

El servicio de creación de reportes realiza las siguientes validaciones: 

a. En cao de que el reporte exista (haya sido solicitado con el mismo filtro, con anterioridad) no se creará un nuevo reporte. Se enviará la notificación al email del contexto vtex que esté solicitando el reporte.

b. En caso de que los datos (items) contengan la información completa del reporte que debe ser generado, se procede a la creación del registro en el Master Data y se almacena con un hash generado por la información del filtro. 

c. En caso de que los datos (items) no contengan la información completa del reporte, se pedirá la información al Master Data y posteriormente se hará el registro del reporte. 



