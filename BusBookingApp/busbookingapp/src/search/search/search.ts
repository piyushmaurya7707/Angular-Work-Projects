import { Component,inject,OnInit } from '@angular/core';
import { MasterService } from '../../service/master-service';
import { Observable } from 'rxjs';
import { AsyncPipe,CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe,FormsModule,RouterLink,CommonModule ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {

  MasterService = inject(MasterService);

  searchObj: any = {
    fromLocation: null,
    toLocation: null,
    travelDate: ''
  };

  location$: Observable<any []> = new Observable<any[]>();


  busList: any[] = [];

  ngOnInit(): void {
    this.getAllLocation();

  }
  getAllLocation(): void{
    this.location$ = this.MasterService.getLocation(); 
  }


  onSearch(): void {
    if(!this.searchObj.fromLocation ||
      !this.searchObj.toLocation||
      !this.searchObj.travelDate
    ){
      alert('please select all journy detail');
      return;
    }
    if(this.searchObj.fromLocation == this.searchObj.toLocation)
    {
      alert( 'source and destination should not be same');
      return;
    }

    this.MasterService.searchBus(
      this.searchObj.fromLocation,
      this.searchObj.toLocation,
      this.searchObj.travelDate
    ).subscribe({
      next : (res:any)=>{
        this.busList = res;
        console.log('available bus',this.busList)
      },
      
      error:(err) =>{
        
        console.error("API error");
      }
    });

  }
  

}
