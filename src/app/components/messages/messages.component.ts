import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { MessagesEmitService } from '../../services/messages-emit/messages-emit.service';
>>>>>>> 01197c45e2260e24f58e968b964a55f7a3725f26

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  mensajes = [];

  ngOnInit() {
    this.mensajes.push({
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeNG rocks'
    });
  }
=======
  constructor(public messageService: MessagesEmitService) {}

  ngOnInit() {}
>>>>>>> 01197c45e2260e24f58e968b964a55f7a3725f26
}
