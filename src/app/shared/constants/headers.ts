import { HttpHeaders } from "@angular/common/http";

export const api:string = "https://apivieiraveiculos.herokuapp.com";
// export const api:string = "http://localhost:8080";

export const defaultHeaders:HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Headers':'*',
    // 'Access-Control-Allow-Headers': ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept"],
    'Access-Control-Allow-Methods': ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    'Access-Control-Allow-Origin': api
});
