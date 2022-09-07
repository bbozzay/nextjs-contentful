import { Container } from '../components/layout'
import { Button } from './button';

export type HeroProps = {
	title: string;
	subtitle: string;
	description: string;
	extra: string;
}

//TODO: Slice the background into a bottom shape so that it scales for all screen sizes
const Hero = (props: HeroProps) => {
	const { title, subtitle, description } = props;
	return (
		<section className="relative bg-white py-12 pb-20">
			<Container>
				<div className="relative z-10 items-center lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
						<h1>
							<span className="block text-base font-semibold text-secondary">
								{subtitle}
							</span>
							<span className="mt-1 block text-3xl font-medium tracking-tight text-primary sm:text-5xl">
								{title}
							</span>
						</h1>
						<p className="mt-3 text-base text-primary sm:mt-5">
							{description}
						</p>
						<div className="mt-6">
							<Button>Get Started</Button>
						</div>
					</div>
					<div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

						<div className="relative mx-auto w-full lg:max-w-md">
							<div
								className="relative block w-full overflow-hidden"
							>
								<img
									className="mx-auto"
									src="/hero/card.svg"
									alt=""
								/>

							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className="absolute top-0 left-0 z-0 h-full w-full">
				<picture>
					<img
						className="left 0 absolute top-0 h-full w-full object-cover object-center"
						src="/hero/bg.svg"
					/>
				</picture>
			</div>
		</section>
	)
}

export { Hero }