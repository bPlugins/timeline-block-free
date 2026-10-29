/**
 * Icons for the Pro-only timeline blocks shown on the dashboard Blocks tab.
 *
 * The free build does not ship `src/blocks/*`, so these icons cannot be
 * imported from the individual block folders the way the Pro build does — they
 * live here instead. They exist purely so the upsell cards render with the same
 * artwork the user sees after upgrading; nothing here registers a block.
 *
 * Keep these in sync with `src/blocks/<block>/utils/icons.js` in the Pro plugin.
 */

export const mediaStoryIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='7' y='5' fill='#CFD8DC' width='2' height='38' />
	<circle fill='#6366f1' cx='8' cy='12' r='3.5' />
	<circle fill='#6366f1' cx='8' cy='36' r='3.5' />
	<rect x='16' y='5' width='27' height='15' rx='2' fill='#00BCD4' />
	<path d='M16 17l6-6 5 5 4-4 12 12v-1a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-6z' fill='#0097A7' />
	<circle cx='36' cy='11' r='2' fill='#fff' />
	<rect x='16' y='28' width='27' height='15' rx='2' fill='#4527a4' />
	<path d='M27 31.5l7 4-7 4v-8z' fill='#fff' />
</svg>;

export const yearNavIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='4' y='6' width='40' height='9' rx='4' fill='#00BCD4' />
	<rect x='7' y='9' width='9' height='3' rx='1.5' fill='#fff' opacity='.55' />
	<rect x='19.5' y='9' width='9' height='3' rx='1.5' fill='#fff' />
	<rect x='32' y='9' width='9' height='3' rx='1.5' fill='#fff' opacity='.55' />
	<rect x='4' y='21' width='40' height='9' rx='2' fill='#4527a4' opacity='.9' />
	<rect x='4' y='34' width='40' height='9' rx='2' fill='#6366f1' opacity='.55' />
	<circle cx='24' cy='18' r='2' fill='#00BCD4' />
</svg>;

export const roadmapIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='9' y='6' width='2' height='36' fill='#CFD8DC' />
	<circle cx='10' cy='12' r='4' fill='#10b981' />
	<circle cx='10' cy='24' r='4' fill='#f59e0b' />
	<circle cx='10' cy='36' r='4' fill='none' stroke='#6366f1' strokeWidth='2' strokeDasharray='3 2.5' />
	<rect x='18' y='7' width='25' height='10' rx='2' fill='#10b981' opacity='.22' />
	<rect x='21' y='10.5' width='13' height='3' rx='1.5' fill='#047857' />
	<rect x='18' y='19' width='25' height='10' rx='2' fill='#f59e0b' opacity='.22' />
	<rect x='21' y='22.5' width='9' height='3' rx='1.5' fill='#b45309' />
	<rect x='18' y='31' width='25' height='10' rx='2' fill='#6366f1' opacity='.18' />
	<rect x='21' y='34.5' width='16' height='3' rx='1.5' fill='#4338ca' />
</svg>;

export const careerIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='11' y='9' width='2' height='30' fill='#CFD8DC' />
	<circle cx='12' cy='12' r='5.5' fill='#fff' stroke='#CFD8DC' strokeWidth='1.5' />
	<circle cx='12' cy='24' r='5.5' fill='#10b981' />
	<circle cx='12' cy='36' r='5.5' fill='#fff' stroke='#CFD8DC' strokeWidth='1.5' />
	<rect x='22' y='8' width='11' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='35' y='8' width='9' height='3' rx='1.5' fill='#e5e7eb' />
	<rect x='22' y='13.5' width='17' height='3.5' rx='1.5' fill='#111827' />
	<rect x='22' y='20' width='11' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='35' y='20' width='9' height='3' rx='1.5' fill='#10b981' />
	<rect x='22' y='25.5' width='17' height='3.5' rx='1.5' fill='#111827' />
	<rect x='22' y='32' width='11' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='22' y='37.5' width='17' height='3.5' rx='1.5' fill='#111827' />
</svg>;

export const eventScheduleIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<circle cx='7' cy='9' r='2.5' fill='#2563eb' />
	<circle cx='27' cy='9' r='2.5' fill='#2563eb' />
	<rect x='12' y='7.5' width='9' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='32' y='7.5' width='9' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='6' y='14' width='2' height='6' fill='#e5e7eb' />
	<rect x='26' y='14' width='2' height='6' fill='#e5e7eb' />
	<rect x='4' y='21' width='18' height='20' rx='2.5' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='6.5' y='23.5' width='13' height='8' rx='1.5' fill='#4527a4' />
	<rect x='6.5' y='34' width='9' height='2.5' rx='1.25' fill='#111827' />
	<rect x='24' y='21' width='18' height='20' rx='2.5' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='26.5' y='23.5' width='13' height='8' rx='1.5' fill='#e6e7e9' />
	<circle cx='33' cy='27.5' r='2' fill='#3f4650' />
	<rect x='26.5' y='34' width='9' height='2.5' rx='1.25' fill='#111827' />
</svg>;

export const dynamicPostIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='23' y='6' width='2' height='36' fill='#CFD8DC' />
	<circle cx='24' cy='11' r='4' fill='#2563eb' />
	<circle cx='24' cy='24' r='4' fill='#2563eb' />
	<circle cx='24' cy='37' r='4' fill='#2563eb' />
	<rect x='2' y='5' width='16' height='12' rx='2' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='4.5' y='7.5' width='11' height='4' rx='1' fill='#dbeafe' />
	<rect x='4.5' y='13' width='7' height='1.8' rx='.9' fill='#9ca3af' />
	<rect x='30' y='18' width='16' height='12' rx='2' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='32.5' y='20.5' width='11' height='4' rx='1' fill='#dbeafe' />
	<rect x='32.5' y='26' width='7' height='1.8' rx='.9' fill='#9ca3af' />
	<rect x='2' y='31' width='16' height='12' rx='2' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='4.5' y='33.5' width='11' height='4' rx='1' fill='#dbeafe' />
	<rect x='4.5' y='39' width='7' height='1.8' rx='.9' fill='#9ca3af' />
</svg>;

// An open group with its steps showing, above a folded one — the chevrons are
// what mark this out from the other timeline blocks in the inserter.
export const accordionIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='7' y='6' width='2' height='34' fill='#CFD8DC' />
	<circle cx='8' cy='10' r='4.5' fill='#6366f1' />
	<circle cx='8' cy='36' r='4.5' fill='#6366f1' />
	<rect x='16' y='7' width='14' height='3' rx='1.5' fill='#111827' />
	<rect x='16' y='33' width='14' height='3' rx='1.5' fill='#111827' />
	<path d='M39 12.5 42 9.5 45 12.5' fill='none' stroke='#6366f1' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
	<path d='M39 33 42 36 45 33' fill='none' stroke='#9ca3af' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
	<rect x='19' y='15' width='2' height='13' fill='#e5e7eb' />
	<circle cx='20' cy='17' r='2.5' fill='#10b981' />
	<circle cx='20' cy='23' r='2.5' fill='#f59e0b' />
	<circle cx='20' cy='29' r='2.5' fill='#fff' stroke='#c7d2fe' strokeWidth='1.5' />
	<rect x='26' y='15.5' width='16' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='26' y='21.5' width='13' height='3' rx='1.5' fill='#9ca3af' />
	<rect x='26' y='27.5' width='16' height='3' rx='1.5' fill='#9ca3af' />
</svg>;

// A spotlit card above a year rail — the shape of the block, so it reads at a
// glance next to the other timelines in the inserter.
export const companyHistoryIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='2' y='8' width='8' height='22' rx='2' fill='#f3f4f6' />
	<rect x='38' y='8' width='8' height='22' rx='2' fill='#f3f4f6' />
	<rect x='12' y='4' width='24' height='26' rx='2.5' fill='#fff' stroke='#e5e7eb' strokeWidth='1.5' />
	<rect x='15.5' y='8' width='9' height='4' rx='1.5' fill='#111827' />
	<rect x='15.5' y='15' width='17' height='2.5' rx='1.25' fill='#9ca3af' />
	<rect x='15.5' y='20' width='17' height='2.5' rx='1.25' fill='#9ca3af' />
	<rect x='15.5' y='25' width='11' height='2.5' rx='1.25' fill='#9ca3af' />
	<rect x='4' y='38' width='6' height='2.5' rx='1.25' fill='#d1d5db' />
	<rect x='14' y='37.5' width='8' height='3.5' rx='1.5' fill='#22c55e' />
	<rect x='26' y='38' width='6' height='2.5' rx='1.25' fill='#d1d5db' />
	<rect x='36' y='38' width='6' height='2.5' rx='1.25' fill='#d1d5db' />
	<circle cx='7' cy='45' r='1.6' fill='#d1d5db' />
	<circle cx='18' cy='45' r='2.2' fill='#22c55e' />
	<circle cx='29' cy='45' r='1.6' fill='#d1d5db' />
	<circle cx='39' cy='45' r='1.6' fill='#d1d5db' />
	<rect x='13' y='44.2' width='10' height='1.6' rx='.8' fill='#22c55e' />
</svg>;

export const storySlideIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='4' y='6' width='22' height='18' rx='3' fill='#0f8a84' />
	<circle cx='19' cy='12' r='2.5' fill='#fff' opacity='0.7' />
	<path d='M4 21l7-6 5 4 4-3 6 5v0.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 4 21.5z' fill='#fff' opacity='0.45' />
	<rect x='29' y='10' width='8' height='2.5' rx='1.25' fill='#0f8a84' />
	<rect x='29' y='14.5' width='15' height='3.5' rx='1.5' fill='#111827' />
	<rect x='29' y='20' width='12' height='2.5' rx='1.25' fill='#9ca3af' />
	<rect x='4' y='30.25' width='40' height='1.5' rx='0.75' fill='#9fd3cf' />
	<circle cx='6' cy='31' r='2' fill='#fff' stroke='#0f8a84' strokeWidth='1.5' />
	<circle cx='20' cy='31' r='2' fill='#fff' stroke='#0f8a84' strokeWidth='1.5' />
	<circle cx='34' cy='31' r='2.2' fill='#0f8a84' />
	<rect x='4' y='35' width='12' height='7' rx='2' fill='#cfe9e6' />
	<rect x='18' y='35' width='12' height='7' rx='2' fill='#f3dfc1' />
	<rect x='32' y='35' width='12' height='7' rx='2' fill='#8fb3ec' stroke='#0f8a84' strokeWidth='1.2' />
</svg>;

export const historySlideIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='3' y='5' width='9' height='5' rx='1.5' fill='#fff' stroke='#d1d5db' strokeWidth='1' />
	<rect x='14' y='5' width='9' height='5' rx='1.5' fill='#2542d4' />
	<rect x='25' y='5' width='9' height='5' rx='1.5' fill='#fff' stroke='#d1d5db' strokeWidth='1' />
	<rect x='3' y='13' width='42' height='22' rx='3' fill='#e6e9fa' />
	<rect x='6' y='16' width='12' height='5' rx='1' fill='#2542d4' />
	<rect x='6' y='23' width='14' height='2.5' rx='1' fill='#111827' />
	<rect x='6' y='28' width='5' height='4' rx='1' fill='#fff' />
	<rect x='12.5' y='28' width='5' height='4' rx='1' fill='#fff' />
	<rect x='19' y='28' width='5' height='4' rx='1' fill='#fff' />
	<rect x='27' y='16' width='15' height='16' rx='2' fill='#4fb28e' />
	<rect x='3' y='39' width='5' height='5' rx='1.5' fill='#fff' stroke='#d1d5db' strokeWidth='1' />
	<rect x='10' y='39' width='5' height='5' rx='1.5' fill='#fff' stroke='#d1d5db' strokeWidth='1' />
	<rect x='18' y='40.75' width='8' height='1.5' rx='0.75' fill='#2542d4' />
	<rect x='27.5' y='40.75' width='8' height='1.5' rx='0.75' fill='#2542d4' />
	<rect x='37' y='40.75' width='8' height='1.5' rx='0.75' fill='#e5e7eb' />
</svg>;

export const showcaseIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<defs>
		<linearGradient id='tlgbShowcaseIconGrad' x1='0' y1='0' x2='1' y2='1'>
			<stop offset='0' stopColor='#ff8a3d' />
			<stop offset='0.5' stopColor='#ff3d7f' />
			<stop offset='1' stopColor='#7c3aed' />
		</linearGradient>
	</defs>
	<rect x='3' y='6' width='42' height='36' rx='7' fill='url(#tlgbShowcaseIconGrad)' />
	<rect x='13' y='12' width='22' height='4' rx='2' fill='#fff' />
	<rect x='8' y='27' width='32' height='2' rx='1' fill='#fff' opacity='0.7' />
	<circle cx='11' cy='28' r='3.5' fill='#fff' />
	<circle cx='20' cy='28' r='3.5' fill='#fff' />
	<circle cx='29' cy='28' r='3' fill='none' stroke='#fff' strokeWidth='1.5' />
	<circle cx='38' cy='28' r='3' fill='none' stroke='#fff' strokeWidth='1.5' />
	<rect x='17' y='35' width='14' height='3.5' rx='1.75' fill='#fff' />
</svg>;

export const storyTimelineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 48 48'>
	<rect x='4' y='5' width='40' height='24' rx='3' fill='#2563eb' />
	<rect x='8' y='9' width='16' height='16' rx='2' fill='#fff' opacity='0.35' />
	<rect x='27' y='11' width='13' height='2.5' rx='1.25' fill='#fff' opacity='0.7' />
	<rect x='27' y='15.5' width='13' height='3.5' rx='1.5' fill='#fff' />
	<rect x='27' y='21' width='9' height='2.5' rx='1.25' fill='#fff' opacity='0.7' />
	<rect x='4' y='33' width='16' height='5' rx='1' fill='#fde68a' />
	<rect x='4' y='40.25' width='40' height='1.5' rx='0.75' fill='#94a3b8' />
	<rect x='8' y='34' width='7' height='3' rx='1' fill='#2563eb' />
	<rect x='23' y='34' width='8' height='3' rx='1' fill='#1f2937' />
	<rect x='34' y='34' width='8' height='3' rx='1' fill='#1f2937' />
</svg>;
