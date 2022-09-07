import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
	size?: "lg"|"full"
}>
const Container = (props: ContainerProps) => {
	const { children } = props;
	return (
		<div className="mx-auto w-full max-w-7xl px-4">
			{children}
		</div>
	)
}

export { Container }