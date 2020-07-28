import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ResponseModel } from 'src/app/model/response.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogs: any = {};
  response: any;
  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
  }

  // Get All Blogs
  getAllBlogs() {
    this._blogService.getBlogs()
      .subscribe((response: ResponseModel) => {
        this.blogs = response.data
      }, (error) => {
        console.log(error);
      })
  }

}
