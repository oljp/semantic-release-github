module.exports = {
  preset: 'angular',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    { name: 'develop', channel: 'dev', prerelease: true },
    { name: 'beta', prerelease: true }
  ],
  plugins: [
  ]
};
