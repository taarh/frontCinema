import { Component, OnInit } from '@angular/core';
import { Categorie } from './categorie';
import { CategorieService } from '../categorie.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  data: Categorie[] = [];
  displayedColumns: string[] = ['id', 'type'];
  isLoadingResults = true;

  constructor(private categorieService: CategorieService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getCategries();
  }

  getCategries(): void {
    this.categorieService.getCategories()
      .subscribe(categories => {
        this.data = categories;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
