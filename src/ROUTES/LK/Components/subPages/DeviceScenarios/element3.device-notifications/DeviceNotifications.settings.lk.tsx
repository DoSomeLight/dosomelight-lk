import { selectNotifyType } from 'APP'

export const DeviceNotification = (props: { _name: string }) => (
	<div className="device--scens--notify__settings">
		<div>Выберите область уведомлений:</div>
		<div>
			<button onClick={() => selectNotifyType('lk', props._name)}>
				Уведомления в личном кабинете
			</button>
			<button onClick={() => selectNotifyType('sms', props._name)}>sms уведомления</button>
			<button onClick={() => selectNotifyType('android', props._name)}>
				android уведомления
			</button>
		</div>
		<div>
			<div id={`${props._name}_device--scens--notify__settings--lk`} className="display_no">
				lk Какие уведомления отображать:
				<button>
					Все (даже системные, например о нестабильном инетернет подключении
					устройства)
				</button>
				<button>
					Базовые (уведомления о переключении, срабатывании расписания, перход
					устройства в сотояние "В сети" или "оффлайн").
				</button>
				<button>Минимальные (только переключение срабатывание расписания).</button>
				<button>
					Никакие - уведомления будут приходить в панель событий, но не будут
					отображены в личном кабинете.
				</button>
			</div>

			<div id={`${props._name}_device--scens--notify__settings--sms`} className="display_no">
				sms Какие уведомления будут приходить по смс:
				<button>
					Базовые (смс уведомления о переключении, срабатывании расписания,
					перход устройства в сотояние "В сети" или "оффлайн").
				</button>
				<button>Минимальные (только переключение и срабатывание расписания).</button>
				<button>Отключить/Никакие - смс уведомления будут отключены</button>
			</div>

			<div
				id={`${props._name}_device--scens--notify__settings--android`}
				className="display_no"
			>
				android Какие уведомления будут приходить по смс:
				<div className="device--scens--notify__settings--android--warning__text">
					Важно: если вы изменяете настройки уведомлений android приложения
					внутри Web-личного кабинета, вам необходимо будет подтвердить это с
					помощью пароля от учетной записи текущего аккаунта
				</div>
				<div className="device--scens--notify__settings--android--button__div">
					<button>
						Базовые (смс уведомления о переключении, срабатывании
						расписания, перход устройства в сотояние "В сети" или
						"оффлайн").
					</button>
					<button>
						Минимальные (только переключение и срабатывание расписания).
					</button>
					<button>Отключить/Никакие - смс уведомления будут отключены</button>
				</div>
			</div>
		</div>
	</div>
)
