import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../Models/Blog';
import { BlogService } from '../Services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: any = [];
  searchText: string = '';

  constructor(private blogService: BlogService, private router: Router) {}
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((blogs) => {
      this.blogs = blogs;
      console.log(this.blogs.blogs);

      for (let blog of this.blogs.blogs) {
        blog.upvotes = 0;
        blog.downvotes = 0;
      }
    });
  }

  upvote(blog: Blog): void {
    blog.upvotes += 1;
  }

  downvote(blog: Blog): void {
    blog.downvotes += 1;
  }

  getBorderColor(blog: Blog) {
    return blog.upvotes > blog.downvotes ? 'green' : 'red';
  }


  //error on search function
  // searchBlogs(): Blog[] {
  //   if (this.searchText === '') {
  //     console.log(this.blogs);
  //     return this.blogs;
  //   } else {
  //     console.log(this.blogs);
  //     return this.blogs.filter(
  //       (blog: { title: string; author: string; content: string }) => {
  //         const term = this.searchText.toLowerCase();
  //         return (
  //           blog.title.toLowerCase().includes(term) ||
  //           blog.author.toLowerCase().includes(term) ||
  //           blog.content.toLowerCase().includes(term)
  //         );
  //       }
  //     );
  //   }
  // }
}
