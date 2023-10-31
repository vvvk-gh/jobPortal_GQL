# GraphQL Job Board

It uses Apollo Server with Express, and GraphQL-Request and Apollo Client as GraphQL clients. The application is used to explain queries, mutations, custom object types, authentication, etc.

## server

We need to install apollo server and graphql packages.
Expose server at one end point /graphql.

## GraphQL

It the fields can be nullable by default if you want the fields to be non nullable you have use the following

```
type Job {
   id: ID!
}
```

In such cases the query returns an error if the title is null
