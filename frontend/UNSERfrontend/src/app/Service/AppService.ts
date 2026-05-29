import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  appControllerGetHello() {
    return this.http.get(`${this.BASE_URL}/`);
  }
}
