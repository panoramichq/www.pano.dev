module.exports = {
  experimental: 'all',
  variants: {
    display: ['responsive', 'group-hover'],
    backgroundClip: ['responsive']
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js']
};
