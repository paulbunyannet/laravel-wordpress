<?php

class ExampleTestCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample(AcceptanceTester $I)
    {
        $I->amOnPage('/app');
        $I->see('Laravel');

    }
}
