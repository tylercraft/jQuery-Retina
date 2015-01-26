module.exports = function (grunt) {
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= template.today("m/d/yyyy") %>\n' +
        '* <%= pkg.homepage %>\n' +
        '* Copyright (c) <%= template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      'dist/jquery.retina.js': ['<banner>', 'src/jquery.retina.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      },
      all: [
        'src/jquery.retina.js'
      ]
    },
    uglify: {
      'dist/jquery.retina.min.js': ['<banner>', 'dist/jquery.retina.js']
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'qunit',
    'concat',
    'uglify'
  ]);
};
