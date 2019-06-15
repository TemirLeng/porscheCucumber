<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PoscheTest.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("porsche.feature");
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
formatter.feature({
  "line": 2,
  "name": "Testing Porsche.com WebSite",
  "description": "",
  "id": "testing-porsche.com-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PorscheTest"
    }
  ]
});
<<<<<<< HEAD
formatter.before({
  "duration": 3551459621,
  "status": "passed"
});
=======
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Porsche CaymanPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user select model 718",
  "keyword": "Then "
});
formatter.match({
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_is_on_Porsche_CaymanPage()"
});
formatter.result({
  "duration": 4303658413,
=======
  "location": "porscheStepDefs.user_is_on_Porsche_CaymanPage()"
});
formatter.result({
  "duration": 7371926412,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "718",
      "offset": 18
    }
  ],
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_select_model(int)"
});
formatter.result({
  "duration": 6336879662,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#    Scenario: verify base prices"
    },
    {
      "line": 8,
      "value": "#    And remembers the price and click 718 Cayman"
    },
    {
      "line": 9,
      "value": "#    Then user verifies the base price and price in CaymanPage"
    }
  ],
  "line": 12,
=======
  "location": "porscheStepDefs.user_select_model(int)"
});
formatter.result({
  "duration": 7870582407,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "Selecting color, wheel, seat",
  "description": "",
  "id": "testing-porsche.com-website;selecting-color,-wheel,-seat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
<<<<<<< HEAD
  "line": 13,
=======
  "line": 10,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User select color \"Miami Blue\"",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 14,
=======
  "line": 11,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User select Wheel \"20\\\" Carrera Sport Wheels\"",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 15,
=======
  "line": 12,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User select seat \"Power Sport Seats (14-way) with Memory Package\"",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 17,
=======
  "line": 14,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User clicks on Interior Carbon Fiber",
  "keyword": "When "
});
formatter.step({
<<<<<<< HEAD
  "line": 18,
=======
  "line": 15,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User selects Interior Trim in Carbon Fiber i.c.w. Standard Interior",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 20,
=======
  "line": 17,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User clicks on Poerformance section",
  "keyword": "When "
});
formatter.step({
<<<<<<< HEAD
  "line": 21,
=======
  "line": 18,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User selects 7-speed Porsche Doppelkupplung (PDK)",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 22,
=======
  "line": 19,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User selects Porsche Ceramic Composite Brakes (PCCB)",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 25,
=======
  "line": 22,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "name": "User verifies actual and expected prices",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Miami Blue",
      "offset": 19
    }
  ],
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_select_color(String)"
});
formatter.result({
  "duration": 528798723,
=======
  "location": "porscheStepDefs.user_select_color(String)"
});
formatter.result({
  "duration": 5499979389,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20\\",
      "offset": 19
    }
  ],
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_select_Wheel_Carrera_Sport_Wheels(String)"
});
formatter.result({
  "duration": 1745058160,
=======
  "location": "porscheStepDefs.user_select_Wheel_Carrera_Sport_Wheels(String)"
});
formatter.result({
  "duration": 1466153128,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Power Sport Seats (14-way) with Memory Package",
      "offset": 18
    }
  ],
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_select_seat(String)"
});
formatter.result({
  "duration": 2163656642,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDefs.user_clicks_on_Interior_Carbon_Fiber()"
});
formatter.result({
  "duration": 1414754846,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDefs.user_selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior()"
});
formatter.result({
  "duration": 513207654,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDefs.user_clicks_on_Poerformance_section()"
});
formatter.result({
  "duration": 1331577221,
=======
  "location": "porscheStepDefs.user_select_seat(String)"
});
formatter.result({
  "duration": 1203710009,
  "status": "passed"
});
formatter.match({
  "location": "porscheStepDefs.user_clicks_on_Interior_Carbon_Fiber()"
});
formatter.result({
  "duration": 1781285847,
  "status": "passed"
});
formatter.match({
  "location": "porscheStepDefs.user_selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior()"
});
formatter.result({
  "duration": 516703096,
  "status": "passed"
});
formatter.match({
  "location": "porscheStepDefs.user_clicks_on_Poerformance_section()"
});
formatter.result({
  "duration": 1332336616,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
<<<<<<< HEAD
  "location": "PorscheStepDefs.user_selects_speed_Porsche_Doppelkupplung_PDK(int)"
});
formatter.result({
  "duration": 484249984,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDefs.user_selects_Porsche_Ceramic_Composite_Brakes_PCCB()"
});
formatter.result({
  "duration": 1530776737,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDefs.user_verifies_actual_and_expected_prices()"
});
formatter.result({
  "duration": 246686019,
  "status": "passed"
});
formatter.after({
  "duration": 189641139,
=======
  "location": "porscheStepDefs.user_selects_speed_Porsche_Doppelkupplung_PDK(int)"
});
formatter.result({
  "duration": 461255472,
  "status": "passed"
});
formatter.match({
  "location": "porscheStepDefs.user_selects_Porsche_Ceramic_Composite_Brakes_PCCB()"
});
formatter.result({
  "duration": 1408309351,
  "status": "passed"
});
formatter.match({
  "location": "porscheStepDefs.user_verifies_actual_and_expected_prices()"
});
formatter.result({
  "duration": 307557175,
>>>>>>> d7f1e577c3c6a08b5dd03372ad7552fe008c6e26
  "status": "passed"
});
});