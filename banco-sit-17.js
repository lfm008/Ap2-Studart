// ======= POR CLASSE (parte 5): crime, lei, estudante, alta, alto, baixa/média =======
SIT('crime','🎬','Série sobre o morro','Uma produtora quer gravar uma série no morro. O chefe pede "controle de imagem". Você é o assessor.','Autorizar','Negar',
 ['+|A série bombou e o chefe te deu uma comissão.|+800 >3','-|A série mostrou o chefe de cueca.|-500 <3','-|A produtora pediu "mais realismo" e você apanhou.|-300 <2'],
 ['-|A produtora gravou escondido.|-500 <2','+|Negou e o chefe te elogiou.|+200 >2','-|A série foi pra outro morro.|-0 <3']);
SIT('crime','🛵','Mototáxi do chefe','O chefe tem uma frota de mototáxis. Um motorista cobra R$ 100 de uma criança. Você viu.','Denunciar ao chefe','Ignorar',
 ['+|O chefe puniu o motorista e te agradeceu.|+300 >3','-|O chefe disse "o motorista é meu primo".|-0 <3','-|Você foi chamado de "dedo-duro".|-300 <2'],
 ['-|A criança contou pra mãe e virou escândalo.|-0 <3','+|Ninguém notou.|+0 >2','-|O chefe soube e te cobrou.|-300 <2']);
SIT('crime','🍺','Cerveja do morro','O chefe monta uma fábrica de cerveja artesanal. Você é o degustador. A primeira cerveja tem cheiro de sabão.','Elogiar','Ser sincero',
 ['+|O chefe amou o elogio e te deu um bônus.|+300 >3','-|O chefe percebeu a mentira.|-300 <2','-|A cerveja fez mal e você ficou doente.|-0 P'],
 ['+|O chefe ouviu e melhorou a receita.|+500 >3','-|O chefe te mandou embora.|-300 <3','-|Ele te obrigou a beber 5.|-0 P']);
SIT('crime','🚁','Helicóptero sobre o morro','Um helicóptero da polícia sobrevoa o morro. O chefe te manda "desviar a atenção".','Soltar fogos','Acenar',
 ['+|O helicóptero foi pro lado errado.|+300 >3','-|Os fogos revelaram a posição.|-1000 P','-|Ficaram 3 horas em alerta.|-0 <2'],
 ['+|O helicóptero achou graça e foi embora.|+0 >2','-|A polícia entendeu como "deboche".|-500 <3','-|Todos riram.|-0 <1']);
SIT('crime','🏫','Escola do morro','O chefe quer reformar a escola do morro. Mas a prefeitura exige "documentação".','Falsificar','Fazer certo',
 ['+|A reforma foi aprovada e virou notícia.|+800 >3','-|A prefeitura descobriu.|-2000 P','-|A escola caiu.|-3000 <3'],
 ['+|Todos os papéis foram aprovados.|+500 >3','-|Demorou 4 anos.|-0 <3','-|A prefeitura perdeu os papéis.|-0 <2']);
SIT('crime','🥁','Samba-enredo','A escola de samba do morro quer homenagear o chefe com um samba-enredo. Você escreve a letra.','Escrever um elogio','Escrever uma crítica',
 ['+|O samba ficou lindo e o chefe chorou.|+500 >3','-|Exagerou e o chefe achou "constrangedor".|-0 <2','-|A letra foi roubada por outra escola.|-0 <3'],
 ['-|O chefe leu e te expulsou.|-1500 <3','+|O chefe achou "honesto" e te promoveu.|+500 >3','-|A letra vazou.|-500 <2']);
SIT('crime','🛒','Mercadinho do morro','O dono do mercadinho do morro te pede "proteção". Ele diz "tenho medo da concorrência".','Dar proteção','Recusar',
 ['+|O dono te deu 10% do lucro.|+200 >3','-|A "concorrência" era sua mãe.|-0 <2','-|A polícia descobriu.|-500 P'],
 ['-|O dono chorou e ficou sem proteção.|-0 <2','+|O dono achou outra solução.|+0 >2','-|A concorrência cresceu.|-0 <2']);
SIT('crime','📱','Celular com informações','Você perde seu celular. Ele tem informações do esquema inteiro. Alguém o achou.','Procurar','Apagar remotamente',
 ['+|Achou o celular e o ladrão era seu primo.|+0 >3','-|O ladrão vendeu pra polícia.|-3000 P','-|Perdeu o celular pra sempre.|-500'],
 ['+|Apagou tudo a tempo.|+0 >3','-|O backup foi encontrado.|-1500 P','-|Perdeu todos os contatos.|-0 <3']);
SIT('crime','📖','Livro sobre o morro','Um escritor quer escrever um livro sobre o morro. Ele te pede uma "entrevista exclusiva".','Dar a entrevista','Recusar',
 ['+|O livro virou best-seller e você ganhou um cachê.|+800 >3','-|O livro mostrou tudo e você foi preso.|-2000 P','-|O escritor inventou histórias sobre você.|-0 <2'],
 ['-|O escritor escreveu mesmo assim.|-500 <2','+|O escritor desistiu e foi pra outro morro.|+0 >2','-|O chefe ficou furioso.|-0 <2']);
SIT('crime','🏆','Prêmio de melhor chefe','Uma ONG quer dar um "prêmio de melhor líder comunitário" ao chefe. Você é o intermediário.','Aceitar o prêmio','Recusar',
 ['+|O chefe ganhou fama e te deu uma comissão.|+500 >3','-|A imprensa descobriu a farsa.|-1500 P','-|A ONG foi investigada.|-1000 P'],
 ['+|O chefe agradeceu e te elogiou.|+300 >2','-|A ONG ficou ofendida.|-0 <2','-|O prêmio foi pro vizinho.|-0 <1']);
SIT('crime','📡','Antena clandestina','Você instala uma antena de TV a cabo no morro. Todos pagam R$ 20. A operadora descobre.','Fugir','Negociar',
 ['+|Fugiu e ninguém soube.|+0 >3','-|Foi pego pela polícia.|-1000 P','-|A operadora cobrou R$ 5 mil.|-5000'],
 ['+|A operadora aceitou virar parceira.|+500 >3','-|A operadora te processou.|-3000','-|Perdeu a antena.|-0 <2']);
SIT('crime','🍕','Pizzaria fachada','Você abre uma pizzaria que serve de fachada. A pizza é tão boa que vira sucesso. Todos querem comer.','Aproveitar o sucesso','Fechar',
 ['+|A pizzaria lucrou e você ficou com uma boa parte.|+500 >3','-|A fiscalização apareceu.|-1000 P','-|A pizza acabou e o chefe reclamou.|-0 <2'],
 ['-|Os clientes protestaram e o chefe te cobrou.|-500 <2','+|Fechou e o chefe te elogiou.|+0 >2','-|A pizzaria virou lenda.|-0 <1']);
SIT('crime','🎣','Pescaria do chefe','O chefe te convida pra pescar. Ele joga uma isca e diz "o peixe é a polícia".','Entender a deixa','Perguntar',
 ['+|Entendeu e ganhou sua confiança.|+500 >3','-|Era um teste e você falhou.|-500 <3','-|O chefe riu e te zoou.|-0 <2'],
 ['+|O chefe riu e explicou.|+0 >2','-|O chefe te achou "lerdo".|-0 <2','-|Todos riram.|-0 <1']);
SIT('legal','🚨','Chamado falso de incêndio','Você é chamado para um incêndio. É uma churrasqueira. O dono jura "é só um pouco de fumaça".','Apagar','Multar',
 ['+|Apagou e ganhou um espetinho.|+0 >2','-|O dono ficou ofendido e te xingou.|-0 <2','-|O fogo se espalhou.|-200 <2'],
 ['+|Multou e o dono pagou.|+100 >2','-|O dono te processou.|-300','-|O dono chorou.|-0 <1']);
SIT('legal','🏍️','Motoboy a 140 por hora','Um motoboy corre a 140 km/h. Você tem a viatura mais lenta do estado.','Perseguir','Anotar a placa',
 ['+|Alcançou por milagre e multou.|+200 >3','!|Bateu a viatura num poste.|-300 <2','-|O motoboy sumiu.|-0 <2'],
 ['+|A placa levou ao motoboy.|+100 >2','-|A placa era falsa.|-0 <2','-|O motoboy riu da sua cara.|-0 <1']);
SIT('legal','📞','Ligação do chefe','O chefe te liga às 3h: "preciso de uma viatura na minha casa!". Ele está sem energia.','Atender','Ignorar',
 ['+|Foi recompensado com um churrasco.|+200 >3','-|Era um trote do seu colega.|-0 <2','-|Perdeu o sono.|-0 P'],
 ['-|O chefe soube e te deu advertência.|-300 <2','+|Dormiu e ninguém notou.|+0 >2','-|O chefe ficou sem energia por 3 dias.|-0 <1']);
SIT('legal','🧑‍🏫','Palestra nas escolas','Você faz palestras sobre segurança nas escolas. Uma criança pergunta "você já prendeu o monstro do armário?".','Responder sério','Brincar',
 ['+|A criança ficou satisfeita e te deu um desenho.|+0 >3','-|A criança chorou.|-0 <2','-|A professora te chamou na sala.|-0 <2'],
 ['+|Todos riram e adoraram.|+30 >3','-|A diretora achou desrespeito.|-0 <2','-|A criança contou pra mãe.|-0 <2']);
SIT('legal','🍽️','Almoço no quartel','O almoço do quartel é sempre o mesmo: arroz, feijão e "mistério". Hoje o "mistério" tem olhos.','Comer','Reclamar',
 ['+|Era peixe e estava ótimo.|+0 >2','!|Passou mal.|-60 P','-|O mistério fugiu do prato.|-0 <2'],
 ['+|O cozinheiro pediu desculpa e trouxe pizza.|+0 >3','-|O comandante te mandou calar.|-0 <2','-|Foi escalado pra lavar louça.|-0 P']);
SIT('legal','🎖️','Condecoração por bravura','Você recebe uma condecoração por bravura. Mas a "bravura" foi um acidente: você caiu e prendeu o bandido.','Aceitar','Contar a verdade',
 ['+|Todos aplaudiram e você virou herói.|+500 >3','-|Alguém descobriu e te zoou.|-0 <3','-|Foi investigado.|-300 <2'],
 ['+|A sinceridade te rendeu respeito.|+300 >3','-|Perdeu a medalha.|-0 <3','-|Todos riram.|-0 <2']);
SIT('legal','🚔','Colega bêbado','Um colega policial chega bêbado ao plantão. Ele canta "Evidências".','Denunciar','Cobrir',
 ['+|Foi elogiado pela corregedoria.|+200 >3','-|O colega virou inimigo.|-0 <3','-|O colega foi afastado e você levou a culpa.|-0 <2'],
 ['-|O colega bateu a viatura.|-500 <2','+|O colega sóbrio agradeceu.|+0 >2','-|O chefe descobriu e te advertiu.|-300 <2']);
SIT('legal','📍','GPS da viatura','O GPS da viatura te manda pro lugar errado. Você chega num matagal. Ele grita "chegou ao destino".','Reclamar','Seguir o GPS',
 ['+|O mecânico consertou e agradeceu.|+0 >2','-|Ficou 4 horas no matagal.|-0 P','-|O GPS riu de você.|-0 <1'],
 ['-|Chegou em outra cidade.|-0 <3','+|Achou um atalho.|+0 >2','-|A viatura atolou.|-300']);
SIT('legal','📸','Selfie de plantão','Você tira uma selfie durante o plantão. Ela vai parar no grupo do comando. O comandante te chama.','Assumir','Negar',
 ['+|O comandante riu e te elogiou.|+0 >3','-|Foi advertido.|-200 <2','-|Foi chamado de "influencer".|-0 <2'],
 ['-|O comandante tinha provas.|-500 <2','+|Ninguém acreditou no print.|+0 >2','-|Todos riram.|-0 <1']);
SIT('legal','🏆','Campeonato de tiro','A corporação promove um campeonato de tiro. O prêmio é um churrasco. Você nunca acertou nada.','Participar','Fingir doença',
 ['+|Acertou por sorte e ganhou o churrasco.|+0 >3','-|Acertou o alvo do vizinho.|-0 <2','!|Machucou o dedo.|-30 P'],
 ['-|O comandante te chamou de "covarde".|-0 <2','+|Ficou em casa e dormiu.|+0 >2','-|O churrasco foi sem você.|-0 <1']);
SIT('estudante','🏛️','Visita à Câmara','Sua turma visita a Câmara. Um vereador te oferece "um emprego de assessor". Você tem 19 anos.','Aceitar','Recusar',
 ['+|Ganhou um salário gordo e virou "assessor de aplauso".|+500 >3','-|O vereador foi preso.|-0 <3','-|O emprego era fantasma.|-0 <2'],
 ['+|Ficou na faculdade e tirou 10.|+100 >2','-|O vereador ficou ofendido.|-0 <1','-|Perdeu a chance.|-0 <1']);
SIT('estudante','🎸','Festival universitário','Você ganha uma vaga no festival universitário. Sua banda tem 2 membros e um violão sem corda.','Tocar mesmo assim','Desistir',
 ['+|O público achou "experimental" e aplaudiu.|+100 >3','-|O violão quebrou.|-0 <2','-|Todos vaiaram.|-0 <2'],
 ['-|A banda terminou.|-0 <3','+|Foi estudar e tirou 9.|+0 >2','-|O festival foi um sucesso sem vocês.|-0 <2']);
SIT('estudante','📱','Aplicativo de caronas','Você usa um app de caronas na faculdade. O motorista é seu professor. Ele te reconhece.','Fingir que não o conhece','Conversar',
 ['+|Ele fingiu também e vocês riram.|+0 >2','-|Ele te deu bronca.|-0 <2','-|Ele te reprovou.|-0 <3'],
 ['+|Ele te deu 10 na prova.|+100 >3','-|Ele te fez uma palestra.|-0 P','-|Ele contou pra turma.|-0 <2']);
SIT('estudante','🍺','Cerveja do centro acadêmico','O centro acadêmico vende cerveja a R$ 3. Mas ela tem gosto de cola. Todos bebem.','Beber','Recusar',
 ['+|Era barata e você ficou feliz.|+0 >2','!|Passou mal.|-40 P','-|A cerveja era falsificada.|-0 <2'],
 ['+|Bebeu água e ficou sóbrio.|+0 >2','-|Todos te chamaram de "chato".|-0 <1','-|Perdeu a festa.|-0 <1']);
SIT('estudante','🧪','Experimento fracassado','Seu experimento de química libera uma fumaça colorida e malcheirosa. A turma toda evacua.','Assumir','Fugir',
 ['+|O professor achou "criativo" e te deu 10.|+100 >3','-|Foi suspenso.|-0 P','-|Pagou os prejuízos.|-300'],
 ['-|O professor viu e te reprovou.|-0 <3','+|Ninguém soube quem foi.|+0 >2','-|Alguém filmou.|-0 <2']);
SIT('estudante','🎓','Colação de grau','A colação de grau vai custar R$ 2.000. Você não tem. A comissão te ameaça "sem festa".','Fazer vaquinha','Pedir ao reitor',
 ['+|Todos ajudaram e você formou.|+0 >3','-|Alguém sumiu com o dinheiro.|-300','-|A vaquinha só arrecadou R$ 50.|-0 <2'],
 ['+|O reitor liberou e te elogiou.|+0 >3','-|O reitor disse "é o regulamento".|-0 <2','-|Perdeu a data.|-0 <3']);
SIT('estudante','🏫','Aula de campo','A aula de campo é uma visita a uma fábrica. A fábrica faz 12 tipos de sabão. Você tem alergia.','Entrar','Esperar do lado de fora',
 ['!|Espirrou por 4 horas.|-60 P','+|Aprendeu muito e ganhou uma amostra.|+0 >3','-|Derramou sabão na roupa.|-30'],
 ['+|Esperou e comeu um pastel.|+0 >2','-|O professor te reprovou na aula.|-0 <2','-|Começou a chover.|-0 <1']);
SIT('estudante','🛴','Patinete na faculdade','O campus proíbe patinete. Você é pego em alta velocidade. O segurança te persegue.','Fugir','Parar',
 ['+|Escapou e virou lenda.|+0 >3','!|Caiu e ralou tudo.|-80 <2','-|O patinete foi apreendido.|-500'],
 ['+|O segurança riu e te liberou.|+0 >2','-|Foi multado em R$ 200.|-200','-|Perdeu o patinete.|-500']);
SIT('estudante','🎭','Peça da faculdade','Você é escolhido pra fazer a "árvore" na peça. Mas na última hora o ator principal some e você vira protagonista.','Aceitar','Recusar',
 ['+|Foi um sucesso e você virou astro.|+200 >3','-|Esqueceu todas as falas.|-0 <3','-|O cenário caiu.|-0 <2'],
 ['-|Outro assumiu e virou famoso.|-0 <3','+|Ficou como árvore e foi aplaudido.|+30 >2','-|Todos te chamaram de "covarde".|-0 <1']);
SIT('estudante','🏦','Estágio no banco','Seu estágio no banco paga R$ 1.200. O chefe pede "para você trazer café, fotocopiar e salvar a empresa".','Aceitar tudo','Reclamar',
 ['+|Foi efetivado e ganhou um bom salário.|+500 >3','-|Foi demitido por "excesso de café".|-0 <3','-|Descobriu que o café era caro.|-0 <2'],
 ['-|O chefe te demitiu.|-0 <3','+|O chefe se desculpou e te promoveu.|+300 >3','-|O RH te advertiu.|-0 <2']);
SIT('alta','🛫','Voo fretado de última hora','Você decide viajar a Paris. O voo fretado custa R$ 500 mil. O comissário te serve um champanhe de R$ 20 mil.','Aceitar','Recusar',
 ['+|Foi uma viagem perfeita e você fechou 3 negócios.|+3000 >3','-|O avião teve uma turbulência e você vomitou.|-0 P','-|Perdeu a mala.|-3000'],
 ['-|Perdeu a chance de um grande negócio.|-0 <3','+|Foi de voo comercial e economizou.|+500 >2','-|O voo atrasou.|-0 <2']);
SIT('alta','🍷','Vinhos do sócio','Seu sócio te dá uma garrafa de vinho de R$ 80 mil. Você derruba. Ele vê.','Pedir desculpas','Culpar o garçom',
 ['+|Ele riu e disse "é só vinho".|+0 >3','-|Ele cobrou o prejuízo.|-8000','-|Ele ficou frio com você.|-0 <3'],
 ['+|O garçom assumiu e ganhou uma gorjeta.|+0 >2','-|O garçom te processou.|-3000','-|O sócio descobriu.|-0 <3']);
SIT('alta','🏇','Pólo no clube','Você joga pólo no clube. O cavalo se assusta e te joga no chão. Todos veem.','Fingir que foi de propósito','Rir',
 ['+|Todos aplaudiram "a manobra".|+500 >3','-|Ninguém acreditou.|-0 <3','-|O cavalo fugiu.|-1000'],
 ['+|Todos riram junto e o clima ficou leve.|+0 >3','!|Torceu o ombro.|-300 P','-|O cavalo te olhou com desprezo.|-0 <1']);
SIT('alta','🛍️','Joalheria em Ipanema','Na joalheria, uma moça pede um anel. Seu cartão tem limite de R$ 500 mil. O anel custa R$ 520 mil.','Pagar parte em dinheiro','Pedir pra reduzir',
 ['+|Ela ficou feliz e te deu um beijo.|+0 >3','-|O vendedor te olhou com desprezo.|-0 <2','-|O cartão foi recusado.|-0 <3'],
 ['+|O vendedor deu desconto de 5%.|+2000 >2','-|O vendedor disse "não negociamos".|-0 <3','-|Ela ficou triste.|-0 <2']);
SIT('alta','🚁','Heliponto do prédio','Seu prédio tem heliponto. O vizinho pousa às 6h da manhã. Todos reclamam.','Reclamar','Usar também',
 ['+|O síndico limitou os horários.|+0 >3','-|O vizinho te processou.|-1000','-|O heliponto foi fechado.|-0 <2'],
 ['+|Os dois se uniram e abriram uma empresa.|+2000 >3','-|O helicóptero bateu no prédio.|-3000','-|O síndico te multou.|-500']);
SIT('alta','🏖️','Casa no litoral','Sua casa no litoral foi invadida por 20 capivaras. Elas ocupam a piscina.','Chamar os bombeiros','Deixar',
 ['+|Os bombeiros levaram as capivaras.|+0 >3','-|Demoraram 1 semana.|-500 P','-|As capivaras voltaram.|-0 <2'],
 ['+|As capivaras viraram atração e você lucrou.|+1000 >3','-|Destruíram o jardim.|-2000','-|Alguém filmou e você virou meme.|-0 <2']);
SIT('alto','🏛️','Votação do orçamento secreto','O "orçamento secreto" te rende R$ 20 milhões. A imprensa pergunta "pra onde foi?".','Mentir','Assumir',
 ['+|A imprensa acreditou e você ficou rico.|+3000 >3','-|Foi desmascarado.|-3000 P','-|Alguém vazou documentos.|-2000 <3'],
 ['+|Assumiu e o povo achou "honesto".|+500 >3','-|Foi investigado.|-2000 P','-|Os aliados te abandonaram.|-1000 <3']);
SIT('alto','📰','Fake news sobre você','Alguém espalha uma fake news de que você "comeu um pastel sem pagar". Vira meme nacional.','Desmentir','Rir',
 ['+|O desmentido foi aceito.|+300 >3','-|O desmentido virou outro meme.|-300 <3','-|Ninguém acreditou.|-0 <3'],
 ['+|Todos riram junto.|+500 >3','-|Virou "o homem do pastel".|-0 <3','-|O pasteleiro te processou.|-200']);
SIT('alto','📺','Entrevista paga','Uma emissora te oferece R$ 200 mil por uma entrevista. Você tem que falar "a verdade".','Aceitar','Recusar',
 ['+|A entrevista foi um sucesso.|+2000 >3','-|Disse uma verdade e virou escândalo.|-2000 <3','-|A emissora te editou.|-500 <2'],
 ['-|A emissora entrevistou seu rival.|-0 <3','+|Recusou e ficou limpo.|+0 >2','-|Todos acharam suspeito.|-0 <2']);
SIT('alto','🏖️','Casa de praia de aliado','Um aliado te dá uma casa de praia "de presente". Você nunca viu uma casa tão grande.','Aceitar','Devolver',
 ['+|Ninguém notou e você aproveitou.|+3000 >3','-|O Ministério Público abriu inquérito.|-3000 P','-|A casa tinha dívidas.|-2000'],
 ['+|Devolveu e foi elogiado.|+500 >3','-|O aliado ficou ofendido.|-1000 <3','-|A imprensa perguntou "por quê?".|-0 <2']);
SIT('alto','🏛️','Foto com o presidente','Você tira foto com o presidente. Na foto, você está de olhos fechados e ele sorrindo.','Postar mesmo assim','Apagar',
 ['+|A foto viralizou e você ganhou fama.|+300 >3','-|Virou meme: "o sonolento".|-0 <3','-|O presidente achou desrespeito.|-300 <2'],
 ['+|Apagou e ninguém soube.|+0 >2','-|O fotógrafo vazou.|-0 <3','-|O presidente quis outra foto.|-0 <2']);
SIT('baixa,media','🛍️','Shopping popular','No shopping popular, uma moça te oferece "um relógio igual ao do Neymar". Custa R$ 30.','Comprar','Recusar',
 ['+|O relógio era bom e durou 1 ano.|+0 >3','-|Quebrou no 1º dia.|-30','-|Era um brinquedo infantil.|-30'],
 ['+|Foi tomar um sorvete e achou uma moeda.|+5 >1','-|A moça te xingou.|-0 <1','-|Alguém roubou sua carteira.|-150']);
SIT('baixa,media','🎤','Karaokê da firma','A firma faz um karaokê de confraternização. O chefe canta "Evidências". Todos choram.','Cantar com ele','Fingir que não ouve',
 ['+|Todos aplaudiram e você virou o assunto da firma.|+100 >3','-|Desafinou e o chefe te olhou torto.|-0 <2','-|O microfone deu choque.|-30'],
 ['-|O chefe te chamou pra cantar.|-0 <2','+|Dormiu em paz.|+0 >2','-|Alguém filmou.|-0 <1']);
SIT('baixa,media','🏥','Plantão de enfermagem 2','No plantão, um paciente grita "eu sou o presidente!". Ele está só bêbado.','Acalmar','Chamar o segurança',
 ['+|O paciente se acalmou e agradeceu.|+0 >3','!|Levou um tapa.|-30 <1','-|Ele fugiu pelo corredor.|-0 <2'],
 ['+|O segurança levou o paciente.|+0 >2','-|O paciente era dono do hospital.|-300 <3','-|O paciente processou.|-500']);
SIT('baixa,media','🚌','Motorista de ônibus','Você é motorista de ônibus. Uma senhora te pede pra "parar na porta de casa". Não é ponto.','Parar','Recusar',
 ['+|Ela te deu uma marmita e você ficou feliz.|+0 >3','-|O fiscal te multou.|-200','-|O ônibus atrasou.|-0 <2'],
 ['-|Ela te xingou pelo resto da viagem.|-0 <2','+|Ela entendeu e desceu no ponto.|+0 >2','-|Alguém filmou e postou.|-0 <1']);
SIT('baixa,media','🧑‍🍳','Cozinheiro de restaurante','O chef pede "mais sal". Você põe sal demais. Todos reclamam. O chef te encara.','Culpar o ajudante','Assumir',
 ['+|O chef acreditou e demitiu o ajudante.|+0 >2','-|O ajudante contou a verdade.|-0 <3','-|O restaurante fechou.|-0 <3'],
 ['+|O chef te perdoou e te deu uma folga.|+0 >3','-|O chef te mandou lavar louça.|-0 P','-|Descontaram do seu salário.|-200']);
SIT('baixa,media','💈','Barbeiro fofoqueiro','O barbeiro te conta fofocas do bairro. Hoje a fofoca é sobre você.','Rir','Reagir',
 ['+|Ele riu junto e te deu um corte grátis.|+0 >3','-|Ele contou mais.|-0 <2','-|Os clientes riram.|-0 <2'],
 ['-|Ele ficou ofendido e cortou torto.|-0 <3','+|Ele pediu desculpa.|+0 >2','-|Todos sabem agora.|-0 <3']);
