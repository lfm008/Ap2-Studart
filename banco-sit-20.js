// ======= FECHAMENTO 2 =======
SIT('*','🥤','Refrigerante gelado','Você está com muita sede. Uma máquina de refrigerante te oferece "latinha por R$ 8". Você tem R$ 7,50.','Procurar 50 centavos','Pedir emprestado',
 ['+|Achou uma moeda na rua e bebeu feliz.|+0 >2','-|Procurou 20 minutos e nada.|-0 <1','-|Alguém pegou a moeda antes.|-0 <1'],
 ['+|Um estranho pagou e te chamou de "irmão".|+0 >2','-|Ninguém emprestou.|-0 <1','-|Todos olharam torto.|-0 <1']);
SIT('*','🚶','Atalho perigoso','Um atalho te economiza 20 minutos. Ele passa por um terreno baldio com um cachorro latindo.','Pegar o atalho','Dar a volta',
 ['+|O cachorro era mansinho e você chegou cedo.|+0 >3','!|O cachorro te mordeu.|-100 P','-|Pisou numa poça e sujou o sapato.|-30'],
 ['+|Achou uma moeda de R$ 1 no caminho.|+1 >1','-|Perdeu 20 minutos.|-0 <1','-|Foi abordado por um desconhecido.|-100']);
SIT('*','🧃','Lanche da escola','Seu filho esquece o lanche. A escola cobra R$ 15 por um sanduíche de queijo.','Pagar','Levar o lanche',
 ['+|O filho amou o sanduíche.|+0 >2','-|O sanduíche tinha gosto de borracha.|-15','-|O filho ficou doente.|-60 P'],
 ['+|Levou e o filho ficou feliz.|+0 >2','-|Perdeu a hora de trabalho.|-0 <2','-|O lanche caiu no chão.|-0 <1']);
SIT('*','🏃','Atrasado pro trabalho','Você acorda 40 minutos atrasado. O trânsito está parado. Um mototáxi se oferece.','Pegar o mototáxi','Esperar o ônibus',
 ['+|Chegou a tempo e o chefe nem notou.|+0 >3','!|Caiu da moto na curva.|-100 <2','-|O mototaxista cobrou R$ 80.|-80'],
 ['-|Chegou 1 hora atrasado.|-0 <2','+|O ônibus veio vazio e voando.|+0 >3','-|O ônibus quebrou.|-0 <2']);
SIT('*','📞','Número desconhecido','Um número desconhecido liga 12 vezes. Você finalmente atende. É uma pesquisa de satisfação.','Responder','Desligar',
 ['+|Ganhou um brinde por responder.|+50 >2','-|A pesquisa durou 40 minutos.|-0 P','-|Era golpe de telemarketing.|-100'],
 ['+|Desligou e dormiu em paz.|+0 >2','-|O número ligou mais 12 vezes.|-0 <2','-|Perdeu uma oferta boa.|-0 <1']);
SIT('*','🛗','Elevador lotado','O elevador está lotado e o peso máximo é 400 kg. Uma voz robótica diz "excesso de carga".','Sair do elevador','Ficar',
 ['+|Esperou e subiu sozinho.|+0 >2','-|Esperou 15 minutos.|-0 <1','-|O elevador quebrou.|-0 P'],
 ['-|O elevador travou entre dois andares.|-0 P','+|O elevador subiu devagar e todos riram.|+0 >2','-|Alguém peidou.|-0 <1']);
SIT('*','🍕','Pizza com ananás','O amigo pede uma pizza de ananás. Você acha um crime. O resto do grupo adora.','Aceitar','Pedir outra',
 ['+|A pizza era surpreendentemente boa.|+0 >2','-|Era horrível.|-0 <1','-|Brigaram.|-0 <2'],
 ['+|Pediram duas e todos ficaram felizes.|+0 >2','-|A conta dobrou.|-60','-|O amigo ficou ofendido.|-0 <1']);
SIT('*','🎶','Música de elevador','Você fica preso no elevador por 1 hora. A música é "Garota de Ipanema" em versão instrumental.','Cantar junto','Chorar',
 ['+|Todos cantaram juntos e viraram amigos.|+0 >3','-|Desafinou e todos riram.|-0 <2','-|A música terminou e começou outra pior.|-0 <1'],
 ['+|Chorou e ganhou abraços.|+0 >2','-|Ninguém ajudou.|-0 <2','-|O bombeiro chegou.|-0 <1']);
SIT('*','🥗','Salada do restaurante','O restaurante serve salada com "toque chef": 3 folhas e um ovo. Custa R$ 60.','Pagar','Reclamar',
 ['+|A salada era uma obra de arte.|+0 >2','-|Tinha uma lagarta.|-0 P','-|Passou fome.|-0 <1'],
 ['+|O chef te deu outra de brinde.|+0 >2','-|O garçom te olhou torto.|-0 <1','-|Foi expulso.|-0 <2']);
SIT('*','🚪','Porta que não abre','A porta do banheiro emperra. Você está preso há 40 minutos. Seu celular tá do lado de fora.','Gritar','Arrombar',
 ['+|Alguém ouviu e te salvou.|+0 >3','-|Ninguém ouviu.|-0 P','-|Ficou rouco.|-0 <2'],
 ['!|Machucou o ombro.|-100 <2','+|A porta quebrou e você virou herói.|+0 >2','-|Pagou R$ 500 pela porta.|-500']);
SIT('*','🎒','Mochila pesada','Você anda 3 km com uma mochila de 15 kg. Ninguém te ajuda. Todo mundo olha.','Continuar','Pedir ajuda',
 ['+|Chegou e se sentiu forte.|+0 >3','!|Machucou as costas.|-80 P','-|A mochila rasgou.|-80'],
 ['+|Um desconhecido ajudou.|+0 >2','-|Ninguém ajudou.|-0 <2','-|Alguém te xingou.|-0 <1']);
SIT('*','🌳','Árvore caída','Uma árvore caiu e bloqueou a rua. Ninguém sabe quem vai remover. Todos reclamam.','Ajudar a remover','Esperar a prefeitura',
 ['+|Todos ajudaram e a rua abriu.|+0 >3','!|Machucou a mão.|-60 P','-|A árvore era protegida e você foi multado.|-300'],
 ['-|Esperou 3 dias.|-0 P','+|A prefeitura chegou rápido.|+0 >2','-|A prefeitura nunca veio.|-0 <3']);
SIT('*','🚤','Aluguel de jet ski','Você aluga um jet ski. O instrutor diz "só 15 minutos". Você quer 2 horas.','Obedecer','Desobedecer',
 ['+|Curtiu os 15 minutos e foi embora.|+0 >2','-|O instrutor cobrou por 30.|-100','-|O jet ski quebrou.|-300'],
 ['+|Curtiu 2 horas e ninguém notou.|+0 >3','-|Foi multado pela marinha.|-500','!|Caiu e se machucou.|-100 P']);
SIT('*','🎢','Roda-gigante parada','A roda-gigante para com você no ponto mais alto. O operador diz "só 5 minutinhos".','Esperar','Gritar',
 ['+|A roda voltou e você ganhou um passeio extra.|+0 >2','-|Ficou 2 horas lá em cima.|-0 P','-|Passou mal.|-30'],
 ['+|Alguém te viu e chamou o operador.|+0 >2','-|Ficou rouco.|-0 <2','-|Todos riram.|-0 <1']);
SIT('*','🍉','Melancia roubada','Um homem foge com uma melancia gigante. O dono grita "pega ladrão!".','Pegar o ladrão','Ficar quieto',
 ['+|Pegou e ganhou uma fatia.|+0 >2','!|Tropeçou e caiu.|-50 <2','-|O ladrão era o filho do dono.|-0 <2'],
 ['+|Ficou fora do problema.|+0 >2','-|O dono te acusou de cúmplice.|-100','-|Perdeu a melancia.|-0 <1']);
SIT('*','🕶️','Celebridade na rua','Uma celebridade passa de óculos escuros. Todos tiram foto. Ela te vê e diz "oi".','Responder','Fingir que não viu',
 ['+|Ela te deu um autógrafo.|+0 >3','-|Ela te confundiu com outro.|-0 <2','-|Alguém te empurrou.|-0 <1'],
 ['-|Ela ficou ofendida.|-0 <2','+|Ela riu e foi embora.|+0 >1','-|Todos olharam pra você.|-0 <1']);
SIT('*','🥘','Cozinheiro misterioso','Uma senhora te oferece um prato "de família". Ela diz "é segredo". O prato tem cheiro estranho.','Provar','Recusar',
 ['+|Era o melhor prato da vida.|+0 >3','!|Passou mal.|-60 P','-|Era uma pegadinha.|-0 <2'],
 ['+|Ela te deu outro de consolação.|+0 >2','-|Ela se ofendeu.|-0 <2','-|Todos riram.|-0 <1']);
SIT('*','🛏️','Hotel barato','O hotel de R$ 80 a noite promete "vista pro mar". A vista é de um muro, mas "dá pra ouvir as ondas".','Aceitar','Procurar outro',
 ['+|Dormiu bem e acordou feliz.|+0 >2','-|Tinha baratas.|-0 <2','-|O chuveiro era frio.|-0 <1'],
 ['+|Achou um hotel melhor.|+0 >2','-|Todos lotados.|-0 <2','-|Dormiu no carro.|-0 P']);
SIT('*','📷','Câmera escondida','Você acha uma câmera escondida no seu quarto de hotel. Ela está ligada. Você está de cueca.','Chamar a polícia','Cobrir a câmera',
 ['+|A polícia prendeu o dono.|+500 >3','-|A polícia demorou 4 horas.|-0 P','-|O dono negou.|-0 <2'],
 ['+|Cobriu e dormiu em paz.|+0 >2','-|O dono viu e te cobrou.|-300','-|Virou meme.|-0 <2']);
SIT('*','🎮','Fliperama antigo','Você acha um fliperama de 1985. Ele funciona. Todos querem jogar. Você tem 4 fichas.','Jogar','Emprestar',
 ['+|Bateu o recorde e virou lenda.|+100 >3','-|Perdeu todas as fichas.|-0 <2','-|A máquina travou.|-0 <1'],
 ['+|Todos agradeceram.|+0 >2','-|Ninguém devolveu.|-0 <1','-|A máquina quebrou.|-0 <1']);
SIT('*','🍰','Confeitaria secreta','Uma confeitaria secreta só abre às 2h. O dono diz "só pra quem sabe". Você sabe.','Entrar','Ir embora',
 ['+|Comeu o melhor doce da vida.|+0 >3','-|Pagou R$ 100 por um brigadeiro.|-100','-|Era uma pegadinha.|-0 <2'],
 ['+|Dormiu em paz.|+0 >2','-|Todos souberam e te zoaram.|-0 <2','-|Perdeu a chance.|-0 <1']);
SIT('*','🏆','Concurso de comilança','O bar faz um concurso de comilança de feijoada. O prêmio é R$ 500. Você tem fome.','Participar','Torcer',
 ['+|Comeu 6 pratos e ganhou.|+500 >3','!|Passou mal e foi pro hospital.|-100 P','-|Perdeu e pagou a conta.|-80'],
 ['+|Torceu e ganhou uma cerveja.|+0 >2','-|Foi chamado de "fraco".|-0 <1','-|Alguém passou mal do seu lado.|-0 <1']);
SIT('*','🎻','Violinista de aniversário','Você contrata um violinista pra surpresa de aniversário. Ele chega às 3h da manhã e toca "Parabéns".','Aceitar','Mandar embora',
 ['+|A surpresa emocionou todo mundo.|+0 >3','-|O vizinho chamou a polícia.|-100','-|O violinista cobrou o triplo.|-300'],
 ['-|O violinista ficou ofendido.|-0 <2','+|Remarcou e foi perfeito.|+0 >2','-|Perdeu o dinheiro.|-100']);
SIT('*','🚗','Parada em posto','O posto de gasolina cobra R$ 8 o litro. Você tem R$ 30. O frentista te olha com pena.','Colocar R$ 30','Procurar outro',
 ['-|Colocou 3 litros e quase não chegou.|-30','+|O frentista te deu 1 litro de brinde.|+0 >2','-|Pagou e a bomba errou.|-60'],
 ['+|Achou um posto mais barato.|+0 >2','-|Ficou sem gasolina.|-0 P','-|Rodou 10 km à toa.|-0 <2']);
SIT('*','🥁','Bumbo do vizinho','O vizinho toca bumbo às 7h. Você grita pela janela. Ele grita "bom dia!".','Rir','Reclamar',
 ['+|Ele parou e te agradeceu.|+0 >2','-|Ele tocou mais alto.|-0 <1','-|Ele te convidou pra tocar.|-0 <1'],
 ['-|Ele ficou ofendido.|-0 <2','+|Ele atendeu e baixou.|+0 >2','-|O síndico te multou.|-100']);
SIT('*','🏍️','Motoboy lendário','Um motoboy te entrega uma pizza em 4 minutos. Ele diz "voei". Ele está com a moto quebrada.','Dar gorjeta','Reclamar do estado',
 ['+|Ele agradeceu e te deu um desconto.|+30 >2','-|Deu R$ 20 e ele pediu mais.|-20','-|Ele sumiu com a gorjeta.|-20'],
 ['-|Ele ficou furioso e te xingou.|-0 <2','+|Ele pediu desculpa e consertou.|+0 >2','-|A pizza chegou fria.|-0 <1']);
SIT('*','🎨','Grafiteiro na parede','Um grafiteiro pinta o muro da sua casa sem pedir. O desenho é incrível. Mas é ilegal.','Pagar a ele','Reclamar',
 ['+|Virou atração turística e te deu fama.|+300 >3','-|Ele cobrou R$ 500.|-500','-|A prefeitura multou você.|-300'],
 ['-|Ele pintou outro.|-0 <2','+|Ele apagou e te pediu desculpas.|+0 >2','-|A polícia chegou.|-0 <2']);
SIT('*','🚪','Porteiro dorminhoco','O porteiro dorme no plantão. Uma pessoa estranha entra no prédio. Todos dormem.','Chamar a polícia','Acordar o porteiro',
 ['+|A polícia prendeu o invasor.|+100 >3','-|Era o novo morador.|-0 <2','-|A polícia demorou.|-0 <2'],
 ['+|Ele acordou e resolveu.|+0 >2','-|Ele se assustou e caiu.|-0 <1','-|O invasor fugiu.|-0 <2']);
SIT('*','🍞','Padeiro misterioso','O padeiro da esquina só vende pão às 4h da manhã. Ele diz "é a hora da fornada".','Comprar','Ignorar',
 ['+|O pão era divino e você virou freguês.|+0 >3','-|Dormiu no meio da fila.|-0 <2','-|O pão estava queimado.|-0 <1'],
 ['+|Dormiu em paz.|+0 >2','-|Ficou com saudade do pão.|-0 <1','-|Perdeu a fornada.|-0 <1']);
SIT('*','🚌','Ônibus errado','Você pega o ônibus errado e vai parar em Campo Grande. Você mora no Leblon.','Voltar','Explorar',
 ['+|Voltou e chegou cedo.|+0 >2','-|Perdeu 4 horas.|-0 P','-|Gastou R$ 40 de ônibus.|-40'],
 ['+|Achou um boteco ótimo.|+0 >2','-|Foi assaltado.|-150','-|Se perdeu mais ainda.|-0 <3']);
SIT('*','🏖️','Jogo de frescobol','Você joga frescobol com um desconhecido. Ele é muito bom. Você é péssimo.','Continuar','Parar',
 ['+|Aprendeu e fez um amigo.|+0 >3','-|Acertou o rosto dele.|-0 <2','-|Perdeu a bolinha no mar.|-20'],
 ['-|Ele te chamou de "perna de pau".|-0 <1','+|Ele te deu um conselho.|+0 >2','-|Todos riram.|-0 <1']);
SIT('*','🧴','Protetor solar','Você esquece o protetor solar. Um vendedor te oferece "protetor fator 100". Custa R$ 80.','Comprar','Ficar na sombra',
 ['+|Ficou intacto e dourado.|+0 >2','-|Era óleo de cozinha.|-80','-|Queimou do mesmo jeito.|-80 P'],
 ['+|Achou uma sombra perfeita.|+0 >2','-|A sombra sumiu.|-0 <2','!|Queimou feio.|-60 P']);
SIT('*','🥥','Coco quente','O vendedor te dá um coco quente. Ele diz "é a moda do inverno". Está 40 graus.','Beber','Devolver',
 ['+|Era surpreendentemente bom.|+0 >2','!|Queimou a língua.|-30 P','-|Passou mal.|-30'],
 ['+|Ele trocou por um gelado.|+0 >2','-|Ele cobrou do mesmo jeito.|-10','-|Ele ficou ofendido.|-0 <1']);
SIT('*','🏄','Prancha emprestada','Um amigo te empresta uma prancha. Ela é 2 vezes maior que você. O mar está agitado.','Entrar no mar','Devolver',
 ['+|Pegou uma onda e virou herói.|+0 >3','!|A prancha te bateu na cabeça.|-100 <2','-|Perdeu a prancha.|-300'],
 ['+|Devolveu e ficou seguro.|+0 >2','-|O amigo te chamou de "frouxo".|-0 <1','-|Perdeu a chance.|-0 <1']);
SIT('*','🌅','Nascer do sol na praia','Você acorda às 4h pra ver o nascer do sol. Só tem você, um cachorro e um sujeito dormindo.','Esperar','Voltar pra cama',
 ['+|O nascer do sol foi lindo e você chorou.|+0 >3','-|Nublou.|-0 <2','-|O sujeito acordou e te xingou.|-0 <1'],
 ['+|Dormiu e perdeu o nascer do sol.|+0 >1','-|Ficou com a cama fria.|-0 <1','-|O cachorro te seguiu.|-0 <1']);
SIT('*','🏹','Aula de arco e flecha','Você tenta arco e flecha. A primeira flecha vai parar no pé do instrutor.','Pedir desculpas','Rir',
 ['+|Ele riu e te deu outra chance.|+0 >2','-|Ele te expulsou.|-0 <2','-|Pagou R$ 100.|-100'],
 ['+|Todos riram junto.|+0 >2','-|Ele se ofendeu.|-0 <2','-|Perdeu a aula.|-0 <1']);
SIT('*','🥾','Sandália quebrada','Sua sandália quebra no meio da Avenida Brasil. Você está descalço. O asfalto tá a 60 graus.','Continuar descalço','Procurar sapato',
 ['!|Queimou o pé.|-80 <2','+|Chegou em casa e riu.|+0 >2','-|Pisou em vidro.|-80'],
 ['+|Achou uma loja e comprou chinelo barato.|+0 >2','-|A loja estava fechada.|-0 <2','-|Pagou R$ 80 num chinelo.|-80']);
SIT('*','🧂','Sal demais','Você cozinha e coloca sal demais. O prato fica intragável. Os convidados já chegaram.','Servir assim','Pedir comida',
 ['+|Os convidados disseram "gostoso" por educação.|+0 >2','-|Ninguém comeu.|-0 <2','!|Todos passaram mal.|-60 P'],
 ['+|A pizza chegou e salvou a noite.|+0 >3','-|Demorou 2 horas.|-0 <2','-|Gastou R$ 200.|-200']);
SIT('*','🎁','Presente repetido','Você ganha o mesmo presente de duas pessoas diferentes: uma caixa de chocolate. As duas te olham.','Agradecer','Trocar',
 ['+|Ficou com 2 caixas e comeu feliz.|+0 >2','-|Uma te chamou de "ingrato".|-0 <1','-|Passou mal de tanto chocolate.|-30 P'],
 ['+|Trocou por algo útil.|+0 >2','-|A loja não aceitou.|-0 <1','-|Alguém soube e se ofendeu.|-0 <1']);
SIT('*','🎭','Teatro de bairro','O teatro do bairro encena "Hamlet" com atores de 10 anos. Você é convidado de honra.','Aplaudir','Dormir',
 ['+|Foi emocionante e você chorou.|+0 >3','-|Aplaudiu na hora errada.|-0 <1','-|A criança esqueceu o texto.|-0 <1'],
 ['-|Roncou e todos viram.|-0 <2','+|Dormiu e acordou no aplauso.|+0 >2','-|A criança te viu e chorou.|-0 <2']);
SIT('*','🏕️','Camping na Barra','Você acampa na Barra. A barraca voa com o vento. Seus pertences voam junto.','Correr atrás','Deixar',
 ['+|Pegou tudo e virou herói.|+0 >3','!|Tropeçou e caiu.|-60 <2','-|Perdeu a barraca.|-300'],
 ['-|Perdeu tudo.|-500','+|Dormiu na areia e foi bom.|+0 >2','-|Choveu.|-0 <2']);
SIT('*','🧳','Hospedagem inesperada','Um amigo aparece de madrugada com 4 malas e diz "preciso ficar uns dias".','Aceitar','Recusar',
 ['+|Ficaram 3 dias e foi divertido.|+0 >3','-|Ficou 3 meses.|-1000','-|Ele quebrou o sofá.|-300'],
 ['-|Ele ficou magoado.|-0 <2','+|Ele achou outro lugar.|+0 >2','-|Ele ficou na portaria.|-0 <1']);
SIT('*','🏠','Vizinho sem convite','O vizinho aparece na sua festa sem convite e come tudo. Todos adoram ele. Você não.','Expulsar','Ignorar',
 ['+|Ele foi embora e deixou uma garrafa.|+30 >2','-|Ele resistiu e virou briga.|-0 <2','-|Todos ficaram do lado dele.|-0 <3'],
 ['-|Ele comeu tudo.|-100','+|Ele virou seu amigo.|+0 >3','-|Todos riram de você.|-0 <1']);
SIT('*','🎲','Jogo de tabuleiro','Você joga um jogo de tabuleiro com amigos. É sobre ser carioca. Você perde porque "não tem malandragem".','Aceitar','Contestar',
 ['+|Os amigos riram e te deram uma cerveja.|+0 >3','-|Perdeu e pagou a rodada.|-60','-|Ficou irritado.|-0 <1'],
 ['+|Os amigos reconheceram o erro.|+0 >2','-|Todos riram e te chamaram de "mau perdedor".|-0 <2','-|Virou briga.|-0 <2']);
