import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get("assets/data.json");
  
  }
}
