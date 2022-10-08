import Link from 'next/link'
export default function PostList({ post }){
    return (
        <div className='mb-12'>
              <div className='flex gap-2 my-2'>
                {post.tags?.map((tag) => (
                  <Link key={tag.id} href={`/tag/${tag.slug}`}>
                    <a className='tag bg-green-light dark:bg-yellow-light'
                    >{tag.name}</a>
                  </Link>
                  ))}
              </div>
            <Link href={`/posts/${post.slug}`}>
              <a className='text-black hover:text-green dark:text-white dark:hover:text-yellow'><h4>{ post.title }</h4></a>
            </Link>
            <small className='pr-2 font-body font-light text-secondary dark:text-yellow'>
                  {new Date(post.updated_at).toDateString() + ` by ${post.authors?.map(author => author.name)}`}
            </small>
            <p>{post.excerpt.substring(0, 200)}...</p>
            <hr />
        </div>
    );
}