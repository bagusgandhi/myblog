import Link from 'next/link'
export default function PostList({ post }){
    return (
        <div className='border-b border-grey-lighter py-6'>
              <div>
                {post.tags?.map((tag) => (
                  <Link key={tag.id} href={`/tag/${tag.slug}`}>
                    <a 
                    className='my-4 mr-4 inline-block rounded-xl bg-green-light px-4 py-1 font-body text-sm text-green'
                    >{tag.name}</a>
                  </Link>
                  ))}
              </div>
            <Link href={`/posts/${post.slug}`}>
              <a className='block font-body text-lg font-semibold text-black transition-colors hover:text-green dark:text-white dark:hover:text-yellow'><h4>{ post.title }</h4></a>
            </Link>
            <small className='pr-2 font-body font-light text-black dark:text-white'>
                  {new Date(post.updated_at).toDateString() + ` by ${post.authors?.map(author => author.name)}`}
            </small>
            <p className='pr-2 font-body font-light text-black dark:text-white'>{post.excerpt.substring(0, 200)}...</p>
        </div>
    );
}