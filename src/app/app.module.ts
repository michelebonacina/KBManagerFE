import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    MagazineListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [MagazineApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
