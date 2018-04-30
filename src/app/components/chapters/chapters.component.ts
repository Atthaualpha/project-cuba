import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChapterService } from '../../services/chapters/chapter.service';
import { Chapter } from '../../models/chapter/Chapter';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit, OnDestroy {
  id: number;
  chapters: Chapter[];

  chapter: Chapter;

  chapterNew: Chapter = {
    idCapitulo: 0,
    nombre: '',
    url: ''
  };

  private subcription: ISubscription;

  constructor(private chapterService: ChapterService) {}

  ngOnInit() {
    this.buscarCapitulos();
  }

  buscarCapitulos() {
    this.chapterService
      .buscarCapitulos()
      .subscribe(capitulos => (this.chapters = capitulos));
  }

  buscarArticulos(idChapter: number) {
    this.id = idChapter;
  }

  crearCapitulo() {
    this.subcription = this.chapterService
      .crearCapitulo(this.chapterNew)
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy() {

  }
}
