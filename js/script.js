// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-04-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-04-HTML/",
  })
}

/**
 * Input.
 */

/**JSDoc*/function myButtonClicked() {
  const sidea = parseInt(document.getElementById('side-a').value)
  const sideb = parseInt(document.getElementById('side-b').value)
  const sidec = parseInt(document.getElementById('side-c').value)

  if (sidea <= 0 || sideb <= 0 || sidec <= 0 ) {
  document.getElementById("side").innerHTML =
  "Error..."
  console.log("error")
  } else {

    if (sidea == sideb && sideb == sidec && sidec == sidea) {
    document.getElementById("side").innerHTML =
    "Equilateral"
    console.log("equilateral")
    } else if (sidea == sideb || sideb == sidec || sidec == sidea) {
    document.getElementById("side").innerHTML =
    "Isosceles"
    console.log("side")
    } else if (sidea != sideb && sideb != sidec && sidec != sidea) {
    document.getElementById("side").innerHTML =
    "Scalene"
    console.log("side")
    } else {
    document.getElementById("side").innerHTML =
    "Error..."
    console.log("error")

    }

  }

}