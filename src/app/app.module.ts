import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrainingComponent } from './Training/add-training/add-training.component';
import { UpdateTrainingComponent } from './Training/update-training/update-training.component';
import { ListTrainingComponent } from './Training/list-training/list-training.component';
import { AddCertificatComponent } from './Certificat/add-certificat/add-certificat.component';
import { UpdateCertificatComponent } from './Certificat/update-certificat/update-certificat.component';
import { ListCertificatComponent } from './Certificat/list-certificat/list-certificat.component';
import { AddMoneypotComponent } from './Moneypot/add-moneypot/add-moneypot.component';
import { DeleteMoneypotComponent } from './Moneypot/delete-moneypot/delete-moneypot.component';
import { ListMoneypotComponent } from './Moneypot/list-moneypot/list-moneypot.component';
import { UpdateMoneypotComponent } from './Moneypot/update-moneypot/update-moneypot.component';
import { AddMaterialComponent } from './Material/add-material/add-material.component';
import { DeleteMaterialComponent } from './Material/delete-material/delete-material.component';
import { ListMaterialComponent } from './Material/list-material/list-material.component';
import { UpdateMaterialComponent } from './Material/update-material/update-material.component';
import { AddQuizComponent } from './Quiz/add-quiz/add-quiz.component';
import { DeleteQuizComponent } from './Quiz/delete-quiz/delete-quiz.component';
import { ListQuizComponent } from './Quiz/list-quiz/list-quiz.component';
import { UpdateQuizComponent } from './Quiz/update-quiz/update-quiz.component';

import { AddFileComponent } from './File/add-file/add-file.component';
import { ListFileComponent } from './File/list-file/list-file.component';
import { AddQuestionComponent } from './Question/add-question/add-question.component';
import { DeleteQuestionComponent } from './Question/delete-question/delete-question.component';
import { ListQuestionComponent } from './Question/list-question/list-question.component';
import { UpdateQuestionComponent } from './Question/update-question/update-question.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { DeleteEventComponent } from './Event/delete-event/delete-event.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { UpdateEventComponent } from './Event/update-event/update-event.component';
import { AddNotificationComponent } from './Notification/add-notification/add-notification.component';
import { DeleteNotificationComponent } from './Notification/delete-notification/delete-notification.component';
import { ListNotificationComponent } from './Notification/list-notification/list-notification.component';
import { UpdateNotificationComponent } from './Notification/update-notification/update-notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComplaintComponent } from './Complaint/add-complaint/add-complaint.component';
import { ListComplaintComponent } from './Complaint/list-complaint/list-complaint.component';
import { UpdateComplaintComponent } from './Complaint/update-complaint/update-complaint.component';
import { DeleteComplaintComponent } from './Complaint/delete-complaint/delete-complaint.component';
import { AddProfilComponent } from './Profil/add-profil/add-profil.component';
import { DeleteProfilComponent } from './Profil/delete-profil/delete-profil.component';
import { ListProfilComponent } from './Profil/list-profil/list-profil.component';
import { UpdateProfilComponent } from './Profil/update-profil/update-profil.component';
import { AddOffreComponent } from './Offre/add-offre/add-offre.component';
import { DeleteOffreComponent } from './Offre/delete-offre/delete-offre.component';
import { ListOffreComponent } from './Offre/list-offre/list-offre.component';
import { UpdateOffreComponent } from './Offre/update-offre/update-offre.component';

import { AddOppointmentComponent } from './Oppointment/add-oppointment/add-oppointment.component';
import { DeleteOppointmentComponent } from './Oppointment/delete-oppointment/delete-oppointment.component';
import { ListOppointmentComponent } from './Oppointment/list-oppointment/list-oppointment.component';
import { UpdateOppointmentComponent } from './Oppointment/update-oppointment/update-oppointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,
    ListTrainingComponent,
    AddCertificatComponent,
    UpdateCertificatComponent,
    ListCertificatComponent,
    AddMoneypotComponent,
    DeleteMoneypotComponent,
    ListMoneypotComponent,
    UpdateMoneypotComponent,
    AddMaterialComponent,
    DeleteMaterialComponent,
    ListMaterialComponent,
    UpdateMaterialComponent,
    AddQuizComponent,
    DeleteQuizComponent,
    ListQuizComponent,
    UpdateQuizComponent,
    AddFileComponent,
    ListFileComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    ListQuestionComponent,
    UpdateQuestionComponent,
    AddEventComponent,
    DeleteEventComponent,
    ListEventComponent,
    UpdateEventComponent,
    AddNotificationComponent,
    DeleteNotificationComponent,
    ListNotificationComponent,
    UpdateNotificationComponent,
    AddOffreComponent,
    DeleteOffreComponent,
    ListOffreComponent,
    UpdateOffreComponent,
    AddProfilComponent,
    DeleteProfilComponent,
    ListProfilComponent,
    UpdateProfilComponent,
    AddComplaintComponent,
    ListComplaintComponent,
    UpdateComplaintComponent,
    DeleteComplaintComponent,
    AddOppointmentComponent,
    DeleteOppointmentComponent,
    ListOppointmentComponent,
    UpdateOppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule, 
    Ng2OrderModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[NgxPaginationModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
