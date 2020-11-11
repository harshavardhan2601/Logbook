import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [DashboardComponent, AddAircraftComponent, AircraftlistComponent, AircraftEditComponent, AircraftViewComponent, AuthorizationComponent, TechlogbookComponent, AddInstructorComponent, InstructorEditComponent, InstructorlistComponent, InstructorViewComponent, AddStaffComponent, StafflistComponent, StaffEditComponent, StaffViewComponent, AddStudentComponent, StudentlistComponent, StudentEditComponent, StudentViewComponent, AddLocationComponent, LocationlistComponent, LocationEditComponent, LocationViewComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
