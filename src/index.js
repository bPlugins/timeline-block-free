import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import './editor.scss';

import { timelineIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: timelineIcon,

	// Build in Functions
	edit: Edit,

	save: () => null,

	deprecated: [
		{
			attributes: {
				...metadata.attributes,
				vigibleItems: {
					type: 'number',
					default: 4,
				},
			},
			save() {
				return null;
			},
			migrate( attributes ) {
				if ( attributes.vigibleItems !== undefined ) {
					const { vigibleItems, ...rest } = attributes;
					return {
						...rest,
						visibleItems: vigibleItems,
					};
				}
				return attributes;
			},
		}
	],
});
