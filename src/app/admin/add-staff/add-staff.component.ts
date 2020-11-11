import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import SignaturePad from 'signature_pad';
import { AuthService } from 'src/app/auth.service';
import { staffModal } from '../models/staffmodal';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  @ViewChild('sPad', { static: true }) signaturePadElement;
  signaturePad: any;
  signatureimg: any;
  staffdata= <staffModal>{};
  isImageSaved= false;
  formdiv=true
  candiv = false
  pid = true
  signd = false
  constructor(private formBuilder: FormBuilder, private auth:AuthService) { }



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
      var da  = dataURL.split('data:image/png;base64,')
      console.log(da[1])
      this.staffdata.stffSignature = da[1]
      this.formdiv = true
      this.pid = false
      this.signd =true
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
      document.getElementById('language_details').style.display = 'block'
    }
  }

  hideDiv(evt) {
    var target = evt.target;
    console.log(target.checked)
    if (target.checked) {
      document.getElementById('language_details').style.display = 'none'
    }
  }

  ngOnInit(): void {
    
  }

  uploadFile(fileInput) {
    var file = fileInput.target.files[0]
    var name = fileInput.target.name
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          // Return Base64 Data URL
          const imgBase64Path = e.target.result;
          var base64result_arr = imgBase64Path.split(',');
          var base64result_str = '';
          for (var i = 1; i < base64result_arr.length; i++) {
              base64result_str += base64result_arr[i];
          }
          // console.log(base64result_str)
          var  data = base64result_str
          this.resultfile(data,name);
        };
      };
  });
  }

  resultfile(e,name) {
    console.log(e);
    console.log(name)
    this.isImageSaved = true
    if (name=='file_attach1') {
      this.staffdata.file_attach1_hidden =e;
    } else {
      this.staffdata.attachFile_hidden =e;
    }

  } 

  

  onSubmit() {
    console.log(this.staffdata)
    var data = this.staffdata
    this.auth.addstaff(data).subscribe(res =>{
      if (res) {
        window.location.href='/admin/staffList';
      }
    })
  }

}
