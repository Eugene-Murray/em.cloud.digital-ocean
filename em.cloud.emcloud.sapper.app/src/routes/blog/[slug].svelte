<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		//const res = await this.fetch(`blog/${params.slug}.json`);
		const res = await this.fetch(`https://emcloud.solutions/api/blogs/slug/${params.slug}`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class='content'>
	{@html post.html}
</div>

<!--========={ Blog Wrapper }========-->
<section class="blog_wrapper">
    <div class="container">  
        <div class="row">        
            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                <div class="blog_post">
                    <img src="images/blog/blog-01.jpg" alt="" class="img-fluid">
                    <div class="post_content">
                        <div class="post_by d-flex">
                            <img src="images/blog/bloger-1.png" alt="">
                            <span>By- <a href="." title="">Zokani Piterson</a></span>
                        </div>
                        <h3>What is hosting and how it can help your business</h3>
                        <div class="blog_post_content">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</p>
                            <div class="quite"><i class="flaticon-quotation-mark-1 i_top"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas excepturi sint occaecati cupiditate non similique sunt in culpa qui officia deserunt mollitia animi.<i class="flaticon-quotation-mark i_btm"></i> <br><a href="." title="" class="quite_parson">Mr. Jhone Singa</a></div>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis asperiores repellat. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness the great explorer of the truth, the master-builder of human happiness.v.</p>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis asperiores repellat. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis asperiores repellat. But I must explain to you how all this mistaken idea of denouncing pleasure and praising paiexplorer of the truth, the master-builder of human happiness.</p>
                        </div>
                    </div>
                    <div class="next_prev_post d-flex justify-content-between list-unstyled">
                        <a href="." title=""><i class="flaticon-angle-pointing-to-left new_post"></i>Newer Post</a>
                        <a href="." title="">Older Post<i class="flaticon-angle-arrow-pointing-to-right old_post"></i></a>
                    </div>
                    <!-- Blog Comment Wrappper-->
                    <div class="commnet-wrapper">
                        <div class="items_title">
                            <h3 class="title">2 Commnets</h3>
                        </div>
                         <div class="comment-list-items">
                            <div class="comment-list-wrapper">
                                <div class="comment-list">
                                    <div class="commnet_img">
                                        <img src="images/team/team-02.jpg" alt="member img" class="img-fluid">
                                    </div>
                                    <div class="comment-text">
                                        <div class="author_info"> 
                                             <a href="." class="author_name">Adam Smith</a> 
                                        </div>     
                                        <p>You need to be sure there isn't anything embarrassing hidden in the repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        <div class="reply-comment d-flex">
                                            <span>2 Days Ago</span>
                                            <a href="." title="">Reply</a>
                                        </div>  
                                    </div>
                                </div>

                                <div class="comment-list reply_comment_text">
                                    <div class="commnet_img">
                                       <img src="images/team/team-03.jpg" alt="member img" class="img-fluid">
                                    </div>
                                    <div class="comment-text">
                                        <div class="author_info"> 
                                            <a href="." class="author_name">Jonathon Doe</a> 
                                        </div>     
                                        <p>you need to be sure there isn't anything embarrassing hidden in the necessary.</p>
                                        <div class="reply-comment d-flex">
                                            <span>2 Days Ago</span>
                                            <a href="." title="">Reply</a>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div class="comment-list-wrapper">
                                <div class="comment-list">
                                    <div class="commnet_img">
                                        <img src="images/team/team-04.jpg" alt="member img" class="img-fluid">
                                    </div>
                                    <div class="comment-text">
                                        <div class="author_info"> 
                                             <a href="." class="author_name">David Martin</a> 
                                        </div>     
                                         <p>you need to be sure there isn't anything embarrassing hidden in the repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        <div class="reply-comment d-flex">
                                            <span>2 Days Ago</span>
                                            <a href="." title="">Reply</a>
                                        </div>  
                                    </div>                               
                                </div>
                            </div>
                        </div> 
                        <!--  Leave Commnent Wrapper -->
                        <div class="leave_comment_wrapper">
                            <div class="items_title">
                                <h3 class="title">Leave a Comment</h3>
                            </div>
                             <div class="leave_comment">
                                <div class="contact_form">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-12 col-sm-12 col-md-12 form-group">
                                               <input type="text" class="form-control" id="name"  placeholder="Name">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-12 form-group">
                                                <input type="email" class="form-control" id="email" placeholder="Email">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-12 form-group">
                                                <textarea class="form-control" id="comment" placeholder="Comment"></textarea>
                                            </div>


                                             <div class="col-12 col-sm-12 col-md-12 submit-btn">
                                                <button type="submit" class="text-center">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>   
                                </div>
                            </div> 
                        </div>
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
            </div> <!-- ./ End  Slider-->
            
        </div>
    </div> 
</section> <!-- ./ End  Blog Wrapper-->
