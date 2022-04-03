import './styles/settings__finder__layout.scss'

interface SettingsFinderLayoutProps {
	topics: { label: string; link?: string }[]
}

export const SettingsFinderLayout = ({ topics }: SettingsFinderLayoutProps) => (
	<div className="settings__finder__layout">
		<div className="settings__finder__layout--header">Поиск по настройкам</div>
		<div className="settings__finder__layout--topic__wrapper">
			{topics.map(topic => (
				<div className="settings__finder__layout--topic__wrapper--link">
					{topic.label}
				</div>
			))}
		</div>
	</div>
)
