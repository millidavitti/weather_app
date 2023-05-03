import { useEffect, useRef } from "react";
import list from "./list.module.css";

export default function List({ children, classes }) {
	const elementRef = useRef(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const classNames = Array.isArray(classes) ? classes : [classes];
		classNames.forEach((className) => {
			element.classList.add(className);
		});

		return () => {
			classNames.forEach((className) => {
				element.classList.remove(className);
			});
		};
	}, [classes]);

	return (
		<ul ref={elementRef} className={list.list}>
			{children}
		</ul>
	);
}
