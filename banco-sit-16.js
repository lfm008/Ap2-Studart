// ======= ABSURDO CARIOCA (exagerado, humor negro leve, alvo: o sistema e o cotidiano) =======
SIT('*','🏛️','Estátua do prefeito','O prefeito inaugura uma estátua de si mesmo, de 12 metros, de ouro (falso). Todos devem aplaudir.','Aplaudir','Vaiar baixinho',
 ['+|Ele te viu aplaudindo e te deu um cargo de "assessor de aplauso".|+200 >3','-|A estátua desabou e você aplaudiu mesmo assim.|-0 <2','-|Alguém filmou e você virou o "puxa-saco".|-0 <2'],
 ['+|Todos riram junto e o prefeito não ouviu.|+0 >2','-|O prefeito ouviu e mandou te multar.|-300','-|Os seguranças te levaram.|-0 P']);
SIT('*','🛣️','Buraco do tamanho de piscina','Um buraco gigante abre no meio da rua. Todo mundo faz foto. A prefeitura diz "tá resolvido".','Pular o buraco','Esperar a prefeitura',
 ['+|Pulou e virou herói do bairro.|+0 >3','!|Caiu no buraco e ficou preso.|-100 <3','-|Perdeu o chinelo no pulo.|-30'],
 ['+|A prefeitura chegou em 6 meses e cobriu com um papelão.|+0 >2','-|Esperou 40 dias.|-0 <3','-|Alguém caiu e te processou.|-0 <2']);
SIT('*','🚌','BRT lotado de verdade','O BRT parece uma lata de sardinhas. Alguém te segura pelo cabelo. Outro pelo pé.','Aguentar','Descer no meio',
 ['+|Chegou inteiro e orgulhoso.|+0 >3','!|Perdeu um sapato e um pedaço de calça.|-60 <2','-|Roubaram sua carteira.|-200'],
 ['+|Desceu e andou 3 km. Achou uma padaria.|+0 >1','-|Perdeu o trabalho.|-100 <2','-|Foi assaltado no caminho.|-250']);
SIT('*','🚔','Policial que vira vendedor','Um policial vende água de coco em horário de serviço. Ele te chama: "aceita um?".','Comprar','Denunciar',
 ['+|O coco era ótimo e ele te deu desconto.|+0 >2','-|Ele cobrou R$ 40.|-40','-|Descobriu que era sócio do dono.|-0 <2'],
 ['+|Ele foi demitido e você ganhou uma recompensa.|+100 >3','-|Ele te perseguiu depois.|-200 <3','-|Ninguém fez nada.|-0 <2']);
SIT('*','🎭','Político palhaço','Um político veste fantasia de palhaço no comício. O povo adora. Ele promete "um mundo de alegria".','Aplaudir','Perguntar sobre o orçamento',
 ['+|Ganhou um balão e um boné.|+20 >2','-|O político te chamou de "povo ingrato".|-0 <2','-|Alguém filmou você aplaudindo.|-0 <2'],
 ['-|O político fingiu que não ouviu.|-0 <2','+|Ele te chamou de "cidadão consciente" e te deu R$ 50.|+50 >3','-|Os seguranças te levaram.|-0 P']);
SIT('*','📺','Programa de auditório','Você vai a um programa de auditório. O apresentador te chama: "venha jogar o jogo do milhão!".','Aceitar','Se esconder',
 ['+|Ganhou uma boa grana e virou celebridade.|+500 >3','-|Perdeu na primeira pergunta.|-0 <3','-|Foi humilhado ao vivo.|-0 <3'],
 ['-|O apresentador te achou e te levou ao palco.|-0 <2','+|Ficou escondido e viu o show.|+0 >2','-|O segurança te expulsou.|-0 <1']);
SIT('*','🏆','Prêmio de "melhor boteco"','O boteco onde você bebe ganhou o prêmio de "melhor da cidade". A fila agora é de 3 horas.','Entrar na fila','Procurar outro',
 ['+|O boteco ainda tinha o mesmo chope e preço.|+0 >3','-|O preço dobrou e a cerveja virou "gourmet".|-80','-|O dono te tratou como turista.|-0 <2'],
 ['+|Achou um boteco melhor e secreto.|+0 >3','-|Todos os botecos estavam lotados.|-0 <2','-|Voltou pra casa com fome.|-0 <1']);
SIT('*','🥩','Churrasco do síndico','O síndico faz churrasco com a verba do condomínio. Todos sabem. Ninguém fala.','Comer','Denunciar',
 ['+|A carne era ótima e você ganhou uma picanha de brinde.|+0 >3','-|Passou mal.|-50 P','-|O síndico te marcou como "do contra".|-0 <2'],
 ['+|A assembleia afastou o síndico e você virou herói.|+200 >3','-|O síndico te processou.|-500','-|Ninguém te apoiou.|-0 <2']);
SIT('*','💃','Baile de máscaras no Municipal','No baile, alguém te abraça por trás e grita "adivinha quem é!". A voz parece sua ex.','Responder o nome certo','Chutar errado',
 ['+|Acertou e vocês voltaram a conversar.|+0 >3','-|Era seu chefe. Climão total.|-0 <3','-|Era um desconhecido.|-0 <2'],
 ['+|Era seu primo, e vocês riram.|+0 >2','-|Era sua ex e ela ficou furiosa.|-0 <3','-|Todo mundo olhou.|-0 <2']);
SIT('*','🎬','Filme gravado na rua','Uma equipe de cinema fecha sua rua. Um diretor te grita "saia da cena!". Você está passando.','Sair da cena','Fazer pose',
 ['+|O diretor te elogiou e te deu um papel.|+100 >3','-|Te empurraram.|-0 <2','-|Estragou a gravação.|-0 <2'],
 ['+|Virou figurante e ganhou R$ 200.|+200 >3','-|O diretor te expulsou.|-0 <3','-|Seu rosto apareceu no filme errado.|-0 <2']);
SIT('*','🧑‍🎤','Cantor desconhecido','Um cantor desconhecido canta na rua. Ele te chama: "você tem cara de empresário!".','Dar a ele um cartão','Ignorar',
 ['+|Ele virou famoso e te deu 10%.|+500 >3','-|Ele cantava mal e você virou piada.|-0 <2','-|Ele pediu dinheiro emprestado.|-50'],
 ['-|Ele ficou famoso sem você.|-0 <3','+|Ele cantou melhor e te agradeceu.|+0 >1','-|Alguém filmou e postou.|-0 <1']);
SIT('*','📸','Fotógrafo famoso','Um fotógrafo famoso te escolhe pra uma foto "arte". Você está de chinelo e camisa de time.','Aceitar','Recusar',
 ['+|A foto foi exposta e você virou ícone.|+300 >3','-|A foto saiu horrível.|-0 <2','-|Vendeu e você não ganhou nada.|-0 <2'],
 ['-|Ele escolheu outro e fez fama.|-0 <2','+|Ficou na sua e dormiu bem.|+0 >2','-|Todos te chamaram de "metido".|-0 <1']);
SIT('*','🎤','Candidato a síndico','Um vizinho é candidato a síndico. Ele promete "piscina, sauna e jacuzzi". O prédio não tem nem elevador.','Votar nele','Votar no outro',
 ['+|Ele ganhou e construiu uma churrasqueira.|+0 >3','-|Ele sumiu com o caixa.|-300','-|Ele só fez uma festa.|-0 <2'],
 ['+|O outro ganhou e deu um jantar.|+0 >2','-|O outro era pior.|-0 <2','-|Perdeu a votação.|-0 <1']);
SIT('*','🧑‍⚖️','Júri de bairro','O bairro faz um "júri popular" pra decidir quem é o dono de um cachorro. Você é jurado.','Votar no dono atual','Votar no antigo',
 ['+|Todos concordaram e o cachorro ficou feliz.|+0 >3','-|O cachorro mordeu o juiz.|-0 <2','-|Brigaram.|-0 <3'],
 ['+|O dono antigo agradeceu e te deu um bolo.|+30 >2','-|O dono atual ficou furioso.|-0 <3','-|O cachorro fugiu.|-0 <2']);
SIT('*','🏠','Vizinho que filma tudo','Seu vizinho filma a rua inteira e posta no YouTube. Hoje filmou você de cueca na janela.','Pedir pra apagar','Chantagear',
 ['+|Ele apagou e se desculpou.|+0 >2','-|Ele disse "é de interesse público".|-0 <3','-|O vídeo já tinha 100 mil views.|-0 <3'],
 ['+|Ele pagou R$ 200 pra você ficar quieto.|+200 >3','-|Ele te denunciou por extorsão.|-500 P','-|Ele postou outro vídeo.|-0 <3']);
SIT('*','🛒','Carrinho de sorvete','O sorveteiro toca uma música estridente toda tarde. Todo mundo odeia. Hoje ele parou na sua porta.','Comprar','Pedir pra ir embora',
 ['+|O sorvete era ótimo e ele te deu um desconto.|+0 >2','-|O sorvete derreteu na mão.|-10','-|O sorveteiro cobrou R$ 15.|-15'],
 ['-|Ele tocou a música mais alto.|-0 <2','+|Ele foi embora e agradeceu.|+0 >1','-|O vizinho te chamou de "mal-humorado".|-0 <1']);
SIT('*','🚪','Porteiro eletrônico','O porteiro eletrônico do prédio é uma voz de robô. Ele diz "bem-vindo, humano". Hoje ele te trancou do lado de fora.','Gritar com ele','Esperar',
 ['+|Alguém ouviu e abriu a porta.|+0 >2','-|O robô respondeu "recusado".|-0 <2','-|Todos os vizinhos olharam.|-0 <2'],
 ['+|A porta abriu sozinha depois de 10 minutos.|+0 >1','-|Ficou 2 horas esperando.|-0 P','-|Choveu e você ficou molhado.|-0 <1']);
SIT('*','🧼','Lavanderia 24h','Uma lavanderia 24h abre no seu bairro. Ela tem uma máquina que "lava e conversa". A máquina te dá conselhos.','Seguir o conselho','Ignorar',
 ['+|O conselho era "compre um bilhete" e você ganhou R$ 100.|+100 >3','-|O conselho era "case com sua ex".|-0 <3','-|A máquina quebrou e lavou tudo errado.|-100'],
 ['+|Ignorou e ficou em paz.|+0 >2','-|A máquina te xingou.|-0 <2','-|Perdeu uma meia.|-0 <1']);
SIT('*','🏪','Mercado 24h','Às 3h da manhã, você vai ao mercado. Só tem você, o caixa dormindo e um gato.','Acordar o caixa','Pagar no balcão',
 ['+|O caixa acordou e te deu uma promoção.|+0 >2','-|O caixa se assustou e derrubou tudo.|-30','-|O gato roubou seu pão.|-0 <1'],
 ['+|Deixou o dinheiro e saiu feliz.|+0 >2','-|O gato roubou o dinheiro.|-30','-|O caixa acordou e te chamou de ladrão.|-0 <2']);
SIT('*','🚖','Táxi com música alta','O taxista toca funk no talo. Seu ouvido sangra. Mas a corrida é barata.','Pedir pra baixar','Aguentar',
 ['+|Ele baixou e te contou uma história.|+0 >2','-|Ele aumentou.|-0 <2','-|Ele te expulsou do táxi.|-0 <2'],
 ['+|Gostou da música e dançou.|+0 >3','-|Ficou surdo por 1 dia.|-0 P','-|Perdeu o celular no banco.|-250']);
SIT('*','🚲','Bike roubada','Roubaram sua bike. Você a vê passando com outro. Ele acena pra você.','Perseguir','Aceitar',
 ['+|Pegou o ladrão e a bike.|+100 >3','!|Caiu na perseguição.|-60 <2','-|O ladrão tinha uma faca.|-0 <3'],
 ['-|Perdeu a bike pra sempre.|-300','+|Comprou outra e ficou feliz.|+0 >1','-|O ladrão te zoou.|-0 <1']);
SIT('*','🏍️','Moto sem escapamento','Uma moto passa sem escapamento e acorda o bairro inteiro. O motoqueiro grita "bom dia!".','Gritar de volta','Chamar a polícia',
 ['+|O motoqueiro riu e foi embora.|+0 >2','-|Ele voltou 3 vezes.|-0 <2','-|Ele te xingou.|-0 <2'],
 ['+|A polícia multou o motoqueiro.|+30 >2','-|A polícia disse "não é nosso problema".|-0 <2','-|O motoqueiro te perseguiu.|-0 <3']);
SIT('*','🚗','Carro roubado de volta','Seu carro roubado aparece na rua. Está com 3 multas, um pneu furado e uma cerveja no porta-copo.','Chamar a polícia','Pegar sozinho',
 ['+|A polícia recuperou o carro e te devolveu.|+0 >3','-|A polícia cobrou "taxa de recuperação".|-300','-|O carro estava danificado.|-1000'],
 ['+|Pegou o carro e foi embora.|+0 >2','-|O ladrão te viu e te perseguiu.|-0 <3','-|Pagou as 3 multas.|-500']);
SIT('*','🛵','Entregador apressado','Um entregador te atropela de leve com a moto. Ele te dá a pizza de consolação.','Aceitar a pizza','Exigir indenização',
 ['+|A pizza era ótima.|+0 >2','-|A pizza estava fria.|-0 <1','-|Ele fugiu.|-0 <1'],
 ['+|Ele te deu R$ 50 de indenização.|+50 >2','-|Ele te xingou.|-0 <2','!|Você ficou com um hematoma enorme.|-60 <2']);
SIT('*','🚁','Helicóptero da imprensa','Um helicóptero da imprensa filma sua casa. Você está de cueca na laje.','Acenar','Se esconder',
 ['+|O vídeo bombou e você virou celebridade.|+100 >3','-|Virou meme: "o homem da cueca".|-0 <3','-|O jornal te chamou de "suspeito".|-0 <3'],
 ['+|Ninguém viu.|+0 >2','-|Tropeçou e caiu.|-0 <1','-|O vizinho viu e fofocou.|-0 <1']);
SIT('*','🏛️','Reunião de condomínio','A reunião de condomínio dura 5 horas. O tema: "o que fazer com a barata do elevador".','Dar uma ideia','Dormir',
 ['+|Sua ideia foi aprovada e você virou herói.|+0 >3','-|Todos riram.|-0 <2','-|A ideia custou R$ 500 a cada morador.|-500'],
 ['-|Roncou tão alto que o síndico parou a reunião.|-0 <3','+|Dormiu e ninguém notou.|+0 >2','-|Acordou e a barata estava no seu colo.|-0 <2']);
SIT('*','🥁','Bateria na avenida','Uma bateria de escola de samba treina na avenida às 2h da manhã. O barulho acorda o bairro.','Reclamar','Dançar',
 ['+|Pediram desculpa e te deram ingresso.|+0 >2','-|Te chamaram de "inimigo do samba".|-0 <3','-|Jogaram confete na sua cara.|-0 <2'],
 ['+|Dançou e virou parte do desfile.|+50 >3','!|Caiu no meio da dança.|-40 <2','-|Perdeu o sono e o emprego.|-0 <3']);
SIT('*','🦸','Herói de bairro','Um homem fantasiado de herói "protege" o bairro. Ele te chama pra ser seu "ajudante".','Aceitar','Recusar',
 ['+|Foram aplaudidos pela vizinhança.|+30 >3','-|O herói era procurado pela polícia.|-200 P','-|Ele te fez usar uma capa.|-0 <2'],
 ['-|Ele ficou ofendido e te "ameaçou" com uma colher.|-0 <2','+|Ele achou outro ajudante.|+0 >2','-|Todos riram.|-0 <1']);
SIT('*','🕵️','Detetive de bar','Um sujeito de capa e chapéu diz ser detetive. Ele te chama: "preciso de um parceiro".','Aceitar','Recusar',
 ['+|Resolveram um caso e ganharam R$ 200.|+200 >3','-|O detetive era um ator.|-0 <2','-|Foram expulsos do bar.|-0 <2'],
 ['-|Ele te chamou de "covarde".|-0 <1','+|Ele achou outro parceiro.|+0 >2','-|Ele roubou sua cerveja.|-15']);
SIT('*','🧙','Mago de rua','Um mago de rua faz truques de mágica. Ele faz sua carteira "desaparecer". Você não consegue achar.','Pedir de volta','Aplaudir',
 ['+|Ele devolveu com um bônus.|+100 >3','-|Ele fugiu com ela.|-300 <2','-|Ela apareceu no bolso errado.|-0 <2'],
 ['-|Ele sumiu com a carteira.|-300','+|Aplaudiu e ele devolveu.|+0 >2','-|Todos riram.|-0 <1']);
SIT('*','🎩','Coelho fugitivo','Um mágico tira um coelho da cartola. O coelho olha pra você com raiva e foge.','Perseguir o coelho','Ajudar o mágico',
 ['+|Pegou o coelho e ganhou aplausos.|+30 >3','!|Tropeçou e caiu.|-40 <2','-|O coelho mordeu você.|-0 <1'],
 ['+|O mágico agradeceu e te deu R$ 20.|+20 >2','-|O mágico te chamou de "assistente".|-0 <2','-|O coelho voltou e te atacou.|-30']);
