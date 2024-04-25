import { HttpHeaders } from "@angular/common/http";



export const environment = {

    hasSession:false,

    baseUrl: 'https://pfagymmanagerbackend-production.up.railway.app/',
    httpOptions : {
        headers:new HttpHeaders({
          'Content-Type': 'application/json'
        })
      },

    production: false
};
