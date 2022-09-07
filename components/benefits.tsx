import { Container } from "../components/layout"

type BenefitImage = {
	src: string;
	alt?: string;
}
type BenefitColumn = {
	image: BenefitImage;
	title: string;
	description: string;
}
export type BenefitsColumns = [BenefitColumn, BenefitColumn, BenefitColumn]
export type BenefitsProps = {
	title: string;
	// Max of 3 columns
	columns: BenefitsColumns;
}
const Benefits = (props: BenefitsProps) => {
	const { title, columns } = props;
	return (
		<section className="mx-auto py-12 md:py-28">
			<Container>
				<div className="mx-auto mb-32 max-w-4xl text-center">
					<h2 className="text-thin text-4xl text-primary">{title}</h2>
				</div>
				<div className="grid items-start gap-4 text-center md:grid-cols-3 md:gap-14">
					{columns.map(({ title, description, image }) => {
						return (
							<div key={image.src}>
								<img src={image.src} alt={image.alt ?? title} className="mx-auto mb-4" />
								<div>
									<h3 className="mb-6 text-2xl font-semibold text-primary">{title}</h3>
									<p className="text-primary">{description}</p>
								</div>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)

}

export { Benefits }