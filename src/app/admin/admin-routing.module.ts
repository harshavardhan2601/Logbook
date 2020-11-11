import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAircraftComponent } from './add-aircraft/add-aircraft.component';
import { AircraftlistComponent } from './aircraftlist/aircraftlist.component';
import { AircraftEditComponent } from './aircraft-edit/aircraft-edit.component';
import { AircraftViewComponent } from './aircraft-view/aircraft-view.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TechlogbookComponent } from './techlogbook/techlogbook.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorlistComponent } from './instructorlist/instructorlist.component';
import { InstructorViewComponent } from './instructor-view/instructor-view.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'aircraft', component: AddAircraftComponent },
      { path: 'aircraftList', component: AircraftlistComponent },
      { path: 'aircraftEdit', component: AircraftEditComponent },
      { path: 'aircraftView', component: AircraftViewComponent },
      { path: 'Authorization', component: AuthorizationComponent },
      { path: 'journeyLogBook', component: TechlogbookComponent },
      { path: 'instructor', component: AddInstructorComponent },
      { path: 'instructorEdit', component: InstructorEditComponent },
      { path: 'instructorList', component: InstructorlistComponent },
      { path: 'instructorView', component: InstructorViewComponent },
      { path: 'staff', component: AddStaffComponent },
      { path: 'staffList', component: StafflistComponent },
      { path: 'staffEdit/:id', component: StaffEditComponent },
      { path: 'staffView/:id', component: StaffViewComponent },
      { path: 'student', component: AddStudentComponent },
      { path: 'studentList', component: StudentlistComponent },
      { path: 'studentEdit', component: StudentEditComponent },
      { path: 'studentView', component: StudentViewComponent },
      { path: 'location', component: AddLocationComponent },
      { path: 'locationList', component: LocationlistComponent },
      { path: 'locationEdit/:id', component: LocationEditComponent },
      { path: 'locationView/:id', component: LocationViewComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
