import { Theme, createStyles, makeStyles as PaperStyle } from '@material-ui/core/styles'

export default PaperStyle((theme: Theme) =>
	createStyles({
		root: {
			justifyContent: 'center',
			display: 'flex',
			'& > *': {
				alignItems: 'stretch',
				// margin: theme.spacing(1)
				verticalAlign: 'stretch',
				width: theme.spacing(90),
				height: '88vh'
			}
		}
	})
)
