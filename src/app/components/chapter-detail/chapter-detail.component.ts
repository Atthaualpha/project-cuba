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


  @Input() chapter: Chapter;

  constructor() {
   }

  ngOnInit() {
  }

}
