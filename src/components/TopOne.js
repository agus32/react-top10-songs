import React from "react";
import "./TopOne.css";

export const TopOne = ({topone}) =>{

	const {artist,last_week,song_name,song_photo,song_url,weeks_at_top_1,weeks_on_chart} = topone;
	console.log(artist);
    return(
        
    <div className="charts-top-featured-alt // lrv-a-wrapper lrv-u-padding-lr-00@mobile-max u-padding-b-350@tablet u-padding-b-250 u-max-width-792 lrv-u-margin-lr-auto lrv-a-grid a-cols2@tablet u-grid-gap-250@tablet u-grid-gap-0">
			
    <div className="c-lazy-image  u-hidden@mobile-max">	
			<div className="lrv-a-crop-1x1" >	
				<img className="c-lazy-image__img lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto" src={song_photo} alt="Lazy loaded image" height="" width="" decoding="async" data-lazy-loaded="1"/>			
			</div>	
	</div>
	
	<div className="">
		<div className="lrv-u-flex lrv-u-justify-content-space-between lrv-u-margin-b-075 lrv-u-margin-b-00@mobile-max u-background-color-black@mobile-max u-color-white@mobile-max lrv-u-padding-lr-125@mobile-max">
			<div className="u-flex@mobile-max">
				<div className="lrv-u-flex u-align-items-center@mobile-max">
					<div className="a-font-primary-bold lrv-u-padding-r-150 lrv-u-padding-r-075@mobile-max u-font-size-102 u-font-size-87@tablet u-line-height-125 u-line-height-1@mobile-max u-margin-t-n125@tablet">1</div>
					<div>
					<h3 id="" className="c-title  a-font-primary-bold-l a-font-primary-bold-m@mobile-max lrv-u-color-black u-color-white@mobile-max lrv-u-margin-r-150">	
                        <a href={song_url} className="c-title__link lrv-a-unstyle-link">	
                        {song_name}		
                        </a>
                    </h3>												
	<p className="c-tagline  a-font-primary-l a-font-primary-m@mobile-max lrv-u-color-black u-color-white@mobile-max lrv-u-margin-tb-00 lrv-u-padding-t-025 lrv-u-margin-r-150">{artist}</p>
                    </div>
				    </div>
			    </div>

							
<div className="c-lazy-image  u-width-120@mobile-max lrv-u-flex-shrink-0 u-flex@mobile-max lrv-u-align-items-center u-hidden@tablet">
	
			<div className="lrv-a-crop-1x1 u-width-120@mobile-max" >
	
						<img className="c-lazy-image__img lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto" src={song_photo} alt="Lazy loaded image" height="" width="" decoding="async" data-lazy-loaded="1"/>
			
			</div>
	
	</div>
					</div>

					
<div className="lrv-u-border-color-grey-light lrv-u-border-t-1 u-border-t-0@mobile-max lrv-u-padding-t-1 u-padding-b-250 u-padding-b-00@tablet" data-tabs="">

	<div className="js-tabs-nav js-tabs-nav--charts-top lrv-u-flex lrv-u-justify-content-space-between u-justify-content-space-around@mobile-max  lrv-u-padding-b-00@mobile-max" data-tabs-nav="">
					<button className="c-tab // lrv-u-display-inline-block lrv-a-unstyle-button lrv-a-hover-effect lrv-u-whitespace-nowrap a-font-primary-bold-xxs lrv-u-text-transform-uppercase lrv-u-cursor-pointer active" data-tabs-target="tab_1">
	Stats</button>
		<a href="/posts"><button className="c-tab // lrv-u-display-inline-block lrv-a-unstyle-button lrv-a-hover-effect lrv-u-whitespace-nowrap a-font-primary-bold-xxs lrv-u-text-transform-uppercase lrv-u-cursor-pointer" data-tabs-target="tab_5">
	Share</button> </a>
			</div>

			
<div className="" data-tabs-trigger="tab_1">
			
<div className="o-chart-stats // lrv-u-flex a-children-border-horizontal a-children-border--grey-light lrv-u-margin-t-2 lrv-u-margin-t-125@mobile-max">
						
<div className="lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center u-flex-basis-33p lrv-u-text-align-center lrv-u-flex-shrink-0">
			
	<p className="c-tagline  a-font-primary-bold-xxs u-letter-spacing-00 lrv-u-text-transform-uppercase lrv-u-padding-lr-050 lrv-u-margin-tb-00 lrv-u-padding-t-050">Last week</p>

	
						<span className="c-label  a-font-primary-bold-xxl lrv-u-padding-lr-1 lrv-u-padding-t-025">
	
	{last_week}
</span>
	</div>
					
<div className="lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center u-flex-basis-33p lrv-u-text-align-center lrv-u-flex-shrink-0">
			
	<p className="c-tagline  a-font-primary-bold-xxs u-letter-spacing-00 lrv-u-text-transform-uppercase lrv-u-padding-lr-050 lrv-u-margin-tb-00 lrv-u-padding-t-050">Weeks at no. 1</p>

	
						<span className="c-label  a-font-primary-bold-xxl lrv-u-padding-lr-1 lrv-u-padding-t-025">
	
	{weeks_at_top_1}
</span>
	</div>
					
<div className="lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center u-flex-basis-33p lrv-u-text-align-center lrv-u-flex-shrink-0">
			
	<p className="c-tagline  a-font-primary-bold-xxs u-letter-spacing-00 lrv-u-text-transform-uppercase lrv-u-padding-lr-050 lrv-u-margin-tb-00 lrv-u-padding-t-050">Weeks on chart</p>

	
						<span className="c-label  a-font-primary-bold-xxl lrv-u-padding-lr-1 lrv-u-padding-t-025">
	
	{weeks_on_chart}
</span>
	</div>
			</div>
	
	
	
	
	</div>
			
<div className="lrv-u-display-none" data-tabs-trigger="tab_5">
	
	
	
	
			
<div className="o-chart-share // lrv-u-flex lrv-u-flex-wrap-wrap lrv-u-justify-content-center lrv-u-padding-t-2 lrv-u-padding-t-150@mobile-max lrv-u-padding-b-050 lrv-u-padding-b-00@mobile-max lrv-u-width-100p">
			
	<button className="o-icon-button lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-cursor-pointer lrv-u-flex lrv-u-align-items-center lrv-u-border-a-1 lrv-u-border-color-grey-light lrv-u-margin-a-075 lrv-u-padding-tb-050 u-border-radius-a-7 lrv-u-color-brand-primary lrv-u-color-white:hover lrv-u-background-color-brand-primary:hover u-width-150 lrv-u-justify-content-center">

	

		<span className="lrv-a-screen-reader-only" title="Plus Icon">Plus Icon</span>
	
<svg className="c-icon  lrv-u-display-block lrv-u-width-16 lrv-u-height-16" aria-hidden="true">
	
	</svg>


	
			
<span className="c-span  lrv-u-margin-l-050 a-font-primary-medium-xxs">

	Twitter
</span>
	
	</button>
			
	<button className="o-icon-button lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-cursor-pointer lrv-u-flex lrv-u-align-items-center lrv-u-border-a-1 lrv-u-border-color-grey-light lrv-u-margin-a-075 lrv-u-padding-tb-050 u-border-radius-a-7 lrv-u-color-brand-primary lrv-u-color-white:hover lrv-u-background-color-brand-primary:hover u-width-150 lrv-u-justify-content-center">

	

		<span className="lrv-a-screen-reader-only" title="Plus Icon">Plus Icon</span>
	
<svg className="c-icon  lrv-u-display-block lrv-u-width-16 lrv-u-height-16" aria-hidden="true">
	
	</svg>


	
			
<span className="c-span  lrv-u-margin-l-050 a-font-primary-medium-xxs">

	Copy Link
</span>
	
	</button>
			
	<button className="o-icon-button lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-cursor-pointer lrv-u-flex lrv-u-align-items-center lrv-u-border-a-1 lrv-u-border-color-grey-light lrv-u-margin-a-075 lrv-u-padding-tb-050 u-border-radius-a-7 lrv-u-color-brand-primary lrv-u-color-white:hover lrv-u-background-color-brand-primary:hover u-width-150 lrv-u-justify-content-center">

	

		<span className="lrv-a-screen-reader-only" title="Plus Icon">Plus Icon</span>
	
<svg className="c-icon  lrv-u-display-block lrv-u-width-16 lrv-u-height-16" aria-hidden="true">
	
	</svg>


	
			
<span className="c-span  lrv-u-margin-l-050 a-font-primary-medium-xxs">

	Facebook
</span>
	
	</button>
			
	<button className="o-icon-button lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-cursor-pointer lrv-u-flex lrv-u-align-items-center lrv-u-border-a-1 lrv-u-border-color-grey-light lrv-u-margin-a-075 lrv-u-padding-tb-050 u-border-radius-a-7 lrv-u-color-brand-primary lrv-u-color-white:hover lrv-u-background-color-brand-primary:hover u-width-150 lrv-u-justify-content-center">

	

		<span className="lrv-a-screen-reader-only" title="Plus Icon">Plus Icon</span>
	
<svg className="c-icon  lrv-u-display-block lrv-u-width-16 lrv-u-height-16" aria-hidden="true">
	
	</svg>


	
			
<span className="c-span  lrv-u-margin-l-050 a-font-primary-medium-xxs">

	Embed
</span>
	
	</button>
	</div>
	</div>
			
<div className="" data-tabs-trigger="">
	
	
	
	
	</div>
	
</div>
			</div>
</div>

        
    );
}