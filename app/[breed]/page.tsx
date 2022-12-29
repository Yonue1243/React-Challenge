
import FavoritableImage from "../../components/Favoritable";


interface Props {
    params: {
        breed: string
    }
}


const Breedpage = async ({params: {breed}}: Props) => {
    const {message: images} = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`).then(res => res.json() as Promise<{message: string[]}>,
    
    );
    return (
            <section style={{gridTemplateColumns: "repeat(auto-fill, minmax(256px,1fr))"}} 
            className=" grid gap-4">
                {images.map(image =>(
                    <FavoritableImage  key={image} src={image} />
                ))}
            </section>
    )
}



export default Breedpage;  