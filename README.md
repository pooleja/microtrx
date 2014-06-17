MicroTrx
========

MicroTrx is a micro-transaction gateway.  The goal is to provide a service that lets a single customer send many micro-transactions to many different services.  On the flip side a service can set up payment requests for many customers and validate that the customer has paid.

Since payments funnel through the gateway, the total number of transaction fees will be lowered.  Traditionally the transaction fees for online purchases are the number of purchases times the average transaction fee, while using a gateway can lower it to the number of users times a transaction fee for a given time period.  Think 2xN instead of NxN.

Features
- Ability to cheaply buy and sell low priced goods online 
- Neither the end user or service provider needs to create any accounts or give anyone personal information
- No money held by the payment gateway for end users and optionally held for service providers for convenience
- Instant authorization for purchased goods/content
- Micro-payment channels utilized to ensure the lowest transaction costs
- 3rd Party plug-ins, APIs, and examples for integration into a service or wallet
