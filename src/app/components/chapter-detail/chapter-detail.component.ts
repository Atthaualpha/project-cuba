import { Component, OnInit, Input } from '@angular/core';
import { ChapterService } from '../../services/chapters/chapter.service';
import { ISubscription } from 'rxjs/Subscription';
import { Chapter } from '../../models/chapter/Chapter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {


  private subcription: ISubscription;

  @Input() id: 0;
  chapter: Chapter = {
    id: 0,
    nombre: ''
  };

  constructor(route: ActivatedRoute, private chapterService: ChapterService) {
      this.id = route.snapshot.params['id'];
   }

  ngOnInit() {
    console.log(this.id);
    this.buscarCapituloPorId(this.id);
  }


  buscarCapituloPorId(idCap) {

    this.subcription = this.chapterService
      .buscarCapituloPorId(idCap)
      .subscribe(capitulo => {
        this.chapter = capitulo;
      });
  }
}
