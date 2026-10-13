// ======= GERAIS 5: festas, feriados, religião leve, vizinhança, bichos, clima, compras =======
SIT('*','🎉','Réveillon de última hora','São 22h do dia 31. Você não tem plano. Um amigo oferece uma festa que "não tem lugar, mas tem cerveja".','Ir à festa','Ir à praia',
 ['+|A festa era ótima e você virou o ano abraçado.|+0 >3','-|A festa era de gente que você nem conhecia.|-0 <2','-|Brigaram e a festa acabou na delegacia.|-100 P'],
 ['+|Viu os fogos de Copacabana e se emocionou.|+0 >3','-|Foi assaltado na areia.|-150','-|Dormiu na areia e perdeu a virada.|-0 <2']);
SIT('*','🎃','Halloween na Lapa','No Halloween, a Lapa vira um carnaval de monstros. Alguém te vê sem fantasia e grita "olha o humano!".','Entrar na brincadeira','Fugir',
 ['+|Todos riram e você ganhou uma cerveja.|+0 >3','-|Te jogaram tinta fantasma.|-30','-|Alguém roubou sua carteira.|-150'],
 ['+|Fugiu e achou um bar vazio.|+0 >2','-|Foi perseguido por 3 zumbis.|-0 <2','-|Perdeu o último ônibus.|-0 <2']);
SIT('*','🎄','Ceia de Natal','A ceia de Natal tem 4 tipos de peru e nenhuma opção vegetariana. O tio já bebeu 6 cervejas.','Comer o peru','Pedir pizza',
 ['+|O peru era ótimo e você repetiu 3 vezes.|+0 >3','!|Comeu demais e passou mal.|-40 P','-|O tio derrubou o peru no chão.|-0 <2'],
 ['+|A pizza chegou e todos aplaudiram.|+0 >3','-|O tio ficou ofendido e te chamou de "ingrato".|-0 <2','-|A pizzaria estava fechada.|-0 <1']);
SIT('*','🐰','Páscoa de bairro','O padre faz uma caça aos ovos de Páscoa. Os ovos são de chocolate falso. As crianças são implacáveis.','Participar','Ajudar o padre',
 ['+|Achou o ovo dourado e ganhou um prêmio.|+30 >3','-|Foi derrubado por 3 crianças.|-0 <2','-|O ovo era de papelão.|-0 <1'],
 ['+|O padre te deu uma bênção e um chocolate.|+0 >2','-|Uma criança te mordeu.|-30','-|Os ovos acabaram.|-0 <1']);
SIT('*','🎂','Aniversário do bairro','O bairro faz 100 anos. Todos usam camisetas iguais. Um senhor te dá uma de tamanho G. Você é P.','Usar mesmo assim','Recusar',
 ['+|Virou o "homem camisola" e todos adoraram.|+0 >3','-|A camiseta rasgou na dança.|-30','-|Alguém te fotografou e postou.|-0 <2'],
 ['+|Foi educado e achou outra de graça.|+0 >1','-|O senhor ficou chateado.|-0 <2','-|Ninguém te cumprimentou.|-0 <1']);
SIT('*','🕯️','Missa de domingo','O padre faz um sermão de 1 hora sobre "pecados do dia a dia". Ele aponta pra você.','Ouvir com atenção','Dormir',
 ['+|O padre ficou comovido e te abençoou.|+0 >3','-|O sermão foi sobre "preguiça".|-0 <2','-|Todos te olharam.|-0 <1'],
 ['-|Roncou alto e o padre parou o sermão.|-0 <3','+|Dormiu e acordou na hora do café.|+0 >2','-|Babou no ombro do vizinho.|-0 <2']);
SIT('*','🔔','Procissão de São Jorge','Dia de São Jorge. A procissão passa na sua rua. Todos de vermelho e branco. Você de preto.','Participar de vermelho','Ficar de preto',
 ['+|Foi abençoado e ganhou uma medalha.|+0 >3','-|A camisa vermelha tingiu tudo.|-60','-|Alguém te deu um cravo e você espirrou.|-0 <1'],
 ['-|Alguém te chamou de "descrente".|-0 <2','+|Ficou na janela e viu tudo.|+0 >1','-|Um senhor te olhou feio.|-0 <1']);
SIT('*','🌊','Festa de Iemanjá','No Réveillon, você joga flores no mar. Uma onda traz tudo de volta e te derruba.','Tentar de novo','Desistir',
 ['+|A segunda tentativa foi perfeita e você ganhou um desejo.|+0 >3','!|Outra onda te derrubou e você engoliu água.|-60 <2','-|Perdeu o chinelo.|-30'],
 ['+|Os amigos jogaram por você e tudo deu certo.|+0 >2','-|Todos riram.|-0 <1','-|Perdeu o desejo.|-0 <1']);
SIT('*','🥁','Roda de capoeira','Uma roda de capoeira no Largo do Machado te convida pra entrar. Você nunca fez nada parecido.','Entrar','Assistir',
 ['+|Fez uma ginga e foi aplaudido.|+0 >3','!|Levou uma rasteira e caiu.|-50 <2','-|O mestre riu de você.|-0 <2'],
 ['+|Aprendeu uns golpes e fez amigos.|+0 >2','-|Foi atingido por um pé voador.|-40 <1','-|Alguém te cobrou R$ 10 de "taxa de assistir".|-10']);
SIT('*','🌳','Árvore de Natal','Você monta a árvore de Natal. As luzes piscam em ritmo de funk. O gato derruba tudo.','Reconstruir','Deixar caída',
 ['+|A árvore ficou ainda mais bonita.|+0 >3','-|As luzes queimaram.|-60','-|O gato derrubou de novo.|-0 <2'],
 ['+|A árvore caída virou "arte moderna".|+0 >2','-|O gato dormiu em cima.|-0 <1','-|Alguém te chamou de "Grinch".|-0 <1']);
SIT('*','🎁','Presente de amigo oculto','Você tirou a tia que reclama de tudo. O valor é R$ 100. Ela adora "coisas úteis".','Comprar uma panela','Comprar chocolate',
 ['+|A tia amou a panela e te deu um abraço.|+0 >3','-|A panela era igual a que ela já tinha.|-100','-|Ela reclamou da cor.|-0 <2'],
 ['+|O chocolate era ótimo e ela dividiu.|+0 >2','-|Ela disse "tá engordando".|-0 <2','-|Alguém roubou o chocolate.|-0 <1']);
SIT('*','🎶','Show de karaokê do prédio','O prédio faz um karaokê no salão de festas. O síndico canta "Evidências". Todos choram.','Cantar também','Aplaudir',
 ['+|Seu dueto com o síndico foi um sucesso.|+0 >3','-|Desafinou e todos riram.|-0 <2','-|O microfone deu choque.|-30 <1'],
 ['+|Aplaudiu e ganhou uma cerveja.|+0 >2','-|O síndico pediu bis.|-0 <2','-|Alguém te chamou pra cantar.|-0 <1']);
SIT('*','🎮','Torneio de truco no prédio','O prédio organiza um torneio de truco. O prêmio é uma garrafa de uísque. Você blefa bem.','Participar','Assistir',
 ['+|Ganhou o torneio com um blefe genial.|+80 >3','-|Foi pego blefando e todos riram.|-0 <2','-|Perdeu feio.|-20'],
 ['+|Assistiu e ganhou um chope pela torcida.|+0 >2','-|Alguém te acusou de "fofoqueiro".|-0 <1','-|Perdeu o jantar.|-0 <1']);
SIT('*','🐕','Concurso de cachorros','O condomínio faz concurso de cachorros. O seu tem mau hálito e rosnados. Ele odeia concursos.','Inscrever','Retirar',
 ['+|Seu cachorro ganhou o prêmio de "mais carismático".|+50 >3','-|Mordeu o juiz.|-150','-|Fez xixi no troféu.|-0 <2'],
 ['+|Ficou em casa e todos agradeceram.|+0 >2','-|O cachorro ficou deprimido.|-0 <1','-|Alguém disse "tá com medo?".|-0 <1']);
SIT('*','🏆','Campeonato de pipa','As pipas coloridas enchem o céu do bairro. Uma disputa de linha com cerol começa.','Participar','Só olhar',
 ['+|Cortou a pipa do rival e ganhou fama.|+0 >3','!|O cerol cortou sua mão.|-80 P','-|A pipa ficou presa na fiação.|-0 <2'],
 ['+|Ficou seguro e curtiu a festa.|+0 >2','-|Uma pipa caiu na sua cabeça.|-0 <1','-|Perdeu o chapéu.|-0 <1']);
SIT('*','🎈','Balão de São João','Você vê um balão junino subindo no céu. Ele leva um pedido. Você tem 3 segundos.','Fazer um pedido','Rir',
 ['+|O pedido se realizou: ganhou R$ 100.|+100 >3','-|O balão caiu e queimou o varal do vizinho.|-100 <2','-|O balão pegou fogo.|-0 <2'],
 ['+|Ficou em paz e curtiu o céu.|+0 >2','-|Alguém te chamou de "descrente".|-0 <1','-|O balão caiu perto de você.|-30']);
SIT('*','🌽','Festa Junina da escola','Na festa junina, a diretora te escala pra "pescaria". Você vai ser o peixe.','Aceitar','Recusar',
 ['+|Foi o peixe mais aplaudido da festa.|+30 >3','-|Alguém te puxou pela linha e você caiu.|-0 <2','-|Molhou a roupa toda.|-30'],
 ['-|A diretora te achou "frouxo".|-0 <2','+|Escapou e comeu canjica.|+0 >2','-|Alguém ocupou seu lugar e ganhou fama.|-0 <1']);
SIT('*','🥁','Escola de samba mirim','Você é convidado pra ser jurado do desfile de escola de samba mirim. As crianças te olham como se você fosse um deus.','Dar nota 10 pra todo mundo','Ser rigoroso',
 ['+|Todos te amaram e você ganhou um trofeuzinho.|+0 >3','-|Os pais reclamaram de "nota inflacionada".|-0 <2','-|Uma criança perdeu e chorou.|-0 <2'],
 ['+|Foi respeitado e te deram um bolo.|+0 >2','-|Um pai gritou "injustiça!".|-0 <2','-|Foi vaiado.|-0 <2']);
SIT('*','🌧️','Chuva de canivete','Chove tanto no Rio que as ruas viram rios. Alguém usa uma boia pra atravessar.','Usar uma boia','Atravessar a pé',
 ['+|Atravessou boiando e virou meme positivo.|+0 >3','-|A boia furou.|-0 <2','!|Bateu num carro boiando.|-50 <2'],
 ['!|Caiu num bueiro aberto.|-100 <2','+|Atravessou sem problema.|+0 >2','-|Molhou o celular.|-250']);
SIT('*','🌩️','Raio no morro','Um raio cai perto da sua casa. Todos os aparelhos queimam. Menos o ventilador.','Chamar o eletricista','Reparar',
 ['+|O eletricista foi rápido e cobrou R$ 80.|+0 >2','-|Cobrou R$ 500.|-500','-|Demorou 3 dias.|-0 P'],
 ['!|Levou um choque.|-60 P','+|Consertou sozinho e se sentiu o Thor.|+0 >2','-|Queimou o quadro.|-200']);
SIT('*','🌡️','Frio de 15 graus','No Rio, 15 graus é "inverno nuclear". Todo mundo usa casaco de 40 graus. Você só tem um.','Usar o casaco','Fingir que é tranquilo',
 ['+|O casaco foi um sucesso e você ficou quentinho.|+0 >2','-|Suou e passou mal.|-0 <1','-|Alguém te chamou de "friorento".|-0 <1'],
 ['+|Ninguém notou e você curtiu.|+0 >2','!|Pegou um resfriado.|-40 P','-|Seus dentes batiam tão alto que todos olharam.|-0 <2']);
SIT('*','🌫️','Neblina na Serra','Você viaja pra Petrópolis. A neblina é tão forte que você não vê o carro da frente.','Continuar','Parar',
 ['+|Chegou e achou uma pousada charmosa.|+0 >3','!|Bateu num poste na curva.|-300 <3','-|Se perdeu 2 horas.|-0 P'],
 ['+|Esperou e a neblina passou.|+0 >2','-|Ficou 4 horas parado.|-0 P','-|O carro não pegou.|-300']);
SIT('*','🌪️','Ventania no Aterro','Uma ventania forte derruba barracas no Aterro. Seu guarda-sol voa.','Segurar o guarda-sol','Soltar',
 ['+|Segurou e virou herói da praia.|+0 >3','!|O guarda-sol te levantou do chão.|-60 <2','-|Perdeu o guarda-sol.|-60'],
 ['-|O guarda-sol caiu na cabeça de alguém.|-100 <2','+|O guarda-sol caiu no mar e você riu.|+0 >1','-|Perdeu o chapéu.|-20']);
SIT('*','🌞','Dia de sol forte','O sol de 40 graus derrete até o chinelo. Você esqueceu o protetor. Todos riem.','Comprar protetor','Ficar na sombra',
 ['+|Achou um protetor barato e salvou a pele.|+0 >2','-|Pagou R$ 80 por um protetor.|-80','-|Esqueceu de passar nas costas.|-0 <1'],
 ['+|Ficou na sombra e tomou um suco.|+0 >2','-|A sombra sumiu.|-0 <1','!|Pegou uma insolação.|-80 P']);
SIT('*','🐈','Gato na rua','Um gato te segue há 3 quarteirões. Ele parece que quer algo. Mas não sabe o quê.','Dar comida','Ignorar',
 ['+|O gato virou seu amigo e te seguiu até em casa.|+0 >2','-|Ele trouxe 4 amigos.|-30','-|Ele roubou o lanche.|-20'],
 ['-|Ele te arranhou e foi embora.|-30 <1','+|Ele desistiu e foi atrás de outro.|+0 >1','-|Ele miou a noite toda na sua porta.|-0 P']);
SIT('*','🐦','Pombo no ombro','Um pombo pousa no seu ombro e não sai mais. Todos riem.','Deixar','Tirar',
 ['+|O pombo virou seu mascote e rendeu 5 mil seguidores.|+50 >3','-|O pombo fez cocô no seu ombro.|-0 <2','-|Ele te deu uma bicada.|-20'],
 ['+|O pombo voou e você ficou aliviado.|+0 >2','-|Ele voltou 3 vezes.|-0 <2','!|Ele te bicou no olho.|-60 P']);
SIT('*','🐕','Cachorro furioso','Um cachorro de rua rosna pra você. Você está sozinho na rua. Ele parece ter fome.','Dar um biscoito','Correr',
 ['+|O cachorro virou amigo e te acompanhou.|+0 >3','!|Ele te mordeu mesmo assim.|-100 P','-|Pegou seu lanche.|-20'],
 ['+|Correu e escapou.|+0 >2','!|Tropeçou e caiu.|-60 <2','-|O cachorro te seguiu até em casa.|-0 <2']);
SIT('*','🐀','Rato no mercado','Um rato do tamanho de um gato passa correndo pelo mercado. Todo mundo grita.','Gritar também','Fingir que não viu',
 ['+|Todos riram e o clima ficou leve.|+0 >2','-|O rato correu em direção a você.|-0 <2','-|Alguém filmou sua reação.|-0 <2'],
 ['+|O rato foi embora e tudo voltou ao normal.|+0 >1','-|O mercado foi interditado.|-0 <2','-|Alguém te viu rindo e te xingou.|-0 <1']);
SIT('*','🐒','Macaco no telhado','Um macaco senta no seu telhado e come uma manga. Ele te olha com desprezo.','Oferecer outra manga','Espantar',
 ['+|O macaco aceitou e virou "parceiro".|+0 >2','-|Ele jogou o caroço na sua cabeça.|-0 <1','-|Ele quis mais.|-0 <1'],
 ['-|Ele invadiu sua casa.|-100 <2','+|Ele foi embora e deixou uma manga.|+0 >2','!|Ele te arranhou.|-60 P']);
SIT('*','🐍','Cobra no quintal','Uma cobra aparece no quintal. É verde e pequena. Parece inofensiva. Ou não.','Chamar os bombeiros','Pegar com a mão',
 ['+|Os bombeiros levaram e agradeceram.|+0 >2','-|Demoraram 4 horas.|-0 P','-|Era uma cobra venenosa.|-0 <1'],
 ['!|A cobra era peçonhenta.|-300 P','+|Era inofensiva e virou mascote.|+0 >3','-|A cobra fugiu pro vizinho.|-0 <1']);
SIT('*','🦀','Caranguejo na praia','Você acha um caranguejo na praia. Ele parece te desafiar. Você está de pé descalço.','Pegar','Desviar',
 ['+|Pegou e o vendedor te deu R$ 20.|+20 >2','!|O caranguejo te beliscou.|-30 <1','-|Ele fugiu.|-0 <1'],
 ['+|Desviou e ficou ileso.|+0 >2','-|Pisou nele mesmo assim.|-30','-|Todos riram.|-0 <1']);
SIT('*','🦎','Lagarto no banheiro','Um lagarto sai do ralo do banheiro. Você não sabe se ele é amigo ou inimigo.','Chamar o síndico','Conversar com ele',
 ['+|O síndico levou o lagarto e agradeceu.|+0 >2','-|O síndico disse "é seu problema".|-0 <2','-|O lagarto fugiu pro apartamento do vizinho.|-0 <1'],
 ['+|O lagarto virou seu amigo.|+0 >3','-|O lagarto te mordeu.|-30','-|Os vizinhos acharam que você enlouqueceu.|-0 <2']);
SIT('*','🦜','Papagaio de feira','Na feira, um papagaio te chama pelo nome. Você nunca o viu antes.','Responder','Ignorar',
 ['+|Ele disse "você ganhou na loteria" e você ganhou R$ 50.|+50 >3','-|Ele xingou sua mãe.|-0 <2','-|Todos riram.|-0 <1'],
 ['-|O papagaio te xingou por 10 minutos.|-0 <2','+|Ele desistiu e foi atrás de outro.|+0 >1','-|O dono te perseguiu.|-0 <1']);
SIT('*','🦆','Pato no parque','Um pato no parque te segue. Ele quer pão. Você tem um pão. Mas ele tá bom.','Dar o pão','Comer o pão',
 ['+|O pato virou seu amigo.|+0 >3','-|Vieram mais 10 patos.|-0 <2','-|O pato bicou sua mão.|-30'],
 ['-|O pato ficou ofendido e te mordeu.|-40','+|O pato desistiu e foi embora.|+0 >1','-|Todos os patos te seguiram.|-0 <2']);
SIT('*','🐢','Tartaruga na lagoa','Uma tartaruga na Lagoa Rodrigo de Freitas te olha com sabedoria. Ela parece saber de algo.','Perguntar algo','Fotografar',
 ['+|A tartaruga piscou e você ganhou uma sensação de paz.|+0 >3','-|Todos acharam que você enlouqueceu.|-0 <2','-|Ela te mordeu.|-30'],
 ['+|A foto ficou incrível.|+30 >2','-|A tartaruga foi embora na hora.|-0 <1','-|O celular caiu na lagoa.|-250']);
SIT('*','🐠','Aquário do bairro','Um senhor tem um aquário gigante no bar. Ele diz "meu peixe sabe o futuro".','Pedir uma previsão','Ignorar',
 ['+|O peixe "previu" que você ganharia e você ganhou R$ 30.|+30 >3','-|O peixe "previu" uma briga e você apanhou.|-60 <2','-|O senhor cobrou R$ 20 pela previsão.|-20'],
 ['+|O peixe piscou e você sorriu.|+0 >1','-|O senhor te xingou.|-0 <1','-|Derrubou a cerveja no aquário.|-30']);
SIT('*','🐝','Abelha na festa','Uma abelha pousa na sua cerveja. Todo mundo olha. Você tem alergia.','Soprar','Fugir',
 ['+|A abelha foi embora e você virou herói.|+0 >2','!|A abelha te picou e você passou mal.|-100 P','-|Derramou a cerveja.|-15'],
 ['!|Tropeçou e caiu.|-50 <2','+|Escapou e a festa continuou.|+0 >2','-|A abelha te seguiu.|-0 <1']);
SIT('*','🕷️','Aranha no banheiro','Uma aranha do tamanho de uma mão está no teto do banheiro. Você precisa de um banho.','Matar com chinelo','Tomar banho assim',
 ['+|Matou e virou herói.|+0 >2','!|Errou e a aranha caiu em você.|-60 <2','-|Quebrou o espelho.|-80'],
 ['+|A aranha ficou quieta e você tomou banho.|+0 >2','-|A aranha desceu e te assustou.|-0 <2','!|Escorregou no susto.|-60 <1']);
