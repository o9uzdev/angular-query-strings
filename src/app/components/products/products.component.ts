import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productId?: string;
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
}
