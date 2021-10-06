import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from "../components/Header";
import LyricsBox from '../components/LyricsBox';

function Search({results}) {
    const router = useRouter();

    return (
        <div>
            <Header />
            <LyricsBox results={results} />
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    const artist = context.query.artist;
    const song = context.query.song;
    const data = await fetch( 
        `https://api.lyrics.ovh/v1/${context.query.artist}/${context.query.song}`
    )
        .then(response => response.json());
        console.log(data);
    return {
        props: {
            results: data,
        }
    }
}