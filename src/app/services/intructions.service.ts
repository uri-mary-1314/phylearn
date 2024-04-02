import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntructionsService {
  getIntructions() {
    return this.http.get(`./assets/data/intructions.txt`, {responseType: 'text'})
  }
  constructor(
    private http: HttpClient
  ) { }
}
