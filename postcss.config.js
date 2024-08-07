module.export = () => ({
  plugins: [
    require('postcss-easy-import'),
    require('autoprefixer'),
    require('tailwindcss')
  ]
})