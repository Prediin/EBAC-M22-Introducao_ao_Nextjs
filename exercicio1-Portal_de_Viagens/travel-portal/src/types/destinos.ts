import type { Destino } from "../app/components/CardDestino";

export const destinos: Destino[] = [
    {
        id: "cartagena-colombia",
        nome: "Cartagena",
        localizacao: "Colômbia",
        descricao: "Cidade histórica com praias caribenhas, cultura vibrante e arquitetura colonial.",
        imagem: "/destinos/cartagena.jpg",
        imagemAlt: "Vista de Cartagena, na Colômbia",
        preco: 3200,
        avaliacao: 4.8,
    },
    {
        id: "cusco-peru",
        nome: "Cusco",
        localizacao: "Peru",
        descricao: "Uma viagem pela história dos Incas, com paisagens andinas e muita cultura.",
        imagem: "/destinos/cusco.jpg",
        imagemAlt: "Paisagem de Cusco, no Peru",
        preco: 2800,
        avaliacao: 4.9,
    },
    {
        id: "buenos-aires-argentina",
        nome: "Buenos Aires",
        localizacao: "Argentina",
        descricao: "Conheça a elegância, a gastronomia e o charme europeu da capital argentina.",
        imagem: "/destinos/buenos-aires.jpg",
        imagemAlt: "Vista de Buenos Aires, na Argentina",
        preco: 2400,
        avaliacao: 4.7,
    },
    {
        id: "santiago-chile",
        nome: "Santiago",
        localizacao: "Chile",
        descricao: "Uma capital cercada pelos Andes, com vinícolas, neve e atrações urbanas.",
        imagem: "/destinos/santiago.jpg",
        imagemAlt: "Vista de Santiago, no Chile",
        preco: 3000,
        avaliacao: 4.8,
    },
];
