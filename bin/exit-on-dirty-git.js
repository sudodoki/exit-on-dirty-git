#!/usr/bin/env node
var dirtyGit = require('dirty-git');
var stream = dirtyGit(process.cwd(), {depth: 1})
  .on('readable', function() {
    var repo = this.read();
    if (repo && repo.status.length) {
      console.log('not all changes are committed, exiting (1)');
      process.exit(1);
    }
  });