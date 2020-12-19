module.exports = {
  presets:[
    [
      '@babel/preset-env',
      {
        "targets": {
          "browsers": [
            "last 3 versions",
            "ie >= 9"
          ]
        },
        "useBuiltIns": "usage",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins:[
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }]
  ]
}