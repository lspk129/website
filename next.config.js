module.exports = {
  webpack: (config) => {
    // Remove minifed react aliases for material-ui so production builds work
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
    }
    config.externals = config.externals || {};
    config.externals['react/addons'] = true;
    config.externals['react/lib/ExecutionEnvironment'] = true;
    config.externals['react/lib/ReactContext'] = true;

    // config for loading css modules
    config.module.rules.push(
      { test: /\.(css|scss)/, loader: 'emit-file-loader', options: { name: 'dist/[path][name].[ext]' } },
      { test: /\.css$/, use: ['babel-loader', 'raw-loader'] });

    return config;
  },
};
