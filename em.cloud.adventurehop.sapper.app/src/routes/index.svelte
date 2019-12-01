<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h2 {
		font-family: acier-bat-gris,sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	h3 {
		font-family: cortado,sans-serif;
		font-weight: 400;
		font-style: normal;
	}


	h1 {
		font-size: 2.8em;
		
		margin: 0 0 0.5em 0;
		font-family: milka, sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
		font-family: shackleton,serif;
		font-weight: 400;
		font-style: normal;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>adventure hop</title>
</svelte:head>

<span><h2>Hey! Whats happening</h2><h1>adventure hop</h1></span>



<div class="container">
  <div class="row">
    <div class="col-sm">
      <a data-flickr-embed="true" href="https://www.flickr.com/photos/eugenemurray/48777692886/in/dateposted/" title="."><img src="https://live.staticflickr.com/65535/48777692886_df54b5073a_b.jpg" width="1024" height="768" alt="."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    </div>
    <div class="col-sm">
      <a data-flickr-embed="true" href="https://www.flickr.com/photos/eugenemurray/48886932016/in/dateposted/" title="mountain biking yogurt pots"><img src="https://live.staticflickr.com/31337/48886932016_3869006d7b_c.jpg" width="800" height="450" alt="mountain biking yogurt pots"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    </div>
    <div class="col-sm">
      <a data-flickr-embed="true" href="https://www.flickr.com/photos/eugenemurray/48886932016/in/dateposted/" title="mountain biking yogurt pots"><img src="https://live.staticflickr.com/31337/48886932016_3869006d7b_w.jpg" width="400" height="225" alt="mountain biking yogurt pots"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    </div>
  </div>
</div> -->


  <div class="main-wrapper gallery-grid">

<!-- ====================================
———	PAGE TITLE
===================================== -->
<section class="page-title">
  <div class="page-title-img bg-img bg-overlay-darken" style="background-image: url(assets/img/pages/page-title-bg8.jpg);">
    <div class="container">
      <div class="row align-items-center justify-content-center" style="height: 200px;">
        <div class="col-lg-6">
          <div class="page-title-content">
            <div class="title-border">
              <h2 class="text-uppercase text-white font-weight-bold">Gallery</h2>
            </div>
            <p class="text-white mb-0"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====================================
———	GALLERY GRID
===================================== -->
<section class="py-10">
  <div class="container">
    <div id="filters" class="button-group">
      <button class="button is-checked" data-filter="*">All Places</button>
      <button class="button" data-filter=".asia">Asia</button>
      <button class="button" data-filter=".america">America</button>
      <button class="button" data-filter=".europe">Europe</button>
      <button class="button" data-filter=".africa">Africa</button>
    </div>

    <div class="row grid">
      <div class="col-md-6 col-lg-4 col-xl-3 element-item america africa">
        <div class="media media-hoverable justify-content-center mb-6">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-1.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-1.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Vestibulum Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$399</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 27 Jan, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item africa america">
        <div class="media media-hoverable justify-content-center mb-6">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-2.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-2.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Maecenas Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$599</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 09 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item asia america">
        <div class="media media-hoverable justify-content-center mb-6">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-3.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-3.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Lobortis Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$299</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 14 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item asia africa europe">
        <div class="media media-hoverable justify-content-center mb-6">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-4.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-4.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Lacus Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$399</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 11 Jan, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item america">
        <div class="media media-hoverable justify-content-center mb-6 mb-xl-0">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-5.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-5.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Nullam Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$199</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 2 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item asia africa europe">
        <div class="media media-hoverable justify-content-center mb-6 mb-xl-0">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-6.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-6.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Maldives Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$799</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 26 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item europe">
        <div class="media media-hoverable justify-content-center mb-6 mb-md-0">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-1.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-1.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Quaerit Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$799</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 26 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 col-xl-3 element-item asia europe">
        <div class="media media-hoverable justify-content-center">
          <div class="media-content">
            <img class="media-img" src="assets/img/home/packages/packages-2.jpg" alt="Generic placeholder image">

            <a href="assets/img/home/packages/packages-2.jpg" data-fancybox="gallery" class="media-object">
              <h3 class="text-uppercase mb-0">Hendrit Tour</h3>
            </a>

            <div class="media-img-overlay">
              <div class="overlay-content">
                <h3 class="">from <span class="text-primary">$799</span></h3>
                <p class="text-white mb-0">
                  <span class="mr-1"><i class="fa fa-calendar" aria-hidden="true"></i></span> 26 Feb, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  </div><!-- element wrapper ends -->



