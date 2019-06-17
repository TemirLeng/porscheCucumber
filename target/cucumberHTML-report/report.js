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
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
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
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
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
  "status": "passed"
});
});