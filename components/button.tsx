import { PropsWithChildren } from "react"


type ButtonProps = PropsWithChildren<{}>

const Button = (props: ButtonProps) => {
	const { children } = props;
	return (
		<button
			type="button"
			className="inline-flex items-center rounded-lg border border-transparent bg-secondary px-6 py-3 text-xs font-bold text-primary shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
		>
			{children}
		</button>
	)
}

export { Button }