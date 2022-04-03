import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded'
import RegisterData from 'APP/Register/RegisterFunctions'
import { SetStateAction } from 'react'

type import_reg_fn = React.Dispatch<SetStateAction<boolean>>

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1)
		}
	})
)

export const SmallIconLabelButtons = (props: { set_state: import_reg_fn }) => {
	const classes = useStyles()
	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				size="small"
				className={classes.button}
				startIcon={<AssignmentTurnedInIcon />}
				onClick={() => REG_btn(props.set_state)}
			>
				Зарегистрировать
			</Button>
		</div>
	)
}

const REG_btn = (set_state: import_reg_fn) =>
	RegisterData.check_N_sendToRegister(is_ready_for_reg => is_ready_for_reg && set_state(true))

export function Add_IDinputBTN(props: any) {
	const classes = useStyles()

	return (
		<div>
			<Button
				onClick={() => props.onClick()}
				variant="contained"
				color="primary"
				size="small"
				className={classes.button}
				startIcon={<AddBoxRoundedIcon />}
			>
				Добавить
			</Button>
		</div>
	)
}
