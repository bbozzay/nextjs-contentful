import clsx from 'clsx';

type LogoImage = {
	src: string;
	height: "7"|"8"|"9"|"10"|"11"|"12";
	alt: string;
}
// Require 4 logos
export type LogoImages = [LogoImage, LogoImage, LogoImage, LogoImage];
export type LogoProps = {
	images: LogoImages;
}
const Logos = (props: LogoProps) => {
	const { images } = props;
	return (
		<section className="bg-white">
			<div className={clsx({"max-w-4xl": images.length === 4}, "mx-auto py-12 px-4 sm:px-6 lg:px-8")}>
				<div className={clsx({"sm:grid-cols-4": images.length === 4}, "grid grid-cols-2 gap-12")}>
					{images.map(({ src, height, alt}) => {
						return (
							<div key={src} className="col-span-1 flex justify-center sm:col-span-1">
								<img className={clsx(`h-${height??'12'}`)}  src={src} alt={alt} />
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export { Logos }