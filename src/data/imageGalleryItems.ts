import imgTheTelephone from '../assets/gallery/alexandra_hedin_the_telephone_720.jpg';
import imgTheTelephone2 from '../assets/gallery/alexandra_hedin_the_telephone_2_720.jpg';
import figarosWedding5 from '../assets/gallery/alexandra_hedin_figaros_brollop_5.jpg';
import figarosWedding4 from '../assets/gallery/alexandra_hedin_figaros_brollop_4.jpg';
import figarosWedding1 from '../assets/gallery/alexandra_hedin_figaros_brollop_1.jpg';
import figarosWedding3 from '../assets/gallery/alexandra_hedin_figaros_brollop_3.jpg';
import tonina1 from '../assets/gallery/Tonina-1.jpg';
import tonina2 from '../assets/gallery/Tonina-2.jpg';
import tonina4 from '../assets/gallery/Tonina-4.jpg';

type GalleryImageDataItem = {
    image: ImageMetadata,
    alt: string,
    caption?: string,
}

export const images: GalleryImageDataItem[] = [
    {
        image: imgTheTelephone,
        alt: 'The Telephone (Menotti)',
        caption: 'The Telephone (Menotti)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: imgTheTelephone2,
        alt: 'The Telephone (Menotti)',
        caption: 'The Telephone (Menotti)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: figarosWedding5,
        alt: 'The Telephone (Menotti)',
        caption: 'Le nozze di Figaro (Mozart)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: figarosWedding4,
        alt: 'The Telephone (Menotti)',
        caption: 'Le nozze di Figaro (Mozart)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: figarosWedding1,
        alt: 'Le nozze di Figaro (Mozart)',
        caption: 'Le nozze di Figaro (Mozart)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: figarosWedding3,
        alt: 'Le nozze di Figaro (Mozart)',
        caption: 'Le nozze di Figaro (Mozart)<div class="text-xs">photo: <a class="underline" href="//himsel.se/" target="_blank">Linda Himsel</a></div>',
    },
    {
        image: tonina1,
        alt: 'Prima la musica e poi le parole (Salieri)',
    },
    {
        image: tonina2,
        alt: 'Prima la musica e poi le parole (Salieri)',
    },
    {
        image: tonina4,
        alt: 'Prima la musica e poi le parole (Salieri)',
    },
    
];
