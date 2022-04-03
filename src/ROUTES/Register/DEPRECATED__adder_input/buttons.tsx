import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import IconButton from '@material-ui/core/IconButton'

export default function IconLabelButtons(props: { onClick: () => {} }) {
	return (
		<div>
			{/* <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.onClick}
        className={classes.button}
        startIcon={<HighlightOffIcon />}
      /> */}
			<IconButton
				onClick={props.onClick}
				color="primary"
				aria-label="upload picture"
				component="span"
			>
				<HighlightOffIcon />
			</IconButton>
		</div>
	)
}
