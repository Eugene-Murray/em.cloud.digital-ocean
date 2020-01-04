<!-- <script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script> -->
<script>
  import { onMount } from "svelte";
  let blogPosts = []; 
  let posts;
  onMount(async () => {
    const apiResponse = await fetch("https://emcloud.solutions/api/blogs/site/emcloud");
    blogPosts = await apiResponse.json();
    return () => console.log('Destroyed');
  });
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<!-- star Blog section -->
<div class="blog_ection_1 pb-150">
	<div class="container">
		<div class="row">		
			<div class="offset-md-2 col-md-8">	
				<div class="bestsite-head text-center pt-150 pb-60">
					<div class="section-title">
						<h2>Blog</h2>
					</div>
				</div>
			</div>	
			<div class="offset-md-2"></div>	
		</div>
		{#each blogPosts as post}
		<div class="row">
			<div class="col-md-12">
				<div class="blog-area">
					<div class="blog-img">
						<a href="." title="">
							<img src="images/blog1-1.jpg" alt="">
						</a>
					</div>
					<div class="Blog-content">
						<div class="blog-name d-flex justify-content-between">
							<span><a href="." title="">Hosting</a></span>
							<span>10 Oct 2018</span>
						</div>
						<div class="blog-title">
							<h3><a href="blog/{post.slug}" title="">{post.title}</a></h3>
						</div>
						<div class="blog-btn">
							<a href=".">Read Now</a>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="col-md-4">
				<div class="blog-area">
					<div class="blog-img">
						<a href="." title=""><img src="images/blog1-2.jpg" alt=""></a>
					</div>
					<div class="Blog-content">
						<div class="blog-name d-flex justify-content-between">
							<span><a href="." title="">Domain</a></span>
							<span>10 Oct 2018</span>
						</div>
						<div class="blog-title">
							<h3><a href="." title="">Hosting domain case study</a></h3>
						</div>
						<div class="blog-btn">
							<a href=".">Read Now</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="blog-area">
					<div class="blog-img">
						<a href="." title=""><img src="images/blog1-3.jpg" alt=""></a>
					</div>
					<div class="Blog-content">
						<div class="blog-name d-flex justify-content-between">
							<span><a href="." title="">Could</a></span>
							<span>10 Oct 2018</span>
						</div>
						<div class="blog-title">
							<h3><a href="." title="">Learner online group for everyone</a></h3>
						</div>
						<div class="blog-btn">
							<a href=".">Read Now</a>
						</div>
					</div>
				</div>
			</div> -->
		</div>
		{/each}
	</div>
</div>
<!-- End Blog section -->



<section class="blog_wrapper">
    <div class="container">  
        <div class="row">        
            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                <div class="single_blog">
                    <div class="blog_banner">
                        <a href="." title=""><img src="images/blog/blog-01.jpg" alt="" class="img-fluid"></a>
                    </div>
                    <div class="blog_content">
                        <div class="post_by d-flex">
                            <img src="images/blog/bloger-1.png" alt="">
                            <span>By- <a href="." title="">Zokani Piterson</a></span>
                        </div>
                        <h3><a href="." title="">What is hosting and how it can help your business</a></h3>
                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, </p>
                        <a href="." title="" class="continue_read_btn">Continue Reading</a>

                        <div class="page_info">
                            <ul class="post_view_comment">
                                <li><i class='flaticon-calendar'></i> July 20, 2018</li>
                                <li><i class='flaticon-view'></i> 52410</li>
                                <li class="d-flex"><i class='flaticon-comment'></i> <a href="." title="">25 comment</a></li>
                            </ul>
                            <div class="share">
                                <i class='flaticon-share'></i>
                            </div>
                        </div>
                    </div>
                </div>               

                <div class="single_blog">
                    <div class="blog_banner">
                        <a href="." title=""><img src="images/blog/blog-02.jpg" alt="" class="img-fluid"></a>
                    </div>
                    <div class="blog_content">
                        <div class="post_by d-flex">
                            <img src="images/blog/bloger-1.png" alt="">
                            <span>By- <a href="." title="">Cavien Piterson</a></span>
                        </div>
                        <h3><a href="." title="">Step by step guide for domain transfer process</a></h3>
                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, </p>
                        <a href="." title="" class="continue_read_btn">Continue Reading</a>

                        <div class="page_info">
                            <ul class="post_view_comment">
                                <li><i class='flaticon-calendar'></i> July 20, 2018</li>
                                <li><i class='flaticon-view'></i> 52410</li>
                                <li class="d-flex"><i class='flaticon-comment'></i> <a href="." title="">25 comment</a></li>
                            </ul>
                            <div class="share">
                                <i class='flaticon-share'></i>
                            </div>
                        </div>
                    </div>
                </div>   

                <div class="single_blog">
                    <div class="blog_banner">
                        <a href="." title=""><img src="images/blog/blog-03.jpg" alt="" class="img-fluid"></a>
                    </div>
                    <div class="blog_content">
                        <div class="post_by d-flex">
                            <img src="images/blog/bloger-1.png" alt="">
                            <span>By- <a href="." title="">Marina Hook</a></span>
                        </div>
                        <h3><a href="." title="">Connecting volunteers & nonprofitsz worldwide</a></h3>
                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, </p>
                        <a href="." title="" class="continue_read_btn">Continue Reading</a>

                        <div class="page_info">
                            <ul class="post_view_comment">
                                <li><i class='flaticon-calendar'></i> July 20, 2018</li>
                                <li><i class='flaticon-view'></i> 52410</li>
                                <li class="d-flex"><i class='flaticon-comment'></i> <a href="." title="">25 comment</a></li>
                            </ul>
                            <div class="share">
                                <i class='flaticon-share'></i>
                            </div>
                        </div>
                    </div>
                </div>   


                <div class="pagination_blog">
                    <div class="pagination_btn">
                        <a href=# class=""><i class='flaticon-angle-pointing-to-left'></i></a>
                    </div>
                    <ul>
                        <li><a href=#1>1</a>
                        <li><a href=#2>2</a>
                        <li class="current"><a href=#3>3</a>
                        <li><a href=#4>4</a>
                        <li><a href=#5>5</a>
                        <li><a href=#10>…</a>
                        <li><a href=#41>40</a>
                    </ul>
                    <div class="pagination_btn">
                        <a href=# class="active"><i class='flaticon-angle-arrow-pointing-to-right'></i></a>
                    </div>
                </div>            
            </div>

        <!--============= { Blog Sidebar Area } ===========-->
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 blog_wrapper_right ">
                <div class="blog-right-items">
                    <div class="serach_option widget_single">
                        <div class="items-title">
                            <h3 class="title">Search</h3>
                        </div>
                        <form>
                            <input type="text" name="Name" class="input-c" placeholder="Name">
                            <button type="submit"><i class="flaticon-search-1"></i></button>
                        </form>
                    </div>

                    <div class="recent_post_wrapper widget_single">
                        <div class="items-title">
                            <h3 class="title">Recent Post</h3>
                        </div>
                        <div class="single-post">
                            <div class="recent_img">
                                 <a href="." title=""><img src="images/blog/news-1.jpg" alt="" class="img-fluid"></a>
                            </div>
                            <div class="post_title">
                                <a href="." title="">Lorem Ipsum is simply dummy typesetting</a>
                                <div class="post-date">
                                    <span>25 August, 2018</span>
                                </div>
                            </div>
                        </div>

                        <div class="single-post">
                            <div class="recent_img">
                                <a href="." title=""><img src="images/blog/news-2.jpg" alt="" class="img-fluid"></a>
                            </div>
                            <div class="post_title">
                                <a href="." title="">Lorem Ipsum is simply dummy typesetting</a>
                                <div class="post-date">
                                    <span>25 August, 2018</span>
                                </div>
                            </div>
                        </div>

                        <div class="single-post">
                            <div class="recent_img">
                                <a href="." title=""><img src="images/blog/news-3.jpg" alt="" class="img-fluid"></a>
                            </div>
                            <div class="post_title">
                                <a href="." title="">Lorem Ipsum is simply dummy typesetting</a>
                                <div class="post-date">
                                    <span>25 August, 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="archives widget_single">
                        <div class="items-title">
                            <h3 class="title">Archives</h3>
                        </div>
                        <div class="archives-items">
                            <ul class="list-unstyled">
                                <li><a href="." title="">December 2017</a></li>
                                <li><a href="." title="">November 2017</a></li>
                                <li><a href="." title="">October  2017</a></li>
                                <li><a href="." title="">August 2017</a></li>
                                <li><a href="." title="">July 2017</a></li>
                            </ul>
                        </div>
                    </div> 


                    <div class="popular_tags widget_single">
                        <div class="items-title">
                            <h3 class="title">Popular Tags</h3>
                        </div>
                        <div class="tags-items">
                            <ul class="list-unstyled">
                                <li><a href="." title="">Travel</a></li>
                                <li><a href="." title="">Amazing</a></li>
                                <li><a href="." title="">Clean</a></li>
                                <li><a href="." title="">Responsive</a></li>
                                <li><a href="." title="">Room</a></li>
                                <li><a href="." title="">Travel Tips</a></li>
                                <li><a href="." title="">Tour</a></li>
                                <li><a href="." title="">Design</a></li>
                            </ul>
                        </div>
                    </div>  

                    <div class="follow_us widget_single">
                        <div class="items-title">
                            <h3 class="title">Follow Us</h3>
                        </div>
                        <div class="tags-items">
                            <ul class="social-items d-flex list-unstyled">
                                <li><a href="."><i class="fa fa-facebook fb-icon"></i></a></li>
                                <li><a href="."><i class="fa fa-twitter twitt-icon"></i></a></li>
                                <li><a href="."><i class="fa fa-linkedin link-icon"></i></a></li>
                                <li><a href="."><i class="fa fa-instagram ins-icon"></i></a></li>
                            </ul>
                        </div>
                    </div>  

                </div>
            </div>
        </div>
    </div> 
</section>