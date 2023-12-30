import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
import { TabPanel, PanelBody, PanelRow, TextControl, RangeControl, ToggleControl, __experimentalUnitControl as UnitControl, Dashicon, Button, ToolbarGroup, ToolbarButton, TextareaControl } from '@wordpress/components';

// Components
import { Label, BColor, BtnGroup, Typography } from '../../Components';
import { gearIcon } from '../../Components/utils/icons';
import { pxUnit, perUnit, emUnit } from '../../Components/utils/options';

import options from './utils/options';
const { types, topBottom, leftRight, tabs } = options;

const Settings = ({ attributes, setAttributes, activeIndex, setActiveIndex, updateTimeline }) => {
	const { timelines, type, labelLocation, startIndex, vigibleItems, moveItem, verticalTrigger, rtlMode, barBackground, barDotColor, itemBg, itemColor, itemTypo, itemBorder, labelTypo, labelColor } = attributes;

	const addTimeline = () => {
		setAttributes({
			timelines: [
				...timelines,
				{
					label: 'January',
					description: 'Note of the january month'
				}
			]
		});
		setActiveIndex(timelines.length);
	};

	const duplicateTimeline = () => {
		setAttributes({ timelines: [...timelines.slice(0, activeIndex), { ...timelines[activeIndex] }, ...timelines.slice(activeIndex)] });

		setActiveIndex(activeIndex + 1);
	}

	const removeTimeline = () => {
		setAttributes({ timelines: [...timelines.slice(0, activeIndex), ...timelines.slice(activeIndex + 1)] });

		setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
	}

	const { label = '', description = '' } = timelines[activeIndex] || {};

	return <>
		<InspectorControls>
			<div className='tlgbInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={tabs}>{tab => <>
				{'general' === tab.name && <>
					<PanelBody className='bPlPanelBody addRemoveItems' title={__('Add or Remove timelines', 'timeline-block')}>
						{null !== activeIndex && <>
							<h3 className='bplItemTitle'>{__(`Timeline No ${activeIndex + 1}:`, 'timeline-block')}</h3>

							<PanelRow>
								<Label className=''>{__('Label:', 'timeline-block')}</Label>
								<TextControl value={label} onChange={val => updateTimeline(activeIndex, 'label', val)} />
							</PanelRow>

							<Label>{__('Description:', 'timeline-block')}</Label>
							<TextareaControl value={description} onChange={val => updateTimeline(activeIndex, 'description', val)} rows={6} />
							<small>{__('Can write html code.', 'timeline-block')}</small>

							<PanelRow className='itemAction mt20 mb15'>
								{1 < timelines?.length && <Button className='removeItem' label={__('Remove', 'timeline-block')} onClick={removeTimeline} ><Dashicon icon='no' />{__('Remove', 'timeline-block')}</Button>}

								<Button className='duplicateItem' label={__('Duplicate', 'timeline-block')} onClick={duplicateTimeline} >{gearIcon}{__('Duplicate', 'timeline-block')}</Button>
							</PanelRow>
						</>}

						<div className='addItem'>
							<Button label={__('Add New Timeline', 'timeline-block')} onClick={addTimeline}><Dashicon icon='plus' />{__('Add New Timeline', 'timeline-block')}</Button>
						</div>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Timeline Settings', 'timeline-block')}>
						<PanelRow>
							<Label className=''>{__('Type:', 'timeline-block')}</Label>
							<BtnGroup value={type} onChange={val => setAttributes({ type: val, labelLocation: 'vertical' === val ? 'right' : 'top', })} options={types} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Label className=''>{__('Label Location:', 'timeline-block')}</Label>

							<BtnGroup value={labelLocation} onChange={val => setAttributes({ labelLocation: val })} options={'vertical' === type ? leftRight : topBottom} />
						</PanelRow>
						<small>{__('Label Location will be changed! When type will be changed', 'timeline-block')}</small>

						{'vertical' === type && <UnitControl className='mt20' label={__('Space in Bottom:', 'timeline-block')} labelPosition='left' value={verticalTrigger} onChange={val => setAttributes({ verticalTrigger: val })} units={[pxUnit(), perUnit()]} />}

						{'horizontal' === type && <>
							<Label>{__('Start Index:', 'timeline-block')}</Label>
							<RangeControl value={startIndex} onChange={val => setAttributes({ startIndex: val })} min={1} max={80} step={1} />

							<Label>{__('Visible Items:', 'timeline-block')}</Label>
							<RangeControl value={vigibleItems} onChange={val => setAttributes({ vigibleItems: val })} />

							<Label>{__('Move Item:', 'timeline-block')}</Label>
							<RangeControl value={moveItem} onChange={val => setAttributes({ moveItem: val })} />

							<ToggleControl label='RTL Mode' checked={rtlMode} onChange={val => setAttributes({ rtlMode: val })} />
						</>}
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Bar', 'timeline-block')}>
						<BColor label={__('Background:', 'timeline-block')} value={barBackground} onChange={val => setAttributes({ barBackground: val })} defaultColor='#dddddd' />

						<BColor label={__('Dot Color:', 'timeline-block')} value={barDotColor} onChange={val => setAttributes({ barDotColor: val })} defaultColor='#dddddd' />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Item', 'timeline-block')} initialOpen={false}>
						<BColor label={__('Text Color:', 'timeline-block')} value={itemColor} onChange={val => setAttributes({ itemColor: val })} defaultColor='#333333' />

						<BColor label={__('Background:', 'timeline-block')} value={itemBg} onChange={val => setAttributes({ itemBg: val })} defaultColor='#ffffff' />

						<Typography className='mt20' label={__('Label Typography:', 'timeline-block')} value={labelTypo} onChange={val => setAttributes({ labelTypo: val })} defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }} />

						<BColor label={__('Label Color:', 'timeline-block')} value={labelColor} onChange={val => setAttributes({ labelColor: val })} defaultColor='#222222' />

						<Typography className='mt20' label={__('Description Typography:', 'timeline-block')} value={itemTypo} onChange={val => setAttributes({ itemTypo: val })} defaults={{ fontSize: { desktop: 14, tablet: 14, mobile: 14 } }} />

						<UnitControl className='mt20' label={__('Border Width:', 'timeline-block')} labelPosition='left' value={itemBorder.width} onChange={val => setAttributes({ itemBorder: { ...itemBorder, width: val } })} units={[pxUnit(), emUnit()]} />

						<BColor label={__('Border Color:', 'timeline-block')} value={itemBorder.color} onChange={val => setAttributes({ itemBorder: { ...itemBorder, color: val }, })} defaultColor='#cccccc' />
					</PanelBody>
				</>}
			</>}</TabPanel>
		</InspectorControls>


		<BlockControls>
			<ToolbarGroup className='bPlToolbar'>
				<ToolbarButton icon='trash' label={__(`Remove Timeline No ${activeIndex + 1}`, 'timeline-block')} onClick={removeTimeline} />

				<ToolbarButton icon={<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 48 48'>
					<path d='M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z' />
				</svg>} label={__(`Copy Timeline No ${activeIndex + 1}`, 'timeline-block')} onClick={duplicateTimeline} />

				<ToolbarButton icon='plus' label={__('Add Timeline', 'timeline-block')} onClick={addTimeline} />
			</ToolbarGroup>
		</BlockControls>
	</>
};
export default Settings;