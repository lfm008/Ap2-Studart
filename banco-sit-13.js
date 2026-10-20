// ======= RIO POR BAIRRO: Lapa, Copacabana, Ipanema, Santa Teresa, Centro, Madureira, Tijuca, Barra, Zona Norte, Baixada =======
SIT('*','🌉','Arcos da Lapa','Você passa pelos Arcos da Lapa de madrugada. Um grupo de bêbados canta "Cidade Maravilhosa" desafinado.','Cantar com eles','Seguir em frente',
 ['+|Todos te abraçaram e você ganhou uma cerveja.|+0 >3','-|Alguém vomitou nos seus sapatos.|-30 <1','-|A polícia chegou e dispersou todo mundo.|-0 <2'],
 ['+|Passou ileso e ainda achou uma nota no chão.|+20 >2','!|Escorregou em uma poça e torceu o pé.|-50 <2','-|Foi abordado por um vendedor insistente.|-30']);
SIT('*','🎻','Escadaria Selarón','Você sobe a Escadaria Selarón pra tirar fotos. Um vendedor oferece azulejo "autêntico" por R$ 40.','Comprar','Só tirar foto',
 ['+|O azulejo era bonito e virou enfeite.|+0 >2','-|Era de uma fábrica em Taiwan.|-40','-|Quebrou na mochila.|-40'],
 ['+|A foto ficou ótima e viralizou.|+30 >3','!|Escorregou nos degraus e machucou o joelho.|-60 <2','-|Alguém te empurrou e o celular caiu.|-200']);
SIT('*','🚋','Bondinho de Santa Teresa','O bondinho de Santa Teresa está lotado e parece que vai desabar. Todos se penduram nos estribos.','Pendurar no estribo','Esperar o próximo',
 ['+|Foi uma aventura épica e você ganhou aplausos.|+0 >3','!|Quase caiu na curva e ficou com o susto.|-50 <2','-|Perdeu o chinelo na rua.|-30'],
 ['+|O próximo veio vazio e você sentou.|+0 >2','-|O próximo demorou 1 hora.|-0 <2','-|Chuva forte e bondinho cancelado.|-0 <2']);
SIT('*','🏛️','Centro Histórico','Você passa pelo Centro e ouve um sambista famoso tocando na rua. Ele te chama pra tocar tamborim.','Tocar','Só ouvir',
 ['+|Mandou bem e ganhou um chope.|+30 >3','-|Errou o ritmo e o grupo riu.|-0 <2','-|O tamborim quebrou.|-60'],
 ['+|Ouviu e curtiu a tarde inteira.|+0 >2','-|Alguém roubou sua carteira na multidão.|-200','-|Um turista tirou foto sua sem avisar.|-0 <1']);
SIT('*','🎭','Teatro Municipal','Você passa pelo Teatro Municipal e vê uma fila enorme. É uma ópera. O ingresso custa R$ 200.','Comprar o ingresso','Pular a fila',
 ['+|A ópera foi emocionante e você chorou.|+0 >3','-|Dormiu e roncou no meio do segundo ato.|-0 <3','-|A cantora errou a nota e o público vaiou.|-0 <2'],
 ['+|Achou uma entrada gratuita na lateral.|+0 >2','-|O segurança te expulsou.|-0 <2','-|Todo mundo te olhou torto.|-0 <1']);
SIT('*','⛪','Igreja da Candelária','Na Candelária, um pregador grita: "o fim está próximo!". Ele aponta pra você.','Dar uma moeda','Ignorar',
 ['+|Ele te abençoou e você ganhou uma bala.|+0 >2','-|Ele pediu mais e mais.|-20','-|Ele fez uma oração de 20 minutos pra você.|-0 P'],
 ['-|Ele te amaldiçoou: "vai chover no seu churrasco".|-0 <2','+|Ele desistiu e foi atrás de outro.|+0 >1','-|Um turista tirou foto de você com o pregador.|-0 <1']);
SIT('*','🌊','Praia de Copacabana','Copacabana tá lotada. Um vendedor oferece "caipirinha de morango" por R$ 25. O morango parece uma bola de bilhar.','Comprar','Passar',
 ['+|A caipirinha era ótima e você ficou feliz.|+0 >2','-|Era caipirinha de morango com gosto de tinta.|-25','-|O vendedor cobrou R$ 80 de "taxa de gelo".|-80'],
 ['+|Achou uma caipirinha melhor por R$ 12.|+0 >1','-|Todos os vendedores te seguiram.|-0 <2','-|Perdeu a toalha.|-30']);
SIT('*','🏖️','Futevôlei no Leme','Um grupo de futevôlei te convida pra jogar. Você nunca tocou numa bola de vôlei.','Jogar','Assistir',
 ['+|Acertou um ponto por acaso e todos aplaudiram.|+0 >3','!|Caiu na areia e torceu o tornozelo.|-60 <2','-|A bola foi parar na água.|-0 <1'],
 ['+|Ficou olhando e aprendeu uns truques.|+0 >1','-|Foi atingido por uma bolada.|-0 <1','-|Um cachorro roubou seu lanche.|-20']);
SIT('*','🌅','Arpoador ao pôr do sol','Todos aplaudem o pôr do sol no Arpoador. Um turista chora de emoção. Um carioca vende cerveja.','Aplaudir','Comprar uma cerveja',
 ['+|O sol sumiu e todos te abraçaram.|+0 >3','-|Aplaudiu cedo demais.|-0 <2','-|Alguém filmou e postou "o chorão".|-0 <2'],
 ['+|A cerveja estava gelada e o dia ficou perfeito.|+0 >2','-|O vendedor cobrou R$ 15 por uma latinha.|-15','-|A cerveja era quente.|-10']);
SIT('*','🚤','Passeio de barco em Búzios','Um barqueiro oferece um passeio por R$ 100. Ele jura "tem golfinhos". Todo mundo duvida.','Aceitar','Recusar',
 ['+|Viu golfinhos e tirou fotos incríveis.|+0 >3','!|O barco balançou e você enjoou.|-40 P','-|O barqueiro cobrou R$ 150 no final.|-150'],
 ['+|Foi à praia e achou um quiosque ótimo.|+0 >2','-|Perdeu a oportunidade.|-0 <2','-|O barqueiro te xingou.|-0 <1']);
SIT('*','🏝️','Ilha Grande','Você vai a Ilha Grande de barco. Ninguém avisou que a ilha tem 3 horas de trilha. Você de chinelo.','Fazer a trilha','Ficar na vila',
 ['+|Chegou à praia mais linda da vida.|+0 >3','!|Escorregou numa pedra e ralou o joelho.|-80 <2','-|Perdeu o chinelo na lama.|-30'],
 ['+|Ficou na vila e comeu um peixe delicioso.|+0 >2','-|A vila estava cheia e você ficou sem lugar.|-0 <2','-|O restaurante cobrou R$ 150.|-150']);
SIT('*','🥘','Mercadão de Madureira','No mercadão de Madureira, uma barraca vende "feijoada de caranguejo". O cheiro é irresistível.','Comer','Comprar fruta',
 ['+|Foi a melhor feijoada da vida.|+0 >3','-|Passou mal depois.|-60 P','-|O dono cobrou R$ 80 por um prato.|-80'],
 ['+|A fruta estava doce e barata.|+0 >1','-|O feirante errou o troco.|-30','-|Alguém pisou no seu pé.|-0 <1']);
SIT('*','🎶','Baile Charme do Viaduto','O Baile Charme do Viaduto de Madureira é famoso. Todos dançam em sincronia. Você não sabe os passos.','Entrar na dança','Observar',
 ['+|Aprendeu rápido e virou estrela da noite.|+0 >3','-|Errou o passo e derrubou um casal.|-0 <2','!|Torceu o tornozelo.|-50 <2'],
 ['+|Observou e aprendeu os passos.|+0 >2','-|Alguém te chamou de "duro".|-0 <1','-|Alguém roubou sua cerveja.|-15']);
SIT('*','🏟️','Maracanã em dia de jogo','O Maracanã tá lotado. Você tem ingresso, mas esqueceu a identidade.','Tentar entrar','Voltar em casa',
 ['+|O segurança era seu amigo e te deixou entrar.|+0 >3','-|Foi barrado e perdeu o jogo.|-0 <3','-|Pagou R$ 200 pra um cambista falso.|-200'],
 ['+|Voltou em casa e chegou a tempo.|+0 >2','-|O jogo já tinha começado.|-0 <2','-|Perdeu o ônibus.|-0 <1']);
SIT('*','🚇','Metrô da Central','A Central do Brasil é um caos. Todo mundo corre. Alguém grita "o trem tá saindo!".','Correr pro trem','Esperar o próximo',
 ['+|Pegou o trem por um segundo.|+0 >3','!|Tropeçou e caiu no meio da multidão.|-60 <2','-|Perdeu o celular na correria.|-250'],
 ['+|O próximo veio vazio e com ar-condicionado.|+0 >2','-|O próximo também lotou.|-0 <2','-|Ficou 3 horas esperando.|-0 P']);
SIT('*','🏘️','Passeio na Rocinha','Um guia oferece um tour pela Rocinha por R$ 100. Ele jura "ninguém sofre nada".','Fazer o tour','Recusar',
 ['+|O tour foi emocionante e você aprendeu muito.|+0 >3','-|O guia cobrou R$ 200 no final.|-200','-|Perdeu o celular no caminho.|-250'],
 ['+|Foi a um mirante e viu a cidade inteira.|+0 >2','-|O guia ficou ofendido.|-0 <1','-|Alguém roubou sua mochila.|-100']);
SIT('*','🎤','Feira de São Cristóvão','Na feira, um forró toca a noite toda. Um sujeito te chama pra dançar. Você tem dois pés esquerdos.','Dançar','Recusar',
 ['+|Dançou e foi o assunto da feira.|+0 >3','!|Pisou no pé do parceiro e quase foi agredido.|-60 <2','-|Derramou cerveja no parceiro.|-0 <2'],
 ['+|Recusou e comeu uma tapioca.|+0 >2','-|O sujeito riu de você.|-0 <1','-|Perdeu a chance de conhecer alguém.|-0 <1']);
SIT('*','🌴','Parque Lage','No Parque Lage, uma turista te pede pra tirar uma foto. Ela te entrega um celular de R$ 8.000.','Tirar a foto','Recusar',
 ['+|A foto ficou ótima e ela te deu R$ 50.|+50 >3','-|O celular caiu e quebrou.|-8000','-|Ela te acusou de "tentar roubar".|-0 <3'],
 ['+|Recusou e evitou o risco.|+0 >2','-|Ela ficou ofendida.|-0 <1','-|Ela foi embora e ninguém tirou a foto dela.|-0']);
SIT('*','🏄','Prainha na Barra','A Prainha tá com ondas de 2 metros. O pessoal surfa. Você tá de bermuda e chinelo.','Entrar no mar','Ficar na areia',
 ['+|Mergulhou e se sentiu livre.|+0 >3','!|Tomou um caldo e perdeu a bermuda.|-50 <2','-|Alguém roubou sua toalha.|-30'],
 ['+|Ficou na areia e viu o show das ondas.|+0 >2','-|Uma onda molhou seu celular.|-250','-|Alguém jogou areia nos seus olhos.|-0 <1']);
SIT('*','🛍️','Shopping da Barra','O shopping da Barra tem de tudo. Um vendedor te oferece "um relógio que muda sua vida". É de R$ 800.','Comprar','Recusar',
 ['+|O relógio era bom e durou 5 anos.|+0 >3','-|Quebrou em 1 semana.|-800','-|O vendedor cobrou R$ 1.200.|-1200'],
 ['+|Foi a outra loja e achou um por R$ 200.|+0 >2','-|O vendedor te seguiu pelo shopping.|-0 <2','-|Alguém pegou o relógio antes.|-0 <1']);
SIT('*','🚗','Pedágio da Linha Amarela','Você chega ao pedágio e descobre que o pedágio subiu pra R$ 12. Seu dinheiro: R$ 10.','Pagar com cartão','Dar ré',
 ['+|O cartão funcionou e você passou.|+0 >2','-|O cartão foi recusado.|-0 <2','-|O pedágio cobrou taxa extra.|-30'],
 ['-|Deu ré e bateu no carro de trás.|-500 <1','+|Voltou e achou uma rota alternativa.|+0 >1','-|Foi multado por "marcha à ré em pedágio".|-300']);
SIT('*','🚌','Ônibus 485 de Copacabana','O ônibus 485 é conhecido pela lentidão. Hoje o motorista decide "tirar uma soneca" no ponto final.','Esperar','Descer e andar',
 ['+|Ele acordou e saiu voando.|+0 >3','-|Esperou 40 minutos.|-0 P','-|O motorista pediu pra todos descerem.|-0 <2'],
 ['+|Andou e achou uma padaria.|+0 >1','-|Foi assaltado na rua.|-100','-|Chuva forte te encharcou.|-0 <1']);
SIT('*','🥤','Barraca na Praia do Flamengo','A barraca vende água de coco e "suco de graviola". O dono jura "tem propriedades mágicas".','Comprar o suco','Água de coco',
 ['+|O suco era ótimo e o dono te deu um brinde.|+0 >2','-|O suco era xarope de açúcar.|-30','-|Passou mal.|-30 P'],
 ['+|O coco estava gelado e doce.|+0 >2','-|Cobraram R$ 25.|-25','-|O coco estava morno.|-0 <1']);
SIT('*','🚤','Passeio no Pão de Açúcar','O bondinho do Pão de Açúcar tem fila de 1 hora. O guia oferece "furar a fila" por R$ 50.','Pagar','Esperar',
 ['+|Furou a fila e viu o pôr do sol.|+0 >3','-|Era golpe. Perdeu os R$ 50.|-50','-|O guia fugiu.|-50 <1'],
 ['+|Esperou e viu a cidade linda.|+0 >2','-|O bondinho quebrou.|-0 <2','-|Choveu e a vista sumiu.|-0 <1']);
SIT('*','🏰','Fortaleza de Santa Cruz','Você visita a Fortaleza de Santa Cruz. Um guia conta uma história de "fantasma que rouba chinelos".','Acreditar','Duvidar',
 ['+|A história era boa e você ganhou um brinde.|+0 >2','-|O guia cobrou R$ 80 pela história.|-80','-|Perdeu o chinelo.|-30'],
 ['+|Descobriu que era mentira e ganhou um desconto.|+0 >2','-|O guia ficou ofendido.|-0 <1','-|O chinelo sumiu.|-30']);
SIT('*','🍽️','Confeitaria Colombo','A Confeitaria Colombo tem doces lindos e preços de joia. Um pastel de nata custa R$ 30.','Comprar','Só olhar',
 ['+|O doce era divino e você chorou.|+0 >2','-|O doce estava velho.|-30','-|Derrubou o doce na roupa.|-30'],
 ['+|Foi a uma padaria e achou melhor por R$ 5.|+0 >1','-|O garçom te olhou torto.|-0 <1','-|Todos os doces acabaram.|-0 <1']);
SIT('*','🎻','Concerto no Aterro','Uma orquestra toca no Aterro do Flamengo. A música é linda. Mas começa a chover.','Ficar até o fim','Correr pra marquise',
 ['+|A chuva virou parte do show.|+0 >3','!|Pegou um resfriado.|-40 P','-|Perdeu o celular.|-200'],
 ['+|Achou abrigo e curtiu o resto.|+0 >2','-|Alguém roubou seu guarda-chuva.|-30','-|O show foi cancelado.|-0 <1']);
SIT('*','🚴','Ciclovia Tim Maia','A ciclovia Tim Maia é linda, mas já derrubou o mar uma vez. Hoje o mar tá bravo.','Pedalar','Voltar',
 ['+|Pedalou e curtiu a vista.|+0 >3','!|Uma onda derrubou a bike.|-80 <2','-|Perdeu o capacete.|-60'],
 ['+|Voltou e tomou um café.|+0 >2','-|Chuva forte te encharcou.|-0 <1','-|A bike foi roubada.|-300']);
SIT('*','🌄','Mirante Dona Marta','O mirante Dona Marta tem uma vista linda. Mas o local é conhecido por "macacos ladrões".','Tirar foto','Esconder o celular',
 ['+|A foto ficou incrível.|+0 >3','-|Um macaco roubou seu celular.|-250','-|Um macaco roubou seu lanche.|-20'],
 ['+|Ficou tranquilo e curtiu a vista.|+0 >2','-|Um macaco roubou sua bolsa.|-100','-|Um macaco te arranhou.|-40 <1']);
SIT('*','🌳','Floresta da Tijuca','Você faz trilha na Floresta da Tijuca. O GPS some e todos os caminhos parecem iguais.','Seguir em frente','Voltar',
 ['+|Chegou a uma cachoeira linda.|+0 >3','-|Se perdeu por 3 horas.|-0 P','!|Escorregou e machucou o tornozelo.|-60 <2'],
 ['+|Voltou e achou o caminho certo.|+0 >2','-|Se perdeu ainda mais.|-0 <2','-|Escureceu e você ficou com medo.|-0 <2']);
SIT('*','🌳','Jardim Botânico','No Jardim Botânico, uma árvore gigante cai bem na sua frente. Todos aplaudem.','Tirar foto','Fugir',
 ['+|A foto viralizou.|+50 >3','!|Um galho caiu em você.|-60 <2','-|Perdeu o celular.|-250'],
 ['+|Fugiu e ficou seguro.|+0 >2','-|Tropeçou e caiu.|-0 <1','-|Alguém filmou sua fuga.|-0 <2']);
SIT('*','🎪','Circo na Quinta da Boa Vista','Você vai ao circo. O palhaço é seu ex-chefe. Ele te reconhece e grita seu nome.','Rir junto','Fingir que não conhece',
 ['+|Foi o ponto alto da noite.|+0 >3','-|Ele te chamou ao palco.|-0 <2','-|Todos riram de você.|-0 <2'],
 ['-|Ele te seguiu até a saída.|-0 <2','+|Fingiu e ele desistiu.|+0 >1','-|Alguém viu e fofocou.|-0 <1']);
SIT('*','🥁','Bateria da Mangueira','Você está na quadra da Mangueira. A bateria toca. Todos dançam. Alguém te dá um tamborim.','Tocar','Dançar',
 ['+|Tocou e foi aplaudido.|+0 >3','-|Errou o ritmo.|-0 <2','-|O tamborim quebrou.|-60'],
 ['+|Dançou tão bem que ganhou um convite.|+100 >3','!|Torceu o pé.|-50 <2','-|Alguém pisou no seu pé.|-0 <1']);
SIT('*','🎺','Roda de choro','Você entra numa roda de choro. O violonista te olha e diz "toque algo". Você só sabe tocar "Parabéns".','Tocar','Recusar',
 ['+|Todos riram e cantaram com você.|+0 >3','-|O violonista fez uma cara feia.|-0 <2','-|Desafinou e todos vaiaram.|-0 <2'],
 ['+|Recusou e ouviu o resto da noite.|+0 >2','-|Todos te olharam torto.|-0 <1','-|Alguém roubou sua cerveja.|-15']);
SIT('*','🍺','Bar do Mineiro','O Bar do Mineiro é famoso pela feijoada. O garçom jura "é a melhor do Rio".','Pedir a feijoada','Pedir outra coisa',
 ['+|Era mesmo a melhor e você virou fã.|+0 >3','-|Passou mal depois.|-60 P','-|A conta chegou cara.|-100'],
 ['+|Pediu um bolinho de bacalhau e foi feliz.|+0 >2','-|O bolinho veio frio.|-15','-|O garçom esqueceu seu pedido.|-0 <1']);
SIT('*','🥁','Escola de samba na Sapucaí','Você assiste ao desfile na Sapucaí. Uma passista te chama pra sambar.','Entrar no desfile','Aplaudir',
 ['+|Sambou e virou o assunto do Carnaval.|+100 >3','!|Escorregou e caiu na pista.|-60 <2','-|A segurança te retirou.|-0 <2'],
 ['+|Aplaudiu e ganhou um beijo da passista.|+0 >2','-|Todos olharam e você ficou vermelho.|-0 <1','-|Alguém jogou cerveja em você.|-0 <1']);
SIT('*','🏖️','Praia de Ipanema','Em Ipanema, uma moça te oferece "bronzeador natural": óleo de coco e areia.','Passar','Recusar',
 ['+|Ficou dourado e todos elogiaram.|+0 >3','-|Ficou queimado e descascou.|-60 P','-|Perdeu a toalha.|-30'],
 ['+|Ficou à sombra e curtiu a vista.|+0 >2','-|Ela te chamou de "branquelo".|-0 <1','-|Um cachorro roubou seu lanche.|-20']);
SIT('*','🏄','Praia do Leblon','No Leblon, um surfista famoso te cumprimenta. Você não sabe quem é.','Cumprimentar','Ignorar',
 ['+|Ele te convidou pra surfar.|+0 >3','-|Ele era um fotógrafo de paparazzi.|-0 <2','-|Você o chamou de "João".|-0 <2'],
 ['-|Ele ficou ofendido e te xingou.|-0 <2','+|Ele riu e continuou.|+0 >1','-|Alguém fotografou a cena.|-0 <1']);
SIT('*','🌃','Noite na Lapa','A Lapa tá pulsando. Todos os bares lotados. Um segurança te diz "só entra quem tá bem vestido".','Mostrar o dinheiro','Voltar',
 ['+|O segurança te deixou entrar.|+0 >3','-|Pagou R$ 100 de "taxa de entrada".|-100','-|Era golpe do segurança.|-100 <1'],
 ['+|Achou um bar melhor no caminho.|+0 >2','-|Todos os bares estavam lotados.|-0 <2','-|Foi assaltado na volta.|-250']);
SIT('*','🚖','Táxi no aeroporto','No aeroporto do Galeão, um taxista diz "R$ 300 pra Copacabana". O trajeto custa R$ 90.','Aceitar','Pegar o aplicativo',
 ['-|Pagou R$ 300 e o taxista te deixou na esquina errada.|-300','+|O taxista tava com pressa e cobrou R$ 90.|+0 >2','-|O taxista deu uma volta de 40 minutos.|-150 <1'],
 ['+|O Uber chegou em 3 minutos.|+0 >3','-|O Uber cancelou e você perdeu o voo.|-0 <3','-|O Uber cobrou 3x.|-200']);
SIT('*','🎤','Show na Marina da Glória','Um show de rock na Marina da Glória. Você tem ingresso, mas esqueceu o celular em casa.','Voltar pra casa','Entrar sem celular',
 ['+|Voltou e perdeu só 10 minutos.|+0 >2','-|Perdeu o show inteiro.|-0 <3','-|O ingresso estava no celular.|-0 <3'],
 ['+|Entrou na manha com um amigo.|+0 >3','-|O segurança barrou.|-0 <2','-|Chegou e a banda tinha acabado.|-0 <2']);
