module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  title: 'Pokédex React App Styleguide',
  defaultExample: true,
  skipComponentsWithoutExample: true,
  sections: [
    { name: 'Introduction', content: './README.md' },
    { name: 'Core UI', components: './src/core/components/**/[A-Z]*.js' },
    {
      name: 'Pokémon View UI',
      components: './src/app/*/components/**/[A-Z]*.js',
    },
  ],
};
