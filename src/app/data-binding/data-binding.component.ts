import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url: string = 'www.domain.com.br';
  urlImagem: string = "http://lorempixel.com/400/200/nature";

  constructor() { }

  getSoma(x, y){
  	return x + y;
  }

  getProdutos(){
  	return ['Produto 01', 'Produto 02', 'Produto 03'];
  }

  ngOnInit() {
  }

}
