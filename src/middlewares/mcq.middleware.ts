// import { Injectable, NestMiddleware } from '@nestjs/common';
// import * as session from 'express-session';
// import * as redis from 'redis';
// import connectRedis from 'connect-redis';

// @Injectable()
// export class SessionMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     const redisClient = redis.createClient({
//       url: 'redis://localhost:6379',
//     });

//     redisClient.on('error', (err) => {
//       console.error('Redis error:', err);
//     });

//     // Use connectRedis function to create the RedisStore
//     const RedisStore = new connectRedis(session);

//     // Pass the client to RedisStore
//     const redisStore = new RedisStore({
//       client: redisClient,
//     });

//     session({
//       store: redisStore, // Use the configured Redis store
//       secret: 'your-secret-key', // Replace with a strong secret
//       resave: false,
//       saveUninitialized: false,
//       cookie: { maxAge: 3600000 }, // 1 hour
//     })(req, res, next);
//   }
// }
