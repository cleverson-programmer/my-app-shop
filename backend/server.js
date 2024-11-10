const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;


// Middleware
app.use(cors({ origin: 'https://my-shop-store-beta.vercel.app' }));
app.use(express.json());

// Configuração para servir arquivos estáticos da pasta 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

// Mock de produtos
const products = [
    {
      id: 1,
      image: '/images/DunkLow.png',
      name: 'Dunk Low',
      description: 'Nike Dunk é uma linha de calçados lançada pela Nike em 1985. Originalmente lançado como um calçado de basquete, a popularidade do calçado entre a comunidade de patinação também levou à criação de uma variante usada para skate. O calçado é oferecido em estilos de cano baixo, médio e alto .',
      rating: 4.5,
      price: 100.00
    },
    {
      id: 2,
      image: '/images/NikeDunkMid.png',
      name: 'Tênis Nike Dunk Mid Masculino',
      description: 'Criado para as quadras, mas levado às ruas, o ícone do basquete dos anos oitenta retorna com lona desbotada em um design durável. Trazendo o estilo vintage de volta às ruas, seu colarinho médio acolchoado permite versatilidade — com conforto',
      rating: 4.0,
      price: 120.00
    },
    {
      id: 3,
      image:'/images/DunkHighVintage.png',
      name: 'DUNK HIGH VINTAGE',
      description: 'Criado para as quadras, mas levado para as ruas, o ícone do basquete dos anos 80 retorna com detalhes clássicos e um toque retrô. Canalizando o estilo vintage de volta às ruas, ele aumenta sua aposta com uma gola alta acolchoada levando seu jogo para qualquer lugar com conforto. Das tabelas aos skates, a influência do Nike Dunk é inegável. Embora introduzido como tênis de basquete em 1985, suas solas planas e aderentes eram perfeitas para uma comunidade esportiva negligenciada, os skatistas. Descobrindo uma subcultura que anseia por criatividade tanto quanto por função, Dunk lançou décadas de inúmeras cores que continuam a capturar a alma dos skatistas por todos os lados.',
      rating: 4.8,
      price: 150.00
    },
    {
      id: 4,
      image:'/images/DunkLowRetro.png',
      name: 'Dunk Low Retro',
      description: 'Nike Dunk é uma linha de calçados lançada pela Nike em 1985. Originalmente lançado como um calçado de basquete, a popularidade do calçado entre a comunidade de patinação também levou à criação de uma variante usada para skate. O calçado é oferecido em estilos de cano baixo, médio e alto .',
      rating: 3.9,
      price: 90.00
    },
    {
      id: 5,
      image:'/images/DunkLowSE.png',
      name: 'Nike Dunk Low SE',
      description: 'Unindo o estilo clássico dos tênis marrons com o DNA das quadras, o ícone do basquete dos anos 80 retorna com couro polido e detalhes dourados. A parte superior com textura sutil e a folha dourada simples "NIKE" no calcanhar proporcionam uma visão luxuosa da silhueta icônica, enquanto a gola acolchoada e decotada permite que você leve seu jogo a qualquer lugar com conforto.',
      rating: 4.2,
      price: 110.00
    },
    {
      id: 6,
      image:'/images/DunkLow6.png',
      name: 'Dunk Low',
      description: 'Nike Dunk é uma linha de calçados lançada pela Nike em 1985. Originalmente lançado como um calçado de basquete, a popularidade do calçado entre a comunidade de patinação também levou à criação de uma variante usada para skate. O calçado é oferecido em estilos de cano baixo, médio e alto .',
      rating: 4.5,
      price: 200.00
    },
    {
      id: 7,
      image:'/images/airMax7.png',
      name: 'Air Max 1',
      description: 'Conheça o líder do bando. Caminhando nas nuvens acima do ruído, o Air Max 1 combina design atemporal com conforto acolchoado. Ostentando um visual acelerado, guarda-lamas ondulado e Nike Air, este ícone clássico entrou em cena em 1987 e continua a ser a alma da franquia até hoje.',
      rating: 3.7,
      price: 80.00
    },
    {
      id: 8,
      image:'/images/airMax8.png',
      name: 'Air Max 1',
      description: 'Conheça o líder do bando. Caminhando nas nuvens acima do ruído, o Air Max 1 combina design atemporal com conforto acolchoado. Ostentando um visual acelerado, guarda-lamas ondulado e Nike Air, este ícone clássico entrou em cena em 1987 e continua a ser a alma da franquia até hoje.',
      rating: 4.1,
      price: 130.00
    },
    {
      id: 9,
      image:'/images/airMax10.png',
      name: 'Air Max 1 GS',
      description: 'Conheça o líder do bando. Caminhando nas nuvens acima do ruído, o Air Max 1 combina design atemporal com conforto acolchoado. Ostentando um visual acelerado, guarda-lamas ondulado e Nike Air, este ícone clássico entrou em cena em 1987 e continua a ser a alma da franquia até hoje.',
      rating: 4.9,
      price: 250.00
    },
    {
      id: 10,
      image:'/images/jordan1Low10.png',
      name: 'Air Jordan 1 Low',
      description: 'Inspirado no original que estreou em 1985, o Air Jordan 1 Low oferece um visual clássico e limpo, mas sempre atual. Com um design icônico que combina perfeitamente com qualquer outfit, estes tênis deixam você preparado para tudo.',
      rating: 4.3,
      price: 140.00
    },
    {
      id: 11,
      image:'/images/Book1Leather.png',
      name: 'Book 1 Leather "Halloween"',
      description: 'Comemore a temporada assustadora com a edição "Halloween" do Book 1. Devin Booker é um homem de habilidades que pode vencer uma defesa com um golpe e depois voltar com uma série de arremessos fascinantes em um salto. O tênis característico de Book dá a ele as ferramentas que ele precisa para esculpir. O cabedal de camurça preta combina com detalhes em Clay Orange e detalhes que brilham no escuro para iluminar a noite. Este design especial é inspirado no alter ego de Book, um cara discreto fora da quadra que aciona o interruptor e se transforma em uma ameaçax. Confira a costura do logotipo Swoosh, a entressola/sola que brilha no escuro e a aba de puxar com fonte personalizada — tudo isso faz homenagem as disposições de duelo de Book.',
      rating: 4.6,
      price: 160.00
    },
    {
      id: 12,
      image:'/images/womanAirMax.png',
      name: 'Womens Air Max SNDR',
      description: 'À frente de seu tempo em 99, o inovador Air Max SNDR está de volta e mais barulhento do que nunca. Do ajuste seguro ao redor do calcanhar à cobertura com zíper, este tênis lendário continua a quebrar o molde. Sua impressionante combinação de cores mistura sobreposições pretas com a vibrante cobertura Hyper Pink. Os painéis de design refletivos exclusivos criam um contraste atraente em branco chamativo. Além disso, ele vem equipado com amortecimento Max Air no calcanhar e Nike Air no antepé para salto e conforto excepcionais. Abra o zíper para revelar "6453", uma referência aos últimos 4 dígitos dos números de escritório da Nike ao redor do mundo, que formam N-I-K-E no teclado. ',
      rating: 3.8,
      price: 70.00
    },
    {
      id: 13,
      image:'/images/nikeAirZoom.png',
      name: 'Nike Air Zoom Spiridon Cage 2',
      description: 'Lançado pela primeira vez em 2003, o Air Zoom Spiridon Cage 2 é tão relevante hoje como sempre. Esta edição mantém as linhas de design originais e a unidade Air Zoom exclusiva envolta em um acabamento brilhante. Uma entressola de espuma arqueada e de comprimento total proporciona um passeio amortecido, enquanto a parte superior ultra-arejada equilibra tecidos de malha com couro sintético suave. Enquanto isso, cápsulas de tração duráveis ​​na sola fornecem aderência e estabilidade. Entre no Cage 2 para um aceno ao estilo do início dos anos 2000.',
      rating: 4.0,
      price: 95.00
    },
    {
      id: 14,
      image:'/images/sbDunkLowPro.png',
      name: 'SB Dunk Low Pro',
      description: 'Inaugurando os tons ardentes do outono, esta edição brilhante do Nike SB Dunk apresenta um fundo Burnt Sunrise com toques de Vintage Green e uma sola Gum Light Brown. Feito de camurça macia, o cabedal flexível cria uma sensação premium e traz um toque atraente de charme a cada manobra que você acerta. O colarinho acolchoado e decotado e a língua macia se misturam ao amortecimento Air Zoom para conforto dentro e fora da prancha.',
      rating: 4.4,
      price: 105.00
    },
    {
      id: 15,
      image:'/images/womenv2k.png',
      name: 'Womens V2K Run',
      description: 'O V2K é um visual tirado diretamente de um catálogo de corrida do início dos anos 2000. A entressola robusta e os detalhes em camadas adicionam um toque perfeitamente vintage. E embora o calcanhar extra-amortecido pareça um retrocesso, o conforto é todo moderno.',
      rating: 4.2,
      price: 125.00
    },
    {
      id: 16,
      image:'/images/luka3Se.png',
      name: 'Luka 3 SE',
      description: 'Mude seu jogo para alta velocidade com o Luka mais leve até agora. Projetado para ajudar você a criar espaço por meio da aceleração, o Luka 3 apresenta espuma Cushlon 3.0 de comprimento total para uma transição suave do calcanhar aos dedos. Uma placa forte, mas flexível, sob o pé traz contenção lateral, ajudando você a sair do seu passo para trás para atacar a cesta. Também incorporamos velocidade ao design, ajudando você a ter uma aparência de 100 enquanto passa.',
      rating: 4.7,
      price: 175.00
    },
    {
      id: 17,
      image:'/images/dunkLowGsHalloween.png',
      name: 'Dunk Low GS Halloween',
      description: 'Não seja enganado por esse Dunk Low escuro e fantasmagórico, ele é na verdade uma super doce gostosura para um dia assustador. O couro sintético durável combina um design refletivo de teia de aranha, enquanto a sola fornece tração para todas as suas aventuras.',
      rating: 4.1,
      price: 115.00
    },
    {
      id: 18,
      image:'/images/zoomVomero.png',
      name: 'Zoom Vomero 5',
      description: 'Crie uma nova pista para você mesmo com o Zoom Vomero 5. Um design rico em camadas combina tecidos areados com couro sintético e detalhes em plástico para criar um complexo cabedal que é fácil de estilizar. E confira a palmilha, que celebra o icônico treinador de corrida e co-fundador da Nike, Bill Bowerman.',
      rating: 3.6,
      price: 60.00
    },
    {
      id: 19,
      image:'/images/P-6000.png',
      name: 'P-6000',
      description: 'Uma mistura de tênis Pegasus do passado, o Nike P-6000 leva a corrida do início dos anos 2000 às alturas modernas. Apresentando malha respirável, linhas esportivas e sobreposições respiráveis, é a combinação perfeita de visual atraente e conforto. Além disso, seu amortecimento de espuma adiciona uma postura elevada inspirada nas pistas e um amortecimento inacreditável.',
      rating: 4.3,
      price: 135.00
    },
    {
      id: 20,
      image:'/images/airTerraHumara.png',
      name: 'Air Terra Humara',
      description: 'Em 1997, o Air Terra Humara foi criado para os pioneiros que percorrem as florestas com destinos desconhecidos. Para aqueles que procuraram traçar um novo caminho para si, tanto na corrida como na vida, o clássico de corrida para trilhos robustos foi a resposta. Atualmente, o Air Terra Humara retorna para uma aventura na paisagem urbana. Esta edição animada apresenta um look em camadas com couro genuíno e sintético, tecidos entrançados e detalhes em prateado com integração de design refletor. A sola exterior com saliências e a sola intermediária em espuma macia surgem equipadas com uma unidade Max Air no calcanhar, ajudando a manter a proximidade ao solo com um conforto amortecido. Quer você lembre deste tênis com um sorriso ou se arrependa de nunca ter comprado um par, esta é a sua oportunidade de o adicionar à sua coleção.',
      rating: 4.8,
      price: 190.00
    },
]

// Rota de produtos
app.get('/', (req, res) => {
  res.json(products);
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
