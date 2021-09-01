import React, { FC, useState } from "react";
import styles from "./styles.module.css";

type Direction = "next" | "previous";

const SLIDES = [
	{
		id: 1,
		text: "Slide 1",
	},
	{
		id: 2,
		text: "Slide 2",
	},
	{
		id: 3,
		text: "Slide 3",
	},
	{
		id: 4,
		text: "Slide 4",
	},
];

const Slider = () => {
	const [index, setIndex] = useState(1);
	const maxSlides = SLIDES.length;

	const navigate = (direction: Direction) => {
		if (index === 0) {
			setIndex(4);
			return;
		}
		if (index >= maxSlides) {
			setIndex(1);
			return;
		}

		if (direction === "next") setIndex(index + 1);
		if (direction === "previous") setIndex(index - 1);
	};

	return (
		<section className={styles.container}>
			{SLIDES.map((slide, index) => (
				<div
					key={index + 1}
					className={styles.slide}
					id={`slide-${index + 1}`}
				>
					{slide.text}
					<Navigation index={index + 1} navigate={navigate} />
				</div>
			))}
		</section>
	);
};

export default Slider;

type NavigationProps = {
	index: number;
	navigate: (direction: Direction) => void;
};

const Navigation: FC<NavigationProps> = ({ index, navigate }) => (
	<nav className={styles.navigation}>
		<a
			className={styles.previous}
			onClick={(e: React.MouseEvent) => {
				navigate("previous");
			}}
			href={index === 1 ? `#slide-4` : `#slide-${index - 1}`}
		>
			Previous
		</a>
		<a
			className={styles.next}
			onClick={(e: React.MouseEvent) => {
				navigate("next");
			}}
			href={index === SLIDES.length ? `#slide-1` : `#slide-${index + 1}`}
		>
			Next
		</a>
	</nav>
);
