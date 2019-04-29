import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from '../_models';
import { ServerService, AlertService } from '../_services';
import { SortEvent } from 'primeng/api';
import { first } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-server-table',
  templateUrl: './serverTable.component.html',
  styleUrls: ['./serverTable.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ServerTableComponent implements OnInit {
  servers: Server[];

  cols: any[];

  deployed: SelectItem[];

  started: SelectItem[];

  constructor(private serverService: ServerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
) {
 }

  ngOnInit() {
    //this.serverService.getServersSmall().then(servers => this.servers = servers);
    this.loadAllServers();

    this.cols = [
      { field: 'name', header: 'name'},
      { field: 'nic_id', header: 'nic_id'},
      { field: 'cpu_count', header: 'cpu_count'},
      { field: 'memoryGb', header: 'memoryGb'},
      { field: 'createTime', header: 'createTime'},
      { field: 'deployed', header: 'deployed'},
      { field: 'started', header: 'started' }
    ];
    this.deployed = [
      { label: 'true', value: 'Yes' },
      { label: 'false', value: 'No' }
    ]
    this.started = [
      { label: 'true', value: 'Yes' },
      { label: 'false', value: 'No' }
    ]

  }

  deleteServer(nic_id: string) {
    this.serverService.delete(nic_id).pipe(first()).subscribe(() => {
      this.loadAllServers()
    });
  }

  // editServer(server: Server): void {
  //   localStorage.removeItem("editServerId");
  //   localStorage.setItem("editServerId", server.id.toString());
  //   this.router.navigate(['/update']);
  // };


  private loadAllServers() {
    this.serverService.getAll().pipe(first()).subscribe(servers => {
      this.servers = servers;
    });
  }
}