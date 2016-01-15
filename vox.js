#!/usr/bin/env node

'use strict';

var YS = require('yandex-speech');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');
var q = require('q');
// var fs = require('q-io/fs');
// var mkdirp = require('mkdirp');
var path = require('path');
var os = require('os');

// var argv = require('yargs').argv;

// speak(argv._[0]);

const tts = q.nbind(YS.TTS, YS);

function speak(text) {
        var dir = os.tmpdir();
        var rand = (Math.random() * 1e9) | 0;
        var file = path.join(dir, `${rand}.mp3`);

        return tts({ text, file }).then(() => {
                var decoder = new lame.Decoder();
                var speaker = new Speaker();

                var fStream = fs.createReadStream(file);
                fStream.pipe(decoder).pipe(speaker);
        });
}

exports.speak = speak;
