# nubuscu.github.io

hello, this is my site. At the moment, it's just hosting a project I dubbed "pretense".

## Pretense

### What is it?

An attempt at:

1. Talking about the albums and artists I know and enjoy, how I came in contact with them
1. Recommending related bands.
1. Explaining the life-long frog boiling that got me from CCM to actually enjoying death metal.

## What is it not?

- A reflection of the absolute truth on quality music
- A complete list of the things I like or actively listen to
- A hotdog stand..?

## What's in a name?

talking about music, or art in general, can fee la bit pretentious

## Tech stack

it's all hiding in another repo, which I might publish if I clean it up a bit. It's been a long-running project that I've used primarily to write and rewrite to learn new technologies.

If you're a[n aspiring] dev and want to play around with new things, I'd highly recommend something like this. Pick a domain that interests you and try writing it in a language/framework you know, then change it to a different stack.

The frontend is entirely static, so there's no need to deploy a backend. It's using svelte-kit, cytoscape.js for the graph rendering, and a graphql backend at compile time for data.
The backend has had a few iterations:

1. FastAPI and Postgres, because that's what I use during my day job
1. swapped database to MongoDB, to try out something NoSQL
1. swapped database gremlin/janusgraph, to try out a graph db.
1. swapped API to use strawberry, to try out graphQL
1. replaced both parts with entgo.io, to keep using graphQL, but generated with `go` code, with automagic entity relationships
