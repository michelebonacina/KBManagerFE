import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';

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
    private magazineApiService: MagazineApiService,
  ) {
    // create magazine form
    this.magazineForm = formBuilder.group(
      {
        id: [null],
        title: [null, Validators.required],
        number: [null],
        year: [null],
        month: [null],
        pages: [null],
        editor: [null],
      }
    );
  } // constructor

  ngOnInit() {
  } // ngOnInit

  public newMagazine() {
    // reset form data
    this.magazineForm.reset();
    // show edit form
    this.showForm = true;
  } // newMagazine

  public editMagazine(magazine: Magazine) {
    // update edit form with magazine data
    this.magazineForm.controls['id'].setValue(magazine.id);
    this.magazineForm.controls['title'].setValue(magazine.title);
    this.magazineForm.controls['number'].setValue(magazine.number);
    this.magazineForm.controls['year'].setValue(magazine.year);
    this.magazineForm.controls['month'].setValue(magazine.month);
    this.magazineForm.controls['pages'].setValue(magazine.pages);
    this.magazineForm.controls['editor'].setValue(magazine.editor);
    // show edit form
    this.showForm = true;
  } // editMagazine

  public save() {
    if (this.magazineForm.valid) {
      // create e new magazine with form data
      const magazine: Magazine = new Magazine();
      magazine.id = this.magazineForm.controls['id'].value;
      magazine.title = this.magazineForm.controls['title'].value;
      magazine.number = this.magazineForm.controls['number'].value;
      magazine.year = this.magazineForm.controls['year'].value;
      magazine.month = this.magazineForm.controls['month'].value;
      magazine.pages = this.magazineForm.controls['pages'].value;
      magazine.editor = this.magazineForm.controls['editor'].value;
      // save magazine
      this.magazineApiService.save(magazine);
      // reset form data
      this.magazineForm.reset();
      // hide edit form
      this.showForm = false;
    }
  } // save

  public cancel() {
    // reset form data
    this.magazineForm.reset();
    // hide edit form
    this.showForm = false;
  } // cancel

} // MagazineEditComponent
