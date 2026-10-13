// ======= POR IDADE (idoso 60+, meia-idade 40+/30+, jovem até 25) =======
SIT('*','🧓','Fila preferencial','Você é idoso e a fila preferencial tem 40 jovens "com problema na perna". Você tem a prioridade.','Reclamar alto','Furar a fila',
 ['+|O gerente te atendeu na hora e pediu desculpas.|+0 >2','-|Os jovens te chamaram de "chato".|-0 <1','-|Alguém te deu um empurrão leve.|-0 <1'],
 ['+|Foi atendido primeiro e ainda ganhou café.|+0 >3','-|Todo mundo vaiou.|-0 <2','-|A atendente chamou o gerente e foi constrangedor.|-0 <1'],'60+');
SIT('*','💊','Remédio de pressão','Você é idoso e o remédio de pressão acabou. A farmácia só vende genérico "parecido".','Comprar o genérico','Procurar o original',
 ['+|O genérico funcionou e custou metade.|+50 >2','!|O genérico deu efeito colateral. Foi parar na UPA.|-100 P','-|Pagou R$ 80 por um placebo.|-80'],
 ['+|Achou o original com desconto.|+0 >1','-|Rodou 5 farmácias sem sucesso.|-0 <2','!|A pressão subiu e você passou mal.|-150 P'],'60+');
SIT('*','🏥','Fila do INSS','Você é idoso e foi ao INSS resolver sua aposentadoria. A fila tem 300 pessoas e o site caiu.','Esperar','Voltar amanhã',
 ['+|Foi atendido e ganhou o benefício retroativo.|+800 >3','-|Esperou 8 horas e o sistema caiu de novo.|-0 P','-|O atendente disse "faltou um papel".|-0 <2'],
 ['-|No dia seguinte a fila era pior.|-0 <2','+|Chegou cedo e foi atendido em 20 minutos.|+200 >2','-|Perdeu o ônibus de volta.|-0 <1'],'60+');
SIT('*','👴','Neto no videogame','Seu neto te chama pra jogar videogame. Você nunca viu um controle na vida.','Aceitar','Recusar',
 ['+|Ganhou a partida por sorte e virou lenda familiar.|+0 >3','!|Se empolgou e torceu o pulso.|-60 P','-|Perdeu feio e o neto riu.|-0 <1'],
 ['-|O neto ficou triste e você ficou com culpa.|-0 <1','+|Foi tomar um café e conversou com o vizinho.|+0 >1','-|O neto contou pra família que você é "ranzinza".|-0'],'60+');
SIT('*','🎣','Pescaria da turma','Você é idoso e a turma te chama pra pescaria. O barco é pequeno e o rio tem jacaré.','Ir à pescaria','Recusar',
 ['+|Pescou um peixe de 8 kg e virou herói.|+100 >3','!|Caiu no rio e foi salvo por um amigo.|-100 P','-|Passou o dia sem pegar nada.|-0 <1'],
 ['-|A turma foi e voltou com histórias. Você ficou com inveja.|-0 <1','+|Ficou em casa e dormiu a tarde toda.|+0 >1','-|O amigo ganhou o campeonato de pesca.|-0'],'60+');
SIT('*','🎶','Bailão da terceira idade','O bailão da terceira idade tem forró, samba e bolero. O salão é lotado de gente animada.','Dançar a noite toda','Ficar sentado',
 ['+|Dançou tanto que ganhou o prêmio de "casal do ano".|+80 >3','!|Torceu o joelho numa pirueta.|-80 P','-|Pisou no pé da parceira e foi trocado.|-0 <1'],
 ['+|Conheceu uma pessoa simpática e trocou telefone.|+0 >2','-|Ninguém te tirou pra dançar.|-0 <2','-|Dormiu na cadeira.|-0'],'60+');
SIT('*','🧶','Feira de artesanato','Você vende artesanato na feira. Uma turista quer um xale por R$ 20. O valor justo é R$ 80.','Aceitar a oferta','Pechinchar',
 ['+|Ela ficou feliz e comprou mais 3 peças.|+100 >2','-|Vendeu barato demais e se arrependeu.|-0 <1','-|Ela mentiu que era "só pra ver".|-0'],
 ['+|Fechou a R$ 60 e ganhou o dia.|+60 >2','-|A turista foi embora e ninguém comprou.|-0 <2','-|Outra vendedora vendeu o mesmo por R$ 20.|-0 <1'],'55+');
SIT('*','🍵','Roda de chimarrão','A turma do bairro faz roda de chimarrão toda tarde. Você nunca bebeu. Tá com vergonha.','Provar','Recusar educadamente',
 ['+|Gostou e virou parte da roda.|+0 >3','-|Queimou a língua e saiu correndo.|-0 <1','-|Cuspiu tudo na camisa de alguém.|-0 <2'],
 ['+|A turma entendeu e te deu um suco.|+0 >1','-|Todos te olharam como "esquisito".|-0 <1','-|Ficou de fora das conversas.|-0'],'45+');
SIT('*','📺','Novela das 9','Você é viciado na novela. O capítulo final passa hoje, mas a luz acabou.','Ir à casa do vizinho','Ouvir no rádio',
 ['+|Viu o final e chorou junto com o vizinho.|+0 >2','-|O vizinho era fã da outra novela e brigaram.|-0 <2','-|Chegou no último minuto e perdeu o final.|-0 <1'],
 ['+|O rádio narrou tudo e você chorou.|+0 >2','-|O rádio chiou e você perdeu o final.|-0 <2','-|A pilha acabou no meio.|-0 <1'],'40+');
SIT('*','🚗','Habilitação vencida','Sua habilitação venceu. O DETRAN tem fila. Você jura que dirige bem.','Renovar na fila','Dirigir assim mesmo',
 ['+|Renovou em 20 minutos e saiu feliz.|+0 >2','-|Ficou 4 horas e descobriu que faltava um documento.|-0 P','-|O sistema caiu e você voltou outro dia.|-0 <1'],
 ['-|Foi parado na blitz e levou multa de R$ 1.000.|-1000 P','+|Dirigiu tranquilo e ninguém notou.|+0 >2','-|Bateu o carro e o seguro não cobriu.|-500 <2'],'40+');
SIT('*','🏋️','Academia aos 50','Você decidiu entrar na academia aos 50. O instrutor tem 22 anos e te chama de "tio".','Fazer a aula experimental','Voltar pra casa',
 ['+|Gostou da aula e fez amizade com a turma.|+0 >2','!|Fez agachamento errado e travou as costas.|-100 P','-|O instrutor te zoou na frente de todo mundo.|-0 <1'],
 ['-|Ficou com vergonha e nunca mais voltou.|-0 <1','+|Foi caminhar no parque e se sentiu ótimo.|+0 >1','-|O vizinho te flagrou fugindo.|-0'],'45+');
SIT('*','📱','Primeiro smartphone','Seu filho te deu um smartphone. Você não sabe nem ligar. O tutorial tem 40 passos.','Aprender','Devolver',
 ['+|Aprendeu em 1 hora e já está no TikTok.|+0 >3','-|Apagou todos os contatos sem querer.|-0 <2','-|Caiu num golpe de WhatsApp.|-300'],
 ['-|O filho ficou chateado e te passou um sermão.|-0 <1','+|Ganhou um dinheirinho do filho por "teimosia".|+50 >1','-|O telefone antigo quebrou.|-0 P'],'55+');
SIT('*','💬','Grupo da família','Você entrou no grupo da família. A tia manda 40 vídeos de gatinhos e uma corrente de oração por dia.','Responder tudo','Silenciar',
 ['+|A tia ficou feliz e te deu uma torta.|+30 >2','-|Respondeu "amém" pra uma corrente e foi bloqueado.|-0 <1','-|Mandou áudio de 6 minutos.|-0 <2'],
 ['-|A tia descobriu e te deu um sermão.|-0 <1','+|Ficou em paz por uma semana.|+0 >1','-|Perdeu o convite do almoço de domingo.|-0 <2'],'40+');
SIT('*','🎸','Banda dos anos 80','Sua banda dos anos 80 foi convidada pra tocar numa festa. Vocês não ensaiam há 20 anos.','Aceitar','Recusar',
 ['+|Tocaram como nos velhos tempos e a plateia foi à loucura.|+300 >3','-|O baterista esqueceu o ritmo e ficou tudo mal.|-0 <2','!|O guitarrista quebrou o braço.|-100 P'],
 ['-|A banda terminou por causa disso.|-0 <2','+|Ficaram em casa e lembraram dos velhos tempos.|+0 >1','-|Um jovem tocou no lugar e fez sucesso.|-0'],'45+');
SIT('*','🏡','Casa na praia','Você herdou uma casa na praia. Ela precisa de reforma completa. O preço é R$ 80 mil.','Reformar','Vender',
 ['+|A reforma ficou linda e você ganhou uma fortuna no aluguel.|+800 >3','-|O orçamento dobrou e a obra parou.|-500 <2','-|A casa foi invadida por morcegos.|-300'],
 ['+|Vendeu por R$ 300 mil e fez uma viagem.|+500 >3','-|O comprador deu um golpe.|-1000 <2','-|O imposto comeu 40% do valor.|-400'],'40+');
SIT('*','🎓','Primeiro dia de faculdade','Você começou a faculdade aos 50. Os colegas têm 18 anos e te chamam de "professor".','Fingir que é professor','Ser você mesmo',
 ['+|Ficou famoso na turma e ganhou um apelido legal.|+0 >3','-|Foi pego e riram da brincadeira.|-0 <2','-|O professor te mandou calar.|-0 <1'],
 ['+|Os colegas te adotaram como "tio" e te levaram pro bar.|+0 >3','-|Ninguém falou com você.|-0 <2','-|Foi confundido com o zelador.|-0 <1'],'45+');
SIT('*','💍','Casamento dos filhos','Seu filho vai casar. A cerimônia custa R$ 40 mil. Você tem R$ 20 mil.','Pagar sua parte','Pedir ajuda',
 ['+|A festa foi linda e você chorou de emoção.|+0 >3','-|O DJ errou a música e todo mundo olhou pra você.|-0 <1','-|Sua parte ficou mais cara que o previsto.|-500'],
 ['+|Os outros pais ajudaram e foi uma festa incrível.|+0 >3','-|Ninguém ajudou e o casamento foi mais simples.|-0 <1','-|O sogro tentou assumir o controle.|-0 <2'],'45+');
SIT('*','🧳','Viagem de ônibus','Você viaja 20 horas de ônibus até a casa da filha. O ônibus não tem ar-condicionado.','Viajar assim','Pegar um avião',
 ['+|A viagem foi tranquila e você ganhou um lanche.|+0 >3','-|O ônibus quebrou e você passou 6 horas na estrada.|-0 <2','!|Passou mal e foi parar numa UPA.|-80 P'],
 ['+|O voo foi rápido e a filha te recebeu com bolo.|+0 >3','-|Perdeu o voo por 5 minutos.|-0 <2','-|A mala foi pra outro país.|-300']);
SIT('*','🎤','Karaokê do bairro','O karaokê do bairro está vazio. O dono te pede pra "quebrar o gelo".','Cantar um clássico','Cantar um funk',
 ['+|Cantou "Evidências" e o bar chorou.|+50 >3','-|Esqueceu a letra e travou.|-0 <2','-|A música era do Roberto Carlos e você errou o tom.|-0 <1'],
 ['+|Cantou funk e virou o rei do karaokê.|+100 >3','-|Todos olharam com choque.|-0 <2','-|O dono te pediu pra parar.|-0 <1']);
SIT('*','🎒','Intercâmbio de verão','Aos 20 anos, você ganhou um intercâmbio de 1 mês em Londres. Você mal fala inglês.','Aceitar','Recusar',
 ['+|Aprendeu inglês e ainda arrumou namorado(a).|+200 >3','-|Se perdeu no metrô e dormiu na rua.|-300 <2','-|Perdeu o passaporte.|-500 <2'],
 ['-|Todos os amigos foram e você ficou.|-0 <2','+|Ficou e arrumou um estágio incrível.|+100 >2','-|Seus pais ficaram decepcionados.|-0 <1'],'<=25');
SIT('*','🍻','Primeiro porre','Aos 19 anos, você foi a uma festa e bebeu pela primeira vez. Você não sabe seu limite.','Beber demais','Beber com moderação',
 ['!|Passou mal e foi pro hospital.|-150 P','+|Virou o "rei da festa" e todos te aplaudiram.|+0 >3','-|Contou todos os segredos pra todo mundo.|-0 <3'],
 ['+|Foi sensato e curtiu a festa de verdade.|+0 >2','-|Todos te chamaram de "cabaço".|-0 <1','-|Perdeu o celular na festa.|-250'],'<=25');
SIT('*','🏍️','Primeira moto','Você ganhou uma moto aos 20 anos. Seus pais estão desesperados. Você não sabe nem engatar a marcha.','Sair de moto','Fazer aula primeiro',
 ['+|Passeou a tarde toda e se sentiu o rei da rua.|+0 >3','!|Caiu na primeira curva e ralou o cotovelo.|-100 <2','-|Foi parado na blitz sem habilitação.|-500 P'],
 ['+|Aprendeu e dirigiu com segurança.|+0 >2','-|A aula custou R$ 400 e você ainda caiu.|-400','-|O instrutor era chato e te deu bronca.|-0 <1'],'<=25');
SIT('*','🎮','Streamer iniciante','Aos 18 anos, você decidiu virar streamer. Seu primeiro dia: 3 viewers (todos parentes).','Continuar','Desistir',
 ['+|Um viewer doou R$ 50 e você bombou.|+50 >3','-|A internet caiu e você perdeu a live.|-0 <2','-|Seu avô entrou e xingou todo mundo.|-0 <2'],
 ['-|Os amigos zoaram sua desistência.|-0 <1','+|Voltou a estudar e tirou 10.|+0 >2','-|O equipamento ficou encalhado.|-300'],'<=25');
SIT('*','🏖️','Trote na praia','Na faculdade, o trote é um mergulho de madrugada. A água está a 15 graus.','Mergulhar','Recusar',
 ['+|Mergulhou e virou amigo dos veteranos.|+0 >3','!|Pegou uma gripe de 5 dias.|-80 P','-|Perdeu o celular no mar.|-250'],
 ['-|Os veteranos te chamaram de "frouxo".|-0 <2','+|Ficou na praia e dormiu em paz.|+0 >1','-|Foi zoado pelo resto do semestre.|-0'],'<=25');
SIT('*','🛴','Patinete elétrico novo','Você ganhou um patinete elétrico. A velocidade máxima é 40 km/h. Seus pais mandaram usar capacete.','Usar capacete','Esquecer o capacete',
 ['+|Passeou com segurança e se divertiu.|+0 >3','-|O capacete caiu e quebrou.|-80','-|A bateria acabou no meio da rua.|-0 <2'],
 ['!|Caiu e bateu a cabeça. Foi pro hospital.|-200 P','+|Passeou e ninguém reparou na falta.|+0 >2','-|A polícia multou por falta de capacete.|-150'],'<=25');
SIT('*','📚','Pré-vestibular','Você faz pré-vestibular e a prova é em 2 dias. Seu professor diz "vá dormir cedo". Você ignora.','Estudar a noite toda','Dormir cedo',
 ['+|Memorizou tudo e tirou 9 na prova.|+200 >3','-|Dormiu na prova e perdeu a nota.|-0 <3','-|Passou mal de cafeína.|-0 P'],
 ['+|Dormiu bem e tirou 8 na prova.|+100 >2','-|Acordou atrasado e perdeu a hora.|-0 <3','-|Esqueceu o lápis.|-0 <1'],'<=25');
SIT('*','👗','Formatura do ensino médio','A formatura do ensino médio exige terno ou vestido. Você não tem dinheiro.','Alugar a roupa','Pedir emprestado',
 ['+|A roupa ficou perfeita e você virou a estrela da noite.|+0 >3','-|A roupa rasgou na dança.|-200','-|Derramaram suco e você pagou a lavagem.|-100'],
 ['+|O colega te emprestou e você arrasou.|+0 >2','-|A roupa era 2 números maior.|-0 <1','-|O colega pediu de volta no meio da festa.|-0 <2'],'<=25');
SIT('*','🎤','Calouro de sábado','Aos 22 anos, você foi chamado pra ser jurado de um concurso de calouros na faculdade.','Aceitar','Recusar',
 ['+|Foi um jurado carismático e ganhou fama.|+100 >3','-|Zoou um calouro que era sobrinho do diretor.|-0 <3','-|Deu nota alta pra um candidato horrível e todo mundo vaiou.|-0 <2'],
 ['+|Recusou e evitou o problema que estourou depois.|+0 >2','-|Foi chamado de "chato" pela turma.|-0 <1','-|Ninguém te convidou mais.|-0'],'<=25');
SIT('*','🧳','Primeira viagem sozinho','Aos 21 anos, você faz sua primeira viagem sozinho. Seu destino: Rio de Janeiro (de outro estado).','Se jogar na viagem','Planejar tudo',
 ['+|Foi uma aventura incrível e você fez amigos.|+100 >3','-|Foi assaltado na primeira noite.|-300 <2','-|Perdeu o ônibus de volta.|-0 <2'],
 ['+|Seguiu o planejamento e tudo deu certo.|+0 >2','-|O planejamento falhou e você ficou perdido.|-0 <2','-|O hostel era um pesadelo.|-100']);
