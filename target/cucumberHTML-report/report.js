$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("porsche.feature");
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
  "location": "porscheStepDefs.user_is_on_Porsche_CaymanPage()"
});
formatter.result({
  "duration": 7371926412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "718",
      "offset": 18
    }
  ],
  "location": "porscheStepDefs.user_select_model(int)"
});
formatter.result({
  "duration": 7870582407,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Selecting color, wheel, seat",
  "description": "",
  "id": "testing-porsche.com-website;selecting-color,-wheel,-seat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User select color \"Miami Blue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User select Wheel \"20\\\" Carrera Sport Wheels\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User select seat \"Power Sport Seats (14-way) with Memory Package\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Interior Carbon Fiber",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User selects Interior Trim in Carbon Fiber i.c.w. Standard Interior",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Poerformance section",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User selects 7-speed Porsche Doppelkupplung (PDK)",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects Porsche Ceramic Composite Brakes (PCCB)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
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
  "location": "porscheStepDefs.user_select_color(String)"
});
formatter.result({
  "duration": 5499979389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20\\",
      "offset": 19
    }
  ],
  "location": "porscheStepDefs.user_select_Wheel_Carrera_Sport_Wheels(String)"
});
formatter.result({
  "duration": 1466153128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Power Sport Seats (14-way) with Memory Package",
      "offset": 18
    }
  ],
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
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
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
  "status": "passed"
});
});