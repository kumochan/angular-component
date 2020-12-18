import { Component, OnInit , Input} from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public myListArticles: Article[] = [
    { id: 1, title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await', url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40' },
    { id: 2, title: 'Game of Life', url: 'https://thefullsnack.com/posts/game-of-life.html' },
    { id: 3, title: 'Game', url: 'Diablo' },
  ];

  @Input() articleDetail = this.myListArticles; // decorate the property with @Input()

  //0 nhan output tu app.component (id)
  //1 hafm tim kiem theo id
  //2 thuc hien hien thi theo id


  //step 1
  //  - tao 1 ham event kieu emit tu app.component
  //step 2
  //  - o html cua con thi goi event step 1 - truyen duoc id vao coponent con, goi vao 1 ham o buoc 3
  //step 3
  //  - viet ham tim kiem theo id nhan duoc
  //step 4
  //  - hien thi du lieu o file html con
  //step 5
  //  - goi du lieu hien thi o cha
  



}
