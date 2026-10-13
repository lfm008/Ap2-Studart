// ======= LEI E ORDEM e ESTUDANTE — parte 2 =======
SIT('legal','🛑','Blitz de rotina','Você comanda uma blitz. Passa um carro de luxo com o dono visivelmente nervoso.','Revistar o carro','Liberar sem olhar',
 ['+|Achou irregularidades e foi elogiado pelo chefe.|+400 >3','-|Era um político e você foi transferido pra Santa Cruz.|-500 <2','-|O carro estava limpo e o dono processou.|-300'],
 ['+|Liberou e o dono te deu um cartão de agradecimento.|+100 >2','-|Descobriu depois que era procurado.|-500 <2','-|O chefe viu e te deu bronca.|-0 <1']);
SIT('legal','🔦','Plantão noturno','O plantão noturno é uma loteria. Você ouve um barulho estranho no estacionamento.','Investigar sozinho','Chamar reforço',
 ['+|Era um gato. Você virou herói da delegacia.|+50 >2','!|Era um assaltante e você levou um soco.|-200 <2','-|Tropeçou numa mangueira e caiu na poça.|-0 <1'],
 ['+|O reforço chegou e o assaltante foi preso.|+300 >2','-|O reforço demorou 40 minutos.|-0 <1','-|Era alarme falso e todo mundo riu.|-0']);
SIT('legal','🥾','Treino de tiro','O treino de tiro é hoje. O instrutor anuncia: "quem errar o alvo paga o churrasco".','Mirar com calma','Atirar rápido',
 ['+|Acertou no centro e ganhou um churrasco grátis.|+0 >3','-|Errou o alvo e acertou o poste. O churrasco é por sua conta.|-250','-|Foi gozado pelos colegas por 3 meses.|-0 <1'],
 ['-|Atirou pro lado errado e quebrou um refletor.|-300','+|Acertou 10 de 10 e virou lenda.|+0 >3','!|Se machucou com o recuo.|-100 P']);
SIT('legal','🚨','Apreensão de contrabando','Uma carga de eletrônicos foi apreendida. Seu chefe diz "dá pra guardar um relógio pra você".','Aceitar o relógio','Recusar',
 ['+|O relógio era bom e ninguém soube.|+500 >2','-|Era uma armadilha da corregedoria.|-2000 P','-|O relógio parou no dia seguinte.|-0 <1'],
 ['+|Ficou limpo e o chefe respeitou.|+300 >2','-|O chefe te achou "chato" e te passou pro plantão.|-0 <2','-|Alguém viu e fofocou.|-0']);
SIT('legal','🚔','Carro da polícia quebrou','A viatura quebrou no meio de uma perseguição. O suspeito acena de longe.','Empurrar a viatura','Chamar o guincho',
 ['+|A viatura voltou a funcionar e você alcançou o suspeito.|+300 >3','!|Torceu as costas empurrando.|-100 P','-|O suspeito sumiu.|-0 <2'],
 ['-|O guincho demorou e o suspeito sumiu.|-0 <2','+|Chegou a tempo e foi um sucesso.|+200 >2','-|O guincho também quebrou.|-0 P']);
SIT('legal','🍕','Pizza do plantão','Você pediu pizza no plantão. O entregador demora 1 hora. Chega frio e sem borda.','Reclamar','Comer calado',
 ['+|A pizzaria devolveu o dinheiro e mandou outra.|+100 >2','-|O dono disse "quem manda ser policial".|-0 <1','-|Descobriu que era seu primo e ficou sem graça.|-0 <1'],
 ['+|A pizza era boa mesmo fria.|+0 >1','!|Passou mal com a pizza.|-60 P','-|O colega roubou sua última fatia.|-0']);
SIT('legal','🪖','Desfile cívico','Você vai desfilar na Avenida Presidente Vargas. O sol é de 40 graus e a farda é de lã.','Desfilar até o fim','Fingir uma tontura',
 ['+|Desfilou com garbo e foi aplaudido.|+100 >3','!|Desmaiou de calor na frente das câmeras.|-100 P','-|Tropeçou no cadarço e derrubou a fila.|-0 <2'],
 ['-|O comandante viu e te deu uma bronca.|-0 <2','+|Foi atendido por um enfermeiro bonito.|+0 >1','-|Virou meme: "o policial desmaiado".|-0']);
SIT('legal','📝','Boletim de ocorrência','Alguém registra um B.O. por "roubo de um cavalo". Você tem que investigar o cavalo.','Investigar','Arquivar',
 ['+|O cavalo foi achado num haras. Você ganhou um elogio.|+200 >3','-|O cavalo era um cachorro. Papelão total.|-0 <2','-|O dono te processou.|-200'],
 ['-|O dono reclamou na corregedoria.|-300 <2','+|Ninguém notou e você economizou tempo.|+0 >1','-|O cavalo apareceu na delegacia.|-0']);
SIT('legal','📞','Denúncia anônima','Uma denúncia anônima diz que tem "atividade suspeita" no prédio ao lado. Você não tem prova.','Investigar','Ignorar',
 ['+|Era mesmo uma operação. Prendeu 3 criminosos.|+500 >3','-|Era a festa de aniversário de uma senhora. Constrangimento.|-0 <2','-|Foi recebido a bala de festim.|-60 <1'],
 ['-|Era mesmo uma atividade criminosa. Foi cobrado.|-500 <2','+|Era mesmo uma festa e você economizou tempo.|+0 >1','-|A denúncia era trote.|-0']);
SIT('legal','🐶','Cão farejador','Seu cão farejador "trabalha" melhor que você. Hoje ele achou algo suspeito na mala de um turista.','Abrir a mala','Ignorar o cão',
 ['+|Achou o contrabando e ganhou uma medalha.|+400 >3','-|Era um sanduíche de linguiça. O cão comeu.|-0 <1','-|O turista te processou.|-200'],
 ['-|O cão ficou ofendido e te mordeu.|-60 P','+|O cão ficou tranquilo e você economizou.|+0 >1','-|Era mesmo contrabando. Foi embora.|-300 <2']);
SIT('legal','🎖️','Missão especial','O comando oferece uma missão especial: "proteger o chefe de tráfego no Carnaval". Todo mundo sabe que é furada.','Aceitar','Recusar',
 ['+|Foi uma missão tranquila e você ganhou uma gratificação.|+500 >3','-|O chefe de tráfego foi sequestrado por um bloco.|-300 <2','-|Você perdeu o celular na confusão.|-250'],
 ['+|Ficou de fora e o desastre foi dos outros.|+0 >2','-|O comando te chamou de "medroso".|-0 <1','-|Foi escalado pra outra missão pior.|-0 P']);
SIT('legal','🛵','Moto de escolta','Você escolta uma carreata. O motorista da frente é um político que acha que a rua é dele.','Manter o ritmo','Sinalizar com sirene',
 ['+|Tudo correu bem e o político te deu um cartão.|+200 >3','!|Um motoboy te fechou e você caiu da moto.|-150 <2','-|O político reclamou da sua "lentidão".|-0 <1'],
 ['-|A sirene assustou os pedestres e virou confusão.|-100 <1','+|A sirene abriu caminho e todos aplaudiram.|+100 >2','-|A sirene quebrou no meio do caminho.|-0']);
SIT('legal','⚖️','Julgamento do réu','Você é testemunha em um julgamento famoso. O advogado de defesa é um mestre em te confundir.','Falar a verdade','Mudar a versão',
 ['+|Ficou firme e o réu foi condenado.|+300 >3','-|O advogado te confundiu e você contou uma versão errada.|-0 <2','-|Sua verdade foi usada contra você.|-100 <1'],
 ['-|Foi pego mentindo. Perdeu a credibilidade.|-500 P','+|O juiz te agradeceu e você virou herói.|+100 >1','-|O réu foi absolvido e você virou alvo.|-0 <2']);
SIT('legal','📸','Câmera de segurança','Você descobre que uma câmera de segurança gravou um colega recebendo "um agrado". O vídeo está nas suas mãos.','Entregar à corregedoria','Apagar o vídeo',
 ['+|O colega foi punido e você foi condecorado.|+300 >3','-|O colega era filho do comandante. Você foi transferido.|-500 <2','-|Foi chamado de "traíra" por 3 meses.|-0 <2'],
 ['-|O vídeo foi recuperado e você foi investigado.|-1500 P','+|Ninguém soube e o colega te agradeceu com uma cerveja.|+100 >1','-|O colega te chantageou depois.|-300 <1']);
SIT('legal','🧯','Resgate no prédio','Um prédio pegou fogo. Uma gatinha está presa no 5º andar. Os bombeiros estão atrasados.','Subir e resgatar','Esperar os bombeiros',
 ['+|Salvou a gatinha e virou herói da cidade.|+500 >3','!|Queimou a mão no corrimão.|-150 <2','-|A gatinha fugiu sozinha e você ficou pendurado.|-0 <2'],
 ['-|Os bombeiros demoraram e a gatinha desceu sozinha.|-0 <1','+|Os bombeiros chegaram e te agradeceram.|+100 >2','-|Todo mundo te chamou de "covarde".|-0 <1']);
SIT('legal','🚑','Atropelamento na rua','Um ciclista foi atropelado em frente ao seu quartel. O motorista fugiu. O ciclista pede ajuda.','Socorrer','Ligar pro SAMU',
 ['+|Socorreu e salvou a vida. Ganhou uma menção.|+300 >3','!|Se machucou levantando o ciclista.|-100 P','-|Pisou no pé do ciclista sem querer.|-0 <1'],
 ['+|O SAMU chegou rápido e agradeceu.|+100 >2','-|O SAMU demorou e o ciclista reclamou.|-0 <1','-|O ciclista te processou por omissão.|-300']);
SIT('legal','🛡️','Escudo quebrado','Seu escudo antimotim quebrou no meio de uma manifestação. Alguém joga um sapato.','Recuar','Avançar mesmo assim',
 ['+|Recuou e evitou o confronto. Chefe te elogiou.|+0 >2','-|Recuou e os manifestantes te ridicularizaram.|-0 <1','-|Foi atingido por um tomate.|-0'],
 ['!|Foi atingido por uma pedra no capacete.|-100 <2','+|Avançou e dispersou a multidão.|+200 >3','-|Virou meme: "o policial do escudo quebrado".|-0 <2']);
SIT('legal','🚔','Viatura 0 km','A corporação recebeu viaturas novas. Só tem 2 pra 50 policiais. O sorteio é no cafezinho.','Participar do sorteio','Desistir',
 ['+|Ganhou a viatura e foi inveja geral.|+0 >3','-|Perdeu o sorteio e ficou com a pé.|-0 <1','-|O sorteio foi manipulado.|-0 <1'],
 ['+|Deixou pros outros e foi elogiado.|+0 >2','-|A viatura nova quebrou na 1ª saída.|-0 <1','-|Todos riram de você.|-0']);
SIT('legal','💼','Mala esquecida','Você acha uma mala esquecida no ponto de ônibus. Tem R$ 20 mil dentro e um bilhete: "para quem merece".','Entregar na delegacia','Guardar',
 ['+|O dono apareceu e te deu uma recompensa.|+1000 >3','-|O dono nunca apareceu. Você virou "o policial que não ficou rico".|-0 <1','-|Alguém disse que você tinha ficado com parte.|-300'],
 ['+|Ninguém soube e você comprou uma moto.|+1500 >2','-|Era uma armadilha da corregedoria. Foi exonerado.|-3000 P','-|A mala era marcada e o dono te perseguiu.|-1000 <2']);
SIT('legal','🥋','Defesa pessoal','Você precisa ministrar uma aula de defesa pessoal. Você só tem faixa branca em karatê.','Dar a aula','Pedir um colega',
 ['+|A aula foi um sucesso. Os alunos te chamaram de "mestre".|+200 >3','!|Demonstrou um golpe e deslocou o ombro.|-100 P','-|Todos riram dos seus golpes.|-0 <2'],
 ['+|O colega deu uma aula excelente e você aprendeu junto.|+0 >2','-|O colega te zoou por semanas.|-0 <1','-|O colega não foi e você ficou na mão.|-0 <1']);
// ---- estudante parte 2
SIT('estudante','📖','Biblioteca lotada','Semana de provas. A biblioteca está lotada. Só tem 1 lugar livre, ao lado de um aluno que ronca.','Sentar do lado dele','Estudar no corredor',
 ['+|O ronco virou "música ambiente" e você passou na prova.|+0 >2','-|O aluno acordou e te chamou pra brigar.|-0 <1','-|O ronco te desconcentrou e você tirou 3.|-0 <2'],
 ['-|Ficou com dor nas costas e não aprendeu nada.|-0 P','+|Achou uma sala vazia e estudou em paz.|+0 >2','-|Um segurança te mandou sair.|-0 <1']);
SIT('estudante','☕','Café do campus','O café do campus custa R$ 8 e tem gosto de lama. Você precisa de cafeína pra viver.','Comprar o café','Fazer chá em casa',
 ['+|O café era surpreendentemente bom hoje.|+0 >1','-|Era mesmo lama. Passou mal.|-8 P','-|A máquina engoliu seu dinheiro.|-8'],
 ['+|O chá acalmou e você tirou 9,5.|+0 >2','-|Esqueceu a chaleira e queimou a cozinha.|-100','-|Dormiu no meio da aula.|-0 <1']);
SIT('estudante','🏛️','Centro acadêmico','O centro acadêmico vai eleger o novo presidente. Todo mundo te quer como candidato.','Candidatar-se','Recusar',
 ['+|Foi eleito com 80% dos votos. Virou celebridade do campus.|+100 >3','-|Perdeu pra um candidato que prometeu pizza grátis.|-0 <2','-|Descobriram seu histórico de "colador" e te humilharam.|-0 <2'],
 ['-|Outro candidato ganhou e destruiu o grêmio.|-0 <2','+|Ficou fora e foi a única pessoa tranquila.|+0 >1','-|Todos te chamaram de "omisso".|-0']);
SIT('estudante','🏃','Corrida do campus','A corrida anual do campus tem prêmio de R$ 200. Você nunca correu mais de 100 metros.','Participar','Torcer',
 ['+|Terminou em 3º lugar e ganhou R$ 100.|+100 >3','!|Torceu o tornozelo na primeira curva.|-60 <2','-|Chegou em último e foi aplaudido de pena.|-0 <1'],
 ['+|Torceu tanto que ganhou um rifa de camiseta.|+30 >1','-|Perdeu a voz e ficou rouco por 3 dias.|-0 P','-|Foi atropelado por um corredor.|-0 <1']);
SIT('estudante','🎭','Peça de teatro','O curso de teatro precisa de um figurante. Você foi escolhido pra ser "a árvore número 3".','Aceitar','Recusar',
 ['+|Foi a árvore mais elogiada da peça. Ganhou aplausos.|+50 >3','-|Esqueceu a fala (era "ô") e travou.|-0 <2','-|Caiu do palco e todos riram.|-0 <2'],
 ['-|O diretor te chamou de "covarde".|-0 <1','+|Ficou na plateia e foi aplaudido por rir alto.|+0 >1','-|Perdeu a chance de ficar famoso.|-0']);
SIT('estudante','🧪','Feira de ciências','Você apresenta um projeto na feira de ciências: "como transformar café em energia". O prêmio é R$ 500.','Apresentar','Desistir',
 ['+|O projeto ganhou o 1º lugar e R$ 500.|+500 >3','-|O experimento explodiu e sujou o professor.|-100 <2','-|Ninguém entendeu e você ficou em último.|-0 <2'],
 ['-|Desistiu e um colega ganhou com uma ideia parecida.|-0 <2','+|Ficou tranquilo e curtiu a feira.|+0 >1','-|O professor te zoou.|-0']);
SIT('estudante','🎓','Orientador sumido','Seu orientador sumiu há 2 meses. O prazo do TCC acaba amanhã.','Procurar o orientador','Escrever sozinho',
 ['+|Achou o orientador num bar e ele assinou tudo.|+0 >3','-|Achou, mas ele estava de licença.|-0 <2','-|O orientador te chamou de "maluco".|-0 <1'],
 ['+|Escreveu em 12 horas e tirou 9.|+100 >3','-|Dormiu e perdeu o prazo.|-0 <3','-|O TCC saiu cheio de erros.|-0 <2']);
SIT('estudante','🖨️','Impressora quebrada','A impressora do campus quebrou. Você tem que entregar o trabalho em 10 minutos.','Procurar outra','Entregar à mão',
 ['+|Achou uma impressora funcionando e entregou a tempo.|+0 >2','-|Todas estavam quebradas. Perdeu o prazo.|-0 <2','-|Pagou R$ 15 numa copiadora.|-15'],
 ['-|A letra era ilegível. O professor deu 4.|-0 <2','+|O professor achou "artístico" e deu 8.|+0 >2','-|Chuva molhou o papel.|-0 <1']);
SIT('estudante','🧃','Máquina de refrigerante','A máquina de refrigerante do campus só aceita moedas de R$ 1. Você só tem notas.','Pedir troco','Ir embora com sede',
 ['+|Um colega te deu o troco e você bebeu em paz.|+0 >1','-|Ninguém tinha. Passou 20 minutos procurando.|-0 <1','-|A máquina engoliu sua moeda.|-1'],
 ['-|Passou mal de calor e perdeu a aula.|-0 P','+|Achou uma máquina melhor e tomou um suco.|+0 >2','-|Beijou a máquina e ela deu choque.|-0 <1']);
SIT('estudante','🏀','Time da faculdade','O time de basquete da faculdade precisa de um jogador. Você tem 1,65 m.','Entrar no time','Torcer da arquibancada',
 ['+|Fez 3 pontos e ganhou o apelido de "Sniper".|+0 >3','!|Foi atingido por uma bolada na cabeça.|-60 <2','-|Perdeu a bola 12 vezes e saiu vaiado.|-0 <2'],
 ['+|Torceu tanto que ganhou a "faixa de torcedor do ano".|+30 >2','-|Perdeu a voz.|-0 P','-|O time perdeu e a culpa foi sua.|-0 <1']);
SIT('estudante','🍔','Lanche do bandejão','O bandejão serve hambúrguer. Todo mundo sabe que a carne é "de origem misteriosa".','Comer','Trazer marmita',
 ['+|O hambúrguer era ótimo. Valeu cada centavo.|+0 >1','-|Passou mal e perdeu a prova da tarde.|-0 P','-|O hambúrguer veio sem pão.|-0 <1'],
 ['+|A marmita da mãe foi um sucesso.|+0 >2','-|A marmita caiu na mochila.|-0 <1','-|Todos riram da sua marmita de arroz com ovo.|-0']);
SIT('estudante','🚌','Ônibus universitário','O ônibus do campus quebrou. A próxima aula é em 15 minutos.','Pedir carona','Correr',
 ['+|Um colega deu carona e você chegou a tempo.|+0 >3','-|O colega era perigoso e dirigiu a 140 km/h.|-0 <2','-|Chegou e a aula já tinha acabado.|-0 <1'],
 ['+|Correu e chegou suado mas a tempo.|+0 >2','!|Torceu o pé na corrida.|-40 <2','-|Perdeu o celular na corrida.|-200']);
SIT('estudante','📱','Grupo de WhatsApp','O grupo de WhatsApp da turma tem 400 mensagens por hora. Você silenciou. Era a mensagem sobre a prova.','Ler tudo','Ignorar',
 ['+|Achou a informação da prova em 20 minutos.|+0 >2','-|Leu tudo e ficou sem tempo pra estudar.|-0 <1','-|A mensagem era "prova adiada" mas você nem viu.|-0 <1'],
 ['-|Perdeu a prova por não saber da data.|-0 <3','+|Ficou tranquilo e foi à prova por sorte.|+0 >2','-|Seu colega te mandou um áudio de 3 minutos.|-0']);
SIT('estudante','🥘','Jantar na república','Hoje é seu dia de cozinhar. Você só sabe fazer miojo. Os colegas esperam um banquete.','Cozinhar um banquete','Fazer miojo',
 ['+|O banquete ficou ótimo e você virou chef da casa.|+0 >3','-|Queimou tudo e o alarme disparou.|-100','-|Faltou sal e ninguém comeu.|-0 <1'],
 ['+|O miojo "gourmet" fez sucesso.|+0 >2','-|Os colegas te zoaram por semanas.|-0 <1','-|Derramou o miojo no chão.|-0']);
SIT('estudante','🛌','Dormir na aula','A aula é chata e você dorme profundamente. O professor chama seu nome.','Acordar sem graça','Fingir que tá estudando',
 ['+|Respondeu certo por acaso. Todo mundo aplaudiu.|+0 >3','-|Respondeu errado e todos riram.|-0 <2','-|Babou no caderno do vizinho.|-0 <1'],
 ['+|O professor achou que você tava concentrado.|+0 >2','-|Foi descoberto e levou advertência.|-0 <2','-|O professor pediu pra você ler a resposta em voz alta.|-0 <1']);
SIT('estudante','🎤','Seminário no pânico','O seminário é daqui a 5 minutos. Você não preparou nada. O grupo olha pra você.','Improvisar','Fingir passar mal',
 ['+|O professor adorou sua "criatividade" e deu 10.|+100 >3','-|Disse uma bobagem e todo mundo riu.|-0 <2','-|Esqueceu o assunto e travou.|-0 <2'],
 ['-|O grupo te chamou de covarde.|-0 <1','+|Foi levado pra enfermaria e passou a vez.|+0 >1','-|O professor desconfiou.|-0 <1']);
