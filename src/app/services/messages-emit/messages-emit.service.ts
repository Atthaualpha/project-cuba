import { Injectable } from '@angular/core';

@Injectable()
export class MessagesEmitService {
  message = [];
  growlMessage = [];

  constructor() {}

  addMessage(severity: string, summary: string , detail: string) {
    this.message.push({ severity: severity, summary: summary, detail: detail });
    this.hideMessage();
  }

  newMessage(severity: string, summary: string , detail: string) {
    this.message = [];
    this.message.push({ severity: severity, summary: summary, detail: detail });
    this.hideMessage();
  }

  addGrowlMessage(severity: string, summary: string , detail: string) {
    this.growlMessage.push({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  newGrowlMessage(severity: string, summary: string , detail: string) {
    this.growlMessage = [];
    this.growlMessage.push({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  clearMessage() {
    this.message = [];
  }

  getMessage(): string[] {
    return this.message;
  }

  getGrowlMessage(): string[] {
    return this.growlMessage;
  }

  hideMessage() {
    setTimeout(() => {
      this.message = [];
    }, 4000);
  }
}
