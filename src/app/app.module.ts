import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrainingComponent } from './Training/add-training/add-training.component';
import { UpdateTrainingComponent } from './Training/update-training/update-training.component';
import { DeleteTrainingComponent } from './Training/delete-training/delete-training.component';
import { ListTrainingComponent } from './Training/list-training/list-training.component';
import { AddCertificatComponent } from './Certificat/add-certificat/add-certificat.component';
import { DeleteCertificatComponent } from './Certificat/delete-certificat/delete-certificat.component';
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
import { DeleteFileComponent } from './File/delete-file/delete-file.component';
import { ListFileComponent } from './File/list-file/list-file.component';
import { UpdateFileComponent } from './File/update-file/update-file.component';
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
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,
    DeleteTrainingComponent,
    ListTrainingComponent,
    AddCertificatComponent,
    DeleteCertificatComponent,
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
    DeleteFileComponent,
    ListFileComponent,
    UpdateFileComponent,
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
    UpdateNotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
 // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
