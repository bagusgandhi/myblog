import Link from "next/link";
import Image from "next/image";
export default function Content({ data }){
    return (
        <>
            <div className="flex justify-center gap-2">                
                {data.tags?.map((tag) => (
                    <Link key={tag.id} href={`/tag/${tag.slug}`}>
                        <a className="tag bg-green-light dark:bg-yellow-light">
                            {tag.name}
                        </a>
                    </Link>
                ))}
            </div>
            <h1 className="post-title">{data.title}</h1>
            <div className='flex justify-center mb-8 gap-4'>
                <p>
                    {data.updated_at ? new Date(data.updated_at).toDateString() : ''}
                </p>
                <p> | </p>
                <p>
                    {data.reading_time} min read
                </p>
            </div>
            {data.feature_image ?  
                <Image 
                    className='feature_image'
                    src={data.feature_image}
                    alt={data.feature_image_alt}
                    width={1000}
                    height={600}
                /> : 
            '' }
            <div id='content' className='lg:text-xl text-lg' dangerouslySetInnerHTML={{__html: data.html}} />
        </>
    );
}