import { Component, OnInit } from '@angular/core';
import { MessagesEmitService } from '../../services/messages-emit/messages-emit.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessagesEmitService) {}

  ngOnInit() {}
}
