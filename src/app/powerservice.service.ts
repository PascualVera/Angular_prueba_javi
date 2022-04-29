import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PowerserviceService {
  private url = 'api/powers';
  constructor(private http: HttpClient) {}

  getPowers() {
    return this.http.get(this.url);
  }
}
