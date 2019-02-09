var board = (function(size) {
	
	function Piece(p) {
		p = p || {};
		return {
			i:def(p.i, -1),
			j:def(p.j, -1),
			piece:def(p.piece, false),
			on:def(p.on, false),
			valid:def(p.valid, true)
		};
	}
	
	Piece.prototype = {
		debug: function(){console.log(this);}
	};
	
	//	'this' reference to new object
	var that = {};
	
	// Private Properties
	that.squares = [];
	that.square = new Piece();

	// Generate board
	for (var i=0; i<size; i++) {
		that.squares[i]=[];
		for (var j=0; j<size; j++) {
			that.squares[i][j] = new Piece({i:i,j:j,valid:false});
			if ((i>=3 && i<=5)||(j>=3 && j<=5)) {
				that.squares[i][j].piece = true;
				that.squares[i][j].valid = true;
			}
			if (i===4&&j===4) {that.squares[i][j].piece = false;}
		}
	}
	
	that.each = function(callback) {
		for (var i=0; i<size; i++) {
			for (var j=0; j<size; j++) {
				callback(this.squares[i][j]);
			}
		}
	};
	
	that.between = function(p1, p2) {
		return p1.i===p2.i?this.squares[p2.i][(p1.j+p2.j)/2]:this.squares[(p1.i+p2.i)/2][p2.j];
	};
	
	that.click = function(i, j) {
		var cl = this.squares[i][j];
		console.log('BEFORE',cl);
		if (this.square.i>=0) {
			var oldSquare = this.squares[this.square.i][this.square.j];
			if (this.square.i===i && this.square.j===j) {
				oldSquare.on = false;
				this.square = new Piece();
				console.log('RESET');
			} else if ((this.square.i===i && Math.abs(this.square.j-j)===2)||
			           (this.square.j===j && Math.abs(this.square.i-i)===2)) {
				// Move 2 away
				if (!cl.piece) {
					oldSquare.on = false;
					
					var jumped = this.between(oldSquare, cl);
					console.log(jumped);
					if (jumped.piece===true) {
						jumped.piece = false;
						this.square = new Piece();
						oldSquare.piece = false;
						cl.piece = true;
						console.log('MOVE');
					} else {
						console.log('NO MOVE');
					}
				} else {
					console.log('NO MOVE');
				}
			} else if (cl.piece) {
				oldSquare.on = false;
				cl.on = true;
				this.square=cl;
				console.log('RESET');
			}
		} else if (cl.piece===true) {
			// Select piece
			this.squares[i][j].on = true;
			this.square = this.squares[i][j];
			console.log('SELECT');
		}
		//console.log('AFTER',cl);
	};
	
	that.draw = function(boardDiv) {
		boardDiv.empty();
		this.each(function(square) {
			boardDiv.append('<div id="'+square.i+'_'+square.j+'"></div>');
			if (square.valid===true) {$(boardDiv.find('#'+square.i+'_'+square.j)[0]).addClass('valid');}
		});
	};
	
	that.reDraw = function(boardDiv) {
		this.each(function(square) {
			var div = $(boardDiv.find('#'+square.i+'_'+square.j)[0]);
			if (square.piece===true) {div.addClass('piece');} else {div.removeClass('piece');}
			if (square.on===true) {div.addClass('on');} else {div.removeClass('on');}
		});
	};
	
	return that;
	
}(9));

$(function(){
	console.log('OK');
	
	board.draw($('#board'));
	board.reDraw($('#board'));
	
	$('#btn').bind('click', function() {
		console.log($('div#5_5'));
	});
	
	$.each($('#board div'), function(i, el) {
		$(el).bind('click', function() {
			var i  = parseInt(this.id.substr(0,1), 10),
				j  = parseInt(this.id.substr(2,1), 10);
			board.click(i, j);
			board.reDraw($('#board'));
		});
	});
});

/**
  * @param string data
  */
function dp(d) {
	console.log(d);
}

/**
  * @param string v
  * @return {String}
  */
function def(v, d) {
	if (typeof v !== 'undefined') {return v;}
	return d;
}