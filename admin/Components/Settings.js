import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import useWPAjax from '../../../bpl-tools/hooks/useWPAjax';

const Settings = ({ deleteDataOnUninstall, uninstallNonce }) => {
	const [enabled, setEnabled] = useState(deleteDataOnUninstall);
	const [notice, setNotice] = useState('');

	const { data, saveData, isLoading, error } = useWPAjax('tlgbSaveUninstallOption', { nonce: uninstallNonce }, false);

	useEffect(() => {
		if (data) {
			setEnabled(data.enabled);
			setNotice(data.message);
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			setNotice(__('Failed to save setting.', 'timeline-block'));
		}
	}, [error]);

	const handleToggle = () => {
		const newValue = !enabled;

		if (newValue) {
			const confirmed = window.confirm(
				__('Are you sure? This will permanently delete all timeline block shortcode posts when the plugin is uninstalled.', 'timeline-block')
			);

			if (!confirmed) return;
		}

		setNotice('');
		saveData({ enabled: String(newValue) });
	};

	return <div className='bPlDashboardSettings bPlDashboardCard'>
		<h2>{__('Delete Data on Uninstall', 'timeline-block')}</h2>

		<p>{__('When enabled, all plugin data will be permanently deleted when you uninstall (delete) the plugin. This includes:', 'timeline-block')}</p>

		<ul>
			<li>{__('All timeline shortcode posts (timeline_block post type).', 'timeline-block')}</li>
			<li>{__('Plugin settings and configurations.', 'timeline-block')}</li>
		</ul>

		<p className='settingsWarning'>
			{__('⚠️ This action cannot be undone. Your data will be safe if you only deactivate the plugin.', 'timeline-block')}
		</p>

		<div className='settingsControl'>
			<label className='toggleControl'>
				<input type='checkbox' checked={enabled} onChange={handleToggle} disabled={isLoading} />

				<span className='toggleSlider' />
			</label>

			<span className='toggleLabel'>
				{enabled
					? __('Data will be deleted on uninstall', 'timeline-block')
					: __('Data will be preserved on uninstall', 'timeline-block')
				}
			</span>
		</div>

		{notice && <div className={`settingsNotice ${enabled ? 'warning' : 'success'}`}>{notice}</div>}
	</div>;
};
export default Settings;