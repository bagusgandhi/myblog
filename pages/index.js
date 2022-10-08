import Link from 'next/link'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { getNewestArticle } from '../lib/ghost'
import News from '../components/ui/icons/news';
import ArrowRight from '../components/ui/icons/arrow-right';
import PostList from '../components/ui/postlist';

export async function getStaticProps(){
  const posts = await getNewestArticle();
  return { props: { 
    posts,
    data: {
      meta_title: 'Bagus Gandhi',
      meta_description: 'test 1, 2, 3, and 4',
      feature_image: 'https://avatars.githubusercontent.com/u/35498095?v=4',
      canonical_url: '',
      published_at: '',
      updated_at: ''

    },
    type: 'website' 
  }}
}

export default function Home({ posts }) {

  return (
    <>
      <div className='lg:flex lg:p-8 lg:gap-8 items-center'>
        <div className='flex justify-center '>
          <Image 
            className='rounded-full basis-1/4 object-center'
            src='https://avatars.githubusercontent.com/u/35498095?v=4'
            alt='Bagus Gandhi Pratama'
            width={250}
            height={250}
          />
        </div>
        <div className='basis-3/4 md:mt-4'>
          <Typewriter 
            options={{
              strings: ['Frontend or Backend?', 'Why not both?'],
              autoStart: true,
              wrapperClassName: 'pt-3 font-body xs:text-center lg:text-3xl text-3xl font-semibold text-black dark:text-white',
              loop: true
            }}
          />
          <h1 className='pt-3 pb-5 font-body text-xl font-light text-black dark:text-white'>Hi! I am Bagus Gandhi, Fullstack JavaSscript Developer Enthusiast!</h1>
          <Link href={'/contact'}>          
            <a
              aria-label='contact'
              className="px-4 border w-full lg:w-1/4 rounded-full py-2 text-secondary  dark:text-yellow"
            >Say Hi!</a>
          </Link>
        </div>
      </div>

      {/* postingan */}
      <div className='py-16'>
        <div className='flex items-center pb-6'>
          {/* icon */}
          <News className='w-10 h-10' />
          <h3 className='ml-3 font-body text-2xl font-semibold text-black dark:text-white'>Article</h3>
          <Link href={'/posts'}>
            <a className='flex gap-2 items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary'>
              <small>All Post</small>
              <i><ArrowRight /></i>
            </a>
          </Link>
        </div>
        {posts.map((post) => (
            <PostList key={post.uuid} post={post} />
        ))}
      </div>
    </>
  )
}
