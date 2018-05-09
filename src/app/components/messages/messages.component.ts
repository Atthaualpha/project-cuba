import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor() {}

  mensajes = [];

  ngOnInit() {
    this.mensajes.push({
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeNG rocks'
    });
  }
}
