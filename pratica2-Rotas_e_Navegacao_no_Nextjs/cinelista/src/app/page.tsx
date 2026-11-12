import Title from "./components/Header/Title";
import Grid from "./components/Grid";
import { filmes } from '@/lib/filmes'

export default function Home() {
  return (
  <>
  <Title title="Filmes em destaque"/> 
  <Grid filmes={filmes}/>
  </>    
  );
}
