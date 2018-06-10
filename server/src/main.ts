import socket from 'socket.io';
import { highlight } from 'cli-highlight';
import { ReplaySubject } from 'rxjs';
const io = socket(3000);
const messages$ = new ReplaySubject(20);
console.log('listening on port 3000');

io.on('connection', client => {

  messages$.subscribe(message => client.emit('message', message));

  client.on('message', message => {
    try {
      const isFunction = (/[const|let]+ ([\S]+) = (.+) => (.+)/ig).exec(message);
      if (isFunction !== null) {
        const [total, name, args, body] = isFunction;
        total;
        global[name] = eval(`(${args}) => ${body}`);
        client.emit('message', `function ${name} registered takes args ${args}`);
      } else {
        const result = eval(message);
        console.log('> ' + result.toString());
        messages$.next(result.toString());
      }
    } catch (_) {
      console.log('> ' + highlight(message, {language: 'javascript'}));
      messages$.next(message);
    }
  });
});