import { useEffect } from "react";

const useModalScrollLock = (isOpen) => {
	useEffect(() => {
		const body = document.body;
		if (isOpen) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}

		return () => {
			body.style.overflow = "auto";
		};
	}, [isOpen]);
};

export default useModalScrollLock;
