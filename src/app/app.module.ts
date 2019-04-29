import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HomeComponent } from './home';
import {MenuModule} from 'primeng/menu';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import { ServerTableComponent } from 'src/app/serverTable';
import { SubmitServerComponent } from 'src/app/submit-server';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { AlertComponent } from './_directives';
import { AlertService, ServerService } from './_services';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerTableComponent,
    SubmitServerComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    ButtonModule,
    BrowserModule,
    routing,
    InputMaskModule,
    BrowserAnimationsModule,
    CheckboxModule,
    TriStateCheckboxModule,
		TableModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
		InputTextModule,
    TabViewModule
  ],
  providers: [
    ServerService,
      AlertService
      // provider used to create fake backend
      //,CountryService,EventService,NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
