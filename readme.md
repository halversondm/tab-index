# Tab Index

##### A study in how tabs work in browsers!

I was recently faced with an issue where a page that opens a modal has an iframe with a form related to tab indexing.  I did some googling on how tabs work on a webpage and thought I would share the end result.

The overall goal of the project is to show how to 'mute' the tabs on the non-modal part of the page while the modal is open.  Then 'unmute' the tabs when the modal closes.  Two implementations are provided.

`/public/vanilla` directory deals with tabs in pure JS.  No jQuery.  No Bootstrap.

`/public/bootstrap` direcotry deals with tabs in Bootstrap and jQuery.  The Bootstrap part is the modal.

 