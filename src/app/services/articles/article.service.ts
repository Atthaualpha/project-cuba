import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../../models/articles/article';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class ArticleService {

  private _articleUrl = 'http://localhost:8082/articulo/';
  constructor(private http: HttpClient) { }

  buscarPorCapitulo(idCapitulo: number): Observable<Article[]> {
    const parametros = new HttpParams().set('id', idCapitulo.toString());
    return this.http.get<Article[]>(this._articleUrl + 'buscar/capitulo', {
      params: parametros,
      headers: new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json')
    });
  }

  buscarArticulosPorCapitulo(idCapitulo: number): Observable<Article[]> {
    const parametros = new HttpParams().set('id', idCapitulo.toString());
    return this.http.get<Article[]>(this._articleUrl + 'buscar', {
      params: parametros,
      headers: new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json')
    });

  }

}
