import Head from 'next/head'
export default function footer(){
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="css/page1.css"/> 
            </Head>
            <footer>
                <center>
                    <img src="img/placeit.png"/>
                    <h3>~Footer Website~</h3>
                </center>
            </footer>
        </div>
    )
}