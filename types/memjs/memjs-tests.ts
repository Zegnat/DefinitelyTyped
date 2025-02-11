import * as memjs from 'memjs';

const client = memjs.Client.create();

client.set('hello', 'world', { expires: 600 }, (err, val) => {
    console.log(err, val);
});
client.set('hello', 'world', { expires: 600 }); // $ExpectType Promise<boolean>
client.get('hello', (err, val) => {
    console.log(err, val);
});
client.get('hello'); // $ExpectType Promise<{ value: Buffer | null; flags: Buffer | null; }>

// Can initialize clients with client and server options
memjs.Client.create('12345', { username: 'hello' }); // $ExpectType Client
memjs.Client.create('12345', { retries: 3 }); // $ExpectType Client
