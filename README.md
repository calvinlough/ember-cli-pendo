# Ember-cli-pendo

Add pendo to your application.

## Installation

`ember install ember-cli-pendo`

## Usage

Configure your Pendo API key in environment.js
```javascript
// environment.js
ENV['ember-cli-pendo'] = {
  apiKey: 'abc-123'
};
```

The Pendo JavaScript API is now available globally at window.pendo

For example,
```javascript
const data = {
  visitor: {
    id: user.get('id'),
    email: user.get('email')
  },
  account: {
    id: account.get('id')
  }
};
window.pendo.identify(data);
```
