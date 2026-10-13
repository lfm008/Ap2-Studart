// ======= ABSURDAS PESADAS 2 (humor exagerado/negro; mira instituições, vícios e situações, não pessoas reais) =======
SIT('*','🦸','Vigilante de condomínio','O vigilante do condomínio se acha o Batman. Hoje ele te prendeu "por atitude suspeita" na portaria.','Pedir pra soltar','Exigir um advogado',
 ['+|Ele te soltou e pediu desculpas, com uma reverência.|+0 >2','-|Ele te algemou na grade e foi almoçar.|-0 P','-|Ele te multou em R$ 200 "por suspeita".|-200'],
 ['+|O advogado era o síndico e te liberou rindo.|+50 >2','-|O síndico te multou por "exibicionismo".|-150','-|Todo mundo filmou e postou.|-0 <2']);
SIT('*','🐷','Churrasco de porco','Um vizinho pede pra você ajudar a matar um porco pro churrasco. Você é vegetariano em segredo.','Ajudar','Confessar a verdade',
 ['+|O porco fugiu e você virou herói.|+0 >2','!|Foi mordido pelo porco. Ele tinha raiva.|-100 P','-|Passou mal ao ver o sangue e desmaiou.|-0 <2'],
 ['+|O vizinho entendeu e te deu um pão com ovo.|+0 >1','-|Todos riram e te chamaram de "frutinha".|-0 <2','-|Foi excluído do churrasco.|-0 <1']);
SIT('*','🏛️','Fiscal da prefeitura','Um fiscal aparece e diz: "sua barraca está irregular. Vou multar em R$ 5.000". Ele olha pro seu bolso.','Pagar o "cafezinho"','Exigir o procedimento',
 ['+|Ele aceitou R$ 50 e sumiu. Você economizou R$ 4.950.|+0 >2','-|Ele pediu R$ 500 e ainda multou.|-500','-|Ele era do corregedoria e te levou preso.|-1000 P'],
 ['+|Ele se atrapalhou e te liberou sem multa.|+0 >2','-|Ele multou em R$ 5.000 mesmo assim.|-5000','-|Ele fechou sua barraca por 3 meses.|-1000 P']);
SIT('*','🚔','Policial preguiçoso','Um policial dorme no carro da viatura, em frente a uma loja assaltada. Você filma.','Postar o vídeo','Acordar o policial',
 ['+|O vídeo viralizou e o policial foi punido.|+100 >3','-|O policial era parente do delegado e você foi investigado.|-500 <2','-|O vídeo foi apagado pela plataforma.|-0 <1'],
 ['+|Ele acordou e prendeu o assaltante.|+100 >3','-|Ele acordou e te prendeu por "perturbar o sono".|-300 P','-|Ele te xingou e voltou a dormir.|-0 <1']);
SIT('*','🧛','Vampiro do metrô','Um sujeito de capa preta e dentes de plástico assusta passageiros no metrô. Ele grita: "eu bebo sangue!".','Rir dele','Chamar o segurança',
 ['+|Ele riu junto e te deu um chaveiro de morcego.|+0 >2','-|Ele se ofendeu e te mordeu o braço (de plástico).|-0 <2','-|O vampiro era fiscal do metrô e te multou.|-100'],
 ['+|O segurança era um fã dele e vocês fizeram selfie.|+0 >2','-|O segurança disse "é só um doido".|-0 <2','-|Ninguém acreditou e você virou o doido.|-0 <1']);
SIT('*','🧟','Zumbi de segunda','Segunda-feira, 7h. O trânsito parece um filme de zumbi. Você também parece.','Pegar o café','Fingir que é zumbi',
 ['+|O café te acordou e você virou "o vivo" do escritório.|+0 >2','-|Derramou o café na camisa branca.|-30','-|O café tava frio e horrível.|-10'],
 ['+|Todos te acharam hilário e te pagaram um café.|+0 >2','-|Foi confundido com um zumbi de verdade.|-0 <2','-|Alguém filmou e viralizou.|-0 <2']);
SIT('*','🏴‍☠️','Pirata do camelô','Um camelô vende "filmes originais" a R$ 5. Ele diz que a qualidade é "cinema 4K". É tudo cópia gravada num celular.','Comprar um','Recusar',
 ['+|O filme era bom e a gravação ótima.|+0 >2','-|O filme era uma pessoa dormindo na sala.|-5','-|O DVD travou o aparelho.|-100'],
 ['+|Viu o filme de graça num streaming.|+0 >2','-|O camelô te xingou em português e inglês.|-0 <1','-|Todo mundo te chamou de "chato".|-0']);
SIT('*','🐍','Cobra na laje','Uma cobra apareceu na sua laje. O vizinho jura que "é de estimação". A cobra olha pra você com fome.','Chamar os bombeiros','Pedir ajuda ao vizinho',
 ['+|Os bombeiros chegaram e capturaram a cobra.|+0 >3','-|Os bombeiros demoraram 5 horas.|-0 P','-|A cobra fugiu pro apartamento do vizinho.|-0 <1'],
 ['+|O vizinho pegou a cobra e te deu uma cerveja.|+0 >2','!|A cobra mordeu o vizinho e vocês foram ao hospital.|-150 P','-|A cobra era do vizinho e ele te cobrou "taxa de aluguel".|-200']);
SIT('*','🦇','Morcego no quarto','Um morcego entrou no seu quarto de madrugada. Você acorda com ele no seu travesseiro.','Gritar','Fingir que dorme',
 ['+|O morcego saiu pela janela e você virou o herói do prédio.|+0 >2','-|O grito acordou o prédio inteiro.|-0 <2','-|O morcego se assustou e te mordeu.|-0 P'],
 ['+|O morcego dormiu e foi embora de manhã.|+0 >2','-|O morcego dormiu 3 dias no seu quarto.|-0 P','-|Passou mal de nervoso.|-60 P']);
SIT('*','🐙','Polvo no prato','O restaurante serve polvo. O prato olha pra você. Ele parece vivo.','Comer corajosamente','Recusar',
 ['+|Era delicioso e o chef te cumprimentou.|+0 >3','-|O polvo ainda mexia e você gritou.|-0 <2','!|Engasgou com um tentáculo.|-60 P'],
 ['+|Pediu um frango e ficou feliz.|+0 >1','-|O garçom riu da sua cara.|-0 <1','-|Todo mundo achou "frouxo".|-0 <1']);
SIT('*','🎅','Papai Noel de shopping','O Papai Noel do shopping tá fumando atrás da lixeira. As crianças veem. Elas têm perguntas.','Chamar o segurança','Fingir que não viu',
 ['+|O segurança tirou o Papai Noel e todos aplaudiram.|+0 >2','-|O segurança era o fumante e te ameaçou.|-0 <2','-|As crianças choraram e a mãe te culpou.|-0 <2'],
 ['+|O Papai Noel te deu um pirulito de agradecimento.|+0 >1','-|Uma criança viu e gritou. Virou escândalo.|-0 <2','-|O Papai Noel te seguiu até o carro.|-0']);
SIT('*','🧚','Fada do dente','Seu sobrinho perdeu um dente. Ele quer que a "fada" deixe R$ 100. Você só tem R$ 5.','Dar os R$ 5','Dar R$ 100',
 ['+|O sobrinho ficou feliz com os R$ 5: "a fada é pobre".|+0 >2','-|O sobrinho chorou e acusou a fada de "sovina".|-0 <2','-|O sobrinho descobriu que era você.|-0 <2'],
 ['+|O sobrinho ficou radiante e te abraçou.|+0 >3','-|O sobrinho contou pros primos e todos exigiram R$ 100.|-400','-|Você ficou sem dinheiro pro mês.|-100']);
SIT('*','🔮','Cartomante','Uma cartomante te diz: "você vai ficar rico". Ela te cobra R$ 100. Você se pergunta se ficaria rico sem pagar.','Pagar e acreditar','Recusar',
 ['+|Ganhou R$ 200 no bicho no mesmo dia.|+200 >3','-|A previsão era "rico de espírito".|-100','-|Ela te vendeu um amuleto de R$ 80.|-180'],
 ['+|Foi embora e achou R$ 50 no bolso.|+50 >1','-|Ela amaldiçoou seu cachorro.|-0 <2','-|Tropeçou na saída.|-30 <1']);
SIT('*','🧙','Mágico de festa','O mágico da festa pede uma carteira emprestada. Você cede. Ele a faz sumir. De verdade.','Pedir de volta','Rir',
 ['+|Ele devolveu cheia de dinheiro. Era um truque.|+300 >3','-|Ele fugiu e levou sua carteira.|-300 <2','-|A carteira apareceu no bolso do vizinho.|-0 <2'],
 ['-|O mágico sumiu com ela e a festa terminou.|-300 <2','+|O mágico riu e devolveu com um bônus.|+100 >2','-|Todo mundo achou que você tava rindo de nervoso.|-0 <1']);
SIT('*','🧞','Lâmpada mágica de camelô','Um camelô vende uma lâmpada mágica por R$ 50. "Esfregue e peça 3 desejos". Você nunca acredita, mas esfrega.','Esfregar','Desconfiar',
 ['+|Apareceu uma nota de R$ 100. Alguém tava rindo atrás da árvore.|+100 >2','-|Apareceu o camelô pedindo mais R$ 50.|-50','-|A lâmpada era de plástico e quebrou na mão.|-50'],
 ['+|Foi embora e achou uma moeda no chão.|+5 >1','-|O camelô te xingou por "falta de fé".|-0 <1','-|Alguém roubou seu celular.|-250']);
SIT('*','🎤','Candidato maluco','Um candidato promete "acabar com a segunda-feira" e "abolir o imposto de renda". Ele distribui panfletos.','Aplaudir','Perguntar como',
 ['+|Ele te deu um brinde e te chamou de "ministro".|+50 >2','-|Ele te abraçou e te fez posar numa foto.|-0 <2','-|Ele gravou seu apoio sem permissão.|-0 <2'],
 ['-|Ele ficou irritado e te chamou de "burguês".|-0 <2','+|Ele disse "depois eu explico" e sumiu.|+0 >1','-|O panfleto era de um bar.|-0']);
SIT('*','🏆','Prêmio de bairro','O bairro vai eleger "o melhor morador do ano". Todos os candidatos são conhecidos por fofoca.','Se candidatar','Votar em outro',
 ['+|Ganhou o prêmio e foi aplaudido em toda a rua.|+100 >3','-|Perdeu pra um cachorro.|-0 <2','-|Descobriram seus segredos e te destruíram.|-0 <3'],
 ['+|O candidato que você apoiou ganhou e te deu um churrasco.|+50 >2','-|O candidato que você apoiou perdeu e te culpou.|-0 <2','-|Foi chamado de "vendido".|-0 <1']);
SIT('*','🥁','Bloco dos Sujos','O bloco dos Sujos desfila no bairro. Eles jogam lama em quem passa. Você está de roupa nova.','Entrar no bloco','Desviar',
 ['+|Virou o "rei da lama" e dançou a noite toda.|+0 >3','-|Estragou a roupa nova e a carteira.|-200','-|Alguém jogou lama no seu celular.|-250'],
 ['+|Desviou e passou ileso.|+0 >2','-|Escorregou na poça e caiu.|-0 <2','-|Foi cercado e jogaram lama mesmo assim.|-0 <1']);
SIT('*','🕺','Concurso de dança','Você foi arrastado pra um concurso de dança no bar. O prêmio é uma garrafa de uísque.','Dançar','Fugir',
 ['+|Dançou tão mal que virou "estilo".|+80 >3','!|Torceu o tornozelo na pirueta.|-60 <2','-|Escorregou e derrubou a mesa.|-100 <1'],
 ['-|Os amigos te seguraram e te arrastaram de volta.|-0 <1','+|Escapou e ficou em casa dormindo.|+0 >1','-|O dono te vaiou.|-0']);
SIT('*','🐕','Cachorro herói','Um cachorro de rua te segue até em casa. Ele late pra um ladrão que tava no seu prédio.','Adotar o cachorro','Mandar embora',
 ['+|O cachorro virou herói e a prefeitura te deu uma medalha.|+200 >3','-|O cachorro destruiu o sofá.|-200','-|O cachorro tinha dono, que apareceu e te acusou.|-0 <2'],
 ['-|O cachorro voltou com a matilha.|-0 <2','+|O cachorro foi embora e deixou um osso de presente.|+0 >1','-|O ladrão voltou e roubou tudo.|-300']);
SIT('*','🌃','Fantasma do prédio','Todo mundo diz que o prédio tem um fantasma. Você ouve passos de madrugada.','Investigar','Ignorar',
 ['+|Era o gato do porteiro. Virou o mascote.|+0 >2','-|Era mesmo um fantasma (um vizinho sonâmbulo).|-0 <2','!|Tropeçou no escuro e caiu na escada.|-60 <2'],
 ['-|Os passos ficaram mais fortes e você não dormiu.|-0 P','+|Dormiu em paz e acordou sem susto.|+0 >2','-|O fantasma foi embora e levou seu sapato.|-0 <1']);
SIT('*','🎭','Máscara de Carnaval','Você foi a um baile de máscaras. A máscara tem 40 anos e cheira a mofo. Alguém te abraça sem pedir.','Aceitar o abraço','Recuar',
 ['+|Era um velho amigo e vocês viraram a noite.|+0 >3','-|Era alguém do ex. Climão.|-0 <2','-|A máscara caiu e todos viram sua cara de desespero.|-0 <2'],
 ['+|Evitou o abraço e conheceu alguém melhor.|+0 >2','-|Alguém te empurrou.|-0 <1','-|Foi chamado de "esnobe".|-0']);
SIT('*','🛡️','Blitz do pipoqueiro','O pipoqueiro da praça foi multado por "excesso de sal". Ele chora no seu ombro.','Consolar','Aproveitar a pipoca',
 ['+|Ele agradeceu e te deu pipoca de graça pro resto da vida.|+0 >3','-|Ele te abraçou por 20 minutos.|-0 P','-|Ele te pediu emprestado R$ 500.|-500'],
 ['+|A pipoca estava ótima e ele nem notou.|+0 >2','-|Ele te viu e te chamou de "insensível".|-0 <2','-|Alguém te olhou torto.|-0 <1']);
SIT('*','🏰','Castelo de areia','Você faz um castelo de areia na praia. Um turista pisa nele de propósito. Ele ri.','Reconstruir','Pisar no castelo dele',
 ['+|O castelo ficou ainda melhor e virou atração.|+30 >3','-|O turista pisou de novo.|-0 <1','-|A maré subiu e levou o castelo.|-0 <2'],
 ['+|O turista pediu desculpas e te pagou uma cerveja.|+20 >2','-|O turista era o filho do dono da barraca e você foi expulso.|-100 <2','-|A mãe do turista te xingou.|-0 <1']);
SIT('*','🎢','Montanha-russa de São Cristóvão','A montanha-russa da feira de São Cristóvão tem 40 anos e só uma trava. Você tem medo de altura.','Andar nela','Ficar embaixo',
 ['+|Foi a melhor emoção da vida. Gritou até ficar rouco.|+0 >3','!|A trava soltou e você virou astronauta por 2 segundos.|-80 P','-|Vomitou na pessoa da frente.|-100 <2'],
 ['+|Comeu um caldo de cana e curtiu a música.|+0 >2','-|O dono te chamou de "medroso".|-0 <1','-|Alguém vomitou em cima de você.|-0 <2']);
SIT('*','🎻','Violinista da praça','Um violinista toca "Parabéns pra Você" pra qualquer um que passa. Ele te vê e começa.','Agradecer','Fingir que não é seu aniversário',
 ['+|Era seu aniversário! Ganhou um bolo e uma cerveja.|+0 >3','-|Todos cantaram e você ficou vermelho.|-0 <2','-|Ele pediu R$ 20 pelo "serviço".|-20'],
 ['-|Todo mundo descobriu e cantou mais alto.|-0 <2','+|Ele desistiu e foi atrás de outro.|+0 >1','-|Cantou até o final em voz alta.|-0 <1']);
SIT('*','🏄','Surfista profissional','Um surfista profissional te oferece "uma aula grátis". A onda tem 3 metros.','Aceitar','Recusar',
 ['+|Pegou uma onda gigante e virou lenda.|+0 >3','!|Tomou um caldo de 30 segundos.|-100 P','-|Perdeu o short na onda.|-0 <2'],
 ['+|Ficou na areia e ganhou um mate.|+0 >1','-|O surfista riu de você.|-0 <1','-|Um cachorro roubou seu lanche.|-0 <1']);
SIT('*','🦜','Papagaio de loteria','Um papagaio escolhe seu número de loteria. Ele escolhe "13" e "xingou".','Jogar','Ignorar',
 ['+|Ganhou R$ 300. O papagaio exige comissão.|+300 >3','-|Perdeu e o papagaio riu.|-10','-|O papagaio escolheu o número do bicho errado.|-30'],
 ['+|Ignorou e ganhou na loteria com outros números.|+100 >2','-|O papagaio se vingou e roubou seu boné.|-0 <1','-|O número 13 saiu e você chorou.|-0 <2']);
SIT('*','🏏','Críquete na praia','Dois turistas ingleses jogam críquete na praia. Eles te convidam. Você não entende as regras.','Jogar','Assistir',
 ['+|Acertou a bola por sorte e eles aplaudiram.|+0 >3','-|Acertou o outro turista. Bate-boca em inglês.|-0 <2','-|Perdeu a bola no mar.|-30'],
 ['+|Ficou assistindo e aprendeu um pouco.|+0 >1','-|Eles riram do seu "nervoso".|-0 <1','-|A bola quase te atingiu.|-0 <1']);
SIT('*','🐢','Corrida de tartarugas','O bar faz uma corrida de tartarugas. Cada uma custa R$ 10 e o prêmio é R$ 100. A sua é a mais lenta.','Apostar','Assistir',
 ['+|A sua tartaruga ganhou! Ninguém acreditou.|+100 >3','-|A tartaruga dormiu no meio da pista.|-10','-|Perdeu e pagou a rodada.|-60'],
 ['+|Torceu e ganhou um chope de agradecimento.|+0 >1','-|Alguém te acusou de "torcer pra tartaruga errada".|-0 <1','-|A tartaruga mordeu o dedo do dono.|-0']);
SIT('*','🔔','Sino da igreja','O sino da igreja toca às 5h todo dia. O padre diz que "é a voz de Deus". Você não dorme.','Falar com o padre','Aguentar',
 ['+|O padre mudou o horário pra 7h. Você virou herói do bairro.|+0 >3','-|O padre te deu um sermão sobre paciência.|-0 <2','-|O padre pediu uma doação de R$ 100.|-100'],
 ['-|Ficou 3 meses sem dormir direito.|-0 P','+|Se acostumou e acorda sem despertador.|+0 >2','-|O padre viu e te chamou pra ajudar na missa.|-0 <1']);
SIT('*','🥁','Bumbo no domingo','O vizinho aprendeu a tocar bumbo e treina às 8h de domingo. Ele tem "talento".','Pedir pra parar','Se juntar',
 ['+|Ele parou e agradeceu: "vou comprar um abafador".|+0 >2','-|Ele tocou mais alto de raiva.|-0 <2','-|Ele te chamou de "inimigo da cultura".|-0 <1'],
 ['+|Os dois formaram uma banda e fizeram sucesso.|+100 >3','-|Ficaram horríveis e o prédio inteiro reclamou.|-0 <2','-|O síndico multou os dois.|-100']);
SIT('*','🏍️','Motoboy apressado','Um motoboy te entrega uma pizza e diz "tenho 40 segundos pra entregar outra". Ele sai voando.','Dar gorjeta','Reclamar do atraso',
 ['+|Ele agradeceu e te deu um cupom de desconto.|+20 >2','-|Deu R$ 10 e ele pediu mais.|-10','-|Ele sumiu e levou sua gorjeta.|-10'],
 ['-|Ele te ameaçou: "da próxima vez vem sem recheio".|-0 <2','+|A pizzaria te deu uma pizza grátis.|+30 >2','-|Ele cancelou o pedido.|-0 <1']);
