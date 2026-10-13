// ======= GERAIS 4: saúde, esporte, tecnologia, compras =======
SIT('*','🩺','Check-up surpresa','O médico olha seu exame e diz "hmm". Esse "hmm" dura 2 minutos.','Perguntar o que é','Fingir que entendeu',
 ['+|Era só falta de vitamina D. Ganhou uma receita e um sorriso.|+0 >2','!|Era algo sério. Remédio e repouso.|-150 P','-|O médico pediu mais 8 exames.|-300'],
 ['-|Saiu do consultório sem entender nada.|-0 <2','+|O médico percebeu e explicou com paciência.|+0 >2','-|Foi dormir preocupado e perdeu a noite.|-0 P']);
SIT('*','🏃','Corrida de domingo','Você decidiu correr 10 km. Seu único exercício é correr pro ônibus.','Correr mesmo assim','Caminhar',
 ['+|Terminou a corrida e ganhou uma medalha de participação.|+0 >3','!|Cãibra no 5º km. Ficou deitado na calçada.|-60 P','-|Vomitou na frente de todo mundo.|-0 <2'],
 ['+|Caminhou e conversou com 3 pessoas legais.|+0 >2','-|Um cachorro te perseguiu por 2 quarteirões.|-0 <1','-|Tropeçou numa pedra e caiu.|-30 <1']);
SIT('*','🥗','Dieta nova','Você começou uma dieta: só comer folhas. No 2º dia, o cheiro de feijoada vem da casa do vizinho.','Resistir','Ceder',
 ['+|Resistiu e perdeu 2 kg em 1 semana.|+0 >3','-|Chorou por 40 minutos e comeu 3 pacotes de biscoito.|-30 <1','-|Foi dormir com fome e sonhou com pizza.|-0 <1'],
 ['+|Comeu a feijoada e foi o melhor dia da vida.|+0 >2','-|Engordou 3 kg só de olhar.|-0 <2','-|A vizinha viu e riu.|-0 <1']);
SIT('*','🧘','Aula de yoga','Você foi a uma aula de yoga. A professora pede "visualize seu eu interior". O seu eu interior quer pizza.','Fazer a pose','Fingir que dorme',
 ['+|Alcançou a paz e todos te aplaudiram.|+0 >3','!|Fez a pose errada e travou as costas.|-80 P','-|Peidou no meio da pose. Silêncio.|-0 <3'],
 ['+|A professora achou que era meditação profunda.|+0 >2','-|Roncou tão alto que a aula parou.|-0 <2','-|A professora te acordou com um sino.|-0 <1']);
SIT('*','🏊','Piscina do clube','A piscina do clube está lotada. Alguém fez xixi. Você viu a cor da água mudar.','Sair da água','Ficar na água',
 ['+|Saiu a tempo e pegou a espreguiçadeira boa.|+0 >2','-|Foi tarde demais e sentiu o cheiro por horas.|-0 <2','-|Alguém te chamou de "enjoado".|-0 <1'],
 ['-|Pegou uma micose.|-60 P','+|Era só suco de laranja derramado.|+0 >1','-|Todo mundo te olhou como o culpado.|-0 <3']);
SIT('*','🥊','Aula de boxe','Você tem uma aula de boxe. O instrutor tem 120 kg e olha pra você como um saco de pancada.','Lutar mesmo assim','Pedir pra trocar de parceiro',
 ['+|Acertou um golpe de sorte e o instrutor te elogiou.|+0 >3','!|Tomou um soco e viu estrelas.|-100 P','-|Caiu duas vezes e riram de você.|-0 <2'],
 ['+|O novo parceiro era um senhor simpático.|+0 >2','-|O instrutor te chamou de "frouxo".|-0 <2','-|O novo parceiro era pior que o primeiro.|-0 <1']);
SIT('*','🎾','Aula de tênis','Seu amigo te chamou pra jogar tênis. Você só sabe segurar a raquete. E olhe lá.','Jogar','Ser o gandula',
 ['+|Acertou um ace por acaso. O amigo aplaudiu.|+0 >3','-|Mandou a bola pro vizinho e quebrou uma janela.|-200','-|Perdeu de 6-0, 6-0.|-0 <2'],
 ['+|Pegou 100 bolas e ganhou uma cerveja.|+0 >2','!|Foi atingido por uma bolada.|-40 <1','-|O amigo te mandou buscar a bola na lagoa.|-0 <2']);
SIT('*','🏀','Jogo de basquete','Você é o último a ser escolhido pro time. O capitão olha pro céu e suspira.','Jogar mesmo assim','Ficar de fora',
 ['+|Fez uma cesta de 3 pontos por acidente.|+0 >3','-|Passou a bola pro time adversário.|-0 <2','-|Escorregou e caiu na quadra.|-0 <1'],
 ['+|Torceu tanto que ganhou o troféu "Melhor Torcedor".|+0 >2','-|O time perdeu e você levou a culpa.|-0 <1','-|Os amigos te chamaram de "frouxo".|-0']);
SIT('*','⚽','Pelada de sábado','Você joga pelada todo sábado. Hoje o time adversário trouxe um ex-jogador profissional.','Enfrentar','Fingir lesão',
 ['+|Driblou o profissional e virou lenda.|+0 >3','!|Foi atropelado e torceu o joelho.|-100 P','-|Tomou 8 gols e a vergonha foi eterna.|-0 <2'],
 ['-|Todos descobriram que era mentira.|-0 <2','+|Ficou de fora e ganhou uma cerveja.|+0 >1','-|O time perdeu e a culpa foi sua.|-0 <1']);
SIT('*','🎯','Campeonato de dardos','O bar organiza um campeonato de dardos. O prêmio é uma garrafa de cachaça. Você já bebeu duas.','Jogar','Assistir',
 ['+|Acertou o centro e ganhou a cachaça.|+30 >3','!|O dardo voltou e espetou seu pé.|-50 <2','-|O dardo acertou o garçom. Briga.|-100 <2'],
 ['+|Torceu e ganhou um chope por "fair play".|+0 >2','-|Alguém te acusou de "pé-frio".|-0 <1','-|Perdeu a vez do jogo.|-0']);
SIT('*','📱','Celular com tela quebrada','Seu celular caiu e a tela virou um mapa-múndi. Você tem que decidir: trocar a tela ou comprar outro.','Trocar a tela','Comprar outro',
 ['+|A tela ficou nova e custou só R$ 200.|+0 >2','-|O técnico cobrou R$ 600 e a tela veio torta.|-600','-|O técnico perdeu suas fotos.|-0 <2'],
 ['+|Achou uma promoção e levou um celular novo por R$ 800.|+0 >3','-|O celular novo veio com defeito.|-800','-|O vendedor cobrou R$ 1.500 por um "pacote premium".|-1500']);
SIT('*','🎧','Fone bluetooth','Você ganhou um fone bluetooth. Ele conecta no celular do vizinho em vez do seu.','Resolver o problema','Deixar assim',
 ['+|Descobriu o truque e ficou feliz.|+0 >2','-|Ouviu música do vizinho por 3 horas.|-0 <1','-|O fone travou e não ligou mais.|-150'],
 ['+|O vizinho tinha bom gosto musical.|+0 >2','-|O vizinho te viu e te confrontou.|-0 <2','-|Ouviu uma conversa que não devia.|-0 <2']);
SIT('*','📺','TV nova','Você comprou uma TV de 65 polegadas. Ela não cabe na sala. Você tem que escolher: reformar ou devolver.','Reformar','Devolver',
 ['+|A sala ficou linda e você virou o "dono do cinema".|+0 >3','-|A reforma custou R$ 3.000.|-3000','-|A TV caiu e quebrou.|-2000'],
 ['+|Devolveu e comprou uma de 55. Perfeita.|+0 >2','-|A loja cobrou "taxa de restocking".|-200','-|A TV nunca foi reembolsada.|-1500']);
SIT('*','🎮','Videogame novo','Você ganhou um videogame novo de aniversário. Mas só tem 1 controle e seu irmão também quer jogar.','Dividir','Esconder o controle',
 ['+|Jogaram juntos e viraram parceiros.|+0 >3','-|Brigaram por 3 horas e o controle quebrou.|-200','-|O irmão contou pra mãe.|-0 <2'],
 ['-|O irmão achou e quebrou o controle de raiva.|-200 <2','+|Jogou sozinho a noite toda.|+0 >2','-|A mãe descobriu e castigou.|-0 P']);
SIT('*','🔋','Carregador portátil','Seu carregador portátil tem 500 mAh. Você precisa carregar um celular de 5.000 mAh.','Tentar carregar','Procurar tomada',
 ['+|Milagre: o celular carregou 100%.|+0 >2','-|O carregador esquentou e queimou.|-150','-|Carregou 2% e morreu.|-0 <1'],
 ['+|Achou uma tomada e carregou em 1 hora.|+0 >2','-|Todas estavam ocupadas.|-0 <2','-|Alguém roubou seu celular enquanto carregava.|-500']);
SIT('*','🕶️','Óculos escuros baratos','O vendedor de rua oferece óculos "originais, marca famosa" por R$ 20. Eles têm cheiro de plástico.','Comprar','Recusar',
 ['+|Os óculos ficaram ótimos e viraram sua marca.|+0 >2','-|Quebraram na primeira vez que usou.|-20','-|Ficou com uma marca de sol esquisita.|-0 <2'],
 ['+|Foi a uma loja e achou promoção.|+0 >1','-|O vendedor te xingou e te seguiu.|-0 <2','-|Perdeu a oportunidade e se arrependeu.|-0 <1']);
SIT('*','👟','Tênis novo','Você viu um tênis que adorou, mas custa R$ 800. Você tem R$ 200. A loja oferece parcelamento em 12x.','Parcelar','Esperar a promoção',
 ['+|Comprou e usou por 3 anos. Valeu cada centavo.|+0 >3','-|Os juros dobraram o valor.|-400','-|O tênis furou em 2 meses.|-0 <2'],
 ['+|Esperou e comprou com 50% de desconto.|+300 >3','-|O tênis esgotou.|-0 <2','-|A promoção nunca veio.|-0 <1']);
SIT('*','🧥','Jaqueta de couro','Uma jaqueta de couro está em promoção a R$ 1.500. A vendedora diz "é legítima, de couro de vaca". Você sente cheiro de plástico.','Comprar','Pesquisar',
 ['+|Era mesmo de couro e durou 10 anos.|+0 >3','-|Era plástico e rasgou na primeira lavagem.|-1500','-|A vendedora cobrou R$ 200 de "taxa de conservação".|-200'],
 ['+|Achou uma jaqueta melhor por metade do preço.|+500 >3','-|Voltou e a jaqueta já tinha sido vendida.|-0 <2','-|Perdeu a tarde procurando.|-0 <2']);
SIT('*','🧴','Perfume importado','Um vendedor oferece um perfume importado por R$ 80. Ele jura que "é igualzinho ao de R$ 800".','Comprar','Recusar',
 ['+|O perfume era excelente e todos elogiaram.|+0 >3','-|Cheirava a limpa-vidros.|-80','-|Deu alergia e a pele ficou vermelha.|-60 P'],
 ['+|Foi a uma loja e achou promoção.|+0 >1','-|O vendedor te xingou.|-0 <1','-|Ficou com cheiro de suor o dia todo.|-0 <2']);
SIT('*','🛍️','Liquidação de rua','A liquidação da rua tem 80% de desconto. A fila dá volta no quarteirão. Todos brigam por uma camisa.','Entrar na briga','Esperar',
 ['+|Conseguiu a camisa e ainda ganhou um brinde.|+50 >3','!|Foi empurrado e machucou o ombro.|-80 <2','-|Rasgou a camisa na briga.|-30'],
 ['+|Esperou e pegou o que sobrou: uma camisa melhor.|+0 >2','-|Não sobrou nada.|-0 <2','-|A loja fechou antes da sua vez.|-0 <1']);
SIT('*','🍾','Garrafa de vinho','Um amigo te dá uma garrafa de vinho de R$ 500. Você nunca bebeu vinho. Ele pede "abra na hora certa".','Abrir agora','Guardar pra ocasião especial',
 ['+|O vinho era divino e você virou "conhecedor".|+0 >3','-|O vinho tinha rolha e azedou.|-0 <2','-|Derrubou metade no tapete.|-100'],
 ['+|Guardou e valorizou 3x.|+500 >3','-|Esqueceu e o vinho virou vinagre.|-500','-|Um parente achou e bebeu escondido.|-500 <2']);
SIT('*','🎁','Presente de amigo secreto','Você ganhou um presente horrível no amigo secreto: uma estátua de cachorro cantando.','Aceitar com educação','Trocar por outro',
 ['+|A estátua virou piada interna do grupo.|+0 >3','-|A estátua cantou de madrugada. Susto.|-0 <2','-|Ninguém quis a estátua.|-0 <1'],
 ['+|Trocou por uma caixa de chocolate.|+0 >2','-|Todo mundo olhou torto.|-0 <2','-|A estátua ficou com você mesmo.|-0']);
SIT('*','🎈','Balão de festa','Você está numa festa e um balão grande voa. Uma criança chora. Todos olham pra você.','Tentar pegar o balão','Dar outro pra criança',
 ['+|Pegou o balão e virou herói.|+0 >3','!|Pulou e torceu o tornozelo.|-60 <2','-|O balão estourou na sua cara.|-0 <1'],
 ['+|A criança parou de chorar e a mãe te agradeceu.|+0 >2','-|A criança queria aquele e continuou chorando.|-0 <1','-|O balão novo estourou também.|-0']);
SIT('*','🎪','Circo na cidade','O circo chegou na cidade. O palhaço pede um voluntário. Você sente o medo.','Se voluntariar','Se esconder',
 ['+|Foi um sucesso e você ganhou aplausos.|+0 >3','-|O truque falhou e você levou uma torta na cara.|-0 <2','-|Foi pendurado de cabeça pra baixo.|-0 <2'],
 ['+|Ficou escondido e viu o show em paz.|+0 >2','-|O palhaço te achou e te arrastou.|-0 <2','-|Alguém te empurrou pro palco.|-0 <1']);
SIT('*','🏛️','Visita a museu','Você foi a um museu. O vigia te observa. Você tem vontade de tocar na obra de R$ 10 milhões.','Tocar','Só olhar',
 ['-|O alarme disparou e o museu inteiro olhou.|-300 <2','+|Era uma réplica e ninguém notou.|+0 >2','-|O segurança te expulsou.|-0 <2'],
 ['+|Viu tudo em paz e aprendeu muito.|+0 >3','-|Alguém te empurrou e você quase tocou.|-0 <1','-|O vigia te seguiu o tempo todo.|-0 <1']);
SIT('*','📚','Livraria de bairro','A livraria tem uma promoção: "leve 3, pague 1". Você precisa de 3 livros bons.','Escolher 3','Escolher 1',
 ['+|Achou 3 livros incríveis e saiu feliz.|+0 >3','-|Os livros eram todos ruins.|-0 <2','-|A caixa errou o preço.|-100'],
 ['+|Achou um clássico por R$ 10.|+0 >2','-|O livro era de capa mole e rasgou.|-0 <1','-|Perdeu o livro no ônibus.|-0 <2']);
SIT('*','🎬','Maratona de séries','Você decidiu fazer maratona de uma série de 10 temporadas. No 3º dia, você esqueceu de comer.','Continuar','Parar e comer',
 ['+|Terminou e virou "o cara que viu tudo".|+0 >3','!|Ficou com dor nas costas e nos olhos.|-60 P','-|O final foi decepcionante.|-0 <2'],
 ['+|Comeu e se sentiu humano de novo.|+0 >2','-|Perdeu o fio da meada.|-0 <1','-|Alguém contou o spoiler.|-0 <2']);
SIT('*','🏝️','Fim de semana prolongado','Você tem 4 dias de folga. Todo mundo vai à praia. A estrada está parada.','Viajar mesmo assim','Ficar em casa',
 ['+|Chegou e curtiu a praia vazia.|+0 >3','-|Passou 8 horas no trânsito.|-0 <2','-|O carro quebrou na estrada.|-300 P'],
 ['+|Ficou em casa e descansou muito.|+0 >2','-|O vizinho fez festa e ninguém dormiu.|-0 <2','-|Chuva forte e nada pra fazer.|-0 <1']);
SIT('*','🚿','Chuveiro quebrado','O chuveiro pifou. A água esfria. Você tem que decidir: tomar banho de balde ou ir à casa da mãe.','Banho de balde','Ir à casa da mãe',
 ['+|O banho de balde foi nostálgico e refrescante.|+0 >2','-|A água estava gelada e você pegou um resfriado.|-60 P','-|Escorregou no banheiro e machucou o joelho.|-40 <1'],
 ['+|A mãe te recebeu com jantar e carinho.|+0 >3','-|A mãe te fez uma "palestra".|-0 <2','-|A mãe esqueceu que tinha parentes lá.|-0 <1']);
SIT('*','🕯️','Apagão na rua','A luz da rua inteira acabou. Todos estão nas janelas. Alguém grita "é a Copa!".','Ir ao boteco','Ficar em casa',
 ['+|O boteco tinha gerador e você assistiu ao jogo.|+0 >3','-|O boteco estava lotado e você ficou de fora.|-0 <2','-|Alguém roubou seu celular no escuro.|-250'],
 ['+|Dormiu cedo e acordou descansado.|+0 >2','-|Ficou no escuro com medo.|-0 <2','-|A comida na geladeira estragou.|-100']);
SIT('*','🌡️','Onda de calor','O Rio bateu 44 graus. O asfalto derrete e o ar-condicionado do ônibus pifou.','Procurar uma piscina','Ficar em casa com ventilador',
 ['+|Achou uma piscina de graça e mergulhou.|+0 >3','-|A piscina estava lotada e você ficou na fila.|-0 <2','-|O segurança te expulsou.|-0 <2'],
 ['+|Dormiu na sala e foi o mais feliz do bairro.|+0 >2','!|Passou mal de calor.|-60 P','-|O ventilador pifou.|-80']);
SIT('*','🌪️','Tempestade de granizo','Uma tempestade de granizo cai no Rio. Os carros ficam amassados. Você está no meio da rua.','Correr pra marquise','Cobrir a cabeça',
 ['+|Achou abrigo e ficou seguro.|+0 >2','-|A marquise estava lotada e você ficou na chuva.|-0 <2','!|Foi atingido por uma pedra de gelo.|-60 <1'],
 ['!|Machucou a cabeça com o granizo.|-80 P','+|O granizo parou e você virou herói.|+0 >2','-|Perdeu o guarda-chuva.|-30']);
SIT('*','🌫️','Neblina no Corcovado','O Cristo Redentor está coberto de neblina. Você pagou R$ 80 pelo ingresso e só vê branco.','Esperar a neblina passar','Pedir reembolso',
 ['+|A neblina abriu e você viu a vista mais linda da vida.|+0 >3','-|Esperou 3 horas e não abriu.|-0 P','-|Choveu e você se molhou.|-0 <1'],
 ['+|O atendente devolveu o dinheiro.|+80 >2','-|O atendente disse "é assim mesmo".|-0 <2','-|Perdeu o ingresso.|-80']);
