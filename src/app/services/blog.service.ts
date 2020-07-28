import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BASEURL : string = 'http://192.168.1.12:86/api/v1/';

  constructor(private http : HttpClient) { }

  getBlogs(){
    return this.http.get(`${this.BASEURL}/blogList?blogID=0`);
   }
}
