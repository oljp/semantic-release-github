module.exports = {
  preset: 'angular',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    { name: 'develop', channel: 'dev', prerelease: true },
    { name: 'beta', prerelease: true }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/github',
      {
        assets: ['dist/*.tgz'],
        
        successComment: {
          enabled: false
        },
        
        releasedLabels: {
          enabled: true,
          labels: ['released on <%= nextRelease.channel ? `${nextRelease.channel}` : "test" %>']
        }
      }
    ],
    '@semantic-relase/git'
  ]
};
