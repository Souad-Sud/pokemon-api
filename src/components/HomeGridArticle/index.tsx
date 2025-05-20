import Image from 'next/image';
import {HomeGrideArticleType} from '@/utils/types';

const HomeGridArticle = ({title, image, style}:HomeGrideArticleType) => {
    return(
        <div className={`home-grid__article ${style}`}>
            <h3>{title}</h3>
            <Image src={image} alt={title} height={800} width={1000}/>
        </div>
    )
}

export default HomeGridArticle