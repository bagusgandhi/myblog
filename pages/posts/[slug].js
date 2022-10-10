import Prism from 'prismjs';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share';
import { useEffect } from 'react';
import { getPostBySlug, getAllPosts } from "../../lib/ghost";
import Content from '../../components/ui/content';

export async function getStaticPaths(){
    const posts = await getAllPosts();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return { 
        paths,
        fallback: false
     }
}

export async function getStaticProps({ params }){
    const { slug } = params;
    const data = await getPostBySlug(slug);
    const url = process.env.APP_URL;
    return { props: { 
        data,
        slug,
        type: 'article',
        url 
        },
        revalidate: 60
    }
}


export default function Post({ data, slug, url }){

    useEffect(() => {
        var disqus_config = function () {
            this.page.url =  window.location.href;
            this.page.identifier = data.slug;
        };
        const script = document.createElement('script');
        script.src = 'https://bagusgandhi.disqus.com/embed.js';
        script.setAttribute('data-timestamp', Date.now().toString())
        document.body.appendChild(script)
    });

    useEffect(() => {
        const highlight = async () => {
            Prism.highlightAll();
        }
        highlight();
    }, [data]);

    return (
        <article>
            <div className='pb-8 sm:pb-12'>
                <Content data={data} />
                <div className='flex gap-4 items-center justify-center p-8'>
                <small className='text-secondary dark:text-yellow text-center'>Share </small>
                    <FacebookShareButton
                        url={`${url}/posts/${slug}`} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`${url}/posts/${slug}`} >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton
                        url={`${url}/posts/${slug}`} >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <WhatsappShareButton
                        url={`${url}/posts/${slug}`} >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
            </div>
            <div className='p-8 bg-white rounded-xl'>
                <div className='dark' id="disqus_thread"></div>
            </div>
        </article>
    );
}