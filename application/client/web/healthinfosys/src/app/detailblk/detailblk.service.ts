import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DetailblkService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAlldetailblkValues(data:any){

    return this.http.post(`${this.BaseURL}/detailblk`,data);
  }

  GetAlldetailblkValues(){
    return this.http.get(`${this.BaseURL}/detailblk`);
  }

  Updatedetailblk(data:any){
    return this.http.put(`${this.BaseURL}/detailblk/${data.id}`,data);
  }

  getSpecificdetailblk(id:number){
    return this.http.get(`${this.BaseURL}/detailblk/${id}`);
  }

  getSpecificdetailblkHistory(id:number){
    return this.http.get(`${this.BaseURL}/detailblk/${id}/history?days=30`);
  }

  DeletedetailblkValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/detailblk/${dataId}`);
  }

  GetEntityById(detailblkId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/detailblkid/` + detailblkId);
  }

  Searchdetailblk(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/detailblk/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}