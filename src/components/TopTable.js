import React from "react";
import "./TopTable.css";


const ArrowPosition = ({this_week,last_week}) =>{
    if(this_week == last_week){
        return(
            <li className="o-chart-results-list__item // lrv-u-flex u-flex-grow-1@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center u-width-66 lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
									<div className="c-svg u-height-26 u-width-26">
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26.191 26.191"><g data-name="Group 3" transform="translate(-626 -1915)"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" transform="translate(626 1915)" fill="#8289a1"></circle><path d="M642.771 1928.989h-10.77v-1.82h10.77l-4.746-4.882 1.251-1.287 6.882 7.079-6.882 7.079-1.251-1.288z" fill="#fff"></path></g></svg></div>
				
							</li>
        );

    }else if(this_week < last_wee){
        return(
            <li className="o-chart-results-list__item // lrv-u-flex u-flex-grow-1@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center u-width-66 lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
									<div className="c-svg u-height-26 u-width-26">
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26.191 26.191"><g data-name="Group 7170" transform="translate(-626 -1965.469)"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" transform="translate(626 1965.469)" fill="#448118"></circle><path d="M639.989 1975.227v10.77h-1.82v-10.77l-4.882 4.746-1.287-1.251 7.079-6.882 7.079 6.882-1.288 1.251z" fill="#fff"></path></g></svg></div>
				
							</li>
        );
    }else if(last_week == 0){
		return(<li class="o-chart-results-list__item // lrv-u-flex u-flex-grow-1@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center u-width-66 lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">			
		<span class="c-label  u-width-40 a-font-primary-bold-xxs lrv-u-color-grey-darkest u-background-color-yellow lrv-u-text-align-center">		
		NEW
		</span>
		</li>
		);

	}else{
        return(
            <li className="o-chart-results-list__item // lrv-u-flex u-flex-grow-1@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center u-width-66 lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
									<div className="c-svg u-height-26 u-width-26">
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26.191 26.191"><g data-name="Group 7171"><g data-name="final red"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" fill="#b91b20"></circle></g><path d="M12.167 17.141V6.371h1.82v10.77l4.882-4.746 1.287 1.251-7.079 6.882-7.079-6.882 1.288-1.251z" fill="#fff"></path></g></svg></div>
				
							</li>
        );
    }
}


const MiniArrowPosition = ({this_week,last_week}) =>{

    if(this_week == last_week){
        return(
            <div className="c-svg u-height-10@mobile-max u-width-10@mobile-max u-hidden@tablet">
	<svg xmlns="http://www.w3.org/2000/svg" width="10.157" height="10.157"><path data-name="Arrow" d="M7.727 5.732H0V4.426h7.727L4.322.923 5.219 0l4.938 5.079-4.938 5.079-.9-.923z" fill="#8289a1"></path></svg></div>
			
        );

    }else if(this_week < last_week){
        return(
            <div className="c-svg u-height-10@mobile-max u-width-10@mobile-max u-hidden@tablet">
	<svg xmlns="http://www.w3.org/2000/svg" width="10.157" height="10.157"><path data-name="Arrow" d="M5.732 2.43v7.727H4.426V2.43L.923 5.835 0 4.938 5.079 0l5.079 4.938-.923.9z" fill="#00dda1"></path></svg></div>
			
        );
    }else if(last_week == 0){
        return(
			<span class="c-label  u-width-40 a-font-primary-bold-xxs lrv-u-background-color-grey-dark u-color-yellow lrv-u-text-align-center u-hidden@tablet">
		NEW
	</span>
		);
			
        
    }else{
		return(
            <div className="c-svg u-height-10@mobile-max u-width-10@mobile-max u-hidden@tablet">
	<svg xmlns="http://www.w3.org/2000/svg" width="10.157" height="10.157"><path data-name="Arrow" d="M4.425 7.727V0h1.306v7.727l3.503-3.405.923.897-5.079 4.938-5.079-4.938.923-.9z" fill="#fb676b"></path></svg></div>
		);
	}

}




export const TopTable = ({top}) =>{

	console.log(top);
    return(
        
        <div className="chart-results-list // lrv-u-padding-t-150 lrv-u-padding-t-050@mobile-max">
							<div className="chart-results-list-header // lrv-a-unstyle-list lrv-u-text-align-center lrv-u-background-color-brand-primary lrv-u-color-white lrv-u-flex lrv-u-align-items-center lrv-u-text-transform-uppercase lrv-u-line-height-small u-z-index-4 lrv-u-position-relative" >
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-100 u-width-55@mobile-max u-width-55@tablet-only">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	This Week
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-100 u-width-67@mobile-max u-flex-order-n1@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-66 u-hidden@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 lrv-u-flex-grow-1 u-hidden@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-72 u-width-30@mobile-max  u-width-55@tablet-only lrv-u-order-100@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-padding-lr-075@desktop lrv-u-padding-lr-025 u-flex-grow-1@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	Award
</span>

			<div className="a-show-on-hover-parent lrv-u-position-relative lrv-u-display-inline-block u-z-index-4">
							<div>
					<div className="c-svg u-height-14 u-width-14 lrv-u-text-transform-lowercase lrv-u-cursor-pointer">
	<svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 48 48"><g data-name="Group 7167" transform="translate(-805 -585)"><circle data-name="Ellipse 541" cx="24" cy="24" r="24" transform="translate(805 585)" fill="#fff"></circle><text data-name="Country Music Hall o" transform="translate(834 620)" fill="#1a48c4" font-size="35" font-family="FreightBigProBlack-Regular, FreightBig Pro" letter-spacing=".1em"><tspan x="-10.29" y="0">i</tspan></text></g></svg></div>
				</div>
						<div className="a-show-on-hover">
				<div className="chart-award-flyout // a-chart-award-flyout u-box-shadow-header-subscribe lrv-u-padding-tb-150 lrv-u-padding-lr-1 lrv-u-margin-t-075 a-icon-after-arrow-top-center lrv-u-background-color-white lrv-a-hover-effect u-width-250 u-width-300@tablet lrv-u-border-a-1 lrv-u-border-color-black">

	<div className="lrv-u-flex lrv-u-align-items-center lrv-u-padding-b-150 lrv-u-text-align-left lrv-u-text-transform-initial lrv-u-color-black">
		<div className="u-width-37 lrv-u-flex lrv-u-justify-content-center">
			<div className="c-svg u-width-18 u-height-17 lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center">
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 18.072 17.316"><path data-name="Path 3055" d="M9.072 0L6.984 6.7H0l5.58 4.14-2.052 6.44 5.508-3.96 5.508 4-2.124-6.448L18.072 6.7h-6.84z" fill="currentColor"></path></svg></div>
		</div>

		<div className="lrv-u-padding-l-125">
							<h3 id="title-of-a-story" className="c-title  a-font-primary-bold-s u-letter-spacing-0026 lrv-u-color-black">

	
	
		
					Gains in Weekly Performance		
	
</h3>
			
					</div>
	</div>

	<div className="lrv-u-flex lrv-u-align-items-center lrv-u-padding-b-150 lrv-u-text-align-left lrv-u-text-transform-initial lrv-u-color-black">
		<div className="u-width-37 lrv-u-flex lrv-u-justify-content-center">
			<div className="c-svg u-width-37 u-height-37 lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37"  ><g data-name="Group 7175"><g data-name="Group 7173"><path data-name="Path 3043" d="M18.072 8.646l-2.088 6.7H9l5.58 4.14-2.052 6.44 5.508-3.96 5.508 4-2.124-6.448 5.652-4.172h-6.84z" fill="currentColor"></path></g><g data-name="Ellipse 542" fill="none" stroke="currentColor"><circle cx="18.5" cy="18.5" r="18.5" stroke="none"></circle><circle cx="18.5" cy="18.5" r="18"></circle></g></g></svg></div>
		</div>

		<div className="lrv-u-padding-l-125">
							<h3 id="title-of-a-story" className="c-title  a-font-primary-bold-s u-letter-spacing-0026 lrv-u-color-black">

	
	
		
					Additional Awards		
	
</h3>
			
							
	

					</div>
	</div>

			

	</div>
			</div>
		</div>
	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-padding-lr-075@desktop lrv-u-padding-lr-025 u-flex-grow-1@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	Last Week
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-padding-lr-075@desktop lrv-u-padding-lr-025 u-flex-grow-1@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	Peak Pos.
</span>

	</div>
											
<div className="o-chart-results-list-header__item  // lrv-u-padding-tb-075 u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-padding-lr-075@desktop lrv-u-padding-lr-025 u-flex-grow-1@mobile-max">
	
<span className="c-span  a-font-primary-medium-xxs u-font-size-11@mobile-max u-letter-spacing-00 u-line-height-125 lrv-u-display-block">

	Wks on Chart
</span>

	</div>
									</div>
													
<div className="o-chart-results-list-row-container">
	<ul className="o-chart-results-list-row // lrv-a-unstyle-list lrv-u-flex u-height-200 u-height-100@mobile-max u-height-100@tablet-only lrv-u-background-color-white a-chart-has-chart-detail" data-detail-target="1" data-ajax="">

		<li className="o-chart-results-list__item // lrv-u-background-color-black lrv-u-color-white u-width-100 u-width-55@mobile-max u-width-55@tablet-only lrv-u-height-100p lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey">
										<span className="c-label  a-font-primary-bold-l u-font-size-32@tablet u-letter-spacing-0080@tablet">
	
	1
</span>
			
        <MiniArrowPosition this_week={1} last_week={top[0].last_week}/>	
					</li>

		<li className="o-chart-results-list__item // u-width-200 u-width-100@tablet-only u-width-67@mobile-max lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey u-flex-order-n1@mobile-max">
							
<div className="c-lazy-image  lrv-u-width-200 u-width-67@mobile-max u-width-100@tablet-only">
	
			<div className="lrv-a-crop-1x1 a-crop-67x100@mobile-max" >
	
						<img className="c-lazy-image__img lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto" src={top[0].song_photo} alt="" height="" width="" decoding="async" data-lazy-loaded="1"/>
			
			</div>
	
	</div>
					</li>

					<ArrowPosition this_week={1} last_week={top[0].last_week}/>
		
		<li className="lrv-u-width-100p">
			<ul className="lrv-a-unstyle-list lrv-u-flex lrv-u-height-100p lrv-u-flex-direction-column@mobile-max">

				<li className="o-chart-results-list__item // lrv-u-flex-grow-1 lrv-u-flex lrv-u-flex-direction-column lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light  lrv-u-padding-l-1@mobile-max">
											<h3 id="title-of-a-story" className="c-title  a-no-trucate a-font-primary-bold-s u-letter-spacing-0021 u-font-size-23@tablet lrv-u-font-size-16 u-line-height-125 u-line-height-normal@mobile-max a-truncate-ellipsis u-max-width-245 u-max-width-230@tablet-only u-letter-spacing-0028@tablet">

	
	
		
					{top[0].song_name}
	
</h3>
					
														<span className="c-label  a-no-trucate a-font-primary-s lrv-u-font-size-14@mobile-max u-line-height-normal@mobile-max u-letter-spacing-0021 lrv-u-display-block a-truncate-ellipsis-2line u-max-width-330 u-max-width-230@tablet-only u-font-size-20@tablet">
	
	{top[0].artist}
</span>
									</li>

				<li className="o-chart-results-list__item // u-width-66 u-width-30@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-order-100@mobile-max u-hidden@mobile-max">
					<div className="a-chart-plus-minus-icon"></div>
				</li>

									<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
											</li>
				
									<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max u-hidden@mobile-max">
									<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].last_week == 0 ? "-" : top[0].last_week}
</span>
					</li>
				
									<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
									<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].peak_pos}
</span>
					</li>
				
									<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max u-hidden@mobile-max">
									<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].weeks_on_chart}
</span>
					</li>
				
				
									<li className="lrv-u-width-100p u-hidden@tablet">
						<ul className="lrv-a-unstyle-list lrv-u-flex lrv-u-height-100p lrv-u-flex-direction-row u-background-color-grey-lightest@mobile-max">
							<li className="o-chart-results-list__item // u-width-66 u-width-30@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-order-100@mobile-max">
								<div className="a-chart-plus-minus-icon"></div>
							</li>

															<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-flex-grow-1">
																	</li>
							
															<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].last_week == 0 ? "-" : top[0].last_week}
</span>
								</li>
							
															<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].peak_pos}
</span>
								</li>
							
															<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-bold-l a-font-primary-m@mobile-max u-font-weight-normal@mobile-max lrv-u-padding-tb-050@mobile-max u-font-size-32@tablet">
	
	{top[0].weeks_on_chart}
</span>
								</li>
							
													</ul>
					</li>
							</ul>
		</li>
	</ul>

	</div>
											



    {top.map((song, index) => {
	if(index > 0){
		return(

			<div className="o-chart-results-list-row-container">
	<ul className="o-chart-results-list-row // lrv-a-unstyle-list lrv-u-flex u-height-100 lrv-u-background-color-white a-chart-has-chart-detail" data-detail-target="2" data-ajax="">

		<li className="o-chart-results-list__item // lrv-u-background-color-black lrv-u-color-white u-width-100 u-width-55@mobile-max u-width-55@tablet-only lrv-u-height-100p lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey">
										<span className="c-label  a-font-primary-bold-l u-font-size-32@tablet u-letter-spacing-0080@tablet">
	
	{index+1}
</span>
			
        <MiniArrowPosition this_week={index+1} last_week={song.last_week}/>				
					</li>

		<li className="o-chart-results-list__item // u-width-100 u-width-67@mobile-max lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey u-flex-order-n1@mobile-max">
							
<div className="c-lazy-image  lrv-u-width-100 u-width-67@mobile-max">
	
			<div className="lrv-a-crop-1x1 a-crop-67x100@mobile-max" >
	
						<img className="c-lazy-image__img lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto" src={song.song_photo} alt="" height="" width="" decoding="async" data-lazy-loaded="1"/>
			
			</div>
	
	</div>
					</li>

					<ArrowPosition this_week={index+1} last_week={song.last_week}/>
		
		<li className="lrv-u-width-100p">
			<ul className="lrv-a-unstyle-list lrv-u-flex lrv-u-height-100p lrv-u-flex-direction-column@mobile-max">

				<li className="o-chart-results-list__item // lrv-u-flex-grow-1 lrv-u-flex lrv-u-flex-direction-column lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-padding-l-050 lrv-u-padding-l-1@mobile-max">
											<h3 id="title-of-a-story" className="c-title  a-no-trucate a-font-primary-bold-s u-letter-spacing-0021 lrv-u-font-size-18@tablet lrv-u-font-size-16 u-line-height-125 u-line-height-normal@mobile-max a-truncate-ellipsis u-max-width-330 u-max-width-230@tablet-only">

	
	
		
					{song.song_name}	
	
</h3>
					
														<span className="c-label  a-no-trucate a-font-primary-s lrv-u-font-size-14@mobile-max u-line-height-normal@mobile-max u-letter-spacing-0021 lrv-u-display-block a-truncate-ellipsis-2line u-max-width-330 u-max-width-230@tablet-only">
	
	{song.artist}	
</span>
									</li>

				<li className="o-chart-results-list__item // u-width-66 u-width-30@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-order-100@mobile-max u-hidden@mobile-max">
					<div className="a-chart-plus-minus-icon"></div>
				</li>

									<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
											</li>
				
									<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max u-hidden@mobile-max">
									<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.last_week == 0 ? "-" : song.last_week}	
</span>
					</li>
				
									<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-hidden@mobile-max">
									<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.peak_pos}	
</span>
					</li>
				
									<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max u-hidden@mobile-max">
									<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.weeks_on_chart}	
</span>
					</li>
				
				
									<li className="lrv-u-width-100p u-hidden@tablet">
						<ul className="lrv-a-unstyle-list lrv-u-flex lrv-u-height-100p lrv-u-flex-direction-row u-background-color-grey-lightest@mobile-max">
							<li className="o-chart-results-list__item // u-width-66 u-width-30@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-order-100@mobile-max">
								<div className="a-chart-plus-minus-icon"></div>
							</li>

															<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-flex-grow-1">
																	</li>
							
															<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.last_week == 0 ? "-" : song.last_week}	
</span>
								</li>
							
															<li className="o-chart-results-list__item // a-chart-bg-color a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-background-color-grey-lightest lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.peak_pos}
</span>
								</li>
							
															<li className="o-chart-results-list__item // a-chart-color u-width-72 u-width-55@mobile-max u-width-55@tablet-only lrv-u-flex lrv-u-flex-shrink-0 lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 u-border-b-0@mobile-max lrv-u-border-color-grey-light u-background-color-white-064@mobile-max lrv-u-flex-grow-1">
												<span className="c-label  a-font-primary-m lrv-u-padding-tb-050@mobile-max">
	
	{song.weeks_on_chart}	
</span>
								</li>
							
													</ul>
					</li>
							</ul>
		</li>
	</ul>

			

</div>
		)
	}

  })}



			</div>


        
    )
}