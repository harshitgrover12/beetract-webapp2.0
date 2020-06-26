import React, { Component } from 'react';
import CSSModules from "react-css-modules";
import style from  './style.css';


const AboutUs=()=>{

    return (
            
    <section id="main-container">
	<div className="container">

		
		<div className="row">
			
		<div className="col-md-12 heading">
				
		</div>
		</div>

		<div className="row landing-tab">
			<div className="col-md-3 col-sm-5">
				<div className="nav flex-column nav-pills border-right" id="v-pills-tab" role="tablist" aria-orientation="vertical">

				<a class="animated fadeIn nav-link py-4 active d-flex align-items-center" data-toggle="pill" href="#tab_1"
						role="tab" aria-selected="true">
						<i className="fa fa-briefcase mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">OUR PURPOSE</span>
					</a>
			
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_2" role="tab"
						aria-selected="true">
						<i className="fa fa-lightbulb-o mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">HOW WE DO IT</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_3" role="tab"
						aria-selected="true">
						<i className="fa fa-pagelines mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">FEATURES</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_4" role="tab"
						aria-selected="true">
						<i className="fa fa-support mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">MEET THE TEAM</span>
					</a>
				</div>
			</div>
			<div className="col-md-9 col-sm-7">
				<div className="tab-content" id="v-pills-tabContent">

					<div className="tab-pane pl-sm-5 fade show active  animated fadeInLeft" id="tab_1" role="tabpanel">
						<i className="fa fa-briefcase icon-xl mb-4"></i>
						<h3>We Have Worldwide Business</h3>
						<p>Helvetica cold-pressed lomo messenger bag ugh. Vinyl jean shorts Austin pork belly PBR retro, Etsy VHS
							kitsch actually messenger bag pug. Pbrb semiotics try-hard, Schlitz occupy dreamcatcher master cleanse
							Marfa Vice tofu. </p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_2" role="tabpanel">
						<i className="fa fa-lightbulb-o icon-xl  mb-4"></i>
						<h3>We Build Readymade Applications</h3>
						<p>Over the year we have lots of experience in our field. In sit amet massa sapien. Vestibulum diam turpis,
							gravida in lobortis id, ornare a eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							sagittis nulla non elit dignissim suscipit. Duis lorem nulla, eleifend.</p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_3" role="tabpanel">
						<i className="fa fa-pagelines icon-xl   mb-4"></i>
						<h3>Clean and Modern Design</h3>
						<p>Over the year we have lots of experience in our field. In sit amet massa sapien. Vestibulum diam turpis,
							gravida in lobortis id, ornare a eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							sagittis nulla non elit dignissim suscipit. Duis lorem nulla, eleifend.</p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_4" role="tabpanel">
						<i className="fa fa-support icon-xl   mb-4"></i>
						<h3>24/7 Dedicated Support</h3>
						<p>Occupy selfies Tonx, +1 Truffaut beard organic normcore tilde flannel artisan squid cray single-origin
							coffee. Master cleanse vinyl Austin kogi, semiotics skateboard fap wayfarers health goth. Helvetica cray
							church-key hashtag Carles. Four dollar toast meggings seitan, Tonx pork belly VHS Bushwick. Chambray banh
							mi cornhole. Locavore messenger bag seitan.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="gap-60"></div>

	<div class="ts_counter_bg parallax parallax2">
<div class="parallax-overlay"></div>
<div class="container">
	<div class="row wow fadeInLeft text-center">
		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-angle-double-up"></i></span>
			<div class="facts-num">
				<span class="counter">1200</span>
			</div>
			<h3>StartUps</h3>
		</div>

		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-institution"></i></span>
			<div class="facts-num">
				<span class="counter">1277</span>
			</div>
			<h3>Business</h3>
		</div>

		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-user"></i></span>
			<div class="facts-num">
				<span class="counter">869</span>
			</div>
			<h3>Freelancers</h3>
		</div>

		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-superpowers"></i></span>
			<div class="facts-num">
				<span class="counter">869</span>
			</div>
			<h3>Prelancers</h3>
		</div>

		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-cogs"></i></span>
			<div class="facts-num">
				<span class="counter">76</span>
			</div>
			<h3>Projects</h3>
		</div>

		<div class="facts col-md-2 col-sm-6">
			<span class="facts-icon"><i class="fa fa-users"></i></span>
			<div class="facts-num">
				<span class="counter">76</span>
			</div>
			<h3>Talents Hired</h3>
		</div>


	</div>
	
</div>

</div>
	
    </section>





            
       
       )
}

export default CSSModules(AboutUs,style,{allowMultiple: true});