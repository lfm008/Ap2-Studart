// ======= CLASSE BAIXA/MÉDIA (parte 4), ALTA (4), ALTO (4) =======
SIT('baixa,media','🚌','Pedido de carona na favela','Seu vizinho precisa chegar a Madureira urgente. Você tem uma moto velha. A gasolina custa R$ 15.','Dar a carona','Recusar',
 ['+|Ele pagou R$ 50 e ainda te deu um coxinha.|+50 >3','!|A moto quebrou no caminho e vocês empurraram por 2 km.|-60 <2','-|Foram parados na blitz e a moto foi apreendida.|-400 P'],
 ['-|Ele ficou chateado e te chamou de "mão de vaca".|-0 <2','+|Ele achou outra carona e te agradeceu mesmo assim.|+0 >1','-|Ele contou pra vizinhança.|-0 <1']);
SIT('baixa,media','🏠','Enchente na comunidade','A chuva forte inunda a rua. A água entra na sua casa. Tem sofá flutuando.','Salvar os móveis','Salvar a família',
 ['+|Salvou os móveis e a vizinhança te aplaudiu.|+50 >3','-|Perdeu a geladeira e a TV.|-800','!|Escorregou e bateu a cabeça.|-100 P'],
 ['+|A família ficou segura e você ganhou ajuda dos vizinhos.|+100 >3','-|Perdeu tudo que tinha em casa.|-1500','-|A água demorou 3 dias pra baixar.|-0 P']);
SIT('baixa,media','🚨','Alarme do carro do vizinho','O alarme do carro do vizinho toca há 2 horas. Ele viajou. Você não aguenta mais.','Chamar a polícia','Quebrar o vidro',
 ['+|A polícia desligou e o vizinho agradeceu.|+0 >2','-|A polícia demorou 4 horas.|-0 P','-|A polícia te multou por "chamada indevida".|-100'],
 ['-|O alarme tocou mais alto e o vizinho te processou.|-800','+|Desligou o alarme e ninguém viu.|+0 >2','!|Cortou a mão no vidro.|-80 P']);
SIT('baixa,media','🧑‍🦱','Salão de beleza de bairro','A cabeleireira te oferece "um corte moderno". Ela mostra uma foto de um cantor coreano. Você tem 54 anos.','Aceitar o corte','Pedir o de sempre',
 ['+|Ficou ótimo e todos te elogiaram.|+0 >3','-|Ficou parecendo um coqueiro.|-0 <2','-|Ela cobrou R$ 150 por "técnica nova".|-150'],
 ['+|O corte de sempre ficou perfeito.|+0 >1','-|Ela cortou errado por distração.|-0 <1','-|A tesoura caiu no chão.|-0']);
SIT('baixa,media','🏍️','Moto-táxi no Alemão','No Complexo do Alemão, um mototaxista oferece uma corrida por R$ 5. A subida é radical.','Aceitar','Subir a pé',
 ['+|Chegou em 2 minutos, com o coração na boca.|+0 >3','!|A moto empinou e você caiu.|-80 <2','-|O mototaxista cobrou R$ 30.|-30'],
 ['+|Subiu e emagreceu 2 kg.|+0 >2','!|Escorregou nos degraus.|-40 <2','-|Chegou exausto e perdeu o compromisso.|-0 P']);
SIT('baixa,media','🧃','Feira noturna','A feira noturna tem de tudo: churrasquinho, DVD pirata e vidente. Você tem R$ 30.','Comprar churrasquinho','Consultar a vidente',
 ['+|O churrasquinho era ótimo.|+0 >2','!|O churrasquinho era de procedência duvidosa.|-40 P','-|O vendedor cobrou R$ 30 por um espeto.|-30'],
 ['+|A vidente previu "dinheiro" e você achou R$ 20.|+20 >2','-|A vidente cobrou R$ 50 e previu "tristeza".|-50','-|A previsão era "você vai perder a carteira".|-100 <2']);
SIT('baixa,media','⚖️','Briga de condomínio','O síndico quer proibir "cachorro, música e criança" no prédio. A assembleia vai decidir.','Votar contra','Votar a favor',
 ['+|A proposta caiu e você virou herói.|+0 >3','-|O síndico te perseguiu depois.|-100 <2','-|Foi chamado de "desordeiro".|-0 <2'],
 ['+|A proposta passou e o prédio ficou em silêncio.|+0 >2','-|Seu cachorro foi expulso.|-0 <2','-|Os vizinhos pararam de te falar.|-0 <2']);
SIT('baixa,media','📦','Entrega do aplicativo','Seu pedido chegou errado: em vez de ração, vieram 20 kg de picanha. O entregador sumiu.','Ficar com a picanha','Devolver',
 ['+|Fez um churrasco e virou lenda do prédio.|+0 >3','-|O app te cobrou R$ 400 pela diferença.|-400','-|A picanha estava vencida.|-60 P'],
 ['+|O app agradeceu e te deu um cupom de R$ 100.|+100 >2','-|O entregador nunca voltou.|-0 <2','-|A ração nunca chegou.|-0 <1']);
SIT('baixa,media','🔌','Gato de energia','O vizinho puxa luz do seu poste. A conta vem R$ 400 mais cara. A concessionária diz "é seu".','Denunciar o vizinho','Pagar a conta',
 ['+|O vizinho foi multado e te pagou o prejuízo.|+300 >3','-|O vizinho descobriu e te ameaçou.|-0 <3','-|A concessionária não fez nada.|-0 <2'],
 ['-|Pagou R$ 400 e ainda recebeu aviso de corte.|-400','+|A concessionária devolveu o valor.|+200 >2','-|O vizinho te chamou de "pão-duro".|-0 <1']);
SIT('baixa,media','🏫','Vaga na creche','Você consegue vaga na creche pro filho. A diretora diz "só se você doar 10 kg de arroz".','Doar o arroz','Reclamar',
 ['+|O filho foi aceito e a diretora te elogiou.|+0 >3','-|O arroz era de R$ 80 e acabou em 1 semana.|-80','-|A diretora pediu mais.|-100'],
 ['+|A secretária resolveu e deu a vaga.|+0 >3','-|Perdeu a vaga.|-0 <3','-|A diretora te chamou de "reclamão".|-0 <2']);
SIT('baixa,media','🚑','Mãe no hospital','Sua mãe foi internada. O hospital pede "R$ 2.000 de caução". Você tem R$ 300.','Pedir emprestado','Esperar o SUS',
 ['+|Um amigo emprestou e a mãe foi atendida logo.|+0 >3','-|Ninguém emprestou e você ficou desesperado.|-0 <3','-|O hospital cobrou juros.|-300'],
 ['-|Esperou 10 horas no corredor.|-0 P','+|A mãe foi atendida em 2 horas.|+0 >3','-|O médico errou o diagnóstico.|-0 <2']);
SIT('baixa,media','🎒','Mochila com tudo','Você acha uma mochila abandonada no ônibus. Dentro: R$ 200, uma carteira e uma carta de amor.','Devolver','Ficar com o dinheiro',
 ['+|O dono agradeceu e te deu R$ 100.|+100 >3','-|O dono nunca apareceu.|-0 <2','-|O dono te acusou de "ter pego".|-100'],
 ['+|Usou o dinheiro e comprou um presente.|+200 >2','-|O karma te atingiu: perdeu a carteira.|-300','-|Alguém te viu e fofocou.|-0 <2']);
SIT('baixa,media','🔥','Fogão com vazamento','Seu fogão tem vazamento de gás. Você sente o cheiro. O botijão é do vizinho.','Chamar o técnico','Fechar o registro',
 ['+|O técnico consertou rápido e cobrou R$ 40.|+0 >2','!|O gás explodiu e você levou um susto.|-150 P','-|O técnico cobrou R$ 300.|-300'],
 ['+|Fechou a tempo e ninguém se machucou.|+0 >2','-|O vizinho reclamou do cheiro.|-0 <2','-|Perdeu o botijão.|-100']);
SIT('baixa,media','📱','Celular quebrado no ônibus','Seu celular caiu do bolso e foi parar debaixo do banco. O ônibus freou e ele voou.','Procurar','Deixar',
 ['+|Achou o celular intacto.|+0 >2','-|O celular quebrou em 3 pedaços.|-300','-|Alguém pegou o celular.|-500'],
 ['-|Perdeu o celular pra sempre.|-500','+|O motorista achou e devolveu.|+0 >2','-|Ficou sem celular por 1 mês.|-0 P']);
SIT('baixa,media','🛒','Promoção de mercado','O mercado anuncia "20% de desconto em tudo". Você sabe que o preço subiu 50% na véspera.','Comprar mesmo assim','Fazer a conta',
 ['-|Pagou mais caro e ainda se sentiu enganado.|-100','+|Achou um item realmente barato.|+30 >2','-|A fila do caixa durou 1 hora.|-0 P'],
 ['+|Descobriu o truque e economizou.|+50 >2','-|Perdeu a promoção.|-0 <1','-|Chegou ao caixa e esqueceu a carteira.|-0 <2']);
SIT('baixa,media','📚','Aula particular','Seu filho precisa de aula de reforço. O professor particular cobra R$ 150 por hora.','Pagar','Ensinar você mesmo',
 ['+|O filho tirou 10 e a escola te elogiou.|+0 >3','-|O professor faltou 3 aulas.|-450','-|O filho continuou com 5.|-300'],
 ['+|Aprendeu junto e ficou orgulhoso.|+0 >3','-|Brigaram e o filho chorou.|-0 <2','-|Você errou a matéria.|-0 <2']);
SIT('baixa,media','🏖️','Excursão pra praia','Seu bairro organiza uma excursão de ônibus pra Arraial do Cabo. Preço: R$ 60.','Ir','Ficar em casa',
 ['+|A praia era linda e você voltou bronzeado.|+0 >3','-|O ônibus quebrou no caminho.|-0 P','-|O ônibus voltou sem você.|-0 <3'],
 ['+|Descansou e economizou.|+60 >2','-|Todo mundo voltou animado e você ficou com inveja.|-0 <1','-|O vizinho fez barulho.|-0 <1']);
SIT('baixa,media','⚽','Time do coração','Seu time perdeu o jogo. O vizinho (de outro time) vem tirar sarro com uma faixa.','Rebater','Ignorar',
 ['+|Rebateu com uma piada genial e todos riram.|+0 >3','-|Brigaram e você levou um soco.|-80 <2','-|A briga virou confusão e a polícia chegou.|-200 P'],
 ['+|Ignorou e dormiu em paz.|+0 >2','-|O vizinho continuou por semanas.|-0 <2','-|Quebrou a TV de raiva.|-500']);
SIT('baixa,media','🎰','Máquina caça-níquel','Um boteco tem uma caça-níquel clandestina. Uma senhora de 80 anos ganha todo dia. Você tem R$ 20.','Tentar a sorte','Passar',
 ['+|Ganhou R$ 300!|+300 >3','-|Perdeu os R$ 20.|-20','-|A polícia fez batida.|-100 P'],
 ['+|Ficou tranquilo e economizou.|+0 >2','-|A senhora ganhou de novo e você chorou.|-0 <1','-|Alguém te chamou de "medroso".|-0 <1']);
SIT('baixa,media','🏍️','Moto pra trabalhar','Você precisa de uma moto pra entregar. Um amigo vende uma por R$ 2.000. Ela tem "uns probleminhas".','Comprar','Procurar outra',
 ['+|A moto era boa e você ganhou muito.|+800 >3','-|A moto quebrou na primeira semana.|-1000','-|A moto era roubada.|-2000 P'],
 ['+|Achou uma melhor por um preço bem melhor.|+500 >3','-|Rodou 10 lojas e voltou ao amigo.|-0 <2','-|Perdeu o emprego.|-0 <3']);
// ---- alta (parte 4)
SIT('alta','🛥️','Marina da Glória','Seu iate está atracado na Marina. Um vizinho de píer reclama do "barulho de champanhe".','Pedir desculpas','Dar uma festa pra ele',
 ['+|Ele aceitou e virou seu amigo.|+500 >3','-|Ele te processou por "perturbação".|-800','-|Ele chamou a polícia marítima.|-300 <2'],
 ['+|A festa foi um sucesso e ele virou sócio.|+1500 >3','-|Ele odiou a festa.|-500','-|Ele quebrou a lancha dele de raiva.|-1000']);
SIT('alta','🏇','Corrida no Jockey','Você tem um cavalo no Jockey Club. Hoje ele corre. Seu rival aposta contra.','Apostar R$ 10 mil','Não apostar',
 ['+|O cavalo ganhou e você ganhou uma bolada.|+5000 >3','-|O cavalo tropeçou.|-1000','-|Perdeu e o rival riu.|-1000 <2'],
 ['-|O cavalo ganhou e você perdeu a chance.|-0 <3','+|Ficou tranquilo e curtiu o champanhe.|+0 >2','-|O rival ganhou R$ 100 mil.|-0 <2']);
SIT('alta','🛍️','Compras na Oscar Freire','Na Oscar Freire (no Rio!), uma vendedora te mostra uma bolsa de R$ 50 mil. Ela diz "só tem 1".','Comprar','Pensar',
 ['+|A bolsa valorizou e você ganhou uma bolada.|+2000 >3','-|A bolsa era falsa.|-5000','-|A bolsa foi roubada no mesmo dia.|-5000'],
 ['-|Outro cliente comprou antes.|-0 <2','+|Achou uma melhor por um preço bem melhor.|+2000 >3','-|A vendedora te achou "indeciso".|-0 <1']);
SIT('alta','🏠','Obra no Joá','A obra da sua casa no Joá encontra uma nascente. O IBAMA aparece.','Negociar','Esconder',
 ['+|O IBAMA aceitou e você ganhou um selo "verde".|+500 >3','-|Foi multado pesadíssimo.|-5000','-|A obra parou por 2 anos.|-0 P'],
 ['-|O IBAMA descobriu e te processou.|-8000 P','+|Ninguém viu e a obra seguiu.|+500 >2','-|O vizinho denunciou.|-1000 <2']);
SIT('alta','🍷','Jantar harmonizado','O chef prepara 14 pratos com 14 vinhos. A conta é de R$ 12 mil por pessoa. O garçom te olha.','Fazer tudo','Pedir só 7',
 ['+|Foi uma noite divina e você fez 3 contatos úteis.|+500 >3','-|Passou mal e vomitou no banheiro.|-300 P','-|A conta chegou e você pagou 3x.|-3000'],
 ['+|Foi sensato e saiu inteiro.|+0 >2','-|O chef ficou ofendido.|-0 <2','-|O sommelier te olhou com desprezo.|-0 <1']);
SIT('alta','🚗','Estacionamento do clube','Um manobrista arranha seu carro de R$ 800 mil. Ele chora. Diz que "tem filhos".','Perdoar','Cobrar o conserto',
 ['+|Ele te agradeceu e te levou um presente.|+0 >3','-|O carro ficou arranhado.|-0 <2','-|Alguém filmou e você virou vilão.|-0 <3'],
 ['+|O clube pagou o conserto e você ganhou um desconto.|+1000 >2','-|O manobrista foi demitido e te processou.|-3000','-|O conserto custou uma fortuna.|-4000']);
SIT('alta','🦐','Camarão no Leblon','Num restaurante do Leblon, um garçom oferece camarão "do dia". Custa R$ 380 a porção.','Pedir','Pedir outro prato',
 ['+|O camarão era divino e você pediu mais.|+0 >2','!|Teve alergia e foi pro hospital.|-500 P','-|O camarão era congelado.|-380'],
 ['+|Pediu uma moqueca e foi feliz.|+0 >2','-|O prato demorou 1 hora.|-0 <1','-|A moqueca veio sem peixe.|-100']);
SIT('alta','🧖','Mansão com piscina','Sua mansão tem uma piscina que vaza. O piscineiro cobra R$ 15 mil pra consertar.','Pagar','Fazer sozinho',
 ['+|Consertou em 2 dias e te deu 1 ano de garantia.|+0 >3','-|Consertou mal e vazou de novo.|-5000','-|O piscineiro sumiu.|-3000'],
 ['!|Escorregou na piscina e se machucou.|-500 P','+|Consertou e economizou uma bolada.|+1000 >3','-|Alagou o jardim.|-2000']);
SIT('alta','🛫','Voo comercial','Seu jatinho tá em manutenção. Você precisa pegar um voo comercial. O funcionário da cia aérea é seu ex-empregado.','Aceitar o voo','Alugar outro jato',
 ['+|O ex-empregado te tratou bem e você virou "gente boa".|+0 >3','-|Ele te colocou na classe econômica.|-0 <2','-|Perdeu a mala.|-1000'],
 ['+|Alugou e chegou em 1 hora.|+0 >3','-|Gastou uma fortuna.|-8000','-|O jato atrasou.|-0 <2']);
SIT('alta','🎆','Réveillon na Praia de Copacabana','Você assiste ao Réveillon de um camarote. Alguém te oferece "o melhor champanhe da casa".','Aceitar','Recusar',
 ['+|Era o champanhe da vida.|+0 >3','-|Era uma garrafa falsificada.|-500','-|Bebeu demais e dormiu no sofá.|-0 P'],
 ['+|Ficou sóbrio e curtiu os fogos.|+0 >2','-|Todo mundo te olhou torto.|-0 <1','-|Perdeu a festa.|-0 <1']);
// ---- alto padrão (parte 4)
SIT('alto','🏛️','Votação de madrugada','A votação é às 3h da manhã. Todos os deputados estão dormindo. Você precisa de quórum.','Chamar os dormentes','Votar sozinho',
 ['+|Todos acordaram e votaram a seu favor.|+1500 >3','-|Todos votaram contra e te xingaram.|-500 <2','-|Alguém filmou e viralizou.|-0 <2'],
 ['+|Votou sozinho e o projeto passou.|+2000 >3','-|O voto foi anulado.|-0 <3','-|A imprensa criticou "a votação fantasma".|-1000 <3']);
SIT('alto','📞','Telefonema do ministro','O ministro te liga: "preciso de um favor". Você já deve 3. Ele fala baixinho.','Atender','Deixar tocar',
 ['+|O favor era simples e te rendeu um cargo.|+1500 >3','-|O favor era uma armadilha.|-2000 P','-|Ele gravou a ligação.|-1000 <3'],
 ['+|Deixou tocar e ele esqueceu.|+0 >2','-|Ele ficou ofendido.|-500 <3','-|Ele te ligou mais 12 vezes.|-0 <2']);
SIT('alto','🏖️','Casa de praia do empreiteiro','Um empreiteiro te empresta a casa de praia. Você usa o fim de semana inteiro. A conta de energia vem pra você.','Pagar a conta','Ignorar',
 ['+|O empreiteiro ficou grato e te deu um contrato.|+1000 >3','-|A conta de energia veio astronômica.|-5000','-|A imprensa descobriu o "empréstimo".|-1500 <3'],
 ['-|O empreiteiro cobrou o favor depois.|-1000 <3','+|Ninguém notou.|+0 >2','-|A conta foi pro seu nome.|-3000']);
SIT('alto','📰','Colunista implacável','Um colunista te ataca toda semana. Hoje ele publicou uma "paródia" dos seus discursos.','Rir junto','Processar',
 ['+|O povo adorou sua reação.|+800 >3','-|O colunista ficou famoso e você virou meme.|-0 <3','-|A paródia ficou melhor que o original.|-0 <2'],
 ['+|Ganhou o processo e uma indenização gorda.|+3000 >3','-|O processo foi arquivado.|-500 <2','-|A imprensa te chamou de "censor".|-1000 <3']);
SIT('alto','🎖️','Pedido de desculpas','Você falou uma besteira no microfone aberto. O vídeo bombou. Os assessores pedem "pedido de desculpas".','Pedir desculpas','Dobrar a aposta',
 ['+|O povo perdoou e você subiu nas pesquisas.|+500 >3','-|O pedido de desculpas virou meme.|-300 <3','-|Alguém recortou e fez uma paródia.|-0 <2'],
 ['-|O povo ficou furioso.|-1500 <3','+|Dobrou e virou "sincero".|+800 >3','-|A imprensa fez um especial.|-1000 <3']);
SIT('alto','🏛️','Reforma ministerial','O presidente pede sua demissão do cargo. Mas você tem aliados.','Aceitar','Recusar',
 ['+|Saiu com um cargo melhor.|+1000 >3','-|Foi esquecido.|-0 <3','-|Virou notícia ruim.|-500 <2'],
 ['+|Os aliados te mantiveram no cargo.|+500 >3','-|O presidente te demitiu mesmo assim.|-1500 <3','-|Todos te chamaram de "teimoso".|-0 <2']);
SIT('alto','🍽️','Almoço com jornalistas','Você almoça com jornalistas. Eles perguntam "quanto custou o prato?". Você não sabe.','Chutar','Evitar a pergunta',
 ['+|Acertou o valor por sorte e todos aplaudiram.|+300 >3','-|Chutou um preço baixíssimo e o prato custou dez vezes mais.|-500 <3','-|Virou notícia: "político não sabe o preço".|-500 <3'],
 ['+|Mudou de assunto e ninguém percebeu.|+0 >2','-|Os jornalistas insistiram.|-0 <2','-|Alguém filmou.|-0 <2']);
SIT('alto','🤝','Acordo de bastidor','Um colega te propõe um acordo. "Eu te ajudo na votação, você me ajuda na licitação".','Aceitar','Recusar',
 ['+|Ambos ganharam e ninguém soube.|+2000 >3','-|O Ministério Público descobriu.|-3000 P','-|O colega te traiu.|-1500 <3'],
 ['+|Recusou e virou "ético".|+500 >3','-|O colega virou inimigo.|-1000 <3','-|Perdeu a votação.|-0 <3']);
SIT('alto','📱','Aplicativo oficial','O governo lança um aplicativo oficial. Ele trava, mostra ofensas e vira meme. Você é o responsável.','Assumir','Culpar o estagiário',
 ['+|Todos respeitaram sua coragem.|+500 >3','-|Virou meme: "o ministro do app".|-500 <3','-|Perdeu milhões.|-1000'],
 ['+|Todos acreditaram.|+0 >2','-|O estagiário revelou tudo.|-1000 <3','-|Virou escândalo.|-1500 <3']);
