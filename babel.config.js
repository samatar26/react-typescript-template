module.exports = (api) => {
  const env = process.env.NODE_ENV
  api.cache.using(() => env)

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [env === 'development' && 'react-refresh/babel'].filter(Boolean),
  }
}
