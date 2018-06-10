import { textbox, form, Widgets } from 'blessed';

export const MessageForm = screen => form({
  parent: screen,
  name: 'form',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const MessageInput = (form): Widgets.TextboxElement => {
  const input = textbox({
    parent: form,
    name: 'message',
    bottom: 0,
    left: 0,
    alwaysScroll: true,
    height: '10%',
    inputOnFocus: true,
    content: 'message',
    border: {
      type: 'line',
    },
    style: {
      fg: 'green',
      bg: 'black',
    }
  });
  input.on('submit', () => {
    input.clearValue();
    input.focus();
  });
  return input;
};