module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://brcadv.com/api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ff1be59491d100a44b775ac29ef91719'),
    },
  },
});
