
Feature: Edit Project

    Scenario Outline: Edit Project
        Given I Access the Page with '<Scenario>'
        When I Enter First Name '<FirstName>'
        When I Enter Last Name '<LastName>'
        When I Enter Phone Number '<PhoneNumber>'
        When I Enter Country '<Country>'
        When I Enter Email address '<EmailAddress>'
        When I Enter Password '<Password>'
        When I Click the Agreement '<CheckAgreement>'
        And I Click submit
        Then Should Validate Submitted with '<Expected>' '<FirstName>' '<LastName>' '<PhoneNumber>' '<Country>' '<EmailAddress>'

        Examples:
            | Scenario | FirstName                  | LastName | PhoneNumber |Country     | EmailAddress        | Password          | CheckAgreement      | Expected|
            | Success  |Ruby Flor                   |Blanco       |1234567890|Philippines|rubyflordejesus@yahoo.com|1234567|Checked|Successfully registered the following information|
            