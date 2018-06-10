import { list, Widgets } from 'blessed';

export const MessageList = (screen): Widgets.ListElement => {
  const messageList = list({
    parent: screen,
    width: '100%',
    top: 0,
    left: 0,
    height: '90%',
    border: {
      type: 'line',
    },
  });
  return messageList;
};
