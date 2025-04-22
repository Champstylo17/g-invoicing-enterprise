#!/bin/bash
# One-click Heroku deploy script
heroku create enterprise-saas-app
heroku config:set JWT_SECRET=your_jwt_secret DB_ENGINE=mongo --app enterprise-saas-app
git push heroku main
heroku open
