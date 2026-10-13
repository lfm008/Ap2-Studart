// ======= DILEMAS MORAIS, DINHEIRO E RELAÇÕES =======
SIT('*','💰','Carteira achada','Você acha uma carteira com R$ 800 e todos os documentos do dono. Ninguém viu.','Devolver','Ficar com o dinheiro',
 ['+|O dono te deu R$ 150 de recompensa e um abraço.|+150 >3','-|O dono disse "falta dinheiro" e te acusou.|-200','-|O dono nunca agradeceu.|-0 <1'],
 ['+|Comprou algo que precisava e ninguém notou.|+500 >2','-|O dono te achou pelas câmeras.|-600 P','-|O remorso te consumiu por semanas.|-0 <2']);
SIT('*','🏦','Erro do banco','O banco depositou R$ 5.000 por engano na sua conta. Você viu.','Avisar o banco','Gastar',
 ['+|O banco agradeceu e te deu R$ 200 de bônus.|+200 >3','-|O banco demorou 3 meses pra resolver.|-0 <2','-|O banco bloqueou sua conta.|-0 P'],
 ['+|Gastou e ninguém percebeu.|+2000 >2','-|O banco cobrou tudo com juros.|-8000','-|Foi processado.|-3000 P']);
SIT('*','🤝','Amigo em apuros','Seu melhor amigo está em apuros e precisa de R$ 3.000 emprestados. Ele jura que paga em 1 mês.','Emprestar','Negar',
 ['+|Ele pagou em 3 semanas e te deu um presente.|+300 >3','-|Ele sumiu e você nunca viu o dinheiro.|-3000','-|Ele pagou metade e parou.|-1500'],
 ['-|Ele ficou magoado e vocês romperam.|-0 <3','+|Ele conseguiu em outro lugar e agradeceu.|+0 >2','-|Os amigos te chamaram de "frio".|-0 <2']);
SIT('*','🏠','Casa de herança','Você e seus irmãos herdaram uma casa. Todos querem vender, mas você tem lembranças.','Vender','Ficar com a casa',
 ['+|A casa vendeu bem e cada um levou uma boa parte.|+1000 >3','-|Os irmãos brigaram e a casa ficou 5 anos sem venda.|-0 P','-|O comprador deu golpe.|-5000'],
 ['+|Reformou e a casa valorizou 40%.|+1500 >3','-|Os irmãos ficaram furiosos.|-0 <3','-|A casa precisava de uma obra gigantesca.|-3000']);
SIT('*','🎓','Bolsa de estudos','Você ganha uma bolsa de estudos integral. Mas ela exige que você "doe 20 horas semanais pra instituição".','Aceitar','Recusar',
 ['+|Formou-se e virou profissional respeitado.|+800 >3','-|Trabalhou demais e ficou doente.|-0 P','-|A instituição faliu.|-0 <3'],
 ['-|Sem a bolsa, não conseguiu pagar o curso.|-500 <3','+|Achou outra bolsa melhor.|+500 >3','-|Perdeu o prazo.|-0 <2']);
SIT('*','⚕️','Remédio de marca','Seu médico receita um remédio de marca por R$ 400. O genérico custa R$ 40. O farmacêutico diz "é igual".','Comprar o genérico','Comprar o de marca',
 ['+|O genérico funcionou e você economizou.|+300 >2','!|O genérico deu reação alérgica.|-100 P','-|O farmacêutico errou o troco.|-30'],
 ['+|O de marca funcionou e você ficou tranquilo.|+0 >2','-|Gastou R$ 400 à toa.|-400','-|O remédio estava vencido.|-0 P']);
SIT('*','🏋️','Academia cara','A academia da Barra cobra R$ 400 por mês. Você vai 2 vezes por semana. A matrícula não cancela.','Continuar pagando','Cancelar',
 ['+|Começou a ir 5 vezes e ficou em forma.|+0 >3','-|Foi 1 vez em 3 meses.|-1200','-|A academia aumentou o preço.|-200'],
 ['-|A academia cobrou multa de R$ 800.|-800','+|Cancelou e comprou uma esteira.|+0 >2','-|Demoraram 4 meses pra cancelar.|-1600']);
SIT('*','🚗','Carro financiado','Você financiou um carro em 60 parcelas. Na 40ª, ele quebra. O mecânico diz "nem a pau".','Consertar','Vender',
 ['+|O conserto foi barato e o carro durou.|+0 >2','-|O conserto custou R$ 5.000.|-5000','-|O carro quebrou de novo.|-500 <2'],
 ['-|Vendeu e a venda não cobriu a dívida.|-3000','+|Vendeu por mais do que devia.|+1000 >3','-|O comprador deu golpe.|-5000']);
SIT('*','🏢','Aluguel do escritório','Você tem um pequeno negócio. O aluguel subiu 40%. O dono diz "é o mercado".','Pagar','Procurar outro',
 ['-|Pagou e o lucro desapareceu.|-1000','+|O dono te deu 2 meses de desconto.|+500 >2','-|O dono aumentou de novo.|-500'],
 ['+|Achou um espaço melhor e mais barato.|+1000 >3','-|Rodou 10 imóveis e voltou.|-0 <3','-|Perdeu clientes na mudança.|-800']);
SIT('*','📱','Golpe do falso sequestro','Alguém liga: "sequestramos seu filho, pague R$ 10 mil!". Seu filho está na escola.','Pagar','Ligar pro filho',
 ['-|Pagou e perdeu R$ 10 mil.|-10000','+|Era golpe e você desligou.|+0 >2','-|O golpista te ligou 50 vezes.|-0 <3'],
 ['+|O filho atendeu e vocês riram do golpe.|+0 >3','-|O filho não atendeu e você entrou em pânico.|-0 <3','-|O golpista era seu primo.|-0 <2']);
SIT('*','🧾','Dívida antiga','Um cobrador aparece com uma dívida de 8 anos atrás. Ela agora é de R$ 12 mil com juros.','Pagar','Contestar',
 ['-|Pagou e ficou sem dinheiro por 6 meses.|-12000','+|Negociou e quitou com 80% de desconto.|+0 >2','-|Descobriu que a dívida era de outra pessoa.|-0 <2'],
 ['+|Provou que prescreveu e se livrou.|+0 >3','-|Perdeu na justiça.|-8000','-|O cobrador te perseguiu.|-0 <3']);
SIT('*','🎁','Presente caro','Seu amigo te dá um presente caríssimo. Você não tem como retribuir. Ele sorri.','Aceitar','Devolver',
 ['+|Foi um presente de coração e você sorriu.|+500 >3','-|Ele cobrou o favor depois.|-500 <2','-|Você se sentiu em dívida.|-0 <2'],
 ['-|Ele ficou magoado.|-0 <3','+|Ele entendeu e vocês riram.|+0 >2','-|Ele te deu outro.|-0 <1']);
SIT('*','🎉','Casamento caro','Seu casamento custou R$ 80 mil. Todos adoraram a festa. Você tá devendo R$ 40 mil.','Trabalhar mais','Pedir ajuda',
 ['+|Pagou tudo em 2 anos.|+0 >3','-|Ficou exausto e doente.|-0 P','-|O casamento acabou em 6 meses.|-0 <3'],
 ['+|A família ajudou e você ficou tranquilo.|+500 >3','-|A família passou a cobrar favores.|-300 <2','-|Ninguém ajudou.|-0 <2']);
SIT('*','👶','Chegada do bebê','Seu bebê nasceu. Fraldas, fórmula e noites sem dormir. A conta chegou: R$ 3.000 por mês.','Cortar gastos','Pedir ajuda',
 ['+|Economizou e achou um jeito.|+200 >3','-|Cortou demais e passou aperto.|-0 P','-|Brigou com o cônjuge.|-0 <3'],
 ['+|A mãe ajudou e salvou o mês.|+500 >3','-|A mãe cobrou pra sempre.|-300 <2','-|Ninguém pôde ajudar.|-0 <2']);
SIT('*','🐕','Cachorro doente','Seu cachorro está doente. O veterinário cobra R$ 2.000 pelo tratamento. Ele olha pra você com carinha.','Pagar','Procurar mais barato',
 ['+|O cachorro se curou e vocês viraram melhores amigos.|+0 >3','-|O tratamento falhou.|-0 <3','-|O veterinário cobrou mais.|-1000'],
 ['+|Achou um veterinário popular e curou.|+500 >3','-|O cachorro piorou.|-0 <3','-|O veterinário era charlatão.|-500']);
SIT('*','🏖️','Férias dos sonhos','Você ganha R$ 10 mil e decide viajar. Pode ir pra Paris (R$ 15 mil) ou Búzios (R$ 3 mil).','Paris no cartão','Búzios',
 ['+|Foi a viagem da vida.|+0 >3','-|Voltou com dívidas.|-10000','-|Perdeu a mala.|-3000'],
 ['+|Curtiu muito e economizou.|+5000 >3','-|Choveu a semana toda.|-0 <2','-|Foi assaltado.|-500']);
SIT('*','🎟️','Show caro','O show da sua banda favorita custa R$ 1.200. Você tem R$ 500 e um cartão de crédito sem limite.','Parcelar','Ficar em casa',
 ['+|Foi um show inesquecível.|+0 >3','-|O show foi cancelado.|-0 <3','-|Os juros foram altos.|-300'],
 ['+|Viu pela TV e economizou.|+500 >2','-|Todos os amigos foram e você ficou.|-0 <2','-|A TV pifou.|-0 <1']);
SIT('*','🧑‍🤝‍🧑','Amizade ou dinheiro','Seu amigo te oferece um negócio. Você investe R$ 10 mil. Ele promete 50% de lucro em 3 meses.','Investir','Recusar',
 ['+|O negócio deu certo e você lucrou R$ 5 mil.|+5000 >3','-|O amigo sumiu com o dinheiro.|-10000','-|O negócio quebrou.|-8000'],
 ['+|Recusou e o negócio quebrou.|+0 >3','-|O negócio deu certo e você perdeu a chance.|-0 <3','-|O amigo ficou ofendido.|-0 <2']);
SIT('*','⚖️','Briga da árvore','Você e seu vizinho brigam por causa de uma árvore. A discussão vai pra justiça.','Aceitar acordo','Ir até o fim',
 ['+|O acordo foi justo e vocês fizeram as pazes.|+0 >3','-|O acordo custou R$ 500.|-500','-|O vizinho não cumpriu.|-0 <2'],
 ['+|Ganhou e o vizinho pagou as custas.|+2000 >3','-|Perdeu e pagou tudo.|-3000','-|A briga durou 5 anos.|-0 <3']);
SIT('*','🏠','Despejo','O proprietário quer despejar você por "barulho". Você tem 30 dias.','Procurar outra casa','Brigar na justiça',
 ['+|Achou uma melhor e mais barata.|+500 >3','-|Pagou R$ 2 mil de mudança.|-2000','-|Rodou 10 imóveis.|-0 <3'],
 ['+|Ganhou na justiça e ficou.|+0 >3','-|Perdeu e ficou sem casa.|-0 <3','-|O dono te perseguiu.|-0 <2']);
SIT('*','🏥','Plano de saúde caro','Seu plano aumentou 40%. O atendimento é péssimo. Você pensa em cancelar.','Cancelar','Manter',
 ['+|Foi pro SUS e economizou.|+800 >2','!|Ficou doente sem plano.|-500 P','-|A multa foi alta.|-500'],
 ['-|O plano continuou ruim.|-500','+|Teve uma emergência e o plano cobriu.|+0 >3','-|O plano aumentou de novo.|-300']);
SIT('*','🎓','Curso caro','Um curso de R$ 5 mil promete "empregabilidade 100%". O vendedor jura que "todos conseguem emprego".','Fazer o curso','Recusar',
 ['+|Conseguiu um emprego melhor.|+2000 >3','-|O curso era uma farsa.|-5000','-|O diploma não valeu nada.|-0 <3'],
 ['+|Aprendeu sozinho e conseguiu emprego.|+1000 >3','-|Perdeu uma boa oportunidade.|-0 <3','-|O vendedor te ligou 40 vezes.|-0 <2']);
SIT('*','🚖','Aplicativo de transporte','Você vira motorista de aplicativo. O carro quebra. O app cobra 30% de taxa.','Continuar','Desistir',
 ['+|Ganhou muito bem no mês.|+500 >3','-|Gastou mais do que ganhou.|-1000','-|Foi assaltado.|-500'],
 ['+|Achou um emprego melhor.|+500 >3','-|Vendeu o carro por menos.|-1000','-|Ficou desempregado.|-0 <3']);
SIT('*','🏪','Abrir um negócio','Você decide abrir uma lanchonete. O ponto custa R$ 2 mil de aluguel. O primeiro mês é lento.','Continuar','Fechar',
 ['+|O negócio virou sucesso.|+3000 >3','-|Faliu em 6 meses.|-5000','-|A vigilância fechou.|-1000 P'],
 ['+|Vendeu o ponto por um bom dinheiro.|+500 >2','-|Perdeu o investimento.|-3000','-|Ficou endividado.|-0 <3']);
SIT('*','🧑‍🍳','Cozinheiro de domingo','Você faz um jantar pra 10 pessoas. O fogão queima. A carne vira carvão.','Pedir pizza','Fazer outra coisa',
 ['+|A pizza salvou a noite.|+0 >3','-|A pizzaria demorou 2 horas.|-0 <2','-|Todos foram embora.|-0 <3'],
 ['+|Improvisou um macarrão incrível.|+0 >3','-|O macarrão grudou.|-0 <2','-|Ninguém comeu.|-0 <2']);
SIT('*','🎤','Cantor de bar','Você canta num bar. Ninguém ouve. Um sujeito grita "toca sertanejo!".','Atender','Ignorar',
 ['+|Cantou sertanejo e o bar foi ao delírio.|+100 >3','-|Esqueceu a letra.|-0 <2','-|O sujeito pediu outra e outra.|-0 <2'],
 ['-|O sujeito jogou um copo.|-0 <3','+|Continuou e ganhou aplausos.|+0 >2','-|O dono te mandou sair.|-0 <2']);
SIT('*','🕺','Aula de dança','Você faz aula de dança de salão. Seu parceiro é um senhor de 80 anos. Ele dança melhor que você.','Aceitar a derrota','Desafiar',
 ['+|Aprendeu muito e fez amizade.|+0 >3','-|Pisou no pé dele.|-0 <2','-|Todos riram.|-0 <2'],
 ['+|Dançaram e ganharam o concurso.|+100 >3','-|Ele te humilhou.|-0 <3','-|Você torceu o pé.|-60 P']);
SIT('*','🏍️','Passeio de moto','Você faz um passeio de moto com amigos. Um deles vai muito rápido. Vocês se perdem.','Acelerar','Voltar',
 ['+|Alcançou e foi uma aventura épica.|+0 >3','!|Caiu na curva.|-150 <2','-|A moto parou.|-0 <2'],
 ['+|Voltou e achou o caminho.|+0 >2','-|Perdeu os amigos.|-0 <3','-|Chuva forte.|-0 <1']);
SIT('*','🛍️','Presente de última hora','São 18h. A loja fecha às 19h. Você precisa de um presente de aniversário pra sua mãe.','Comprar um perfume','Comprar flores',
 ['+|Ela amou e te deu um abraço.|+0 >3','-|O perfume era o mesmo que ela tinha.|-200','-|Ela disse "tá me chamando de velha?".|-0 <2'],
 ['+|Ela chorou de emoção.|+0 >3','-|As flores murcharam no ônibus.|-50','-|Ela é alérgica.|-0 <2']);
SIT('*','🎂','Bolo de aniversário','Você faz um bolo de aniversário. Ele desanda. Todo mundo chega em 10 minutos.','Comprar um pronto','Servir assim',
 ['+|O bolo pronto era ótimo.|+0 >3','-|Pagou R$ 80 e era de ontem.|-80','-|A padaria fechou.|-0 <2'],
 ['+|Disse que era "bolo moderno" e todos acreditaram.|+0 >3','-|Todos riram.|-0 <2','-|Ninguém comeu.|-0 <2']);
SIT('*','🧑‍🔧','Eletricista da família','Seu tio eletricista promete "arrumar tudo". Ele deixa a casa sem luz por 3 dias.','Chamar um profissional','Esperar o tio',
 ['+|O profissional resolveu em 1 hora.|+0 >3','-|Cobrou R$ 800.|-800','-|O tio ficou ofendido.|-0 <2'],
 ['+|O tio resolveu e você ficou feliz.|+0 >2','-|O tio queimou o quadro.|-500','-|O tio sumiu.|-0 <2']);
SIT('*','🚿','Chuveiro novo','Você instala um chuveiro novo. Ele só tem 2 temperaturas: "gelo" e "inferno".','Aguentar','Trocar',
 ['+|Se acostumou e virou "banho de contraste".|+0 >2','!|Se queimou.|-60 P','-|Pegou um resfriado.|-30 P'],
 ['+|Trocou e ficou perfeito.|+0 >2','-|Gastou R$ 300.|-300','-|O novo era pior.|-100']);
SIT('*','🛋️','Sofá novo','Você compra um sofá de R$ 2.000 em 12 vezes. Ele chega 2 tamanhos maior que a porta.','Desmontar a porta','Devolver',
 ['+|O sofá entrou e ficou lindo.|+0 >3','-|Quebrou a porta.|-500','-|O sofá não entrou.|-0 <2'],
 ['+|A loja trocou por um menor.|+0 >2','-|A loja cobrou frete de devolução.|-300','-|Ficou sem sofá.|-0 <2']);
SIT('*','📺','TV de LED','Você compra uma TV de LED. Ela chega com a tela quebrada. O vendedor diz "foi o transporte".','Reclamar','Consertar',
 ['+|A loja trocou na hora.|+0 >3','-|A loja disse "prazo expirou".|-0 <2','-|O Procon demorou.|-0 <3'],
 ['-|O conserto custou R$ 1.000.|-1000','+|Consertou por R$ 100.|+0 >2','-|A TV pifou de novo.|-500']);
SIT('*','🧴','Perfume importado 2','Alguém te vende um perfume por R$ 50. Ele diz "é de Paris". O rótulo diz "Pari$".','Comprar','Recusar',
 ['+|O perfume era bom.|+0 >2','-|Cheirava a desinfetante.|-50','-|Deu alergia.|-60 P'],
 ['+|Comprou numa loja e foi feliz.|+0 >1','-|O vendedor te xingou.|-0 <1','-|Perdeu a chance.|-0 <1']);
SIT('*','🏀','Time de basquete de rua','Um grupo de rua te chama pra um 3x3. Eles têm 2 m de altura. Você tem 1,65 m.','Jogar','Assistir',
 ['+|Fez uma cesta e virou lenda.|+0 >3','!|Foi atropelado.|-60 <2','-|Todos riram.|-0 <2'],
 ['+|Ganhou uma cerveja pela torcida.|+0 >2','-|Foi atingido por uma bola.|-0 <1','-|Não tinha onde sentar.|-0 <1']);
