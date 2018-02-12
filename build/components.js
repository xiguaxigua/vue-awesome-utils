module.exports = [
  {
    entry: 'src/scroll-lock.js',
    dist: 'lib/scroll-lock.esm.js',
    type: 'es',
    min: false
  },
  {
    entry: 'src/scroll-lock.js',
    dist: 'lib/scroll-lock.common.js',
    type: 'cjs',
    min: false
  },
  {
    entry: 'src/scroll-lock.js',
    dist: 'lib/scroll-lock.common.min.js',
    type: 'cjs',
    min: true
  },
  {
    entry: 'src/scroll-lock.js',
    dist: 'lib/scroll-lock.js',
    type: 'umd',
    min: false,
    name: 'componentGlobalName'
  },
  {
    entry: 'src/scroll-lock.js',
    dist: 'lib/scroll-lock.min.js',
    type: 'umd',
    min: true,
    name: 'componentGlobalName'
  }
]
