#!/usr/bin/env node

'use strict';

const vox = require('./vox');
const argv = require('yargs').argv;

vox.saveAsMp3(argv._.slice(1).join(' '), argv._[0]);
