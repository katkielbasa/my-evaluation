import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, ServerService } from '../_services';

@Component({
  selector: 'app-submit-server',
  templateUrl: './submit-server.component.html',
  styleUrls: ['./submit-server.component.css',
    '../../../node_modules/primeng/resources/primeng.css'
  ]
  // ,encapsulation: ViewEncapsulation.Emulated

})
export class SubmitServerComponent implements OnInit {

  submitServerForm: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serverService: ServerService,
    private alertService: AlertService
   ){
    }

  ngOnInit() {
    this.submitServerForm = this.formBuilder.group({
      name: ['', Validators.required],
      nic_id: ['', Validators.required],
      memoryGb: ['', Validators.required],
      createTime: ['', Validators.required],
      cpu_count: ['', 
         [
          Validators.required
         ,Validators.pattern('^[0-9]+(\.[0-9]+)?$')]
       ],
      deployed: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.submitServerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.submitServerForm.invalid) {
      return;
    }

    this.loading = true;
    this.serverService.add(this.submitServerForm.value)
      .pipe(first())
      .subscribe(
      data => {

        this.alertService.success('Server added', true);
        this.router.navigate(['/servers']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
