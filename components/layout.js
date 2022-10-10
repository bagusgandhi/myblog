import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";
import TransitionEffect from '../components/ui/transition';

export default function Layout({ children }){

    return (
        <>
            <div className="w-full lg:w-3/6 mx-auto">
                <Navbar />
                <Head>
                    <title>{children.props.data?.meta_title}</title>
                    <meta property="og:title" content={children.props.data?.meta_title} key="title" />
                    <meta name="description" content={children.props.data?.meta_description} />
                    <meta name="HandheldFriendly" content='True' />
                    <meta property="og:site_name" content='Gandhi Dev' /> 
                    <meta property="og:type" content={children.props.type} />
                    <meta property="og:description" content={children.props.data?.meta_description} />
                    <meta property="og:image" content={children.props.data?.feature_image} />
                    <link rel="canonical" href={children.props.data?.canonical_url} />
                    <meta
                    property="article:published_time"
                    content={children.props.data?.published_at}
                    />
                    <meta
                    property="article:modified_time"
                    content={children.props.data?.updated_at}
                    />
                    <meta
                    property="article:article_tag"
                    content=''
                    />
                    <meta
                    property="article:publisher"
                    content='https://www.facebook.com/bagusgandhipratama'
                    />
                    <meta name="twitter:card" content='summary_large_image' />
                    <meta name="twitter:title" content={children.props.data?.meta_title} />
                    <meta name="twitter:description" content={children.props.data?.meta_description} 
                    />
                    <meta name="twitter:image" content={children.props.data?.feature_image} />
                    <meta name="twitter:label1" content='Written by'/>
                    <meta name="twitter:data1" content='Bagus Gandhi' />
                    <meta name="twitter:label2" content='Filed under' />
                    <meta name="twitter:data2" content='' />
                    <meta name="twitter:site" content='@nlfkng' />
                    <meta name="twitter:creator" content='@nlfkng' />
                    <meta name="generator" content='Bagus Gandhi FullStack Dev' />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                </Head>
                <TransitionEffect>
                    <main className="container mx-auto">{ children }</main>
                </TransitionEffect>
                <Footer />
            </div>
        </>
    )
}