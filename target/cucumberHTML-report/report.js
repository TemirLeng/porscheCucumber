$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PoscheTest.feature");
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
formatter.before({
  "duration": 3551459621,
  "status": "passed"
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
  "location": "PorscheStepDefs.user_is_on_Porsche_CaymanPage()"
});
formatter.result({
  "duration": 4303658413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "718",
      "offset": 18
    }
  ],
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
  "name": "Selecting color, wheel, seat",
  "description": "",
  "id": "testing-porsche.com-website;selecting-color,-wheel,-seat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User select color \"Miami Blue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User select Wheel \"20\\\" Carrera Sport Wheels\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User select seat \"Power Sport Seats (14-way) with Memory Package\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Interior Carbon Fiber",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User selects Interior Trim in Carbon Fiber i.c.w. Standard Interior",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Poerformance section",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User selects 7-speed Porsche Doppelkupplung (PDK)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects Porsche Ceramic Composite Brakes (PCCB)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "location": "PorscheStepDefs.user_select_color(String)"
});
formatter.result({
  "duration": 528798723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20\\",
      "offset": 19
    }
  ],
  "location": "PorscheStepDefs.user_select_Wheel_Carrera_Sport_Wheels(String)"
});
formatter.result({
  "duration": 1745058160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Power Sport Seats (14-way) with Memory Package",
      "offset": 18
    }
  ],
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
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
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
  "status": "passed"
});
});