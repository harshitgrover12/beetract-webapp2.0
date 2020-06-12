import React, { Component } from 'react';
import CSSModules from "react-css-modules";
import style from  './style.css';

const AboutUs=()=>{
    return (
            
        <section id="main-container">
	<div classNameName="container">

		
		<div className="row">
			<div className="col-md-12 heading">
				
				<h2 className="title classNameic">Company Profile</h2>
			</div>
		</div>

		<div className="row landing-tab">
			<div className="col-md-3 col-sm-5">
				<div className="nav flex-column nav-pills border-right" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					<a className="animated fadeIn nav-link py-4 active d-flex align-items-center" data-toggle="pill" href="#tab_1"
						role="tab" aria-selected="true">
						<i className="fa fa-info-circle mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">WHO ARE WE</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_2" role="tab"
						aria-selected="true">
						<i className="fa fa-briefcase mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">OUR COMPANY</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_3" role="tab"
						aria-selected="true">
						<i className="fa fa-android mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">WHAT WE DO</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_4" role="tab"
						aria-selected="true">
						<i className="fa fa-pagelines mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">MODERN DESIGN</span>
					</a>
					<a className="animated fadeIn nav-link py-4 d-flex align-items-center" data-toggle="pill" href="#tab_5" role="tab"
						aria-selected="true">
						<i className="fa fa-support mr-4"></i>
						<span className="h4 mb-0 font-weight-bold">DEDICATED SUPPORT</span>
					</a>
				</div>
			</div>
			<div className="col-md-9 col-sm-7">
				<div className="tab-content" id="v-pills-tabContent">
					<div className="tab-pane pl-sm-5 fade show active animated fadeInLeft" id="tab_1" role="tabpanel">
						<i className="fa fa-trophy icon-xl text-danger mb-4"></i>
						<h3>We Are Awwared Winning Company</h3>
						<p>Over the year we have lots of experience in our field. In sit amet massa sapien. Vestibulum diam turpis,
							gravida in lobortis id, ornare a eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							sagittis nulla non elit dignissim suscipit. Duis lorem nulla, eleifend.</p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_2" role="tabpanel">
						<i className="fa fa-briefcase icon-xl text-danger mb-4"></i>
						<h3>We Have Worldwide Business</h3>
						<p>Helvetica cold-pressed lomo messenger bag ugh. Vinyl jean shorts Austin pork belly PBR retro, Etsy VHS
							kitsch actually messenger bag pug. Pbrb semiotics try-hard, Schlitz occupy dreamcatcher master cleanse
							Marfa Vice tofu. </p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_3" role="tabpanel">
						<i className="fa fa-android icon-xl text-danger mb-4"></i>
						<h3>We Build Readymade Applications</h3>
						<p>Over the year we have lots of experience in our field. In sit amet massa sapien. Vestibulum diam turpis,
							gravida in lobortis id, ornare a eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							sagittis nulla non elit dignissim suscipit. Duis lorem nulla, eleifend.</p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_4" role="tabpanel">
						<i className="fa fa-pagelines icon-xl text-danger  mb-4"></i>
						<h3>Clean and Modern Design</h3>
						<p>Over the year we have lots of experience in our field. In sit amet massa sapien. Vestibulum diam turpis,
							gravida in lobortis id, ornare a eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							sagittis nulla non elit dignissim suscipit. Duis lorem nulla, eleifend.</p>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_5" role="tabpanel">
						<i className="fa fa-support icon-xl  text-danger mb-4"></i>
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
    </section>
            
       
       )
}

export default CSSModules(AboutUs,style,{allowMultiple: true});