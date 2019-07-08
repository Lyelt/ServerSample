import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private http: Http) {
  }

  ngOnInit() {
  }

  postRequest() {
    this.http.post("/Sample/TestMethod", {"testString": "test"} )
      .subscribe(data => {
        console.log(data);
      },
      error => {
        alert(error);
      });
  }
}
