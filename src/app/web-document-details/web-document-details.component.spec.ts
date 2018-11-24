import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDocumentDetailsComponent } from './web-document-details.component';

describe('WebDocumentDetailsComponent', () => {
  let component: WebDocumentDetailsComponent;
  let fixture: ComponentFixture<WebDocumentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDocumentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
