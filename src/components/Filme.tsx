import Image from "next/image";

export interface FilmeProps {
	id: string;
	titulo: string;
	subtitulo: string;
	imagem: string;
	descricao: string;
}

export default function Filme(props: FilmeProps) {
	return (
		<div
			className="
            flex gap-5 p-5 w-3/5 bg-black
            rounded-lg border border-zinc-800
        "
		>
			<Image
				src={props.imagem}
				alt="imagem do filme"
				width={150}
				height={150}
				className="self-start rounded-full"
			/>
			<div className="flex flex-col">
				<div className="text-2xl">{props.titulo}</div>
				<div className="text-lg text-zinc-500">{props.subtitulo}</div>
				<div className="text-sm font-light text-zinc-300">
					{props.descricao}
				</div>
			</div>
		</div>
	);
}
