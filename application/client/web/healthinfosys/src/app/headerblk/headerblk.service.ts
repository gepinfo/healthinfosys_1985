import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class HeaderblkService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllheaderblkValues(data:any){

    return this.http.post(`${this.BaseURL}/headerblk`,data);
  }

  GetAllheaderblkValues(){
    return this.http.get(`${this.BaseURL}/headerblk`);
  }

  Updateheaderblk(data:any){
    return this.http.put(`${this.BaseURL}/headerblk/${data.id}`,data);
  }

  getSpecificheaderblk(id:number){
    return this.http.get(`${this.BaseURL}/headerblk/${id}`);
  }

  getSpecificheaderblkHistory(id:number){
    return this.http.get(`${this.BaseURL}/headerblk/${id}/history?days=30`);
  }

  DeleteheaderblkValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/headerblk/${dataId}`);
  }

  GetEntityById(headerblkId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/headerblkid/` + headerblkId);
  }

  Searchheaderblk(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/headerblk/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}