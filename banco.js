// ============================================================================
//  BANCO DE SITUAÇÕES — RJ Tabuleiro
//  Cada situação: SIT(perfis, emoji, título, texto, opçãoA, opçãoB, [3 desfechos A], [3 desfechos B], idade?)
//    perfis : '*' (qualquer um) ou lista: baixa,media,alta,crime,legal,alto,estudante
//    idade  : opcional  '60+' (só 60 anos ou mais) · '<=25' (até 25 anos) · '30+' ...
//  Desfecho: 'tipo|texto|efeito'
//    tipo   : '+' sorte · '-' azar · '!' azar com dano físico (idoso internado, SUS, clínica particular…)
//    efeito : tokens separados por espaço →  +300 / -150 (R$ base, escala com a renda)
//             >2 (avance 2 casas) · <3 (volte 3 casas) · P (perca a próxima vez) · J (jogue de novo)
// ============================================================================
(function(){
  const fmt=t=>{
    let money=0,move=0,perde=false,again=false;
    t.split(/\s+/).filter(Boolean).forEach(k=>{
      if(k==='P')perde=true; else if(k==='J')again=true;
      else if(k[0]==='>')move+=+k.slice(1); else if(k[0]==='<')move-=+k.slice(1);
      else money+=+k;
    });
    const a=[];
    if(money)a.push((money>0?'+ ':'– ')+'R$ '+Math.abs(money).toLocaleString('pt-BR'));
    if(move)a.push(move>0?`Avance ${move} casa${move>1?'s':''}`:`Volte ${-move} casa${move<-1?'s':''}`);
    if(perde)a.push('Perca a próxima vez'); if(again)a.push('Jogue de novo');
    return a.join(' · ')||'Nada muda';
  };
  // desfecho sem efeito mecânico ganha um padrão: sorte avança 1 casa, azar volta 1 casa (todo resultado tem consequência no tabuleiro)
  const efd=(f,g)=>f==='Nada muda'?(g?'Avance 1 casa':'Volte 1 casa'):f;
  const O=s=>{const [k,x,e]=s.split('|');const g=k==='+';return {g:g?1:0,d:k==='!'?1:0,x,eff:efd(fmt(e||''),g)}};
  // Carta direta (sem escolha): C(perfis, tipo, emoji, título, texto, efeito, idade?)  — tipo: '+' sorte · '-' azar · '!' azar com dano
  window.DIRETAS=window.DIRETAS||[];
  window.C=(cats,k,ico,t,x,e,ag)=>{
    const o={ico,t,g:k==='+'?1:0,d:k==='!'?1:0,x,eff:efd(fmt(e||''),k==='+')};
    if(cats!=='*')o.for=cats.split(',');
    if(ag)o.ag=ag;
    DIRETAS.push(o);
  };
  window.SIT=(cats,ico,t,x,la,lb,ra,rb,ag)=>{
    const o={ico,t,x,opts:[{l:la,r:ra.map(O)},{l:lb,r:rb.map(O)}]};
    if(cats!=='*')o.for=cats.split(',');
    if(ag)o.ag=ag;
    SITUACOES.push(o);
  };
})();
// ---------------------------------------------------------------- GERAIS (qualquer personagem)
SIT('*','🥥','Calor de 42 graus','O Rio tá um forno. O vendedor de coco passa gritando bem na sua frente.','Comprar o coco','Aguentar a sede',
 ['+|O vendedor deu desconto pra "turista simpático".|+10','-|Era coco de ontem. Você passou a noite no banheiro.|-40 P','-|Pagou R$ 15 e o canudo furou.|-15'],
 ['+|Achou uma bica no parque e bebeu de graça.|>1','!|Desidratou e desmaiou na calçada.|-60 <1','+|Um desconhecido te pagou um mate. Milagre!|+10']);
SIT('*','🌊','Ressaca na praia','O mar subiu e levou metade da areia. Tem gente com o guarda-sol boiando.','Salvar o guarda-sol','Deixar pra lá',
 ['+|Salvou o guarda-sol e o dono te deu cerveja gelada.|+30','!|Uma onda te derrubou. Engoliu meio litro de mar.|-50 <1','-|Era guarda-sol de outro. Você pagou o prejuízo.|-80'],
 ['+|Sentou numa pedra e viu o show de longe.|>1','-|A onda levou sua bolsa junto.|-120','+|Achou uma nota de R$ 50 no meio da espuma.|+50']);
SIT('*','🍺','Conta do bar','A mesa pediu 14 chopes e 3 porções. Na hora de rachar, todo mundo sumiu.','Pagar tudo','Rachar com quem sobrou',
 ['-|Pagou R$ 400 e ainda levou bronca do garçom.|-400','+|O garçom errou a conta pra menos. Fuga comemorada!|+50 >1','-|Descobriu que a mesa inteira era de outro grupo. Mico.|-150'],
 ['+|Os 2 que sobraram eram generosos e pagaram sua parte.|+20','-|Você acabou pagando mais que todo mundo.|-130','-|Sobraram cinco, ninguém tinha dinheiro. Lavou prato.|P']);
SIT('*','🚕','Táxi ou Uber?','Chuva forte. O Uber tá 6x e o táxi, sem bandeira.','Pegar o Uber','Chamar o táxi',
 ['-|Pagou 6x e o motorista te deixou na rua errada.|-150','+|Motorista simpático, ar-condicionado e bala de menta.|+0 >2','-|O Uber cancelou 3 vezes e você perdeu o horário.|P'],
 ['+|O taxista era tio de um amigo e fez preço de família.|+40 >1','-|O taxímetro correu mais que a Fórmula 1.|-100','-|O taxista fez um passeio turístico não solicitado.|-60 <1']);
SIT('*','⚽','Pelada no domingo','Time desfalcado. O goleiro faltou e todo mundo olha pra você.','Ir pro gol','Ficar no banco',
 ['+|Defendeu um pênalti e virou herói do bairro.|+50 >2','!|Pegou uma bolada na cara e perdeu um dente.|-80 <1','-|Tomou 9 gols. O apelido virou "peneira".|-20'],
 ['+|Ficou de olho e achou uma moeda de R$ 1 na grama.|+1','-|O time perdeu e você pagou a cerveja do castigo.|-60','+|O técnico te escalou no segundo tempo e você fez um golaço.|>2']);
SIT('*','🔌','Apagão no prédio','Sem luz às 20h. Calor, escuro e a pizza esfriando.','Ir pro bar','Ficar no escuro',
 ['+|O bar tinha gerador e a promoção era "luz grátis".|>1','-|O bar tava cheio de gente com a mesma ideia. Fila.|-30 P','-|Pagou R$ 40 de couvert pra ficar no escuro também.|-40'],
 ['+|Descobriu um jeito de gambiarra e a luz voltou.|+0 J','-|Tropeçou no escuro e machucou o dedo.|-30 <1','-|A pizza esfriou e o entregador ficou com a gorjeta.|-60']);
SIT('*','🛒','Mercado lotado','Promoção de carne e cerveja. A fila do caixa dá volta no quarteirão.','Entrar na fila','Furar a fila',
 ['+|A fila andou mais rápido que o previsto.|>1','-|Descobriu que tinha esquecido a carteira. Constrangimento.|-0 P','-|O preço no caixa era diferente do da prateleira.|-70'],
 ['+|Fingiu que era funcionário e passou batido.|>2','-|A tiazinha da fila te deu uma bolsada.|-10 <1','-|O segurança te escoltou pra fora. Vergonha.|P']);
SIT('*','🚪','Chaves trancadas','Você saiu de casa e a porta bateu. As chaves ficaram lá dentro.','Chamar o chaveiro','Pular a janela',
 ['-|O chaveiro cobrou o preço de um iPhone.|-250','+|O chaveiro era honesto e cobrou só R$ 30, e ainda deu um chaveiro de brinde.|+0 >1','-|Demorou 4 horas. Você perdeu a festa.|P'],
 ['!|Pulou a janela e torceu o tornozelo.|-60 <2','+|Conseguiu entrar e ainda achou R$ 20 no sofá.|+20 >1','-|O vizinho viu e chamou a polícia.|-100']);
SIT('*','🍕','Pizza de domingo','A pizzaria tá fechando. Falta 1 fatia e você e o amigo querem.','Brigar pela fatia','Dividir ao meio',
 ['-|Briga de farinha. Amizade desfeita.|P','+|Ganhou a fatia e uma risada de brinde.|>1','-|A pizza caiu no chão. Ninguém comeu.|-30'],
 ['+|Dividiram e o garçom trouxe sobremesa por conta.|+20','-|A metade do amigo era maior. Rancor eterno.|-10','+|Fizeram as pazes e juraram jamais brigar por comida.|>1']);
SIT('*','🌳','Passeio no Aterro','Domingo de sol no Aterro do Flamengo. Bicicleta de aluguel ou caminhada?','Alugar a bike','Caminhar',
 ['+|Passeio lindo com vento no cabelo.|>2','!|Caiu da bike em frente a um grupo de turistas. Viralizou.|-50 <1','-|A bike quebrou e você teve que pagar o conserto.|-80'],
 ['+|Encontrou um amigo antigo e fecharam um churrasco.|+30 >1','-|Foi assaltado por um macaco. O macaco levou o lanche.|-30','+|Fez uma sessão de fotos com o Pão de Açúcar ao fundo.|>1']);
SIT('*','🎤','Karaokê no bar','O dono te desafiou: "bora cantar, ou paga a rodada".','Aceitar o desafio','Pagar a rodada',
 ['+|Cantou "Evidências" e o bar chorou. Ganhou drink.|+20 >1','-|Desafinou tanto que o cachorro do bar uivou.|-30','-|O microfone falhou e você cantou a cappella. Constrangedor.|-10 <1'],
 ['-|A rodada saiu mais cara que o esperado.|-120','+|O dono te deu desconto por ter coragem de recusar.|+10','-|A rodada foi pra 12 pessoas e você nem conhecia.|-200']);
SIT('*','🌧️','Chuva de verão','Choveu de repente. O ponto de ônibus virou ilha.','Esperar o ônibus','Atravessar no sapato',
 ['-|O ônibus passou lotado sem parar.|-0 P','+|Passou um ônibus vazio com ar-condicionado. Milagre.|>2','-|Ficou ali por 1 hora e se molhou do mesmo jeito.|-30'],
 ['-|Pisou numa poça e perdeu o chinelo.|-30 <1','!|Escorregou e caiu de bunda no asfalto.|-20 <1','+|Um guarda-chuva solidário te cobriu até o ponto.|+0 >1']);
SIT('*','🎁','Amigo secreto','Chegou a hora do amigo secreto. Você tirou o chefe. Valor mínimo: R$ 50.','Dar um presente caro','Dar um presente barato',
 ['+|O chefe amou e te deu um bônus.|+100','-|O chefe odiou e te mandou fazer hora extra.|-0 P','-|Gastou R$ 200 e ele nem agradeceu.|-200'],
 ['-|O chefe notou e ficou ofendido.|-0 <1','+|Ele achou "divertido" e te elogiou na reunião.|>1','-|Ele devolveu o presente na frente de todo mundo.|-30']);
SIT('*','🐀','Rato no restaurante','Você vê um rato passando pelo salão. Ninguém mais percebeu.','Avisar o gerente','Sair de fininho',
 ['+|O gerente agradeceu e te deu a refeição de graça.|+50 >1','-|O gerente negou e ainda te acusou de ter levado o rato.|-100','-|Fecharam o restaurante e você ficou sem jantar.|P'],
 ['+|Foi embora a tempo e comeu um cachorro-quente maravilhoso.|>1','-|Comeu mesmo assim e passou mal.|-50 P','-|Alguém filmou a fuga e postou. Virou meme.|<1']);
SIT('*','🎰','Bilhete premiado','Você achou um bilhete de loteria no chão. Pode ser premiado.','Conferir','Rasgar',
 ['+|Era premiado! Quina de R$ 500.|+500','-|Era um bilhete de 2003. Só deu esperança.|-0','-|Foi processado por tentar sacar bilhete alheio.|-200'],
 ['+|Rasgou e ficou aliviado. Felicidade é ter paz.|>1','-|No dia seguinte descobriu que era premiado.|-0 <1','-|Rasgou e o vizinho viu. Hoje ele é seu inimigo.|-10']);
SIT('*','🎭','Bloco de rua','O bloco do bairro tá passando. A multidão te puxa pra dentro.','Entrar no bloco','Ficar na calçada',
 ['+|Dançou tanto que ganhou o apelido de "rei do samba".|+0 >2','!|Levou cotovelada, perdeu o celular e o sapato.|-150 <1','-|O bloco foi pra outro lado e você ficou perdido.|P'],
 ['+|Viu um cantor famoso passar e tirou foto.|>1','-|Alguém jogou cerveja na sua camisa.|-30','+|Vendeu cerveja pros foliões e lucrou.|+80']);
SIT('*','🛵','Moto sem freio','Você pegou carona de moto. O motoqueiro avisa: "freio tá meio duvidoso".','Segurar firme','Descer na hora',
 ['+|Chegou inteiro e ainda ganhou desconto.|>3','!|A moto bateu no meio-fio. Você foi parar no asfalto.|-100 <2','-|Perdeu o capacete e a vergonha.|-40 <1'],
 ['+|Foi a pé e descobriu uma padaria nova.|+0 >1','-|Perdeu o horário e levou bronca.|-0 P','-|Foi atropelado por uma bicicleta. Humilhante.|-20 <1']);
SIT('*','📦','Encomenda estranha','Chegou um pacote sem remetente na sua porta. Pode ser presente… ou problema.','Abrir','Devolver',
 ['+|Era uma caixa de chocolates de um admirador secreto.|+30','-|Era uma caixa de papel higiênico usado. Brincadeira de mau gosto.|-0 <1','-|Era um golpe de cobrança por uma dívida que você não tem.|-100'],
 ['-|O correio cobrou taxa de devolução.|-40','+|Descobriu que era presente do seu primo rico e ele te perdoou.|+100','-|O pacote sumiu e agora você é suspeito.|P']);
SIT('*','🎬','Cinema do Shopping','Ingresso a R$ 45 e pipoca a R$ 38. Você escolhe sobreviver ou se divertir?','Comprar tudo','Levar lanche escondido',
 ['-|A pipoca estava velha e você pagou o mesmo.|-83','+|Ganhou um combo de brinde por ser o 100º cliente.|+0 >1','-|O filme era ruim e você dormiu.|-45'],
 ['-|O segurança confiscou seu sanduíche.|-0 <1','+|Ninguém viu e o filme foi ótimo.|>2','-|A mochila vazou e o cinema inteiro cheirou a atum.|-20']);
SIT('*','📸','Foto no Cristo','Subindo pro Cristo Redentor. Tem fila e todo mundo posando com os braços abertos.','Pagar fotógrafo','Tirar selfie sozinho',
 ['-|O fotógrafo cobrou R$ 80 e a foto saiu borrada.|-80','+|A foto ficou tão boa que virou capa de revista.|+60 >1','-|Ele fugiu com seu celular na mão.|-200'],
 ['-|Deixou o celular cair no vale. Que decepção.|-300','+|A selfie ficou incrível e te rendeu 3 mil curtidas.|>2','!|Escorregou no degrau e levou um tombo feio.|-30 <1']);
SIT('*','🍖','Churrasco de laje','O vizinho te chamou pro churrasco. Mas pediu pra você levar a carne.','Levar picanha','Levar linguiça',
 ['+|A picanha fez sucesso e você virou "o cara".|+0 >2','-|Gastou R$ 200 e a carne acabou antes de você comer.|-200','-|Esqueceu de comprar o carvão. Ninguém comeu.|P'],
 ['+|A linguiça foi a mais elogiada. Ninguém sabe por quê.|>1','-|Era linguiça vencida. Ninguém contou.|-0 P','+|O vizinho trouxe a carne e você só ficou com a fama.|+20']);
SIT('*','🐕','Passear com o cachorro','O cachorro do vizinho te adotou e puxa a coleira em direção ao parque.','Soltar a coleira','Segurar firme',
 ['-|O cachorro fugiu e você teve que correr atrás dele.|-0 <1','+|Ele voltou sozinho com um osso na boca.|+0 >1','-|O cachorro invadiu o picnic dos outros.|-90'],
 ['!|O cachorro puxou tão forte que você caiu.|-30 <2','+|Fizeram amizade com outro dono simpático.|+0 >1','-|O cachorro fez cocô na frente do síndico.|-50']);
SIT('*','🔑','Dinheiro emprestado','Um amigo pede R$ 300 emprestado. "Pago semana que vem, juro".','Emprestar','Negar',
 ['-|Ele pagou? Nunca. Nem o apelido você lembra mais.|-300','+|Ele pagou em dia e ainda te deu um brinde.|+30','-|Ele sumiu e foi morar em Portugal.|-300 <1'],
 ['+|Ficou sem dinheiro emprestado e com amigo. Paz.|>1','-|O amigo se ofendeu e parou de te falar.|<1','-|Fofocaram que você é sovina.|-0 P']);
SIT('*','🚤','Passeio de barco','Passeio pela Baía de Guanabara. O barqueiro fala "vai ser tranquilo".','Aceitar o passeio','Ficar no cais',
 ['+|Viu golfinhos e tirou fotos incríveis.|>2','!|O barco balançou, você enjoou e vomitou na água.|-30 <1','-|O barqueiro pediu mais dinheiro no meio da baía.|-100'],
 ['-|Ficou esperando 2 horas e o barco não voltou.|P','+|Conheceu um pescador que te deu um peixe.|+0 >1','-|Perdeu o dinheiro numa barraquinha de souvenir falso.|-70']);
SIT('*','🥁','Roda de samba','Roda na Lapa. O sambista te chama pra tocar o pandeiro.','Tocar','Só assistir',
 ['+|Mandou bem e ganhou aplauso e um chope.|+20 >2','-|Errou o ritmo e o grupo parou de tocar. Vergonha.|-0 <1','-|Quebrou o pandeiro do cara. Prejuízo.|-120'],
 ['+|Ficou curtindo e achou uma nota no bolso.|+20 >1','-|Alguém roubou sua cerveja.|-15','+|Um turista te pagou uma caipirinha.|>1']);
SIT('*','🌃','Rolê na Lapa','Madrugada na Lapa. A noite promete, mas a carteira está leve.','Ir pra farra','Voltar pra casa',
 ['+|A noite foi épica e você acordou com R$ 50 a mais.|+50 >2','-|Gastou tudo e acordou na casa de um estranho.|-200 P','-|Perdeu o último ônibus e voltou a pé.|-0 <2'],
 ['+|Dormiu cedo e acordou disposto.|>1','-|No caminho levou um susto com um gato.|-0','+|Achou uma moeda de R$ 1 no chão.|+1']);
SIT('*','🧊','Sorveteria do bairro','O sorvete tá derretendo antes de você tomar.','Comer rápido','Aproveitar devagar',
 ['-|Deu dor de cabeça de sorvete. Ficou 5 minutos parado.|-0 P','+|Terminou antes de derreter. Vitória!|>1','-|O sorvete caiu na camisa. Mancha eterna.|-40'],
 ['-|Derreteu tudo no seu braço.|-0','+|A sorveteria deu um segundo grátis por causa da demora.|+0 >1','-|Uma criança roubou o sorvete e fugiu.|-20']);
SIT('*','🌆','Pôr do sol no Arpoador','Todo mundo bate palma quando o sol se põe. Você também bate?','Bater palma','Ficar quieto',
 ['+|Todo mundo aplaudiu junto e você se sentiu parte do Rio.|>1','-|Aplaudiu na hora errada e o sol ainda não tinha sumido.|-0','-|Um turista tirou foto sua batendo palma errado. Meme.|<1'],
 ['+|Ficou em paz e tirou a melhor foto do dia.|>1','-|Um cara te cutucou: "bata palma, ué".|-0','+|Achou uma moeda de R$ 5 na pedra.|+5']);
SIT('*','🎷','Músico de rua','Um músico toca sax na rua. Você curte e ele olha pra você.','Dar uma moeda','Passar reto',
 ['+|Ele tocou sua música favorita e te deu um adesivo.|+0 >1','-|Deu R$ 10 e ele pediu mais.|-10','+|Foi tão generoso que ele te chamou de "anjo".|+30'],
 ['-|Ele parou de tocar e te encarou com ódio.|-0 <1','+|Passou rápido e achou um bilhete de R$ 20.|+20','-|Tropeçou no estojo do sax e levou bronca.|-20']);
SIT('*','🌺','Feira de domingo','A feira tá cheia de frutas, peixe e fofoca. Você quer comprar o quê?','Comprar frutas','Comprar peixe',
 ['+|Achou uma barraca de abacaxi com desconto.|+10 >1','-|A banana tava podre e o feirante riu de você.|-30','+|Ganhou 1 laranja de brinde por simpatia.|+0 >1'],
 ['-|O peixe estava velho. Cheiro de morte.|-60 P','+|O peixe era fresco e a feirante te ensinou receita.|+0 >2','-|O gato da feira roubou seu peixe.|-50']);
SIT('*','🔥','Churrasqueira falha','O carvão não pega e todo mundo tá com fome.','Usar álcool','Esperar',
 ['!|O fogo subiu demais e queimou sua sobrancelha.|-40 <1','+|O fogo pegou perfeito e a carne ficou ótima.|>2','-|Queimou o churrasco inteiro.|-120'],
 ['-|A fome subiu e a paciência acabou. Todo mundo foi embora.|P','+|O vizinho trouxe uma churrasqueira elétrica.|+0 >1','-|Choveu e o churrasco foi cancelado.|-0']);
SIT('*','🏍️','Pedágio de motoboy','O motoboy buzina atrás de você pra passar. Você tá no meio da rua.','Abrir caminho','Não sair',
 ['+|Ele agradeceu e gritou "valeu, parceiro!"|>1','-|Ele passou raspando e levou seu retrovisor.|-80','+|Pagou um café pra ele e fez um amigo.|+0 >1'],
 ['-|Ele te xingou em 3 idiomas.|<1','!|Ele te derrubou na pressa.|-60 <2','-|Chamou a polícia e você levou multa.|-120']);
SIT('*','🍟','Fast food da madrugada','3h da manhã. O único lugar aberto é o fast food.','Comer um combo','Procurar outro lugar',
 ['+|Combo em promoção e o atendente simpático.|+0 >1','-|O hambúrguer veio frio e sem queijo.|-45','-|Pegou uma intoxicação alimentar.|-50 P'],
 ['-|Andou 1 hora e tudo fechado.|-0 <1','+|Achou um carrinho de cachorro-quente e comeu o melhor da vida.|>1','-|Foi abordado por alguém suspeito no caminho.|-100']);
SIT('*','🏆','Campeonato de dominó','Seu amigo te inscreveu num campeonato de dominó da rua. Prêmio: R$ 500.','Participar','Fingir que passou mal',
 ['+|Ganhou o campeonato com uma jogada digna de filme.|+500','-|Perdeu na primeira rodada pra uma tiazinha de 80 anos.|-30','-|Descobriu que o campeonato era golpe e perdeu a inscrição.|-100'],
 ['-|O amigo descobriu a mentira e ficou ofendido.|<1','+|Foi pra casa e dormiu em paz.|>1','-|A tiazinha da rua viu e fofocou pra vizinhança.|P']);
SIT('*','🚦','Sinal vermelho','O sinal fechou. Um flanelinha vem limpar o vidro sem permissão.','Pagar R$ 5','Ignorar',
 ['+|Ele agradeceu e te abençoou. A viagem rendeu.|>1','-|Ele pediu R$ 20. Você pagou pra não discutir.|-20','+|Ele limpou tão bem que sobrou troco.|+0 >1'],
 ['-|Ele riscou o carro com a chave.|-150','+|Ele desistiu e foi atrás de outro.|>1','-|Ele começou a gritar e atrapalhou o trânsito.|<1']);
SIT('*','📱','Celular com 1%','Seu celular tá quase sem bateria e você precisa chamar o Uber.','Pedir emprestado o carregador','Pedir pra um desconhecido ligar',
 ['+|Achou uma alma generosa com carregador.|+0 >2','-|O carregador não servia e o cara riu.|-0 <1','-|Perdeu 20 minutos tentando achar tomada.|P'],
 ['+|O desconhecido era simpático e te levou de carona.|+0 >2','-|O desconhecido pediu R$ 20 pela ligação.|-20','-|Era golpe. Ele pegou seu celular.|-300']);
SIT('*','🚶','Caminhada na orla','Você quer fazer exercício na orla. Tem 3 km pela frente.','Correr','Andar devagar',
 ['+|Bateu seu recorde e ganhou uma medalha de papel.|+0 >3','!|Torceu o pé nos paralelepípedos.|-40 <2','-|Cansou na metade e pegou um ônibus de volta.|-6'],
 ['+|Curtiu a paisagem e viu um coqueiro novo.|>1','-|Foi assaltado por uma gaivota.|-10','-|Tirou muitas fotos e perdeu o horário.|P']);
// ---------------------------------------------------------------- CLASSE BAIXA E MÉDIA
SIT('baixa,media','🚌','Ônibus lotado às 18h','O 485 chegou mais cheio que o Maracanã na final. Dá pra entrar ou esperar o próximo?','Espremer pra dentro','Esperar o próximo',
 ['-|Ficou pendurado na porta com a cara no vidro.|-0 <1','!|Uma curva fechada te jogou no colo do trocador.|-30 <1','+|Alguém levantou e te deu o lugar. Surreal.|>2'],
 ['-|O próximo demorou 50 minutos e você se atrasou.|-0 P','+|O próximo veio vazio e com ar ligado.|>2','-|Choveu enquanto você esperava no ponto.|-0 <1']);
SIT('baixa,media','🛍️','Camelô vende relógio','Um camelô jura que o relógio é "original suíço, só hoje R$ 30".','Comprar','Negar',
 ['-|O relógio parou em 3 minutos. Suíço é o cabelo dele.|-30','+|Era relógio bom mesmo! Valia R$ 100.|+100','-|O relógio era um brinquedo infantil.|-30 <1'],
 ['+|Seguiu o caminho e achou uma moeda de R$ 1.|+1','-|O camelô te xingou até a esquina.|-0','-|Foi seguido por 3 camelôs insistentes.|<1']);
SIT('baixa,media','🍽️','Marmita da firma','O almoço de hoje é a marmita de ontem. Cheiro suspeito.','Comer assim mesmo','Almoçar fora',
 ['-|Passou mal e ficou o dia no banheiro.|-0 P','+|Tava ótima, até repetiu.|>1','-|Descobriu uma mosca. Perdeu a fome pra sempre.|-0'],
 ['-|Gastou R$ 40 num self-service por quilo.|-40','+|Achou um prato feito baratinho e delicioso.|+10 >1','-|O restaurante fechou na hora que você chegou.|-0 <1']);
SIT('baixa,media','🔧','Geladeira quebrou','A geladeira parou e a carne descongela. Chamar técnico ou arrumar sozinho?','Chamar o técnico','Arrumar sozinho',
 ['-|O técnico cobrou uma fortuna e trocou uma peça de nada.|-300','+|O técnico era vizinho e cobrou só uma cerveja.|+0 >1','-|Não consertou e ainda levou sua caixa de ferramentas.|-150'],
 ['!|Levou um choque e ficou arrepiado por 1 hora.|-0 P','+|Achou o defeito num fio solto e resolveu na raça.|+0 >2','-|Piorou. Agora precisa de geladeira nova.|-400']);
SIT('baixa,media','🏠','Aluguel atrasado','O proprietário bate na porta. "Cadê o aluguel, meu filho?"','Pedir mais prazo','Pagar parte e prometer o resto',
 ['+|Ele deu mais 15 dias e ainda te desejou boa sorte.|>1','-|Ele aumentou o juro e te deu prazo de 3 dias.|-100','-|Ele chamou o advogado.|-200 P'],
 ['+|Ele aceitou o parcial e ainda te deu um chocolate.|+0 >1','-|Ele disse que "parcelado só no cartão". Você não tem cartão.|-0 <1','-|Ele aceitou, mas dobrou o aluguel.|-150']);
SIT('baixa,media','💈','Barbearia de bairro','O barbeiro é conhecido por fofoca. Você precisa de um corte, mas não quer ser pauta.','Cortar mesmo assim','Cortar em casa',
 ['+|Ouviu todas as fofocas do bairro e ainda saiu bonito.|+0 >1','-|Ele cortou torto e contou pra todo mundo.|-30 <1','-|Foi o último cliente e ficou 4 horas.|-0 P'],
 ['-|A tesoura de casa é cega. O corte virou obra de arte moderna.|-0 <1','+|Ficou ótimo pra surpresa geral.|+0 >1','-|Cortou a orelha. Sem comentários.|-20']);
SIT('baixa,media','🧾','Fiado no mercadinho','O dono do mercadinho tem um caderno de fiado e você tá lá faz 3 meses.','Pagar tudo','Pedir mais um mês',
 ['+|Ele te perdoou 20% da dívida e abriu uma cerveja.|+40 >1','-|Pagou e ficou sem dinheiro até o dia 5.|-150','-|Descobriu que era 3x mais do que você achava.|-200'],
 ['-|Ele pregou seu nome na porta como "devedor oficial".|<1','+|Ele disse que "pra você tem sempre prazo".|>1','-|Ele fechou o fiado e te mandou pra concorrência.|P']);
SIT('baixa,media','🎓','Reunião de pais','A professora chamou os pais. Seu filho "ensinou" os colegas a fazer bomba de fedor.','Ficar do lado do filho','Pedir desculpas',
 ['-|A professora chamou o diretor. Reunião eterna.|-0 P','+|O diretor riu e deu advertência leve.|>1','-|Você levou bronca em dobro.|-50'],
 ['+|A professora elogiou sua educação e ainda ofereceu café.|+0 >1','-|O filho ficou sem videogame por um mês. E você também.|-0 <1','-|Você pagou a conta do estrago.|-80']);
SIT('baixa,media','🧹','Faxina de sábado','A faxina vai render uma tarde inteira. Mas você jura achar algo valioso.','Fazer tudo sozinho','Pedir ajuda',
 ['+|Achou R$ 50 numa gaveta e uma moeda antiga.|+50 >1','!|Machucou as costas levantando o sofá.|-0 P','-|Quebrou o vaso favorito da vó.|-100'],
 ['+|Todo mundo ajudou e a casa ficou impecável.|>2','-|Brigaram no meio e ninguém limpou nada.|<1','-|Pagou a pizza de todo mundo como agradecimento.|-60']);
SIT('baixa,media','🛠️','Obra do vizinho','O vizinho começou uma obra às 7h de sábado. Barulho infernal.','Reclamar','Aguentar',
 ['-|Ele ficou ofendido e aumentou o volume.|-0 <1','+|Ele pediu desculpa e te chamou pro churrasco.|+0 >1','-|Chamou o síndico e virou guerra de condomínio.|P'],
 ['-|Não dormiu e ficou irritado o dia todo.|-0 P','+|Descobriu que ele tinha uma geladeira de cerveja e se infiltrou.|+0 >2','-|Uma parede caiu e quase te acertou.|-50 <1']);
SIT('baixa,media','⚡','Conta de luz alta','A conta veio R$ 600. Você jura que não usou nem a metade.','Reclamar na concessionária','Pagar e chorar',
 ['+|Descobriram erro no medidor e devolveram R$ 300.|+300 >1','-|Ficou 2 horas no telefone e ouviu música de espera.|-0 P','-|Cortaram a luz por engano.|-0 <2'],
 ['-|Pagou e ficou sem dinheiro pro mês.|-600','+|A concessionária deu desconto por pagamento rápido.|+50 >1','-|Descobriu que o vizinho tava puxando luz da sua casa.|-0']);
SIT('baixa,media','🍞','Padaria do bairro','O pãozinho acabou de sair. Mas só tem 3 e a fila é grande.','Pegar logo','Esperar o próximo lote',
 ['+|Pegou o último e o padeiro te chamou de "campeão".|>1','-|Uma senhora pegou na sua frente e te olhou torto.|-0','-|O pão tava queimado. Dentista indignado.|-20'],
 ['+|O próximo lote veio quentinho com manteiga extra.|+0 >1','-|O padeiro foi embora e a padaria fechou.|-0 <1','-|Esperou tanto que perdeu o horário.|P']);
SIT('baixa,media','🚑','Plano de saúde','Você precisa de uma consulta. O plano de saúde é um sonho distante.','Esperar na fila do SUS','Pagar consulta particular',
 ['-|Esperou 7 horas pra ouvir "tome dipirona".|-0 P','+|Foi atendido rápido por uma médica atenciosa.|+0 >2','-|O médico faltou e remarcaram pra mês que vem.|-0 <1'],
 ['-|A consulta custou R$ 400 e o médico olhou o relógio o tempo todo.|-400','+|Era médico bom e resolveu tudo em 5 minutos.|+0 >2','-|Pediu 14 exames e você não tem dinheiro pra nenhum.|-250']);
SIT('baixa,media','📺','TV a cabo','O cara do cabo chegou pra instalar. "Vai ficar uns 15 minutos".','Confiar no cara','Acompanhar tudo',
 ['-|Ficou 4 horas e deixou fios por todo lado.|-0 P','+|Instalou rápido e ainda deu canal extra grátis.|+0 >2','-|Cobrou "taxa de deslocamento" de R$ 80.|-80'],
 ['+|Descobriu 3 gambiarras e evitou prejuízo.|+30 >1','-|O instalador ficou ofendido e foi embora.|-0 <1','-|Perdeu o jogo do Flamengo conversando.|-0']);
SIT('baixa,media','🏦','Fila do banco','Você precisa resolver um problema no banco. A fila tem 40 pessoas.','Esperar','Ir pelo app',
 ['-|Esperou 2 horas e quando chegou, o sistema caiu.|-0 P','+|A fila andou rápido e foi atendido por um gerente simpático.|+0 >2','-|O gerente disse que "só no site".|-0 <1'],
 ['-|O app travou e te bloqueou por segurança.|-0 P','+|Resolveu em 30 segundos e ainda ganhou cashback.|+20 >2','-|O app cobrou tarifa por usar o app.|-30']);
SIT('baixa,media','🧃','Troco errado','O caixa te deu R$ 50 a mais de troco por engano. Ninguém percebeu.','Devolver','Ficar quieto',
 ['+|O dono ficou comovido e te deu um brinde.|+30 >1','-|O caixa descontou do próprio bolso e te olhou com tristeza.|-0 <1','+|Ganhou uma promoção no mercado por honestidade.|+60'],
 ['+|Pegou o dinheiro e comprou um bolo.|+50','-|No fim do dia o caixa chorou e o dono viu as câmeras.|-100','-|O karma bateu: perdeu a carteira na saída.|-60']);
SIT('baixa,media','📚','Livro emprestado','Um amigo te emprestou um livro raro. Você deixou na mesa e a mesa foi limpa.','Assumir o erro','Dizer que nunca recebeu',
 ['+|Ele disse "tudo bem" e te deu outro livro.|+0 >1','-|Ele cobrou R$ 200 pelo livro raro.|-200','-|Ele ficou chateado e parou de te emprestar coisas.|<1'],
 ['-|Ele descobriu a mentira e te chamou de falso.|-0 <2','+|Ele acreditou e achou o livro embaixo do sofá.|+0 >2','-|Ele pediu pra procurar na sua casa.|-0 P']);
SIT('baixa,media','🛏️','Colchão novo','O colchão velho tá com mola saindo. Mas o novo custa R$ 1.500.','Comprar parcelado','Dormir no chão',
 ['+|Aproveitou uma promoção e ainda ganhou um travesseiro.|+30 >1','-|Os juros foram pesados e o total quase dobrou.|-500','-|O colchão veio errado e a troca demorou.|-100 P'],
 ['!|A coluna reclamou. Dor de cabeça e nas costas.|-0 P','+|Descobriu que o chão é mais confortável.|>1','-|Um vizinho viu e começou a rir.|-0']);
SIT('baixa,media','🎂','Aniversário do chefe','O chefe faz aniversário e todo mundo vai ao bar. Você vai ou fala que tem compromisso?','Ir ao bar','Inventar desculpa',
 ['+|Todo mundo bebeu por conta do chefe.|+30 >2','-|A conta sobrou pra você porque o chefe "esqueceu a carteira".|-200','-|Ficou bêbado e contou segredos de todo mundo.|<2'],
 ['-|O chefe soube da mentira e te deu a pior escala.|-0 P','+|Ninguém notou e você foi ao cinema.|+0 >1','-|Postou foto e o chefe viu.|-0 <1']);
SIT('baixa,media','🐔','Galinha de domingo','A vizinha te entregou uma galinha viva de presente. "Pra fazer sopa".','Aceitar','Recusar',
 ['-|A galinha fugiu e você passou a tarde caçando.|-0 P','+|A galinha botou um ovo de ouro (quase). Ótima sopa.|+50 >1','-|O síndico te multou por criar animais.|-100'],
 ['-|A vizinha ficou ofendida e te riscou da lista.|<1','+|Ela te deu um frango congelado de consolação.|+0 >1','-|A galinha fugiu pro seu apartamento mesmo assim.|-0']);
SIT('baixa,media','🧠','Palestra motivacional','O amigo te convidou pra uma palestra de coach quântico: "mude sua vida em 3 dias".','Ir à palestra','Recusar',
 ['-|Pagou R$ 300 e a única mudança foi no seu bolso.|-300','+|O palestrante era um farsante hilário. A noite valeu.|+0 >1','-|Foi coagido a comprar um livro.|-80'],
 ['+|Ficou em casa e ouviu um podcast de graça.|>1','-|O amigo ficou chateado e fez um bolo de culpa.|-0','+|Descobriu depois que o coach foi preso.|>2']);
SIT('baixa,media','💃','Aula de forró','Uma amiga te chamou pra aula de forró. Você tem dois pés esquerdos.','Ir mesmo assim','Fingir uma lesão',
 ['-|Pisou no pé da professora. Boletim de ocorrência.|-0 <1','+|Dançou tão mal que virou meme positivo.|+0 >2','-|Quebrou a bota da parceira.|-70'],
 ['-|Foi pego dançando no bar sem lesão alguma.|-0 <1','+|Ficou em casa e dormiu tranquilo.|+0 >1','-|A amiga descobriu e te deu um "gelo" de 1 semana.|-0']);
SIT('baixa,media','🧯','Alarme de incêndio','O alarme do prédio toca às 3h da manhã. Falso alarme ou fogo de verdade?','Sair correndo','Ficar na cama',
 ['+|Era falso. O síndico pagou café da manhã pra todos.|+20 >1','-|Era fogo na casa do vizinho. Perdeu o sono e a calma.|-0 P','!|Caiu nas escadas correndo e torceu o pé.|-30 <1'],
 ['-|Era fogo de verdade, mas pequeno. Susto grande.|-0 <1','+|Dormiu e acordou sem notícias. Preguiça premiada.|>2','!|O fogo se espalhou e te surpreendeu.|-120 P']);
SIT('baixa,media','🐛','Praga na cozinha','Baratas dominaram a cozinha. Chamar dedetizador ou inseticida caseiro?','Chamar dedetizador','Inseticida caseiro',
 ['-|O dedetizador cobrou R$ 250 e as baratas voltaram.|-250','+|Resolveu de vez e ainda ganhou garantia de 6 meses.|+0 >1','-|O produto deixou um cheiro insuportável por dias.|-0 P'],
 ['!|Respirou o veneno e ficou tonto.|-0 P','+|Funcionou! Cozinha limpa.|+0 >1','-|As baratas ficaram imunes e te olharam com desprezo.|-30']);
SIT('baixa,media','👟','Tênis furado','O tênis furou na sola. Comprar novo ou arrumar no sapateiro?','Comprar novo','Arrumar no sapateiro',
 ['+|Achou uma promoção e levou dois pelo preço de um.|+30 >1','-|O tênis novo estraga em 1 semana.|-200','-|Comprou o tamanho errado e não pode trocar.|-150'],
 ['+|O sapateiro era artista e deixou o tênis como novo.|+0 >1','-|O sapateiro sumiu com o tênis.|-80 <1','+|Ele cobrou só uma cerveja e ainda lustrou.|+0 >2']);
SIT('baixa,media','🧼','Lavanderia do prédio','A máquina de lavar do prédio comeu seu dinheiro e sua roupa.','Reclamar com o zelador','Ir embora e chorar',
 ['+|O zelador devolveu o dinheiro e uma moeda extra.|+10 >1','-|O zelador disse "não é comigo".|-0 <1','-|A máquina quebrou de vez e você levou a culpa.|-100'],
 ['-|Perdeu a roupa favorita.|-80','+|Achou a roupa no varal de outro andar.|+0 >1','-|Teve que lavar tudo à mão.|-0 P']);
SIT('baixa,media','🎈','Festa de criança','Você tá na festa do sobrinho. Um palhaço te escolhe pra ser voluntário.','Aceitar','Fugir',
 ['+|Foi o ponto alto e as crianças te adoraram.|+0 >2','-|Virou piada e as crianças riram de você.|-0 <1','-|Tomou um bolo na cara.|-20'],
 ['-|O palhaço te achou e te arrastou pro palco.|<1','+|Escapou e comeu 7 brigadeiros.|>1','-|Pisou numa bexiga cheia de tinta.|-40']);
SIT('baixa,media','🔦','Ladrão de energia','Você percebeu um "gato" de luz puxando energia do seu poste.','Denunciar','Fingir que não viu',
 ['+|A concessionária te deu desconto na conta.|+100 >1','-|O vizinho descobriu e ficou furioso.|-0 <2','-|Viraram inimigos e ele faz barulho de madrugada.|P'],
 ['-|A conta subiu e a concessionária culpou você.|-250','+|Ninguém notou e a conta ficou normal.|+0 >1','-|O poste pegou fogo.|-100 <1']);
SIT('baixa,media','🥚','Preço do ovo','O ovo tá a R$ 18 a dúzia. Você precisa comprar, mas vai chorar.','Comprar mesmo assim','Procurar outro mercado',
 ['-|Pagou R$ 18 e metade veio quebrada.|-18','+|Ganhou 3 de brinde por simpatia.|+0 >1','-|O caixa cobrou o dobro por engano.|-36'],
 ['+|Achou um mercado com ovo a R$ 9 e levou 3 dúzias.|+0 >2','-|Andou 2 km e todos tinham o mesmo preço.|-0 <1','-|Perdeu o dia nessa busca.|P']);
// ---------------------------------------------------------------- CLASSE ALTA
SIT('alta','🏝️','Casa em Angra','Seu sócio quer vender a casa de Angra. Mas ela tem história.','Vender','Manter',
 ['+|Vendeu por 3x o valor para um investidor estrangeiro.|+500 >2','-|O comprador sumiu e deixou um cheque sem fundo.|-300','-|Descobriu que a casa era do seu pai. Briga familiar.|-100 <1'],
 ['+|A casa rendeu um fim de semana inesquecível.|+100 >1','-|O jardineiro pediu aumento e você precisou pagar.|-200','-|Uma tempestade levou o telhado.|-400']);
SIT('alta','🚗','Carro importado','Seu carro quebrou. A oficina da concessionária cobra uma fortuna.','Levar na concessionária','Levar numa oficina de bairro',
 ['-|Cobraram uma fortuna pra trocar uma lâmpada.|-300','+|O gerente te deu um carro reserva de luxo.|+0 >2','-|Demorou 3 meses e você ficou sem carro.|-0 P'],
 ['+|O mecânico era um gênio e cobrou 1/10.|+0 >1','-|Arrumou mal e o carro pegou fogo na saída.|-500 <1','-|Perdeu a garantia por ter ido fora.|-200']);
SIT('alta','⛳','Golfe com o diretor','Seu diretor te chamou pra jogar golfe. Você nunca jogou.','Aceitar','Inventar desculpa',
 ['+|Deu uma tacada de sorte e fechou negócio.|+400 >2','-|Acertou o carrinho do diretor.|-200 <1','-|Perdeu a bolinha 7 vezes. Humilhante.|-0'],
 ['-|O diretor soube e deixou de te convidar.|-0 <1','+|Evitou o ridículo e ficou bem na fita.|+0 >1','-|O diretor promoveu o colega que topou jogar. Você ficou pra trás.|-100']);
SIT('alta','🍷','Leilão de vinhos','Num leilão chique, uma garrafa da safra de 1900 está à venda.','Dar o lance','Só observar',
 ['+|Levou a garrafa por metade do valor.|+300 >1','-|Descobriu que era falsa e perdeu a fortuna.|-500','-|Entrou em guerra de lances com um rival.|-300 <1'],
 ['+|O rival pagou caro e você achou graça.|+0 >1','-|O leiloeiro pediu doação como "cota de observação".|-80','+|Foi convidado pra um coquetel exclusivo.|+30 >1']);
SIT('alta','🏥','Check-up executivo','O médico recomenda "cuidar do estresse". Você tem uma agenda lotada.','Fazer terapia','Ignorar o conselho',
 ['+|A terapia te ajudou a delegar e a lucrar.|+150 >2','-|Descobriu 8 problemas que você nem sabia.|-100','-|A terapeuta é sua ex.|-0 <1'],
 ['!|Teve um piripaque no meio da reunião.|-200 P','+|Ficou ótimo e o médico elogiou sua saúde.|+0 >1','-|Foi multado pelo plano por falta de cuidado.|-80']);
SIT('alta','🛬','Voo executivo','O jatinho tá disponível pra uma viagem de última hora. Destino?','Ir pra Nova York','Ir pra Paris',
 ['+|Fechou um negócio que rendeu uma fortuna.|+500 >3','-|O voo foi cancelado e você ficou preso no aeroporto.|-0 P','-|Perdeu a mala com tudo dentro.|-300'],
 ['+|Encontrou um sócio no avião e fez negócio.|+300 >2','-|A conta do hotel chegou com número de telefone.|-400','-|Uma greve parou tudo e você voltou de ônibus.|-0 <2']);
SIT('alta','🎩','Jantar de gala','O evento beneficente cobra R$ 1.000 por pessoa. Você vai levar quem?','O cônjuge','O amante',
 ['+|Foi um sucesso e saíram na coluna social.|+100 >2','-|O cônjuge flertou com o garçom. Climão.|-0 <1','-|Brigaram e saíram antes do jantar.|-200'],
 ['-|A fofoca chegou ao cônjuge em 5 minutos.|-500 <3','+|Passou despercebido e foi uma noite ótima.|+0 >1','-|O amante pediu aumento de "carinho".|-300']);
SIT('alta','📈','Crash da bolsa','A bolsa caiu 6% hoje. Seu gerente liga em pânico.','Vender tudo','Manter as ações',
 ['-|Vendeu no fundo e a bolsa subiu no dia seguinte.|-500 <1','+|Escapou do pior e investiu no dólar.|+300 >1','-|Pagou taxa de corretagem altíssima.|-200'],
 ['+|A bolsa recuperou e você lucrou 10%.|+600 >2','-|A queda continuou e perdeu um terço do patrimônio.|-800','-|Seu gerente sumiu com o dinheiro.|-1000 <2']);
SIT('alta','🎨','Obra de arte','Um artista famoso quer te vender uma obra "que vai valorizar".','Comprar','Dispensar',
 ['-|Era falsificada. O artista foi preso.|-800','+|Valorizou 300% em um ano.|+800 >2','-|A obra foi roubada do seu cofre.|-500'],
 ['+|Poupou dinheiro e fez outro investimento.|+100 >1','-|O artista ficou ofendido e te difamou.|-0 <1','-|Descobriu que outro rico comprou e lucrou.|-0']);
SIT('alta','👑','Festa de debutante','A filha do sócio faz 15 anos. O tema é "Cinderela" e custa R$ 200 mil.','Presentear com joias','Dar um cheque',
 ['+|A família amou e te promoveu a padrinho.|+100 >1','-|A joia era do mesmo modelo de outra convidada.|-100 <1','-|Gastou uma pequena fortuna e ninguém agradeceu.|-300'],
 ['+|O sócio ficou emocionado e fechou um contrato novo.|+300 >2','-|A debutante achou "pouco" e fez bico.|-0','-|O cheque voltou sem fundos. Mico.|-100 <1']);
SIT('alta','🏠','Obra da cobertura','A reforma da cobertura saiu 3x mais cara. O arquiteto some.','Processar','Pagar e esquecer',
 ['+|Ganhou na justiça e recuperou tudo.|+500 >2','-|O processo durou 8 anos.|-300 P','-|O arquiteto contra-processou.|-400'],
 ['-|Pagou tudo e ainda faltam acabamentos.|-500','+|O arquiteto, envergonhado, deu desconto no próximo projeto.|+100 >1','-|A obra desabou parcialmente.|-800 <2']);
SIT('alta','🎰','Cassino em Búzios','Num fim de semana em Búzios, você passa em frente a um cassino clandestino.','Entrar e jogar','Ignorar',
 ['+|Ganhou na roleta e saiu com o triplo.|+800 >2','-|Perdeu o carro numa mão de pôquer.|-700','-|Foi a polícia que apareceu.|-300 P'],
 ['+|Ficou no hotel e ganhou um spa de brinde.|+0 >1','-|Descobriu que o dono era um rival.|-0 <1','-|Perdeu o jantar de negócios.|P']);
SIT('alta','🚁','Heliponto','Tá chovendo e o helicóptero não decola. Reunião importante em 20 minutos.','Esperar','Ir de carro',
 ['-|Perdeu a reunião e o contrato.|-400 P','+|O tempo abriu e voou direto.|+200 >2','-|O piloto cobrou "taxa de espera".|-150'],
 ['-|Pegou trânsito e chegou 1 hora atrasado.|-200 <2','+|Chegou a tempo e ainda ouviu elogios.|+100 >1','-|O motorista bateu num poste.|-300 P']);
SIT('alta','🎙️','Entrevista na TV','Uma emissora te convidou pra falar sobre seu negócio ao vivo.','Aceitar','Recusar',
 ['+|Foi um sucesso e a empresa dobrou de valor.|+600 >2','-|Falou uma bobagem e virou meme nacional.|-300 <1','-|O apresentador te humilhou ao vivo.|-0 <2'],
 ['+|Evitou o risco e ficou na surdina.|+0 >1','-|Um concorrente aceitou e roubou seu mercado.|-300','-|A emissora te processou por "falta de colaboração".|-100']);
SIT('alta','🍣','Rodízio de sushi','O restaurante da moda cobra R$ 400 por pessoa. Quem paga a conta?','Pagar tudo','Dividir por cabeça',
 ['+|O sócio se emocionou e te deu uma ação.|+100 >2','-|A conta veio com 10% de serviço e 20% de taxa.|-200','-|Todo mundo pediu o mais caro.|-500'],
 ['-|O sócio se ofendeu e ficou frio com você.|-0 <1','+|Todo mundo concordou e a noite foi ótima.|+0 >1','-|Descobriram que você tem mais dinheiro e ficaram pedindo.|-300']);
SIT('alta','🪙','Criptomoeda','Um amigo jura que "vai explodir". Você tem R$ 100 mil sobrando.','Investir','Recusar',
 ['+|Multiplicou por 5 em 3 meses.|+1000 >3','-|A moeda era golpe e o amigo sumiu.|-1000 <2','-|Perdeu a carteira digital.|-800'],
 ['+|Ficou de fora e comprou imóvel.|+200 >1','-|Viu o amigo ficar rico e teve um piripaque.|-0','-|A moeda cresceu e você nunca mais ouviu o fim da história.|-0 <1']);
SIT('alta','🍾','Réveillon em Copacabana','Camarote com vista pros fogos custa R$ 2.000. Mas tem um monte de gente.','Comprar camarote','Ficar na praia',
 ['+|Viu os fogos com champanhe à vontade.|+0 >2','-|O camarote lotou e não tinha lugar.|-200 <1','-|Um fogo caiu no seu cabelo.|-50 P'],
 ['-|A praia tava lotada e você não viu quase nada.|-0','+|Achou um lugar perfeito e conheceu gente interessante.|+50 >1','-|Foi assaltado por um bando de meninos.|-100']);
SIT('alta','👶','Escolha da escola','O filho precisa entrar numa escola chique. A mensalidade é R$ 15 mil.','Matricular','Procurar mais barata',
 ['+|O filho fez amizade com herdeiros e abriu portas.|+200 >2','-|Descobriu que a escola é cara e ruim.|-300','-|O filho foi expulso no primeiro mês.|-200 <1'],
 ['+|Achou uma ótima escola bem mais barata.|+400 >1','-|O filho ficou revoltado.|-0','-|O filho sofreu bullying e você pagou terapia.|-300']);
SIT('alta','🥂','Brinde com o sócio','Seu sócio quer brindar o fechamento do ano. Ele tá bêbado.','Brindar também','Evitar',
 ['+|Fecharam um contrato milionário na euforia.|+400 >2','-|Ele revelou um desvio de dinheiro.|-500 <2','-|Você aceitou um cheque sem pensar.|-300'],
 ['-|Ele te chamou de "traidor".|-0 <1','+|Ficou sóbrio e fechou um negócio melhor.|+200 >1','-|Ele quebrou a taça e cortou a mão.|-50']);
// ---------------------------------------------------------------- ALTO PADRÃO
SIT('alto','🏛️','Votação no Congresso','Hoje tem votação de um projeto que pode te render muito. Mas o relator tá pedindo "ajuda".','Pagar o relator','Negociar cargos',
 ['+|Aprovou e rendeu uma fortuna.|+800 >2','-|O relator gravou e vazou tudo.|-1000 <2','-|O relator pediu mais e mais.|-500'],
 ['+|Todos os aliados ganharam algo e votaram a favor.|+400 >1','-|Um aliado traiu na hora H.|-300 <1','-|O líder do partido exigiu comissão.|-200']);
SIT('alto','📺','Entrevista de campanha','O programa político te convidou pra um debate ao vivo.','Ir ao debate','Mandar um assessor',
 ['+|Brilhou e ganhou 5 pontos nas pesquisas.|+300 >2','-|Perdeu a calma e xingou o mediador.|-300 <2','-|O adversário te expôs com um vídeo antigo.|-500'],
 ['-|O assessor falou besteira e virou meme.|-200 <1','+|Evitou o confronto e economizou estresse.|+0 >1','-|Todo mundo achou que você tava com medo.|-0']);
SIT('alto','💼','Mala de dinheiro','Um empresário quer te entregar uma mala "de agradecimento".','Aceitar','Recusar',
 ['+|Tá com a mala e ninguém viu.|+600 >2','-|Era uma armadilha da Polícia Federal.|-1000 P','-|A mala tinha só jornal velho.|-0 <1'],
 ['+|Ficou limpo e subiu nas pesquisas.|+100 >1','-|O empresário virou inimigo e te difamou.|-300','-|Você devolveu e ele te denunciou.|-200']);
SIT('alto','🛩️','Viagem oficial','Uma viagem a Dubai "a trabalho" vai custar R$ 80 mil dos cofres públicos.','Ir de executiva','Ir de econômica',
 ['-|A imprensa descobriu e você virou notícia.|-400 <2','+|Fechou um acordo e voltou rico.|+600 >3','-|Perdeu o passaporte no aeroporto.|-100 P'],
 ['+|Ninguém notou e a viagem foi um sucesso.|+200 >2','-|O avião atrasou e você perdeu a reunião.|-0 <1','-|Você foi confundido com um turista comum.|-0']);
SIT('alto','⚖️','Julgamento no STJ','Um processo contra você chegou ao tribunal. O relator é desconhecido.','Contratar o melhor advogado','Fazer um acordo',
 ['+|O advogado achou prescrição e você se safou.|+500 >2','-|O advogado cobrou os olhos da cara e perdeu.|-800','-|Descobriu que o juiz é seu inimigo.|-300 <2'],
 ['+|Acordo rápido e discreto.|+0 >1','-|O acordo vazou e a imprensa te devorou.|-500 <1','-|O rival exigiu muito e você pagou.|-400']);
SIT('alto','🍽️','Jantar com empreiteiros','Um empresário te convida pra um jantar. "Só pra conversar".','Ir ao jantar','Recusar o convite',
 ['+|Saiu com um contrato novo e uma caixa de vinhos.|+700 >2','-|Tinha jornalista disfarçado na mesa.|-500 <2','-|Pagaram a conta e depois cobraram favor.|-300'],
 ['+|Ficou fora do escândalo que estourou no dia seguinte.|+0 >2','-|O empresário ficou ofendido e te deixou de lado.|-0 <1','-|Foi chamado de "arrogante" em um colunista.|-100']);
SIT('alto','📰','Escândalo no jornal','Um repórter descobriu algo sobre você. Vai publicar amanhã.','Pagar pelo silêncio','Negar tudo',
 ['+|O repórter aceitou o "agrado" e esqueceu o assunto.|+0 >1','-|O repórter gravou tudo e publicou assim mesmo.|-500 <2','-|Outro repórter descobriu e piorou tudo.|-300'],
 ['-|Provas apareceram e você virou piada.|-600 <2','+|Seu advogado destruiu a matéria.|+300 >2','-|O Ministério Público abriu investigação.|-400 P']);
SIT('alto','🏝️','Ilha particular','Um empresário quer te vender uma ilha por "preço de amigo".','Comprar','Negociar um desconto',
 ['+|A ilha valorizou e você virou bilionário.|+1000 >3','-|A ilha era área de preservação. Multa.|-600','-|Um terremoto afundou metade dela.|-500 <2'],
 ['+|O empresário aceitou e fez um churrasco pra comemorar.|+300 >2','-|Ele ficou ofendido e vendeu pra outro.|-0 <1','-|Descobriu que a ilha nem existia.|-400']);
SIT('alto','🚢','Emenda parlamentar','Você pode destinar R$ 10 milhões pra uma obra. Qual empresa vai levar?','A do amigo','A mais barata',
 ['+|O amigo agradeceu com um presente generoso.|+500 >1','-|A obra nunca foi feita e o MP te chamou.|-700 <2','-|O amigo foi pego e te entregou.|-1000'],
 ['+|A obra saiu perfeita e você virou herói.|+200 >2','-|A empresa quebrou no meio da obra.|-300','-|Os amigos ficaram ofendidos e te isolaram.|-100 <1']);
SIT('alto','🗳️','Eleição apertada','A eleição tá empatada. Faltam 2 dias e você precisa de votos.','Fazer comício','Distribuir brindes',
 ['+|O comício lotou e você virou favorito.|+500 >3','-|Um adversário infiltrou e gritou "corrupto".|-400 <1','-|Choveu e ninguém foi.|-100'],
 ['+|Os brindes viraram votos.|+300 >2','-|A justiça eleitoral multou a campanha.|-500','-|Um brinde tinha o nome errado.|-0 <1']);
// ---------------------------------------------------------------- CRIME ORGANIZADO (satírico)
SIT('crime','📻','Rádio chiando','O radinho avisou: "tem movimento estranho na entrada do morro".','Mandar reforço','Ir ver pessoalmente',
 ['+|Era só um caminhão de gás perdido. Falso alarme!|+0 >1','-|O reforço bateu a moto e causou alvoroço.|-100 <1','-|Era a polícia mesmo e você perdeu o ponto.|-300 P'],
 ['-|O "movimento estranho" era sua mãe com sacolas do mercado.|-0 <1','+|Descobriu uma festa e ganhou salgadinho.|+0 >2','!|Tropeçou na viela e rolou escada abaixo.|-50 <2']);
SIT('crime','🎶','Baile funk','O baile tá lotado. O DJ pede aumento de cachê no meio da festa.','Pagar o DJ','Chamar outro DJ',
 ['+|Ele tocou até o dia raiar e a festa virou lenda.|+400 >2','-|Pagou e ele sumiu com o dinheiro.|-300','-|O DJ bêbado errou a música.|-100 <1'],
 ['-|O outro DJ só tocava pagode. A pista esvaziou.|-200','+|O novo DJ era uma revelação e viralizou.|+200 >2','-|Os dois DJs brigaram no palco.|-0 P']);
SIT('crime','🏍️','Moto roubada','Você viu uma moto idêntica à sua estacionada na rua. Parece sua.','Pegar de volta','Ignorar',
 ['+|Era a sua! O ladrão tinha deixado a chave.|+0 >2','-|Era de outro "do ramo" e virou briga.|-300 <2','-|Era armadilha da polícia.|-500 P'],
 ['-|No dia seguinte a moto sumiu de verdade.|-200','+|Descobriu que a sua tava na oficina.|+0 >1','-|O ladrão te viu e te achou fraco.|-0 <1']);
SIT('crime','🍗','Frango do domingo','A vó fez frango pra toda a boca. Mas faltam 3 pessoas.','Chamar os rivais','Comer só entre nós',
 ['+|A paz durou até a sobremesa. Ótimo almoço!|+0 >2','-|Uma discussão sobre futebol virou briga.|-100 <1','-|Os rivais comeram tudo.|-80'],
 ['+|O frango rendeu e sobrou pra levar.|+0 >1','-|A vó brigou porque faltou gente.|-0 <1','-|Um vizinho invadiu e comeu a coxa.|-30']);
SIT('crime','📞','Telefone grampeado','Você suspeita que seu celular tá grampeado. Mas tem negócio pendente.','Trocar de chip','Falar em código',
 ['+|Trocou a tempo e a polícia ficou no vácuo.|+0 >2','-|O chip novo veio com erro e perdeu contatos.|-200','-|A operadora cobrou taxa absurda.|-80'],
 ['-|O código era muito óbvio e a PF entendeu.|-500 <2','+|A conversa virou piada interna e ninguém desconfiou.|+0 >1','-|Seu primo falou "alô" duas vezes.|-0 <1']);
SIT('crime','🏚️','Casa de segurança','Você precisa de um esconderijo. A casa da tia é a única opção.','Pedir pra tia','Dormir no carro',
 ['+|A tia aceitou e fez bolinho de aipim.|+0 >1','-|A tia pediu R$ 500 de "aluguel de segredo".|-500','-|A tia contou pra prima, que contou pro bairro.|-0 <2'],
 ['-|Passou frio e dormiu mal.|-0 P','+|Achou um lugar tranquilo.|>1','-|A polícia multou o carro por parada irregular.|-100']);
SIT('crime','🧾','Contabilidade paralela','O contador sumiu com o caderninho. Faltam R$ 80 mil nas contas.','Procurar o contador','Refazer a conta',
 ['+|Achou o contador numa praia, ele devolveu tudo.|+300 >2','-|O contador virou delator.|-400 <2','-|Perdeu 3 dias procurando.|P'],
 ['-|A conta refeita revelou um prejuízo enorme.|-300','+|Descobriu que era só um erro de digitação.|+80 >1','-|Um sócio aproveitou e sumiu com o resto.|-500']);
SIT('crime','👟','Sapato novo','Você ganhou um sapato caríssimo. Mas ele aperta.','Usar mesmo assim','Vender',
 ['!|Ficou com bolhas e andou manco o dia todo.|-0 <1','+|O sapato amaciou e virou a sensação do baile.|+0 >2','-|Alguém pisou e deixou marca eterna.|-30'],
 ['+|Vendeu por um bom dinheiro e ainda ganhou um brinde.|+300 >1','-|O comprador era policial disfarçado.|-300 P','-|O sapato era falsificado.|-0']);
SIT('crime','📱','Rede social do morro','Seu perfil bombou com uma foto na laje. Vários curtiram.','Apagar a foto','Aproveitar a fama',
 ['+|A foto sumiu antes de alguém notar.|+0 >1','-|Já tinha print rodando em todo lugar.|-100 <1','-|A polícia já tinha visto.|-300 P'],
 ['+|Ganhou 100 mil seguidores e uma proposta de publi.|+300 >2','-|A polícia usou a foto como prova.|-500 <2','-|Ganhou haters e perdeu a paz.|-50 <1']);
SIT('crime','🎂','Aniversário do chefão','Hoje é aniversário do chefão. Você precisa dar um presente à altura.','Dar uma joia','Dar um cachorro',
 ['+|O chefe amou e te promoveu.|+500 >2','-|A joia era falsa e ele percebeu.|-300 <2','-|Ele já tinha uma igual.|-100'],
 ['+|O cachorro virou o mascote do morro.|+200 >1','-|O cachorro mordeu o chefe.|-300 <2','-|O chefe é alérgico.|-100 P']);
SIT('crime','🍺','Cerveja na laje','Tem rodada de cerveja e a conta é de quem perder no dominó.','Jogar','Fingir que passou mal',
 ['+|Ganhou e ainda pegou o dinheiro dos perdedores.|+200 >2','-|Perdeu e pagou toda a conta.|-300','-|Foi acusado de roubar nas pedras.|-100 <1'],
 ['-|Descobriram a mentira e te zoaram por meses.|-0 <2','+|Dormiu tranquilo e acordou rico de paz.|+0 >1','-|Chamaram uma ambulância de brincadeira e você pagou.|-100']);
SIT('crime','🛑','Blitz de surpresa','Tem uma blitz à frente. Você tá com algo no carro.','Desviar por outro caminho','Passar na cara de pau',
 ['+|Escapou por uma viela e o guarda nem notou.|+0 >2','-|Tinha outra blitz no outro caminho.|-300 P','-|Furou um pneu na pressa.|-100 <1'],
 ['+|O guarda era seu primo e liberou na hora.|+0 >2','-|Foi parado e levou multa.|-300 P','-|Revistaram o carro inteiro.|-500 <2']);
SIT('crime','🧳','Viagem a Foz do Iguaçu','Você precisa viajar a negócios. Como ir?','De ônibus','De avião',
 ['+|A viagem foi tranquila e você dormiu o tempo todo.|+0 >2','-|O ônibus quebrou na estrada.|-0 P','-|Foi parado na fronteira.|-300 <2'],
 ['+|Voou de classe econômica e chegou rápido.|+0 >3','-|Perdeu o voo e ficou no aeroporto 12 horas.|-100 P','-|Foi barrado na segurança.|-500 <2']);
SIT('crime','🔦','Falta de luz no morro','A luz caiu no morro inteiro. Reclamam do seu "serviço".','Resolver a luz','Aproveitar a escuridão',
 ['+|Consertou o gato e virou herói local.|+100 >1','-|Levou choque e ficou tonto.|-0 P','-|Piorou e o morro ficou 3 dias no escuro.|-200 <1'],
 ['+|Todo mundo foi pra laje ver estrelas. Bonito.|+0 >1','-|Houve um tumulto no escuro.|-100 <1','-|Alguém roubou sua moto.|-300']);
SIT('crime','📜','Convocação do juiz','Você foi chamado pra depor num fórum. Comparecer?','Ir com advogado','Não ir',
 ['+|O advogado te livrou em 10 minutos.|+0 >2','-|O advogado cobrou caro e não resolveu.|-300','-|O juiz era durão e te interrogou por horas.|-0 P'],
 ['-|Mandaram te buscar. Humilhação pública.|-200 <2','+|Esqueceram de você. Sorte absurda.|+0 >2','-|Virou foragido e perdeu o sossego.|-500 P']);
// ---------------------------------------------------------------- LEI E ORDEM
SIT('legal','🚓','Perseguição a suspeito','Um carro fugiu da blitz e você tá na viatura. Perseguir ou esperar reforço?','Perseguir','Esperar reforço',
 ['+|Alcançou o carro e salvou o dia.|+200 >3','!|Bateu a viatura numa esquina.|-300 <2','-|O suspeito escapou por uma viela.|-0 <1'],
 ['-|O carro fugiu e você tomou bronca.|-0 P','+|O reforço chegou e prendeu o cara.|+100 >2','-|Ficou sem gasolina.|-50 <1']);
SIT('legal','🍩','Rosquinha da delegacia','O delegado traz rosquinhas e todo mundo disputa.','Pegar a última','Deixar pros outros',
 ['+|Era de chocolate e você virou herói.|+0 >1','-|O delegado queria e te encarou.|-0 <1','-|A rosquinha tava velha.|-0 P'],
 ['+|O delegado percebeu sua nobreza e te elogiou.|+100 >1','-|Faltou rosquinha e você ficou com fome.|-0','-|Os colegas riram da sua "educação".|-0']);
SIT('legal','🧑‍⚖️','Audiência no tribunal','Você foi chamado como testemunha. O advogado de defesa te encara.','Contar a verdade','Dar um jeitinho',
 ['+|Seu depoimento foi decisivo e te elogiaram.|+200 >2','-|O advogado te destruiu em 5 minutos.|-0 <2','-|Descobriu que o réu é seu primo.|-100'],
 ['-|Foi pego mentindo. Corregedoria na porta.|-500 P','+|O juiz acreditou e você se safou.|+0 >1','-|O advogado gravou sua fala.|-300 <1']);
SIT('legal','🏃','Treino físico','O treinamento da corporação é hoje. 10 km em 50 minutos.','Dar o máximo','Poupar energia',
 ['+|Bateu o recorde e ganhou uma medalha.|+0 >3','!|Torceu o tornozelo no quilômetro 8.|-0 <2','-|Vomitou na frente do comandante.|-0 <1'],
 ['-|Ficou em último e foi motivo de piada.|-0 <1','+|Chegou inteiro e dormiu bem.|+0 >1','-|O comandante notou e te deu corrida extra.|-0 P']);
SIT('legal','🧯','Ocorrência de vizinhos','Vizinhos brigando por causa de um cachorro. Ambos te chamam de "doutor".','Mediar','Multar os dois',
 ['+|Resolveu na conversa e ganhou um bolo.|+30 >1','-|Os dois te atacaram.|-0 <1','-|O cachorro mordeu seu coturno.|-50'],
 ['-|Ficaram furiosos e processaram você.|-200 <1','+|Pagaram a multa e agradeceram.|+0 >1','-|O cachorro fugiu e você teve que procurar.|P']);
SIT('legal','📝','Burocracia infinita','Uma ocorrência exige 17 formulários, 4 carimbos e um café.','Fazer tudo certinho','Dar um jeitinho',
 ['+|Terminou rápido e o chefe elogiou.|+0 >2','-|Errou um carimbo e voltou ao início.|-0 P','-|O café derramou nos papéis.|-50 <1'],
 ['-|Descobriram a gambiarra e te deram advertência.|-200 <1','+|Funcionou e economizou 2 horas.|+0 >2','-|O chefe suspeitou e fez auditoria.|-100 P']);
SIT('legal','🎖️','Condecoração','Uma cerimônia vai te homenagear por serviços prestados.','Ir de farda','Ir à paisana',
 ['+|Recebeu medalha e um aumento.|+300 >2','-|A farda rasgou na hora da foto.|-50','-|Esqueceu o discurso.|-0 <1'],
 ['+|Passou despercebido e foi tranquilo.|+0 >1','-|Foi confundido com um garçom.|-0','-|O comandante achou desrespeito.|-100 <1']);
SIT('legal','🚨','Alarme falso','Um alarme disparou numa loja às 3h. Provavelmente é um gato.','Investigar','Ignorar',
 ['+|Era mesmo um gato. Ganhou lanche de consolação.|+10 >1','!|Tinha mesmo um ladrão e você levou uma pancada.|-100 <2','-|O dono da loja reclamou da demora.|-0'],
 ['-|Era um assalto de verdade.|-200 <2','+|Dormiu mais 2 horas e foi feliz.|+0 >1','-|O chefe viu e você levou bronca.|-100 P']);
SIT('legal','🥾','Coturno novo','O coturno novo aperta mas é o mais bonito. Usar no plantão?','Usar mesmo assim','Voltar ao velho',
 ['-|Encheu o pé de bolhas e coxeou o plantão inteiro.|-0 P','+|Amaciou e virou o preferido.|+0 >2','-|O coturno rasgou na primeira perseguição.|-80'],
 ['+|O velho tá confortável e não tem do que reclamar.|+0 >1','-|O comandante notou a sola furada.|-60 <1','-|Cheiro insuportável na viatura.|-0']);
SIT('legal','📞','Telefone de plantão','Tocou o telefone às 4h. "Policial, tem um barulho estranho no prédio".','Atender','Ignorar',
 ['+|Era um morcego. Ficou famoso no prédio.|+30 >1','-|Era um trote. Perdeu uma hora.|-0 P','-|Era o chefe pedindo pizza.|-0 <1'],
 ['-|Era mesmo uma emergência.|-300 <2','+|Foi dormir e acordou descansado.|+0 >1','-|O chefe viu o relatório e te deu advertência.|-100']);
// ---------------------------------------------------------------- ESTUDANTE
SIT('estudante','🍝','Bandejão lotado','A fila do bandejão dá volta no campus. Tem prova em 20 minutos.','Furar a fila','Pular o almoço',
 ['+|Furou e comeu o prato feito mais gostoso da vida.|+0 >2','-|Foi denunciado e ficou no fim da fila.|-0 P','-|A comida acabou.|-0 <1'],
 ['+|Fez prova de estômago vazio e mandou bem.|+0 >2','-|Desmaiou de fome na prova.|-0 P','-|Comeu um salgadinho e passou mal.|-10']);
SIT('estudante','📓','Trabalho em grupo','O grupo todo some e você faz tudo sozinho. Entregar assim ou delatar?','Fazer sozinho','Delatar os preguiçosos',
 ['+|O professor elogiou e deu nota máxima.|+0 >2','-|Ficou até 4h da manhã e dormiu na prova.|-0 P','-|Os colegas tiraram a mesma nota.|-0'],
 ['+|O professor reconheceu e te deu nota extra.|+0 >1','-|Os colegas te perseguiram o semestre todo.|-0 <2','-|O professor disse "resolvam entre vocês".|-0']);
SIT('estudante','🎸','Banda da faculdade','A banda te chamou pra tocar no festival. Mas você só sabe 3 acordes.','Aceitar','Recusar',
 ['+|O público amou o estilo "minimalista".|+100 >2','-|Errou o solo e foi vaiado.|-0 <2','-|Quebrou a guitarra do amigo.|-200'],
 ['-|A banda virou sucesso sem você.|-0 <1','+|Evitou o ridículo e tocou no churrasco.|+0 >1','-|O baterista ficou chateado.|-0']);
SIT('estudante','🧪','Aula de química','O professor pede um experimento. O seu tem tudo pra explodir.','Fazer o experimento','Fingir que errou',
 ['+|Deu certo e o professor te elogiou.|+0 >2','!|Explodiu e queimou a sobrancelha.|-50 <2','-|Sujou o laboratório e levou advertência.|-50'],
 ['-|O professor percebeu e te deu um zero.|-0 <1','+|Passou batido e foi pro bar.|+0 >1','-|Foi mandado limpar o laboratório.|P']);
SIT('estudante','🏳️','Passeata e bandeira','Você foi pra passeata e levou uma bandeira. Agora tá com um cartaz enorme.','Levantar bem alto','Esconder atrás do poste',
 ['+|A foto viralizou e saiu no jornal.|+100 >2','-|Foi tirado do lugar por seguranças.|-0 <1','-|O vento levou a bandeira.|-30'],
 ['+|Ficou seguro e viu tudo.|+0 >1','-|Um fotógrafo te flagrou escondido.|-0 <1','-|A bandeira pegou fogo no poste.|-50']);
SIT('estudante','🍕','Pizza da república','A república tá sem comida e só tem R$ 20 pra todo mundo.','Comprar pizza','Fazer macarrão',
 ['-|A pizza foi 1 fatia por cabeça. Briga.|-20 <1','+|Achou promoção de 2 por 1.|+0 >1','-|O entregador sumiu.|-20'],
 ['+|O macarrão ficou ótimo e sobrou.|+0 >2','-|Queimou a panela e o macarrão.|-30','-|Faltou molho e virou drama.|-0 <1']);
SIT('estudante','🏫','Greve na universidade','A universidade entrou em greve. Aulas suspensas.','Aproveitar e viajar','Ficar estudando',
 ['+|Foi à praia e o semestre ficou ótimo.|+0 >2','-|A greve acabou e você perdeu o prazo.|-0 P','-|Gastou tudo na viagem.|-100'],
 ['+|Aproveitou pra adiantar o TCC.|+50 >2','-|Ficou entediado e comeu demais.|-0','-|Estudou o conteúdo errado.|-0 <1']);
SIT('estudante','🧑‍🏫','Professor carrasco','O professor mais temido te escolheu pra apresentar o seminário.','Preparar a apresentação','Inventar um atestado',
 ['+|Apresentou bem e ganhou 10.|+100 >2','-|Gaguejou e o professor te humilhou.|-0 <2','-|O slide travou.|-0 P'],
 ['-|O professor pediu o atestado original.|-100 <1','+|Funcionou e ganhou mais 1 semana.|+0 >2','-|Descobriram e você levou advertência.|-0 P']);
SIT('estudante','🍺','Calourada','A calourada é hoje. O "trote" envolve beber algo suspeito.','Aceitar o trote','Recusar',
 ['-|Ficou 2 dias de ressaca.|-0 P','+|Virou o calouro mais popular.|+0 >2','!|Passou mal e foi pro hospital.|-50 <2'],
 ['+|Os veteranos respeitaram e te deram uma cerveja.|+0 >1','-|Virou alvo de brincadeiras por semanas.|-0 <1','-|Foi chamado de "chato".|-0']);
SIT('estudante','🛴','Patinete elétrico','Você alugou um patinete. A bateria tá em 2%.','Acelerar até o fim','Voltar andando',
 ['+|Chegou na hora e a bateria morreu na porta.|+0 >2','!|A bateria acabou numa ladeira e você caiu.|-60 <2','-|Cobraram multa de R$ 50 por abandono.|-50'],
 ['-|Cansou e chegou atrasado.|-0 P','+|Passou numa lanchonete e comeu um X-tudo.|+0 >1','-|Perdeu o patinete e pagou R$ 200.|-200']);
// ---------------------------------------------------------------- POR IDADE
SIT('*','🪑','Cadeira na fila','Você tá na fila do banco e uma cadeira vagou. Tem uma senhora de 80 anos ao lado.','Sentar rápido','Ceder o lugar',
 ['-|A senhora te deu uma bolsada digna de lenda.|-0 <1','+|Ela nem ligou e dividiu um doce.|+0 >1','-|O segurança te mandou levantar.|-0'],
 ['+|Ela te abençoou e te deu R$ 20 "pro lanche".|+20 >2','+|O gerente viu e te atendeu primeiro.|+0 >2','-|Ficou em pé por 3 horas.|-0 P'],'<=45');
SIT('*','🧓','Bingo da igreja','A turma da terceira idade te chamou pro bingo. O prêmio é uma cesta básica.','Jogar','Recusar educadamente',
 ['+|Ganhou o bingo e a cesta básica!|+80 >2','-|As tiazinhas te acusaram de roubo.|-0 <1','-|Perdeu e pagou a rodada de café.|-30'],
 ['-|Ficaram ofendidas e te excluíram do grupo.|-0 <1','+|Dormiu e acordou de bom humor.|+0 >1','-|Descobriu que o prêmio era um carro e ficou arrasado.|-0'],'30+');
SIT('*','🩺','Consulta de rotina','Um amigo te lembra que você nunca fez um check-up completo.','Marcar o exame','Deixar pra depois',
 ['+|Tudo certo! O médico te elogiou.|+0 >2','!|Descobriu um colesterol de 400. Dieta urgente.|-100 P','-|Pagou R$ 500 só pela consulta.|-500'],
 ['!|Teve uma queda de pressão no meio da rua.|-150 P','+|Passou mais 1 ano sem problemas.|+0 >1','-|Descobriu um dente podre.|-200'],'45+');
SIT('*','🌅','Caminhada matinal','Aquela dor nas costas voltou. Você precisa se exercitar.','Fazer hidroginástica','Alongar em casa',
 ['+|Conheceu um grupo animado e fez amizades.|+0 >2','!|Torceu o pé na piscina.|-60 <1','-|O professor cobrou o triplo.|-120'],
 ['!|Distendeu o músculo.|-80 <1','+|Voltou jovem e disposto.|+0 >2','-|Gastou R$ 300 num colchão ortopédico.|-300'],'55+');
SIT('*','🕺','Baile da saudade','A turma te chamou pra um baile saudosista. Vai de terno ou de roupa casual?','Ir de terno','Ir à vontade',
 ['+|Ganhou o prêmio de "mais elegante" e uma garrafa de vinho.|+50 >2','-|O terno estourou na hora da dança.|-80','-|Derramaram vinho no terno.|-100'],
 ['+|Dançou o baile todo e conheceu uma pessoa especial.|+0 >2','!|Torceu o joelho tentando acompanhar os jovens.|-60 <2','-|Ninguém te notou.|-0'],'50+');
SIT('*','🎮','Campeonato de videogame','O sobrinho te chamou pra um torneio. O prêmio é R$ 300.','Jogar','Ficar de plateia',
 ['+|Ganhou o torneio e virou lenda.|+300 >3','-|Foi humilhado por uma criança de 10 anos.|-0 <2','-|Quebrou o controle.|-80'],
 ['+|Torcendo, virou o "técnico" do sobrinho e ganhou parte do prêmio.|+100 >1','-|Gritou demais e levou advertência.|-0','-|Perdeu a voz.|-0 P'],'<=30');
SIT('*','🎓','Formatura','A formatura vai custar R$ 5 mil. A família quer fazer festa.','Pagar a festa','Fazer uma festinha caseira',
 ['+|Todos amaram e te deram presentes.|+200 >2','-|O buffet cobrou extra por "taxa de alegria".|-500','-|A banda não apareceu.|-300 <1'],
 ['+|Foi um churrasco inesquecível e barato.|+50 >2','-|Choveu e ninguém foi.|-0 <1','-|Os convidados reclamaram.|-100'],'<=30');
SIT('*','💍','Pedido de casamento','Você vai pedir em casamento. Prefere um jantar romântico ou um flash mob?','Jantar romântico','Flash mob',
 ['+|A resposta foi "sim". Todos choraram.|+0 >3','-|O restaurante cobrou R$ 800 e a resposta foi "preciso pensar".|-800 <1','-|O garçom derrubou o anel na sopa.|-300'],
 ['+|Deu tudo certo e viralizou.|+100 >3','-|Ninguém dançou e todo mundo riu.|-0 <2','-|O flash mob invadiu o evento errado.|-100 <1'],'<=40');
// ---------------------------------------------------------------- ABSURDAS (exageradas, qualquer um)
SIT('*','🐊','Jacaré no Arpoador','Um jacaré saiu do mar e tá tomando sol. Ninguém sabe se ele é manso.','Tirar uma selfie','Fugir',
 ['+|A selfie viralizou: "Jacaré e Eu". 1 milhão de views.|+300 >3','!|O jacaré mordeu seu chinelo. Quase seu pé.|-100 <2','-|Foi multado por "invasão de espaço do jacaré".|-200'],
 ['-|Correu e pisou num cocô de cachorro.|-0 <1','+|Escapou e ganhou uma caipirinha de herói.|+30 >1','!|Correu tanto que caiu.|-40 <1']);
SIT('*','🦜','Papagaio fofoqueiro','Um papagaio no ponto de ônibus repete tudo o que você falou ontem.','Calar o papagaio','Comprar o papagaio',
 ['-|Ele gritou seus segredos pra rua inteira.|-0 <2','+|Ele se calou por medo e te obedeceu.|+0 >1','-|O dono ficou ofendido e te xingou.|-0'],
 ['+|Virou seu parceiro e rende uma fortuna no TikTok.|+300 >2','-|Ele só sabia xingar e te botou em encrenca.|-100','-|Pagou R$ 500 e ele voou embora na semana seguinte.|-500']);
SIT('*','🦎','Capivara na Lagoa','Uma capivara atravessa a ciclovia sem a menor pressa. Todo mundo para.','Esperar a capivara','Passar pelo lado',
 ['+|A capivara agradeceu e te deu um olhar de gratidão.|+0 >2','-|Ficou 20 minutos parado e perdeu o horário.|-0 P','-|Uma turma de capivaras apareceu. 40 minutos de espera.|-0 <1'],
 ['!|A capivara era mais forte do que parecia.|-100 <2','-|A bicicleta quebrou.|-150','-|Foi acusado de crime ambiental.|-300']);
SIT('*','🌴','Coco na cabeça','Um coco caiu do coqueiro. Passou raspando. O vendedor grita: "é de graça!"','Aceitar o coco','Reclamar do risco',
 ['+|O coco tava delicioso e geladinho.|+0 >1','!|Outro coco caiu e acertou seu ombro.|-30 <1','-|O vendedor cobrou R$ 20 do "coco premium".|-20'],
 ['+|A prefeitura te deu R$ 100 de indenização.|+100 >1','-|Ninguém ouviu e você virou meme.|-0 <1','-|O vendedor te mandou calar.|-0']);
SIT('*','💃','Rei Momo','Você foi eleito Rei Momo do bloco do bairro por engano.','Aceitar a coroa','Fugir',
 ['+|Virou celebridade local e ganhou chope vitalício.|+100 >3','-|A fantasia era 3 tamanhos menor e rasgou.|-80 <1','-|Ficou famoso pelo motivo errado.|-0 <2'],
 ['-|A bateria te alcançou e te arrastou de volta.|-0 <1','+|Escapou e comeu pastel em paz.|+0 >1','-|Foi cobrado por "desistência de coroa".|-100']);
SIT('*','🧙','Vidente na praia','Uma vidente jura que vai mudar sua vida por R$ 20.','Pagar e ouvir','Recusar',
 ['+|Ela previu um prêmio e você ganhou R$ 50 no jogo do bicho.|+50 >2','-|Ela previu "dinheiro" e te mandou doar.|-20','-|Ela te rogou praga porque você riu.|-0 <2'],
 ['-|Ela te amaldiçoou e você tropeçou no coco.|-0 <1','+|Ela desistiu e te desejou sorte.|+0 >1','-|Todo mundo riu quando ela te chamou de "tolo".|-0']);
SIT('*','🚇','Bêbado no metrô','Um homem dorme no banco do metrô, roncando alto. Parece até um trator.','Acordar o homem','Deixar dormir',
 ['-|Ele acordou irritado e te xingou.|-0 <1','+|Ele agradeceu e te pagou um café.|+20 >1','-|Ele vomitou em você.|-60 <2'],
 ['+|Ele acordou na estação certa e te agradeceu.|+0 >1','-|Ele roncou tão alto que o metrô parou.|-0 P','-|Sentou do lado e também cochilou. Perdeu o ponto.|-0 <1']);
SIT('*','🍬','Bala no ônibus','Um vendedor passa pelo ônibus gritando: "É bala, é chiclete, é o que você precisar!" Ele te encara.','Comprar a bala','Fingir que dorme',
 ['+|A bala era de chocolate. Maravilha!|+0 >1','-|A bala era de pimenta. Chorou por 5 minutos.|-0 P','-|Ele cobrou R$ 5 mesmo assim.|-5'],
 ['-|Ele te acordou com um grito de "BALA!".|-0 <1','+|Ele passou direto e você dormiu em paz.|+0 >1','-|Perdeu seu ponto dormindo.|P']);
SIT('*','🕯️','Oferenda na esquina','Tem uma oferenda na esquina da sua rua. Você precisa passar por ali.','Pular a oferenda','Desviar pela calçada',
 ['-|Pisou numa vela e um senhor te xingou de longe.|-0 <1','+|Pulou perfeitamente e ganhou respeito.|+0 >1','-|Caiu na farofa.|-20'],
 ['+|Passou ileso e ainda achou uma moeda.|+10 >1','-|Foi atropelado por uma bicicleta.|-30 <1','-|Desviou tanto que se perdeu.|-0 P']);
SIT('*','🥁','Bateria de escola','Você tá perto do ensaio da escola de samba. A bateria chama pra ser ritmista.','Entrar na bateria','Só olhar',
 ['+|Mandou bem e te chamaram pra desfilar.|+100 >3','-|Errou o ritmo e atrapalhou todo mundo.|-0 <2','-|Quebrou uma baqueta e pagou o prejuízo.|-50'],
 ['+|Curtiu o ensaio e ganhou uma cerveja.|+10 >1','-|Foi atropelado por um carro alegórico.|-100 <2','-|O ensaio durou 5 horas e você perdeu o jantar.|P']);
SIT('*','🔥','Churrasqueira na laje','Alguém acendeu uma churrasqueira com uma lata de tinta. Cheiro estranho.','Avisar o dono','Participar',
 ['+|O dono agradeceu e te deu uma picanha.|+50 >2','-|O dono se ofendeu e te expulsou.|-0 <2','-|O fogo se espalhou e você tentou apagar.|-100'],
 ['+|A carne ficou ótima (tinta é detalhe).|+0 >1','!|Passou mal depois de comer.|-80 P','-|A churrasqueira explodiu.|-200 <2']);
SIT('*','🚨','Dia de blitz da lei seca','A Lei Seca montou uma blitz na saída do bar. Você tomou uns dois chopes.','Passar de cara limpa','Mudar de caminho',
 ['+|Passou no teste do bafômetro por pouco.|+0 >2','-|Falhou e levou uma multa pesadíssima.|-300 P','-|O policial implicou com seu jeito de falar.|-0 <1'],
 ['+|Desviou e chegou em casa.|+0 >1','-|Tinha outra blitz no outro caminho.|-300 P','-|Pegou um engarrafamento e dormiu no carro.|-0']);
SIT('*','🍍','Abacaxi na praia','Um vendedor oferece abacaxi: "doce igual a minha ex". Você tá com fome.','Comprar','Recusar',
 ['+|O abacaxi era doce de verdade.|+0 >1','-|Era azedo igual a ex.|-10','-|O vendedor cobrou o dobro.|-20'],
 ['+|Achou um vendedor melhor logo à frente.|+0 >1','-|O vendedor te xingou de "mão de vaca".|-0 <1','-|Ficou com fome e comeu areia.|-0']);
SIT('*','📸','Fotógrafo de praia','Um fotógrafo tira fotos de turistas e promete "entregar em 5 minutos".','Posar','Esconder o rosto',
 ['-|A foto saiu horrorosa e custou R$ 30.|-30','+|A foto ficou ótima e você virou capa de cartão postal.|+50 >2','-|Ele sumiu com seu dinheiro.|-30'],
 ['+|Ficou no anonimato e foi feliz.|+0 >1','-|O fotógrafo gritou "ei, você aí!" e te constrangeu.|-0 <1','-|A foto saiu com seu dedo no nariz.|-0']);
SIT('*','🐀','Bicho na rua','Um rato gigante cruza a rua com um pastel na boca. Ninguém acredita.','Gravar o rato','Tentar pegar o pastel',
 ['+|O vídeo viralizou e ganhou milhões de views.|+200 >2','-|O rato te olhou e você caiu de susto.|-0 <1','-|O rato revidou.|-30'],
 ['+|Pegou o pastel e comeu. Pastel de rato é pastel.|+0 >1','!|O rato mordeu seu dedo.|-50 P','-|Passou mal depois.|-0 P']);
SIT('*','🎫','Rifa do bairro','A tia do bairro vende rifa: "1 real e você pode ganhar um carro!"','Comprar 10 rifas','Comprar só 1',
 ['+|Ganhou o carro! (Era um Fusca 74.)|+300 >2','-|Perdeu e ainda levou bronca da tia.|-10','-|Descobriu que a rifa era fraude.|-10'],
 ['+|Ganhou um liquidificador usado.|+30 >1','-|Nada. A rifa era de uma tia só.|-1','-|A rifa foi cancelada.|-0 <1']);
SIT('*','🏖️','Praia de nudismo','Você se perdeu na praia errada. Há pessoas sem roupa por todo lado.','Ficar e fingir naturalidade','Fugir',
 ['+|Todo mundo foi simpático e você fez amigos.|+0 >2','-|Foi convidado pra jogar vôlei. Constrangimento total.|-0 <2','-|Sua roupa foi confundida com uma toalha.|-30'],
 ['-|Tropeçou em uma toalha e caiu.|-0 <1','+|Voltou rápido e tomou um suco.|+0 >1','-|Um fotógrafo registrou o desespero.|-0']);
SIT('*','🐓','Galo da madrugada','Um galo canta às 3h da manhã na sua rua. Ninguém sabe de onde vem.','Procurar o galo','Colocar tampão',
 ['+|Achou o galo e adotou. Virou sua mascote.|+0 >2','-|O dono do galo apareceu e te xingou.|-0 <1','-|O galo te bicou.|-40'],
 ['-|Passou a noite sem dormir mesmo assim.|-0 P','+|O tampão funcionou e você dormiu como um bebê.|+0 >1','-|O tampão sumiu no travesseiro.|-0']);
SIT('*','🚲','Roubo de bicicleta','Você deixou a bike presa na rua e voltou: só sobrou o cadeado.','Procurar a bike','Chamar a polícia',
 ['+|Achou a bike abandonada na esquina.|+0 >2','-|Perdeu o dia procurando.|-0 P','-|Achou a bike mas sem os pneus.|-150'],
 ['-|A polícia disse "faça um B.O. online".|-0 <1','+|A bike foi recuperada em 2 dias.|+0 >1','-|O policial achou graça e riu.|-0']);
SIT('*','🌭','Cachorro-quente do Bar do Zé','Zé promete o melhor cachorro-quente do Rio. E o mais barato.','Comer 2','Comer 5',
 ['+|Era mesmo uma delícia! Zé ofereceu um refri.|+10 >1','-|Era feito de carne de procedência duvidosa.|-0 P','-|Zé cobrou R$ 40 por 2.|-40'],
 ['-|Passou mal. Zé ficou com sua carteira de refém.|-80 P','+|Comeu 5 e ainda foi aplaudido.|+0 >2','-|Zé reclamou que você comeu demais.|-0 <1']);
SIT('*','🎷','Sax no Aterro','Um saxofonista toca "Garota de Ipanema" pela milésima vez. Todo mundo tá de saco cheio.','Pedir outra música','Aplaudir',
 ['+|Ele tocou "Aquarela do Brasil" e foi lindo.|+0 >1','-|Ele ficou ofendido e tocou mais alto.|-0 <1','-|Ele te xingou em japonês.|-0'],
 ['+|Ele agradeceu e tocou sua preferida.|+10 >1','-|Aplaudiu e ele pediu dinheiro.|-5','-|O público te olhou torto.|-0']);
SIT('*','🍻','Chopp em dobro','O bar tem promoção: "pague 1, leve 2". Mas só vale até as 18h.','Beber rápido','Ir com calma',
 ['+|Bebeu na hora certa e saiu feliz.|+0 >1','-|Ficou bêbado em 20 minutos e dormiu no bar.|-0 P','-|O bar fechou mais cedo.|-0 <1'],
 ['+|Aproveitou cada gole e chegou em casa tranquilo.|+0 >2','-|A promoção acabou na hora que chegou.|-30','-|O garçom esqueceu seu pedido.|-0']);
SIT('*','🧢','Chapéu de pescador','Um amigo te deu um chapéu horrendo. Ele jura que "dá sorte".','Usar o chapéu','Doar o chapéu',
 ['+|O chapéu deu sorte mesmo: ganhou R$ 100 no bicho.|+100 >2','-|Todo mundo riu de você na rua.|-0 <1','-|Perdeu o chapéu no vento.|-0'],
 ['-|O amigo se ofendeu e parou de falar com você.|-0 <1','+|O chapéu foi um sucesso no brechó.|+30 >1','-|Descobriu que valia R$ 500.|-0']);
SIT('*','🔔','Campainha de madrugada','A campainha toca às 2h. Pelo olho mágico, vê uma pessoa fantasiada de pizza.','Abrir a porta','Ignorar',
 ['+|Era uma pizza grátis de um amigo maluco.|+30 >2','-|Era um bêbado que errou o apartamento.|-0 <1','-|Era um golpista. Levou sua carteira.|-200'],
 ['+|Dormiu tranquilo e no dia seguinte tinha pizza na porta.|+0 >1','-|A campainha tocou até as 4h.|-0 P','-|Era a polícia procurando o vizinho.|-0']);
SIT('*','🌈','Parada do orgulho','A parada tá passando e a rua tá cheia de glitter. Você fica ou vai embora?','Ficar e curtir','Ir embora',
 ['+|Foi um dia inesquecível e você se divertiu muito.|+0 >3','-|Perdeu a carteira no meio da festa.|-100 <1','-|Ficou com glitter por uma semana.|-0'],
 ['+|Foi embora e tomou um sorvete tranquilo.|+0 >1','-|Foi barrado pelos desvios e demorou 3 horas.|-0 P','-|Perdeu a festa e ouviu todos os relatos.|-0 <1']);
SIT('*','🛶','Aluguel de caiaque','Você alugou um caiaque no Rio. A correnteza é maior do que parecia.','Remar contra','Deixar a correnteza levar',
 ['+|Chegou ao outro lado e foi aplaudido.|+0 >3','!|Virou e engoliu muita água.|-60 <2','-|Perdeu o remo.|-100'],
 ['-|A correnteza levou até outro bairro.|-0 <2','+|Foi parar numa praia deserta maravilhosa.|+0 >2','-|Foi resgatado pela Marinha. Mico.|-100 P']);
// ---------------------------------------------------------------- ABSURDAS PESADAS (humor negro/exagerado, mira instituições e vícios, não pessoas reais)
SIT('*','🏛️','Prefeito inaugura a obra','O prefeito inaugura pela quinta vez a mesma ponte. Todos os convidados ganham marmita e camiseta.','Ir pela camiseta','Ir pela marmita',
 ['+|Ganhou a camiseta, a marmita E um boné. Votou em ninguém.|+30 >2','-|A camiseta era do candidato adversário. Quase linchado.|-0 <2','-|Tirou foto com o prefeito e a esposa dele cobrou direitos de imagem.|-80'],
 ['+|A marmita tinha picanha. Desconfiança geral.|+0 >2','!|A marmita vencida te deixou 3 dias de cama.|-60 P','-|O prefeito te chamou de "meu eleitor" e você levou crachá de cabo eleitoral.|-0 <1']);
SIT('*','⛪','Pastor com maquininha','O pastor do bairro agora aceita dízimo no PIX, no crédito em 12x e em criptomoeda.','Dar o dízimo','Perguntar pra onde vai o dinheiro',
 ['+|Foi abençoado e o pastor te deu 10% de cashback.|+50 >2','-|Dizimou o 13º. O pastor comprou um jatinho e te agradeceu em oração.|-250','-|Parcelou em 12x e a igreja virou sua credora.|-100 <1'],
 ['-|Foi expulso do culto com um sermão de 40 minutos sobre você.|-0 P','+|O pastor ficou sem graça e te devolveu o dízimo.|+100 >1','-|Descobriu que a conta é do cunhado do pastor.|-0 <2']);
SIT('*','🏖️','Turista gringo','Um turista pergunta em portunhol: "¿Dónde es el samba, la favela y el Cristo? En 30 minutos, tengo vuelo."','Vender um "pacote completo"','Dar o caminho de graça',
 ['+|Vendeu um tour por R$ 200 que terminou na padaria da esquina.|+200 >2','-|Ele era fiscal da prefeitura. Multa por guia sem registro.|-300 P','-|O gringo reclamou no TripAdvisor e você virou o "pior guia do Rio".|-100 <1'],
 ['+|Ele ficou tão feliz que te deu 50 dólares.|+250 >1','-|Você indicou o lugar errado. Ele foi parar no Paraguai.|-0 <2','-|Ele pediu pra tirar foto e você ficou na foto de cara feia. Viralizou.|-0']);
SIT('*','📱','Golpe do PIX','Chegou uma mensagem: "Olá, sou o gerente do seu banco, preciso confirmar seus dados". Você tá com pressa.','Passar os dados','Desconfiar e bloquear',
 ['-|Perdeu o saldo, o limite e a vergonha. O golpista deixou um "obrigado".|-400 <1','+|Era o gerente de verdade e ele te ofereceu um cartão black.|+100 >1','-|O golpista usou seus dados pra abrir um bufê no seu nome.|-200 P'],
 ['+|O golpista caiu no seu golpe e você levou o PIX dele.|+150 >2','-|Era mesmo o gerente e você perdeu a oferta de empréstimo.|-0 <1','+|Você denunciou e a polícia te deu um certificado de "cidadão cívico".|+0 >1']);
SIT('*','🚓','Policial corrupto de bom humor','Um guarda te para: "Documento, parceiro? Olha, tá tudo meio errado… mas eu te ajudo".','Pagar o "cafezinho"','Exigir o procedimento correto',
 ['-|O cafezinho saiu caríssimo. O guarda ainda pediu o troco.|-500','+|O guarda era seu vizinho, riu da situação e só pediu um pastel.|+0 >2','-|Gravaram a cena e você foi preso por corrupção ativa.|-400 P'],
 ['+|O guarda se atrapalhou, te liberou e pediu desculpas.|+0 >2','-|O guarda gostou da cara de honesto e te levou pra delegacia pra explicar.|-0 P','-|Ele te multou por "excesso de educação".|-120']);
SIT('*','🎰','Bicheiro generoso','O bicheiro do bairro distribui cesta básica e cerveja. Todo mundo sabe de onde vem, ninguém pergunta.','Aceitar a cesta','Recusar com um sermão',
 ['+|A cesta tinha até azeite importado. O bairro te chamou de "xodó".|+60 >1','-|A cesta veio com um "pedido de favor" e agora você é o intermediário.|-0 <2','-|A polícia viu a cesta na sua casa. Interrogatório de 3 horas.|-0 P'],
 ['-|O bicheiro ficou sentido e você nunca mais vai ter fiado no mercado.|-100 <1','+|Ele respeitou sua posição e te mandou um panetone de consolação.|+30 >1','-|Um repórter te filmou e o vídeo bombou: "O bicheiro tem inimigos!".|-0 <2']);
SIT('*','🍷','Sommelier de boteco','No boteco novo da moda, o garçom explica a carta: "esse chope tem notas de couro e saudade".','Pedir o chope premium','Pedir o chope normal',
 ['-|O chope premium custou R$ 38 e tinha gosto de chope. Notas de nada.|-38','+|O garçom era o dono, gostou de você e te serviu o melhor da casa.|+0 >2','-|Você disse "tem gosto de cerveja" e o garçom chorou.|-0 <1'],
 ['+|O normal tava ótimo e custava uma pechincha. Vitória do povo!|+10 >1','-|O garçom te olhou com desprezo e te deu a mesa do banheiro.|-0 <1','-|Fez uma piada e o dono te expulsou por "conduta inadequada".|-20 P']);
SIT('*','🏍️','Motoboy em alta velocidade','Um motoboy passa a 120 km/h no corredor e leva seu retrovisor de lembrança.','Gritar com ele','Anotar a placa',
 ['-|Ele voltou de ré e te deu uma bronca de 7 minutos. Você pediu desculpa.|-0 <1','+|Ele parou, pediu desculpa e pagou o retrovisor.|+50 >1','-|Ele era o filho do síndico e você foi multado pelo condomínio.|-100'],
 ['-|A placa era falsa. O motoboy ainda te seguiu no Instagram.|-0 <1','+|A polícia achou o cara e ele pagou tudo com juros.|+100 >2','-|Você tropeçou no meio-fio anotando e caiu de cara.|-30 <1']);
SIT('*','🐒','Macaco de praia','Um macaco rouba seu sanduíche, seu óculos e sua dignidade.','Perseguir o macaco','Deixar o macaco ir',
 ['+|Pegou o sanduíche de volta e o macaco ainda te pediu desculpas em macaquês.|+0 >2','!|Caiu da pedra tentando e deu um mergulho sem querer.|-60 <2','-|O macaco virou o centro das atenções e você, o vilão.|-0 <1'],
 ['-|Ele foi embora com o óculos. Você ficou com a conta e o sol na cara.|-120','+|Ele devolveu o óculos e deixou uma banana de brinde.|+0 >1','+|Uma turista te deu o próprio sanduíche de pena.|+10 >1']);
SIT('*','🍺','Dia do chope em dobro','Hoje o bar liberou o "chope infinito" por R$ 50. O dono sorri demais.','Beber até cair','Beber só 3 e ir embora',
 ['-|Bebeu 14 chopes e o bar descobriu que tava com prejuízo. Cobrou R$ 400.|-400','+|Ganhou o recorde do bar e uma camiseta: "Campeão do Chope".|+100 >2','-|Acordou sem sapato, sem carteira e sem lembrar o nome do vizinho.|-100 P'],
 ['+|Ficou esperto e economizou. O dono chorou de desgosto.|+0 >2','-|O dono reclamou: "só 3? Eu vou à falência!".|-0 <1','-|Foi assaltado na saída por alguém que também achou a promoção boa.|-100']);
SIT('*','🎤','Candidato no ônibus','Um candidato entra no ônibus e promete: "vou acabar com a fila, o trânsito e o buraco da rua".','Bater palma','Perguntar como',
 ['+|Ele te deu um brinde: um chaveiro que não funciona.|+10 >1','-|O motorista te pediu pra descer: "só pode aplaudir quem votar nele".|-0 <1','-|Alguém gravou sua palma e usaram numa propaganda sem sua autorização.|-0 <2'],
 ['-|Ele ficou irritado e disse que você era "do sistema".|-0 <1','+|Ele te chamou de "cidadão atento" e te deu um cargo de assessor (fantasma).|+150 >2','-|O ônibus parou por causa da discussão e você levou a culpa.|-0 P']);
SIT('*','🏆','Campeonato de pastel','A feira vai eleger o melhor pastel do Rio. Você é jurado. A tensão é de final de Copa.','Votar no melhor','Votar no que pagou melhor',
 ['+|O melhor ganhou e você virou o "jurado honesto". Ganhou pastel pra vida toda.|+30 >2','-|O pior ganhou por votação popular e você ficou com a culpa.|-0 <1','-|O ganhador era sobrinho do organizador. Você levou bronca.|-0'],
 ['-|Foi pego recebendo o "agrado" e perdeu o título de jurado.|-200 P','+|O "agrado" era um pastel de camarão e você ficou feliz.|+0 >2','-|O perdedor te processou por injúria.|-150']);
SIT('*','⚖️','Briga de vizinhos','Dois vizinhos brigam por uma vaga de garagem. Chamam você pra ser "juiz".','Dar razão ao da direita','Dar razão ao da esquerda',
 ['+|O da direita ficou tão feliz que te deu uma caixa de cerveja.|+30 >1','-|O da esquerda te chamou de vendido e jogou um pote de feijão em você.|-30 <2','-|Os dois decidiram que você também tinha culpa.|-0 P'],
 ['+|O da esquerda era dono do boteco. Você ganhou comida de graça por uma semana.|+50 >2','-|O da direita tinha um cachorro de 60 kg e ele te perseguiu.|-0 <2','-|Os dois fizeram as pazes e te botaram de bode expiatório.|-80']);
SIT('*','🚁','Helicóptero da polícia','Um helicóptero da polícia fica sobrevoando seu prédio por 2 horas.','Acenar pra eles','Fechar as janelas',
 ['+|Eles acenaram de volta e jogaram um brinde: uma camiseta da PM.|+0 >1','-|Era uma operação e te mandaram sair pra revista.|-0 P','-|Você virou meme: "O vizinho que acena pro helicóptero".|-0 <1'],
 ['-|Eles entenderam como "suspeito" e pousaram na sua laje.|-0 <2','+|O helicóptero foi embora e você dormiu em paz.|+0 >1','-|Ficou com calor, abriu a janela e levou um susto com o barulho.|-0']);
SIT('*','🥩','Picanha por R$ 29','O açougue anunciou "picanha a R$ 29 o quilo". Parece bom demais pra ser verdade.','Comprar 5 kg','Desconfiar',
 ['-|Era carne de procedência misteriosa. Passou 2 dias no banheiro.|-60 P','+|Era picanha de verdade! O açougueiro tinha errado a etiqueta.|+100 >2','-|A carne era um filé de borracha. Você fez churrasco de pneu.|-150'],
 ['+|Ficou esperto e o açougue foi interditado no dia seguinte.|+0 >1','-|O vizinho comprou e fez churrasco o dia todo. Você só olhou.|-0 <1','-|O açougueiro te chamou de "mão de vaca" na frente do bairro.|-0']);
SIT('*','💍','Pedido na praia, com plateia','Um casal está se pedindo em casamento em frente a você. Todo mundo olha. A mulher pede um "sim" público.','Aplaudir','Gravar a cena',
 ['+|Aplaudiu na hora certa e ganhou um brinde de comemoração.|+0 >2','-|Ela disse "não" e todo mundo aplaudiu mesmo assim. Constrangimento.|-0 <1','-|O casal te acusou de "furar o clima".|-0'],
 ['+|O vídeo viralizou e você ganhou 10 mil seguidores.|+80 >2','-|Ela disse "não" e o vídeo viralizou. O casal te processou.|-200','-|O anel caiu no mar e te culparam.|-100 <1']);
SIT('*','🐶','Cachorro de grife','Uma madame passeia com um cachorro de R$ 20 mil usando coleira de ouro e perfume francês.','Elogiar o cachorro','Provocar o cachorro',
 ['+|Ela te deu um cartão: "Conheço gente que paga bem por um elogio sincero".|+100 >2','-|Ela achou que você queria roubar e chamou o segurança.|-0 <1','-|O cachorro te mordeu por "cheiro de plebeu".|-80'],
 ['-|O cachorro te processou (tem advogado).|-200','+|O cachorro tropeçou e a madame te deu R$ 50 pra ficar quieto.|+50 >1','-|A madame te jogou um perfume nos olhos.|-30 P']);
SIT('*','🧞','Gênio da lâmpada vagabundo','Você achou uma lâmpada na rua. O gênio aparece: "Só atendo 3 pedidos e eu tô de mau humor".','Pedir dinheiro','Pedir sorte no amor',
 ['+|Apareceu uma mala com R$ 500. O gênio disse: "bem-vindo ao Rio".|+500 >2','-|O dinheiro era falso. O gênio riu 10 minutos.|-100 <1','-|O dinheiro era emprestado e o gênio cobrou juros de 20% ao mês.|-200'],
 ['+|Conheceu alguém interessante que te levou pra jantar.|+0 >3','-|Conheceu alguém interessante... que é o primo do ex.|-0 <2','-|O gênio trocou seu sorriso por um bigode. Sem volta.|-0 P']);
SIT('*','🛒','Carrinho de supermercado','Você perdeu o controle do carrinho numa ladeira de estacionamento. Ele desce sozinho, cheio de ovos.','Correr atrás','Fingir que não é seu',
 ['!|Escorregou numa casca de banana (juro) e rolou na frente do segurança.|-50 <2','+|Pegou o carrinho a tempo e todos aplaudiram.|+0 >2','-|O carrinho bateu num Porsche. Você foi identificado.|-500'],
 ['+|O carrinho parou sozinho no pé de um sujeito simpático.|+0 >1','-|O dono do Porsche era o gerente do mercado.|-300 <1','-|Todo mundo viu a cena e fofocou na internet.|-0 <2']);
SIT('*','🗳️','Voto de cabresto','O cabo eleitoral te oferece R$ 50 e um frango pra você "lembrar de quem votar".','Aceitar o frango','Recusar',
 ['+|O frango era de verdade e deu pra duas refeições. Votou em branco.|+50 >1','-|O frango era de plástico. Você virou piada do bairro.|-0 <1','-|A justiça eleitoral tava de olho. Multa.|-300 P'],
 ['+|Ele ficou sem graça e te deu o frango "por boa educação".|+30 >1','-|Ele ficou irritado e disse que você é "desagradecido".|-0 <1','-|Você virou o assunto da roda de samba.|-0']);
SIT('*','🎢','Metrô na hora do rush','O metrô tá tão cheio que você vai suspenso por 4 pessoas. Alguém grita "alguém tem um desodorante?".','Segurar o fôlego','Tentar sair na próxima',
 ['-|Perdeu o fôlego e quase o sapato. Chegou ao trabalho com cara de cadáver.|-0 P','+|Alguém dividiu o desodorante e você virou herói do vagão.|+0 >2','!|Uma curva e você virou o travesseiro de um desconhecido.|-30 <1'],
 ['-|Saiu na estação errada e levou 1 hora pra voltar.|-0 <2','+|Achou lugar na plataforma e tomou um café tranquilo.|+0 >1','-|Perdeu o celular na confusão.|-250']);
SIT('*','🍕','Pizzaria 24h','Às 4h da manhã, a única pizzaria aberta cobra "taxa madrugada" de R$ 50.','Pagar a taxa','Tentar negociar',
 ['+|A pizza veio quentinha e você dormiu feliz.|+0 >1','-|A pizza veio fria e a taxa continuou valendo.|-100','-|Descobriram que você tava em jejum e te cobraram "taxa de fome".|-80'],
 ['+|O dono era seu amigo e te deu desconto.|+30 >1','-|O dono te mandou pra casa: "aqui não é feira".|-0 <1','-|Você deu um show de negociação e o dono te contratou como entregador.|-0 P']);
SIT('*','🎈','Palhaço assustador','Um palhaço na esquina te chama pelo nome. Você nunca o viu na vida.','Cumprimentar','Fingir que não escutou',
 ['-|Ele te deu um balão de presente. O balão estourou e te assustou.|-0 <1','+|Era seu primo, que virou palhaço. Ganhou um abraço e uma cerveja.|+10 >1','-|Ele te perseguiu até o ponto de ônibus.|-0 <2'],
 ['-|Ele gritou seu nome e todo mundo olhou.|-0 <1','+|Ele desistiu e foi atrás de outro.|+0 >1','-|Era seu chefe fantasiado. Você levou bronca.|-100 P']);
SIT('*','🧙','Mãe de santo e a mala','Uma mãe de santo oferece "um trabalho" pra você ganhar dinheiro. Preço: R$ 300.','Aceitar','Recusar',
 ['+|O trabalho funcionou: achou R$ 600 no bolso da jaqueta.|+600 >2','-|O trabalho não funcionou e ela jurou que era porque você "não acreditou".|-300','-|Ela te cobrou uma "taxa de energia".|-100'],
 ['+|Ela agradeceu o respeito e te deu um chá de graça.|+0 >1','-|Ela fez uma cara feia e você tropeçou na saída.|-0 <1','-|Um amigo disse que você perdeu a chance da vida.|-0']);
SIT('*','💸','Herança do tio','Seu tio distante morreu e deixou uma herança. O testamento diz: "ao sobrinho que chegar primeiro ao cartório".','Correr de ônibus','Pegar um Uber',
 ['+|O ônibus passou voando e você chegou primeiro. Herança: R$ 800.|+800 >3','-|O ônibus quebrou. Você perdeu a herança pra uma prima.|-0 <2','-|Chegou primeiro, mas a herança era uma dívida.|-500'],
 ['-|O Uber demorou 40 minutos e você chegou em segundo.|-0 <2','+|O motorista era piloto de rally e você ganhou.|+800 >3','-|O Uber foi multado por excesso de velocidade.|-200']);
SIT('*','🎩','Cartola e coelho','Um mágico de rua pede um voluntário. Você é escolhido. O truque é "cortar o voluntário ao meio".','Aceitar','Fugir',
 ['+|O truque deu certo e a plateia te deu aplauso e R$ 30.|+30 >2','-|O mágico errou e te enfiou numa caixa por 20 minutos.|-0 P','-|A caixa travou e você virou atração turística.|-0 <2'],
 ['-|A plateia vaiou: "covarde!".|-0 <1','+|Escapou e comeu pastel.|+0 >1','-|O mágico te perseguiu até o ponto.|-0 <1']);
SIT('*','🚇','Fiscal do bilhete','Um fiscal da prefeitura te para: "Cadê o bilhete?". Você jura que pagou.','Mostrar o aplicativo','Dizer que perdeu',
 ['+|O app tava funcionando e o fiscal pediu desculpa.|+0 >2','-|O app travou na hora. Multa imediata.|-150','-|O fiscal era iniciante e te levou pra delegacia.|-0 P'],
 ['-|O fiscal riu e te deu multa dobrada.|-300','+|O fiscal se comoveu e te liberou.|+0 >2','-|Ele te fez ficar 2 horas na plataforma pra "pensar".|-0 P']);
