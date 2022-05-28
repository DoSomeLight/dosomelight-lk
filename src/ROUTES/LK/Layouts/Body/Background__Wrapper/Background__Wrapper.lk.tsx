import { ImageLoader as BGRImage } from 'app/img_loader'

export const BackgroundWrapper = (props: { children: React.ReactNode }) => {
	return (
		<div className="lk--background__wrapper">
			{/* <BGRImage
        width={'1366px'}
        height={'768px'}
        rootMargin={'10px'}
        post_src={'https://source.unsplash.com/random/200x200'}
        postVisible={() => {
          console.log('img container visible');
        }}
        postImgLoaded={() => {
          console.log('img loaded');
        }}
        threshold={''}
        placeholderSrc={undefined}
        root={undefined}
        wrapperClassName={undefined}
      /> */}

			{props.children}
		</div>
	)
}
