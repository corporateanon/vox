#!/usr/bin/env node

'use strict';

const fs      = require('fs');
const lame    = require('lame');
const os      = require('os');
const path    = require('path');
const q       = require('q');
const qfs     = require('q-io/fs');
const sha1    = require('sha1');
const Speaker = require('speaker');
const YS      = require('yandex-speech');

const tts = q.nbind(YS.TTS, YS);

function speak(text) {
        return getMp3File(text).then((file) => {
                const decoder = new lame.Decoder();
                const speaker = new Speaker();

                const fStream = fs.createReadStream(file);
                fStream.pipe(decoder).pipe(speaker);
        });
}

function saveAsMp3(text, outFile) {
        return getMp3File(text).then((file) => qfs.copy(file, outFile));
}

function getMp3File(text) {
        const dir = os.tmpdir();
        const hash = sha1(text);
        const file = path.join(dir, `${hash}.mp3`);

        return qfs.exists(file)
                .then((exists) => {
                        if (!exists) {
                                return tts({ text, file });
                        }
                }).then(() => file);
}

exports.speak = speak;
exports.saveAsMp3 = saveAsMp3;
