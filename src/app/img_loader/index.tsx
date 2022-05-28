import { useState, useEffect, useRef } from 'react'

const ImageLoader = (props: {
	post_src: string
	alt?: 'image' | undefined
	width: any
	height: any
	threshold: any
	placeholderSrc: any
	postImgLoaded: any
	root: any
	rootMargin: any
	postVisible: any
	wrapperClassName: any
}) => {
	const {
		post_src,
		alt = 'image',
		width,
		height,
		threshold,
		placeholderSrc,
		postImgLoaded,
		root,
		rootMargin,
		postVisible,
		wrapperClassName
	} = props
	const [isVisible, setIsVisible] = useState(false)
	const ctStyle: any = {
		display: 'inline-block',
		width: width || 'auto',
		height: height || 'auto',
		backgroundSize: '100% 100%'
	}
	placeholderSrc ? (ctStyle.backgroundImage = `url(${placeholderSrc})`) : (ctStyle.backgroundColor = 'grey')

	const currentRef: any = useRef()
	useEffect(() => {
		const currentElem = currentRef.current
		let observer: { disconnect: () => void }
		if (
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype
		) {
			const handleIntersect = (
				entries: {
					target: any
					isIntersecting: boolean
				}[],
				observer: {
					unobserve: (arg0: any) => void
					disconnect: () => void
				}
			) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					observer.unobserve(entries[0].target)
					observer.disconnect()
				}
			}
			const observer = new window.IntersectionObserver(handleIntersect, {
				root: root || null,
				rootMargin: rootMargin || '100px',
				threshold: threshold || 0
			})
			if (currentElem && observer && observer.observe) {
				observer.observe(currentElem)
			}
		} else {
			setIsVisible(true)
		}
		return () => observer && observer.disconnect && observer.disconnect()
	}, [root, rootMargin, threshold])
	useEffect(() => isVisible && postVisible && postVisible(), [isVisible, postVisible])

	return (
		<span ref={currentRef} style={ctStyle} className={wrapperClassName}>
			{isVisible ? (
				<img
					onLoad={() => {
						postImgLoaded && postImgLoaded()
					}}
					alt={alt}
					src={post_src}
					style={{ width: width, height: height }}
				/>
			) : (
				<img
					onLoad={() => {
						postImgLoaded && postImgLoaded()
					}}
					alt={alt}
					src={post_src}
					style={{ width: width, height: height }}
				/>
				// <span
				//   style={{
				//     display: 'inline-block',
				//     width: width || 'auto',
				//     height: height || 'auto',
				//     backgroundColor: 'grey',
				//   }}
				// ></span>
			)}
		</span>
	)
}

export { ImageLoader }
