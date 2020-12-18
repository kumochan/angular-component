import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PostsComponent } from './posts/posts.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    NavbarComponent,
    PostsComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BsModalService,
    // BsModalRef,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
