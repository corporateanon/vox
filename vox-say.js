#!/usr/bin/env node

'use strict';

const vox = require('./vox');
const argv = require('yargs').argv;

vox.speak(argv._.join(' '));

// var YS = require('yandex-speech');
// var lame = require('lame');
// var Speaker = require('speaker');
// var fs = require('fs');
// // var mkdirp = require('mkdirp');
// var path = require('path');
// var os = require('os');

// var argv = require('yargs').argv;

// speak(argv._[0]);

// function speak(text) {
//         var dir = os.tmpdir();
//         var rand = (Math.random() * 1e9) | 0;
//         var tmpFile = path.join(dir, `${rand}.mp3`);

//         YS.TTS({
//                 text,
//                 file: tmpFile
//         }, () => {
//                 var decoder = new lame.Decoder();
//                 var speaker = new Speaker();

//                 var fStream = fs.createReadStream(tmpFile);
//                 fStream.pipe(decoder).pipe(speaker);
//         });
// }
