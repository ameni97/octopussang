import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

import { AddComplaintComponent } from './Complaint/add-complaint/add-complaint.component';
import { DeleteComplaintComponent } from './Complaint/delete-complaint/delete-complaint.component';
import { ListComplaintComponent } from './Complaint/list-complaint/list-complaint.component';
import { UpdateComplaintComponent } from './Complaint/update-complaint/update-complaint.component';

import { AddOppointmentComponent } from './Oppointment/add-oppointment/add-oppointment.component';
import { DeleteOppointmentComponent } from './Oppointment/delete-oppointment/delete-oppointment.component';
import { ListOppointmentComponent } from './Oppointment/list-oppointment/list-oppointment.component';
import { UpdateOppointmentComponent } from './Oppointment/update-oppointment/update-oppointment.component';

const routes: Routes = [
  {path:'',redirectTo:'detailcomp',pathMatch:'full'},
  {path:'addtr', component:AddTrainingComponent},
  {path:'updatetr/:id', component:UpdateTrainingComponent},
  {path:'deltr/:id', component:DeleteTrainingComponent},
  {path:'detailtr', component:ListTrainingComponent},
  {path:'addcer', component:AddCertificatComponent},
  {path:'updatecer/:id', component:UpdateCertificatComponent},
  {path:'delcer/:id', component:DeleteCertificatComponent},
  {path:'detailcer', component:ListCertificatComponent},

  {path:'addmp', component:AddMoneypotComponent},
  {path:'updatemp/:id', component:UpdateMoneypotComponent},
  {path:'delmp/:id', component:DeleteMoneypotComponent},
  {path:'detailmp/:id', component:ListMoneypotComponent},
  {path:'addmat', component:AddMaterialComponent},
  {path:'updatemat/:id', component:UpdateMaterialComponent},
  {path:'delmat/:id', component:DeleteMaterialComponent},
  {path:'detailmat', component:ListMaterialComponent},

  {path:'addquiz', component:AddQuizComponent},
  {path:'updatequiz/:id', component:UpdateQuizComponent},
  {path:'delquiz/:id', component:DeleteQuizComponent},
  {path:'detailquiz', component:ListQuizComponent},
  {path:'addfile', component:AddFileComponent},
  {path:'updatefile/:id', component:UpdateFileComponent},
  {path:'delfile/:id', component:DeleteFileComponent},
  {path:'detailfile', component:ListFileComponent},

  {path:'addq', component:AddQuestionComponent},
  {path:'updateq/:id', component:UpdateQuestionComponent},
  {path:'delq/:id', component:DeleteQuestionComponent},
  {path:'detailq', component:ListQuestionComponent},
  {path:'addevent', component:AddEventComponent},
  {path:'updateevent/:id', component:UpdateEventComponent},
  {path:'delevent/:id', component:DeleteEventComponent},
  {path:'detailevent', component:ListEventComponent},

  {path:'addnot', component:AddNotificationComponent},
  {path:'updatenot/:id', component:UpdateNotificationComponent},
  {path:'delnot/:id', component:DeleteNotificationComponent},
  {path:'detailnot/:id', component:ListNotificationComponent},

  {path:'addcomp', component:AddComplaintComponent},
  {path:'updatecomp/:id', component:UpdateComplaintComponent},
  {path:'delcomp/:id', component:DeleteComplaintComponent},
  {path:'detailcomp', component:ListComplaintComponent},

  {path:'addopp', component:AddOppointmentComponent},
  {path:'updateopp/:id', component:UpdateOppointmentComponent},
  {path:'delopp/:id', component:DeleteOppointmentComponent},
  {path:'detailopp', component:ListOppointmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
