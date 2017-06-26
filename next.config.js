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

    return config;
  },
};
