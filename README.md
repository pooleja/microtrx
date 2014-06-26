#MicroTrx
========

MicroTrx is a micro-transaction gateway.  The goal is to provide a service that lets a single customer send many micro-transactions to many different services.  On the flip side a service can set up payment requests for many customers and validate that the customer has paid.

Since payments funnel through the gateway, the total number of transaction fees will be lowered.  Traditionally the transaction fees for online purchases are the number of purchases times the average transaction fee, while using a gateway can lower it to the number of users times a transaction fee for a given time period.  Think 2xN instead of NxN.

##Features
- Ability to cheaply buy and sell low priced goods online 
- Neither the end user or service provider needs to create any accounts or give anyone personal information
- No money held by the payment gateway for end users and optionally held for service providers for convenience
- Instant authorization for purchased goods/content
- Micro-payment channels utilized to ensure the lowest transaction costs
- 3rd Party plug-ins, APIs, and examples for integration into a service or wallet

##Simple Use Case

Charlie is browsing the web and goes to read a linked news article to News.Example.com.  When he navigates to the page, he hits a paywall.  He is provided the option to subscribe to to site for $1 a month to get unlimited content or pay a one time fee of $0.05 to read a single article.

Charlie is unsure of the quality of this site, so he decides to pay for this single article to read.  He clicks a link to pay for the article for $0.05 which triggers an integrated wallet in his browser.  Charlie doesn't currently have any payment channels open with MicroTrx, so he is prompted to create a new one.

The wallet asks Charlie to confirm to create a new Micro Payment Channel with MicroTrx.com.  A Bitcoin fee of 0.0005 BTC will be paid as a transaction fee and the Payment Channel will be initialized with 0.005 as the default.  Charlie is also presented with an option to automatically pay News.Example.com for any future requests with this Payment Channel, and Charlie accepts.

Charlie's wallet makes a connection to MicroTrx and initiates the Payment Channel.  Once this is confirmed, the wallet also pulls information in the payment request from the page loaded in the browser on New.Example.com and gets a transaction ID that would allow Charlie to read this article.  The wallet then sends a message to MicroTrx to request payment from the Payment Channel to be used for this transaction ID.

Once MicroTrx validates the payment request from Charlie to News.Example.com, it tags the payment request as paid.  This in turn triggers a asynchronous javascript call to be executed which in turn authorizes the article to be shown to Charlie in his browser.

Charlie is happy.

Once Charlie is finished reading his amazing news article, he notices another link on the same page to a different News.Example.com article.  He clicks on this link and the integrated wallet automatically triggers a payment request for the new article from his existing Payment Channel and it is authorized to be displayed in Charlie's browser.

Charlie is very happy now.  So is News.Example.com.