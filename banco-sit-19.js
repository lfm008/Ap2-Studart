// ======= FECHAMENTO: mais crime, lei, estudante, alta, alto, baixa/média e gerais =======
SIT('crime','🚬','Contrabando de cigarro','O chefe quer expandir pro contrabando de cigarro. Você acha o negócio "mais seguro". O chefe ri.','Aceitar','Recusar',
 ['+|Rendeu uma boa grana e ninguém viu.|+800 >3','-|A Receita apreendeu a carga.|-2000 P','-|O fornecedor foi preso.|-1000 <3'],
 ['-|O chefe achou "fraco" e te rebaixou.|-0 <3','+|Outro colega pegou e se deu mal.|+0 >2','-|O chefe te deu a pior missão.|-0 P']);
SIT('crime','🎰','Sorteio do morro','O morro faz um sorteio de "melhor morador". O prêmio é uma geladeira. Você é o organizador.','Fraudar','Fazer limpo',
 ['+|Ganhou a geladeira e ninguém soube.|+300 >3','-|Foi descoberto e linchado (verbalmente).|-0 <3','-|O chefe soube.|-500 <3'],
 ['+|O sorteio foi justo e você virou herói.|+100 >3','-|Ninguém acreditou.|-0 <2','-|A geladeira veio quebrada.|-0 <2']);
SIT('crime','🚔','Polícia amiga','Um policial te manda uma mensagem: "avisa o chefe que amanhã não tem operação". Parece confiável.','Passar a mensagem','Desconfiar',
 ['+|Era verdade e o chefe te agradeceu.|+800 >3','-|Era uma armadilha.|-3000 P','-|O chefe achou suspeito.|-500 <3'],
 ['+|Desconfiou e salvou todo mundo.|+1000 >3','-|Era verdade e o chefe te acusou de "medroso".|-0 <3','-|O policial ficou ofendido.|-0 <2']);
SIT('crime','📦','Caixa misteriosa','Você recebe uma caixa sem remetente. O chefe diz "não abra". Ela está se mexendo.','Abrir','Entregar ao chefe',
 ['+|Era um gato e você adotou.|+0 >3','-|Era uma cobra.|-0 <3','-|Era um presente do chefe e você estragou.|-0 <3'],
 ['+|O chefe agradeceu e abriu: era um gato.|+200 >3','-|O chefe se irritou.|-0 <2','-|A caixa sumiu.|-0 <2']);
SIT('crime','🏟️','Final no morro','O morro faz uma final de futebol. O chefe aposta R$ 20 mil no time rival. Você joga.','Perder de propósito','Jogar pra ganhar',
 ['+|Perdeu e o chefe lucrou. Ele te deu 10%.|+2000 >3','-|O chefe descobriu e te puniu.|-1000 <3','-|A torcida te vaiou.|-0 <3'],
 ['+|Ganhou e o morro virou festa.|+500 >3','-|O chefe perdeu uma fortuna.|-1000 <3','!|Torceu o joelho.|-60 P']);
SIT('crime','🍻','Brinde do chefe','O chefe faz um brinde: "à lealdade". Todos bebem. A bebida tem gosto de metal.','Beber','Fingir',
 ['+|Era uma bebida cara e você gostou.|+0 >3','!|Passou mal.|-100 P','-|Era um teste de confiança.|-0 <2'],
 ['-|O chefe notou e te olhou torto.|-0 <3','+|Ninguém notou.|+0 >2','-|Derramou na camisa.|-0 <1']);
SIT('legal','🔦','Vistoria no morro','Você participa de uma vistoria no morro. Uma senhora te serve um café. Ele tem gosto de remédio.','Beber','Recusar',
 ['+|Era só café forte e ela te agradeceu.|+0 >3','!|Passou mal.|-100 P','-|Foi motivo de piada na corporação.|-0 <2'],
 ['+|Ela entendeu e te deu um bolo.|+0 >2','-|Ela se ofendeu.|-0 <2','-|Perdeu a confiança da comunidade.|-0 <3']);
SIT('legal','🚓','Viatura emprestada','Você empresta a viatura a um colega. Ele a devolve arranhada. Ele diz "foi um poste".','Aceitar a desculpa','Pedir explicação',
 ['+|O comandante nem notou.|+0 >2','-|O comandante notou e te responsabilizou.|-500 <2','-|A viatura foi pra oficina.|-0 <2'],
 ['+|O colega assumiu e pagou.|+200 >3','-|O colega ficou ofendido.|-0 <2','-|Brigaram.|-0 <2']);
SIT('legal','🧑‍⚖️','Delegado exigente','O delegado exige relatórios de 40 páginas. Você escreve com 2 dedos.','Fazer o relatório','Pedir ajuda',
 ['+|Terminou e o delegado elogiou.|+200 >3','-|Errou o nome do réu.|-0 <3','-|Perdeu o arquivo.|-0 <2'],
 ['+|Um colega ajudou e você virou amigo.|+0 >3','-|O colega cobrou um favor.|-0 <2','-|O delegado soube.|-0 <2']);
SIT('legal','🥾','Treino noturno','O treino noturno envolve rastejar na lama. Você tem medo de sapo.','Rastejar','Fingir cãibra',
 ['+|Rastejou e virou o "rei da lama".|+0 >3','-|Um sapo pulou na sua cara.|-0 <3','!|Tropeçou e se machucou.|-60 <2'],
 ['-|O comandante viu e te mandou repetir.|-0 <2','+|Ficou no barraco e dormiu.|+0 >2','-|Todos riram.|-0 <1']);
SIT('estudante','🎓','Palestra obrigatória','A faculdade te obriga a ir a uma palestra sobre "sono". O palestrante dorme no meio.','Ficar acordado','Dormir também',
 ['+|O palestrante acordou e te elogiou.|+0 >3','-|Chamou o palestrante e foi repreendido.|-0 <2','-|Perdeu a hora do almoço.|-0 <2'],
 ['+|Dormiu e acordou descansado.|+0 >2','-|O palestrante te acordou.|-0 <2','-|Roncou tão alto que a palestra parou.|-0 <3']);
SIT('estudante','🖥️','Computador do laboratório','O computador do laboratório trava e perde seu trabalho de 40 páginas. Você não salvou.','Chorar','Refazer',
 ['+|O técnico recuperou o arquivo.|+0 >3','-|Chorou e ninguém ajudou.|-0 <2','-|O prazo acabou.|-0 <3'],
 ['+|Refez melhor e tirou 10.|+100 >3','-|Refez pior e tirou 4.|-0 <2','-|Não deu tempo.|-0 <3']);
SIT('estudante','🏀','Ginásio da faculdade','O ginásio da faculdade está interditado por "risco de desabamento". Todos jogam mesmo assim.','Jogar','Reclamar',
 ['+|Jogou e o teto aguentou.|+0 >3','!|Um pedaço do teto caiu.|-100 <2','-|A segurança expulsou todos.|-0 <2'],
 ['+|A reitoria consertou.|+0 >3','-|Reclamar foi inútil.|-0 <2','-|O ginásio fechou de vez.|-0 <2']);
SIT('estudante','🍿','Cineclube da turma','O cineclube passa um filme de 4 horas sem legenda. Todo mundo finge que entende.','Fingir','Admitir',
 ['+|Todos acharam você "culto".|+0 >3','-|Perguntaram o que você achou.|-0 <3','-|Dormiu e roncou.|-0 <2'],
 ['+|Todos admitiram e riram.|+0 >3','-|O organizador ficou ofendido.|-0 <2','-|Foi chamado de "inculto".|-0 <2']);
SIT('alta','🎻','Concerto privado','Você contrata um violinista famoso pra tocar no seu jantar. Ele toca "Parabéns pra Você" por engano.','Aplaudir mesmo assim','Reclamar',
 ['+|Os convidados riram e a noite foi leve.|+300 >3','-|O violinista ficou ofendido.|-500 <2','-|O jantar ficou frio.|-0 <2'],
 ['-|O violinista foi embora.|-2000','+|Ele tocou o repertório certo depois.|+0 >2','-|Todos acharam grosseria.|-0 <3']);
SIT('alta','🚗','Roubo do carro de luxo','Seu carro de R$ 1 milhão foi roubado. A polícia diz "está procurando". O seguro diz "vamos analisar".','Esperar','Contratar detetive',
 ['+|O carro apareceu em 1 semana.|+0 >3','-|Esperou 6 meses.|-0 <3','-|O carro nunca voltou.|-10000'],
 ['+|O detetive achou o carro.|+0 >3','-|O detetive cobrou os olhos da cara.|-10000','-|O detetive sumiu.|-5000']);
SIT('alta','🛥️','Naufrágio de iate','Seu iate naufraga. Ninguém se machuca. Mas o seguro diz "não cobre negligência".','Processar','Aceitar a perda',
 ['+|O seguro pagou e você comprou outro.|+5000 >3','-|O processo durou 5 anos.|-0 P','-|Perdeu o processo.|-5000'],
 ['-|Perdeu milhões.|-30000','+|Ganhou um iate emprestado.|+0 >2','-|A imprensa fez um escândalo.|-0 <3']);
SIT('alta','👨‍👩‍👧','Escândalo familiar','Seu filho é pego numa festa com "fumaça colorida". A imprensa já sabe.','Abafar o caso','Assumir',
 ['+|O caso foi esquecido.|+0 >3','-|A imprensa descobriu e piorou.|-3000 <3','-|O delegado te cobrou "agrado".|-5000'],
 ['+|A sinceridade te rendeu respeito.|+500 >3','-|Foi chamado de "pai ausente".|-0 <3','-|O filho foi preso.|-0 <3']);
SIT('alto','🏛️','Cargo para o cunhado','Seu cunhado precisa de emprego. Você tem um cargo de "assessor de aplausos" vago.','Dar o cargo','Recusar',
 ['+|O cunhado agradeceu e te deu apoio.|+500 >3','-|A imprensa descobriu.|-1500 <3','-|O cunhado nunca apareceu.|-0 <2'],
 ['-|O cunhado ficou chateado.|-0 <3','+|Ficou limpo e elogiado.|+500 >3','-|A esposa te cobrou.|-0 <2']);
SIT('alto','🚗','Carro oficial na praia','Você usa o carro oficial pra ir à praia. Um fotógrafo te flagra com uma bola de vôlei.','Negar','Assumir',
 ['+|Disse que "estava em reunião".|+0 >3','-|A foto viralizou.|-1000 <3','-|A Corregedoria abriu processo.|-1500 P'],
 ['+|O povo achou "humano" e você subiu nas pesquisas.|+500 >3','-|Foi multado.|-500','-|A imprensa fez um especial.|-0 <3']);
SIT('alto','📺','Programa humorístico','Um programa humorístico faz uma paródia de você. O comediante te imita perfeitamente.','Rir','Processar',
 ['+|O povo adorou sua reação.|+800 >3','-|A paródia ficou melhor que você.|-0 <3','-|Virou piada nacional.|-0 <3'],
 ['+|Ganhou e o programa pagou.|+3000 >3','-|O processo foi arquivado.|-500','-|Foi chamado de "sem humor".|-0 <3']);
SIT('alto','🏆','Ranking de popularidade','Uma pesquisa te coloca em último lugar. Seu marqueteiro grita "temos que fazer algo drástico!".','Fazer um programa de TV','Mudar de partido',
 ['+|O programa foi um sucesso.|+1000 >3','-|O programa virou piada.|-500 <3','-|Gastou uma fortuna.|-1000'],
 ['+|Mudou e foi aclamado.|+800 >3','-|Foi chamado de "traidor".|-1000 <3','-|O novo partido te rejeitou.|-0 <3']);
SIT('baixa,media','🏠','Casa de dois andares','Você ergue o segundo andar da casa. O vizinho reclama que "tapou o sol". A prefeitura aparece.','Negociar','Ignorar',
 ['+|O vizinho aceitou e a obra seguiu.|+0 >3','-|A prefeitura multou.|-500','-|O vizinho processou.|-0 <3'],
 ['-|A prefeitura embargou a obra.|-1000 P','+|Ninguém notou.|+0 >2','-|O vizinho jogou ovos.|-0 <2']);
SIT('baixa,media','🧑‍🍳','Quentinha na obra','Você vende quentinhas na obra. Os operários exigem "tempero caseiro". Um pede "sem sal".','Atender','Recusar',
 ['+|Todos gostaram e você ganhou fama.|+100 >3','-|O sem-sal reclamou e te xingou.|-0 <2','-|Faltou arroz.|-0 <2'],
 ['-|O pedreiro te boicotou.|-100 <2','+|Manteve o padrão.|+0 >2','-|Os operários foram pra outro vendedor.|-0 <2']);
SIT('baixa,media','🚿','Falta de água','O bairro fica sem água por 4 dias. Os vizinhos disputam o caminhão-pipa.','Disputar','Esperar',
 ['+|Conseguiu 100 litros e virou herói.|+0 >3','!|Foi empurrado e machucou o braço.|-60 <2','-|A água acabou na sua vez.|-0 <2'],
 ['+|A água voltou e você economizou.|+0 >2','-|Ficou 4 dias sujo.|-0 <3','-|O vizinho vendeu água cara.|-100']);
SIT('baixa,media','⚡','Transformador explodiu','O transformador da rua explode. O bairro fica 12 horas no escuro. Tem quem ofereça "luz por R$ 20".','Pagar','Esperar',
 ['+|A luz voltou e você ficou feliz.|+0 >3','-|O sujeito era golpista.|-20','-|A luz do sujeito explodiu.|-60 <2'],
 ['+|A luz voltou em 6 horas.|+0 >2','-|A comida estragou.|-200','-|Ficou 3 dias no escuro.|-0 P']);
SIT('baixa,media','🛒','Carrinho de pipoca','Você vende pipoca na praça. O fiscal chega e diz "falta licença". Você tem 2 minutos.','Dar uma pipoca','Fugir',
 ['+|O fiscal gostou e te liberou.|+0 >3','-|O fiscal multou mesmo assim.|-500','-|O fiscal levou o carrinho.|-1000 P'],
 ['+|Escapou e vendeu em outro lugar.|+0 >2','-|O carrinho ficou preso.|-300','-|O fiscal te perseguiu.|-0 <2']);
SIT('baixa,media','🥁','Bumbo de escola','Você é percussionista numa escola de samba. O bumbo quebra no meio do desfile.','Improvisar','Parar',
 ['+|Improvisou e a escola ganhou nota 10.|+300 >3','-|Errou o ritmo e a escola perdeu.|-0 <3','-|Todos olharam.|-0 <2'],
 ['-|A escola perdeu pontos.|-0 <3','+|Trocou o bumbo e ninguém notou.|+0 >2','-|O diretor te cobrou.|-100']);
SIT('baixa,media','🏀','Quadra do bairro 2','A quadra do bairro vira pista de skate à noite. Os jovens usam rampas improvisadas.','Participar','Reclamar',
 ['+|Aprendeu e fez amizades.|+0 >3','!|Caiu e se machucou.|-80 <2','-|Foi zoado pelos jovens.|-0 <2'],
 ['+|Os jovens aceitaram um horário.|+0 >3','-|Foi xingado.|-0 <2','-|Chamou a polícia e os jovens fugiram.|-0 <2']);
SIT('*','🐕','Passeador de cães','Você passeia 8 cães ao mesmo tempo. Eles avistam um gato. Todos puxam em direções diferentes.','Soltar tudo','Segurar',
 ['+|Os cães voltaram sozinhos.|+0 >3','-|Os cães sumiram.|-500','-|O gato os atacou.|-0 <2'],
 ['!|Foi arrastado por 8 cães.|-100 <3','+|Conseguiu controlar e virou herói.|+0 >3','-|As coleiras quebraram.|-100']);
SIT('*','🛍️','Feirante esperto','Um feirante te vende "maçã premium" por R$ 20 o quilo. A maçã é igual a de R$ 5.','Comprar','Contestar',
 ['-|A maçã era comum.|-20','+|A maçã era melhor e você virou freguês.|+0 >2','-|Pagou R$ 40 por engano.|-40'],
 ['+|Ele deu desconto de 50%.|+10 >2','-|Ele te xingou.|-0 <2','-|Todos olharam.|-0 <1']);
SIT('*','🧳','Mala trocada','No aeroporto, você pega a mala errada. A dona vai atrás de você. Dentro da mala: 40 meias.','Devolver','Fugir',
 ['+|A dona agradeceu e te deu um chocolate.|+0 >3','-|A dona te acusou de ladrão.|-0 <2','-|Vocês trocaram e a sua estava aberta.|-200'],
 ['-|Foi pego pela segurança.|-0 P','+|Escapou e ficou com 40 meias.|+0 >2','-|A dona te perseguiu.|-0 <2']);
SIT('*','🎤','Microfone aberto','Você esquece que o microfone está aberto e xinga o chefe no banheiro. Todo mundo ouve.','Assumir','Culpar o técnico',
 ['+|Todos riram e o chefe também.|+0 >3','-|O chefe te demitiu.|-1000 P','-|Virou meme.|-0 <3'],
 ['+|O técnico assumiu e ganhou um bônus.|+0 >2','-|O técnico te denunciou.|-0 <3','-|Todos sabem a verdade.|-0 <2']);
SIT('*','🥂','Brinde com a pessoa errada','Você brinda com um desconhecido numa festa. Ele é o dono do prédio. E sabe que você está atrasado no aluguel.','Disfarçar','Confessar',
 ['+|Ele riu e esqueceu.|+0 >3','-|Ele te cobrou ali mesmo.|-500','-|Ele te despejou.|-0 <3'],
 ['+|Ele aceitou parcelar.|+0 >3','-|Ele te multou.|-300','-|Ele contou pra todo mundo.|-0 <2']);
SIT('*','🌃','Táxi misterioso','Um táxi preto para ao seu lado. O motorista diz "entre, tenho uma proposta". Parece cena de filme.','Entrar','Recusar',
 ['+|A proposta era um emprego bom.|+1000 >3','-|Era um golpe.|-300','-|O táxi era do seu ex.|-0 <3'],
 ['+|Recusou e ficou seguro.|+0 >2','-|O táxi te seguiu.|-0 <2','-|Alguém te chamou de "medroso".|-0 <1']);
SIT('*','🕯️','Velório animado','Num velório, os parentes contam piadas e bebem cerveja. O falecido adorava festa. Você é o único sério.','Entrar na animação','Ficar sério',
 ['+|Todos riram e o dia foi leve.|+0 >3','-|Alguém te chamou de "sem respeito".|-0 <3','-|Derramou cerveja no caixão.|-0 <3'],
 ['+|Todos respeitaram seu luto.|+0 >2','-|Te chamaram de "chato".|-0 <2','-|Chorou muito.|-0 <1']);
