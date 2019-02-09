/*global canto $*/

var App = function(canvas) {
    var w = parseInt($('#' + canvas).attr('width'), 10);
    var h = parseInt($('#' + canvas).attr('height'), 10);
    var c = canto("c");


    /* Private Methods */
    function prepareCommand(codeText) {
      codeText = codeText.replace(/(^\s+)|(\s+$)/g, ''); // Trim
      // Default lt and rt is 90
      if (['rt', 'lt'].indexOf(codeText) > -1) return codeText + ' 90';
      // Default arc
      //var arc1 = codeText.match(/^arc (\d+)$/i);
      return codeText;
    }

    function rotatePoint(x, y, angle) {
      return [Math.round(x * Math.cos(angle) - y * Math.sin(angle)),
      Math.round(y * Math.cos(angle) + x * Math.sin(angle))];
    }


    return {

      init: function() {
        this.c = c;
        this.showTurtle = true;
        this.history = []; // Clear history stack
        this.historyIndex = 0;
      },

      /**
       * Clear and initialise the canvas
       */
      clear: function() {
        c.reset(); // Initialise canvas
        c.angleUnit = 'degrees'; // Set units to degrees
        c.moveTo(w / 2, h / 2); // Move to center of canvas
        c.pd(); // Pen Down
        c.lineWidth = 2; // Better arrow symmetry
        c.strokeStyle = '#008'; // Navy
        return this; // Chaining
      },

      /**
       * Start a new program
       */
      start: function() {
        this.init();
        this.clear(); // Clear canvas
        if (this.onStart) this.onStart(); // UI event listener
        this.show();
        c.stroke();
        return this; // Chaining
      },

      /**
       * Show current position
       */
      show: function() {
        if (!this.showTurtle) return this;
        var p = rotatePoint(-4, 5, this.c._orientation + Math.PI / 2);
        this.c.l(p[0], p[1]);
        p = rotatePoint(4, - 5, this.c._orientation + Math.PI / 2);
        this.c.l(p[0], p[1]);
        p = rotatePoint(4, 5, this.c._orientation + Math.PI / 2);
        this.c.l(p[0], p[1]);
        c.stroke();
        return this;
      },

      /**
       * Parse, save and execute a new command
       */
      command: function(codeText) {
        codeText = prepareCommand(codeText); // Normalise and autocomplete code
        if (!codeText) return; // Exit if nothing was entered
        this.history.push(codeText); // Add new code to history
        this.run(this.history); // Run entire history
      },

      run: function(prog) {
        this.clear();
        var lines = [];
        for (var i in prog) {
          if (this.exec(prog[i]) !== false) { // Execute command
            c.stroke();
            lines.push(prog[i]); // Valid command
          }
        }
        this.history = lines;
        this.historyIndex = 0;
        this.show();
      },

      /**
       * Parse and execute a command on the canvas
       * @param string codeText
       */
      exec: function(codeText) {

        if (!codeText) return false;
        //console.log('EXEC', codeText);

        // Parse code
        var code = codeText.split(' ');
        var cmd = code[0].toLowerCase();
        var params = code.splice(1);

        // Convert strings to integers
        for (var i in params) {
          params[i] = params[i].replace(/[\[\]]/, ''); // Remove [] brackets
          if (params[i].match(/^\-?\d+$/)) {
            params[i] = parseInt(params[i], 10);
          }
        }

        // What type of command is this?
        if (typeof this[cmd] == 'function') {
          this.beginPath();
          this[cmd].apply(this, params); // Our function
        } else if (typeof c[cmd] == 'function') {
          this.beginPath();
          c[cmd].apply(c, params); // Canto function
        } else {
          window.alert('Unknown command "' + cmd + '"!'); // Unknown command
          return false;
        }
        return true;
      },

      beginPath: function() {
        var was = [c.currentX, c.currentY];
        c.beginPath();
        c.moveTo(was[0], was[1]);
        //c.pd();
      },

      /**
       * Simplified ARC function
       * @param int r
       */
      arc: function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var r = args[0]; // 1st param is radius
        if (!args[1]) args[1] = r; // If no 2nd param -> circle
        var was = [c.currentX, c.currentY]; // ***arc hack***
        c.moveTo(c.currentX + (r - 1), c.currentY); // ***arc hack***
        args.splice(0, 0, was[0], was[1]);
        c.ellipse.apply(c, args);
        c.moveTo(was[0], was[1]); // ***arc hack***
        return this;
      },

      /**
       * Set Pen Color
       */
      setpc: function(r, g, b) {
        if (arguments.length === 3) { // [r g b]
          c.strokeStyle = ['rgb(', r, ',', g, ',', b, ')'].join('');
        } else {
          c.strokeStyle = r; // 'red' or '#F00'
        }
      },

      setpos: function(x, y) {
        if (c._penup === true) {
          c.moveTo(x, y);
        } else {
          c.lineTo(x, y);
        }
      },

      /**
       * Set Pen Size
       */
      setpensize: function(x) {
        c.lineWidth = x;
      }, // Pen Size
      st: function() {
        this.showTurtle = true;
      }, // Show Turtle
      ht: function() {
        this.showTurtle = false;
      }, // Hide Turtle
      cs: function() {
        return this.clear();
      } // Clear Screen

    }; // Public members

  }; // Class App

$(function() {

  var app = new App('c');
  app.start();

  // Code Entry
  $('#code').keyup(function(e) {
    var el = $(this);
    if (e.keyCode == '13') { // [ENTER]
      var cmd = el.val(); // Get command
      app.command(cmd); // Execute command
      el.val(''); // Clear command
      $('#history').val(app.history.join('\n')); // Show command history
    } else if (e.keyCode == 38) { // [UP] - Last Command
      if (app.historyIndex <= app.history.length) {
        app.historyIndex++;
        el.val(app.history[app.history.length - app.historyIndex]);
      }
    } else if (e.keyCode == 40) { // [DOWN] - Next Command
      if (app.historyIndex > 0) {
        app.historyIndex--;
        el.val(app.history[app.history.length - app.historyIndex]);
      }
    } // else console.log(e.keyCode);
  }).focus();

  $('#btnRun').bind('click', function() {
    var prog = $('#history').val();
    var lines = prog.split('\n');
    for (var i in lines) app.history.push(lines[i]);
    app.run(app.history);
  });

  /**
   * New Program
   */
  $('#btnNew').bind('click', function() {
    app.start();
  });

  /**
   * Square Demo
   */
  $('#btnSquare').bind('click', function() {
    $('#history').val('fd 100\nrt 90\nfd 100\nrt 90\nfd 100\nrt 90\nfd 100\nrt 90');
    var prog = $('#history').val();
    var lines = prog.split('\n');
    for (var i in lines) app.history.push(lines[i]);
    app.run(app.history);
  });

  /**
   * Save Program
   */
  $('#btnSave').bind('click', function() {
    var name = $('#progName').val();
    if (!name) return window.alert('Please type a program name!');
    window.localStorage.setItem('LogoProg::' + name, $('#history').val());
    window.localStorage.setItem('LogoProg::_Last', $('#history').val());
    window.localStorage.setItem('LogoProg::_Last_Name', name);
    return false;
  });

  /**
   * Load Program
   */
  $('#btnLoad').bind('click', function() {
    var name = $('#progName').val();
    if (!name) return window.alert('Please type a program name!');
    loadProg(name);
    return false;
  });

  app.onStart = function() {
    $('#history').val('');
    return false;
  };

  function loadProg(name) {
    var prog = window.localStorage.getItem('LogoProg::' + name);
    $('#history').val(prog);
    return false;
  }

  // Load last program
  loadProg('_Last');
  $('#progName').val(window.localStorage.getItem('LogoProg::_Last_Name'));

});