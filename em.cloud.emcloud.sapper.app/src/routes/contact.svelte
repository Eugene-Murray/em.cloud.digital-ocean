<svelte:head>
	<title>emCLOUD - contact</title>
</svelte:head>

<div class="contact-section pt-190 pb-190">
	<div class="container">
		<div class="row">
			<div class="col-md-5">
				<div class="c-left-area">
					<!-- <div class="title-contact">
						<h2>Our Address</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div> -->
					<div class="c-discript">
						<div class="c-icon">
							<img src="images/c-find.png" alt="">
						</div>
						<div class="c-d-area">
							<h4>Find Us</h4>
							<p>Sutton, Surrey, South London. UK</p>
						</div>
					</div>
					<div class="c-discript">
						<div class="c-icon">
							<img src="images/c-phone.png" alt="">
						</div>
						<div class="c-d-area">
							<h4>Phone</h4>
							<p>07969467544</p>
						</div>
					</div>
					<div class="c-discript">
						<div class="c-icon">
							<img src="images/c-mail.png" alt="">
						</div>
						<div class="c-d-area">
							<h4>Send Mail</h4>
							<a href="mailto:info@emcloud.co">info@emcloud.co</a>
						</div>
					</div>
				</div>
			</div>
			<div class="offset-md-2 col-md-5">
				<div class="contact-form">
					<h2>Get in touch</h2>
					<div id="contact">
						<div id="message"></div>
						<form method="post" action="contact.php" name="contactform" id="contactform">
							<input type="text" class="input-c" placeholder="Your Name"  name="name" id="name">
							<input type="email" class="input-c" placeholder="Your Email" name="email" id="email">
							<input type="text" class="input-c" placeholder="Subject" name="subject" id="subject">
							<textarea rows="5" placeholder="Message" class="input-c" name="comments" id="comments">	
							</textarea>
							<div class="submit-btn">
                                <input value="Submit Now" type="submit" name="submit" id="submit">
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><!-- End contact -->

<div class="map-section">
    <div class="google_map">
        <div class="gmap">
            <div id="map"></div>
        </div><!-- Ends: .gmap -->                    
    </div>
</div>
