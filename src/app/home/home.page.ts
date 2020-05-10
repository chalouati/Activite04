import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RestapiService} from '../restapi.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 products:any = [];
 
constructor(private httpClient: HttpClient,private restapi:RestapiService) {}

ngOnInit(){

  this.restapi.getProducts().subscribe(data =>{
    console.log(data);
    this.products = data;
  })
}

}
