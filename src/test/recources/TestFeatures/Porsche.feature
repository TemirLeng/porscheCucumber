Feature: Testing WebOrders application

  Background:
    Given User is on porsche main page

    Scenario: User selects and validates total price
    When User selects 718 and chooses Cayman
    Then User gets 718 Cayman equipment price ,handling fee price , base price  and sum price
      And selects Miami Blue color
      And Selects 20 Carrera Sport Wheels
      And Selects seats ‘Power Sport Seats (14-way) with Memory Package
      And Clicks on Interior Carbon Fiber and Selects Interior Trim in Carbon Fiber i.c.w. Standard Interior
      And Clicks on Performance and Selects 7-speed Porsche Doppelkupplung (PDK) and Select Porsche Ceramic Composite Brakes (PCCB)
      And Verify that total price is the sum of base price added Price for Equipment added Delivery, Processing and Handling Fee


