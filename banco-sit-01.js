// ======= GERAIS 1: transporte, praia, comida e bar =======
SIT('*','🚌','Ônibus sem ar-condicionado','O ônibus tá a 45 graus. A janela não abre, mas o cheiro de suor abre.','Ficar em pé na porta','Sentar no fundo',
 ['+|Pegou a brisa e ainda viu uma paisagem linda.|+0 >1','!|A porta abriu na curva e você quase virou lenda urbana.|-40 <2','-|Foi empurrado por 4 turistas e perdeu o ponto.|-0 <1'],
 ['-|Sentou numa poça de refrigerante. Calça molhada o dia todo.|-30','+|Dormiu e acordou no ponto certo, descansado.|+0 >2','-|Um passageiro dormiu no seu ombro por 40 minutos.|-0 P']);
SIT('*','🛺','Mototáxi na ladeira','O mototaxista oferece subir a ladeira por R$ 5. Ele não usa capacete. Nem tem freio.','Subir de mototáxi','Subir a pé',
 ['+|Chegou em 40 segundos, sem uma gota de suor.|+0 >3','!|A moto empinou e você virou astronauta por 2 segundos.|-70 <2','-|Ele cobrou R$ 30 "por causa do peso".|-30'],
 ['+|Subiu e ainda emagreceu 2 kg. Vitória!|+0 >1','-|Chegou em casa só no dia seguinte, arrastado.|-0 P','!|Escorregou num degrau molhado.|-30 <1']);
SIT('*','🚲','Bicicleta compartilhada','Todas as bikes da estação estão com o pneu careca. Mas você tem pressa.','Pegar a bike mesmo assim','Esperar outra',
 ['+|A bike aguentou e você chegou voando.|+0 >2','!|O pneu estourou no meio da Avenida Atlântica.|-50 <2','-|Cobraram multa por "devolução fora da estação".|-60'],
 ['-|Esperou 40 minutos e as bikes sumiram.|-0 P','+|Chegou uma nova remessa e você pegou a mais nova.|+0 >2','-|Uma criança pegou a última bike e riu de você.|-0 <1']);
SIT('*','🚖','Motorista falante','O motorista de aplicativo começou a contar a vida dele. Já são 40 minutos de viagem.','Ouvir com atenção','Fingir que dorme',
 ['+|A história era boa e ele te deu 50% de desconto.|+30 >2','-|Ele te contou sobre 3 casamentos, 2 dívidas e 1 fantasma.|-0 P','-|Ele pediu um empréstimo no final da corrida.|-50'],
 ['-|Ele percebeu e começou a cantar mais alto.|-0 <1','+|Dormiu e acordou no destino, de graça.|+20 >2','-|Dormiu demais e passou do ponto em 8 km.|-60 <2']);
SIT('*','🚶','Calçada esburacada','A calçada tá um queijo suíço. Só tem um jeito de passar: pela rua ou pelo buraco.','Passar pela rua','Pular os buracos',
 ['-|Quase foi atropelado por um ônibus. Buzinaram em Dó maior.|-0 <1','+|Chegou do outro lado são e salvo.|+0 >1','!|Foi atropelado por uma bicicleta de entregador. Sem gravidade, só orgulho.|-30 <1'],
 ['+|Dançou entre os buracos e ganhou aplausos da calçada.|+0 >2','!|Caiu no buraco e ficou com a perna presa.|-60 <2','-|Perdeu o chinelo num dos buracos.|-20']);
SIT('*','🚏','Ponto de ônibus abandonado','O ponto não tem placa, nem teto, nem esperança. Só uma árvore e um cachorro.','Esperar com o cachorro','Ir andando',
 ['+|O cachorro era mascote do ponto e te guiou até o ônibus certo.|+0 >2','-|Esperou 2 horas e o ônibus nem passa mais aqui.|-0 P','-|O cachorro roubou seu lanche.|-20'],
 ['+|Andando achou um ponto melhor e pegou o ônibus.|+0 >1','!|Pisou num buraco, torceu o tornozelo.|-40 <2','-|Se perdeu e foi parar na Rodoviária.|-0 <3']);
SIT('*','🚤','Barca Rio-Niterói','A barca está lotada, mas a vista é linda. Fica em pé ou espera a próxima?','Embarcar em pé','Esperar a próxima',
 ['+|Viu o pôr do sol do convés e tirou a foto da vida.|+0 >2','!|A barca balançou e você virou uma dúzia de turistas.|-30 <1','-|Uma gaivota roubou seu pastel.|-10'],
 ['+|A próxima veio vazia e com cadeira.|+0 >1','-|A barca atrasou 1 hora por causa do vento.|-0 P','-|Passou 1 hora olhando o pôr do sol no cais e perdeu o compromisso.|-0 <1']);
SIT('*','🚕','Táxi sem taxímetro','O taxista jura que "o taxímetro tá quebrado, mas faço um preço bom".','Aceitar o preço','Exigir o taxímetro',
 ['-|O "preço bom" foi R$ 120 pra 3 km.|-120','+|Era honesto: cobrou R$ 18 e te deu uma bala.|+0 >2','-|Ele deu uma volta de 40 minutos pra "evitar o trânsito".|-60 <1'],
 ['+|Ele consertou o taxímetro na hora e foi ótimo.|+0 >2','-|Ele te expulsou do táxi: "quem não confia, desce".|-0 <2','-|Ele ligou o taxímetro com bandeira 2 e correu feito Fórmula 1.|-80']);
SIT('*','🏍️','Passageiro de garupa','Um amigo te chamou pra uma volta de moto pela orla. Ele jura que só bebeu 1 chope.','Ir na garupa','Recusar a carona',
 ['+|Passeio lindo, vento no cabelo e ninguém caiu.|+0 >3','!|Ele fez uma curva e você virou o encosto da moto.|-80 <2','-|A moto parou na blitz. Ele não tinha habilitação.|-200 P'],
 ['+|Foi a pé e comeu um pastel delicioso no caminho.|+0 >1','-|O amigo ficou chateado e disse que você é "chato".|-0 <1','+|Soube depois que ele bateu a moto. Escapou por pouco.|+0 >2']);
SIT('*','🏖️','Guarda-sol alugado','O barraqueiro cobra R$ 50 por um guarda-sol e 2 cadeiras. A sombra é do tamanho de uma toalha.','Alugar','Sentar na areia no sol',
 ['+|Achou uma sombra perfeita e ainda ganhou água de coco.|+0 >2','-|O vento levou o guarda-sol e o barraqueiro cobrou o prejuízo.|-80','-|A cadeira quebrou e você caiu de bunda.|-30 <1'],
 ['!|Ficou 3 horas no sol e saiu vermelho como lagosta.|-60 P','+|Fez amizade com outro turista e ganharam cerveja de graça.|+0 >2','-|Uma gaivota fez o serviço em cima da sua toalha.|-0']);
SIT('*','🦀','Caranguejo na areia','Um caranguejo te olha de longe. Você tá com fome. Ele também.','Tentar pegar','Deixar em paz',
 ['+|Pegou o bichinho e o barraqueiro te deu R$ 20 por ele.|+20 >1','!|O caranguejo te beliscou o dedo. Sem lágrimas, só dignidade.|-30 <1','-|Ele fugiu e levou seu chinelo junto.|-20'],
 ['+|Ele agradeceu e te deixou uma pérola de brinde (falsa).|+0 >1','-|Outro caranguejo roubou sua toalha.|-30','-|Um turista tirou foto e te fez parecer ridículo.|-0 <1']);
SIT('*','🌊','Surfista iniciante','O instrutor jura que você vai pegar sua primeira onda. Você nunca ficou de pé em nada.','Tentar surfar','Ficar vendo',
 ['+|Pegou uma ondinha e foi aplaudido por 3 crianças.|+0 >3','!|Tomou um caldo e engoliu metade do Atlântico.|-50 <2','-|A prancha bateu na cabeça de um turista. Ele chamou a polícia.|-100'],
 ['+|Ficou olhando e aprendeu tudo (menos a surfar).|+0 >1','-|O instrutor te zoou na frente de todo mundo.|-0 <1','-|Uma onda grande molhou seu celular.|-200']);
SIT('*','🏝️','Ilha deserta de Paquetá','A bike elétrica quebrou na metade do passeio em Paquetá. A balsa só volta em 4 horas.','Pedir ajuda','Empurrar a bike',
 ['+|Um morador te emprestou outra bike e ainda deu goiabada.|+0 >2','-|Ninguém passou por 2 horas. O sol queimou.|-0 P','-|Um morador cobrou R$ 50 pelo "serviço de guincho".|-50'],
 ['!|Empurrou 3 km e torceu o joelho.|-60 <2','+|Encontrou um amigo com carroça e ganhou carona.|+0 >2','-|Perdeu a balsa e dormiu no cais.|-0 P']);
SIT('*','🍧','Picolé do vendedor','O vendedor grita: "é de uva, de limão, de chocolate… e de mistério!".','Pedir o de mistério','Pedir o de limão',
 ['+|O de mistério era de manga com pimenta. Surpreendente!|+0 >1','-|Era de cebola. Ninguém pergunta por quê.|-10','-|Era uma sobra de 3 sabores. Gosto de decisão errada.|-0 <1'],
 ['+|Gelado e delicioso. O vendedor te deu outro de graça.|+0 >1','-|O picolé derreteu e escorreu pela camisa.|-30','-|Era de cenoura disfarçado de limão.|-0']);
SIT('*','🍤','Barraca de camarão','A barraca vende camarão a R$ 30 o prato. O cheiro é irresistível, o aspecto, duvidoso.','Comer o camarão','Recusar',
 ['+|O camarão era fresco e o dono te deu mais um prato.|+0 >2','-|O camarão tava de ontem. Passou a tarde no banheiro.|-60 P','-|Cobraram R$ 90 porque "o prato era dobrado".|-90'],
 ['+|Foi pra uma barraca melhor e comeu um peixe maravilhoso.|+0 >1','-|Todo mundo na praia comeu o camarão e foi feliz. Menos você.|-0 <1','-|Ficou com fome e comeu areia.|-0']);
SIT('*','🥤','Caipirinha de procedência','O barraqueiro jura que a caipirinha é de cachaça artesanal. A cor é suspeita.','Beber uma','Beber só água',
 ['+|Era artesanal de verdade e você virou fã.|+0 >2','!|A cachaça era de álcool de farmácia. Dor de cabeça por 2 dias.|-60 P','-|Cobraram R$ 40 por uma dose pequena.|-40'],
 ['+|Ficou sóbrio e voltou pra casa dirigindo com segurança.|+0 >1','-|A água era mais cara que a caipirinha.|-30','-|Uma abelha pousou no copo e te picou.|-20']);
SIT('*','🍢','Churrasquinho de gato','O espetinho custa R$ 5. A origem da carne é um mistério dos mais profundos.','Comer','Não arriscar',
 ['+|Delicioso. O dono é artista e o gato é de plástico.|+0 >1','!|Passou mal e foi parar na UPA.|-60 P','-|Pagou R$ 5, mas o espeto era de 15 pedaços de cebola.|-5'],
 ['+|Foi num restaurante decente e comeu bem.|+0 >1','-|A fome bateu e você comprou 3 espetos mesmo assim.|-15','-|O vendedor te chamou de "metido".|-0 <1']);
SIT('*','🍮','Doce da vovó','Uma senhora vende doces caseiros na porta da igreja. Ela te encara e fala: "leva um, meu bem".','Comprar','Educadamente negar',
 ['+|Era o melhor doce da sua vida. Ela te deu mais 3.|+0 >2','-|O doce era tão doce que deu um choque de glicose.|-0 P','-|Ela te cobrou R$ 40 e te deu uma bênção.|-40'],
 ['-|Ela fez uma cara de tristeza que durou o dia todo.|-0 <1','+|Ela te deu um doce de graça mesmo assim: "pra não ficar com raiva".|+0 >1','-|Você passou mal de culpa e voltou pra comprar.|-30']);
SIT('*','🥘','Feijoada de sábado','O restaurante tem feijoada à vontade por R$ 60. Você tá com muita fome.','Comer até cair','Comer só um prato',
 ['-|Comeu tanto que dormiu na mesa. O garçom cobrou "taxa de leito".|-80 P','+|Comeu demais e ganhou o título de "campeão do bufê".|+0 >2','!|Passou mal depois. Dor de barriga lendária.|-60 P'],
 ['+|Saiu satisfeito e ainda ganhou sobremesa.|+0 >2','-|O prato vazio te olhou torto e você comeu mais um.|-60','-|O garçom esqueceu seu pedido de caipirinha.|-30']);
SIT('*','🍰','Sobremesa do restaurante','O garçom traz o carrinho de sobremesas. Todas parecem ótimas e custam R$ 35.','Pedir a mais cara','Pedir a mais barata',
 ['+|Era uma obra-prima. Chorou de emoção (e de prazer).|+0 >2','-|Veio com 1 morango e uma folha de hortelã. R$ 55.|-55','-|A sobremesa era de plástico. Ele cobrou do mesmo jeito.|-35'],
 ['+|Era mais saborosa que a mais cara. O garçom ficou com inveja.|+10 >1','-|Era uma gelatina de ontem.|-10','-|Foi servida fria e sem sabor.|-0 <1']);
SIT('*','🥂','Brinde errado','O amigo faz um brinde "à saúde do nosso ex-chefe". Todo mundo brinda. Você tá com um copo de água.','Brindar com água','Pedir cerveja',
 ['+|Todos riram e te chamaram de "o sóbrio da turma".|+0 >1','-|O amigo achou desfeita e te deu uma bronca.|-0 <1','-|Derramou a água no colo e virou piada.|-0'],
 ['-|A cerveja era a mais cara do bar. R$ 40.|-40','+|O garçom te deu um chope de graça por educação.|+0 >2','-|Bebeu rápido demais e ficou tonto.|-0 P']);
SIT('*','🎶','Música alta no bar','O DJ do bar toca "Evidências" pela quinta vez. Todo mundo canta chorando.','Cantar junto','Pedir outra música',
 ['+|Cantou tão bem que o bar pediu bis. Ganhou chope.|+20 >2','-|Desafinou no refrão e uma garrafa voou perto da sua cabeça.|-0 <1','-|Chorou tanto que molhou a camisa e o celular.|-30'],
 ['+|O DJ trocou pra Bossa Nova e o bar adorou.|+0 >2','-|O bar inteiro te vaiou. Foi um linchamento musical.|-0 <2','-|O DJ tocou "Sexta-feira" e você foi chamado pra dançar sozinho.|-0 <1']);
SIT('*','🍻','Rodízio de chope','O bar tem rodízio de chope por R$ 40 e a promoção termina em 1 hora.','Beber o máximo','Beber só 3',
 ['-|Passou mal e vomitou no banheiro. O dono te cobrou "limpeza".|-80 P','+|Bateu o recorde do bar e ganhou camiseta.|+30 >2','-|Dormiu no meio da mesa. Foi fotografado.|-0 <1'],
 ['+|Foi sensato e chegou em casa inteiro.|+0 >2','-|O dono disse que isso era "desrespeito ao rodízio".|-0 <1','-|Teve que esperar uma hora pro chope chegar.|-0']);
SIT('*','🎲','Mesa de truco','Os amigos te convidam pra uma partida de truco valendo R$ 100. Você acha que sabe jogar.','Entrar na partida','Só assistir',
 ['+|Pediu truco com a pior carta e o blefe deu certo!|+100 >2','-|Perdeu 3 rodadas seguidas e todo mundo riu.|-100','-|Descobriram que você tava contando cartas. Quase expulso.|-50 <1'],
 ['+|Viu uma jogada genial e ganhou um chope por "comentário de campeão".|+0 >1','-|Alguém te acusou de "dar dicas" e você levou bronca.|-0 <1','-|Ficou de pé 2 horas e doeram as pernas.|-0']);
SIT('*','🏓','Ping-pong do bar','O dono te desafia pra um ping-pong. O prêmio é uma rodada. A bolinha tá furada.','Aceitar','Recusar',
 ['+|Ganhou com um smash bizarro. O bar te aplaudiu.|+20 >2','-|Perdeu feio e pagou a rodada.|-60','-|A bolinha furada bateu na sua testa. Um galo enorme.|-0 <1'],
 ['-|O dono te chamou de "medroso" até a hora de fechar.|-0 <1','+|O dono riu e te serviu um chope por gentileza.|+0 >1','-|Alguém roubou seu lugar na mesa.|-0']);
SIT('*','🍕','Pizza de calabresa','A pizza veio com uma "calabresa" que parece uma cebola. O garçom diz que é "a nova receita".','Reclamar','Comer assim mesmo',
 ['+|O gerente trocou a pizza e te deu um chope.|+0 >2','-|O gerente disse "se não gostou, não pague". Você pagou, calado.|-70','-|O garçom ficou ofendido e demorou 40 minutos.|-0 <1'],
 ['+|Era deliciosa. A "nova receita" virou sua favorita.|+0 >1','-|Passou mal e perdeu o jogo de futebol.|-0 P','-|Descobriu que a calabresa era de soja.|-30']);
SIT('*','🥩','Rodízio de carne','O rodízio tem 14 tipos de carne e um garçom que te encara se você recusar.','Aceitar tudo','Escolher só as boas',
 ['+|Saiu com a barriga cheia e o espírito leve.|+0 >2','!|Comeu tanto que precisou de ajuda pra levantar.|-40 P','-|A conta veio com R$ 40 de "taxa de carne extra".|-40'],
 ['+|Seu paladar foi elogiado pelo maitre.|+0 >2','-|O garçom insistiu e você acabou comendo tudo.|-0 P','-|Deu azar de a picanha acabar.|-0']);
SIT('*','🥐','Café da manhã de hotel','Hotel chique, bufê à vontade. O garçom te vigia como se fosse um segurança de banco.','Pegar demais','Pegar o necessário',
 ['-|Pegou demais e foi repreendido: "senhor, isso é um café, não um mudança".|-0 <1','+|Esqueceu o café e levou um pão de queijo grátis.|+0 >1','-|Desmaiou de tanto comer. O hotel cobrou a ambulância.|-100 P'],
 ['+|Comeu bem e ganhou um upgrade de quarto.|+0 >2','-|Todos os pães acabaram quando chegou a sua vez.|-0','-|O café veio frio e o garçom disse "é assim mesmo".|-20']);
SIT('*','🧃','Suco do mercado','O mercado vende suco natural a R$ 4. A moça diz: "é de laranja, mas pode ter gosto de tangerina".','Comprar','Procurar outro',
 ['+|Era o melhor suco da vida. Você virou fã do mercado.|+0 >1','-|Era laranja com água e açúcar. Mas era barato.|-4','-|A moça cobrou R$ 12 porque o copo era de vidro.|-12'],
 ['+|Achou uma banca melhor e levou 2 copos.|+0 >1','-|Rodou 5 quarteirões e voltou ao mercado.|-0 <1','-|Todos os sucos acabaram.|-0']);
SIT('*','🥪','Sanduíche natural','A lanchonete tem um sanduíche natural que tem "mais natureza que sanduíche". Tem folha, tem tomate, tem fé.','Pedir','Pedir um X-tudo',
 ['+|O sanduíche era saudável e você se sentiu um atleta.|+0 >2','-|Veio com um fio de cabelo. O garçom disse "é tempero".|-0 P','-|Cobrou R$ 30 pela "bela apresentação".|-30'],
 ['+|O X-tudo era enorme e você virou lenda da lanchonete.|+0 >1','!|Passou mal de tanta gordura.|-40 P','-|O sanduíche caiu no chão e o dono riu.|-20']);
SIT('*','🍝','Macarrão da Dona Lúcia','Dona Lúcia faz o melhor macarrão do bairro. Mas ela só vende se gostar de você.','Puxar assunto','Pedir educadamente',
 ['+|Ela amou você e te deu uma porção extra.|+0 >2','-|Você falou sobre política e ela te expulsou do quintal.|-0 <2','-|Ela te mandou comprar o macarrão no supermercado.|-0'],
 ['+|Ela disse "tá bom" e te serviu um prato cheio.|+0 >1','-|Ela errou o troco e te deu R$ 20 a menos.|-20','-|Pediu errado e ela te passou uma bronca de 10 minutos.|-0 <1']);
SIT('*','🍗','Frango de padaria','O frango assado da padaria tá em promoção: R$ 20. A fila tá enorme e o frango tá acabando.','Entrar na fila','Furar a fila',
 ['+|Chegou ao fim da fila e o último frango era seu.|+0 >2','-|O frango acabou na sua frente. Desmaiou de tristeza.|-0 <1','-|A fila demorou 2 horas e o frango esfriou.|-0 P'],
 ['+|Furou e ninguém notou. Frango garantido!|+0 >2','-|Foi descoberto e chamado de "fura-fila" pelo bairro todo.|-0 <2','-|A dona do frango te deu uma bolsada.|-30 <1']);
SIT('*','🥧','Torta de limão','A confeitaria tem uma torta de limão que "muda vidas". Custa R$ 80.','Comprar','Fazer em casa',
 ['+|Mudou mesmo a sua vida. Você viciou.|-0 >2','-|Era uma torta de gelatina. Você pagou R$ 80 por gelatina.|-80','-|Chegou em casa e a torta tinha caído no chão da bolsa.|-80 <1'],
 ['+|A sua torta ficou melhor que a da confeitaria.|+30 >2','-|Queimou a torta e o alarme de incêndio disparou.|-0 <2','!|Cortou o dedo com a faca e foi pro hospital.|-60 P']);
SIT('*','🍨','Sorvete no Leblon','O sorvete do Leblon custa R$ 30 a bola. Mas é famoso e a fila é imensa.','Pagar e entrar na fila','Procurar um barato',
 ['+|Era o melhor sorvete que já provou. Valeu cada centavo.|+0 >2','-|A bola derreteu antes de você tomar.|-30','-|Uma criança bateu no seu sorvete e ele foi parar no chão.|-30 <1'],
 ['+|Achou um carrinho com sorvete de R$ 5 igualmente bom.|+0 >1','-|O vendedor de sorvete era rude e te xingou.|-0 <1','-|O carrinho derreteu e você ficou sem sorvete.|-0']);
SIT('*','🧇','Waffle de turista','A barraca vende waffle por R$ 25. A cobertura é de "nutella". Ou algo parecido.','Comprar com chocolate','Comprar com banana',
 ['+|Era nutella de verdade e a barraca ainda deu desconto.|+0 >1','-|Era chocolate de marca branca. Mas era barato.|-25','-|A cobertura derreteu e sujou sua camisa branca.|-30'],
 ['+|A banana tava no ponto e o waffle era crocante.|+0 >2','-|A banana tava verde e o waffle, mole.|-25','-|A barraca ficou sem banana na sua vez.|-0']);
SIT('*','🍫','Chocolate artesanal','Uma loja vende chocolate "bean-to-bar" por R$ 60. O vendedor tem bigode e fala difícil.','Comprar','Recusar com educação',
 ['+|O chocolate era divino e você virou "conhecedor".|+0 >2','-|Tinha gosto de chocolate normal. R$ 60 por chocolate normal.|-60','-|O vendedor te fez uma palestra de 40 minutos.|-0 P'],
 ['-|O vendedor te chamou de "burguês de supermercado".|-0 <1','+|O vendedor te deu uma amostra de graça.|+0 >1','-|Comprou o de supermercado e se arrependeu.|-20']);
SIT('*','🍞','Pão francês quentinho','O padeiro tira o pão do forno e o cheiro invade a rua. Tem fila de 20 pessoas.','Entrar na fila','Tentar outra padaria',
 ['+|Chegou o pão mais quentinho da vida. Você comeu no caminho.|+0 >2','-|O pão acabou quando falestavam 2 pessoas.|-0 <1','-|A fila demorou tanto que o pão esfriou.|-0'],
 ['+|Achou uma padaria melhor, com pão de queijo de graça.|+0 >2','-|A outra padaria tava fechada.|-0 <1','-|O pão da outra era dormido.|-10']);
SIT('*','🧈','Manteiga em falta','O mercado não tem manteiga. O gerente diz: "só tem margarina de cenoura".','Levar a margarina','Procurar manteiga',
 ['+|A margarina de cenoura era surpreendentemente boa.|+0 >1','-|Era pior que cola. O pão virou argamassa.|-10','-|O preço da margarina de cenoura era R$ 30.|-30'],
 ['+|Achou manteiga numa vendinha escondida.|+0 >2','-|Rodou 3 mercados e voltou com nada.|-0 <1','-|Um senhor te vendeu manteiga "de procedência mística".|-50']);
SIT('*','🥓','Bacon do cachorro-quente','O vendedor tem a mania de colocar bacon em tudo. Até no suco.','Pedir com bacon','Pedir sem bacon',
 ['+|Delicioso. O vendedor te chamou de "rei do bacon".|+0 >1','-|Passou mal de tanto bacon.|-20 P','-|O bacon era de tofu e ninguém avisou.|-10'],
 ['+|O sem bacon era mais leve e ele te elogiou.|+0 >1','-|O vendedor se ofendeu: "sem bacon é heresia".|-0 <1','-|Ele colocou bacon mesmo assim.|-0']);
SIT('*','🍹','Água de coco gelada','A água de coco é de R$ 8 na praia, R$ 15 no shopping e R$ 40 no restaurante chique.','Comprar na praia','Comprar no restaurante',
 ['+|Gelada e perfeita. O vendedor ainda deu o coco pra você comer.|+0 >1','-|O coco tava morno e o vendedor sumiu com seu troco.|-8','-|Era coco de ontem. Passou o dia no banheiro.|-8 P'],
 ['+|O garçom serviu em taça de cristal e você se sentiu um rei.|+0 >2','-|Pagou R$ 40 por um coco morno.|-40','-|O garçom deixou cair o coco no seu colo.|-40 <1']);
SIT('*','🥗','Salada de restaurante','O garçom traz uma salada com 3 folhas de alface, 1 tomate e 1 cenoura. Custa R$ 45.','Comer em silêncio','Reclamar do preço',
 ['+|Era orgânica e te deu um surto de energia.|+0 >2','-|Tinha uma lagarta. Ele disse "é proteína".|-0 P','-|Você ficou com fome e comeu o cardápio.|-0'],
 ['+|O gerente se comoveu e te deu uma sobremesa de graça.|+0 >1','-|O gerente te mandou "procurar um bandejão".|-0 <1','-|Todo mundo olhou você reclamando. Constrangimento.|-0']);
SIT('*','🥟','Pastel de feira','O pastel da feira custa R$ 8 e vem recheado com "o que sobrou". Todo mundo ama.','Pedir de carne','Pedir de queijo',
 ['+|Era carne de verdade e o pastel era enorme.|+0 >1','-|A carne era de procedência duvidosa.|-8 P','-|O pastel veio vazio. Só massa e esperança.|-8'],
 ['+|O queijo derreteu na boca e o feirante te deu caldo de cana.|+0 >2','-|O pastel veio com queijo coalho de sola.|-8','-|Queimou a língua e ficou sem gosto por 3 dias.|-0 P']);
SIT('*','🥤','Caldo de cana','O caldo de cana da feira custa R$ 7. A máquina faz um barulho de moinho em pânico.','Pedir com limão','Pedir puro',
 ['+|Perfeito e gelado. O feirante ainda te deu um copo extra.|+0 >1','-|A máquina travou e o caldo veio com pedaço de ferro.|-7','-|O caldo tava morno. Gosto de sofrimento.|-7'],
 ['+|Doce e geladinho. Era a melhor decisão do dia.|+0 >1','-|Passou mal de tanto açúcar.|-0 P','-|O feirante cobrou R$ 20 por um "copo tamanho gigante".|-20']);
SIT('*','🍉','Melancia na praia','Um vendedor de melancia grita: "tá doce! tá docinha!". Você não tem faca.','Comprar uma fatia','Comprar uma inteira',
 ['+|Doce como mel e gelada. O vendedor te deu mais uma fatia.|+0 >1','-|Tava seca e sem gosto.|-10','-|A fatia caiu na areia e você comeu mesmo assim.|-10'],
 ['-|A melancia pesava 10 kg e você carregou até o ponto.|-30 <1','+|Dividiu com a turma e virou herói da praia.|+0 >2','!|Deixou cair no pé e ficou 2 dias mancando.|-50 P']);
SIT('*','🍍','Abacaxi com pimenta','Um vendedor oferece abacaxi com pimenta: "é a nova moda, doutor".','Provar','Recusar',
 ['+|Gostou! Virou sua nova obsessão.|+0 >1','-|A pimenta era de nível nuclear. Chorou por 30 minutos.|-0 P','-|Cobraram R$ 20 por 3 pedaços.|-20'],
 ['+|Achou um vendedor de abacaxi doce, sem pimenta.|+0 >1','-|O vendedor ficou ofendido e te deu um abacaxi podre.|-10','-|Todo mundo na praia te olhou torto.|-0']);
SIT('*','🌽','Milho cozido','O vendedor de milho cozido grita: "milho quentinho!". A espiga é do tamanho de uma baguete.','Comprar','Esperar o próximo',
 ['+|Era doce e macio. Você comeu com manteiga.|+0 >1','-|Era milho de ração. Dentes quebrados.|-10','-|Cobraram R$ 15 por uma espiga pequena.|-15'],
 ['+|O próximo era melhor e ainda deu desconto.|+0 >1','-|O vendedor sumiu e ninguém mais passou.|-0 <1','-|O milho queimou e virou carvão.|-0']);
SIT('*','🥜','Amendoim torrado','O vendedor de amendoim passa gritando: "é torradinho, quentinho!". Tem um saquinho por R$ 5.','Comprar','Passar',
 ['+|O amendoim estava crocante. O vendedor te deu mais um saco.|+0 >1','-|Era amendoim de ontem. Tava mole.|-5','-|Teve alergia e ficou com a cara inchada.|-60 P'],
 ['+|Ficou tranquilo e seguiu seu caminho.|+0 >1','-|O vendedor te seguiu por 3 quarteirões.|-0 <1','-|Ele te xingou e você ficou sem jeito.|-0']);
SIT('*','🍿','Pipoca do carrinho','A pipoca do carrinho cheira bem e só custa R$ 3. Mas o carrinho parece de 1980.','Comprar','Procurar um cinema',
 ['+|Era uma pipoca perfeita, na hora certa.|+0 >1','-|A pipoca era velha e murcha.|-3','-|O carrinho quebrou e a pipoca voou pra todo lado.|-3 <1'],
 ['+|No cinema ganhou um combo de brinde.|+0 >1','-|Pagou R$ 40 numa pipoca de caixinha.|-40','-|O cinema estava fechado.|-0 <1']);
SIT('*','🥯','Bagel de turista','Um quiosque vende "bagels autênticos de Nova York" por R$ 25. O padeiro é de Madureira.','Comprar','Comer pão normal',
 ['+|O bagel era surpreendentemente bom. Nova York no Rio.|+0 >1','-|Era pão de forma furado. R$ 25.|-25','-|O padeiro cobrou "taxa de sotaque".|-30'],
 ['+|O pão normal tava mais gostoso e mais barato.|+0 >1','-|O pão tava dormido.|-5','-|O padeiro te chamou de "sem frescura".|-0']);
SIT('*','🧉','Mate gelado','O vendedor de mate na praia grita "olha o mate!" a cada 8 segundos. Já são 2 horas.','Comprar um','Pedir pra ele parar',
 ['+|O mate era gelado e ele te deu um biscoito.|+0 >1','-|O mate era quente e ele te cobrou R$ 12.|-12','-|Tomou 4 e passou a noite acordado.|-0 P'],
 ['+|Ele parou e ficou com pena. Te deu um mate de graça.|+0 >1','-|Ele gritou mais alto: "olha o mate!".|-0 <1','-|Ele se ofendeu e foi pro outro lado da praia.|-0']);
