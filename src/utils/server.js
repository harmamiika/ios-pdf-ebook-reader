import StaticServer from 'react-native-static-server';

let server = new StaticServer(4200);

// Start the server
server.start().then(url => {
  console.log('Serving at URL', url);
});

// // Stop the server
// server.stop();

// // Check if native server running
// const isRunning = await server.isRunning()
// // isRunning - true/false
