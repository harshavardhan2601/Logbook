import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import SignaturePad from 'signature_pad';
import { studentModal } from '../models/student';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  data1: string = '';
  @ViewChild('sPad', { static: true }) signaturePadElement;
  signaturePad: any;
  signatureimg: any;
  studentdata = <studentModal>{};
  isImageSaved = false;
  formdiv = true
  candiv = false
  pid = true
  signd = false
  language = false
  spl =false
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  clear() {
    this.signaturePad.clear();
  }



  save() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      console.log(dataURL)
      var da = dataURL.split('data:image/png;base64,')
      console.log(da[1])
      this.studentdata.user_signature = da[1]
      this.formdiv = true
      this.pid = false
      this.signd = true
    }
  }

  getpusersign(da) {
    this.formdiv = false
  }

  close() {
    this.formdiv = true
  }

  showDiv(evt) {
    var target = evt.target;
    console.log(target.checked)
    if (target.checked) {
      this.language = true
      // document.getElementById('language_details').style.display = 'block'
    }
  }

  hideDiv(evt) {
    var target = evt.target;
    console.log(target.checked)
    if (target.checked) {
      this.language = false
      // document.getElementById('language_details').style.display = 'none'
    }
  }

  setpermaAdrr(evt, data) {
    var target = evt.target;
    console.log(target)
    if (target.checked) {
      this.studentdata.permanent_address = this.studentdata.current_address
    }
    else {
      this.studentdata.permanent_address = '';
    }
  }

  showDivlan(event) {
    var target = event.target
    console.log(target.value)
    if (target.checked) {
      if (target.value == 'spl') {
        this.spl = true
        // document.getElementById('spl').style.display = 'block'
      }
      else if (target.value == 'FRTOL') {
        document.getElementById('FRTOL').style.display = 'block'
      }
      else if (target.value == 'FRTOLR') {
        document.getElementById('FRTOLR').style.display = 'block'
      }
      else if (target.value == 'COPRTR') {
        document.getElementById('COPRTR').style.display = 'block'
      }
      else if (target.value == 'ppl') {
        document.getElementById('ppl').style.display = 'block'
      }
      else if (target.value == 'cpl') {
        document.getElementById('cpl').style.display = 'block'
      }
      else if (target.value == 'CHPL') {
        document.getElementById('CHPL').style.display = 'block'
      }
      if (target.value == 'ATPL') {
        document.getElementById('ATPL').style.display = 'block'
      }
      if (target.value == 'ir') {
        document.getElementById('ir').style.display = 'block'
      }
      if (target.value == 'medical') {
        document.getElementById('medical').style.display = 'block'
      }
      if (target.value == 'refresher') {
        document.getElementById('refresher').style.display = 'block'
      }
      if (target.value == 'AVSEC') {
        document.getElementById('avsec').style.display = 'block'
      }

    } else {


      if (target.value == 'spl') {
        this.spl = false
        // document.getElementById('spl').style.display = 'none'
      }
      else if (target.value == 'FRTOL') {
        document.getElementById('FRTOL').style.display = 'none'
      }
      else if (target.value == 'FRTOLR') {
        document.getElementById('FRTOLR').style.display = 'none'
      }
      if (target.value == 'COPRTR') {
        document.getElementById('COPRTR').style.display = 'none'
      }
      if (target.value == 'ppl') {
        document.getElementById('ppl').style.display = 'none'
      }
      if (target.value == 'cpl') {
        document.getElementById('cpl').style.display = 'none'
      }
      if (target.value == 'CHPL') {
        document.getElementById('CHPL').style.display = 'none'
      }
      if (target.value == 'ATPL') {
        document.getElementById('ATPL').style.display = 'none'
      }
      if (target.value == 'ir') {
        document.getElementById('ir').style.display = 'none'
      }
      if (target.value == 'medical') {
        document.getElementById('medical').style.display = 'none'
      }
      if (target.value == 'refresher') {
        document.getElementById('refresher').style.display = 'none'
      }
      if (target.value == 'avsec') {
        document.getElementById('avsec').style.display = 'none'
      }
    }

  }

  onSubmit(da) {
    console.log(da)
    console.log(this.studentdata)
    var data = this.studentdata
    this.auth.addstudent(data).subscribe(res => {
      console.log(res)
    })
  }

}
