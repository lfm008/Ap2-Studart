// ======= FECHAMENTO 3 =======
SIT('crime','🎤','Entrevista na rádio comunitária','A rádio do morro te chama pra falar. O chefe diz "fale bem". Você nunca falou no ar.','Aceitar','Recusar',
 ['+|Foi eloquente e o chefe te promoveu.|+500 >3','-|Disse "o chefe é um gênio" duas vezes.|-0 <2','-|Xingou no ar sem querer.|-500 <3'],
 ['-|O chefe achou que você tava com medo.|-0 <2','+|Outro foi e virou celebridade.|+0 >2','-|A rádio ficou sem entrevista.|-0 <1']);
SIT('crime','🏍️','Gincana de motos','O morro faz uma gincana de motos. Prêmio: R$ 5 mil e um capacete dourado. Você tem uma moto de 1992.','Participar','Assistir',
 ['+|Ganhou na raça e virou lenda.|+500 >3','!|Caiu na curva e se machucou.|-100 <2','-|A moto quebrou.|-300'],
 ['+|Torceu e ganhou uma cerveja.|+0 >2','-|O chefe te chamou de "medroso".|-0 <2','-|Perdeu a aposta.|-100']);
SIT('crime','🎂','Aniversário da vizinha','A vizinha faz aniversário e convida todo o morro. Você leva um presente de R$ 20.','Levar o presente','Levar um chocolate',
 ['+|Ela amou e te deu um bolo.|+0 >3','-|O presente era igual a outro.|-0 <2','-|A vizinha era informante.|-300 <2'],
 ['+|O chocolate foi um sucesso.|+0 >2','-|Alguém comeu antes.|-0 <1','-|Ela disse "só isso?".|-0 <1']);
SIT('crime','🚰','Caixa d água do morro','A caixa d água do morro quebrou. O chefe te manda resolver. Você nunca consertou nada.','Chamar um encanador','Consertar',
 ['+|O encanador consertou e o morro agradeceu.|+300 >3','-|Cobrou R$ 800.|-800','-|Demorou 3 dias.|-0 P'],
 ['!|Se machucou.|-100 <2','+|Consertou por milagre.|+500 >3','-|Piorou.|-500']);
SIT('legal','🎖️','Dia do policial','No Dia do Policial, a corporação faz um churrasco. A carne queima. O comandante te olha.','Assumir','Culpar o carvão',
 ['+|O comandante riu e te elogiou.|+0 >3','-|Ficou de castigo.|-0 P','-|O churrasco foi pro lixo.|-0 <2'],
 ['+|Todos concordaram.|+0 >2','-|Ninguém acreditou.|-0 <2','-|Virou meme.|-0 <1']);
SIT('legal','🛡️','Colete novo','O colete novo é 3 números maior. Você parece um tonel. Todos riem.','Usar assim','Pedir troca',
 ['+|Todos acharam "estiloso".|+0 >2','-|O colete caiu no meio da operação.|-0 <3','!|Tropeçou nele.|-60 <2'],
 ['+|Trocou e ficou perfeito.|+0 >2','-|A troca demorou 3 meses.|-0 <2','-|Perdeu o colete.|-300']);
SIT('legal','📻','Rádio da viatura','O rádio da viatura toca "Evidências" no lugar das chamadas. O comandante te manda resolver.','Consertar','Aproveitar',
 ['+|Consertou e ganhou elogio.|+0 >3','-|Piorou.|-100','-|O rádio queimou.|-300'],
 ['+|Cantou junto e a patrulha adorou.|+0 >2','-|Perdeu uma chamada.|-0 <3','-|O comandante ouviu.|-0 <2']);
SIT('legal','🥋','Aula de defesa pessoal','Você ministra uma aula de defesa pessoal. Um aluno é seu ex-chefe. Ele sorri.','Ensinar bem','Dar um golpe de brincadeira',
 ['+|Ele aprendeu e te agradeceu.|+0 >3','-|Ele ficou irritado.|-0 <2','-|Ele te criticou.|-0 <1'],
 ['+|Todos riram.|+0 >2','!|Machucou sem querer.|-100 <2','-|Foi advertido.|-200']);
SIT('estudante','🏛️','Reitoria ocupada','Os alunos ocupam a reitoria. A reitora oferece "diálogo". Todo mundo duvida.','Aderir','Ficar de fora',
 ['+|A reitora cedeu e você virou herói.|+0 >3','-|A polícia chegou.|-0 P','-|Foi suspenso.|-0 <3'],
 ['-|Todos te chamaram de "pelego".|-0 <2','+|Ficou estudando e tirou 10.|+100 >2','-|Perdeu a chance de participar.|-0 <1']);
SIT('estudante','🍝','Jantar de república','Sua república tem 6 pessoas e 1 panela. Hoje é o dia do "macarrão com mistério".','Cozinhar','Pedir lanche',
 ['+|Foi um sucesso.|+0 >3','-|Queimou tudo.|-50','-|Faltou molho.|-0 <1'],
 ['+|Todos ficaram felizes.|+0 >2','-|A pizza demorou.|-0 <1','-|Gastaram R$ 120.|-120']);
SIT('estudante','📚','Seminário em inglês','O seminário é em inglês. Você sabe falar "hello" e "thank you". Seu grupo te escolhe pra apresentar.','Apresentar','Pedir pra trocar',
 ['+|O professor achou "criativo".|+100 >3','-|Disse "good morning" em vez de "good afternoon".|-0 <2','-|Todos riram.|-0 <2'],
 ['+|Outro apresentou e foi ótimo.|+0 >2','-|O grupo te chamou de "preguiçoso".|-0 <2','-|Perdeu a nota.|-0 <2']);
SIT('estudante','🎮','Videogame na república','Você joga videogame até 5h. Hoje tem prova às 8h. Seus colegas te chamam pra "só mais uma".','Jogar','Dormir',
 ['+|Jogou e foi bem na prova mesmo assim.|+100 >3','-|Dormiu na prova.|-0 <3','-|Perdeu a hora.|-0 <3'],
 ['+|Dormiu e tirou 10.|+200 >3','-|Todos zoaram.|-0 <1','-|Perdeu a partida da vida.|-0 <1']);
SIT('alta','🏇','Casamento no haras','Seu casamento é no haras. Os cavalos entram na cerimônia. Um deles come o buquê.','Rir','Reclamar',
 ['+|Todos riram e a festa foi memorável.|+500 >3','-|O cavalo foi expulso.|-0 <2','-|O buquê custou uma fortuna.|-2000'],
 ['-|Os cavalos ficaram agitados.|-1000 <2','+|O organizador pediu desculpas.|+500 >2','-|Todos acharam grosseria.|-0 <2']);
SIT('alta','🛥️','Pesca de alto mar','Você pesca em alto mar. Um peixe gigante morde. O capitão grita "é recorde!".','Puxar','Soltar',
 ['+|Pegou o peixe e entrou pro livro dos recordes.|+2000 >3','!|O peixe te puxou pro mar.|-500 <3','-|A linha arrebentou.|-0 <2'],
 ['+|Soltou e ganhou um prêmio ecológico.|+500 >2','-|O capitão te zoou.|-0 <1','-|Perdeu o peixe da vida.|-0 <2']);
SIT('alta','🎨','Leilão beneficente','No leilão beneficente, você levanta a mão por engano e compra um quadro de R$ 200 mil.','Assumir','Contestar',
 ['+|O quadro era valioso e você lucrou.|+3000 >3','-|O quadro era falso.|-20000','-|Pagou e ficou arrependido.|-0 <2'],
 ['+|O leilão cancelou a venda.|+0 >2','-|O leiloeiro te expôs.|-0 <3','-|Pagou multa.|-5000']);
SIT('alto','🎖️','Condecoração a si mesmo','Você assina um decreto condecorando a si mesmo. Um repórter descobre.','Negar','Assumir',
 ['+|Ninguém acreditou no repórter.|+0 >3','-|O decreto vazou.|-1000 <3','-|Virou meme.|-0 <3'],
 ['+|O povo achou "corajoso".|+500 >3','-|Foi chamado de "vaidoso".|-500 <3','-|O decreto foi revogado.|-0 <2']);
SIT('alto','🚗','Fila de carros oficiais','Seu comboio de 12 carros atravessa a cidade. O trânsito para. Alguém grita "ladrão!".','Parar e responder','Seguir',
 ['+|Respondeu com educação e o povo aplaudiu.|+300 >3','-|O povo cercou o carro.|-0 <3','-|Virou meme.|-0 <2'],
 ['-|O povo gritou mais.|-0 <2','+|Ninguém ouviu.|+0 >2','-|Alguém jogou um ovo.|-0 <1']);
SIT('baixa,media','🧑‍🍳','Restaurante universitário','O restaurante universitário serve feijão com "textura de borracha". Todos reclamam.','Comer','Reclamar',
 ['+|Era o feijão do dia e você gostou.|+0 >2','!|Passou mal.|-60 P','-|Sobrou na boca.|-0 <1'],
 ['+|A cozinheira se comoveu e trocou.|+0 >2','-|Foi chamado de "reclamão".|-0 <1','-|Ficou com fome.|-0 <1']);
SIT('baixa,media','📦','Entrega em condomínio','Você entrega uma encomenda num condomínio. O porteiro diz "só pode subir se tiver cadastro".','Esperar','Pedir pro morador descer',
 ['+|O porteiro liberou.|+0 >3','-|Esperou 2 horas.|-0 P','-|A entrega foi cancelada.|-0 <2'],
 ['+|O morador desceu e te deu gorjeta.|+20 >2','-|O morador xingou.|-0 <2','-|Ninguém desceu.|-0 <2']);
SIT('baixa,media','🔨','Reforma da casa 2','Você contrata um pedreiro. Ele some com o adiantamento. Você vê ele na praia.','Confrontar','Deixar',
 ['+|Ele devolveu o dinheiro e pediu desculpas.|+500 >3','-|Ele fugiu.|-0 <2','-|Ele te xingou.|-0 <2'],
 ['-|Perdeu o dinheiro.|-1000','+|Achou outro pedreiro melhor.|+0 >2','-|A obra parou.|-0 P']);
SIT('baixa,media','📱','Celular roubado 2','Você vê seu celular roubado à venda no camelô. O camelô diz "é meu, comprei".','Chamar a polícia','Comprar de volta',
 ['+|A polícia recuperou.|+0 >3','-|A polícia disse "faça B.O.".|-0 <2','-|O camelô sumiu.|-0 <2'],
 ['-|Pagou R$ 200 pelo seu próprio celular.|-200','+|O camelô devolveu por simpatia.|+0 >2','-|Era outro celular.|-0 <2']);
SIT('*','🥁','Roda de samba na calçada','Uma roda de samba toma a calçada do seu bar. Você tem uma reunião no andar de cima.','Reclamar','Descer e sambar',
 ['+|Pediram desculpas e baixaram.|+0 >2','-|Ninguém ouviu.|-0 <2','-|Chamou a polícia.|-0 <2'],
 ['+|Sambou e a reunião foi cancelada.|+0 >3','-|Perdeu a reunião.|-0 <2','!|Torceu o pé.|-50 <2']);
SIT('*','🧃','Água na praia','Você vê uma moça vendendo água de coco com uma música de fundo "Chega de Saudade". Ela te olha.','Comprar','Passar',
 ['+|A música te emocionou e o coco era ótimo.|+0 >3','-|Pagou R$ 20.|-20','-|O coco estava morno.|-10'],
 ['+|Passou e achou uma moeda.|+1 >1','-|Ela te xingou.|-0 <1','-|Perdeu a chance.|-0 <1']);
SIT('*','🥐','Café da esquina','O café da esquina lança um pão de queijo com recheio de goiabada. Todo mundo odeia a ideia. Todo mundo come.','Provar','Recusar',
 ['+|Era delicioso e você virou fã.|+0 >2','-|Era enjoativo.|-10','-|Passou mal.|-30'],
 ['+|Ficou com o tradicional.|+0 >1','-|O dono te chamou de "conservador".|-0 <1','-|Perdeu a novidade.|-0 <1']);
SIT('*','🎶','Bateria do bloco','Seu bloco de rua vai desfilar. Você é o diretor. O tamborim sumiu. O desfile é em 1 hora.','Improvisar','Adiar',
 ['+|Improvisou e o bloco foi ovacionado.|+200 >3','-|O desfile foi um fiasco.|-0 <3','-|Alguém filmou e viralizou.|-0 <2'],
 ['-|O bloco perdeu a data.|-0 <3','+|O tamborim apareceu e tudo deu certo.|+0 >2','-|Todos reclamaram.|-0 <2']);
SIT('*','🛵','Entregador de gás','O entregador de gás passa gritando "gás!" às 6h. Você precisa. Mas é domingo.','Chamar','Esperar',
 ['+|Ele chegou rápido e foi gentil.|+0 >2','-|Cobrou R$ 150 de "taxa de domingo".|-150','-|Demorou 3 horas.|-0 P'],
 ['-|Ficou sem gás o dia todo.|-0 P','+|O vizinho emprestou.|+0 >2','-|O entregador sumiu.|-0 <1']);
SIT('*','🦸','Policial de folga','Você vê um policial de folga correndo atrás de um ladrão com uma pizza na mão. Ele grita "pegue!".','Ajudar','Rir',
 ['+|Pegou o ladrão e ganhou uma fatia.|+50 >3','!|Tropeçou e caiu.|-60 <2','-|O ladrão escapou.|-0 <2'],
 ['+|Gravou e o vídeo viralizou.|+50 >3','-|O policial viu e ficou furioso.|-0 <2','-|O ladrão fugiu.|-0 <1']);
SIT('*','🚪','Chaveiro 24h','Você chama um chaveiro 24h às 3h. Ele chega de pijama e diz "são R$ 400".','Pagar','Negociar',
 ['+|Abriu em 1 minuto.|+0 >2','-|Quebrou a fechadura.|-300','-|Cobrou R$ 600.|-600'],
 ['+|Fechou por R$ 150.|+0 >2','-|Ele foi embora.|-0 P','-|Ficou do lado de fora.|-0 <2']);
