import { Message } from './frame.model';
import { Subject } from 'rxjs';

export class FrameService {
  messageChanged = new Subject<Message[]>();
  startedEditing = new Subject<number>();
  private message: Message[] = [
  ];

  getMessages() {
    return this.message.slice();
  }

  getMessage(index: number) {
    return this.message[index];
  }

  addMessage(message: Message) {
    this.message.push(message);
    this.messageChanged.next(this.message.slice());
  }
}
