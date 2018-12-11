import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-magazine-edit',
  templateUrl: './magazine-edit.component.html',
  styleUrls: ['./magazine-edit.component.css']
})
export class MagazineEditComponent implements OnInit {

  magazineForm: FormGroup;

  showForm = false;

  constructor(
    formBuilder: FormBuilder,
  ) {
    this.magazineForm = formBuilder.group(
      {
        title: [null],
        number: [null],
        year: [null],
        month: [null],
        pages: [null],
        editor: [null],
      }
    );
  } // constructor

  ngOnInit() {
  }

  public show() {
    this.showForm = true;
  }

  public cancel() {
    this.magazineForm.reset();
    this.showForm = false;
  }

}
