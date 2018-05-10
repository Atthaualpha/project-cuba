import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  private _articleUrl = 'http://localhost:8082/item/';
  constructor(private http: HttpClient) { }

  buscarItemPorArticulo() {

  }

}
