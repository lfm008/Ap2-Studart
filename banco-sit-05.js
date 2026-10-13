// ======= CRIME ORGANIZADO (satírico) — parte 2 =======
SIT('crime','📦','Carregamento atrasado','O carregamento do "material" atrasou 2 dias. Os clientes estão impacientes e o chefe, pior.','Ligar pro fornecedor','Improvisar com o estoque',
 ['+|O fornecedor pediu desculpas e mandou em dobro.|+600 >2','-|O fornecedor sumiu e te bloqueou.|-500 <1','-|O telefone estava grampeado.|-1000 P'],
 ['+|O estoque rendeu e os clientes ficaram felizes.|+300 >2','-|O estoque era velho e os clientes reclamaram.|-400','-|O chefe descobriu e te mandou lavar louça.|-0 P']);
SIT('crime','🏍️','Mototáxi do morro','O mototáxi do morro cobra R$ 5 e faz curvas que desafiam a física. Você tá atrasado pra uma reunião.','Pegar a moto','Ir a pé',
 ['+|Chegou em 3 minutos e ninguém te viu.|+0 >3','!|A moto bateu no muro e você caiu no mato.|-60 <2','-|O mototaxista cobrou R$ 50 "de risco".|-50'],
 ['!|Subiu a pé e torceu o pé numa pedra.|-40 <2','+|Chegou a tempo e ninguém desconfiou.|+0 >2','-|O chefe viu você suando e te zoou.|-0 <1']);
SIT('crime','🎰','Máquina de caça-níquel','O dono do boteco tem caça-níquel nos fundos. Você tá com sorte hoje.','Apostar tudo','Apostar só um pouco',
 ['+|Ganhou o jackpot! O dono te deu um abraço de urso.|+1000 >3','-|Perdeu tudo e ficou devendo pro dono.|-500','-|A polícia fez uma batida e levou as máquinas.|-300 P'],
 ['+|Ganhou um pouco e saiu feliz.|+150 >2','-|Perdeu tudo igual.|-100','-|O dono te tratou como "cliente fiel" e te cobrou mais.|-0 <1']);
SIT('crime','🍺','Boteco do chefe','O chefe te convida pra beber no boteco dele. É armadilha ou boa vontade?','Aceitar','Inventar desculpa',
 ['+|Foi só uma conversa e ele te deu um aumento.|+300 >3','-|Era um teste de lealdade. Você falhou.|-500 <2','-|Bebeu demais e contou tudo.|-1000 P'],
 ['-|O chefe descobriu a mentira e te rebaixou.|-300 <2','+|Ficou em casa e o chefe nem notou.|+0 >2','-|O chefe te mandou um recado: "tô de olho".|-0 <1']);
SIT('crime','📞','Chamada anônima','Alguém ligou de número oculto: "sei o que você fez". A voz parece sua mãe.','Perguntar quem é','Desligar',
 ['+|Era sua mãe fazendo brincadeira. Ficou aliviado.|+0 >2','-|Era a polícia tentando te assustar.|-300 <1','-|Era um golpista e você deu o nome.|-200'],
 ['+|Desligou e a pessoa não ligou mais.|+0 >1','-|Ela ligou 14 vezes e você perdeu a paz.|-0 <2','-|Era a sua mãe. Ela ficou chateada.|-0']);
SIT('crime','🚔','Perseguição policial','Uma viatura te segue há 3 quarteirões. Você tem 3 opções: acelerar, parar ou rezar.','Acelerar','Parar e conversar',
 ['+|Despistou a viatura em uma viela e chegou em casa.|+0 >3','!|Bateu o carro num poste e saiu cambaleando.|-200 <2','-|A viatura te prendeu na esquina.|-800 P'],
 ['+|O guarda era seu vizinho e te liberou.|+0 >3','-|O guarda te levou pra delegacia.|-500 P','-|O guarda pediu um "cafezinho" de R$ 500.|-500']);
SIT('crime','🏠','Casa no morro','Sua casa no morro tá sendo vistoriada. Você escondeu algo atrás do botijão de gás.','Dizer que não tem nada','Oferecer um café',
 ['+|O policial acreditou e foi embora.|+0 >2','-|O policial achou o esconderijo em 4 minutos.|-1000 P','-|O cachorro farejou tudo e latiu.|-500 <2'],
 ['+|O policial aceitou o café e esqueceu da vistoria.|+0 >2','-|O policial recusou e achou estranho.|-500 <1','-|O café estava horrível e ele ficou ofendido.|-0 <1']);
SIT('crime','👟','Sapatênis do chefe','O chefe gosta de sapatênis e quer que você compre um par igual. Cobra R$ 500.','Comprar o igual','Comprar um parecido',
 ['+|O chefe amou e te deu um bônus.|+400 >2','-|O sapatênis era falsificado. Ele notou.|-500 <2','-|Você comprou o tamanho errado.|-300'],
 ['-|O chefe disse "tá de brincadeira?" e te mandou trocar.|-0 <2','+|O chefe achou tão bom que usou por 3 meses.|+200 >2','-|O chefe ficou chateado.|-0 <1']);
SIT('crime','🏆','Baile do morro','O baile do morro vai ter um MC famoso. Você é o segurança. O morro inteiro quer entrar.','Controlar a fila','Deixar passar todo mundo',
 ['+|Tudo correu bem e o MC te elogiou.|+500 >3','-|Uma briga estourou e você apanhou.|-300 <2','-|A fila virou tumulto e a polícia chegou.|-500 P'],
 ['+|A galera adorou e o baile foi lendário.|+300 >2','!|O baile lotou e alguém te empurrou.|-80 <2','-|O chefe te chamou de "frouxo".|-0 <1']);
SIT('crime','🐕','Cão de guarda','O chefe comprou um cão de guarda. Ele tem medo do cachorro. Você tem que alimentar.','Alimentar o cão','Mandar outro alimentar',
 ['+|O cão gostou de você e virou seu parceiro.|+0 >2','!|O cão te mordeu a mão.|-80 P','-|O cão comeu seu lanche.|-0 <1'],
 ['+|O colega aceitou e te deu um chope.|+0 >2','-|O colega foi mordido e te culpou.|-100 <1','-|O cão fugiu e o chefe te cobrou.|-300']);
SIT('crime','🥩','Churrasco do morro','Hoje tem churrasco coletivo. Cada um leva 2 kg de carne. Você tem R$ 20.','Levar linguiça barata','Pegar fiado',
 ['+|A linguiça fez sucesso e você virou o "Rei da Linguiça".|+0 >2','-|A linguiça era vencida. Muita gente passou mal.|-100 P','-|Todos riram da sua contribuição.|-0 <1'],
 ['+|O açougueiro te deu desconto e uma picanha.|+0 >3','-|O açougueiro te cobrou juros de 40%.|-200','-|Você virou "devedor oficial" do morro.|-0 <2']);
SIT('crime','🥁','Roda de samba do morro','A roda de samba do morro começa às 14h. Todo mundo traz uma cerveja. Você traz um pandeiro quebrado.','Tocar assim mesmo','Deixar o pandeiro em casa',
 ['+|O som do pandeiro quebrado virou "estilo novo".|+100 >3','-|Os músicos riram e te mandaram tocar outro.|-0 <1','-|O pandeiro quebrou de vez.|-60'],
 ['+|Dançou e cantou. Foi o melhor dia do ano.|+0 >2','-|A polícia dispersou a roda.|-100 P','-|Perdeu a cerveja.|-0 <1']);
SIT('crime','🍖','Boteco de esquina','O boteco do morro tem a melhor feijoada. Mas só vende pra quem o dono conhece.','Se apresentar','Mandar um amigo',
 ['+|O dono te deu um prato cheio e um chope.|+0 >2','-|O dono disse "nunca te vi".|-0 <1','-|Ele te cobrou R$ 80 por um prato pequeno.|-80'],
 ['+|O amigo conseguiu e você comeu de graça.|+0 >2','-|O amigo comeu tudo sozinho.|-0 <1','-|O dono descobriu e te baniu.|-0 <2']);
SIT('crime','📱','Celular roubado','Você comprou um celular "barato" de um cara na esquina. Ele diz que é "de procedência confiável".','Comprar','Recusar',
 ['+|O celular era novo e funcionava. Que sorte!|+0 >2','-|O celular era do chefe. Você tá em encrenca.|-1000 P','-|O celular tinha vírus.|-200'],
 ['+|Ficou de fora e o chefe te elogiou.|+0 >2','-|O vendedor te ameaçou.|-0 <2','-|Alguém te viu conversando com ele.|-0 <1']);
SIT('crime','🔫','Brinquedo de criança','Seu sobrinho achou um brinquedo que parece arma. A polícia passa na rua.','Esconder o brinquedo','Mostrar pra polícia',
 ['+|Escondeu a tempo. A polícia nem notou.|+0 >2','-|Deixou cair e a polícia viu.|-500 P','-|O brinquedo tinha uma etiqueta de "Made in China".|-0 <1'],
 ['+|A polícia riu e te liberou.|+0 >2','-|A polícia te levou pra delegacia pra "esclarecer".|-300 P','-|O sobrinho chorou e todo mundo olhou.|-0 <1']);
SIT('crime','🤝','Aliança com outro morro','O chefe do morro vizinho propõe uma aliança. Condição: você tem que casar com a prima dele.','Aceitar','Recusar',
 ['+|A prima é simpática e a aliança rendeu paz e dinheiro.|+800 >3','-|A prima era uma "viúva negra". Você sobreviveu por milagre.|-300 <2','-|O casamento foi cancelado na hora.|-100 <1'],
 ['-|O vizinho se ofendeu e declarou guerra.|-500 <3','+|Ele aceitou e propôs outra aliança.|+300 >2','-|A prima te mandou uma carta de ódio.|-0 <1']);
SIT('crime','🚲','Bicicleta do chefe','O chefe te pede pra pegar a bicicleta dele no conserto. Ele jura que "é uma relíquia".','Buscar','Mandar o sobrinho',
 ['+|A bicicleta tava lindíssima e o chefe te deu R$ 100.|+100 >2','-|A bicicleta caiu no rio na volta.|-500','-|Alguém roubou a bicicleta no meio do caminho.|-800'],
 ['-|O sobrinho pegou e perdeu. O chefe te culpou.|-300 <1','+|O sobrinho entregou e o chefe deu um bônus.|+200 >2','-|O sobrinho aproveitou e deu uma volta.|-0 <1']);
SIT('crime','🎖️','Promoção no morro','O chefe vai te promover a "gerente de logística". Mas você tem que provar lealdade.','Aceitar a missão','Recusar',
 ['+|Cumpriu a missão e virou gerente.|+1000 >3','-|A missão deu errado e você foi preso.|-1500 P','-|O chefe te enganou: não existe cargo.|-0 <2'],
 ['-|O chefe te achou "fraco" e te rebaixou.|-500 <2','+|O chefe respeitou sua sinceridade.|+200 >1','-|Outro colega pegou a vaga.|-0 <1']);
SIT('crime','🛵','Entrega rápida','O chefe te manda entregar um "pacote". Você tem 10 minutos. O trânsito tá infernal.','Cortar caminho','Seguir o trânsito',
 ['+|Chegou em 8 minutos e ninguém te viu.|+400 >3','!|Bateu a moto numa esquina.|-150 <2','-|A polícia te parou.|-500 P'],
 ['-|Chegou 20 minutos atrasado. O chefe ficou furioso.|-300 <1','+|Chegou a tempo e o chefe agradeceu.|+200 >2','-|O cliente cancelou.|-200']);
SIT('crime','🚗','Carro de luxo','Você ganhou um carro de luxo "emprestado" pelo chefe. A condição: não bater, não arranhar e não ligar o rádio.','Aceitar','Recusar',
 ['+|Passeou pelo bairro e todo mundo te respeitou.|+300 >3','-|Um motoqueiro riscou o carro. O chefe te cobrou.|-800','-|O carro quebrou no meio da rua.|-500 <2'],
 ['-|O chefe te chamou de "ingrato".|-0 <1','+|O chefe achou "humilde" e te deu um bônus.|+200 >1','-|Outro colega pegou e bateu.|-0']);
SIT('crime','🔒','Cofre trancado','Você esqueceu a combinação do cofre do chefe. Ele volta em 20 minutos.','Chamar um chaveiro','Tentar adivinhar',
 ['+|O chaveiro era do ramo e abriu em 5 minutos.|+0 >3','-|O chaveiro cobrou R$ 2.000 e descobriu tudo.|-2000','-|O chaveiro contou pro chefe.|-1500 P'],
 ['+|Acertou na 7ª tentativa. Sortudo!|+300 >3','-|Errou 20 vezes e o alarme disparou.|-1000 P','-|O chefe chegou e te flagrou.|-1500 P']);
SIT('crime','🍀','Trevo de quatro folhas','Você achou um trevo de quatro folhas na laje. O chefe diz que "dá sorte no jogo".','Guardar o trevo','Dar pro chefe',
 ['+|O trevo deu sorte e você ganhou R$ 500 na quina.|+500 >2','-|O trevo secou e se desfez no bolso.|-0 <1','-|O chefe viu e quis também.|-0'],
 ['+|O chefe ficou grato e te deu um bônus.|+300 >2','-|O chefe jogou fora o trevo.|-0 <1','-|O trevo era de plástico.|-0']);
SIT('crime','🧾','Nota fiscal falsa','O contador pede uma nota fiscal pra "justificar as despesas". Você tem uma de uma pizzaria.','Entregar a nota','Inventar outra',
 ['+|O contador aceitou e a conta fechou.|+300 >2','-|A nota era de uma pizzaria que fechou em 2010.|-600','-|O contador cobrou R$ 1.000 pela "gambiarra".|-1000'],
 ['+|A nova nota era perfeita. Ninguém questionou.|+400 >2','-|Foi descoberto. A Receita bateu na porta.|-2000 P','-|O contador te delatou.|-1500 P']);
SIT('crime','📺','Programa de TV','Um repórter quer te entrevistar sobre "a vida no morro". A câmera está ligada.','Falar sobre a comunidade','Fugir',
 ['+|Contou histórias lindas e ganhou respeito.|+300 >3','-|Falou demais e a polícia viu tudo.|-1000 P','-|Disse uma besteira e virou meme.|-0 <2'],
 ['+|Fugiu e o repórter achou mistério.|+0 >2','-|O repórter te perseguiu 3 quarteirões.|-0 <2','-|Alguém filmou e postou.|-0 <1']);
SIT('crime','🎓','Formatura da filha','Sua filha vai se formar. A festa precisa de discrição. O chefe quer comparecer.','Convidar o chefe','Mentir',
 ['+|O chefe foi educado e ainda deu um presente.|+500 >3','-|O chefe chegou com 20 seguranças e assustou todo mundo.|-500 <2','-|A polícia reconheceu o chefe e prendeu na festa.|-2000 P'],
 ['-|O chefe descobriu e ficou magoado.|-300 <2','+|A festa foi tranquila e linda.|+200 >2','-|Sua filha te cobrou por 6 meses.|-0 <1']);
SIT('crime','🍞','Padaria do morro','A padaria do morro vende pão de queijo a R$ 3. O dono reclama que "o chefe cobra imposto".','Ouvir o dono','Dizer que não é problema seu',
 ['+|O dono te deu pães e o chefe te elogiou.|+0 >2','-|O chefe ouviu a conversa e te mandou calar.|-0 <2','-|O dono te pediu ajuda e você não pôde.|-0 <1'],
 ['-|O dono te chamou de "frio".|-0 <1','+|O dono entendeu e te deu um pão grátis.|+0 >1','-|O pão tava dormido.|-0']);
SIT('crime','🎺','Festa do dono do morro','A festa do dono do morro vai ter 500 convidados. A cerveja é por conta dele. Você é o garçom.','Servir bem','Servir devagar',
 ['+|Ganhou gorjeta e um elogio do chefe.|+400 >3','-|Derrubou uma bandeja no chefe.|-500 <2','-|O chefe te chamou de "atrapalhado".|-0 <1'],
 ['-|O chefe reclamou da demora e te mandou embora.|-300 <2','+|Fez um serviço impecável e ganhou bônus.|+300 >2','-|A cerveja acabou.|-0']);
SIT('crime','🌴','Folga no Caribe','Você ganhou uma semana de folga. O chefe disse "viaje, mas sem fazer alarde".','Viajar de avião','Ficar no morro',
 ['+|Passou uma semana inesquecível sem ninguém saber.|+500 >3','-|Foi reconhecido no aeroporto e preso.|-2000 P','-|Postou foto na praia. O chefe viu.|-1000 <2'],
 ['+|Ficou em casa e dormiu bem.|+0 >2','-|O chefe te chamou pra trabalhar na folga.|-0 P','-|O vizinho invadiu seu quintal.|-0 <1']);
SIT('crime','🕵️','Informante na equipe','Você suspeita que alguém da equipe é informante. Todos te olham como suspeito.','Investigar','Ignorar',
 ['+|Descobriu o informante e ganhou a confiança do chefe.|+800 >3','-|Acusou o inocente e foi punido.|-1000 <2','-|O informante descobriu e te perseguiu.|-500 <2'],
 ['-|O informante continuou e a equipe caiu.|-1500 P','+|Ninguém se mexeu e tudo ficou normal.|+0 >1','-|Você foi acusado de ser o informante.|-500 <2']);
