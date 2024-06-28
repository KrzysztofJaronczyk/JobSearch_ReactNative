export const checkImageURL = (url) => {
	if (!url) return false;
	const pattern = new RegExp('^https?://.+\\.(jpe?g|png|gif|webp)$', 'i');
	return pattern.test(url);
  };
  