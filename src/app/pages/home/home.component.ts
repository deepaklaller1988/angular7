import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ApiData;
  imageFolder = 'Category';
  constructor(
    public router: Router,
    public GeneralService: GeneralService
  ) { }

  ngOnInit() {

    this.GeneralService.GetProductInfo().subscribe(res=>{
    if(res){
      console.log(res)
      this.ApiData = res['result'];
     for(let i=0;  i < this.ApiData.length; i++ ){
      this.imageFolder =  this.imageFolder + this.ApiData[i].CategoryID
     }
      console.log('this.ApiData=>',this.ApiData)
    }
    })

  }

}
