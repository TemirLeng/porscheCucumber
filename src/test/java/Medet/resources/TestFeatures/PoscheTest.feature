@PorscheTest
Feature:Testing Porsche.com WebSite
  Background:
    Given User is on Porsche CaymanPage
    When user select model 718


    Scenario: Selecting color, wheel, seat
      Then User select color "Miami Blue"
      Then User select Wheel "20\" Carrera Sport Wheels"
      Then User select seat "Power Sport Seats (14-way) with Memory Package"

      When User clicks on Interior Carbon Fiber
      And User selects Interior Trim in Carbon Fiber i.c.w. Standard Interior

      When User clicks on Poerformance section
      And User selects 7-speed Porsche Doppelkupplung (PDK)
      And User selects Porsche Ceramic Composite Brakes (PCCB)


      And User verifies actual and expected prices