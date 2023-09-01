import { HttpHeaders } from "@angular/common/http";



export const environment = {

    hasSession:false,

    baseUrl: 'https://localhost:7025/',
    httpOptions : {
        headers:new HttpHeaders({
          'Content-Type': 'application/json'
        })
      },

    production: false
};
