//integrate Apollo server into the express app
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from 'node:fs/promises'
import { resolvers } from './resolvers.js'

import cors from 'cors';
import express from 'express';
import { authMiddleware, handleLogin } from './auth.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

//integrate Apollo server into the express app
const typeDefs = await readFile('./schema.graphql', 'utf-8');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint on http://localhost:${PORT}/graphql`);
});
