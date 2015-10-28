var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="faq">
		        <div className="container">
		            <div className="section-title">
		                <h5>Frequently Asked Questions</h5>
		            </div>
		            <div className="row">
		                <div className="col-md-6 wow fadeInLeft" data-wow-duration="2s">
		                    <h6 className="faq-title">How can I get to the venue?</h6>
		                    <p>The map and Contact details are listed within the contact information.You will also receive a confirmation email with location map.</p>
		                    <h6 className="faq-title">What about accommodation?</h6>
		                    <p>The cost of the hotel accommodation and travel is not included in the event fee. For corporate accommodation rate, please contact us directly.</p>
		                </div>
		                <div className="col-md-6 wow fadeInRight" data-wow-duration="2s">
		                    <h6 className="faq-title">What payment types do you accept?</h6>
		                    <p>All payments are processed via PayPal. You may also pay at the time of event. But please reserve your seat by contacting us directly.</p>
		                    <h6 className="faq-title">Can I get a refund on my tickets?</h6>
		                    <p>All tickets are non-refundable unless the event is cancelled by us, in which case we will always make a full refund.</p>
		                </div>
		            </div>
		        </div>
		    </section>
		);
	}	
});
