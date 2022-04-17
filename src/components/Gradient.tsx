type Props = {
	className?: string;
	text: string;
};

export const GradientText = ({ className = '', text }: Props) => {
	return (
		<div className={`${className}`}>
			<h1 className="text-6xl font-black text-white text-center">
				<span
					className={`
						bg-gradient-to-r
						text-transparent
						bg-clip-text
						from-green-400
						to-purple-500
					`}
				>
					{text}
				</span>
			</h1>
		</div>
	);
};
