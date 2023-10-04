# Using Angular Query String Parameters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code

```javascript
// main.component.html
<h2>
  <a routerLink="home">Home</a> <br>
  <a routerLink="products">Products</a> <br>
  <a [routerLink]="['/products',1]">products/1</a> <br>
  <a [queryParams]="{page:2, size:10}" [routerLink]="['/products',1]">/products/1?page=2&size=10</a> <br>
  <a [queryParams]="queryString" [routerLink]="['/products',1]">products/1?page=10&size=20</a> <br>
  <router-outlet></router-outlet>
</h2>

// producs.component.html
<p>products works!</p>

<div *ngIf="this.productId">
  product id:{{ productId }}
  <p *ngIf="page">page: {{ page }}</p>
  <p *ngIf="size">size: {{ size }}</p>
</div>

<div *ngIf="!this.productId">
  All products are shown.
</div>

//component.ts
page?: string;
size?: string;

constructor(private activatedRoute: ActivatedRoute) {
}

ngOnInit(): void {

this.activatedRoute.paramMap.subscribe({
  next: params => {
    this.productId = params.get('id')
  }
})

this.activatedRoute.queryParamMap.subscribe({
  next: params => {
    this.page = params.get('page');
    this.size = params.get('size');
  }
})
}
```
