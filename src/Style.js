const Style = ({ attributes, clientId }) => {
	const { barBackground, barDotColor, itemBg, itemColor, itemTypo, itemBorder, labelTypo, labelColor } = attributes;

	return <style dangerouslySetInnerHTML={{
		__html: `
		#tlgbTimeline-${clientId} .timeline__content{
			background: ${itemBg};
			border: ${itemBorder.width} solid ${itemBorder.color};
		}
		#tlgbTimeline-${clientId} .timeline__content label{
			font-size: ${labelTypo.fontSize};
			color: ${labelColor};
			font-style: ${labelTypo.fontStyle};
			font-weight: ${labelTypo.fontWeight}
		}
		#tlgbTimeline-${clientId} .timeline__content p{
			font-size: ${itemTypo.fontSize}px;
			font-weight: ${itemTypo.fontWeight};
			font-style: ${itemTypo.fontStyle};
			color: ${itemColor};
		}
		
		#tlgbTimeline-${clientId} .timeline__item::after {
			background-color: ${itemBg};
			border: 5px solid ${barDotColor};
		}
		#tlgbTimeline-${clientId} .timeline--horizontal .timeline-divider, 
		#tlgbTimeline-${clientId} .timeline:not(.timeline--horizontal)::before {
			background-color: ${barBackground};
		}

		#tlgbTimeline-${clientId} .timeline__item.timeline__item--left .timeline__content::before {
			border-left: 11px solid ${itemBorder.color}}
	
		#tlgbTimeline-${clientId} .timeline__item.timeline__item--right .timeline__content::before {
				border-right: 12px solid ${itemBorder.color};
		}
		#tlgbTimeline-${clientId} .timeline__item.timeline__item--left .timeline__content::after {
		border-left: 11px solid ${itemBg};}

		#tlgbTimeline-${clientId} .timeline__item.timeline__item--right .timeline__content::after {
			border-right: 12px solid ${itemBg};
		}

		#tlgbTimeline-${clientId} .timeline__item.timeline__item--top .timeline__content::before {
			border-top: 14px solid ${itemBorder.color} !important;
		}
		#tlgbTimeline-${clientId} .timeline__item.timeline__item--bottom .timeline__content::before {
			border-bottom: 14px solid ${itemBorder.color}!important;
			border-top: none;
		}
		#tlgbTimeline-${clientId} .timeline__item--top .timeline__content::after {
		border-top: 12px solid ${itemBg};
		border-bottom:none;
		}
		#tlgbTimeline-${clientId} .timeline__item--bottom .timeline__content::after {
			border-bottom: 12px solid ${itemBg};
			border-top: none;
		}
		#tlgbTimeline-${clientId} .timeline--mobile .timeline__item .timeline__content::before {
			border-left: none;
			border-right: 12px solid ${itemBorder.color};
		}
		#tlgbTimeline-${clientId} .timeline--mobile .timeline__item .timeline__content::after {
			border-left: none;
			border-right: 12px solid ${itemBg};
		}

		#tlgbTimeline-${clientId} .timeline-nav-button {
			background-color: #fff;
			border: 2px solid ${barBackground};
		}
		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;