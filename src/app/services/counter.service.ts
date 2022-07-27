import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactive: number = 0;
  inactiveToActive: number = 0;
}
