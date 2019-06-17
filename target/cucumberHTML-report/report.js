<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/recources/TestFeatures/Porsche.feature");
formatter.feature({
  "line": 1,
  "name": "Testing WebOrders application",
  "description": "",
  "id": "testing-weborders-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3667590687,
  "status": "passed"
});
=======
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
>>>>>>> 21b919a648643942d0e6c3a1fe60d5fe148777fc
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
<<<<<<< HEAD
  "name": "User is on porsche main page",
  "keyword": "Given "
});
formatter.match({
  "location": "PorscheStepDef.user_is_on_porsche_main_page()"
});
formatter.result({
  "duration": 7032280064,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User selects and validates total price",
  "description": "",
  "id": "testing-weborders-application;user-selects-and-validates-total-price",
=======
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
>>>>>>> 21b919a648643942d0e6c3a1fe60d5fe148777fc
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
<<<<<<< HEAD
  "line": 7,
  "name": "User selects 718 and chooses Cayman",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User gets 718 Cayman equipment price ,handling fee price , base price  and sum price",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "selects Miami Blue color",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Selects 20 Carrera Sport Wheels",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects seats ‘Power Sport Seats (14-way) with Memory Package",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Interior Carbon Fiber and Selects Interior Trim in Carbon Fiber i.c.w. Standard Interior",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Clicks on Performance and Selects 7-speed Porsche Doppelkupplung (PDK) and Select Porsche Ceramic Composite Brakes (PCCB)",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that total price is the sum of base price added Price for Equipment added Delivery, Processing and Handling Fee",
  "keyword": "And "
});
formatter.match({
  "location": "PorscheStepDef.user_selects_and_chooses_Cayman()"
});
formatter.result({
  "duration": 8279442796,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.user_gets_Cayman_equipment_price_handling_fee_price_base_price_and_sum_price()"
});
formatter.result({
  "duration": 201689612,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.selects_Miami_Blue_color()"
});
formatter.result({
  "duration": 617634822,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.selects_Carrera_Sport_Wheels()"
});
formatter.result({
  "duration": 642462379,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.selects_seats_Power_Sport_Seats_way_with_Memory_Package()"
});
formatter.result({
  "duration": 6755198468,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.clicks_on_Interior_Carbon_Fiber_and_Selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior()"
});
formatter.result({
  "duration": 7028919325,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.clicks_on_Performance_and_Selects_speed_Porsche_Doppelkupplung_PDK_and_Select_Porsche_Ceramic_Composite_Brakes_PCCB()"
});
formatter.result({
  "duration": 19033045105,
  "status": "passed"
});
formatter.match({
  "location": "PorscheStepDef.verify_that_total_price_is_the_sum_of_base_price_added_Price_for_Equipment_added_Delivery_Processing_and_Handling_Fee()"
});
formatter.result({
  "duration": 229546732,
  "status": "passed"
});
formatter.after({
  "duration": 127821,
=======
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
>>>>>>> 21b919a648643942d0e6c3a1fe60d5fe148777fc
  "status": "passed"
});
});