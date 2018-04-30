import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Chapter } from '../../models/chapter/Chapter';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChapterService {
  private _chapterUrl = 'http://localhost:8082/capitulo';
  constructor(private http: HttpClient) {}

  buscarCapitulos(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this._chapterUrl + '/buscar/todos');
  }

  buscarCapituloPorId(id: number): Observable<Chapter> {
    const parametros = new HttpParams().set('id', id.toString());
    return this.http.get<Chapter>(this._chapterUrl + '/buscar/uno', {
      params: parametros,
      headers: new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json')
    });
  }

  crearCapitulo(capitulo: Chapter): Observable<any> {
    return this.http.post(this._chapterUrl + '/crear', capitulo);
  }
}
