# messedup-meter

messedup-meter is a small project where we count each other mistakes in the popular action game from 2013 Payday 2. Rules were exchanged verbally 

## Work in Progress

messedup-meter is still work in progress with plans to make it more open and dynamic to the public use. Very handy to laugh at your friends or to use it for discussions

## Installation / Setup

Once forked. Please don't forget to install the packages and dependency's.  

```bash
npm install
```
or
```bash
yarn install
```

Once done please make sure you have a .env file in order to use the db file

```bash
API_KEY=
```

If you are done with the previous step please make a file in your root folder : next.config.js
You can copy and paste the following code in the config file

```
module.exports = {
  env: {
    PASSWORD_WEBSITE: 'Your_Password',
  },
}
```

For some reason the .env doesnt work or gives 'undefined'. So kinda a workaround but it works.

## Usage
This open-source project uses NextJs. See the [Next.js](https://nextjs.org/) documentation 

This project uses [Fauna](https://fauna.com/) as its database. Please use the [Fauna docs](https://docs.fauna.com/fauna/current/) to proceed further

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author
👦 Anthony

* GitHub: [GitHub](https://github.com/S3ntrail)
* Discord: Sentrail#6141

## License
[MIT](https://choosealicense.com/licenses/mit/)
