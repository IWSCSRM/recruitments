import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  token ! : any;
  password ! : any;
  constructor() { }
}
