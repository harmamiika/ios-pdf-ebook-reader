export default `
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EPUB.js</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/epubjs/dist/epub.min.js"></script>
    <style type="text/css">
      body {
        margin: 0;
      }
      #viewer {
        height: 100vh;
        width: 100vw;
        overflow: hidden !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body oncopy='return false' oncut='return false'>
    <div>yoooo</div>
    <div id="viewer"></div>
    <script>
    window.ReactNativeWebView?.postMessage('hello world');
    const path = window?.BOOK_PATH || '';
    window.ReactNativeWebView?.postMessage(JSON.stringify(path) +  'path hello world 3');

    window.ReactNativeWebView?.postMessage(JSON.stringify(ePub) +  ' epub');

    const book = ePub(path);
    window.ReactNativeWebView?.postMessage(JSON.stringify(book) +  'path hello world 4');

    </script>
  </body>
</html>
`;
