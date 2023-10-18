import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Image from "next/image";
import ErrorImage from "../public/images/home/404.svg";

const NotFound = () => {
    return (
        <>
        <Head>
        <title>Progobees | 404 Not Found</title>
        <meta name="description" content="No Such Page Exist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <Image src={ErrorImage} className="img-fluid" />
        </Layout>
        </>
    );
  };
  
  export default NotFound;