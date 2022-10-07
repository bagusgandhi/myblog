import Link from "next/link";
import Image from "next/image";
export default function Content({ data }){
    return (
        <>
            {data.tags?.map((tag) => (
                <Link key={tag.id} href={`/tag/${tag.slug}`}>
                    <a>
                        <span className='mb-5 mr-4 inline-block rounded-xl bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8'>
                            {tag.name}
                        </span>
                    </a>
                </Link>
            ))}
            <h1 className='"block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl'>{data.title}</h1>
            <div className='flex items-center py-5 sm:pt-8'>
                <p className='pr-2 font-body font-light text-black dark:text-white'>
                    {data.updated_at ? new Date(data.updated_at).toDateString() : ''}
                </p>
            </div>
            {data.feature_image ?  
                <Image 
                    className='py-8'
                    src={data.feature_image}
                    alt={data.feature_image_alt}
                    width={1000}
                    height={600}
                /> : 
            '' }
            <div className='pt-3 pb-5 font-body text-xl font-light text-black dark:text-white' dangerouslySetInnerHTML={{__html: data.html}} />
        </>
    );
}