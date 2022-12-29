"use client"

import {Nunito} from '@next/font/google'
import Link from "next/link"
import "./globals.css"
import FavoritableImage from "../components/Favoritable"

import { Provider as FavoriteProvider, useFavorites } from "../state/favorite"



const nunito = Nunito({subsets: ["latin"]});

interface Props{children: React.ReactNode}

function RootLayout({children}: Props) {
  const [favorites] = useFavorites();
  return (
      <html className={nunito.className}>
      <head />
      <body className="max-w-screen-md m-auto p-4 ">
      <main className="flex flex-col gap-6">
      <div>  <Link href="/">
          <h1 className='font-bold text-3xl'>Dog Breeds</h1>
        </Link>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/affenpinscher">Affenpinscher</Link>
                    </li>
                    <li>
                        <Link href="/african">African</Link>
                    </li>
                    <li>
                        <Link href="/airedale">Airedale</Link>
                    </li>

                </ul>
            </nav>
          </div>
          <article> 
            {children}
          </article>
          <hr />
          <article>
            <h1 className="font-bold text-3xl">Favorites</h1>
            {favorites.length === 0 ? (

              <p className="text-gray-500">You have no favorites</p>
            ) :   <section style={{gridTemplateColumns: "repeat(auto-fill, minmax(256px,1fr))"}} 
            className="grid gap-4">
                {favorites.map(image =>(
                    <FavoritableImage  key={image} src={image} />
                ))}
            </section>}
          </article>
        </main>
        
        </body>
    </html>
  )
}



export default function RootLayoutContainer(props: Props){
  return(
    <FavoriteProvider>
      <RootLayout {...props}/>
    </FavoriteProvider>

  )
    
  
}