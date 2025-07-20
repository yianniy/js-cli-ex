#!/usr/bin/env node

const { Command } = require('commander');
const Decimal = require('decimal');
const program = new Command();

program
  .name('js-cli-ex')
  .description('A simple CLI tool example in Javascript using Commander')
  .version('1.0.0');

program.command('plus <a> <b>')
  .description('adds a and b')
  .action((a, b) => {
    console.log(Decimal(a).add(b).toNumber());
  });
program.command('minus <a> <b>')
  .description('subtracts b from a')
  .action((a, b) => {
    console.log(Decimal(a).sub(b).toNumber());
  });
program.command('times <a> <b>')
  .description('multiplies a and b')
  .action((a, b) => {
    console.log(Decimal(a).mul(b).toNumber());
  });
program.command('divide <a> <b>')
  .description('divides a by b')
  .action((a, b) => {
    console.log(Decimal(a).div(b).toNumber());
  });

program.parse(process.argv);