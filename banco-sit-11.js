// ======= POR CLASSE (parte 3): baixa/média, alta, alto padrão =======
SIT('baixa,media','🧾','Nota de R$ 100 falsa','Um cliente te paga com uma nota de R$ 100. O papel é tão liso que parece cartão de crédito.','Aceitar sem olhar','Examinar contra a luz',
 ['-|A nota era falsa e você perdeu a venda e o troco.|-100','+|A nota era verdadeira e o cliente te deu gorjeta.|+20 >2','-|Tentou passar a nota adiante e foi abordado.|-150 P'],
 ['+|Descobriu a falsa e o cliente pagou com outra.|+0 >2','-|O cliente se ofendeu e foi embora.|-50 <1','-|A nota era boa e o cliente te chamou de "desconfiado".|-0 <1']);
SIT('baixa,media','🏠','Kitnet minúscula','Sua kitnet tem 12 m². O aluguel é R$ 1.800. O dono jura que "tem charme". A cozinha é o banheiro.','Pagar e aguentar','Procurar outra',
 ['-|Pagou e ainda levou um aviso de reajuste.|-1800','+|O dono te deu um mês de desconto por "gratidão".|+300 >2','-|A geladeira queimou e o dono disse "problema seu".|-400'],
 ['+|Achou uma melhor por bem menos.|+300 >3','-|Rodou 10 imóveis e voltou à kitnet.|-0 <2','-|Foi enganado por um corretor.|-500']);
SIT('baixa,media','🚿','Chuveiro elétrico','O chuveiro elétrico pifou no inverno. A água tá 5 graus. Você precisa tomar banho.','Chamar eletricista','Tomar banho frio',
 ['+|O eletricista era vizinho e cobrou R$ 30.|+0 >2','-|Cobrou R$ 200 e demorou 3 dias.|-200','-|Levou um choque e saiu correndo.|-0 P'],
 ['!|Pegou uma pneumonia e ficou 2 semanas de cama.|-300 P','+|Tomou banho gelado e acordou revigorado.|+0 >2','-|Passou mal de frio.|-60 P']);
SIT('baixa,media','🛒','Carrinho de compras caro','O supermercado cobra R$ 200 pelas compras do mês. Você tem R$ 150 e a lista tem 20 itens.','Cortar itens','Parcelar no cartão',
 ['+|Cortou os supérfluos e sobrou dinheiro.|+50 >2','-|Cortou o feijão e passou fome.|-0 <2','-|Esqueceu o arroz e teve que voltar.|-0 <1'],
 ['-|Os juros do cartão dobraram a dívida.|-100','+|O cartão tinha cashback e você economizou.|+20 >1','-|O cartão foi recusado.|-0 <2']);
SIT('baixa,media','📞','Boleto atrasado','Você esqueceu de pagar um boleto. A cobrança liga todo dia às 8h. A voz da atendente é do mal.','Pagar com juros','Ignorar',
 ['-|Os juros eram de 20%. Pagou o dobro.|-300','+|A atendente deu um desconto de 50%.|+0 >2','-|Pagou mas o sistema não reconheceu.|-100 <1'],
 ['-|Colocaram seu nome no Serasa.|-400 <2','+|Ela desistiu e te deixou em paz.|+0 >1','-|A cobrança ligou pra sua mãe.|-0 <2']);
SIT('baixa,media','🚌','Vale-transporte cortado','O vale-transporte foi cortado do seu salário por "erro do RH". Você paga R$ 12 por dia de ônibus.','Reclamar no RH','Andar a pé',
 ['+|O RH corrigiu e te reembolsou.|+200 >2','-|O RH disse "volte semana que vem".|-0 <2','-|O RH te chamou de "reclamão".|-0 <1'],
 ['!|Andou 12 km e ficou com bolhas.|-60 P','+|Emagreceu 3 kg e se sentiu um atleta.|+0 >3','-|Chegou 1 hora atrasado e levou advertência.|-100 <1']);
SIT('baixa,media','🧑‍🍳','Cozinheiro de boteco','O boteco onde você trabalha tem uma cozinha que a vigilância sanitária chamaria de "criativa".','Reclamar','Fazer vista grossa',
 ['+|O dono limpou tudo e te elogiou.|+100 >3','-|O dono disse "se não gosta, rua".|-0 <3','-|Foi demitido por "frescura".|-300 P'],
 ['-|A vigilância apareceu e fechou o boteco.|-500 P','+|Ninguém percebeu e você ficou no emprego.|+0 >2','-|Um cliente passou mal.|-100 <2']);
SIT('baixa,media','📦','Entregador de aplicativo','Você trabalha de entregador. O app diz que a corrida paga R$ 6 por 8 km. Você tem R$ 2 de gasolina.','Fazer a corrida','Recusar',
 ['+|O cliente te deu R$ 20 de gorjeta.|+20 >3','-|Chegou e o cliente tinha cancelado.|-6 <1','!|Caiu da moto na curva e ralou o joelho.|-80 <2'],
 ['-|O app te bloqueou por "baixa aceitação".|-100 P','+|Aceitou outra corrida melhor logo depois.|+30 >2','-|Ficou sem corridas por 2 horas.|-0 <1']);
SIT('baixa,media','📚','Escola noturna','Você estuda à noite depois de 10 horas de trabalho. O professor passa 20 páginas de leitura.','Ler tudo','Ler só o resumo',
 ['+|Aprendeu e tirou 10.|+50 >3','-|Dormiu na leitura.|-0 <2','!|Caiu da cadeira e machucou o braço.|-30 <1'],
 ['+|Foi bem na prova com o resumo.|+0 >2','-|O professor fez uma pergunta que não estava no resumo.|-0 <2','-|Ficou com a nota 5.|-0 <1']);
SIT('baixa,media','🏥','Plantão de enfermagem','Você é enfermeiro(a) e o plantão é de 24 horas. O hospital está sem material.','Improvisar','Reclamar ao diretor',
 ['+|Salvou um paciente com uma gambiarra genial.|+200 >3','-|O improviso deu errado e o paciente reclamou.|-300 <2','-|Foi advertido pelo diretor.|-0 <2'],
 ['+|O diretor ouviu e comprou o material.|+100 >3','-|O diretor te demitiu por "insubordinação".|-500 P','-|O diretor disse "estamos sem verba".|-0 <1']);
SIT('baixa,media','🚓','Policial militar de folga','Você é PM e está de folga num boteco. Um assaltante entra e anuncia o assalto.','Reagir','Entregar tudo',
 ['+|Reagiu e prendeu o assaltante. Virou herói.|+500 >3','!|Foi baleado de raspão no ombro.|-300 P','-|Reagiu mal e foi morto (de brincadeira). O assaltante era um ator.|-0 <2'],
 ['-|Entregou tudo e foi chamado de "covarde".|-300 <2','+|Entregou e o assaltante devolveu tudo depois.|+0 >2','-|O assaltante era seu primo.|-0 <1']);
SIT('baixa,media','🧑‍🏫','Professor da rede estadual','O estado atrasou seu salário por 3 meses. Você ensina 400 alunos com giz e fé.','Entrar em greve','Seguir trabalhando',
 ['+|A greve venceu e você recebeu tudo + 5%.|+800 >3','-|A greve durou 4 meses e você ficou sem nada.|-1000 P','-|O secretário te chamou de "vagabundo".|-0 <3'],
 ['-|O salário atrasou mais 2 meses.|-500 <2','+|Recebeu o pagamento de uma vez.|+500 >2','-|Os alunos fizeram bagunça.|-0 <1']);
SIT('baixa,media','🧯','Bombeiro voluntário','Você é bombeiro voluntário. O quartel não tem mangueira e a escada é de madeira.','Improvisar','Pedir doação',
 ['+|Apagou o fogo com baldes e virou herói.|+200 >3','!|Queimou a mão no resgate.|-150 P','-|O fogo se espalhou.|-300 <2'],
 ['+|A comunidade doou e o quartel foi equipado.|+300 >3','-|Ninguém doou e você virou meme.|-0 <2','-|A doação foi roubada.|-0 <2']);
SIT('baixa,media','🔨','Pedreiro autônomo','Um cliente te contrata pra uma obra "rápida". Ele diz "é só uma parede". É uma casa inteira.','Aceitar','Recusar',
 ['+|A obra ficou perfeita e o cliente te indicou.|+800 >3','-|O cliente sumiu sem pagar.|-1000','-|A obra caiu depois de 2 semanas.|-500 <2'],
 ['-|O cliente contratou outro que deu certo.|-0 <2','+|Pegou uma obra melhor logo depois.|+400 >2','-|Ficou sem trabalho por um mês.|-0 P']);
SIT('baixa,media','🍕','Pizzaiolo noturno','Você faz pizza de madrugada. O forno quebrou e a fila tem 30 pessoas.','Improvisar na frigideira','Fechar a pizzaria',
 ['+|A "pizza de frigideira" virou sucesso.|+300 >3','-|Queimou tudo e o cheiro tomou o bairro.|-200 <2','!|Queimou a mão no óleo.|-80 P'],
 ['-|Os clientes ficaram furiosos e picharam a porta.|-150 <2','+|Fechou e dormiu em paz.|+0 >1','-|Perdeu a noite de ouro.|-0 <1']);
SIT('baixa,media','🚕','Taxista de plantão','Um passageiro estranho entra e pede pra você "seguir aquele carro". É um filme ou golpe?','Seguir o carro','Recusar',
 ['+|Era uma cena de filme e você ganhou R$ 300.|+300 >3','-|Era um golpe e o passageiro fugiu sem pagar.|-100 <2','-|O carro entrou numa área perigosa.|-300 <2'],
 ['+|Recusou e economizou a gasolina.|+0 >1','-|O passageiro ofereceu R$ 500 e você perdeu.|-0 <2','-|O passageiro te xingou.|-0 <1']);
SIT('baixa,media','🏢','Porteiro de prédio','Você é porteiro e um morador diz que "perdeu a chave". Você vê a chave no bolso dele.','Abrir a porta','Dizer a verdade',
 ['+|Ele agradeceu e te deu R$ 50.|+50 >2','-|Ele era um ladrão e levou o apartamento do vizinho.|-500 P','-|O síndico te advertiu.|-0 <2'],
 ['+|Ele riu e te deu R$ 20 pelo "olho de águia".|+20 >2','-|Ele se ofendeu e te denunciou.|-0 <2','-|Ele te chamou de "abelhudo".|-0 <1']);
SIT('baixa,media','🧑‍🍼','Babá de condomínio','A criança que você cuida joga o celular da mãe no vaso. A mãe volta em 10 minutos.','Confessar','Esconder',
 ['+|A mãe riu e te deu um bônus.|+50 >2','-|A mãe descontou R$ 800 do seu pagamento.|-800','-|A mãe te demitiu na hora.|-500 P'],
 ['+|A mãe nem percebeu e você ganhou o dia.|+0 >2','-|A mãe achou o celular e te acusou.|-500 <2','-|A criança contou tudo.|-0 <2']);
SIT('baixa,media','🧹','Zelador do prédio','Você é zelador. Um morador te pede pra "limpar o carro dele". Você tem um dia lotado.','Limpar','Recusar',
 ['+|Ele deu R$ 100 de gorjeta.|+100 >2','-|Ele reclamou do serviço e não pagou.|-0 <1','-|Riscou o carro sem querer.|-400'],
 ['-|Ele te denunciou ao síndico.|-100 <2','+|Ele pediu desculpa e te deu R$ 50.|+50 >1','-|O síndico te chamou pra "conversar".|-0 <1']);
SIT('baixa,media','🎭','Ator de teatro amador','Você faz teatro amador. A peça tem 3 espectadores: o diretor, a mãe e o gato.','Atuar com paixão','Atuar no automático',
 ['+|O gato aplaudiu. Quase.|+0 >3','-|Esqueceu o texto e inventou uma peça nova.|-0 <2','-|O diretor te demitiu.|-0 <2'],
 ['+|O diretor achou "minimalista" e te elogiou.|+30 >2','-|A mãe dormiu.|-0 <1','-|O gato fugiu.|-0']);
SIT('baixa,media','🛻','Motorista de caminhão','Você dirige caminhão. A estrada tem buraco, neblina e uma ponte "meio caída".','Atravessar a ponte','Dar a volta',
 ['+|Atravessou e foi aplaudido por 3 passantes.|+300 >3','!|A ponte caiu e você foi parar no rio.|-500 <3','-|O caminhão atolou.|-300 P'],
 ['+|Deu a volta e chegou a tempo.|+0 >2','-|A volta tinha 400 km.|-0 <3','-|Perdeu a carga.|-500']);
SIT('baixa,media','🔥','Churrasqueiro de rua','Você vende espetinho. Um fiscal chega e diz "a churrasqueira tá irregular". Ele olha o espetinho.','Dar um espetinho','Exigir a lei',
 ['+|O fiscal comeu e te liberou.|+0 >3','-|O fiscal comeu e multou mesmo assim.|-300','-|O fiscal levou a churrasqueira.|-500 <2'],
 ['+|O fiscal achou o documento e foi embora.|+0 >2','-|O fiscal te multou em R$ 1.000.|-1000','-|O fiscal fechou seu ponto.|-0 P']);
// ---- classe alta (parte 3)
SIT('alta','🏖️','Cobertura em Ipanema','Você vê uma cobertura com vista pra praia por R$ 12 milhões. A corretora jura "oportunidade única".','Comprar','Pesquisar',
 ['+|A cobertura valorizou e você ganhou uma fortuna.|+4000 >3','-|O prédio tinha um problema estrutural.|-3000','-|A corretora sumiu.|-2000 <2'],
 ['+|Achou uma melhor por bem menos.|+1500 >3','-|Alguém comprou antes.|-0 <2','-|O mercado caiu e a cobertura despencou.|-0 <2']);
SIT('alta','🍷','Sommelier pessoal','Você contrata um sommelier. Ele cobra R$ 5.000 por noite e diz "esse vinho tem notas de uva".','Seguir os conselhos','Confiar no seu paladar',
 ['+|O vinho era uma obra de arte e seus amigos adoraram.|+500 >3','-|O sommelier recomendou o mais caro. Era ruim.|-2000','-|O sommelier bebeu a garrafa.|-1000'],
 ['+|Escolheu um vinho baratinho e todos elogiaram.|+300 >2','-|O vinho era vinagre.|-500','-|Alguém te chamou de "ignorante".|-0 <2']);
SIT('alta','🚗','Concessionária de luxo','O vendedor diz "esse carro tem 600 cavalos". Você só quer ir ao supermercado.','Comprar o carro','Ficar com o seu',
 ['+|O carro valorizou e você virou "o cara do carro".|+2000 >3','-|O carro quebrou na semana seguinte. Seguro não cobriu.|-3000','-|O carro era grande demais pra sua garagem.|-500'],
 ['+|Seu carro velho ganhou valor de "vintage".|+500 >2','-|Seu carro foi roubado no dia seguinte.|-1000 <2','-|O vendedor te achou "pão-duro".|-0 <1']);
SIT('alta','🏇','Haras da família','O haras da família precisa de um novo cavalo de corrida. O criador pede R$ 1 milhão.','Comprar','Pechinchar',
 ['+|O cavalo venceu 3 corridas e rendeu uma fortuna.|+5000 >3','-|O cavalo fugiu no primeiro dia.|-1000','-|O cavalo ficou doente e a conta do veterinário foi astronômica.|-3000'],
 ['+|Conseguiu por bem menos e o cavalo era ótimo.|+1000 >3','-|O criador desistiu e vendeu pra outro.|-0 <2','-|O cavalo era manco.|-500']);
SIT('alta','🎭','Camarote do Municipal','Você tem um camarote no Teatro Municipal. Hoje a peça é um monólogo de 4 horas sobre a "angústia da existência".','Assistir','Fugir pro bar',
 ['+|A peça era genial e você ganhou fama de "culto".|+500 >3','-|Dormiu e roncou.|-0 <3','-|O ator te viu dormindo e xingou do palco.|-0 <2'],
 ['+|O bar tinha um sócio importante.|+800 >2','-|Foi visto pela mulher e ela ficou furiosa.|-500 <3','-|O bar cobrou R$ 300 por uma caipirinha.|-300']);
SIT('alta','🛥️','Festa na lancha','Você dá uma festa na lancha. Os convidados são sócios e rivais. O DJ é o filho do prefeito.','Ficar de olho em tudo','Aproveitar a festa',
 ['+|Fechou 3 negócios durante a festa.|+1500 >3','-|Alguém caiu na água com o celular dele.|-100','-|O DJ tocou funk e o sócio ficou ofendido.|-0 <2'],
 ['+|Foi a melhor festa do ano e você virou "o cara".|+500 >3','-|Perdeu o relógio na água.|-1500','-|Descobriu um escândalo envolvendo sócios.|-0 <2']);
SIT('alta','🧳','Mala perdida','Sua mala de R$ 80 mil foi extraviada no aeroporto. A companhia diz "estamos procurando".','Esperar','Fazer escândalo',
 ['+|A mala voltou 3 dias depois com um brinde.|+500 >2','-|A mala nunca voltou.|-3000','-|A mala voltou vazia.|-2000'],
 ['+|A companhia te deu uma boa indenização.|+2000 >3','-|A companhia te mandou "falar com o advogado".|-0 <2','-|Foi retirado do aeroporto pela segurança.|-300 <2']);
SIT('alta','🧖','Spa de luxo','O spa de luxo cobra R$ 5.000 por uma massagem de 3 horas. A massagista tem mãos de aço.','Fazer a massagem','Cancelar',
 ['+|Saiu renovado e fechou um negócio no mesmo dia.|+1000 >3','!|A massagista deslocou seu ombro.|-500 P','-|A massagem foi um tapa nas costas por R$ 5.000.|-5000'],
 ['-|O spa cobrou taxa de cancelamento de R$ 1.000.|-1000','+|Economizou e tirou um cochilo em casa.|+0 >2','-|A massagista ficou ofendida.|-0 <1']);
SIT('alta','👨‍👩‍👧','Reunião de família','A família inteira se reúne pra "decidir a herança". Todos estão com advogados.','Negociar','Ir embora',
 ['+|Todos concordaram e você ganhou uma casa.|+3000 >3','-|Virou briga e a polícia foi chamada.|-1000 P','-|O advogado do tio te acusou de "ganancioso".|-0 <2'],
 ['-|A família decidiu sem você e você perdeu tudo.|-3000 <3','+|Ficou de fora e sua parte foi dividida igual.|+500 >2','-|Todos te chamaram de "ausente".|-0 <1']);
SIT('alta','🏟️','Camarote do Maracanã','Você tem um camarote no Maracanã. O time perde de 5 a 0. O garçom oferece "mais um espumante".','Aceitar','Ir embora',
 ['+|Bebeu e esqueceu a derrota.|+0 >2','-|O espumante era caro e a conta chegou.|-400','-|Postaram uma foto sua bêbado.|-0 <2'],
 ['+|Foi embora e evitou o vexame.|+0 >2','-|O time virou e você perdeu a virada.|-0 <2','-|O carro tava preso no estacionamento.|-0 P']);
SIT('alta','🏛️','Fundação beneficente','Você preside uma fundação. Um jornalista descobre que 70% do dinheiro vai pra "despesas administrativas".','Negar','Admitir e mudar',
 ['-|O jornalista publicou. Escândalo.|-2000 <2','+|Ninguém acreditou e você ficou limpo.|+0 >2','-|A polícia abriu investigação.|-3000 P'],
 ['+|A atitude foi elogiada e você virou exemplo.|+1000 >3','-|Os doadores sumiram.|-1500 <2','-|O jornalista pediu mais detalhes.|-0 <2']);
SIT('alta','🏦','Gerente de investimentos','Seu gerente diz: "a bolsa vai cair. Venda tudo". Outro diz: "vai subir. Compre mais".','Vender','Comprar',
 ['+|A bolsa caiu e você economizou uma bolada.|+2000 >3','-|A bolsa subiu e você perdeu a oportunidade.|-0 <3','-|O gerente te cobrou taxas absurdas.|-300'],
 ['+|A bolsa subiu e você ganhou uma bolada milionária.|+4000 >3','-|A bolsa caiu e você perdeu uma fortuna.|-3000','-|Ficou no zero a zero.|-0 <1']);
// ---- alto padrão (parte 3)
SIT('alto','🏛️','CPI da CPI','Uma CPI foi criada pra investigar a CPI anterior. Você preside as duas. Todos riem.','Aceitar a presidência','Renunciar',
 ['+|Controlou tudo e saiu limpo.|+2000 >3','-|O relatório foi vazado.|-1500 <2','-|As duas CPIs se anularam e você virou meme.|-0 <3'],
 ['+|Renunciou e virou "exemplo de ética".|+500 >2','-|Os aliados te chamaram de "traidor".|-1000 <2','-|Foi substituído por seu rival.|-0 <3']);
SIT('alto','🚗','Carro oficial 2','Seu carro oficial tem ar-condicionado, TV e bar. Um repórter filma você saindo dele numa favela.','Dar entrevista','Fugir',
 ['+|Disse que "visita a comunidade" e foi aplaudido.|+500 >3','-|Gaguejou e o vídeo viralizou.|-500 <2','-|Perguntaram o preço do carro e você travou.|-0 <2'],
 ['-|Foi pego correndo e virou meme.|-300 <2','+|Fugiu a tempo e ninguém soube.|+0 >2','-|O repórter te perseguiu.|-0 <1']);
SIT('alto','📺','Debate presidencial','O debate vai ao vivo. O mediador faz uma pergunta que você não esperava: "quanto custa o pão?".','Chutar o preço','Desviar do assunto',
 ['+|Acertou o preço por sorte e todos aplaudiram.|+500 >3','-|Chutou um preço ridículo e virou meme nacional.|-500 <3','-|O adversário riu e te humilhou.|-0 <3'],
 ['+|Desviou com maestria e ganhou 3 pontos.|+300 >2','-|O mediador insistiu e você travou.|-0 <3','-|O povo disse "ele não sabe".|-0 <2']);
SIT('alto','✈️','Voo particular','Você viaja em jato particular com amigos. A mídia descobre e pergunta "quem pagou?".','Dizer que pagou','Culpar um amigo',
 ['+|Provou que pagou e foi elogiado.|+300 >3','-|Mentiu e foi desmascarado.|-1000 <3','-|A Receita abriu investigação.|-1500 P'],
 ['-|O amigo te processou por difamação.|-800 <2','+|O amigo assumiu e te deu uma garrafa de uísque.|+0 >2','-|A mídia disse "culpado".|-0 <3']);
SIT('alto','📈','Reforma tributária','Você relata a reforma tributária. Todos os setores pedem uma "exceção". O lobby é gigante.','Ceder aos lobistas','Resistir',
 ['+|Todos ficaram felizes e te deram "apoio".|+1500 >3','-|A mídia descobriu e te chamou de "vendido".|-1000 <2','-|O povo se revoltou nas ruas.|-500 <3'],
 ['+|Resistiu e virou herói.|+500 >3','-|Os lobistas te perseguiram.|-1000 <2','-|O projeto foi engavetado.|-0 <3']);
SIT('alto','🏝️','Férias em Fernando de Noronha','Você tira férias em Noronha. Alguém posta uma foto sua na praia durante o "recesso" de emergência.','Negar que é você','Assumir',
 ['+|A foto era de outro e todos acreditaram.|+0 >3','-|O print foi checado. Era você.|-800 <3','-|O avião foi investigado.|-500 <2'],
 ['+|Disse "preciso descansar" e o povo apoiou.|+300 >2','-|A oposição fez um escândalo.|-1000 <3','-|Foi chamado de "folgado".|-0 <2']);
SIT('alto','🏛️','Salário do Congresso','Um projeto propõe aumentar seu salário em 80%. A população protesta. O texto está na sua mesa.','Votar a favor','Votar contra',
 ['+|O projeto passou e você ganhou uma bolada a mais.|+2000 >2','-|O povo foi às ruas e jogou ovos.|-500 <3','-|A imprensa fez uma campanha contra você.|-1000 <2'],
 ['+|O projeto caiu e você virou "o guardião do povo".|+500 >3','-|Os colegas te isolaram.|-1000 <2','-|Alguém te xingou no Congresso.|-0 <1']);
SIT('alto','🏆','Prêmio de transparência','Você ganhou o "Prêmio de Maior Transparência". Todos sabem que é um prêmio comprado.','Aceitar','Recusar',
 ['+|Subiu 5 pontos nas pesquisas.|+800 >3','-|Um jornalista descobriu a compra.|-1000 <3','-|A associação que deu o prêmio foi fechada.|-500 <2'],
 ['+|Disse "não mereço" e virou "humilde".|+500 >3','-|Foi chamado de "arrogante" por recusar.|-0 <2','-|O prêmio foi pro seu rival.|-0 <2']);
SIT('alto','🐟','Pesca em Brasília','Você viaja a Brasília e vai pescar no lago Paranoá. Um fotógrafo te flagra.','Fazer pose','Esconder o rosto',
 ['+|A foto viralizou e te rendeu um apelido: "o presidente pescador".|+500 >3','-|Pescou uma bota e virou meme.|-0 <2','-|O peixe era protegido e você foi multado.|-300 P'],
 ['-|O fotógrafo achou "suspeito" e publicou.|-500 <2','+|Ninguém viu e foi um dia ótimo.|+0 >2','-|O barco virou.|-0 <2']);
SIT('alto','📜','Lei da Ficha Limpa','Um projeto exige que políticos sem processo possam se candidatar. Você tem 12 processos.','Votar contra','Votar a favor',
 ['+|O projeto caiu e você continua elegível.|+1000 >3','-|O povo foi às ruas e te chamou de "ficha suja".|-800 <3','-|A imprensa fez um especial sobre você.|-500 <2'],
 ['-|O projeto passou e você virou inelegível.|-3000 P','+|Votou a favor e foi aplaudido, mas ninguém sabia dos processos.|+500 >3','-|Alguém vazou sua ficha.|-1500 <3']);
SIT('alto','🎤','Pronunciamento de emergência','Você precisa fazer um pronunciamento sobre uma crise. Seu ponto eletrônico falha e você fala sozinho.','Improvisar','Pedir pra repetir',
 ['+|Improvisou bem e o povo adorou.|+500 >3','-|Disse "o Brasil é um país de fé" e foi vaiado.|-300 <3','-|Falou o nome errado do país.|-500 <3'],
 ['+|Repetiu e ficou perfeito.|+200 >2','-|Foi gozado por "falta de preparo".|-300 <2','-|O pronunciamento foi cancelado.|-0 <2']);
SIT('alto','🏥','Hospital inaugurado','Você inaugura um hospital. Na hora de cortar a fita, a tesoura quebra. O hospital não tem médicos.','Rir','Reclamar',
 ['+|Todos riram junto e o clima ficou leve.|+300 >3','-|Alguém filmou e postou: "hospital sem tesoura".|-300 <2','-|A tesoura caiu no seu pé.|-0 P'],
 ['-|Reclamar de tesoura virou piada nacional.|-500 <3','+|O prefeito te deu outra e tudo ficou bem.|+200 >2','-|O hospital continuou sem médicos.|-0 <2']);
