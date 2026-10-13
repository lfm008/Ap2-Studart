// ======= GERAIS 3: trabalho, amor e amizade =======
SIT('*','🏢','Reunião interminável','A reunião era de 15 minutos e já passou de 2 horas. O chefe tem uma apresentação de 80 slides.','Fingir interesse','Fingir que o celular tocou',
 ['+|O chefe elogiou sua "atenção" e te deu uma promoção.|+200 >3','-|Dormiu de olhos abertos e o chefe percebeu.|-0 <2','-|Fez uma pergunta tola e a reunião dobrou.|-0 P'],
 ['+|Saiu da sala e tomou um café em paz.|+0 >2','-|Todos souberam que o celular era de brinquedo.|-0 <2','-|O chefe te seguiu pra corredor.|-0 <1']);
SIT('*','🖨️','Impressora do escritório','A impressora emperrou com o relatório do chefe. A impressora tem fama de "assombrada".','Chamar o TI','Bater nela',
 ['+|O TI resolveu em 1 minuto e você virou fã.|+0 >2','-|O TI demorou 3 horas e o chefe ficou furioso.|-0 P','-|O TI achou que você quebrou de propósito.|-100'],
 ['+|A impressora voltou a funcionar por milagre.|+0 >2','!|Machucou a mão na batida.|-60 P','-|Quebrou a impressora de vez.|-400']);
SIT('*','☕','Cafeteira da firma','A cafeteira da firma tem um sistema de "vale-café". Hoje o seu acabou. O chefe acabou de passar.','Pedir fiado','Fazer chá',
 ['+|O colega pagou o seu e você ganhou um amigo.|+0 >2','-|O chefe viu e te chamou de "pidão".|-0 <1','-|O colega cobrou juros de 30%.|-10'],
 ['+|O chá acalmou o dia e todos elogiaram.|+0 >2','-|O chá estava horrível e todos riram.|-0 <1','-|Derrubou a xícara no teclado.|-300']);
SIT('*','🍕','Pizza de sexta','Todo mundo faz vaquinha pra pizza de sexta. Você está duro e o preço é R$ 30.','Entrar na vaquinha','Fingir que tem dieta',
 ['+|Comeu bem e todos te elogiaram.|+0 >2','-|A pizza chegou fria e a vaquinha foi em vão.|-30','-|O entregador sumiu com o dinheiro.|-30'],
 ['-|O colega te viu comendo escondido e te zoou.|-0 <1','+|Economizou e ainda levou pizza de sobra.|+30 >1','-|Todo mundo achou "sovina".|-0']);
SIT('*','👔','Dress code','O RH mandou um e-mail: "sexta é dia de roupa casual". Você chegou de bermuda e chinelo. O chefe de terno.','Ficar na sala','Voltar pra casa trocar',
 ['+|O chefe riu e achou "ousado".|+50 >2','-|O chefe te mandou pra casa.|-0 <2','-|O RH te advertiu por escrito.|-0 <1'],
 ['-|Demorou 2 horas e perdeu uma reunião.|-0 P','+|Voltou de calça e ganhou elogio.|+0 >1','-|Foi tão rápido que esqueceu o crachá.|-0 <1']);
SIT('*','🗂️','Planilha infinita','O chefe te passou uma planilha com 40 mil linhas pra "dar uma olhada". Prazo: 1 hora.','Fazer tudo','Fazer parte e inventar o resto',
 ['+|Conseguiu em 55 minutos e o chefe te chamou de gênio.|+300 >3','-|Travou o Excel e perdeu tudo.|-0 <3','-|Errou uma fórmula e o chefe viu.|-0 <2'],
 ['+|O chefe nem leu e te elogiou.|+100 >2','-|O chefe leu e percebeu a farsa.|-300 <2','-|A planilha foi enviada pra diretoria.|-500 <3']);
SIT('*','🧑‍💼','Almoço com o chefe','O chefe te convida pra almoçar. Ele paga, mas quer "conversar sobre seu desempenho".','Aceitar','Inventar um compromisso',
 ['+|Foi um papo ótimo e ele te deu um aumento.|+500 >3','-|Ele te criticou por 1 hora.|-0 <2','-|Ele pagou e esqueceu a carteira. Sobrou pra você.|-100'],
 ['-|Ele descobriu a mentira e te deu a pior escala.|-0 P','+|Ele aceitou e remarcou. Você ganhou tempo.|+0 >1','-|Todos acharam que você tava com medo.|-0 <1']);
SIT('*','🧳','Viagem a trabalho','O chefe te manda viajar a Brasília por 3 dias. Você odeia o calor e a burocracia de lá.','Aceitar','Pedir pra ir outra pessoa',
 ['+|Foi uma viagem tranquila e você ganhou diárias extras.|+300 >3','-|O hotel era um pesadelo e perdeu a mala.|-300 <2','-|A reunião foi cancelada e você voltou sem nada.|-0 <2'],
 ['-|O chefe achou preguiça e te cortou a comissão.|-200 <2','+|Outra pessoa foi e você ficou no escritório em paz.|+0 >2','-|A pessoa errou e o chefe te culpou.|-0 <1']);
SIT('*','⏰','Ponto eletrônico','O ponto eletrônico travou e você chegou atrasado. O RH diz "tem que justificar por escrito".','Inventar uma desculpa','Admitir o atraso',
 ['+|A desculpa colou e o RH deu risada.|+0 >2','-|A desculpa era tão ruim que o RH te mandou prova.|-0 <2','-|Foi descoberto e levou advertência.|-150'],
 ['+|O RH respeitou a honestidade e te deu bônus.|+100 >2','-|Levou desconto no salário.|-200','-|O chefe te deu um sermão.|-0 <1']);
SIT('*','🧑‍🔧','Colega folgado','Um colega some toda tarde e você faz o trabalho dele. O chefe nunca percebe.','Denunciar','Cobrar do colega',
 ['+|O chefe agiu e o colega foi demitido. Você ganhou a vaga.|+300 >3','-|O chefe disse "cada um com seu problema".|-0 <2','-|O colega descobriu e te perseguiu.|-0 <2'],
 ['+|O colega se desculpou e passou a ajudar.|+0 >2','-|O colega te chamou de "fofoqueiro".|-0 <1','-|Ficou pior: o colega sumiu o dia todo.|-0 <2']);
SIT('*','🍷','Festa de fim de ano','A festa de fim de ano da firma tem open bar. O chefe tá bêbado e te chama pra dançar.','Dançar','Fugir',
 ['+|Foi o assunto da firma e o chefe te adorou.|+300 >3','-|Pisou no pé do chefe e ele te demitiu.|-1000 P','-|Alguém filmou e postou.|-0 <2'],
 ['+|Fugiu e ninguém notou. Dormiu em paz.|+0 >2','-|O chefe te achou "chato" e te rebaixou.|-300 <1','-|Foi pego fugindo pela janela.|-0 <2']);
SIT('*','🎁','Amigo secreto da firma','Você tirou o colega de quem mais gosta. O valor é de R$ 50. Você tem um poema de amor.','Dar o poema','Dar um presente comum',
 ['+|Ele amou e vocês começaram a namorar.|+0 >3','-|Ele leu o poema na festa e todo mundo riu.|-0 <3','-|Descobriu que ele é casado.|-0 <2'],
 ['+|Ele adorou o presente e te abraçou.|+0 >2','-|O presente era igual ao que ele ganhou de outro.|-50','-|Ele mal agradeceu.|-0 <1']);
SIT('*','🎤','Apresentação pra diretoria','Você vai apresentar um projeto pra diretoria. O ar-condicionado quebrou e a sala está a 38 graus.','Apresentar suado','Pedir pra remarcar',
 ['+|Impressionou a diretoria e foi promovido.|+500 >3','-|Desmaiou no meio da apresentação.|-0 P','-|O projetor falhou e você teve que improvisar.|-0 <2'],
 ['+|A diretoria remarcou e você apresentou melhor.|+200 >2','-|O diretor achou "falta de comprometimento".|-0 <2','-|Outro colega apresentou no seu lugar.|-0 <2']);
SIT('*','🧾','Reembolso de despesas','Você viajou a trabalho e gastou R$ 800. O RH diz "só reembolsamos com nota fiscal".','Mostrar as notas','Inventar notas',
 ['+|O RH aceitou e te pagou em 3 dias.|+800 >2','-|O RH perdeu uma nota e você perdeu R$ 200.|-200','-|O reembolso demorou 6 meses.|-0 <2'],
 ['-|O RH descobriu e te demitiu por justa causa.|-2000 P','+|O RH não percebeu e você lucrou.|+400 >2','-|O contador te ameaçou.|-0 <2']);
SIT('*','🧠','Treinamento corporativo','A empresa te mandou pra um treinamento de "liderança consciente". O palestrante é um coach que fala com os braços.','Fingir interesse','Dormir',
 ['+|Aprendeu algo útil e foi promovido.|+200 >3','-|Foi chamado pra dinâmica de grupo e passou vergonha.|-0 <2','-|O coach te fez abraçar um estranho.|-0 <2'],
 ['-|O coach te acordou na frente de todos.|-0 <2','+|Dormiu bem e acordou descansado.|+0 >1','-|O RH soube e te advertiu.|-100']);
SIT('*','👩‍💼','Promoção na empresa','O chefe te chama pra uma "conversa séria". Pode ser promoção ou demissão.','Ir com otimismo','Pedir uma pista',
 ['+|Era promoção! Aumento de 40%.|+800 >3','-|Era demissão disfarçada de "reestruturação".|-500 P','-|Era só uma reunião de rotina.|-0 <1'],
 ['+|O chefe riu e disse "calma, é coisa boa".|+500 >3','-|O chefe ficou sério e te mandou sentar.|-0 <2','-|O chefe disse "depois a gente fala".|-0 <1']);
SIT('*','🏠','Home office','Você trabalha em home office. Seu cachorro entra na reunião de vídeo e late pro CEO.','Pedir desculpa','Rir',
 ['+|O CEO riu e disse "adorei o colega peludo".|+100 >3','-|O CEO se irritou e te mandou desligar.|-0 <2','-|O cachorro puxou o fio e a reunião caiu.|-0 <2'],
 ['+|Todos riram e a reunião ficou mais leve.|+0 >3','-|O CEO achou desrespeito.|-0 <3','-|O cachorro fez xixi no tapete.|-100']);
SIT('*','📧','E-mail enviado errado','Você mandou um e-mail "pro grupo" com uma fofoca do chefe. Era o grupo errado.','Tentar apagar','Assumir',
 ['+|Conseguiu apagar antes que alguém lesse.|+0 >3','-|O e-mail já foi lido por 200 pessoas.|-0 <3','-|O chefe respondeu: "vamos conversar".|-0 <3'],
 ['+|O chefe riu e te chamou de "corajoso".|+100 >2','-|O chefe te demitiu na hora.|-1000 P','-|Todos te olharam torto por semanas.|-0 <2']);
SIT('*','🎲','Aposta da firma','A firma faz um bolão da Copa. Você aposta que o Brasil perde. Todos te olham como traidor.','Manter a aposta','Mudar pra Brasil',
 ['+|O Brasil perdeu e você levou R$ 800.|+800 >3','-|O Brasil ganhou e você virou o "vilão da firma".|-0 <3','-|Todos te chamaram de "pé-frio".|-0 <2'],
 ['+|O Brasil ganhou e você levou R$ 300.|+300 >2','-|O Brasil perdeu e você ficou com raiva.|-0 <2','-|Ninguém mais falou com você.|-0 <1']);
SIT('*','🕶️','Primeiro encontro','Você marcou o primeiro encontro. A pessoa chegou 40 minutos atrasada e diz "o trânsito estava terrível".','Esperar','Ir embora',
 ['+|O encontro foi ótimo e vocês se apaixonaram.|+0 >3','-|A pessoa só falou de si mesma.|-0 <2','-|A pessoa foi embora no meio.|-0 <2'],
 ['-|Descobriu depois que a pessoa era incrível.|-0 <2','+|Foi tomar um sorvete e achou um amor melhor.|+0 >2','-|A pessoa te xingou por mensagem.|-0 <1']);
SIT('*','🌹','Presente de aniversário de namoro','Seu aniversário de namoro é amanhã. Você esqueceu e não tem dinheiro.','Fazer um poema','Comprar um presente caro',
 ['+|O poema emocionou e você ganhou um abraço.|+0 >3','-|O poema era ruim e a pessoa riu.|-0 <2','-|A pessoa disse "só isso?".|-0 <1'],
 ['+|O presente foi perfeito e vocês jantaram.|+0 >3','-|O presente era o mesmo que ela já tinha.|-300','-|Pagou R$ 500 e a pessoa não gostou.|-500']);
SIT('*','💔','Término de namoro','Seu namoro acabou. Agora você precisa decidir: deixar as coisas dele(a) ou devolver.','Devolver','Ficar com tudo',
 ['+|Foi civilizado e vocês continuaram amigos.|+0 >3','-|Ele(a) jogou tudo na sua cara.|-0 <2','-|Perdeu o chaveiro da sorte.|-0 <1'],
 ['-|Ele(a) apareceu na sua porta pedindo de volta.|-0 <3','+|Vendeu tudo no OLX e ganhou um dinheirinho.|+200 >2','-|Ele(a) postou uma indireta.|-0 <2']);
SIT('*','🥂','Casamento de amigo','Você foi convidado pro casamento de um amigo. Você tem que decidir: presente ou dinheiro?','Dar um presente','Dar dinheiro',
 ['+|Os noivos adoraram e te deram um lugar de honra.|+0 >3','-|O presente era repetido: eram 4 liquidificadores.|-100','-|A noiva olhou torto.|-0 <1'],
 ['+|Os noivos agradeceram e você ganhou um brinde.|+0 >3','-|Deu R$ 20 e foi chamado de "mão de vaca".|-20','-|O pai da noiva te olhou feio.|-0 <1']);
SIT('*','🎂','Festa surpresa','Seus amigos organizaram uma festa surpresa pra você. Você chegou 2 horas antes do combinado.','Fingir que não viu','Entrar e estragar a surpresa',
 ['+|Fingiu perfeitamente e todos aplaudiram.|+0 >3','-|Esqueceu e gritou "SURPRESA!" antes.|-0 <2','-|Os amigos descobriram que você sabia.|-0 <1'],
 ['-|Os amigos ficaram chateados e foram embora.|-0 <3','+|Todos riram e a festa começou mais cedo.|+0 >2','-|O bolo ainda não tinha chegado.|-0 <2']);
SIT('*','🏖️','Viagem com amigos','Os amigos te convidam pra uma viagem a Búzios. O Airbnb custa R$ 2.000 por pessoa.','Aceitar','Recusar',
 ['+|A viagem foi incrível e vocês criaram memórias.|+0 >3','-|O Airbnb era um pesadelo e vocês dormiram no chão.|-300','-|Perdeu a carteira na praia.|-250'],
 ['-|Os amigos zoaram sua ausência por meses.|-0 <2','+|Economizou e comprou algo útil.|+200 >2','-|Todo mundo voltou bronzeado e você branco.|-0 <1']);
SIT('*','🏎️','Corrida de rua','Seu amigo te desafia pra uma corrida de rua. O carro dele é um fusca 78 e o seu é um Uno 2005.','Aceitar','Recusar',
 ['+|Ganhou por milagre e virou lenda.|+200 >3','!|Bateu o carro num poste.|-500 <2','-|Foi parado pela polícia.|-400 P'],
 ['-|O amigo te chamou de "medroso" por meses.|-0 <2','+|Ficou em casa e dormiu tranquilo.|+0 >1','-|O amigo ganhou e fez festa.|-0 <1']);
SIT('*','🍺','Boteco com os amigos','Os amigos te chamam pro boteco de sempre. Você tem R$ 50. A conta sempre passa de R$ 200.','Ir e pagar sua parte','Fingir que tem compromisso',
 ['+|A conta foi justa e todos se divertiram.|+0 >2','-|A conta foi de R$ 400 e todo mundo sumiu.|-400','-|Pagou tudo e ninguém agradeceu.|-200'],
 ['-|Os amigos descobriram e te zoaram.|-0 <2','+|Economizou e ainda ganhou um chope de brinde.|+30 >1','-|Perdeu a melhor noite do ano.|-0 <2']);
SIT('*','📸','Foto de grupo','Seus amigos querem uma foto de grupo na praia. Você está de cueca (ou sunga) e a barriga aparece.','Posar','Segurar a barriga',
 ['+|A foto ficou ótima e você virou capa do grupo.|+0 >3','-|Alguém postou sem avisar e viralizou.|-0 <2','-|A foto saiu horrível.|-0 <2'],
 ['+|Ficou ótimo e ninguém notou a barriga.|+0 >2','-|A barriga escapou e todos riram.|-0 <2','-|Alguém te cutucou e você caiu.|-0 <1']);
SIT('*','🏖️','Aniversário na praia','Seu aniversário é no verão. Seus amigos te levam pra praia. Alguém esqueceu o bolo.','Improvisar um bolo de sorvete','Comprar um bolo pronto',
 ['+|O bolo de sorvete fez sucesso e todos cantaram.|+0 >3','-|O sorvete derreteu e virou sopa.|-0 <2','-|O vendedor cobrou R$ 80.|-80'],
 ['+|O bolo era ótimo e todo mundo comeu.|+0 >2','-|O bolo caiu na areia.|-60 <1','-|Foi chamado de "pão-duro".|-0']);
SIT('*','🚗','Carona de amigo','Um amigo te oferece carona de moto. O capacete dele tá quebrado e ele bebeu.','Aceitar a carona','Recusar',
 ['+|Chegou em casa e agradeceu ao universo.|+0 >3','!|Caiu da moto e ralou tudo.|-150 <2','-|A polícia parou e levou os dois.|-500 P'],
 ['+|Pegou um táxi e chegou tranquilo.|+0 >2','-|O amigo ficou chateado.|-0 <1','+|Soube que o amigo bateu a moto. Escapou por pouco.|+0 >2']);
SIT('*','💬','Fofoca do grupo','Alguém mandou um print de conversa do grupo. Tem seu nome e uma opinião sua, tirada de contexto.','Explicar','Negar',
 ['+|Explicou e todos entenderam.|+0 >2','-|A explicação piorou a situação.|-0 <2','-|Todos pararam de falar com você.|-0 <3'],
 ['-|Todos sabem que é verdade.|-0 <3','+|Todos acreditaram e o assunto morreu.|+0 >1','-|Descobriram o autor da fofoca: seu melhor amigo.|-0 <2']);
SIT('*','🥘','Almoço de domingo','O almoço de domingo na casa da sogra é obrigatório. A comida é "criativa". O tempero é "misterioso".','Comer tudo','Dizer que está de dieta',
 ['+|A sogra amou e te deu uma marmita.|+0 >3','!|Passou mal e foi pro banheiro.|-30 P','-|Comeu demais e dormiu no sofá.|-0 <1'],
 ['-|A sogra ficou ofendida e te serviu duas vezes.|-0 <2','+|A sogra riu e te serviu salada.|+0 >1','-|Todo mundo olhou torto.|-0 <1']);
SIT('*','🎄','Natal na casa da família','O Natal é na casa do tio. Ele sempre conta as mesmas piadas e coloca música de karaokê.','Participar','Fingir sono',
 ['+|A família te adorou e você ganhou presente.|+100 >3','-|Cantou "Evidências" e todos choraram. Constrangedor.|-0 <2','-|O tio te fez dançar.|-0 <2'],
 ['+|Dormiu em paz e acordou na hora do peru.|+0 >2','-|O tio te acordou pra "ouvir a piada".|-0 <2','-|A tia te deu um beliscão.|-0 <1']);
