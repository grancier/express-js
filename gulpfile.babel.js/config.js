/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/js',
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  },
  copy: {
    src: 'src/robots.txt',
    dest: 'dist/'
  }
};
