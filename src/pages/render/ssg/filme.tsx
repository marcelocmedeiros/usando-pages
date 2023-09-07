import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export function getStaticProps() {
	return {
		props: {
			filme: filmes[500],
			data: new Date().toLocaleTimeString("pt-BR"),
		},
	};
}

export default function PaginaFilme(props: any) {
	return (
		<Pagina>
			<h1 className="text-4xl">Página Filme</h1>
			<h2 className="text-2xl">Hora de geração: {props.data}</h2>
			<Filme
				id={props.filme.id}
				titulo={props.filme.titulo}
				subtitulo={props.filme.subtitulo}
				imagem={props.filme.imagem}
				descricao={props.filme.descricao}
			/>
		</Pagina>
	);
}
