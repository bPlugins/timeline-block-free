import { __ } from '@wordpress/i18n';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
import { TabPanel, PanelBody, PanelRow, TextControl, RangeControl, ToggleControl, __experimentalUnitControl as UnitControl, Dashicon, Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';

// Components
import Title from '../../Components/Title';
import BtnGroup from '../../Components/BtnGroup';
import BColor from '../../Components/BColor';
import { pxUnit, perUnit, emUnit, remUnit } from '../../Components/Helper/options';

import options from './utils/options';
const { types, topBottom, leftRight, fontStyles, fontWeights, generalStyleTabs } = options;

import { gearIcon } from '../../Components/Helper/icons';

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

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' === tab.name && <>
					<PanelBody className='bPlPanelBody addRemoveItems' title={__('Add or Remove timelines', 'timeline-block')}>
						{timelines.map((item, index) => {
							const { label, description } = item;

							return <PanelBody key={index} className='bPlPanelBody editItem' title={__(`Timeline No ${index + 1}:`, 'timeline-block')} initialOpen={0 !== index ? false : true}>
								<PanelRow>
									<Title className=''>{__('Label:', 'timeline-block')}</Title>
									<TextControl value={label} onChange={val => updateTimeline(index, 'label', val)} />
								</PanelRow>

								<PanelRow>
									<Title className=''>{__('Label:', 'timeline-block')}</Title>
									<TextControl value={description} onChange={val => updateTimeline(index, 'description', val)} />
								</PanelRow>

								<PanelRow className='itemAction mt20'>
									<Button className='removeItem' label={__('Remove', 'timeline-block')} onClick={e => {
										e.preventDefault();
										setAttributes({ timelines: [...timelines.slice(0, index), ...timelines.slice(index + 1)] });
									}}><Dashicon icon='no' />{__('Remove', 'timeline-block')}</Button>

									<Button className='duplicateItem' label={__('Duplicate', 'timeline-block')} onClick={e => {
										e.preventDefault();
										setAttributes({ timelines: [...timelines.slice(0, index), { ...timelines[index] }, ...timelines.slice(index)] });
									}}>{gearIcon}{__('Duplicate', 'timeline-block')}</Button>
								</PanelRow>
							</PanelBody>
						})}

						<div className='addItem'>
							<Button label={__('Add New Timeline', 'timeline-block')} onClick={addTimeline}><Dashicon icon='plus' />{__('Add New Slide', 'timeline-block')}</Button>
						</div>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Timeline Settings', 'timeline-block')}>
						<PanelRow>
							<Title className=''>{__('Type:', 'timeline-block')}</Title>
							<BtnGroup value={type} onChange={val => setAttributes({ type: val, labelLocation: 'vertical' === val ? 'right' : 'top', })} options={types} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Title className=''>{__('Label Location:', 'timeline-block')}</Title>

							<BtnGroup value={labelLocation} onChange={val => setAttributes({ labelLocation: val })} options={'vertical' === type ? leftRight : topBottom} />
						</PanelRow>
						<small>{__('Label Location will be changed! When type will be changed', 'timeline-block')}</small>

						{'vertical' === type && <UnitControl className='mt20' label={__('Space in Bottom:', 'timeline-block')} labelPosition='left' value={verticalTrigger} onChange={val => setAttributes({ verticalTrigger: val })} units={[pxUnit(), perUnit()]} />}

						{'horizontal' === type && <>
							<Title>{__('Start Index:', 'timeline-block')}</Title>
							<RangeControl value={startIndex} onChange={val => setAttributes({ startIndex: val })} min={1} max={80} step={1} />

							<Title>{__('Visible Items:', 'timeline-block')}</Title>
							<RangeControl value={vigibleItems} onChange={val => setAttributes({ vigibleItems: val })} />

							<Title>{__('Move Item:', 'timeline-block')}</Title>
							<RangeControl value={moveItem} onChange={val => setAttributes({ moveItem: val })} />

							<ToggleControl label='RTL Mode' checked={rtlMode} onChange={val => setAttributes({ rtlMode: val })} />
						</>}
					</PanelBody>
				</>}


				{'style' === tab.name && <PanelBody className='bPlPanelBody' title={__('Style & Typography', 'timeline-block')}>
					<BColor label={__('Bar Background:', 'timeline-block')} value={barBackground} onChange={val => setAttributes({ barBackground: val })} defaultColor='#dddddd' />

					<BColor label={__('Bar Dot Color:', 'timeline-block')} value={barDotColor} onChange={val => setAttributes({ barDotColor: val })} defaultColor='#dddddd' />

					<BColor label={__('Item Background:', 'timeline-block')} value={itemBg} onChange={val => setAttributes({ itemBg: val })} defaultColor='#ffffff' />

					<BColor label={__('Item Text Color:', 'timeline-block')} value={itemColor} onChange={val => setAttributes({ itemColor: val })} defaultColor='#333333' />

					<Title>{__('Font Size:', 'timeline-block')}</Title>
					<RangeControl value={itemTypo.fontSize} onChange={val => setAttributes({ itemTypo: { ...itemTypo, fontSize: val }, })} min={0} max={80} step={1} allowReset={true} resetFallbackValue={14} initialPosition={14} />

					<PanelRow className='mt20'>
						<Title className=''>{__('Font Weight:', 'timeline-block')}</Title>
						<BtnGroup value={itemTypo.fontWeight} onChange={val => setAttributes({ itemTypo: { ...itemTypo, fontWeight: val } })} options={fontWeights} />
					</PanelRow>

					<PanelRow className='mt20'>
						<Title className=''>{__('Font Style:', 'timeline-block')}</Title>
						<BtnGroup value={itemTypo.fontStyle} onChange={val => setAttributes({ itemTypo: { ...itemTypo, fontStyle: val }, })} options={fontStyles} />
					</PanelRow>

					<UnitControl className='mt20' label={__('Item Border Width:', 'timeline-block')} labelPosition='left' value={itemBorder.width} onChange={val => setAttributes({ itemBorder: { ...itemBorder, width: val } })} units={[pxUnit(), emUnit()]} />

					<BColor label={__('Item Border Color:', 'timeline-block')} value={itemBorder.color} onChange={val => setAttributes({ itemBorder: { ...itemBorder, color: val }, })} defaultColor='#cccccc' />

					<UnitControl className='mt20' label={__('Label / Title Font-Size:', 'timeline-block')} labelPosition='left' value={labelTypo.fontSize} onChange={val => setAttributes({ labelTypo: { ...labelTypo, fontSize: val } })} units={[pxUnit(), emUnit(), remUnit()]} />

					<PanelRow className='mt20'>
						<Title className=''>{__('Label Font Style:', 'timeline-block')}</Title>
						<BtnGroup value={labelTypo.fontStyle} onChange={val => setAttributes({ labelTypo: { ...labelTypo, fontStyle: val } })} options={fontStyles} />
					</PanelRow>

					<PanelRow className='mt20'>
						<Title className=''>{__('Label Font Weight:', 'timeline-block')}</Title>
						<BtnGroup value={labelTypo.fontWeight} onChange={val => setAttributes({ labelTypo: { ...labelTypo, fontWeight: val } })} options={fontWeights} />
					</PanelRow>

					<BColor label={__('Label / Title Color:', 'timeline-block')} value={labelColor} onChange={val => setAttributes({ labelColor: val })} defaultColor='#222222' />
				</PanelBody>}
			</>}</TabPanel>
		</InspectorControls>


		<BlockControls>
			<ToolbarGroup>
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