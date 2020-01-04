<script>
	            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }
</script>

<svelte:head>
	<title>emCLOUD - contact</title>
	<link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/master.css">	
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
