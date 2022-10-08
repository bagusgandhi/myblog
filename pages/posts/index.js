import { getPosts } from '../../lib/ghost';
import PostList from '../../components/ui/postlist';
import PostTitle from '../../components/ui/posttitle';


export async function getStaticProps(){
  const posts = await getPosts();
  return { props: { 
    posts,
    data: {
      meta_title: 'All Posts',
      meta_description: 'test 1, 2, 3, and 4',
      feature_image: '',
      canonical_url: '',
      published_at: '',
      updated_at: ''
    },
    type: 'website'
   } }
}

export default function Home({ posts }) {

  return (
    <div className='pb-8 sm:pb-12'>
      <PostTitle 
        title={'All Posts'} 
        description={'Articles, tutorials, snippets, and everything else.'} 
      />
      {posts.map((post) => (
        <PostList key={post.uuid} post={post} />
      ))}
    </div>
  )
}
