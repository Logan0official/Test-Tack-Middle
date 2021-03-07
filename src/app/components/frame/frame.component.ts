import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from './frame.model';
import { FrameService } from './frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit, OnDestroy {
  messages: Message[];
  today= new Date();
  jstoday = '';
  private subscription: Subscription;

  constructor(private frameService: FrameService) {
    this.jstoday = formatDate(this.today, 'hh:mm a | dd-MM-yyyy', 'en-US', '+0200');
  }

  ngOnInit() {
    this.messages = this.frameService.getMessages();
    this.subscription = this.frameService.messageChanged
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
