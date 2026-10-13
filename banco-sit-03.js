// ======= CLASSE BAIXA E MÉDIA: rotina, trabalho, dinheiro, saúde, comunidade =======
SIT('baixa,media','🚍','Trem da Supervia','O trem tá com 2 horas de atraso. A plataforma lota e o apito de alguém vira trilha sonora.','Esperar no ponto','Pegar um alternativo',
 ['-|Esperou 3 horas. O trem passou lotado sem parar.|-0 P','+|O trem veio vazio e com ar-condicionado. O Rio tem milagres.|+0 >3','-|Um assaltante aproveitou a plataforma cheia.|-100'],
 ['+|O alternativo era mais rápido e ainda deu tempo de tomar café.|+0 >2','-|O alternativo quebrou e você voltou a pé.|-0 <3','-|Foi parar em outro bairro e dormiu na rodoviária.|-40 <2']);
SIT('baixa,media','🚇','Metrô em horário de pico','O metrô tá lotado a ponto de você voar sem encostar no chão. Alguém grita "empurra!".','Entrar a qualquer custo','Esperar o próximo',
 ['+|Entrou por pura pressão social e chegou a tempo.|+0 >2','-|Perdeu o sapato e a dignidade na porta.|-80','!|Foi espremido e ficou sem ar por 2 minutos.|-30 <1'],
 ['+|O próximo veio vazio e você sentou.|+0 >2','-|O próximo também lotou. Chegou atrasado.|-0 P','-|Perdeu o horário e levou bronca do chefe.|-100 <1']);
SIT('baixa,media','🧾','Boleto de IPTU','O IPTU chegou. O valor é de um carro 0km. A prefeitura promete "melhorias".','Parcelar','Reclamar na prefeitura',
 ['-|Os juros do parcelamento dobraram o valor.|-300','+|Conseguiu um desconto de 20% por pagar adiantado.|+80 >1','-|Esqueceu a data e pagou multa.|-150'],
 ['+|A prefeitura te atendeu e cortou 30% do valor.|+200 >2','-|Ficou 4 horas na fila e o sistema caiu.|-0 P','-|O funcionário disse "é assim mesmo" e te mandou embora.|-0 <1']);
SIT('baixa,media','🛍️','Black Friday','A "Black Friday" tem 70% de desconto. O preço original foi aumentado em 200% na véspera.','Comprar tudo','Pesquisar antes',
 ['-|O preço era o mesmo da semana passada. Você foi enganado.|-250','+|Pegou uma TV pela metade do preço real. Sorte divina.|+300 >2','-|A TV chegou quebrada e o prazo de troca expirou.|-300'],
 ['+|Descobriu a fraude e denunciou. Ganhou recompensa.|+100 >2','-|Quando decidiu comprar, esgotou.|-0 <1','-|Ficou com a mão vazia e saudade da TV.|-0']);
SIT('baixa,media','💳','Cartão de crédito','O cartão chegou pelo correio com limite de R$ 5 mil. Você sente o perigo.','Gastar um pouco','Cortar o cartão',
 ['-|Gastou além da conta e a fatura veio com juros de 15% ao mês.|-400','+|Pagou em dia e ganhou cashback.|+50 >1','-|Clonaram o cartão no mesmo dia.|-300'],
 ['+|Economizou e passou o mês sem dívida.|+100 >1','-|O banco cobrou anuidade mesmo assim.|-80','-|A funcionária do banco te chamou de "preguiçoso".|-0 <1']);
SIT('baixa,media','🏠','Reforma da laje','Você decidiu fazer um andar a mais na laje. O mestre de obra jura que "é rapidinho".','Contratar o mestre','Fazer sozinho',
 ['+|O mestre era craque e a obra ficou perfeita.|+0 >3','-|A obra demorou 8 meses e custou o triplo.|-500','-|O mestre sumiu com o dinheiro.|-400'],
 ['!|Caiu da escada e quebrou o braço.|-150 <2','+|Fez um trabalho digno de arquiteto.|+0 >2','-|A laje rachou e o vizinho chamou a prefeitura.|-250']);
SIT('baixa,media','🔧','Carro no mecânico','Seu carro velho faz um barulho estranho. O mecânico diz "pode ser o motor, pode ser seu futuro".','Deixar no mecânico','Tentar resolver sozinho',
 ['+|Era só um parafuso solto. Cobrou R$ 30.|+0 >2','-|Cobrou uma fortuna pra trocar uma peça baratinha.|-800','-|Demorou 3 semanas pra consertar.|-0 P'],
 ['!|Se machucou tentando.|-60 <1','+|Descobriu o defeito pelo YouTube e consertou.|+0 >2','-|Piorou. Agora o carro virou ferro-velho.|-500']);
SIT('baixa,media','⚕️','Dente com dor','O dente dói há 3 dias. O dentista particular cobra R$ 400 só pra olhar.','Ir ao SUS','Ir ao particular',
 ['-|A fila do SUS tem 6 meses de espera.|-0 P','+|O dentista do SUS era ótimo e resolveu em 10 minutos.|+0 >2','-|Ele arrancou o dente errado.|-50 <2'],
 ['-|Pagou caro e o dentista pediu mais ainda.|-800','+|O dentista era seu amigo e fez de graça.|+0 >2','-|O canal precisa de 4 sessões.|-300 P']);
SIT('baixa,media','👓','Óculos de grau','Seus óculos quebraram. A ótica vende uma armação por R$ 400. A da feira custa R$ 30.','Comprar na ótica','Comprar na feira',
 ['+|A ótica fez um desconto e você saiu lindo.|+0 >2','-|Cobraram R$ 800 pelas lentes.|-800','-|Esqueceram as lentes e te mandaram voltar.|-0 <1'],
 ['+|A armação da feira é perfeita e você virou fashion.|+0 >2','-|Quebrou em 2 dias.|-30','!|Os óculos eram de outro grau. Tontura e dor de cabeça.|-30 P']);
SIT('baixa,media','🎒','Material escolar','O filho precisa de uma lista de material escolar de 80 itens. Metade são "opcionais".','Comprar tudo','Comprar o essencial',
 ['-|Gastou R$ 600 e metade dos itens nunca foi usada.|-600','+|Achou uma promoção de kit completo.|+100 >1','-|A professora pediu mais 10 itens no primeiro dia.|-200'],
 ['+|Economizou e a professora não reclamou.|+0 >2','-|A professora fez uma cara feia e mandou comprar o resto.|-150','-|Seu filho foi o único sem estojo e chorou.|-0 <1']);
SIT('baixa,media','🧸','Aniversário do filho','O filho quer uma festa com tema de super-herói. O buffet cobra R$ 3.000.','Fazer no buffet','Fazer em casa',
 ['-|A festa foi linda, mas as dívidas duram 6 meses.|-1500','+|O buffet fez uma promoção e você pagou metade.|+300 >2','-|O Homem-Aranha faltou e foi o pai do vizinho.|-100'],
 ['+|A festa em casa foi um sucesso. Todo mundo amou.|+0 >3','-|Choveu e a festa virou dentro de casa.|-0 <1','!|O bolo caiu e queimou a mão da vó.|-60 P']);
SIT('baixa,media','🎒','Excursão da escola','A escola promove uma excursão que custa R$ 400. Seu filho quer ir. Você não tem dinheiro.','Pagar parcelado','Dizer que não pode',
 ['+|Pagou em 4x sem juros e o filho ficou radiante.|+0 >2','-|A excursão foi cancelada e o dinheiro não voltou.|-400','-|O filho voltou com dívida: perdeu a carteira.|-200'],
 ['-|O filho ficou sem falar com você por 2 dias.|-0 <1','+|A professora disse que dava pra ir de graça.|+0 >2','-|Todo mundo foi, menos ele.|-0 P']);
SIT('baixa,media','🩺','Exame laboratorial','O médico pediu 10 exames. O laboratório cobra R$ 600. A fila do SUS é de 3 meses.','Pagar no laboratório','Esperar o SUS',
 ['-|Os exames saíram caríssimos e o médico disse "tudo normal".|-600','+|O laboratório fez desconto de 40% por ser cliente novo.|+0 >2','-|O resultado veio errado e você refez.|-300'],
 ['-|Esperou 3 meses e o médico já tinha mudado de cidade.|-0 P','+|Foi atendido em 1 semana. Milagre.|+0 >2','-|Perdeu a vaga por chegar 5 minutos atrasado.|-0 <1']);
SIT('baixa,media','🚑','Ambulância demorada','Seu vizinho passa mal e você liga pro SAMU. Dizem que chegam em "breve".','Esperar','Levar de carro',
 ['-|A ambulância demorou 2 horas e o vizinho foi sozinho.|-0 <2','+|A ambulância chegou em 10 minutos. Você virou herói.|+0 >2','-|Chegou errada e foi pro prédio ao lado.|-0 P'],
 ['+|Chegou ao hospital e ele foi atendido na hora.|+0 >3','!|Bateu o carro na pressa.|-120 <2','-|O hospital tava lotado e vocês voltaram.|-0 P']);
SIT('baixa,media','🏥','Posto de saúde','O posto de saúde só atende 20 fichas por dia. Você chega às 5h e já tem 40 pessoas.','Ficar na fila','Ir embora',
 ['+|Pegou a ficha 20 por 1 minuto! Vitória.|+0 >2','-|Ficou 8 horas e o médico foi embora na sua vez.|-0 P','-|A atendente disse "volte amanhã".|-0 <1'],
 ['+|Foi a uma clínica popular e foi atendido na hora.|+0 >2','-|A dor piorou e você voltou ao posto.|-0 <1','!|Passou mal em casa e foi levado de ambulância.|-100 P']);
SIT('baixa,media','💊','Farmácia popular','A farmácia popular não tem o remédio que você precisa. O balconista oferece uma "alternativa".','Aceitar a alternativa','Procurar outra farmácia',
 ['+|A alternativa funcionou igual e era mais barata.|+0 >2','!|A alternativa tinha efeito colateral estranho.|-60 P','-|Era placebo. A dor continuou.|-30'],
 ['+|Achou o remédio original numa farmácia vizinha.|+0 >2','-|Andou 3 km e todas estavam sem.|-0 <2','-|Pagou R$ 200 numa farmácia chique.|-200']);
SIT('baixa,media','🍞','Cesta básica atrasada','A cesta básica do trabalho atrasou. O mercado cobra o dobro agora.','Esperar a cesta','Comprar mesmo caro',
 ['+|A cesta chegou com um mimo extra: um panetone.|+30 >1','-|A cesta veio sem arroz e feijão.|-0 P','-|A cesta foi roubada por um vizinho.|-0 <1'],
 ['-|Gastou R$ 400 e comprou metade do necessário.|-400','+|Achou promoção e levou tudo pela metade.|+100 >2','-|O mercado errou o troco.|-60']);
SIT('baixa,media','🛒','Feira livre','O feirante grita "tomate a 1 real!". O preço é suspeito. A banca ao lado grita "tomate a 10!".','Comprar a R$ 1','Comprar a R$ 10',
 ['+|O tomate era de ótima qualidade. Era promoção de fim de feira.|+0 >2','-|Eram tomates podres. Jogou tudo fora.|-5','-|O feirante fez peso errado.|-10'],
 ['-|Pagou R$ 10 por tomate comum. Sentiu-se otário.|-10','+|O tomate era orgânico e delicioso.|+0 >1','-|O feirante errou o troco.|-20']);
SIT('baixa,media','🚪','Despejo à vista','O dono do imóvel avisou: "daqui 30 dias, o aluguel sobe 40%". Você não tem pra onde ir.','Negociar','Procurar outro imóvel',
 ['+|O dono cedeu e reduziu o aumento pra 15%.|+0 >2','-|O dono disse "é pegar ou largar".|-0 <1','-|O dono te chamou de "inadimplente".|-0'],
 ['+|Achou um apartamento melhor por metade do preço.|+200 >3','-|Rodou 20 imóveis e nenhum servia.|-0 <2','-|Foi enganado por um falso corretor.|-400']);
SIT('baixa,media','👜','Bolsa roubada','Roubaram sua bolsa no ônibus. O celular, a carteira e a marmita estavam dentro.','Ir à delegacia','Pedir dinheiro emprestado',
 ['-|A delegacia disse "faça o B.O. online".|-0 <1','+|A polícia achou a bolsa na esquina. Estava intacta.|+0 >2','-|Ficou 4 horas na delegacia e voltou sem nada.|-0 P'],
 ['+|Um amigo emprestou R$ 200 e você se recuperou.|+0 >2','-|Ninguém tinha. Voltou a pé.|-0 <2','-|Foi enganado por um golpista que fingia ser amigo.|-100']);
SIT('baixa,media','🛵','Moto financiada','Você financiou uma moto em 48 parcelas. A parcela subiu 30% sem aviso.','Reclamar','Vender a moto',
 ['+|O banco recuou e manteve o valor.|+0 >2','-|O banco disse "está no contrato" e cobrou multa.|-200','-|Ficou 3 horas na fila do banco.|-0 P'],
 ['-|Vendeu e a moto valia metade do que devia.|-800','+|Vendeu por mais do que devia e ficou com a diferença.|+500 >2','-|O comprador deu golpe com cheque sem fundo.|-300']);
SIT('baixa,media','🛻','Frete do vizinho','O vizinho tem uma caminhonete e oferece um frete "por R$ 50". Você precisa mudar um sofá.','Aceitar','Pedir outra opção',
 ['+|Ele foi pontual e ainda ajudou a carregar.|+0 >2','-|A caminhonete quebrou no meio do caminho.|-0 P','-|Ele riscou o sofá e não se desculpou.|-100'],
 ['-|O frete formal custou R$ 300.|-300','+|Achou um carrinho de mão e fez sozinho.|+0 >1','!|Carregou o sofá nas costas e travou a coluna.|-60 P']);
SIT('baixa,media','🧹','Faxineira atrasada','A faxineira atrasou 3 horas e disse que "o ônibus quebrou". Mas você viu ela na padaria.','Descontar do pagamento','Fazer de conta que acreditou',
 ['+|Ela pediu desculpa e trabalhou em dobro.|+0 >2','-|Ela largou o serviço e foi embora.|-0 <1','-|Ela te processou por "assédio moral".|-150'],
 ['+|Ela agradeceu e te deu um bolo.|+0 >1','-|Descobriu que ela tinha mentido e se arrependeu.|-0 <1','-|Ela saiu mais cedo "pra compensar".|-0']);
SIT('baixa,media','🔨','Bico no sábado','O chefe oferece um bico no sábado: "só por R$ 100". Você tinha plano de ir à praia.','Aceitar','Ir à praia',
 ['+|O bico era fácil e o chefe agradeceu com um bônus.|+100 >2','-|O bico durou 12 horas e o chefe esqueceu de pagar.|-0 P','!|Se machucou carregando peso.|-80 P'],
 ['+|Foi à praia e aproveitou o dia.|+0 >2','-|O chefe te chamou de "preguiçoso" na segunda.|-0 <1','-|Perdeu o bico e o dinheiro.|-0']);
SIT('baixa,media','📉','Corte de pessoal','A empresa vai demitir 20%. O RH te chama na sala. Você suspeita do pior.','Ir à sala sem medo','Pedir pra adiar',
 ['+|Era uma promoção! O RH pediu desculpa pela confusão.|+200 >3','-|Foi demitido com um aperto de mão.|-500 P','-|O RH disse "você fica, mas com salário menor".|-200'],
 ['-|O RH marcou de novo e você foi demitido.|-500 P','+|Ganhou um dia de adiamento e uma conversa franca.|+0 >1','-|O chefe te achou "inseguro" e te rebaixou.|-100 <1']);
SIT('baixa,media','🏃','Concurso público','Você passou na 2ª fase de um concurso. A 3ª é um teste físico e você mal corre pro ônibus.','Treinar','Deixar a sorte',
 ['+|Treinou 3 meses e passou em 1º lugar.|+300 >3','!|Torceu o tornozelo no treino.|-80 <2','-|A vaga foi cancelada por falta de verba.|-0 <1'],
 ['-|Falhou no teste e perdeu a vaga.|-0 <2','+|Teve sorte e foi aprovado de raspão.|+200 >2','-|Chegou atrasado e foi desclassificado.|-0 P']);
SIT('baixa,media','👔','Entrevista de emprego','A entrevista é amanhã. Você só tem uma camisa decente e ela tem uma mancha.','Lavar à noite','Usar assim mesmo',
 ['+|A camisa secou e você arrasou na entrevista.|+200 >2','-|A camisa encolheu e não coube.|-0 <1','-|A camisa ficou úmida e você chegou cheirando a lavanderia.|-0'],
 ['+|O recrutador achou a mancha "charmosa".|+100 >1','-|O recrutador não olhou nos seus olhos.|-0 <2','-|Alguém derrubou café na camisa.|-30']);
SIT('baixa,media','📞','Telemarketing','Você atende o telefone e é o 14º telemarketing do dia. A moça fala rápido e sorri na voz.','Ouvir com educação','Desligar',
 ['+|A oferta era boa e você economizou 30% na internet.|+80 >1','-|Era golpe. Gastou R$ 50 em ligações.|-50','-|Ela ficou 40 minutos falando.|-0 P'],
 ['+|Desligou e ganhou 10 minutos de paz.|+0 >1','-|Ela ligou de novo 5 vezes.|-0 <1','-|Perdeu uma promoção de verdade.|-0']);
SIT('baixa,media','🚖','Corrida cancelada','O motorista de aplicativo cancela a corrida após 20 minutos de espera. É a 3ª vez hoje.','Chamar outro','Ir de metrô',
 ['+|O novo motorista chegou em 2 minutos e era simpático.|+0 >2','-|O novo também cancelou. Você perdeu a calma.|-0 P','-|O app te cobrou taxa de cancelamento.|-20'],
 ['+|O metrô tava vazio e você chegou antes.|+0 >2','-|O metrô estava parado.|-0 <1','-|Perdeu a carteira no metrô.|-100']);
SIT('baixa,media','🍺','Cerveja no boteco','O boteco da esquina tem cerveja a R$ 6. O dono promete "gelada, estupidamente gelada".','Pedir 2','Pedir 10',
 ['+|A cerveja tava no ponto e o dono te deu um petisco.|+0 >2','-|Tava quente e o dono jurou que era "temperatura de clima".|-12','-|Derrubaram no seu colo.|-12'],
 ['-|Bebeu demais e acordou no banheiro do boteco.|-60 P','+|Bateu o recorde do boteco e ganhou um boné.|+0 >2','-|O dono te cobrou R$ 90 e o troco era de uns 2.|-90']);
SIT('baixa,media','🎣','Pescaria no domingo','Um amigo te convida pra pescar. Você não pesca nada desde 1998.','Ir','Ficar em casa',
 ['+|Pescou um peixe de 5 kg e virou herói.|+80 >2','-|Pescou uma bota e uma lata de cerveja.|-0 <1','!|Caiu na água e engoliu um peixe (sem querer).|-40 P'],
 ['+|Ficou em casa vendo TV e descansou.|+0 >1','-|O amigo trouxe peixe e você ficou com inveja.|-0 <1','-|A TV pifou.|-0']);
SIT('baixa,media','🍽️','Marmitaria','A marmitaria do bairro vende prato feito a R$ 15. O dono jura que o frango é "orgânico e feliz".','Comprar','Cozinhar em casa',
 ['+|Delicioso e farto. O dono te deu sobremesa.|+0 >2','-|A carne tava dura e o arroz sem sal.|-15','-|Cobrou R$ 30 porque "o frango era importado".|-30'],
 ['+|A sua comida ficou melhor que a da marmitaria.|+0 >2','-|Queimou o arroz e jantou pão.|-0 <1','-|O botijão acabou na hora.|-90']);
SIT('baixa,media','🍖','Açougue do Seu Zé','Seu Zé vende carne boa e fiado. Mas hoje ele só aceita "dinheiro vivo e abraço".','Pagar e abraçar','Pedir fiado',
 ['+|O abraço rendeu um corte especial de brinde.|+0 >2','-|Ele te deu um abraço de urso e quebrou uma costela.|-80 P','-|Ele cobrou o abraço como serviço extra.|-20'],
 ['-|Ele disse "só pra quem tem consciência" e não deu.|-0 <1','+|Ele aceitou e ainda deu um desconto.|+30 >1','-|Ele te marcou na lista negra.|-0 <2']);
SIT('baixa,media','🧃','Padaria nova','Uma padaria nova abriu na esquina. Tem pão artesanal por R$ 25 e cafezinho por R$ 12.','Entrar','Seguir na padaria de sempre',
 ['+|Era um paraíso. O padeiro te deu um pão de graça.|+0 >2','-|O pão era do mesmo da padaria antiga com preço triplicado.|-37','-|O atendente te olhou torto por usar chinelo.|-0 <1'],
 ['+|A padaria de sempre fez uma promoção pra comemorar.|+20 >1','-|A padaria de sempre fechou por reforma.|-0 <1','-|O padeiro te chamou de "traidor".|-0']);
SIT('baixa,media','🏀','Quadra do bairro','A quadra do bairro está sendo reformada. A prefeitura promete "em 2 meses". Já são 2 anos.','Reclamar','Jogar na rua',
 ['+|A prefeitura se comoveu e liberou a obra em 1 semana.|+0 >3','-|Ninguém respondeu e você gastou voz à toa.|-0 <1','-|Você foi chamado de "chato" no grupo do bairro.|-0'],
 ['+|Jogou com a galera e foi um dia incrível.|+0 >2','!|Um carro quase te atropelou.|-60 <2','-|A polícia dispersou o jogo por "perturbação".|-100']);
SIT('baixa,media','🎶','Roda de pagode','A roda de pagode do bairro precisa de um cavaquinho. Você tem um guardado há 10 anos.','Emprestar','Esconder o cavaquinho',
 ['+|O cavaquinho fez sucesso e você virou "músico oficial".|+30 >3','-|O cavaquinho voltou sem cordas.|-60','-|Ele nunca voltou.|-100'],
 ['-|Descobriram e te chamaram de "mão fechada".|-0 <1','+|Ficou em casa e dormiu em paz.|+0 >1','-|O cavaquinho enferrujou.|-0']);
SIT('baixa,media','🎤','Festa na laje','A laje do vizinho é o local da festa. 200 pessoas e uma laje de 30m². Todo mundo sabe que vai dar ruim.','Ir à festa','Ficar longe',
 ['+|A festa foi lendária. Ninguém caiu da laje.|+0 >3','!|A laje cedeu uma parte e você caiu junto.|-150 <2','-|A polícia chegou e levou todo mundo.|-100 P'],
 ['+|Dormiu em paz e acordou sem ressaca.|+0 >1','-|No dia seguinte a festa era assunto no bairro. Você ficou de fora.|-0 <1','-|Ficou ouvindo o som até as 5h.|-0 P']);
SIT('baixa,media','⚽','Time de várzea','O time de várzea do bairro precisa de um goleiro. Você tem 1,60 m e medo de bola.','Aceitar','Recusar',
 ['+|Defendeu 3 pênaltis e virou herói.|+50 >3','!|Tomou uma bolada na cara. Olho roxo.|-30 <2','-|Tomou 12 gols e os colegas te chamaram de "peneira".|-0 <1'],
 ['-|O time perdeu e a culpa foi sua por "não ter ido".|-0 <1','+|O time ganhou e você ganhou um chope.|+0 >1','-|O time te excluiu do grupo.|-0']);
SIT('baixa,media','🎵','Show de graça','Um cantor famoso faz um show de graça na praça. Chegam 50 mil pessoas. Você chega às 20h.','Entrar na multidão','Ouvir de longe',
 ['+|Chegou ao lado do palco e ganhou uma palheta.|+0 >3','!|Foi empurrado e perdeu um sapato.|-40 <2','-|Roubaram sua carteira na multidão.|-150'],
 ['+|Ouviu de longe, com cerveja gelada.|+0 >2','-|O som falhou e você ouviu pela metade.|-0 <1','-|Perdeu o último ônibus.|-0 P']);
SIT('baixa,media','🕯️','Procissão do bairro','A procissão do santo do bairro passa na sua rua. Todo mundo reza. Você prefere a cerveja.','Participar','Ficar na janela',
 ['+|A fé te deu paz e uma sacolinha de doces.|+0 >2','-|Foi chamado pra carregar o andor e quase caiu.|-0 <1','-|Derramou a cerveja no andor. Vergonha.|-0 <2'],
 ['+|Viu tudo da janela e ficou sossegado.|+0 >1','-|O padre te viu e te chamou de "pecador".|-0 <1','-|Alguém jogou uma vela no seu quintal.|-30']);
SIT('baixa,media','🧙','Benzedeira da rua','A benzedeira do bairro te chama: "meu filho, tá carregado de energia ruim".','Aceitar a benção','Recusar',
 ['+|Saiu leve e ganhou uma garrafada de graça.|+0 >2','-|A benção durou 2 horas e cobrou R$ 40.|-40','-|Ela te deu um remédio caseiro que te deu dor de barriga.|-0 P'],
 ['-|Ela te rogou praga: "vai chover no seu churrasco".|-0 <1','+|Ela riu e disse "tá protegido, anda".|+0 >1','-|Tropeçou no caminho e sentiu o peso da praga.|-0']);
SIT('baixa,media','🐓','Briga de galo','Alguém te convidou pra uma rinha clandestina. Prêmio: R$ 1.000. Você acha cruel.','Recusar','Denunciar',
 ['+|Ficou de fora e dormiu com a consciência limpa.|+0 >2','-|O organizador te ameaçou.|-0 <2','-|Perdeu a amizade do cara.|-0 <1'],
 ['+|A polícia fez a operação e te deu uma medalha de cidadão.|+200 >2','-|O organizador descobriu e te perseguiu.|-100 <2','-|Ninguém acreditou em você.|-0 <1']);
SIT('baixa,media','🚤','Pesca no cais','Você pesca no cais. Um peixe de 20 kg morde a isca. Todo mundo olha.','Puxar com força','Soltar um pouco',
 ['+|Pegou o peixe e virou lenda do cais.|+100 >3','!|O peixe te puxou pro mar. Deu trabalho.|-50 <2','-|A linha estourou e o peixe fugiu.|-0 <1'],
 ['+|Cansou o peixe e pegou com calma.|+100 >2','-|O peixe fugiu rindo.|-0 <1','-|Um outro pescador roubou o peixe.|-0']);
SIT('baixa,media','🎠','Domingo no Parque','O parque tem carrossel, pipoca e um palhaço sem graça. Seu sobrinho quer tudo.','Gastar com tudo','Controlar o gasto',
 ['-|Gastou R$ 250 e o sobrinho ainda quer mais.|-250','+|O sobrinho dormiu cedo e você economizou.|+0 >2','-|Perdeu o celular no carrossel.|-200'],
 ['+|Escolheu 2 atrações e o sobrinho ficou feliz.|+0 >2','-|O sobrinho fez birra e todo mundo olhou.|-0 <1','-|O palhaço zoou você na frente de todo mundo.|-0']);
