# strapi-provider-email-mandrill

## Resources

- [License](LICENSE)

## Links

- [Strapi website](https://strapi.io/)
- [Strapi community on Slack](https://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in you Strapi project.

## Installation

```bash
# using yarn
yarn add @maddog986/strapi-provider-email-mandrill

# using npm
npm install @maddog986/strapi-provider-email-mandrill --save
```

## Configuration

| Variable                      | Type                    | Description                                                         | Required | Default   |
| ----------------------------- | ----------------------- | ------------------------------------------------------------------- | -------- | --------- |
| provider                      | string                  | The name of the provider you use                                    | yes      |           |
| providerOptions               | object                  | Provider options                                                    | yes      |           |
| providerOptions.apiKey        | object                  | Api key from Mandrill.                                              | yes      |           |
| providerOptions.apiUsername   | object                  | Api username from Mandrill.                                         | yes      |           |
| settings                      | object                  | Settings                                                            | no       | {}        |
| settings.defaultFrom          | string                  | Default sender mail address                                         | no       | undefined |
| settings.defaultReplyTo       | string \| array<string> | Default address or addresses the receiver is asked to reply to      | no       | undefined |

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'mandrill',
    providerOptions: {
      apiKey: env('MANDRILL_KEY', ''),
      apiUsername: env('MANDRILL_USERNAME', '')
    },
    settings: {
      defaultFrom: env('EMAIL_FROM', ''),
      defaultReplyTo: env('EMAIL_REPLY', ''),
    }
  },
  // ...
});
```