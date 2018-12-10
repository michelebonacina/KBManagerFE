import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MagazineDetailsComponent } from './magazine-details/magazine-details.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { WebDocumentDetailsComponent } from './web-document-details/web-document-details.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { MagazineApiService } from './services/magazine-api.service';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicDetailsComponent,
    BookDetailsComponent,
    ArticleDetailsComponent,
    MagazineDetailsComponent,
    DocumentDetailsComponent,
    WebDocumentDetailsComponent,
    MagazineListComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MagazineApiService,
    ErrorPopupComponent,
    ErrorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
