import sharp from 'sharp';

/**
 * A tiny copy of an image as a data URI (blurred with CSS where it is used), inlined in the HTML so something
 * shows before the real photo has loaded. Low-entropy images like this are not
 * LCP candidates, so it doesn't change what Lighthouse measures as LCP.
 *
 * @param path image path relative to the project root, e.g. 'src/assets/photo.jpg'
 */
export async function blurPlaceholder(path: string): Promise<string> {
	const buffer = await sharp(path)
		.resize(20)
		// lossy WebP shifts the colors badly at this size; lossless is still under 1 kB
		.webp({ lossless: true })
		.toBuffer();
	return `data:image/webp;base64,${buffer.toString('base64')}`;
}
