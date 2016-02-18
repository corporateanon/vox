#!/usr/bin/env node

'use strict';

const vox = require('./vox');
const argv = require('yargs').argv;

vox.say(argv._.join(' '));
