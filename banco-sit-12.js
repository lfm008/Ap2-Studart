// ======= CRIME, LEI E ESTUDANTE (parte 3) =======
SIT('crime','🏍️','Roubo de moto na orla','Uma moto igual à do chefe está estacionada na orla. O dono sumiu. As chaves estão na ignição.','Levar a moto','Deixar pra lá',
 ['+|Era do chefe mesmo e ele te deu um bônus.|+500 >3','-|Era de um policial à paisana e você foi preso.|-2000 P','-|Era de um turista inocente. Você caiu em desgraça.|-500 <2'],
 ['+|A moto sumiu e você escapou da investigação.|+0 >2','-|O chefe soube e ficou furioso.|-300 <2','-|Alguém te viu olhando e te dedurou.|-0 <2']);
SIT('crime','💰','Cobrança de dívida','Um sujeito deve R$ 5.000 ao morro. Ele jura que "paga semana que vem". Você tem que cobrar.','Dar mais uma semana','Cobrar com firmeza',
 ['+|Ele pagou em dobro e agradeceu.|+800 >3','-|Ele fugiu da cidade.|-500 <2','-|O chefe te achou "mole" e te rebaixou.|-0 <2'],
 ['+|Ele pagou na hora e te chamou de "profissional".|+500 >3','-|Ele chamou a polícia.|-1000 P','!|Ele reagiu e você levou um soco.|-100 <2']);
SIT('crime','🍺','Boteco da facção','O dono do boteco paga "proteção" a você. Hoje ele diz "não tenho dinheiro, mas tenho feijoada".','Aceitar a feijoada','Exigir o dinheiro',
 ['+|A feijoada era divina e você virou freguês.|+0 >3','-|A feijoada estava azeda. Intoxicação.|-0 P','-|O dono contou pra todo mundo que você é "frouxo".|-0 <2'],
 ['-|Ele chorou e você ficou com pena.|-0 <2','+|Ele achou o dinheiro debaixo do colchão.|+300 >3','-|Ele fechou o boteco.|-0 <2']);
SIT('crime','📦','Entrega perdida','O pacote que você devia entregar foi parar na casa errada. A vizinha abriu e disse "que lindo".','Pedir de volta','Fingir que é presente',
 ['+|Ela devolveu e ainda te deu um bolo.|+0 >3','-|Ela chamou a polícia.|-1000 P','-|Ela já tinha usado o conteúdo.|-500 <2'],
 ['+|Ela amou e te deu um abraço. O chefe não percebeu.|+0 >2','-|O chefe descobriu e te mandou calar.|-0 <2','-|Ela contou pras amigas.|-0 <2']);
SIT('crime','🥁','Escola de samba','O chefe patrocina a escola de samba. Hoje ele te chama pra ser "ala dos compositores".','Aceitar','Recusar',
 ['+|O samba foi um sucesso e você virou "poeta do morro".|+500 >3','-|A música era horrível e o chefe te mandou sair.|-0 <3','-|Você desafinou em frente a 300 pessoas.|-0 <2'],
 ['-|O chefe se ofendeu e te cortou do rateio.|-300 <2','+|Recusou e virou "humilde".|+100 >2','-|Outro ganhou a vaga.|-0 <2']);
SIT('crime','🚔','Operação Carnaval','A polícia anuncia uma operação durante o Carnaval. Todo mundo no morro tá nervoso.','Fugir pra praia','Ficar no morro',
 ['+|Passou o Carnaval inteiro de boa.|+0 >3','-|A polícia estava na praia também.|-500 P','-|Foi reconhecido por um turista.|-300 <2'],
 ['+|A operação não chegou ao seu quarteirão.|+0 >2','-|A polícia entrou na sua rua.|-800 P','-|O chefe pediu pra todos ficarem quietos.|-0 <1']);
SIT('crime','🎖️','Medalha do chefe','O chefe te dá uma "medalha de lealdade". É de bronze e tem um desenho torto. Ele te olha esperando um discurso.','Fazer um discurso','Agradecer em silêncio',
 ['+|O discurso emocionou o chefe e você ganhou um aumento.|+500 >3','-|Esqueceu o nome do chefe no meio.|-0 <3','-|Disse "obrigado, pai" por engano.|-0 <3'],
 ['+|O chefe respeitou seu silêncio.|+200 >2','-|O chefe achou "frio" e te olhou torto.|-0 <2','-|Alguém riu e o chefe se irritou.|-0 <1']);
SIT('crime','🏠','Casa abandonada','Você acha uma casa abandonada no morro. Parece perfeita pra "estoque". Mas tem uma família morando.','Expulsar a família','Deixar eles lá',
 ['+|Eles saíram e a casa ficou sua.|+300 >3','-|Eles chamaram a imprensa e virou escândalo.|-1000 <3','-|A família era do chefe.|-1500 <2'],
 ['+|A família te agradeceu e você virou "homem bom".|+100 >3','-|Perdeu o estoque.|-300 <2','-|O chefe te achou "fraco".|-0 <2']);
SIT('crime','📸','Selfie com o chefe','Um turista pede uma selfie com o chefe. O chefe topa. Você tem que tirar. A câmera está estranha.','Tirar a foto','Recusar',
 ['+|A foto ficou ótima e o chefe te elogiou.|+200 >3','-|O flash estourou e todos viram a cara do chefe.|-500 <2','-|O turista postou e a polícia viu.|-1000 P'],
 ['-|O chefe se ofendeu e te mandou embora.|-0 <2','+|O turista tirou com outro e tudo ficou bem.|+0 >2','-|O turista reclamou da "hospitalidade".|-0 <1']);
SIT('crime','🥩','Churrasco de domingo','O chefe organiza um churrasco. Você é o churrasqueiro. A carne queimou e todos olham.','Culpar a carvão','Assumir o erro',
 ['+|Todos riram e o chefe disse "nunca confiei no carvão".|+0 >3','-|O chefe te mandou fazer outro.|-0 <2','-|Alguém filmou e postou.|-0 <2'],
 ['+|O chefe riu e te deu uma cerveja.|+50 >3','-|O chefe te mandou lavar a churrasqueira.|-0 P','-|Todos te chamaram de "frango".|-0 <2']);
SIT('crime','🚗','Carro roubado','Você recebeu um carro roubado pra "desmanchar". Ele tem um bilhete: "devolva, por favor".','Desmanchar','Devolver',
 ['+|O carro rendeu uma boa grana.|+500 >3','-|Era do delegado.|-3000 P','-|O dono apareceu e te processou.|-1000 <2'],
 ['+|O dono agradeceu e te deu R$ 500.|+500 >3','-|O chefe soube e te chamou de "vira-casaca".|-500 <2','-|O dono te denunciou.|-1500 P']);
SIT('crime','🌴','Casa na praia do chefe','O chefe te empresta a casa da praia por um fim de semana. A casa tem câmeras escondidas.','Aceitar','Recusar',
 ['+|Foi um fim de semana de paz e o chefe não notou.|+200 >3','-|As câmeras flagraram você dançando funk.|-0 <3','-|O chefe viu as imagens e te zoou.|-0 <2'],
 ['-|O chefe disse "tá me desprezando?".|-0 <2','+|Ficou no morro e o chefe respeitou.|+0 >2','-|Outro colega foi e quebrou a casa.|-0 <1']);
SIT('crime','📱','Aplicativo do chefe','O chefe instalou um aplicativo pra "controle de equipe". Ele mostra onde você está o tempo todo.','Aceitar o app','Desinstalar',
 ['+|O app te levou a uma promoção.|+300 >3','-|O app mostrou que você estava no boteco.|-0 <2','-|O chefe viu você na casa da ex.|-0 <3'],
 ['-|O chefe notou e te deu advertência.|-300 <2','+|O app deu pane e ninguém notou.|+0 >2','-|O chefe te mandou instalar de novo.|-0 <1']);
SIT('crime','🎤','MC do morro','O MC do morro te convida pra fazer um feat. Você nunca cantou na vida.','Gravar a música','Recusar',
 ['+|A música viralizou e você ganhou uma boa grana.|+500 >3','-|A letra era sobre o chefe e ele ficou furioso.|-1000 <2','-|A voz saiu tão ruim que virou meme.|-0 <2'],
 ['-|O MC ficou chateado e te cortou do baile.|-0 <2','+|Recusou e continuou "mistério".|+0 >2','-|Alguém ocupou seu lugar.|-0 <1']);
SIT('crime','🔒','Preso na delegacia','Você foi detido por "atitude suspeita". O delegado te interroga. Ele parece cansado.','Ficar calado','Contar uma história',
 ['+|O delegado desistiu e te liberou.|+0 >3','-|O silêncio irritou e ele te deixou mais 4 horas.|-0 P','-|Ele te prendeu por "desacato".|-500 P'],
 ['+|A história era tão boa que ele riu e te liberou.|+0 >3','-|A história tinha furos.|-500 P','-|Ele anotou tudo e usou contra você.|-1000 P']);
SIT('crime','📰','Matéria no jornal','O jornal publicou uma matéria com sua foto: "Procurado". Mas é o seu primo.','Desmentir','Ficar quieto',
 ['+|Provou que era o primo e o jornal pediu desculpas.|+200 >3','-|Ninguém acreditou.|-0 <3','-|O primo ficou furioso.|-0 <2'],
 ['-|A polícia foi atrás do primo e ele te culpou.|-500 <2','+|O primo foi preso e você ficou limpo.|+0 >2','-|Os vizinhos começaram a te olhar torto.|-0 <2']);
SIT('crime','🏠','Casa de show','O chefe abre uma casa de show. Você é o segurança. O primeiro show é um fiasco: 3 pessoas.','Fingir que está cheio','Admitir',
 ['+|O chefe viu o "movimento" e ficou feliz.|+300 >3','-|O chefe contou as pessoas.|-0 <2','-|Alguém filmou e viralizou.|-0 <2'],
 ['+|O chefe riu e disse "amanhã melhora".|+100 >2','-|O chefe te acusou de "trazer azar".|-0 <2','-|O show foi cancelado.|-0 <1']);
SIT('crime','🐕','Cachorro do vizinho','O cachorro do vizinho late toda noite. O vizinho é policial. Você tem um "plano".','Executar o plano','Esquecer o assunto',
 ['+|O cachorro sumiu e o vizinho não suspeitou.|+0 >3','-|O vizinho descobriu e te prendeu.|-1500 P','-|O cachorro voltou furioso.|-0 <2'],
 ['+|O cachorro parou de latir por milagre.|+0 >2','-|O cachorro latiu mais alto.|-0 <2','-|O vizinho te chamou pra tomar uma.|-0 <1']);
SIT('crime','💊','Remédio caro','Sua mãe precisa de um remédio de R$ 800. Você tem R$ 200. O chefe te oferece "um adiantamento".','Aceitar','Recusar',
 ['+|Conseguiu o remédio e o chefe não cobrou juros.|+0 >3','-|O chefe cobrou juros de 50%.|-500','-|Virou refém do adiantamento.|-0 <3'],
 ['+|Sua mãe melhorou com um genérico.|+0 >2','-|O remédio faltou e ela piorou.|-0 P','-|Teve que pedir emprestado a um vizinho.|-100 <2']);
SIT('crime','🧾','Imposto do chefe','O chefe cobra "imposto" de todos no morro. Hoje o valor é R$ 500. Você tem R$ 300.','Pedir desconto','Pagar com um favor',
 ['+|O chefe te deu desconto e te chamou de "bom soldado".|+0 >3','-|O chefe disse "ou paga ou fora".|-500 <3','-|O chefe te multou em R$ 800.|-800'],
 ['+|O favor rendeu uma promoção.|+300 >3','-|O favor foi uma missão arriscada.|-0 <3','-|O chefe não aceitou.|-500 <2']);
SIT('crime','🚧','Obra no morro','A prefeitura começa uma obra no morro. O chefe não gostou. Ele te manda "conversar" com o mestre de obras.','Conversar com educação','Intimidar',
 ['+|O mestre de obras entendeu e a obra seguiu em paz.|+300 >3','-|O mestre de obras era um policial infiltrado.|-1500 P','-|A obra parou e o morro ficou sem asfalto.|-0 <2'],
 ['-|O mestre chamou a polícia.|-1000 P','+|A obra foi embora e você ganhou prestígio.|+500 >3','-|A imprensa fez uma reportagem sobre o "conflito".|-0 <3']);
// ---- Lei e ordem (parte 3)
SIT('legal','🚓','Tiroteio em frente à escola','Um tiroteio começou perto de uma escola. Você chega primeiro. As crianças estão assustadas.','Evacuar as crianças','Cercar a área',
 ['+|Evacuou todas e foi condecorado.|+800 >3','!|Foi atingido de raspão enquanto protegia as crianças.|-300 P','-|A evacuação foi caótica e atrasou.|-0 <2'],
 ['+|A área foi controlada e a polícia agiu.|+500 >3','!|Tomou um tiro no colete.|-200 P','-|A imprensa criticou sua demora.|-0 <3']);
SIT('legal','📞','Chamado de violência doméstica','Você atende um chamado de violência doméstica. A vizinhança está tensa. O agressor está calmo.','Prender','Conversar',
 ['+|Prendeu o agressor e protegeu a vítima.|+500 >3','!|O agressor reagiu e te agrediu.|-200 <2','-|O agressor tinha um advogado e foi liberado.|-0 <3'],
 ['-|A conversa não funcionou e piorou.|-0 <3','+|O agressor entendeu e aceitou ajuda.|+300 >3','-|A vítima desistiu.|-0 <2']);
SIT('legal','🥋','Capitão Nascimento','Um colega te chama de "Capitão Nascimento" por zoeira. Você não aguenta mais.','Responder à altura','Ignorar',
 ['+|Todos riram e o colega parou.|+0 >3','-|O colega ficou ofendido e te denunciou.|-0 <2','-|Virou meme na corporação.|-0 <2'],
 ['-|O colega continuou por meses.|-0 <2','+|O colega se cansou e parou.|+0 >2','-|Todo mundo passou a te chamar assim.|-0 <1']);
SIT('legal','🚨','Alerta de bomba','Uma ligação diz que há uma bomba no shopping. Você tem 20 minutos pra checar.','Evacuar o shopping','Investigar primeiro',
 ['+|Era trote e todos agradeceram a cautela.|+300 >3','-|Causou pânico e 3 pessoas se machucaram.|-300 <2','-|Perdeu um milhão em vendas e o shopping te processou.|-800'],
 ['+|Era trote e você economizou tempo.|+200 >3','-|Era mesmo uma bomba. Explodiu longe dos clientes.|-500 <2','-|A imprensa criticou sua demora.|-0 <2']);
SIT('legal','🏍️','Perseguição de moto','Um assaltante foge de moto por uma favela. Você está de viatura.','Seguir a viatura','Chamar helicóptero',
 ['+|Alcançou e prendeu o assaltante.|+400 >3','!|Bateu a viatura numa esquina.|-200 <2','-|O assaltante entrou num beco e sumiu.|-0 <2'],
 ['+|O helicóptero achou o assaltante em 5 minutos.|+300 >3','-|O helicóptero estava em manutenção.|-0 <2','+|O assaltante se rendeu sozinho.|+0 >1']);
SIT('legal','🧑‍⚖️','Júri popular','Você é jurado em um júri popular. O réu é seu vizinho. Todos olham pra você.','Declarar impedimento','Votar mesmo assim',
 ['+|O juiz aceitou e você saiu limpo.|+0 >3','-|O juiz achou desculpa e te mandou ficar.|-0 <2','-|O vizinho ficou chateado.|-0 <2'],
 ['+|Votou com consciência e foi elogiado.|+100 >3','-|O vizinho foi condenado e te xingou.|-0 <3','-|A família do réu ameaçou você.|-300 <2']);
SIT('legal','🛡️','Greve da polícia','A polícia entra em greve por falta de pagamento. Você é convocado pra "trabalhar de graça".','Aderir à greve','Trabalhar',
 ['+|A greve conseguiu o aumento.|+800 >3','-|Foi punido por "abandono de posto".|-500 P','-|A cidade ficou sem segurança e você levou a culpa.|-0 <3'],
 ['+|Trabalhou e ganhou uma gratificação.|+300 >2','-|Foi chamado de "furador de greve".|-0 <3','-|O salário nunca veio.|-0 <2']);
SIT('legal','📸','Câmera corporal','Seu comandante instalou câmera corporal. Você não gosta. Hoje ela gravou você cantando no carro.','Apagar o vídeo','Deixar rolar',
 ['+|Apagou e ninguém soube.|+0 >2','-|O backup foi encontrado.|-300 <2','-|A corregedoria te chamou.|-500 P'],
 ['+|O vídeo viralizou e você virou "o policial cantor".|+200 >3','-|O comandante te zoou.|-0 <2','-|Todos te chamaram de "Roberto Carlos".|-0 <2']);
SIT('legal','🥷','Caçada ao bandido','Um criminoso procurado foi visto no seu bairro. Você tem uma pista, mas é do seu informante.','Seguir a pista','Pedir reforço',
 ['+|Prendeu o criminoso e virou herói.|+800 >3','-|A pista era falsa.|-0 <2','-|O informante foi descoberto.|-300 <2'],
 ['+|O reforço chegou e prendeu o criminoso.|+400 >3','-|O reforço demorou e o criminoso fugiu.|-0 <3','-|A informação vazou.|-0 <2']);
SIT('legal','🧯','Resgate de gato no telhado','Uma senhora pede que você resgate o gato dela do telhado. O gato olha pra você com desprezo.','Subir no telhado','Chamar o corpo de bombeiros',
 ['+|Resgatou o gato e ganhou um bolo.|+50 >3','!|Caiu do telhado e quebrou o braço.|-300 <3','-|O gato fugiu e te arranhou.|-60'],
 ['+|Os bombeiros salvaram o gato e te agradeceram.|+0 >2','-|Os bombeiros disseram "não é nosso serviço".|-0 <2','-|O gato desceu sozinho.|-0']);
SIT('legal','🍾','Festa de aniversário do comandante','O comandante faz aniversário. Todos levam presente. Você tem R$ 50.','Comprar um presente simples','Fazer uma vaquinha',
 ['+|O comandante gostou e te elogiou.|+100 >3','-|O presente era igual ao de outro colega.|-0 <2','-|O comandante achou "barato".|-0 <3'],
 ['+|A vaquinha rendeu um presente bom e o comandante agradeceu.|+200 >3','-|Alguém sumiu com o dinheiro.|-100 <2','-|O comandante quis saber quem não contribuiu.|-0 <2']);
SIT('legal','🛑','Fiscalização de trânsito','Você faz uma blitz. O motorista é seu chefe. Ele está sem cinto e com o celular na mão.','Multar','Liberar',
 ['+|O chefe respeitou e te promoveu.|+500 >3','-|O chefe se ofendeu e te transferiu.|-500 <3','-|O chefe te chamou na sala.|-0 <2'],
 ['+|O chefe agradeceu e te deu um cartão.|+200 >2','-|Alguém filmou e postou.|-300 <3','-|Descobriu depois que ele estava bêbado.|-0 <2']);
// ---- estudante (parte 3)
SIT('estudante','📱','Grupo de zap da prova','Alguém criou um grupo "cola" no WhatsApp. O professor entra. Silêncio total.','Sair do grupo','Fingir que é ele',
 ['+|Saiu antes e o professor nem notou.|+0 >3','-|O professor viu seu nome na lista.|-0 <3','-|Todos te chamaram de "dedo-duro".|-0 <2'],
 ['+|O professor achou engraçado e riu.|+0 >2','-|O professor reconheceu sua foto.|-0 <3','-|O grupo foi banido.|-0 <2']);
SIT('estudante','🎓','Cerimônia de formatura','A cerimônia de formatura é no Teatro Municipal. Você é o orador da turma. Não preparou nada.','Improvisar','Ler um discurso copiado',
 ['+|O discurso improvisado emocionou todos.|+200 >3','-|Esqueceu o nome do reitor.|-0 <3','-|Chamou o diretor de "pai".|-0 <3'],
 ['+|O discurso copiado era tão bom que todos choraram.|+300 >3','-|Alguém reconheceu e gritou "plágio!".|-0 <3','-|Leu o discurso errado.|-0 <2']);
SIT('estudante','🍕','Pizza de quinta','Todo mundo na república quer pizza. Falta dinheiro. Alguém propõe "pagar com chocolate".','Aceitar','Recusar',
 ['+|O pizzaiolo era fã de chocolate e aceitou.|+0 >3','-|O pizzaiolo riu e te mandou embora.|-0 <2','-|Alguém comeu o chocolate antes.|-0 <2'],
 ['+|Pediram uma pizza e dividiram.|+0 >2','-|A pizza chegou fria.|-30','-|Brigaram pelo último pedaço.|-0 <2']);
SIT('estudante','🏫','Reitor te chama','O reitor te chama na sala. Você está em pânico. Não sabe o que fez.','Ir com coragem','Pedir um advogado',
 ['+|Era pra te dar um prêmio.|+500 >3','-|Era sobre uma multa de biblioteca.|-30','-|Era pra te expulsar.|-0 P'],
 ['-|O reitor achou que você era culpado.|-0 <2','+|O advogado era seu primo e tudo se resolveu.|+0 >2','-|O advogado cobrou R$ 500.|-500']);
SIT('estudante','🚌','Passe de ônibus','Seu passe estudantil venceu. O motorista não aceita. Você tem R$ 2.','Pedir pra relevar','Descer e pegar outro',
 ['+|O motorista relevou e te deu uma bala.|+0 >3','-|O motorista te expulsou.|-0 <2','-|Todos olharam e você sentiu vergonha.|-0 <2'],
 ['+|Achou outro ônibus mais rápido.|+0 >2','-|O outro ônibus também não aceitou.|-0 <2','-|Perdeu a aula.|-0 <3']);
SIT('estudante','💡','Ideia de startup','Você teve a ideia de uma startup: "Uber de pipoca". Um investidor te chama pra conversar.','Apresentar','Desistir',
 ['+|O investidor gostou e te deu uma bolada.|+1000 >3','-|O investidor riu e foi embora.|-0 <2','-|Sua ideia foi roubada.|-0 <3'],
 ['-|O investidor foi atrás de outro e fez fortuna.|-0 <3','+|Ficou na faculdade e tirou 10.|+100 >2','-|Seus amigos te zoaram.|-0 <2']);
SIT('estudante','🏀','Time de handebol','O time de handebol da faculdade precisa de um goleiro. Você acha que bola é "coisa de nerd".','Aceitar','Recusar',
 ['+|Defendeu 12 gols e virou herói.|+100 >3','!|Tomou uma bolada na cara.|-60 <2','-|Fez gol contra.|-0 <2'],
 ['-|O técnico te achou "covarde".|-0 <2','+|Ficou na plateia e se divertiu.|+0 >2','-|O time perdeu e a culpa foi sua.|-0 <1']);
SIT('estudante','🎨','Exposição de arte','Você é convidado pra expor um trabalho. Ele é um quadro feito com café e lágrimas.','Expor','Esconder',
 ['+|O curador amou e te deu um prêmio.|+500 >3','-|Alguém derrubou café no quadro.|-0 <2','-|Todo mundo achou "estranho".|-0 <2'],
 ['-|O curador pediu o quadro e você não tinha.|-0 <2','+|Guardou e depois vendeu por um bom dinheiro.|+500 >3','-|O quadro foi roubado.|-0 <2']);
SIT('estudante','🏛️','Visita ao Congresso','Sua turma visita o Congresso. Um deputado te chama pra posar numa foto. Ele sorri demais.','Posar','Recusar',
 ['+|A foto viralizou e você ganhou 1000 seguidores.|+50 >3','-|O deputado usou a foto em campanha.|-0 <3','-|Alguém te reconheceu e te xingou.|-0 <2'],
 ['+|Recusou e virou "honesto".|+0 >2','-|O deputado te olhou com raiva.|-0 <2','-|O segurança te seguiu.|-0 <1']);
SIT('estudante','🥘','Culinária na república','Seu colega faz um prato "inovador": miojo com sorvete. Todo mundo é obrigado a provar.','Provar','Recusar',
 ['+|Era surpreendentemente bom.|+0 >3','!|Passou mal e foi pro hospital.|-60 P','-|Vomitou na mesa.|-0 <2'],
 ['+|Ficou de fora e comeu pizza.|+0 >2','-|O colega ficou ofendido.|-0 <2','-|Todo mundo te chamou de "chato".|-0 <1']);
SIT('estudante','🎤','Festa de fim de semestre','A festa de fim de semestre tem DJ, bebida e um professor dançando. Todo mundo olha.','Dançar com o professor','Se esconder',
 ['+|O professor te deu 10 em tudo.|+300 >3','-|Pisou no pé dele.|-0 <2','-|O professor te chamou de "aluno atrevido".|-0 <2'],
 ['+|Ficou escondido e curtiu a festa.|+0 >2','-|O professor te viu e te chamou pra dançar.|-0 <2','-|Ficou sozinho.|-0 <1']);
SIT('estudante','🕯️','Vigília na biblioteca','A biblioteca ficou aberta 24 horas na semana de provas. Você dorme lá. O segurança te acorda.','Pedir pra ficar','Voltar pra casa',
 ['+|O segurança deixou e te deu um café.|+0 >3','-|O segurança disse "regulamento é regulamento".|-0 <2','-|O segurança te expulsou.|-0 <2'],
 ['+|Dormiu em casa e acordou descansado.|+0 >2','-|Perdeu a hora da prova.|-0 <3','-|O ônibus não passava.|-0 <2']);
