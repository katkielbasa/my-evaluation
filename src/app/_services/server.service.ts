import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Server } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  getServersSmall() {
    return this.http.get<any>('/assets/data/mock-server.json')
      .toPromise()
      .then(res => <Server[]>res.data)
      .then(data => { return data; });
  }
  getById(nic_id: string) {
    return this.http.get(`${environment.apiUrl}}/servers/` + nic_id);
  }

  add(server: Server) {
    return this.http.post(`${environment.apiUrl}}/servers/add`, server);
  }

  getAll() {
    return this.http.get<Server[]>(`${environment.apiUrl}/servers`);
  }

  update(server: Server) {
    return this.http.put(`${environment.apiUrl}}/servers/` + server.nic_id, server);
  }

  delete(nic_id: string) {
    return this.http.delete(`${environment.apiUrl}}/servers/` + nic_id);
  }
}