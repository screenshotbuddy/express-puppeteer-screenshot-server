# Express Puppeteer Screenshot Server

Create express server to take webpage screenshot using puppeteer

## Install Chrome on Ubuntu/Debian

```
apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    apt-transport-https \
    xvfb

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable

```

## Get Started

Clone repo and install dependencies

```
git clone https://github.com/screenshotbuddy/express-puppeteer-screenshot-server.git
cd express-puppeteer-screenshot-server
npm install
npm run dev
```

## Test Server

http://localhost:3000/screenshot?url=https://www.wikipedia.org/
