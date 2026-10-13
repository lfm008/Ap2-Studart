// ======= CLASSE ALTA (parte 2) e ALTO PADRÃO (parte 2) =======
SIT('alta','🏰','Condomínio fechado','O condomínio de luxo proibiu "pessoas sem camisa" nas áreas comuns. Você foi pego na piscina de bermuda.','Pedir desculpas','Rebater com advogado',
 ['+|O síndico aceitou e te liberou com um sorriso.|+0 >2','-|Foi multado pesado e proibido na piscina por 1 mês.|-300','-|Foi chamado de "elemento suspeito".|-0 <1'],
 ['+|O advogado achou uma brecha e te livrou de tudo.|+200 >2','-|O advogado cobrou uma fortuna e perdeu.|-800','-|O síndico te processou por difamação.|-300']);
SIT('alta','🚤','Lancha quebrada','Sua lancha de R$ 2 milhões pifou no meio da Baía. O seguro diz "não cobre desgaste natural".','Chamar o guincho náutico','Pedir carona a outro iate',
 ['+|O guincho chegou rápido e te levou pro cais de graça.|+0 >2','-|Cobrou uma fortuna pelo "serviço premium".|-800','-|Demorou 4 horas e você pegou sol demais.|-0 P'],
 ['+|O dono do outro iate era seu sócio e te levou pra festa.|+300 >3','-|O iate era de um inimigo. Ele te humilhou.|-0 <2','-|Todo mundo filmou o seu vexame.|-0 <1']);
SIT('alta','🛫','Voo cancelado','Seu voo executivo foi cancelado. A companhia oferece um voo comercial. Você nunca entrou num.','Aceitar o voo comercial','Alugar um jatinho',
 ['+|O voo foi tranquilo e você reencontrou a humildade.|+0 >2','-|O voo atrasou 5 horas e você passou mal.|-0 P','-|Perdeu a mala e teve que comprar tudo de novo.|-400'],
 ['+|O jatinho te levou em estilo e fechou o negócio.|+500 >3','-|O jatinho custou os olhos da cara e o negócio caiu.|-1500','-|O piloto errou o destino.|-0 <2']);
SIT('alta','🍽️','Jantar de negócios','O sócio escolhe o restaurante: "É um lugar sofisticado". A conta pode chegar a R$ 8.000.','Pagar a conta','Dividir',
 ['+|O sócio ficou emocionado e te deu 5% de participação.|+500 >2','-|A conta foi absurda e o sócio ainda pediu sobremesa.|-1400','-|O cartão foi recusado. Mico internacional.|-0 <2'],
 ['-|O sócio se ofendeu e te chamou de "pão-duro".|-0 <1','+|Todos concordaram e o jantar foi ótimo.|+0 >2','-|Descobriu que a sua parte era o dobro da dele.|-400']);
SIT('alta','👠','Boutique de luxo','Você entra numa boutique. A vendedora te olha de cima a baixo. Você veste bermuda e chinelo.','Fingir que é rico','Mostrar o cartão black',
 ['+|A vendedora caiu na conversa e te deu um desconto de 20%.|+200 >1','-|Ela chamou o segurança.|-0 <1','-|Descobriu que era um golpe e você teve que explicar.|-100'],
 ['+|Ela mudou a atitude em 2 segundos. Te serviu champanhe.|+0 >2','-|O cartão foi recusado por segurança. Constrangimento total.|-0 <2','-|Gastou uma fortuna em uma bolsa que tem cheiro de plástico.|-2000']);
SIT('alta','🏇','Clube de polo','Seu clube de polo vai receber o príncipe. Todos esperam que você o receba com uma "frase de efeito".','Falar em inglês','Falar em português',
 ['+|O príncipe adorou seu sotaque e te convidou pra um chá.|+400 >3','-|Disse uma bobagem e o príncipe riu.|-0 <2','-|Confundiu "prince" com "prize". Mico real.|-100 <1'],
 ['+|Ele entendeu e agradeceu em português perfeito.|+0 >2','-|O intérprete errou e disse que você tinha um cachorro.|-0 <1','-|Todo mundo fingiu que não ouviu.|-0']);
SIT('alta','🥂','Camarote da Sapucaí','O camarote da Sapucaí custa R$ 5.000. O ar-condicionado pifou e o bufê acabou na primeira hora.','Reclamar','Aproveitar a folia',
 ['+|O organizador te deu um camarote melhor de brinde.|+0 >2','-|Reclamou tanto que foi expulso.|-0 <2','-|Todos os outros também reclamaram. Virou confusão.|-0 <1'],
 ['+|Dançou a noite toda e conheceu um parceiro de negócios.|+500 >3','-|Derramaram champanhe no seu terno.|-100','-|Perdeu a carteira na euforia.|-300']);
SIT('alta','🏠','Casa de campo em Petrópolis','Sua casa de campo está com uma goteira. O caseiro disse "é só uma gotinha". O teto caiu.','Chamar a empreiteira','Fazer do jeito antigo',
 ['+|A empreiteira consertou tudo em 2 dias e te deu desconto.|+0 >2','-|Cobrou uma fortuna pra trocar 3 telhas.|-1000','-|O trabalho atrasou 4 meses.|-0 P'],
 ['!|O caseiro caiu do telhado e você pagou o hospital.|-600 <1','+|O caseiro era craque e economizou uma bolada.|+500 >2','-|Piorou. A casa precisa de reforma total.|-1200']);
SIT('alta','⛵','Regata de veleiros','Você foi convidado pra uma regata. O veleiro é do seu rival. Todo mundo vai estar lá.','Participar','Fingir que está doente',
 ['+|Ganhou a regata e humilhou o rival.|+800 >3','!|Caiu no mar e engoliu metade do Atlântico.|-100 <2','-|O veleiro virou e você virou meme.|-300 <1'],
 ['-|O rival descobriu a mentira e te expôs.|-0 <2','+|Ficou em casa e foi o único a não passar vergonha.|+0 >1','-|O rival ganhou e fez uma festa no seu bairro.|-0']);
SIT('alta','📺','Entrevista exclusiva','Uma revista de luxo quer te entrevistar sobre "sucesso, humildade e vinhos". Você não tem nenhum dos três.','Aceitar','Recusar',
 ['+|A matéria foi um sucesso e você virou "a nova face do Rio".|+500 >3','-|O repórter descobriu seu passado e publicou tudo.|-600 <2','-|A foto saiu com o seu cachorro e ele roubou a cena.|-0 <1'],
 ['-|A revista publicou uma matéria sobre seu rival.|-0 <1','+|Ficou fora e economizou um escândalo.|+0 >2','-|O repórter te perseguiu em casa.|-100']);
SIT('alta','💎','Joia na Joalheria','A joalheria promete uma joia exclusiva. O vendedor fala "só 3 no mundo". O preço é R$ 200 mil.','Comprar','Pedir desconto',
 ['+|A joia valorizou 40% em 1 ano.|+800 >2','-|Era vendida em outras 400 lojas. Você foi enganado.|-1500','-|Perdeu a joia no aeroporto.|-2000'],
 ['+|O vendedor deu 25% de desconto e uma taça de champanhe.|+400 >2','-|O vendedor ficou ofendido e te mandou embora.|-0 <1','-|Descobriu que outro cliente levou a joia.|-0']);
SIT('alta','🚗','Carro blindado','Você precisa blindar seu carro. A empresa oferece 3 pacotes: "básico", "premium" e "paranoico".','Pacote básico','Pacote paranoico',
 ['+|O básico foi suficiente e você economizou uma bolada.|+300 >2','-|Foi assaltado na semana seguinte. A blindagem era de papelão.|-1500','-|O carro ficou tão pesado que quebrou o eixo.|-500'],
 ['-|O carro ficou tão blindado que você não consegue abrir a porta.|-300 P','+|Ficou invulnerável e se sentiu um presidente.|+0 >2','-|Gastou uma fortuna e o seguro não cobriu.|-1200']);
SIT('alta','🛍️','Compras em Miami','Você vai a Miami fazer compras. A alfândega do aeroporto é um temor. Você trouxe 14 malas.','Declarar tudo','Tentar passar',
 ['+|A alfândega te liberou rápido e você ainda ganhou um brinde.|+0 >3','-|Pagou uma fortuna em impostos.|-3000','-|Perdeu 2 malas pro extravio.|-1500'],
 ['-|Foi parado e a Receita confiscou tudo.|-5000 P','+|Passou sem problemas. O fiscal estava distraído.|+500 >3','-|Foi multado pesado.|-2000']);
SIT('alta','🥼','Médico de família','Seu médico particular cobra R$ 2.000 por consulta. Ele diz que você "deve parar de trabalhar".','Aceitar o conselho','Ignorar',
 ['+|Tirou férias e voltou renovado.|+300 >2','-|Perdeu um grande negócio enquanto estava fora.|-1000','-|O médico cobrou caríssimo por "acompanhamento especial".|-500'],
 ['!|Teve um piripaque no meio do escritório.|-800 P','+|Fechou o maior contrato da vida.|+800 >3','-|O médico te deu uma bronca de 1 hora.|-0']);
SIT('alta','🐎','Cavalo de corrida','Você comprou um cavalo de corrida por R$ 400 mil. O jóquei garante "é o novo campeão".','Apostar nele','Vender o cavalo',
 ['+|O cavalo venceu e você ganhou uma bolada milionária.|+3000 >3','-|O cavalo parou na linha de chegada pra comer capim.|-0 <2','-|O cavalo escorregou e machucou a perna.|-1000'],
 ['+|Vendeu pelo dobro e o comprador ficou feliz.|+1500 >2','-|O cavalo ganhou no dia seguinte. Você chorou.|-0 <2','-|Alguém roubou o cavalo.|-2000']);
SIT('alta','👑','Baile de gala','Você foi convidado pro baile de gala mais exclusivo do ano. Falta o par. Todos os seus amigos têm compromisso.','Ir sozinho','Contratar um acompanhante',
 ['+|Todos acharam sua solidão "misteriosa". Ficou famoso.|+300 >3','-|Passou a noite no canto, sem ninguém falar com você.|-0 <2','-|Alguém te confundiu com um garçom.|-0 <1'],
 ['+|O acompanhante foi charmoso e você virou o centro das atenções.|+400 >3','-|O acompanhante roubou a carteira do seu vizinho.|-500','-|O acompanhante era seu sogro. Ficou muito sem graça.|-0 <3']);
SIT('alta','🏖️','Casa no Caribe','Um corretor oferece uma casa em Punta Cana por R$ 5 milhões. "Vista pro mar e papel passado".','Comprar','Pesquisar antes',
 ['+|A casa valorizou e você virou investidor internacional.|+2000 >3','-|A casa tinha um dono de verdade. Perdeu tudo.|-5000','-|O papel era falso. O corretor sumiu.|-3000'],
 ['+|Descobriu a fraude e denunciou. Ganhou uma recompensa.|+500 >2','-|A casa foi vendida pra outro enquanto pesquisava.|-0 <2','-|O corretor te ameaçou.|-0 <1']);
SIT('alta','🥩','Churrascaria de luxo','A churrascaria serve cortes de 40 dias de maturação. O garçom explica cada corte por 15 minutos.','Ouvir tudo','Pedir direto',
 ['+|O garçom ficou emocionado e te deu um corte secreto.|+0 >2','-|Ficou com fome enquanto ele explicava.|-0 P','-|Cobrou R$ 700 por uma porção de 200 g.|-700'],
 ['+|Acertou no corte e o garçom disse "você é do ramo".|+0 >2','-|O corte veio errado e frio.|-300','-|O garçom te chamou de "bruto".|-0 <1']);
// ---- alto padrão
SIT('alto','🏛️','Comissão parlamentar','Você preside uma comissão. Uma empreiteira envia uma "caixa de presente" antes da votação.','Aceitar a caixa','Devolver',
 ['+|A caixa tinha uma obra de arte valiosa. Ninguém viu.|+1500 >2','-|A caixa estava sendo monitorada. Prisão preventiva.|-3000 P','-|A empreiteira cobrou o favor com juros.|-1000'],
 ['+|Ficou famoso por ser honesto. As pesquisas subiram.|+800 >3','-|A empreiteira virou inimiga e te investigou.|-1000 <2','-|Foi chamado de "ingênuo" por seus aliados.|-0 <1']);
SIT('alto','🎖️','Condecoração oficial','Você vai receber uma condecoração por "serviços prestados à nação". Ninguém sabe quais.','Aceitar com orgulho','Recusar com humildade',
 ['+|Foi aplaudido de pé e ganhou uma medalha de ouro.|+500 >3','-|Um repórter perguntou "serviços de quê?" e você gaguejou.|-0 <2','-|A medalha era de plástico.|-0'],
 ['+|Todos te chamaram de "humilde" e as pesquisas subiram.|+600 >2','-|Todos acharam estranho e te investigaram.|-300 <2','-|A medalha foi pro seu rival.|-0 <1']);
SIT('alto','🏝️','Fim de semana na ilha','Um empresário te convida pra um fim de semana numa ilha privada. A pauta é "negócios e relaxamento".','Aceitar','Recusar',
 ['+|Fechou o maior contrato da vida e relaxou na piscina.|+1500 >3','-|O fim de semana foi filmado por um drone.|-2000 <2','-|Voltou sem camisa e com uma tatuagem estranha.|-0 <2'],
 ['+|Ficou em casa e evitou o escândalo que estourou no domingo.|+500 >3','-|Todos acharam suspeito você não ir.|-0 <1','-|O empresário virou inimigo.|-300']);
SIT('alto','📱','Conta oficial no Instagram','Seu assessor posta algo errado no seu perfil: "Nosso governo é o melhor da galáxia". 3 milhões de pessoas viram.','Apagar rápido','Assumir',
 ['+|Apagou a tempo. Só 2 milhões viram.|+0 >2','-|O print viralizou. Virou meme.|-300 <2','-|Alguém recortou e fez um vídeo satírico.|-0 <1'],
 ['+|Assumiu e o povo aplaudiu a coragem.|+500 >3','-|Virou piada nacional.|-500 <2','-|O adversário usou o post na campanha.|-300']);
SIT('alto','🏛️','Votação do orçamento','O orçamento do ano tem uma emenda de R$ 50 milhões "para pesquisa de peixes de aquário".','Votar a favor','Votar contra',
 ['+|A emenda passou e seus aliados te deram um jantar.|+1000 >2','-|A imprensa descobriu e te chamou de "ministro dos peixes".|-500 <2','-|Alguém criou um meme com seu nome.|-0 <1'],
 ['+|A emenda caiu e você virou "o guardião do dinheiro".|+800 >3','-|Os aliados te abandonaram.|-500 <2','-|Foi acusado de "ser inimigo dos peixes".|-0']);
SIT('alto','🛩️','Jatinho da FAB','Você precisa de um voo urgente. O jatinho da FAB está disponível, mas só pra "serviço público".','Pegar o jatinho','Pegar o voo comercial',
 ['+|Chegou rápido e ninguém reclamou.|+0 >3','-|Um repórter flagrou a viagem. Escândalo.|-1000 <2','-|O jatinho foi usado por outro político e você levou a culpa.|-300'],
 ['+|Foi de voo comercial e a população te aplaudiu.|+300 >2','-|O voo atrasou e você perdeu a reunião.|-0 <2','-|Alguém te reconheceu e te vaiou.|-0 <1']);
SIT('alto','📊','Pesquisa de popularidade','Sua pesquisa de popularidade caiu 8 pontos. Seu marqueteiro grita "temos que fazer algo!".','Fazer uma obra','Fazer uma live',
 ['+|A obra foi inaugurada em 2 semanas. Aprovação subiu.|+1000 >3','-|A obra caiu antes da inauguração.|-1500 <2','-|A obra estourou o orçamento.|-500'],
 ['+|A live viralizou e você ganhou 5 pontos.|+500 >2','-|Você tropeçou e caiu ao vivo.|-300 <2','-|Seu cachorro apareceu e roubou a cena.|-0 <1']);
SIT('alto','🎤','Comício popular','O comício vai ter 100 mil pessoas. O palco é uma carroceria. Você prometeu "mudar o Brasil".','Fazer um discurso inflamado','Fazer um discurso sóbrio',
 ['+|O povo aplaudiu de pé. Pesquisa subiu 6 pontos.|+800 >3','-|Você disse "o Brasil é nosso" e errou o país.|-300 <2','-|Alguém jogou um sapato no palco.|-0 <1'],
 ['+|Todos acharam sensato. Você ganhou respeito.|+500 >2','-|O povo dormiu e saiu no meio.|-0 <2','-|A imprensa disse "discurso sem vida".|-0']);
SIT('alto','🚗','Carro oficial','Seu carro oficial tem uma mancha. O motorista diz "foi um buraco". A prefeitura exige conserto.','Consertar com verba oficial','Pagar do bolso',
 ['+|O conserto foi aprovado e ninguém reparou.|+0 >2','-|A imprensa reparou: "carro oficial custa mais que um apartamento".|-500 <2','-|Foi investigado por desvio.|-1500 P'],
 ['+|A população achou honesto e aplaudiu.|+300 >2','-|Ficou sem o carro por 2 semanas.|-0 <2','-|Alguém filmou você consertando sozinho.|-0']);
SIT('alto','🎰','Cassino clandestino','Um aliado te convida pra um cassino clandestino. "Só aposta alta, só pra gente do alto escalão".','Entrar e apostar','Ficar de fora',
 ['+|Ganhou uma bolada na roleta.|+2500 >3','-|Perdeu uma fortuna e o carro oficial.|-3000','-|A polícia fez uma batida. Foi preso.|-2000 P'],
 ['+|Ficou de fora e salvou a reputação.|+500 >2','-|O aliado ficou ofendido e te traiu.|-500 <2','-|Alguém te viu na porta e fez fofoca.|-0 <1']);
SIT('alto','🏦','Banco quebrado','O banco do seu amigo quebrou. Ele pede ajuda pra "evitar o pânico". Você tem acesso ao cofre.','Ajudar o amigo','Ficar longe',
 ['+|Salvou o banco e ganhou um favor eterno.|+1500 >3','-|Foi investigado como cúmplice.|-2000 P','-|O amigo sumiu e você ficou com o prejuízo.|-1000'],
 ['+|Ficou longe e passou ileso do escândalo.|+500 >2','-|O amigo te acusou publicamente.|-1000 <2','-|A imprensa disse que você fugiu.|-0 <1']);
SIT('alto','🎖️','Visita ao exterior','Você viaja pra uma conferência internacional. O hotel é de 5 estrelas. O orçamento é de uma classe média.','Gastar tudo','Economizar',
 ['-|A imprensa descobriu: "luxo às custas do povo".|-1500 <2','+|Ninguém viu e foi uma viagem inesquecível.|+0 >3','-|Gastou além e teve que devolver parte.|-800'],
 ['+|Todos te chamaram de "exemplo" e você ganhou respeito.|+400 >2','-|O hotel barato era um pesadelo.|-0 <1','-|Foi assaltado em Paris.|-500']);
