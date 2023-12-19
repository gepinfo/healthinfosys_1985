import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class CategoryblkService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllcategoryblkValues(data:any){

    return this.http.post(`${this.BaseURL}/categoryblk`,data);
  }

  GetAllcategoryblkValues(){
    return this.http.get(`${this.BaseURL}/categoryblk`);
  }

  Updatecategoryblk(data:any){
    return this.http.put(`${this.BaseURL}/categoryblk/${data.id}`,data);
  }

  getSpecificcategoryblk(id:number){
    return this.http.get(`${this.BaseURL}/categoryblk/${id}`);
  }

  getSpecificcategoryblkHistory(id:number){
    return this.http.get(`${this.BaseURL}/categoryblk/${id}/history?days=30`);
  }

  DeletecategoryblkValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/categoryblk/${dataId}`);
  }

  GetEntityById(categoryblkId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/categoryblkid/` + categoryblkId);
  }

  Searchcategoryblk(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/categoryblk/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}