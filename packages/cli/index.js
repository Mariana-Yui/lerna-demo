if (process.env.LOCAL_DEBUG) {
  require('./src')
} else {
  require('./dist')
}
