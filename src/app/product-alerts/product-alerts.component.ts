
import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output,EventEmitter} from '@angular/core';
import {Product} from '../products';
@Component({
  selector: 'app-product-assets',
  templateUrl: './product-assets.component.html',
  styleUrls: ['./product-assets.component.css']
})
export class ProductAssetsComponent implements OnInit {

  @Input() product!: Product|undefined;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
