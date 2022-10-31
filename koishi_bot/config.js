module.exports = {
  port: 6800,
  onebot: {
    path: '',
    secret: '',
  },
  bots: [{
    type: 'onebot:ws',
    server: 'http://localhost:6700',
    selfId: '2118654642',
    token: 'lh6611000',
  }],
  plugins: {
    'common': {}
  },
}