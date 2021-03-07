import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Message } from '../frame.model';
import { FrameService } from '../frame.service';

@Component({
  selector: 'app-frame-edit',
  templateUrl: './frame-edit.component.html',
  styleUrls: ['./frame-edit.component.scss']
})
export class FrameEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  // editMode = false;
  editedItemIndex: number;
  editedItem: Message;
  message = '';

  constructor(private frameService: FrameService) { }

  ngOnInit() {
    this.subscription = this.frameService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          // this.editMode = true;
          this.editedItem = this.frameService.getMessage(index);
          this.slForm.setValue({
            message: this.editedItem.message,
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newMessage = new Message(value.message);
    // if (this.editMode) {
    // } else {
      this.frameService.addMessage(newMessage);
    // }
    // this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    // this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set = 'native';
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    console.log(this.message)
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`)
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
}
