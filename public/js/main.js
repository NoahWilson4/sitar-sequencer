$(document).on('ready', function() {

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var note;

	function playNote(url) {
		note = audioCtx.createBufferSource();
		  request = new XMLHttpRequest();
		  request.open('GET', url, true);
		  request.responseType = 'arraybuffer';

		  request.onload = function() {
		    var audioData = request.response;
		    audioCtx.decodeAudioData(audioData, function(buffer) {
		        note.buffer = buffer;
		        note.connect(audioCtx.destination);
		        note.loop = false;
		    },
		    function(e){"Error with decoding audio data" + e.err});
		  }
		request.send();
		note.start(0);
	}


//////// drones
	
	    var droneleftrev = document.createElement('audio');
			        droneleftrev.setAttribute('src', '../audio/droneleftrev.mp3');
			        droneleftrev.setAttribute('autoplay', 'autoplay');
			        droneleftrev.load();
			        $.get();
					// droneleftrev.play(0);
					droneleftrev.loop = true;
					droneleftrev.loopStart = 0;
					droneleftrev.LoopEnd = 41;
					


		var dronerightrev = document.createElement('audio');
			        dronerightrev.setAttribute('src', '../audio/dronerightrev.mp3');
			        dronerightrev.setAttribute('autoplay', 'autoplay');
			        dronerightrev.load()
			        $.get();
		            // dronerightrev.play(0);
		            dronerightrev.loop = true;
					dronerightrev.loopStart = 0;
					dronerightrev.LoopEnd = 37;
					

		var dronecenter = document.createElement('audio');
			        dronecenter.setAttribute('src', '../audio/dronecenter.mp3');
			        dronecenter.setAttribute('autoplay', 'autoplay');
			        dronecenter.load()
			        $.get();
		            // dronecenter.play(0);
		            dronecenter.loop = true;
					dronecenter.loopStart = 0;
					dronecenter.LoopEnd = 153;

		$(document).on('mouseover', '.main', function(){
			dronecenter.play(0);
			dronerightrev.play(0);
			droneleftrev.play(0);
		})		


//////// notes



	var palo = '../audio/palo1.mp3';
	var dhalo = '../audio/dhalo1.mp3';
	var nilo = '../audio/nilo1.mp3';
	var sa = '../audio/sa1.mp3';
	var re = '../audio/re1.mp3';
	var ga = '../audio/ga1.mp3';
	var ma = '../audio/ma1.mp3';
	var pa = '../audio/pa1.mp3';
	var dha = '../audio/dha1.mp3';
	var ni = '../audio/ni1.mp3';
	var sahi = '../audio/sahi1.mp3';
	var rehi = '../audio/rehi1.mp3';
	var gahi = '../audio/gahi1.mp3';



	var backgroundChange = function(thisClass) {
		$('.main').removeClass(prevClass);
		$('.main').addClass(thisClass);
		prevClass = thisClass;
	}

	var prevClass = 'palopic';

    $(document).on('mouseover', '.pa-lo', function(){
    	playNote(palo);
    	backgroundChange('palopic');
	});

	$(document).on('mouseover', '.dha-lo', function(){
		playNote(dhalo);
		backgroundChange('dhalopic');
	})

	$(document).on('mouseover', '.ni-lo', function(){
		playNote(nilo);
    	backgroundChange('nilopic');
	})       		

    $(document).on('mouseover', '.sa', function(){
		playNote(sa);
    	backgroundChange('sapic');
	})

	$(document).on('mouseover', '.re', function(){
		playNote(re);
    	backgroundChange('repic');
	})

	$(document).on('mouseover', '.ga', function(){
		playNote(ga);
    	backgroundChange('gapic');
	})

	$(document).on('mouseover', '.ma', function(){
		playNote(ma);
    	backgroundChange('mapic');
	})

	$(document).on('mouseover', '.pa', function(){
		playNote(pa);
    	backgroundChange('papic');
	})

	$(document).on('mouseover', '.dha', function(){
		playNote(dha);
    	backgroundChange('dhapic');
	})

	$(document).on('mouseover', '.ni', function(){
		playNote(ni);
    	backgroundChange('nipic');
	})

	$(document).on('mouseover', '.sa-hi', function(){
		playNote(sahi);
    	backgroundChange('sahipic');
	})

	$(document).on('mouseover', '.re-hi', function(){
		playNote(rehi);
    	backgroundChange('rehipic');
	})

	$(document).on('mouseover', '.ga-hi', function(){
		playNote(gahi);
    	backgroundChange('gahipic');
	})

	$(document).on('mouseover', '.drone', function(){
		playNote('../audio/drone2.mp3');
	});

	$(document).on('mouseover', '.strings', function(){
		playNote('../audio/strings.mp3');
	});

	$(document).on('mouseover', '.bowl', function(){
		playNote('../audio/bowl.mp3');
	});

// ///////////////// sequencer /////

var rest = 0;
var song = [rest, rest, rest, rest, rest, rest, rest, rest];
var background = [prevClass, prevClass, prevClass, prevClass, prevClass, prevClass, prevClass, prevClass]
var noteBars = ['.note1', '.note2', '.note3', '.note4', '.note5', '.note6', '.note7', '.note8'];
var nI = 0;
// var player = setInterval(function(){
// 		console.log('tick');
// 		console.log('nI: ', nI)
// 		if ( song[nI] !== 0 ) { 
// 			playNote(song[nI]);
// 		};
// 		backgroundChange(background[nI]);
// 		$(noteBars[nI]).toggleClass('flash');
// 		// $('.on').addClass('on2');
		
// 		nI++;
// 		if (nI === song.length) {
// 			nI = 0;
// 		}}, 250);

	$(document).on('click', '.play', function(){
		nI = 0;
		var timer = setInterval(function(){
			console.log('tick');
			console.log('nI: ', nI)
			if ( song[nI] !== 0 ) { 
				playNote(song[nI]);
			};
			if (song[ni] === 0) {
				background[ni] = background[nI - 1];
				prevClass = background[nI - 1];
			} else {
				backgroundChange(background[nI]);
			}
			$(noteBars[nI]).toggleClass('flash');
			// $('.on').addClass('on2');
			
			nI++;
			if (nI === song.length) {
				nI = 0;
			}
		}, 250);
		$(document).on('click', '.stop', function(){
			clearInterval(timer);
			for (var i = 0; i < noteBars.length; i++) {
				$(noteBars[i]).removeClass('flash');
			}
		});
	});

	

////////////// pads /////////////////////

	///// click functions/////////////
	
	var previousNote1;
	var previousNote2;
	var previousNote3;
	var previousNote4;
	var previousNote5;
	var previousNote6;
	var previousNote7;
	var previousNote8;

	
	
	var noteSelect = function(num, clickedOn, prev, cn) {
		var thisNote = $(clickedOn).closest('.noteBox').attr('name')
		$(clickedOn).toggleClass('on');

		if ((thisNote !== cn) && (cn !== rest)) {
			$(prev).toggleClass('on');
		}
		if (thisNote !== cn) {			
			if ( thisNote === 'palo') {
				song[num] = palo;
				background[num] = 'palopic';
			} else if ( thisNote === 'dhalo') {
				song[num] = dhalo;
				background[num] = 'dhalopic';
			} else if ( thisNote === 'nilo') {
				song[num] = nilo;
				background[num] = 'dhalopic';
			} else if ( thisNote === 'sa') {
				song[num] = sa;
				background[num] = 'sapic';
			} else if ( thisNote === 're') {
				song[num] = re;
				background[num] = 'repic';
			} else if ( thisNote === 'ga') {
				song[num] = ga;
				background[num] = 'gapic';
			} else if ( thisNote === 'ma') {
				song[num] = ma;
				background[num] = 'mapic';
			} else if ( thisNote === 'pa') {
				song[num] = pa;
				background[num] = 'papic';
			} else if ( thisNote === 'dha') {
				song[num] = dha;
				background[num] = 'dhapic';
			} else if ( thisNote === 'ni') {
				song[num] = ni;
				background[num] = 'nipic';
			} else if ( thisNote === 'sahi') {
				song[num] = sahi;
				background[num] = 'sahipic';
			} else if ( thisNote === 'rehi') {
				song[num] = rehi;
				background[num] = 'rehipic';
			} else if ( thisNote === 'gahi') {
				song[num] = gahi;
				background[num] = 'gahipic';
			} 
		} else {
			song[num] = rest;
			thisNote = rest;
			background[num] = prevClass;
		}		
		cn = thisNote;
		return cn;		
	}

	var currentNote1 = rest;
	$(document).on('click', '.note1', function(){
		var clickedOn = $(this);
		currentNote1 = noteSelect(0, clickedOn, previousNote1, currentNote1);
		console.log('song 0', song[0]);
		previousNote1 = clickedOn;
		
	});

	var currentNote2 = rest;
	$(document).on('click', '.note2', function(){
		var clickedOn = $(this);
		currentNote2 = noteSelect(1, clickedOn, previousNote2, currentNote2);
		previousNote2 = clickedOn;
	});

	var currentNote3 = rest;
	$(document).on('click', '.note3', function(){
		var clickedOn = $(this);
		currentNote3 = noteSelect(2, clickedOn, previousNote3, currentNote3);
		previousNote3 = clickedOn;
	});

	var currentNote4 = rest;
	$(document).on('click', '.note4', function(){
		var clickedOn = $(this);
		currentNote4 = noteSelect(3, clickedOn, previousNote4, currentNote4);
		previousNote4 = clickedOn;
	});

	var currentNote5 = rest;
	$(document).on('click', '.note5', function(){
		var clickedOn = $(this);
		currentNote5 = noteSelect(4, clickedOn, previousNote5, currentNote5);
		previousNote5 = clickedOn;
	});

	var currentNote6 = rest;
	$(document).on('click', '.note6', function(){
		var clickedOn = $(this);
		currentNote6 = noteSelect(5, clickedOn, previousNote6, currentNote6);
		previousNote6 = clickedOn;
	});

	var currentNote7 = rest;
	$(document).on('click', '.note7', function(){
		var clickedOn = $(this);
		currentNote7 = noteSelect(6, clickedOn, previousNote7, currentNote7);
		previousNote7 = clickedOn;
	});

	var currentNote8 = rest;
	$(document).on('click', '.note8', function(){
		var clickedOn = $(this);
		currentNote8 = noteSelect(7, clickedOn, previousNote8, currentNote8);
		previousNote8 = clickedOn;
	});



	


});