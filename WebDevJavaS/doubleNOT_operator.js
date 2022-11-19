"use strict";

var showreport = true;
var hasDownloaded = false;
var isPaymentConfirmed = true;
var forceDelete = false;

var message = "hey";
var showPostButton = !!message;
console.log(`Show Post Button: ${showPostButton}`);

var numOfCharacters = message.length;
var showEditButton = !!numOfCharacters;
console.log(`Show Edit Button: ${showEditButton}`);