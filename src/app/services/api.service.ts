import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {INumbersInfo} from '../interfaces/info'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getInfo() {
    return this.http.get<INumbersInfo[]>('http://localhost:3000/users')
  }

  createNewUser(data: any) {
    return this.http.post<{ [key: string]: any }>(`http://localhost:3000/users/`, data)
  }

  deleteUser(id:number) {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
}
