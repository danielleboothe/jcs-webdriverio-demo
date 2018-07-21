/**
 * Page object for pricing page
 */
class PricingPage {
    /**
     * Page elements
     */
    get heading() {
        return $('col-md-12 > .page-title');
    }

    get subHeading() {
        return $('.col-md-12 > .page-subhead subhead');
    }

    get basicSignUpButton() {
        return $('.row:nth-child(2) div:nth-child(1) .pricing-card button');
    }

    get specialSignUpButton() {
        return $('.row:nth-child(2) div:nth-child(2) .pricing-card button');
    }

    get proSignUpButton() {
        return $('.row:nth-child(2) div:nth-child(3) .pricing-card button');
    }

    get premiumSignUpButton() {
        return $('.row:nth-child(2) div:nth-child(4) .pricing-card button');
    }
}

module.exports = new PricingPage();
