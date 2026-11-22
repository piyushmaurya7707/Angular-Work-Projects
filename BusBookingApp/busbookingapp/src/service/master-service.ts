import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  
   apiurl: string = 'http://projectapi.gerasim.in/api/BusBooking/';
   
   http = inject(HttpClient);
   getLocation(): Observable<any[]>
   {
    return this.http.get<any[]>(this.apiurl + 'GetBusLocations');
   }
   searchBus(from:string,to:string,travelDate:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiurl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`);
   }


}
