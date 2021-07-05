## Live site https://www.anymail.ga/
## About

Full fledged email testing app, works with any mail you can think of. Includes email permutator that gives over 40 different email combinations to try verification for.

### Works on any email service provider out there, including:

Gmails, Outlook, HotMail, ProtonMail, Yahoo Mail, and many more.

Also gives a direct score, checking many different variables to find quality score.

## Included Features

- Robust logging system with email sending integration for important error notifications
- Intelligently streamligned security measures for the most common place attacks
- Tracks up to 11 different data points including MX records and SMTP to validate if an email exists
- Also checks if it’s a free email, disposable email, valid format, and more to give a .1 - 1 quality score
- Long term storage of all indicators, the email requested, and date using mongoDB


## Tech Stack

- Reddis for IP rate limiting on API calls
- MongoDB for long term storage of all emails tested
- Bootstrap for front end style
- jQuery for interactive live site features
- Express for middleware, routes, and server management
- Vultr for cloud hosting 
- Ngrok for load balancing and and URL forwarding
- PM2 for process management 

## To work on next

- [x] Add sanatization, XML attack protection, and other security precautions
- [ ] Seperate routes and middleware to different files
- [ ] Add loading animation during email checking process
