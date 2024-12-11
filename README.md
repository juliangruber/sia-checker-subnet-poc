# sia-checker-subnet-poc

Usage:

```console
$ node index.mjs
{ node: 'carribeanpeanuts.chickenkiller.com:9982', connect_ms: 151 }
{ node: '174.84.51.97:9982', connect_ms: 159 }
{ node: 'sial1.fdh.bz:9082', connect_ms: 30 }
{ node: 'sia.lindeboom.me:9982', connect_ms: 43 }
...
```

## Idea

For now, this proof of concept module only measures how long it takes to establish TCP connections on [Sia storage nodes](https://github.com/SiaFoundation/hostd)' `RHP2` port (`9982`). This is a publicly accessible part of sia nodes, I haven't had luck trying to access other parts.

The Sia network already has [TTFB data from nodes](https://siascan.com), and I assume this is on the data retrieval level, and not the TCP connection level. Therefore, this subnet is at this stage not providing any value.

What is however not yet present in the Sia ecosystem is node location information. Through the Checker DePIN network, this can be added, by measuring TCP connect times from geographically distributed nodes, and estimating node location in a distributed fashion.
