# JS REPL CHAT

A terminal based chat client where everything entered is treated as code, and the message sent is the result of the code.

<img width="678" alt="screen shot 2018-06-10 at 14 40 30" src="https://user-images.githubusercontent.com/207421/41201681-650d6ad8-6cbc-11e8-9477-c6063d716b0e.png">


I.E you send `"chatting with code!".toUpperCase().split(' ').join('')` and the other person receives `C H A T T I N G W I T H C O D E !`. you can also specify functions for later use, simply by coding them.

`const joke = str => str + '... NOT!'`
`joke('I like coffee')`.


# What's working now
[x] Chatting
[x] getting a chat log for the last 50 messages when starting the client
[x] defining functions for later use
[x] sending / receving messages

# TODO

[ ] Channels
[ ] PMs
[ ] Tabs
[ ] Async functions
