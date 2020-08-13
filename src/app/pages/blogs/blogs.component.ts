import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ResponseModel } from 'src/app/model/response.model';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogs: any = {};
  response: any;
  public employee = [
    {
      id:1,
      name:'Ahetesham Shaikh',
      mobile:'9403381578',
      address : '336, Shani Peth, Jalgaon (425001).',
      state:'Maharashtra'
    },
    {
      id:2,
      name:'Balasaheb Patil',
      mobile:'8087562010',
      address : 'Flat 12, A wing New BJ Market Jalgaon (425001).',
      state:'Maharashtra'
    },
    {
      id:3,
      name:'Junaid Khan',
      mobile:'9096168614',
      address : 'Shani Peth Jalgaon (425001).',
      state:'Maharashtra'
    },
    {
      id:4,
      name:'Salim Shaikh',
      mobile:'9096168614',
      address : 'Shani Peth Jalgaon (425001).',
      state:'Maharashtra'
    }
  ]
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

  generatePdf(){
    const documentDefinition = { content: 'This is for testing.' };
    pdfMake.createPdf(documentDefinition).open();   //To Open PDF
   // pdfMake.createPdf(documentDefinition).download(); //To Download PDF
  }


}
