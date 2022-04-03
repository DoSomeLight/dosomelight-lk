export type IScens_btn_props = { label_text: string }

export const Scens_btn = ({ label_text }: IScens_btn_props) => (
	<div id="header-scens_btn" className="lk--header-btns">
		{label_text}
	</div>
)
