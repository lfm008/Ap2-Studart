// ======= GERAIS 2: vizinhança, família, trabalho, dinheiro, tecnologia =======
SIT('*','🏢','Síndico no elevador','O síndico te pega no elevador e começa a falar do barulho do seu cachorro.','Pedir desculpas','Rebater na hora',
 ['+|Ele se comoveu e disse "vamos esquecer".|+0 >2','-|Ele falou por 15 andares. Você chegou murcho.|-0 P','-|Ele te multou assim mesmo por "tom de voz".|-80'],
 ['-|Ele te chamou de "insolente" e te multou em dobro.|-160','+|Ele recuou e pediu desculpa.|+0 >2','-|O elevador travou e vocês ficaram presos 1 hora.|-0 P']);
SIT('*','🎵','Vizinho cantor','O vizinho de cima ensaia ópera às 6h da manhã. Todo dia. Ele é péssimo.','Bater no teto','Gravar e postar',
 ['-|Ele cantou mais alto de raiva.|-0 <1','+|Ele se envergonhou e parou. Ganhou 1 hora de paz.|+0 >1','-|Ele desceu e te chamou pra brigar.|-0 <2'],
 ['+|O vídeo viralizou e ele foi contratado por um teatro. Foi embora!|+0 >3','-|Ele descobriu e te processou.|-150','-|O vídeo bombou e você virou "o vizinho chato".|-0 <1']);
SIT('*','🐕','Cocô no corredor','Alguém deixou um presente canino no corredor do prédio. Todo mundo acusa o vizinho do 302.','Limpar e ficar quieto','Descobrir o culpado',
 ['+|O vizinho do 302 percebeu e te deu um bolo de agradecimento.|+10 >1','-|Era o seu cachorro. Você limpou aterrorizado.|-0 <1','-|Pisou nele na hora de limpar.|-20'],
 ['+|Descobriu pelas câmeras e todo mundo te aplaudiu.|+0 >2','-|O culpado era o síndico e você virou persona non grata.|-0 <2','-|As câmeras estavam quebradas.|-0 P']);
SIT('*','🎉','Festa do vizinho','O vizinho faz festa até as 4h. A música é "o pior do axé de 2003".','Reclamar','Entrar na festa',
 ['-|Ele te chamou pra beber e você aceitou. Dia seguinte, ressaca.|-0 P','+|Ele baixou o volume e agradeceu.|+0 >1','-|Ele aumentou o volume em sinal de protesto.|-0 <1'],
 ['+|A festa era ótima e você virou o "vizinho legal".|+0 >3','-|Derramaram cerveja no seu celular.|-250','-|A polícia chegou e levou todo mundo.|-100 P']);
SIT('*','🌳','Árvore no quintal','Uma árvore do vizinho invadiu seu quintal e derruba mangas todo dia.','Comer as mangas','Cortar os galhos',
 ['+|As mangas eram deliciosas. Você virou "o cara das mangas".|+0 >2','-|Uma manga caiu na sua cabeça. Galo.|-30 <1','-|O vizinho cobrou "royalties" pelas mangas.|-60'],
 ['-|O vizinho te processou por "crime ambiental".|-200','+|Cortou e ele nem notou.|+0 >1','!|Caiu da escada durante o corte.|-80 <2']);
SIT('*','🚗','Vaga na garagem','Alguém estacionou na sua vaga. De novo. Dessa vez é um carro enorme.','Deixar bilhete','Chamar o guincho',
 ['+|O motorista pediu desculpas e te deu um chocolate.|+0 >1','-|Ele rasgou o bilhete e riu da sua cara.|-0 <1','-|Ele deixou outro bilhete mais ofensivo.|-0'],
 ['-|O carro era do síndico. Multa pra você.|-200','+|O guincho levou o carro e o dono te pagou um chope.|+30 >2','-|O guincho errou o carro e levou o seu.|-300 <2']);
SIT('*','🛗','Elevador quebrado','Você mora no 12º andar e o elevador pifou. A pizza tá chegando.','Subir de escada','Esperar o conserto',
 ['+|Chegou ao topo e se sentiu um atleta olímpico.|+0 >2','!|Torceu o tornozelo na escada escura.|-50 <2','-|Chegou sem fôlego e a pizza esfriou.|-0 P'],
 ['-|Esperou 3 horas. O técnico nem apareceu.|-0 P','+|O elevador voltou 5 minutos depois.|+0 >1','-|Dormiu no saguão e perdeu o dia.|-0 <2']);
SIT('*','🏠','Vazamento no teto','Um vazamento no teto do banheiro. A mancha parece o mapa do Brasil.','Chamar o encanador','Tapar com fita',
 ['+|O encanador era honesto e cobrou só R$ 80.|+0 >2','-|Cobrou uma fortuna por trocar um cano que custa quase nada.|-400','-|Ele esqueceu a ferramenta e foi buscar. Demorou 4 horas.|-0 P'],
 ['-|A fita não aguentou. Inundou o banheiro.|-250','+|A fita segurou. Milagre de 3 meses.|+0 >1','-|O vizinho de baixo reclamou da mancha.|-80']);
SIT('*','🔌','Curto-circuito','Você ligou o ar-condicionado e a casa inteira ficou no escuro.','Chamar o eletricista','Mexer no quadro',
 ['+|O eletricista era vizinho e cobrou só uma cerveja.|+0 >2','-|Cobrou uma fortuna e trocou um fusível de centavos.|-300','-|Ficou 5 horas sem luz esperando.|-0 P'],
 ['!|Levou um choque que te deixou cabelo em pé por 1 hora.|-60 P','+|Resolveu sozinho e ficou herói da casa.|+0 >2','-|Queimou o quadro e piorou tudo.|-350']);
SIT('*','🐜','Formigas na cozinha','Uma fila de formigas invade sua cozinha. Elas parecem organizadas.','Matar com veneno','Fazer amizade com elas',
 ['+|O veneno funcionou e a cozinha ficou limpa.|+0 >1','-|O veneno afetou o cachorro e você levou 2 horas no veterinário.|-120 P','-|As formigas voltaram com reforço.|-0 <1'],
 ['+|As formigas viraram "inquilinas" e te ajudam a limpar migalhas.|+0 >2','-|Elas comeram todo o açúcar e deixaram um bilhete (juro).|-30','-|Uma picou seu pé. Dor por 2 dias.|-0 P']);
SIT('*','🧺','Varal compartilhado','Seu vizinho usa seu varal sem pedir. Hoje ele pendurou a cueca dele no seu lugar.','Tirar a cueca','Pendurar a sua em cima',
 ['+|Ele pediu desculpas e agradeceu.|+0 >1','-|Ele viu e te chamou de "invasivo".|-0 <1','-|A cueca voou e foi parar no vizinho do lado.|-0'],
 ['-|Vocês brigaram por 3 horas. A cueca voou.|-0 <2','+|Ele riu e vocês fizeram as pazes.|+0 >2','-|O vento levou as duas e a rua virou meme.|-0']);
SIT('*','🧼','Máquina de lavar quebrada','A máquina de lavar pifou e você tem uma pilha de roupa do tamanho do Pão de Açúcar.','Ir na lavanderia','Lavar à mão',
 ['+|A lavanderia tava em promoção e você saiu com tudo limpo.|+0 >2','-|Cobraram R$ 120 por 3 camisas.|-120','-|A lavanderia perdeu sua meia favorita.|-0 <1'],
 ['!|Passou 4 horas lavando e as costas viraram 3.|-0 P','+|Lavou tudo e ficou orgulhoso.|+0 >1','-|Trocou o sabão errado e as roupas ficaram duras.|-30']);
SIT('*','📺','TV no jogo decisivo','A TV pifa no minuto 85 do jogo do seu time. Empate.','Ir ao bar vizinho','Ouvir no rádio',
 ['+|O bar tinha TV e seu time ganhou de virada.|+0 >3','-|Chegou no 90º minuto. Perdeu o gol e a cerveja.|-30 <1','-|O bar estava lotado e você viu tudo de costas.|-0'],
 ['+|O rádio narrou o gol com emoção e você chorou.|+0 >2','-|O rádio chiou e você nem soube o resultado.|-0 <1','-|O vizinho gritou "gol" antes e estragou a surpresa.|-0']);
SIT('*','📡','Internet caiu','A internet caiu na hora da reunião. O técnico diz "chegamos em 3 dias úteis".','Tirar o roteador da tomada','Ligar pra operadora',
 ['+|Voltou do nada e você salvou a reunião.|+0 >2','-|Não voltou e você perdeu o emprego do dia.|-100 P','-|Quebrou o roteador sem querer.|-150'],
 ['-|Ficou 2 horas na espera ouvindo música de elevador.|-0 P','+|A atendente era gente fina e resolveu em 5 minutos.|+0 >2','-|A operadora cobrou "taxa de reparo".|-90']);
SIT('*','🔋','Celular sem bateria','O celular morre na hora que você precisa de um Uber. Está longe de casa.','Pedir carregador emprestado','Procurar tomada pública',
 ['+|Um estranho gentil te emprestou o carregador e uma cerveja.|+0 >2','-|O carregador era de outra marca. Nada funcionou.|-0 <1','-|Pediu a 8 pessoas. Todas negaram.|-0 P'],
 ['+|Achou uma tomada e carregou 40%.|+0 >2','-|A tomada era falsa e deu choque.|-30 <1','-|Todas esestavam ocupadas por outros viciados.|-0']);
SIT('*','💻','Notebook com vírus','Seu notebook começou a mostrar anúncios de "mulheres lindas na sua região". Todas de 70 anos.','Chamar um técnico','Formatar sozinho',
 ['+|O técnico resolveu e ainda recuperou suas fotos.|+0 >2','-|Cobrou R$ 350 e deu uma palestra sobre antivírus.|-350','-|O técnico viu suas fotos e fez piada.|-0 <1'],
 ['+|Formatou e ficou novo.|+0 >2','-|Perdeu todos os arquivos, inclusive o TCC.|-0 <3','-|O notebook travou e não ligou mais.|-300']);
SIT('*','🎮','Torneio de videogame online','Seu amigo te chamou pra um torneio online. Prêmio: R$ 500 e a honra.','Jogar','Assistir',
 ['+|Ganhou o torneio! O amigo te chamou de "ídolo".|+500 >3','-|Perdeu na primeira rodada e xingou o controle.|-30 <1','-|A internet caiu e você foi desclassificado.|-0 <2'],
 ['+|Assistiu e aprendeu 3 truques.|+0 >1','-|Gritou demais e o vizinho chamou a polícia.|-100','-|Dormiu no meio e perdeu o final.|-0']);
SIT('*','📱','App de relacionamento','Um match perfeito te chama pra sair. Foto linda, bio criativa. Algo parece suspeito.','Aceitar o encontro','Pedir uma chamada de vídeo',
 ['+|A pessoa era real e a noite foi ótima.|+0 >3','-|Era golpe. Pediu dinheiro emprestado já no primeiro encontro.|-200','-|Era seu primo com perfil falso, pra brincar.|-0 <2'],
 ['+|A chamada confirmou que era real. Que alívio!|+0 >2','-|A pessoa recusou e sumiu.|-0 <1','-|A pessoa era um robô e bloqueou você.|-0']);
SIT('*','🛒','Compra online','Você comprou um tênis por R$ 99. O site parecia confiável. O frete era de R$ 80.','Esperar a entrega','Reclamar no Procon',
 ['+|O tênis chegou, era bom e barato.|+0 >2','-|O tênis chegou 2 tamanhos menor, de papelão.|-179','-|A entrega nunca chegou.|-179'],
 ['+|O Procon resolveu e devolveram tudo mais indenização.|+100 >2','-|O Procon marcou audiência pra daqui 6 meses.|-0 P','-|O site fechou e sumiu com o dinheiro.|-179']);
SIT('*','🏧','Caixa eletrônico','O caixa eletrônico engoliu seu cartão. O banco só abre amanhã.','Esperar o banco','Chamar o 0800',
 ['+|O gerente devolveu o cartão e te deu um brinde.|+0 >2','-|O cartão foi bloqueado e você ficou sem dinheiro.|-0 P','-|O gerente cobrou "taxa de resgate".|-50'],
 ['-|Ficou 40 minutos na linha. A ligação caiu.|-0 <1','+|O atendente liberou o cartão por telefone.|+0 >2','-|Cobraram R$ 25 por "ligação premium".|-25']);
SIT('*','🏦','Gerente do banco','O gerente do banco oferece "um investimento seguro com retorno de 300%". Ele sorri demais.','Investir R$ 500','Recusar',
 ['-|Era uma pirâmide. Perdeu tudo.|-500','+|Rendeu mesmo! Ele tava falando sério.|+300 >2','-|Rendeu 0,5%. O gerente ganhou 5%.|-0 <1'],
 ['+|Ficou esperto e salvou o dinheiro.|+0 >2','-|O gerente ficou ofendido e travou seu cartão.|-0 <1','-|Soube depois que o investimento deu certo pra todo mundo.|-0']);
SIT('*','🏪','Mercadinho de bairro','O dono do mercadinho te oferece fiado, mas com juros "de amigo": 20% ao mês.','Aceitar o fiado','Pagar à vista',
 ['-|Os juros engoliram seu salário. Dívida eterna.|-150','+|Ele esqueceu de cobrar e você economizou.|+50 >1','-|Ele colocou seu nome no caderno de devedores.|-0 <1'],
 ['+|Ganhou um desconto por pagar à vista.|+20 >1','-|O dono ficou ofendido: "você não confia em mim?".|-0 <1','-|A máquina de cartão estava fora do ar.|-0']);
SIT('*','🚪','Porta quebrada','A porta de casa emperrou. Você não consegue sair.','Chamar o chaveiro','Arrombar',
 ['+|O chaveiro chegou rápido e cobrou barato.|+0 >2','-|O chaveiro cobrou R$ 400 pra mexer em um parafuso.|-400','-|O chaveiro nunca apareceu.|-0 P'],
 ['!|Arrombou a porta e machucou o ombro.|-80 <2','+|Arrombou e ainda achou uma moeda atrás da porta.|+10 >1','-|A porta quebrou de vez e agora precisa de uma nova.|-250']);
SIT('*','🪟','Janela quebrada','Uma bola de futebol quebrou sua janela. As crianças fugiram.','Procurar o culpado','Consertar sozinho',
 ['+|Achou o culpado, que pagou tudo e ainda pediu desculpas.|+100 >2','-|O culpado era o filho do síndico. Você ficou com o prejuízo.|-150','-|As crianças viraram "fantasmas" e sumiram.|-0 <1'],
 ['-|O vidro novo custou R$ 200 e você se cortou colocando.|-200 <1','+|Consertou com fita e ficou "obra de arte".|+0 >1','!|Cortou o dedo e foi pra UPA.|-60 P']);
SIT('*','🔥','Churrasco na calçada','Seu vizinho acendeu um fogo na calçada pra fazer churrasco. A fumaça entra na sua casa.','Reclamar','Pedir um espetinho',
 ['-|Ele ignorou e fez mais fumaça.|-0 <1','+|Ele apagou e pediu desculpa.|+0 >1','-|Ele te deu uma bronca por "frescura".|-0'],
 ['+|Ganhou um espetinho e uma cerveja. Virou parceiro.|+0 >2','-|O espetinho era de gato (brincadeira). Passou mal.|-30 P','-|Ele disse "só pra quem trouxe carne".|-0']);
SIT('*','🎤','Karaokê do vizinho','O vizinho tem um karaokê e canta toda sexta. A voz dele é uma mistura de gato e motosserra.','Cantar junto','Pedir silêncio',
 ['+|Cantou tão mal que ele se sentiu bem. Vocês viraram dupla.|+0 >2','-|Cantou mais alto e acordaram o prédio.|-0 <1','-|O prédio te chamou de "dupla de pesadelo".|-0'],
 ['-|Ele se ofendeu e cantou mais alto.|-0 <1','+|Ele parou e agradeceu: "ninguém nunca disse".|+0 >2','-|Ele te processou por "crime contra a arte".|-100']);
SIT('*','🍰','Bolo da vizinha','A vizinha te deu um bolo "de limão" que tem gosto de sabão.','Comer e elogiar','Devolver sem comer',
 ['+|Ela adorou o elogio e te deu outro bolo (de verdade).|+0 >2','-|Passou mal e foi pro banheiro.|-30 P','-|Ela te perguntou a receita e você mentiu.|-0 <1'],
 ['-|Ela chorou e jurou nunca mais falar com você.|-0 <2','+|Ela ficou envergonhada e prometeu melhorar.|+0 >1','-|Todo o prédio ficou sabendo.|-0']);
SIT('*','🐕','Cachorro latindo','O cachorro do vizinho late a noite toda. Você não dorme há 3 dias.','Conversar com o dono','Treinar o cachorro',
 ['+|O dono ficou envergonhado e comprou um tapa-ouvido pro bicho.|+0 >2','-|O dono disse "ele é sensível".|-0 P','-|O dono te acusou de "perseguir o cachorro".|-0 <1'],
 ['+|O cachorro aprendeu e virou seu amigo.|+0 >2','!|O cachorro te mordeu na mão.|-70 P','-|O cachorro trouxe todos os amigos pra latir.|-0 <1']);
SIT('*','🐈','Gato na laje','Um gato invadiu sua laje e tomou conta. Ele te olha como se você fosse o intruso.','Tirar o gato','Deixar o gato',
 ['-|O gato te arranhou e fugiu levando seu sanduíche.|-30 <1','+|O gato se foi e deixou um "presente" (um rato).|+0 >1','-|Outros 5 gatos apareceram em protesto.|-0 <2'],
 ['+|O gato virou seu mascote e rendeu 3 mil seguidores.|+50 >2','-|O gato dormiu no seu travesseiro.|-0 P','-|O gato trouxe a família toda.|-0 <1']);
SIT('*','🐦','Pombo no parapeito','Um pombo faz ninho no seu parapeito. Os ovos estão quase eclodindo.','Tirar o ninho','Deixar',
 ['-|O pombo atacou seu rosto e você virou meme.|-0 <1','+|O pombo se mudou e deixou um bilhete (de cocô).|+0 >1','-|A prefeitura te multou por "crime ambiental".|-100'],
 ['+|Os pombinhos nasceram e você ficou famoso no prédio.|+20 >2','-|Os pombinhos fizeram a maior sujeira da sua vida.|-60','-|A mãe pombo invadiu sua cozinha.|-0 <1']);
SIT('*','🐢','Tartaruga perdida','Uma tartaruga atravessa a avenida lentamente. Os carros buzinam.','Salvar a tartaruga','Filmar',
 ['+|A tartaruga foi pra um lugar seguro e você virou herói.|+0 >2','!|Um carro quase te atropelou.|-60 <2','-|A tartaruga te mordeu. Dedo roxo.|-30'],
 ['+|O vídeo viralizou e te rendeu 5 mil curtidas.|+30 >2','-|A tartaruga foi atropelada. Culpa na consciência.|-0 <2','-|Foi acusado de "crueldade animal" por não ajudar.|-0 <1']);
SIT('*','🦜','Papagaio xingão','Um papagaio no ponto de ônibus xinga todo mundo em voz alta.','Dar uma bronca nele','Ensinar mais palavrões',
 ['+|Ele se calou e todo mundo agradeceu.|+0 >1','-|Ele xingou sua mãe. E o prefeito.|-0 <1','-|O dono apareceu e te deu uma bronca.|-0'],
 ['+|Ficou famoso por ensinar o papagaio. Vendeu a ideia por R$ 200.|+200 >2','-|O papagaio xingou o dono e você foi culpado.|-100','-|O papagaio foi preso (juro).|-0 <2']);
SIT('*','🏀','Pelada no condomínio','A pelada no condomínio é todo domingo. Hoje você quebrou o vaso da síndica.','Assumir','Fugir',
 ['+|Ela perdoou: era um vaso de plástico.|+0 >2','-|O vaso era antigo e valia R$ 800.|-800','-|Ela te multou e te proibiu de jogar.|-100 <1'],
 ['-|Ela viu pelas câmeras e te chamou de "covarde".|-150 <1','+|Ninguém viu e você escapou.|+0 >2','-|Seu amigo te dedurou por um chope.|-100']);
SIT('*','🛼','Patins na orla','Você alugou patins na orla. Faz 10 anos que não patina. A ciclovia é uma ladeira.','Arriscar','Andar de pé',
 ['+|Deslizou como um profissional e ganhou aplauso.|+0 >3','!|Caiu de bunda e ralou os cotovelos.|-50 <2','-|Bateu num poste e quebrou o patins.|-90'],
 ['+|Andou com calma e curtiu a vista.|+0 >1','-|Todo mundo te olhou como se fosse uma criança.|-0 <1','-|Perdeu um tênis e ficou descalço.|-30']);
SIT('*','🏄','Aula de stand-up paddle','O instrutor promete que você vai ficar de pé em 5 minutos. A prancha é instável.','Tentar','Pedir mais uma aula',
 ['+|Ficou de pé e se sentiu um deus do mar.|+0 >3','!|Caiu na água e engoliu meio litro.|-30 <1','-|Perdeu o remo no mar.|-60'],
 ['-|Pagou R$ 150 e aprendeu só a cair.|-150','+|Ficou de pé no segundo dia. Campeão!|+0 >2','-|O instrutor te zoou na frente da turma.|-0 <1']);
SIT('*','🥾','Trilha no Corcovado','A trilha parece um desafio olímpico. O guia diz "é fácil".','Fazer a trilha','Pegar o trem',
 ['+|Chegou ao topo e viu o Rio inteiro. Lágrimas de emoção.|+0 >3','!|Torceu o tornozelo no meio da subida.|-60 <2','-|Perdeu o celular na mata.|-250'],
 ['+|O trem foi tranquilo e você viu a paisagem de graça.|+0 >2','-|O trem tava lotado. Ficou em pé 40 minutos.|-0 <1','-|O trem quebrou no meio.|-0 P']);
SIT('*','🎢','Parque de diversões','Você quer andar na montanha-russa, mas o brinquedo tem 40 anos e um barulho estranho.','Entrar','Ficar de fora',
 ['+|Foi o melhor passeio da vida. Gritou até ficar rouco.|+0 >3','!|O carrinho travou no meio e você ficou de cabeça pra baixo por 20 min.|-40 P','-|Perdeu o celular e o sapato no brinquedo.|-200'],
 ['+|Comeu algodão-doce e ficou feliz.|+0 >1','-|Seus amigos zoaram você por semanas.|-0 <1','-|Passou mal de tanto algodão-doce.|-0 P']);
SIT('*','🎭','Teatro na praça','Uma peça de rua pede um voluntário. Você se esconde atrás de um poste.','Se esconder','Se voluntariar',
 ['+|Ficou escondido e saiu ileso.|+0 >1','-|Foi descoberto e levado ao palco pelos atores.|-0 <1','-|O poste era um ator disfarçado. Susto.|-0'],
 ['+|Foi o ponto alto do espetáculo. Ganhou aplausos.|+30 >2','-|Fez papel de ridículo e virou meme.|-0 <2','-|Esqueceu o texto e travou.|-0 <1']);
SIT('*','🎨','Artista de rua','Um artista pinta retratos a R$ 30. Ele te chama: "vem, que eu te deixo lindo".','Posar','Recusar',
 ['+|O retrato ficou incrível e você pendurou na sala.|+0 >2','-|Ficou horroroso. Parecia uma caricatura cruel.|-30','-|Ele cobrou R$ 90 porque "tinha detalhes demais".|-90'],
 ['-|Ele ficou ofendido e pintou seu rosto numa parede.|-0 <1','+|Ele sorriu e te deu um desenho de graça.|+0 >1','-|Ele te seguiu por 3 quarteirões.|-0']);
SIT('*','🎻','Violinista no metrô','Um violinista toca "Despacito" no metrô. Todo mundo olha pra você.','Dar uma moeda','Aplaudir',
 ['+|Ele tocou sua música favorita e você sorriu.|+0 >1','-|Ele pediu mais e você deu R$ 10.|-10','-|Ele olhou feio por ter dado só R$ 1.|-0 <1'],
 ['+|O metrô todo aplaudiu. Foi um momento mágico.|+0 >2','-|O violino desafinou e o metrô riu.|-0','-|O trem chegou e interrompeu o show.|-0 <1']);
SIT('*','📷','Fotógrafo lambe-lambe','Um fotógrafo antigo tira fotos 3x4 na praça. A máquina tem 80 anos.','Tirar uma foto','Recusar',
 ['+|A foto ficou ótima e você usou no documento.|+0 >1','-|A foto saiu com um olho fechado e a boca aberta.|-15','-|A máquina travou e você pagou por nada.|-15'],
 ['+|Ele te deu uma foto de graça pela simpatia.|+0 >1','-|Ele se ofendeu e ficou 1 hora te olhando.|-0 <1','-|Alguém tirou foto de você sem perceber.|-0']);
SIT('*','🎬','Cinema de rua','Um cinema de rua passa um filme de terror. A tela é uma lona e o som é de um rádio.','Assistir até o fim','Ir embora',
 ['+|O filme era ruim, mas a experiência foi ótima.|+0 >2','-|Uma barata passou e você gritou.|-0 <1','-|Choveu no meio e todos correram.|-0 P'],
 ['+|Foi tomar um sorvete e se divertiu mais.|+0 >1','-|Na saída foi seguido por um cachorro.|-0 <1','-|Perdeu o ônibus por ter saído mais cedo.|-0']);
SIT('*','🎊','Festa junina','A festa junina tem quadrilha, pescaria e uma barraca de "beijo". A fila do beijo é imensa.','Entrar na fila do beijo','Jogar pescaria',
 ['+|O beijo foi simpático e você ficou famoso.|+0 >2','-|Foi beijado por quem não esperava.|-0 <1','-|Foi pago R$ 5 e o beijo era de beijoqueiro profissional.|-5'],
 ['+|Pescou um prêmio de R$ 100.|+100 >1','-|Pescou uma meia e um bilhete: "tente de novo".|-0 <1','-|Caiu na água do tanque.|-0']);
SIT('*','🎄','Amigo oculto de família','O amigo oculto da família tem preço mínimo de R$ 100. Você tirou a tia que reclama de tudo.','Dar um presente caro','Dar um presente de R$ 20',
 ['+|A tia amou e te deu um abraço de 3 minutos.|+0 >1','-|A tia disse "tem etiqueta ainda" e te devolveu.|-100','-|A tia reclamou da cor.|-100'],
 ['-|A tia chamou todo mundo e declarou que você é "pão-duro".|-0 <2','+|A tia riu e disse "criativo".|+0 >1','-|Ela devolveu na frente de todo mundo.|-20']);
SIT('*','🎅','Papai Noel falso','O Papai Noel do shopping tá visivelmente bêbado. As crianças estão assustadas.','Chamar o segurança','Tirar foto com ele',
 ['+|O segurança levou ele pra dormir e ganhou um bônus.|+0 >2','-|O Papai Noel te xingou e deu um soco de brinquedo.|-0 <1','-|O segurança era o filho dele.|-0'],
 ['+|A foto viralizou: "O Papai Noel mais honesto do Brasil".|+100 >2','-|Ele vomitou em você.|-50 <2','-|Foi pego em flagrante pela câmera de segurança.|-0']);
SIT('*','🎆','Fogos de réveillon','Você comprou fogos pra comemorar. A instrução diz "mantenha distância". Você ignora.','Acender com cuidado','Acender de qualquer jeito',
 ['+|Os fogos foram lindos e você virou celebridade.|+0 >2','!|Um fogo voltou e queimou a sobrancelha.|-40 <1','-|A vizinha chamou os bombeiros.|-100'],
 ['!|Um fogo explodiu na sua mão.|-120 P','+|Foi um espetáculo e todo mundo aplaudiu.|+0 >2','-|Queimou o varal e a roupa do vizinho.|-300']);
SIT('*','🎁','Presente de Natal','Você ganhou um presente sem nome. Pode ser o presente da vida… ou uma meia.','Abrir','Devolver',
 ['+|Era um relógio de verdade. Alguém te ama.|+150 >2','-|Era uma meia com um bilhete: "tente de novo".|-0 <1','-|Era um vale-desconto vencido.|-0'],
 ['-|Nunca descobriu o remetente. Ficou com a dúvida.|-0 <1','+|O remetente apareceu e te deu um abraço.|+0 >1','-|O presente era seu e você nem sabia.|-0']);
