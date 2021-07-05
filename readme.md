## Live site https://www.anymail.ga/
## About

Full fledged email testing app, works with any mail you can think of. Includes email permutator that gives over 40 different email combinations to try verification for.

### Works on any email service provider out there, including:

Gmails, Outlook, HotMail, ProtonMail, Yahoo Mail, and many more.

Also gives a direct score, checking many different variables to find quality score.

## Tech Stack

- [x] Reddis for IP rate limiting on API calls
- [x] MongoDB for long term storage of all emails tested
- [x] Bootstrap for front end style
- [x] jQuery for interactive live site features
- [x] Express for middleware, routes, and server management
- [x] Vultr for cloud hosting 
- [x] Ngrok for load balancing and and URL forwarding
- [x] PM2 for process management 

## To work on next

- [x] Add sanatization, XML attack protection, and other security precautions
- [ ] Seperate routes and middleware to different files
- [ ] Add loading animation during email checking process
