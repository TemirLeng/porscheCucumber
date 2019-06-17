@Hi
Feature: Testing Porsche Website

  Background:
    Given User is on Porsche Webpage
    Then User selects 718 model
    And User clicks 718 Cayman

  Scenario: Selecting all necessery features and verifying total price
    Then User selects Miami Blue color
    And User selects 20 Carrera Sport Wheels
    And User selects Power Sport Seats (14-way) with Memory Package

    When User clicks on Interior Carbon Fiber section
    And User selects Interior Trim in Carbon Fiber i.c.w. Standard Interior

    When  User clicks on performance section
    And User selects 7-speed Porsche Doppelkupplung (PDK)
    And User selects Porsche Ceramic Composite Brakes (PCCB)

    And User verifies actual and expected price