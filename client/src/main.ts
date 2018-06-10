import io from 'socket.io-client';
const client = io('http://127.0.0.1:3000');
import blessed from 'blessed';
import { MessageInput, MessageList, MessageForm } from './components';

import { fromEvent } from 'rxjs';

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
});
const form = MessageForm(screen);
const list = MessageList(screen);
const input = MessageInput(form);

input.enableInput();

fromEvent(input, 'submit')
  .subscribe(text => client.emit('message', text));

screen.append(list);
screen.render();
screen.key(['escape', 'q', 'C-c'], (_, __) => process.exit(0));

client.connect();
client.on('message', message => list.addItem(`> ${message}`));
client.on('disconnect', client => console.log(client));