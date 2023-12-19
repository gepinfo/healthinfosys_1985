import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class MirrorService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllmirrorValues(data:any){

    return this.http.post(`${this.BaseURL}/mirror`,data);
  }

  GetAllmirrorValues(){
    return this.http.get(`${this.BaseURL}/mirror`);
  }

  Updatemirror(data:any){
    return this.http.put(`${this.BaseURL}/mirror/${data.id}`,data);
  }

  getSpecificmirror(id:number){
    return this.http.get(`${this.BaseURL}/mirror/${id}`);
  }

  getSpecificmirrorHistory(id:number){
    return this.http.get(`${this.BaseURL}/mirror/${id}/history?days=30`);
  }

  DeletemirrorValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/mirror/${dataId}`);
  }

  GetEntityById(mirrorId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/mirrorid/` + mirrorId);
  }

  Searchmirror(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/mirror/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}