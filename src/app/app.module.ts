import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PacienteDetailComponent } from './Paciente/paciente-detail/paciente-detail.component';
import { PacienteModule } from "./Paciente/Paciente.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PacienteModule
    ]
})
export class AppModule { }
