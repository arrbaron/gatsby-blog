---
path: '/all-shall-submit-to-our-new-graphql-overlord'
title: 'What is GraphQL and why is it taking over the world?'
published: true
date: '2018-03-30'
tags: 'intro cornflower-blues hello-world'
---

One of the main reasons I set up this blog was to start flirting with GraphQL, because [Gatsby](https://www.gatsbyjs.org/) (more on that in a later post) uses GraphQL for data fetching.

### What is GraphQL?

GraphQL is a hot new _querying language_ (hence the QL) that lets you write really nice queries for data. Okay, but what does that mean in English?

Imagine you have an API that holds animals. You want your data to resemble something like the following:

```
animals: {
  cats: [
    {
      name: 'Ziggy',
      age: 17,
      gender: 'f'
    },
    {
      name: 'Marvin',
      age: 4,
      gender: 'm'
    }
  ],
  dogs: [
    {
      name: 'Clapton',
      age: 2,
      gender: 'm'
    },
    {
      name: 'Layla',
      age: 10,
      gender: 'f'
    }
  ]
}
```

Now let's say you want to get all of the kitties from your database. In a traditional rest API, you would probably have a GET endpoint that would look something like 
`app.get('/api/cats') // etc etc`
 
This is a totally great and human readable solution! Which is why REST was so warmly embraced at its inception. But what happens when you want to get more specific with your queries? What if I want to grab cats AND dogs but I only need their names?  Well okay, no problem. I'll just set up a separate endpoint for dogs at `app.get('/api/dogs')` and make two API calls.

Looking... good... right? Well, I can already see two problems. First, we're making two separate calls for one batch of data. Second, look at all of this data we're getting back that we're not using. Age? Gender? I mean we could write separate endpoints just for those properties like `app.get('/api/cats/names)` but how scalable is that?

You can see that what started out as semantically nice endpoints quickly compounds to long chains of endpoints. And this is only a simple API. Imagine if you had something more complex going on in your API. `app.get('/api/animals/:age/:gender/:breed/:ohgod/:please/:send/:help')`

### Should I give into despair?

Yes! But not until after reading this blog post! Enter __GraphQL__ to save the day! Our good buddy allows us to write queries that __mimic the data you're expecting back__. This is the real power of GraphQL. So let's look for kitties again, this time with GraphQL.

```
animals
{
  cats
}
```

Okay... now let's cats AND dogs but ONLY their names...

```
animals {
  cats {
    name
  }
  dogs {
    name
  }
}
```

And voila. How nice is that? The query looks almost exactly like the data we want to get back, all in only one call to our API!


### Does this mean REST isn't cool anymore and that I should get a GraphQL face tattoo?
No to the first question. Yes to the second. GraphQL can be used in conjunction with a REST style API and it's not necessarily an absolute replacement. This is just the tip of the iceberg and I'm looking forward to exploring it further.

### How can I learn more about this from someone more intelligent?
[GraphQL's official site](https://graphql.org/)

[Net Ninja's YouTube series](https://www.youtube.com/watch?v=Y0lDGjwRYKw)