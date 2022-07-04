export const isMobile = () => {
	const details = navigator.userAgent;
	const regexp =
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
	return regexp.test(details);
};
