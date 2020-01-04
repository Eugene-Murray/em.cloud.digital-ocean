<script>
	export let segment;
</script>

<!-- <nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
	</ul>
</nav> -->

<header class="banner-area">
	<!--banner nav-->
	<div class="nav-header">
		<!-- header-top -->
		<div class="header-top">
			<div class="container">
				<div class="top-flex">
					<div class="top-area-left">
						<div class="left-header-top">
							<div class="email">
								<span class="header-top-icon"><i class="fa fa-envelope-o"></i></span><p>
                                <a class="info-link" style="color: #fff !important;" href="mailto:info@emcloud.co">info@emcloud.co</a></p>
							</div>
						</div>
						<div class="middle-header-top">
							<div class="phone">
								<span class="header-top-icon"><i class="fa fa-phone"></i></span><p>+44 7969467544</p>
							</div>
						</div>
					</div>
					<div class="top-area-right text-right">
						<div class="right-header-top">
							<!-- <ul>
								<li><a href="."><i class="fa fa-commenting-o header-top-icon"></i>live chat</a></li>
								<li><a href="."><i class="fa fa-user header-top-icon"></i>login</a></li>
								<li><a href="."><i class="fa fa-headphones header-top-icon"></i>support</a></li>
							</ul> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- nav-menu -->
		<div class="eco_nav">
			<div class="container">
	            <nav class="navbar navbar-expand-md navbar-light bg-faded">
	                <a class="navbar-brand navbar-logo" href="."><img src="images/logo.png" alt=""></a>
                    <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item single_nav">
                            <a class='{segment === undefined ? "selected" : ""} nav-link nav-menu' href='.'>Home</a>
                            <!-- <a href="index.html" class="nav-link active nav-menu">Home<i class="fa fa-angle-down"></i></a> -->
                                <!-- <ul class="nav_mega">
                                   <li>
                                        <div class="mega_menu_container">
                                            <div class="row pb-30">
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index.html">
                                                            <img src="images/demo/home-1.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index.html" class="">Home 01</a></h4>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-02.html">
                                                            <img src="images/demo/home-2.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-02.html" class="active">Home 02</a></h4>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-03.html">
                                                            <img src="images/demo/home-3.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-03.html" class="">Home 03</a></h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row  pb-30">
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-04.html">
                                                            <img src="images/demo/home-4.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-04.html" class="">Home 4</a></h4>
                                                    </div>
                                                </div> 

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-05-cloud.html">
                                                            <img src="images/demo/home-5.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-05-cloud.html" class="">Home Cloud</a></h4>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-06-shape.html">
                                                            <img src="images/demo/home-6.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-06-shape.html" class="active">Home Shape</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-07-vps.html">
                                                            <img src="images/demo/home-7.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-07-vps.html" class="">Home VPS</a></h4>
                                                    </div>
                                                </div>                                                
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-08-angle.html">
                                                            <img src="images/demo/home-8.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-08-angle.html" class="">Home Angle</a></h4>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="mega_menu_box">
                                                        <a href="index-09-wp.html">
                                                            <img src="images/demo/home-9.jpg" alt="thumbnail" class="img-fluid" />
                                                        </a>
                                                        <h4 class="mega_menu_heading"><a href="index-09-wp.html" class="">Home Wordpress</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>                            -->
                            </li>                                                                    
                            <li class="nav-item single_nav">
                                <a class='{segment === "about" ? "selected" : ""} nav-link nav-menu' href='about'>About</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "services" ? "selected" : ""} nav-link nav-menu' href='services'>Services</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "pricing" ? "selected" : ""} nav-link nav-menu' href='pricing'>Pricing</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "technology" ? "selected" : ""} nav-link nav-menu' href='technology'>Technology</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "portfolio" ? "selected" : ""} nav-link nav-menu' href='portfolio'>Portfolio</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "blog" ? "selected" : ""} nav-link nav-menu' href='blog'>Blog</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "cool-websites" ? "selected" : ""} nav-link nav-menu' href='cool-websites'>Cool Websites</a>
                            </li>
                            <li class="nav-item single_nav">
                                <a class='{segment === "contact" ? "selected" : ""} nav-link nav-menu' href='contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="demo">	
						<div class="mr-auto sign-in-option btn-demo" data-toggle="modal" data-target="#myModal2">
			                <ul class="navbar-nav">
			                    <li>
			                    	<a href="."><img src="images/img-part/menu.png" alt=""></a>
			                    </li>
			                </ul>
			            </div>
						<!-- Modal -->
						<div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="flaticon-cancel-music"></i></span></button>
                                        <h2 class="modal-title" id="myModalLabel2"><a href="."><img src="images/logo_g.png" alt=""></a><span class="disabled">logo</span></h2>
                                    </div>
                                    <div class="modal-body">
                                        <div class="bar-nav">
                                            <div class="bar-top">
                                                <h2>Your web dev partner</h2>
                                                <ul>
                                                    <li><a href='about'>About<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="services">Services<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="pricing">Pricing<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="technology">Technology<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="portfolio">Portfolio<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="blog">Blog<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="cool-websites">Cool Websites<i class="fa fa-angle-right"></i></a></li>
                                                    <li><a href="contact">Contact<i class="fa fa-angle-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="bar-contact">
                                            <span>Contact</span>
                                            <span>+44 7969467544</span>
                                            <span><a href="mailto:info@emcloud.co">info@emcloud.co</a></span>
                                        </div>

                                        <div class="bar-icon">
                                            <div class="serach_option widget_single">
                                                <form>
                                                    <input type="text" name="Name" class="input-c" placeholder="Name">
                                                    <button type="submit"><i class="fa fa-paper-plane-o"></i></button>
                                                </form>
                                            </div>
                                            <ul class="social_iocns">
                                                <li><a href="."><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="."><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="."><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="."><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div><!-- modal-content -->
							</div><!-- modal-dialog -->
						</div><!-- modal -->
					</div><!-- sidebar -->     
                </nav><!-- END NAVBAR -->
            </div> 
        </div>
	</div><!--banner area-->

{#if segment === undefined}
    <div class="banner-body">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<div class="banner-body-image  wow fadeIn" data-wow-duration="2s" data-wow-delay=".1s">
						<img src="images/img-part/loptop-1.png" alt="" class="img_1">
                        <img src="images/img-part/phone-1.png" alt="" class="img_2">
                        <img src="images/img-part/house-1.png" alt="" class="img_3">
                        <img src="images/img-part/cloud-1.png" alt="" class="img_4">
                        <img src="images/img-part/phone-2.png" alt="" class="img_5">
					</div>
				</div>
				<div class="col-md-5">
					<div class="banner-body-content">
						<h2>SEO </h2>
                        <h2>UX Design</h2>
                        <h2>Development </h2>
                        <h2>Cloud Hosting </h2>
						<!-- <a href="." class="g-btn">Get Started</a> -->
					</div>
				</div>
			</div>
		</div>

		<div class="shape"></div>
		<div class="shape_1"></div>
		<div class="shape_3"></div>
		<div class="shape_4"></div>
	</div> 
{/if}
	<!--banner search-->
	<!-- <div class="banner-search-area">
		<div class="container">
			<div class="col-md-12">
				<div class="search-banner pr-30 pl-30 pb-70">
					<input class="form-control search-inner" type="text" placeholder="Search your domain here">			
					<div class="search-option"><i class="fa fa-angle-down "></i>
						<select name="search-option_items">
						    <option value="I.com">.com</option>
						    <option value="I.net">.net</option>
						    <option value="I.org">.org</option>
						    <option value="I.co">.co</option>
						    <option value="I.uk">.uk</option>
						</select>
					 </div>
					 <div class="search-submit">
						<input type="submit" value="Search">
					</div>
					<div class="site-search">
						<ul>
							<li>.com<span>$9.99</span></li>
							<li>.net<span>$7.85</span></li>
							<li>.org<span>$5.70</span></li>
							<li>.co<span>$7.82</span></li>
							<li>.uk<span>$7.82</span></li>
						</ul>
					</div>
				</div>		
			</div>
		</div>
	</div> -->
</header>
