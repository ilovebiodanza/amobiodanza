function oa(disco, pista, obs='')	{
var	dir=`
07/02/2012  06:15 p.m.         9.738.368 IBF01 - 01 - The Beatles - Free As a Bird.mp3
26/12/2011  11:38 p.m.         9.824.256 IBF01 - 02 - The Beatles - Let It Be.mp3
26/12/2011  11:38 p.m.         5.926.912 IBF01 - 03 - The Beatles - I Me Mine.mp3
17/10/2011  05:53 p.m.         9.564.288 IBF01 - 04 - Lennon, John - (Just Like) Starting Over.mp3
05/02/2012  01:40 a.m.         7.626.752 IBF01 - 06 - Harrison, George - Behind That Locked Door.mp3
05/02/2012  01:40 a.m.         9.316.352 IBF01 - 07 - Harrison, George - Ballad Of Sir Frankie Crisp (Let It Roll).mp3
27/12/2011  12:02 a.m.         7.645.184 IBF01 - 08 - The Beatles - Here Comes The Sun.mp3
05/02/2012  01:02 a.m.         8.613.888 IBF01 - 09 - Harrison, George - Give Me Love (Give Me Peace On Earth).mp3
02/01/2012  12:47 p.m.         7.467.136 IBF01 - 10 - Carpenters - We've Only Just Begun.mp3
07/02/2012  05:59 p.m.         9.834.624 IBF01 - 11 - OST Gabriela (Costa, Gal & Jobim, Tom) - Tema de Amor de Gabriela.mp3
26/12/2011  02:11 a.m.         6.066.176 IBF01 - 12 - Nunes, Clara - A Deusa Dos Orixas.mp3
26/12/2011  02:11 a.m.         7.256.064 IBF01 - 13 - Nunes, Clara - O mar Serenou.mp3
26/12/2011  01:41 p.m.         5.949.440 IBF01 - 14 - Carvalho, Beth - Fim de Reinado (ao vivo).mp3
11/01/2012  09:12 p.m.         6.758.528 IBF01 - 15 - Carvalho, Beth - Samba no quintal.mp3
09/02/2012  08:45 p.m.        13.305.856 IBF01 - 16 - Santiago, Emilio - Aquarela do Brasil.mp3
25/12/2011  03:15 a.m.         9.560.192 IBF01 - 17 - Simone - T“ Voltando.mp3
29/12/2011  04:54 p.m.         8.571.008 IBF01 - 18 - Nascimento, Milton - A de ¢ (Estamos chegando).mp3
07/02/2012  04:33 p.m.         6.809.728 IBF01 - 19 - Vivaldi (The Royal Vivaldi Symphony) - La primavera - 1.Allegro (Le quattro stagioni op.8-1, RV 269).mp3
03/01/2012  02:14 a.m.        12.947.456 IBF01 - 21 - Bach (Henryk Szeryng - Sir Neville Marriner - Academy of St. Martin in the Fields) - Air (on the G-string), Suite No.3 in D.mp3
17/10/2011  05:59 p.m.         6.828.160 IBF02 - 01 - Lennon, John - Oh My Love.mp3
17/10/2011  06:05 p.m.         8.226.944 IBF02 - 02 - Lennon, John - Love.mp3
09/02/2012  07:52 p.m.         5.699.584 IBF02 - 03 - Veloso, Caetano - Sete mil vezes.mp3
09/02/2012  07:59 p.m.         6.328.320 IBF02 - 04 - Veloso, Caetano - Coqueiro de ItapoÆ.mp3
08/02/2012  07:57 p.m.        10.150.016 IBF02 - 05 - Veloso, Caetano - Canto do Povo de um lugar.mp3
07/02/2012  07:26 p.m.         7.725.184 IBF02 - 06 - Veloso, Caetano - Coisa mais linda.mp3
05/02/2012  01:55 a.m.         7.198.720 IBF02 - 07 - Harrison, George - I'd Have You Anytime.mp3
07/02/2012  11:04 p.m.        10.217.600 IBF02 - 09 - Harrison, George - Learning To Love You.mp3
08/02/2012  02:15 p.m.         8.083.456 IBF02 - 10 - Williams, Paul - We've Only Just Begun.mp3
26/12/2011  06:47 p.m.         7.600.128 IBF02 - 11 - Williams, Paul - Nice To Be Around.mp3
30/12/2011  02:32 a.m.         8.558.720 IBF02 - 12 - Williams, Paul - Sleep Warm.mp3
24/12/2011  03:32 p.m.         8.964.224 IBF02 - 13 - Carpenters - (They Long To Be) Close To You.mp3
08/02/2012  02:18 p.m.         7.248.000 IBF02 - 14 - Baez, Joan - Stewball.mp3
09/02/2012  08:05 p.m.         5.898.240 IBF02 - 15 - Veloso, Caetano - Trem das cores.mp3
10/02/2012  06:10 p.m.         9.459.712 IBF02 - 16 - Monte, Marisa - Alta Noite.mp3
11/12/2011  06:11 p.m.         6.166.528 IBF02 - 17 - Monte, Marisa - Bem Leve.mp3
08/02/2012  02:05 p.m.         6.205.440 IBF02 - 18 - de Moraes-Creuza-Toquinho - Se todos fossem iguais a vocˆ.mp3
12/01/2012  01:17 a.m.         8.376.320 IBF02 - 19 - Mendes, Sergio - Apos o Amanhecer.mp3
11/01/2012  08:56 p.m.         7.319.680 IBF02 - 20 - Carvalho, Beth - Andan‡a.mp3
26/12/2011  02:43 a.m.         9.975.808 IBF02 - 21 - Monte, Marisa - Xote das meninas.mp3
08/02/2012  02:08 p.m.         5.971.539 IBF02 - 23 - Regina, Elis - Redescobrir.mp3
23/12/2011  07:00 p.m.        10.666.112 IBF03 - 01 - Regina, Elis - Gracias a la vida.mp3
07/01/2012  02:54 p.m.         8.444.032 IBF03 - 02 - Sosa, Mercedes - Gracias a la vida.mp3
08/02/2012  11:29 a.m.        11.530.240 IBF03 - 03 - Sosa, Mercedes - Todo Cambia.mp3
11/02/2012  05:12 p.m.        11.409.536 IBF03 - 04 - Sosa, Mercedes - Y dale alegr¡a a mi coraz¢n.mp3
11/02/2012  05:13 p.m.         7.424.128 IBF03 - 05 - Sosa, Mercedes - Vientos del alma.mp3
08/02/2012  12:24 p.m.        11.802.752 IBF03 - 06 - OST Don Juan de Marco (Adams, Bryan) - Have You Ever Realy Loved A Woman.mp3
05/02/2012  01:55 a.m.        11.393.024 IBF03 - 07 - Harrison, George - My Sweet Lord.mp3
05/01/2012  02:58 p.m.         6.359.168 IBF03 - 08 - Carpenters - Sing.mp3
07/02/2012  01:13 p.m.         8.910.848 IBF03 - 09 - Nunes, Clara - Conto de Areia.mp3
10/02/2012  01:04 a.m.         6.983.680 IBF03 - 10 - Creuza, Maria - Morena flor.mp3
10/02/2012  09:55 p.m.         6.823.387 IBF03 - 11 - Pagodinho, Zeca - Deixa a vida me levar.mp3
11/02/2012  05:09 p.m.         5.024.440 IBF03 - 12 - Carvalho, Beth - Coisa de Pele.mp3
24/12/2011  12:05 p.m.         9.408.640 IBF03 - 13 - Carvalho, Beth - Sonhando Eu Sou Feliz.mp3
10/02/2012  03:56 p.m.         9.771.008 IBF03 - 14 - Veloso, Caetano - Rumba Azul.mp3
24/12/2011  04:27 p.m.         8.566.784 IBF03 - 15 - Veloso, Caetano - NÆo Enche.mp3
07/02/2012  12:55 p.m.        10.520.704 IBF03 - 16 - Gonzaguinha - O qu‚ ‚ O qu‚ ‚.mp3
13/02/2012  10:43 p.m.        10.569.856 IBF03 - 17 - Vivaldi (Herbert von Karajan - Berliner Philharmoniker) - Allegro - Concerto L'Amoroso - 1, RV 271.mp3
06/10/2011  11:40 a.m.         4.737.024 IBF03 - 19 - Vivaldi (Riccardo Muti - New Philharmonia Orchestra & Chorus) - Gloria in excelsis Deo - Gloria in Re Maggiore - 1, RV 589.mp3
01/08/2011  09:21 p.m.         7.140.915 IBF03 - 20 - Haendel (Sir Georg Solti - Chicago Symphony Orchestra & Chorus) - Hallelujah - Messiah, HWV 56 - Part II-42.mp3
09/02/2012  08:42 p.m.         8.611.840 IBF04 - 01 - Monte, Marisa - Preciso me encontrar.mp3
07/02/2012  01:58 p.m.        10.031.104 IBF04 - 02 - Monte, Marisa - Lenda das Sereias Rainha do Mar.mp3
21/05/2011  02:02 p.m.         4.677.556 IBF04 - 03 - Carvalho, Beth - Olho por Olho.mp3
21/05/2011  02:01 p.m.         6.307.467 IBF04 - 04 - Carvalho, Beth - Vocˆ, Eu e a Orgia.mp3
11/01/2012  10:59 p.m.         6.045.696 IBF04 - 05 - Carvalho, Beth - Senhora rezadeira.mp3
08/02/2012  01:58 p.m.         7.045.120 IBF04 - 06 - Nunes, Clara - Juizio Final.mp3
21/05/2011  02:48 p.m.         3.123.997 IBF04 - 07 - Carvalho, Beth - For‡a da imagina‡Æo.mp3
02/01/2012  01:04 p.m.         6.228.096 IBF04 - 08 - da Vila, Martinho - Canta, Canta minha gente.mp3
26/12/2011  01:41 p.m.         5.943.296 IBF04 - 10 - Carvalho, Beth - Folhas secas (ao vivo).mp3
11/01/2012  10:59 p.m.         5.617.664 IBF04 - 11 - Carvalho, Beth - Pedi ao c‚u.mp3
05/01/2012  04:05 p.m.         6.940.800 IBF04 - 12 - da Vila, Martinho - Vai ou NÆo Vai.mp3
25/12/2011  07:57 p.m.         9.365.632 IBF04 - 13 - Gil, Gilberto - Toda menina baiana.mp3
03/01/2012  02:43 a.m.        11.524.224 IBF04 - 14 - Gil, Gilberto - Quilombo, O Eldorado Negro.mp3
25/12/2011  01:10 p.m.         9.402.368 IBF04 - 15 - Santiago, Emilio - Isto Aqui O Que -.mp3
26/12/2011  02:05 a.m.         7.272.448 IBF04 - 16 - Nunes, Clara - Na linha do mar.mp3
07/02/2012  05:18 p.m.        10.704.896 IBF04 - 17 - Veloso, Caetano - Queixa.mp3
24/12/2011  05:03 p.m.         7.354.368 IBF04 - 18 - Veloso, Caetano - Um Canto de Afox‚ Para O Bloco do Ilˆ.mp3
07/02/2012  01:12 p.m.         9.107.584 IBF04 - 19 - Nunes, Clara - Portela na Avenida.mp3
26/12/2011  01:41 p.m.        11.673.600 IBF04 - 20 - Carvalho, Beth - A sete chaves-CamarÆo que dorme a onda leva-Dor de amor (ao vivo).mp3
26/12/2011  01:41 p.m.        12.621.824 IBF04 - 21 - Carvalho, Beth - Saco de FeijÆo-Corda no pesco‡o-Sonhando eu sou feliz (ao vivo).mp3
07/02/2012  01:27 p.m.         7.544.832 IBF04 - 22 - Nunes, Clara - Meu Sapato J  Furou.mp3
12/01/2012  01:08 p.m.         6.508.544 IBF05 - 01 - Ramalho, Elba - Bate Cora‡Æo.mp3
25/12/2011  08:06 p.m.        10.590.336 IBF05 - 02 - Gil, Gilberto - Esperando Na Janela.mp3
08/02/2012  07:59 p.m.         4.981.616 IBF05 - 03 - do Acordeon, Pinto - PaixÆo de Beata.mp3
20/05/2011  06:05 p.m.         4.055.090 IBF05 - 04 - Ramalho, Elba - Que Nem Vem Vem.mp3
31/12/2011  11:10 a.m.         5.632.000 IBF05 - 05 - Prado, P‚rez - Mambo No. 5.mp3
12/01/2012  01:08 p.m.         5.273.600 IBF05 - 06 - Ramalho, Elba - No Som da Sanfona.mp3
11/01/2012  11:24 p.m.         8.749.184 IBF05 - 07 - Carvalho, Beth - O Encanto do Gantois.mp3
23/05/2011  01:32 p.m.         5.154.829 IBF05 - 08 - Pereira, Nazar‚ - Valente Nordeste.mp3
21/05/2011  02:06 p.m.         3.442.609 IBF05 - 09 - Carvalho, Beth - Eu quero mais.mp3
08/02/2012  01:31 p.m.         8.050.688 IBF05 - 10 - Nunes, Clara & Sivuca - Feira de mangaio.mp3
15/01/2012  08:29 p.m.         5.132.416 IBF05 - 11 - Sivuca - Fava de Cheiro.mp3
15/01/2012  08:29 p.m.         4.771.968 IBF05 - 12 - Sivuca - O Baile de Bio Laurinda.mp3
23/05/2011  01:47 p.m.         3.913.716 IBF05 - 13 - Ramalho, Elba - Eu quero meu amor.mp3
29/06/2011  11:46 a.m.         4.990.091 IBF05 - 14 - Agepˆ - Feito de encomenda.mp3
08/02/2012  01:38 p.m.         7.069.824 IBF05 - 15 - Los Wawanco - Me gusta tu rosa roja.mp3
09/02/2012  04:14 p.m.         7.186.535 IBF05 - 16 - Ca¤a Brava - Me muero por ella.mp3
20/05/2011  06:29 p.m.         4.465.189 IBF05 - 17 - Ramalho, Elba - Folia Brasileira.mp3
12/01/2012  01:30 p.m.         7.946.240 IBF05 - 18 - Guerra, Juan Luis y 4.40 - La Bilirrubina.mp3
23/05/2011  01:32 p.m.         4.904.676 IBF05 - 19 - Pereira, Nazar‚ - Rodopiou.mp3
08/02/2012  01:36 p.m.         7.778.432 IBF05 - 20 - Costa, Gal - Festa do interior.mp3
10/02/2012  01:08 a.m.         8.212.480 IBF05 - 21 - Mercury, Daniela - Batuque.mp3
25/12/2011  02:20 p.m.        12.423.296 IBF05 - 22 - Costa, Gal - Bumbo da Mangueira.mp3
11/02/2012  05:11 p.m.         4.026.931 IBF05 - 23 - Neri, Antonio  - Ciranda.mp3
09/02/2012  08:59 p.m.         5.306.327 IBF06 - 01 - Traditional Jazz Band - Doctor Jazz.mp3
12/12/2011  01:22 p.m.         8.845.312 IBF06 - 02 - Traditional Jazz Band - Hello Dolly!.mp3
15/07/2011  11:03 p.m.         6.102.630 IBF06 - 03 - The New Orleans Banjo Band - Sweet Georgia Brown.mp3
26/12/2011  11:01 p.m.         6.971.392 IBF06 - 04 - The Beatles - Hello, Goodbye [Part].mp3
05/02/2012  09:32 p.m.        10.162.304 IBF06 - 05 - The New American Orchestra - End Title [Part].mp3
29/09/2011  10:33 p.m.         9.185.408 IBF06 - 06 - Antigua Jazz Band - The Man I Love.mp3
15/07/2011  11:21 p.m.         5.829.822 IBF06 - 07 - The New Orleans Banjo Band - Alexander's Rag Time.mp3
26/12/2011  11:25 p.m.         4.990.976 IBF06 - 08 - The Beatles - Honey Pie [Part].mp3
15/07/2011  11:41 p.m.         6.369.641 IBF06 - 09 - The New Orleans Banjo Band - Who's Sorry Now.mp3
10/06/2011  02:14 a.m.         4.672.111 IBF06 - 10 - Traditional Jazz Band - Mississippi Mud.mp3
09/06/2011  04:08 p.m.         6.147.346 IBF06 - 11 - Armstrong, Louis - The Faithful Hussar.mp3
05/01/2012  12:42 p.m.         5.441.536 IBF06 - 12 - OST Sleepless In Seattle (Cormik Jr, Harry) - A Wink And A Smile.mp3
15/07/2011  11:26 p.m.         5.105.119 IBF06 - 13 - The New Orleans Banjo Band - The Darktown Strutter's Ball.mp3
15/07/2011  11:05 p.m.         5.898.159 IBF06 - 14 - The New Orleans Banjo Band - Ja-Da.mp3
15/07/2011  11:14 p.m.         4.904.503 IBF06 - 15 - The New Orleans Banjo Band - Ain't She Sweet.mp3
10/02/2012  12:49 a.m.         3.251.564 IBF06 - 16 - Maddox, Johnny - Japanese Sandman.mp3
24/06/2011  04:57 a.m.         4.695.641 IBF06 - 17 - The Dukes Of Dixieland - My Blue Heaven (vocal Betty Owens).mp3
02/01/2012  06:57 p.m.         5.865.600 IBF06 - 18 - Goodman, Benny - Oh! Lady Be Good.mp3
16/06/2011  11:00 p.m.         4.895.555 IBF06 - 19 - Light, Enoch & The Light Brigade - Begin The Beguine.mp3
16/06/2011  11:00 p.m.         5.222.257 IBF06 - 20 - Light, Enoch & The Light Brigade - In The Mood.mp3
13/06/2011  01:19 a.m.         7.642.436 IBF06 - 21 - Jazz Caliente - Eh-la-Bas.mp3
15/07/2011  11:36 p.m.         5.327.644 IBF06 - 22 - The New Orleans Banjo Band - When The Saints Go Marchin' In.mp3
25/12/2011  02:59 p.m.        14.053.504 IBF07 - 01 - Jones, Grace - La vie en rose [Part].mp3
04/01/2012  10:32 a.m.         5.122.176 IBF07 - 02 - Les troubadours du roi Baudoin - Missa Luba. Kyrie.mp3
15/07/2011  11:32 p.m.         4.674.397 IBF07 - 03 - The New Orleans Banjo Band - Tiger Rag.mp3
17/10/2011  06:12 p.m.         6.412.416 IBF07 - 04 - Lennon, John - Be-Bop-A-Lula.mp3
26/12/2011  04:55 p.m.         7.563.264 IBF07 - 05 - Goodman, Benny - King Porter Stomp.mp3
08/02/2012  11:20 a.m.         2.926.887 IBF07 - 06 - Maddox, Johnny - When You're Smiling.mp3
26/12/2011  03:10 p.m.         9.531.520 IBF07 - 07 - Harrison, George - Dark Horse.mp3
08/02/2012  01:57 p.m.         5.374.080 IBF07 - 08 - Haley, Bill & His Comets - Rock Around The Clock.mp3
26/12/2011  10:37 p.m.         5.431.424 IBF07 - 09 - The Beatles - Can't Buy Me Love.mp3
17/10/2011  06:16 p.m.         3.893.376 IBF07 - 10 - Lennon, John - Medley. a) Rip It Up - b) Read Teddy.mp3
08/02/2012  01:25 p.m.         9.519.104 IBF07 - 11 - Mercury, Daniela - S¢ pra te mostrar.mp3
07/02/2012  08:04 p.m.         4.986.607 IBF07 - 12 - Guem - Riacho [Part].mp3
07/02/2012  01:50 p.m.        15.032.320 IBF07 - 13 - Baroty & Dieng - Voyage dans l'au-del….mp3
10/02/2012  12:44 a.m.        12.490.752 IBF07 - 14 - Baroty & Dieng - Appel des esprits [Part].mp3
07/02/2012  01:41 p.m.         6.244.480 IBF07 - 15 - Os Ritmistas Brasileiros - Ensaio Geral.mp3
07/02/2012  01:48 p.m.         2.513.024 IBF07 - 16 - Os Ritmistas Brasileiros - Tamborins.mp3
16/05/2011  01:59 p.m.         4.235.273 IBF07 - 17 - Milton Banana Trio - Cidade Vazia.mp3
12/06/2011  03:27 a.m.         3.464.278 IBF07 - 18 - Goodman, Benny - After You've Gone (Take 2).mp3
16/06/2011  11:06 p.m.         5.589.099 IBF07 - 19 - Light, Enoch & The Light Brigade - Moonlight Serenade.mp3
09/02/2012  11:18 p.m.         4.135.477 IBF07 - 20 - Traditional Jazz Band - Sweet Lorraine.mp3
17/06/2011  04:36 a.m.         4.339.276 IBF07 - 21 - Strauss II, Johann - An der sch”nen blauen Donau, op.314 [Part].mp3
13/06/2011  03:15 a.m.         6.359.860 IBF07 - 22 - Strauss II, Johann - Kaiserwalzer, op.437.mp3
15/10/2011  12:18 p.m.         5.752.960 IBF07 - 23 - Delibes (David Zinman - Rotterdam Philharmonic Orchestra) - Valse - Ballet Copp‚lia - Acte I-2.mp3
11/02/2012  07:22 p.m.         5.224.576 IBF07 - 24 - Fitzgerald, Ella - I've Got You Under My Skin.mp3
17/06/2011  03:14 a.m.         2.323.890 IBF07 - 25 - Bord¢n, Luis - Harpa paragu ia.mp3
11/12/2011  02:26 p.m.         5.871.744 IBF08 - 01 - Armstrong, Louis - Hello, Dolly!.mp3
07/11/2011  03:56 p.m.         5.423.104 IBF08 - 02 - Cole, Natalie - This Can't Be Love.mp3
09/02/2012  11:19 p.m.         6.139.904 IBF08 - 03 - Cole, Natalie - L-O-V-E.mp3
08/02/2012  01:53 p.m.        11.241.600 IBF08 - 04 - Fitzgerald, Ella - Mack The Knife (Live in Berlin).mp3
07/02/2012  04:08 p.m.         3.979.392 IBF08 - 05 - Fitzgerald, Ella - What Is This Thing Called Love.mp3
07/02/2012  04:37 p.m.         8.343.680 IBF08 - 06 - Gipsy Kings - Djobi Djoba.mp3
08/02/2012  11:04 a.m.        13.318.144 IBF08 - 07 - Gipsy Kings - Viento del Arena.mp3
12/05/2011  05:23 p.m.         4.496.710 IBF08 - 08 - Chico & The Gipsies - Viva la vida.mp3
07/02/2012  02:00 p.m.         8.421.504 IBF08 - 09 - Cole, Natalie - Unforgettable (duet with Nat King Cole).mp3
07/02/2012  11:51 a.m.         8.962.048 IBF08 - 10 - Franklin, Aretha - Unforgettable.mp3
25/12/2011  04:38 p.m.        10.096.640 IBF08 - 11 - Piazzolla-Mulligan - Years Of Solitude.mp3
24/12/2011  07:32 p.m.         9.465.984 IBF08 - 12 - OST A Chorus Line - One (Finale).mp3
11/02/2012  04:51 p.m.        11.880.576 IBF08 - 13 - Coltrane, John & Ellington, Duke - My Little Brown Book [Part].mp3
07/02/2012  03:10 p.m.        10.143.872 IBF08 - 14 - Barbieri, Gato - Europa (Earth's Cry Heaven's Smile).mp3
24/12/2011  10:01 p.m.        10.664.064 IBF08 - 15 - Jones, Quincy & His Orchestra - Quintessence.mp3
24/12/2011  07:03 p.m.        10.438.784 IBF08 - 16 - Coltrane, John - Say It (Over and Over Again).mp3
07/11/2011  04:49 p.m.        10.481.792 IBF08 - 17 - The New American Orchestra - Love Theme.mp3
24/12/2011  09:43 p.m.        10.369.152 IBF08 - 18 - Coltrane, John & Ellington, Duke - In A Sentimal Mood.mp3
09/02/2012  03:05 p.m.        13.529.216 IBF08 - 19 - James, Bob & Sanborn, David - You Don't Know Me.mp3
08/02/2012  01:06 p.m.        10.131.584 IBF08 - 20 - OST Taxi Driver - Theme From Taxi Driver (Sax Tom Scott).mp3
27/12/2011  12:02 a.m.         6.842.368 IBF09 - 01 - The Beatles - Because.mp3
23/12/2011  09:13 p.m.        10.946.560 IBF09 - 03 - Zamfir, Gheorghe - Bilitis.mp3
23/12/2011  08:04 p.m.        10.508.288 IBF09 - 04 - Zamfir, Gheorghe - Elsha.mp3
02/01/2012  01:03 p.m.         9.775.232 IBF09 - 05 - Zamfir, Gheorghe - She.mp3
08/02/2012  02:27 p.m.         5.536.266 IBF09 - 06 - Poyares, Carlos - Rosa.mp3
23/05/2011  04:45 p.m.         2.895.878 IBF09 - 07 - Add‚o, L‚o - Sweet Leilani.mp3
08/02/2012  02:01 p.m.         5.070.976 IBF09 - 08 - Veloso, Caetano - Muito [Part].mp3
05/02/2012  01:02 a.m.         9.973.760 IBF09 - 11 - Harrison, George - Be Here Now.mp3
05/02/2012  12:13 a.m.         9.668.608 IBF09 - 12 - Harrison, George - Ooh Baby (You Know That I Love You).mp3
05/02/2012  01:02 a.m.         9.228.288 IBF09 - 13 - Harrison, George - Who Can See It.mp3
05/02/2012  12:13 a.m.        13.379.584 IBF09 - 14 - Harrison, George - The Answer's At The End.mp3
05/02/2012  01:02 a.m.         8.394.752 IBF09 - 15 - Harrison, George - The Light Thas Has Lighted The World.mp3
16/07/2011  08:12 p.m.         5.270.983 IBF09 - 16 - Van Leer, Thijs - Reigen Seliger Geister (From 'Orfeo ed Euridice') [Part 1].mp3
16/07/2011  08:11 p.m.         9.455.799 IBF09 - 17 - Van Leer, Thijs - Reigen Seliger Geister (From 'Orfeo ed Euridice') [Part 2].mp3
17/06/2011  01:43 p.m.         5.102.918 IBF09 - 18 - Haendel - Larghetto (Transcr for Flute-Organ) Violin sonata Nø 13 D Major - 3, op.11 HWV 371.mp3
03/10/2011  11:25 p.m.        10.156.032 IBF09 - 19 - Bach (Herbert Mnchner - Sdwest-Studioorchester) - Adagio - Concerto Brandebourgeois 1 - 2,  F-Dur BWV 1046.mp3
07/02/2012  12:44 p.m.        18.561.152 IBF09 - 20 - Jarre, Jean-Michel - OxygŠne, Pt. 1.mp3
12/10/2011  12:06 p.m.         6.842.496 IBF10 - 01 - Shepherd, Dave & His Quintet - The Man I Love.mp3
11/11/2011  03:35 p.m.         8.310.912 IBF10 - 02 - Fitzgerald, Ella - The Man I Love (Live in Berlin).mp3
11/11/2011  03:58 p.m.         9.013.248 IBF10 - 03 - Fitzgerald, Ella - Laura.mp3
09/02/2012  11:59 p.m.         6.234.240 IBF10 - 04 - Fitzgerald, Ella - Blue Moon.mp3
26/12/2011  04:59 p.m.         8.286.336 IBF10 - 05 - Goodman, Benny - Goodbye.mp3
12/12/2011  01:22 p.m.         7.714.816 IBF10 - 06 - Traditional Jazz Band - Mood Indigo.mp3
07/11/2011  05:04 p.m.         9.894.016 IBF10 - 07 - The New American Orchestra - One More Kiss, Dear (Vocal John Bahler).mp3
29/06/2011  04:10 p.m.         4.256.724 IBF10 - 08 - Goodman, Benny - Body And Soul (Take 1).mp3
12/06/2011  03:25 a.m.         4.168.699 IBF10 - 09 - Goodman, Benny - Moonglow (Take 1).mp3
07/11/2011  02:59 a.m.         9.515.136 IBF10 - 10 - Legrand, Michel - Theme From Summer Of '42.mp3
07/02/2012  11:03 p.m.         8.497.280 IBF10 - 11 - OST James Bond - Nobody Does It Better (vocal Carly Simon).mp3
07/02/2012  04:43 p.m.         8.677.504 IBF10 - 12 - Albert, Morris - Feelings.mp3
07/11/2011  04:02 p.m.        10.346.624 IBF10 - 13 - Cole, Natalie - The Very Thought Of You.mp3
07/11/2011  04:08 p.m.        10.711.168 IBF10 - 14 - Cole, Natalie - For Sentimental Reasons-Tenderly.mp3
23/12/2011  07:17 p.m.         7.411.840 IBF10 - 15 - Regina, Elis - Fascina‡Æo.mp3
10/02/2012  03:08 p.m.         6.212.090 IBF10 - 16 - Wando - Mo‡a.mp3
13/02/2012  10:59 p.m.         8.099.840 IBF10 - 17 - Franz, Charles - Improvisasion.mp3
04/11/2011  07:43 p.m.        12.415.104 IBF10 - 18 - Brahms (Christoph von Dohn nyi - The Cleveland Orchestra) - Poco Allegretto - Sinfonie 3 F-Dur - 3, op.90.mp3
07/02/2012  05:44 p.m.         3.388.181 IBF10 - 21 - Chopin - Largo - Pr‚lude nø4 en mi mineur - 24 Pr‚ludes, op. 28.mp3
07/02/2012  03:22 p.m.         7.391.360 IBF11 - 01 - de Bel‚m, Faf  - Tamba-Taj .mp3
09/12/2011  10:04 p.m.        10.451.072 IBF11 - 02 - de Bel‚m, Faf  - Pode entrar.mp3
08/02/2012  05:23 p.m.         5.129.720 IBF11 - 03 - de Bel‚m, Faf  - Araguaia.mp3
11/02/2012  09:20 p.m.        10.489.856 IBF11 - 04 - Simone, Nina - Little Girl Blue.mp3
09/02/2012  07:37 p.m.         9.281.536 IBF11 - 05 - Enya - Evening Falls....mp3
09/02/2012  02:20 p.m.        10.549.376 IBF11 - 06 - Flack, Roberta - The First Time Ever I Saw Your Face.mp3
23/12/2011  07:41 p.m.        12.331.136 IBF11 - 07 - Zamfir, Gheorghe - M‚ditation de Tha‹s (d'aprŠs Jules Massenet).mp3
30/05/2011  02:24 p.m.         6.858.331 IBF11 - 08 - Posit, Jean-Pierre - Magie d'amour.mp3
26/12/2011  08:47 p.m.         5.015.552 IBF11 - 09 - Kitaro - Earth Born.mp3
09/02/2012  11:52 p.m.         7.297.024 IBF11 - 10 - Enya - To Go Beyond, Pt. 2.mp3
24/12/2011  05:45 p.m.         5.894.144 IBF11 - 11 - Enya - Watermark.mp3
12/10/2011  11:59 a.m.         8.786.048 IBF11 - 12 - Liszt (Daniel Barenbo‹m) - Liebestr„um nø3 in As-Dur - Liebestr„ume, S.541.mp3
11/08/2011  12:58 p.m.        12.214.145 IBF11 - 13 - Schubert (Krystian Zimerman) - Impromptu nø3 in Ges-Dur (Andante) - Impromptus op.90 D 899.mp3
12/10/2011  12:01 p.m.         8.175.744 IBF11 - 14 - Liszt (Daniel Barenbo‹m) - Consolation nø3 en R‚ b‚mol Majeur (Lento placido) - Six consolations, S 172.mp3
03/10/2011  03:44 p.m.        12.011.648 IBF11 - 15 - Schubert (OST The Hunger) - Andante con moto (Version 2) - Klaviertrio nø2 in Es-Dur - 2, op.100 D 929.mp3
17/10/2011  06:20 p.m.         7.618.688 IBF11 - 16 - Lennon, John - Imagine.mp3
10/01/2012  01:01 p.m.         6.412.416 IBF11 - 18 - Mouskouri, Nana - Photographs.mp3
18/04/2011  05:00 a.m.         3.925.390 IBF11 - 19 - Creuza, Maria - A noite do meu bem.mp3
08/02/2012  06:36 p.m.        11.374.720 IBF11 - 20 - Jobim, Tom & Lobo, Ed£ - Pra dizer adeus.mp3
07/02/2012  04:48 p.m.         8.445.952 IBF12 - 01 - de Moraes-Creuza-Toquinho - Eu sei que vou te amar.mp3
25/12/2011  05:58 p.m.         9.177.088 IBF12 - 02 - de Moraes-Creuza-Toquinho - Minha Namorada.mp3
08/02/2012  06:38 p.m.         7.485.440 IBF12 - 03 - Creuza, Maria - Eu e a brisa.mp3
10/02/2012  12:15 a.m.         7.604.224 IBF12 - 04 - Simone - Come‡aria tudo otra vez.mp3
20/05/2011  11:51 p.m.         3.771.559 IBF12 - 05 - Caymmi, Nana - A noite do meu bem.mp3
11/02/2012  04:39 p.m.         4.688.804 IBF12 - 06 - Santiago, Emilio - ManhÆ de carnaval.mp3
23/04/2011  01:51 a.m.         7.070.402 IBF12 - 07 - Santiago, Emilio - Insensatez.mp3
11/02/2012  04:30 p.m.         6.015.389 IBF12 - 08 - Santiago, Emilio - Corcovado.mp3
23/12/2011  10:32 p.m.        10.078.208 IBF12 - 09 - Simone - Simples carinho.mp3
10/02/2012  12:22 a.m.        10.663.936 IBF12 - 10 - Simone - Jura secreta.mp3
12/02/2012  11:03 a.m.         4.282.888 IBF12 - 11 - Creuza, Maria - Eu disse adeus.mp3
08/02/2012  01:04 p.m.         5.367.490 IBF12 - 12 - Creuza, Maria - Gra‡as a deus.mp3
20/05/2011  11:03 p.m.         5.508.036 IBF12 - 13 - Caymmi, Nana - Pra voce.mp3
26/12/2011  12:35 p.m.         9.975.808 IBF12 - 14 - Caymmi, Nana - Doce Presen‡a.mp3
09/02/2012  03:14 p.m.         6.619.767 IBF12 - 15 - Caymmi, Nana - O Amor ‚ chama.mp3
07/02/2012  03:14 p.m.         6.454.981 IBF12 - 16 - Peixoto, Araken - Someone To Watch Over Me.mp3
24/05/2011  04:00 p.m.         5.109.903 IBF12 - 17 - Peixoto, Araken - Estate.mp3
07/02/2012  03:16 p.m.         4.832.352 IBF12 - 18 - Peixoto, Araken - Nature Boy.mp3
07/02/2012  03:12 p.m.         4.308.862 IBF12 - 19 - Peixoto, Araken - As Time Goes By.mp3
24/05/2011  04:00 p.m.         4.950.040 IBF12 - 20 - Peixoto, Araken - Flamingo.mp3
24/05/2011  04:00 p.m.         4.810.292 IBF12 - 21 - Peixoto, Araken - Who Needs Forever.mp3
09/12/2011  04:37 p.m.        11.382.912 IBF13 - 01 - Krall, Diana - I Miss You So.mp3
08/02/2012  06:21 p.m.         8.218.752 IBF13 - 02 - Merrill, Helen - When I Fall In Love.mp3
11/02/2012  04:54 p.m.         5.428.603 IBF13 - 03 - Caymmi, Nana - Atr s da porta.mp3
11/02/2012  04:58 p.m.         5.425.184 IBF13 - 04 - Creuza, Maria - Apelo.mp3
09/12/2011  05:05 p.m.        15.030.400 IBF13 - 05 - Krall, Diana - I Don't Stand A Ghost Of A Chance With You.mp3
24/12/2011  01:22 p.m.         7.831.552 IBF13 - 06 - Baker, Chet - Almost Blue.mp3
10/02/2012  12:22 a.m.        11.747.328 IBF13 - 07 - Simone - O que Ser .mp3
09/02/2012  03:18 p.m.         4.894.720 IBF13 - 08 - Caymmi, Nana - Isso e aquilo.mp3
26/12/2011  12:35 p.m.         9.504.768 IBF13 - 09 - Caymmi, Nana - Voz e Suor.mp3
11/02/2012  04:55 p.m.         8.957.952 IBF13 - 10 - Caymmi, Nana - Velho Piano.mp3
11/02/2012  04:55 p.m.         6.377.472 IBF13 - 11 - Caymmi, Nana - Neste mesmo lugar.mp3
09/02/2012  03:16 p.m.         4.898.171 IBF13 - 12 - Caymmi, Nana - Por causa de vo‡ˆ.mp3
26/12/2011  12:35 p.m.         8.060.928 IBF13 - 13 - Caymmi, Nana - Por toda minha vida.mp3
11/02/2012  04:57 p.m.         4.519.936 IBF13 - 14 - Caymmi, Nana - Valer  a pena.mp3
20/05/2011  11:09 p.m.         4.387.146 IBF13 - 15 - Caymmi, Nana - Nunca mais.mp3
20/05/2011  11:24 p.m.         5.548.048 IBF13 - 16 - Caymmi, Nana - Rama de nuvens.mp3
08/02/2012  01:01 p.m.         5.684.572 IBF13 - 17 - Creuza, Maria - Medo de amar nø 2.mp3
20/04/2011  02:11 p.m.         4.317.846 IBF13 - 18 - Simone - Proposta.mp3
07/02/2012  02:53 p.m.         8.355.840 IBF13 - 19 - Merrill, Helen - Summertime.mp3
06/02/2012  11:49 p.m.         6.369.280 IBF13 - 20 - Merrill, Helen - I See Your Face Before Me.mp3
25/12/2011  10:34 p.m.        12.191.744 IBF13 - 21 - Merrill, Helen - Angel Eyes.mp3
25/12/2011  10:30 p.m.         6.625.280 IBF13 - 22 - Merrill, Helen - I'll Be Around.mp3
11/02/2012  05:00 p.m.         8.474.624 IBF14 - 01 - de Moraes-Creuza-Toquinho - Samba em preludio.mp3
25/12/2011  06:26 p.m.        10.307.584 IBF14 - 02 - Getz, Stan & Gilberto, JoÆo - Corcovado (feat. Astrud Gilberto).mp3
07/02/2012  06:00 p.m.        12.689.408 IBF14 - 03 - Getz, Stan & Gilberto, JoÆo - The Girl From Ipanema (feat. Astrud Gilberto).mp3
25/12/2011  01:41 p.m.        13.195.264 IBF14 - 04 - Santiago, Emilio - Anos dourados-Eu sei que vou te amar.mp3
07/02/2012  02:55 p.m.        14.682.112 IBF14 - 05 - Santiago, Emilio - Nada por Mim-Fullg s.mp3
07/02/2012  02:57 p.m.        13.189.120 IBF14 - 06 - Santiago, Emilio - Ronda-Sampa.mp3
23/04/2011  12:33 a.m.         7.046.440 IBF14 - 07 - Santiago, Emilio - Verdade chinesa.mp3
25/12/2011  01:10 p.m.        11.804.672 IBF14 - 08 - Santiago, Emilio - P‚rola Negra-Bem que se Quis.mp3
25/12/2011  01:10 p.m.        10.954.752 IBF14 - 09 - Santiago, Emilio - Mania de Vocˆ-Lan‡a Perfume.mp3
08/02/2012  06:44 p.m.         7.088.128 IBF14 - 10 - Creuza, Maria - De onde vens.mp3
25/12/2011  04:12 p.m.         7.292.928 IBF14 - 11 - Creuza, Maria - Queixas.mp3
25/12/2011  04:12 p.m.         8.359.936 IBF14 - 12 - Creuza, Maria - Mas que doidice.mp3
08/02/2012  06:43 p.m.         5.494.784 IBF14 - 13 - Creuza, Maria - Foi a noite.mp3
08/02/2012  06:46 p.m.         9.578.496 IBF14 - 14 - Creuza, Maria - Vocˆ abusou.mp3
06/02/2012  11:37 p.m.         5.809.478 IBF14 - 15 - Piazzolla, Astor & Agri, Antonio - Uomo del Sud (Violin).mp3
04/05/2011  02:04 a.m.         4.185.025 IBF14 - 16 - Piazzolla, Astor - Libertango.mp3
07/02/2012  12:05 p.m.         8.538.112 IBF14 - 17 - Franklin, Aretha - What A Diff'rence A Day Made.mp3
08/02/2012  12:16 a.m.         8.337.536 IBF14 - 18 - Fitzgerald, Ella - Mood Indigo.mp3
07/11/2011  12:42 p.m.         7.702.656 IBF14 - 19 - OST Somewhere In Time - Is He The One.mp3
04/01/2012  07:47 p.m.         4.851.840 IBF15 - 01 - Strauss, Richard (Zubin Mehta - Los Angeles Philharmonic) - Einleitung - Also sprach Zarathustra op.30.mp3
26/12/2011  08:47 p.m.         6.457.344 IBF15 - 02 - Kitaro - Japanese Drums.mp3
27/12/2011  01:42 a.m.        12.388.480 IBF15 - 03 - Pink Floyd - Have A Cigar.mp3
31/12/2011  04:49 p.m.        12.644.480 IBF15 - 04 - Christian, Emma - Oikan Ayns Bethlehem.mp3
07/02/2012  11:15 p.m.         9.342.976 IBF15 - 05 - Ellington, Duke & Hawkins, Coleman - Self Portrait (Of The Bean).mp3
10/12/2011  10:38 a.m.         6.930.560 IBF15 - 06 - Ellington, Duke - Day Dream.mp3
08/02/2012  10:31 a.m.        11.548.672 IBF15 - 07 - Monte, Marisa - Negro Gato.mp3
04/05/2011  02:03 a.m.         4.910.362 IBF15 - 08 - Piazzolla, Astor - Adios Nonino.mp3
23/11/2011  09:17 a.m.         6.318.404 IBF15 - 09 - OST Chamanka (Korzinski, Andrzej) - Zdrowas Mario.mp3
08/02/2012  01:40 p.m.         5.142.656 IBF15 - 10 - Montez, Chris - The More I See You.mp3
23/12/2011  12:07 p.m.        10.930.304 IBF15 - 11 - Supertramp - Crime Of The Century [Part, long].mp3
07/02/2012  11:37 p.m.         5.922.944 IBF15 - 12 - Vivaldi (The Royal Vivaldi Symphony) - Presto - Concerto 'L'estate' in sol minore - 3 (Le quattro stagioni Op.8-2, RV 315).mp3
26/09/2011  08:51 p.m.         2.246.656 IBF15 - 14 - Beethoven (William Bowles - Royal Festival Orchestra) - Allegro con brio [Part] - Sinfonie 5 c-moll op.67 - 1.mp3
16/07/2011  08:11 p.m.        18.857.775 IBF15 - 18 - Van Leer, Thijs - Reigen Seliger Geister (From 'Orfeo ed Euridice').mp3
07/02/2012  04:24 p.m.        16.701.440 IBF15 - 19 - Sibelius (Marko Munih - Radio Sinfonie Orchester Ljubljana) - Finlandia (Symphonic poem) op. 26.mp3
07/02/2012  08:20 p.m.        11.227.264 IBF15 - 20 - Pink Floyd - The Great Gig In The Sky.mp3
22/05/2011  04:19 a.m.         7.334.454 IBF16 - 01 - Theodorakis, Mikis - Zorba's Dance.mp3
20/06/2011  12:53 a.m.         9.821.956 IBF16 - 02 - Getz, Stan with Astrud & JoÆo Gilberto - Once again (Outre Vez).mp3
07/02/2012  02:59 p.m.         4.997.807 IBF16 - 03 - Getz, Stan with Astrud & JoÆo Gilberto - Insensatez.mp3
07/02/2012  07:06 p.m.         6.056.064 IBF16 - 04 - OST The Color Purple - Miss Celie's Blues (Sister) (1922 Jook Joint) (Vocal Tata Vega).mp3
25/12/2011  10:22 p.m.         7.608.448 IBF16 - 05 - Merrill, Helen - I'm Just A Lucky So-And-So.mp3
10/02/2012  09:15 p.m.         7.115.993 IBF16 - 06 - Ray, Charles & Carter, Betty - Baby It's Cold Outside.mp3
09/12/2011  05:01 p.m.         9.199.744 IBF16 - 07 - Krall, Diana - Lost Mind.mp3
11/11/2011  04:17 p.m.         9.797.632 IBF16 - 08 - Villa-Lobos, Heitor - Can‡Æo de Amor - Floresta do Amazonas (Vocal Bid£ SayÆo).mp3
07/02/2012  08:52 p.m.         6.043.776 IBF16 - 09 - OST Le Grand Bleu - Ouverture [Part].mp3
11/12/2011  06:50 p.m.         5.191.680 IBF16 - 10 - Jarre, Jean-Michel - R‚volution, r‚volutions [Part].mp3
11/12/2011  06:50 p.m.        12.525.568 IBF16 - 11 - Jarre, Jean-Michel - R‚volution Industrielle. Ouverture.mp3
11/12/2011  06:50 p.m.         9.803.776 IBF16 - 12 - Jarre, Jean-Michel - R‚volution Industrielle, Pt.3.mp3
10/01/2012  01:50 p.m.         5.062.784 IBF16 - 14 - Shankar, Ravi - Vandana.mp3
12/01/2012  02:35 p.m.         6.994.048 IBF16 - 15 - Shankar, Ravi & Previn, Andr‚ - Raga Adana.mp3
03/05/2011  03:32 p.m.         5.242.656 IBF16 - 16 - OST The Mahabharata - [Real World].mp3
15/10/2011  12:06 p.m.         7.254.144 IBF16 - 17 - Les Musiciens de Provence - Rosa das Rosas.mp3
01/12/2011  12:27 a.m.        10.190.976 IBF16 - 18 - Vangelis - Heaven & Hell, 3rd Movement - Theme From The TV Series 'Cosmos'.mp3
24/12/2011  11:56 p.m.        14.934.144 IBF16 - 19 - Kitaro - Mandala.mp3
15/10/2011  05:53 p.m.         9.046.144 IBF16 - 20 - Salieri, Francesco (Claudio Scimone - I Solisti Veneti) - Andante (La tempesta di Mare).mp3
08/02/2012  07:51 p.m.        14.276.608 IBF17 - 01 - Vangelis - La petite fille de la mer.mp3
07/02/2012  07:28 p.m.         7.540.736 IBF17 - 02 - O'Connor, Sin‚ad - My Darling Child.mp3
07/02/2012  06:24 p.m.         6.852.062 IBF17 - 04 - Posit, Jean-Pierre - L'horloge de ma vie.mp3
15/06/2011  03:02 a.m.         2.972.779 IBF17 - 05 - Branco, Waltel - Ponteio.mp3
15/07/2011  02:34 p.m.        12.557.927 IBF17 - 06 - Berglund, Erik - Blue Lotus.mp3
07/11/2011  02:39 p.m.        11.372.672 IBF17 - 07 - Debussy (Henrique Simonetti - Orquestra de Cƒmera RGE) - Clair de lune - Suite Bergamasque pour piano - 3, orchestral version.mp3
08/02/2012  12:59 p.m.         5.617.014 IBF17 - 08 - Creuza, Maria - Amora.mp3
07/11/2011  02:44 p.m.        12.587.136 IBF17 - 09 - Massenet (Henrique Simonetti - Orquestra de Cƒmera RGE) - M‚ditation - Entracte de l'acte II (Op‚ra Tha‹s).mp3
03/01/2012  01:32 p.m.         8.980.608 IBF17 - 10 - Kitaro - Caravansary.mp3
07/02/2012  12:14 p.m.         4.995.200 IBF17 - 11 - Metheny, Pat & Mays, Lyle - September Fifteenth (dedicated to Bill Evans) [Part].mp3
26/09/2011  12:03 a.m.        12.032.128 IBF17 - 12 - Mahler (Anton Nanut - Radio-Symphony Orchestra Lubljana) - Adagietto [Part] - Sinfonie 5 cis-moll - 4.mp3
06/11/2011  11:10 p.m.         5.572.736 IBF17 - 13 - OST Empire Of The Sun (Ambrosian Junior Choir) - Suo Gan.mp3
15/01/2012  04:07 p.m.         7.372.800 IBF17 - 14 - Wiese, Klaus - el-HADRA - The Mystic Dance [Part].mp3
06/02/2012  10:08 p.m.         7.024.640 IBF17 - 15 - Schubert (Mikl¢s Per‚nyi - Bart¢k Quartet) - Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956 [Part].mp3
07/11/2011  02:49 p.m.         8.237.184 IBF17 - 16 - Gounod (Henrique Simonetti - Orquestra de Cƒmera RGE) - Ave Maria (after Johann Sebastian Bach).mp3
12/10/2011  11:26 a.m.         4.685.824 IBF17 - 19 - Vivaldi (Trevor Pinnock - The English Concert & Choir) - Gloria in excelsis Deo - Gloria in RE Maggiore - 1, RV 589.mp3
27/12/2011  02:06 a.m.         9.451.520 IBF18 - 01 - Pink Floyd - Shine On You Crazy Diamond, Pts.1-5 [Part 1].mp3
17/06/2011  03:34 p.m.         6.463.893 IBF18 - 02 - Brahms - Selig sind, die da leid tragen [Part] - Ein deutsches Requiem op.45 - 1.mp3
11/08/2007  08:56 a.m.         7.899.330 IBF18 - 04 - OST 2001 Odyss‚e de l'espace - Pr‚lude Electronique.mp3
30/12/2011  07:40 p.m.        19.105.920 IBF18 - 06 - The Harmonic Choir - Rainbow Voice.mp3
07/02/2012  03:55 p.m.        10.326.144 IBF18 - 07 - OST Chariots Of Fire (Vangelis) - Eric's Theme.mp3
04/08/2011  11:00 p.m.         2.839.195 IBF18 - 08 - Sibelius (Herbert von Karajan - Berliner Philharmoniker) - Finlandia (Symphonic poem) op. 26 [End Part].mp3
27/12/2011  12:02 a.m.        18.907.136 IBF18 - 09 - The Beatles - I Want You (She's So Heavy).mp3
03/01/2012  12:11 p.m.        19.298.432 IBF18 - 10 - Gven‡, Oru‡ & Tmata - Bismillah ar-Rahman.mp3
07/02/2012  11:43 p.m.         7.061.632 IBF18 - 11 - Fanshawe, David - African Sanctus.mp3
06/12/2011  11:10 p.m.         2.641.920 IBF18 - 12 - Fanshawe, David - Song Of Lamentation [Part] {End Part of 'Sanctus. Bwala Dance'}.mp3
27/12/2011  02:06 a.m.        11.638.784 IBF18 - 13 - Pink Floyd - Shine On You Crazy Diamond, Pts.1-5 [Part 2].mp3
07/10/2011  09:14 p.m.         7.422.080 IBF18 - 14 - Beethoven (Libor Pesek - Slovak Philharmonic Orchestra) - Allegro [Part] - Sinfonie 6 F-Dur op.68 - 4 (Gewitter-Sturm).mp3
10/10/2011  11:29 a.m.         4.143.104 IBF18 - 15 - Gluck (John Eliot Gardiner - English Baroque Soloists) - Andante - Ballet Don Juan - 3.mp3
24/12/2011  12:01 a.m.        13.205.504 IBF19 - 01 - Guem - Pr‚sence.mp3
07/02/2012  11:48 p.m.         4.448.285 IBF19 - 02 - Winter, Paul - Down In Belgorod.mp3
22/05/2011  04:08 p.m.         5.270.028 IBF19 - 03 - Hines, Earl - I Just Wanna Make Love To You.mp3
04/01/2012  10:04 a.m.         7.112.832 IBF19 - 04 - Charles, Ray - Ray's Blues.mp3
08/02/2012  12:32 a.m.        11.147.392 IBF19 - 05 - Horn, Shirley - I Wanna Be Loved.mp3
15/10/2011  06:25 p.m.         9.830.528 IBF19 - 06 - de Falla (Garc¡a Navarro - London Symphony Orchestra) - Danza ritual del fuego.mp3
15/10/2011  06:28 p.m.         3.428.480 IBF19 - 07 - de Falla (Teresa Berganza - Garc¡a Navarro - London Symphony Orchestra) - Canci¢n del amor dolido.mp3
23/12/2011  03:47 p.m.        10.502.272 IBF19 - 08 - Ravel (Seiji Ozawa - Boston Symphony Orchestra) - Daphnis et Chlo‚ - Ballet, 3Šme tableau - III. Danse finale Bacchanale.mp3
11/11/2011  04:19 p.m.         6.389.760 IBF19 - 09 - Villa-Lobos, Heitor - Ep¡logo (Final) - Floresta do Amazonas (Vocal Bid£ SayÆo).mp3
07/02/2012  08:47 p.m.        11.231.360 IBF19 - 10 - OST The Color Purple - Maybe God Is Tryin' To Tell You Somethin' (Vocal Tata Vega).mp3
05/08/2011  07:50 p.m.         5.015.174 IBF19 - 11 - Orff, Carl (Eugen Jochum - Walter Hagen-Groll) - O fortuna - Fortuna Imperatrix Mundi - Carmina Burana - I-1.mp3
07/02/2012  12:23 p.m.        15.319.040 IBF19 - 12 - Kitaro - Sundance.mp3
11/11/2011  05:19 p.m.         8.749.056 IBF19 - 14 - Fitzgerald, Ella - This Girl's In Love With You.mp3
24/11/2010  06:20 p.m.        11.579.152 IBF19 - 15 - Cumbo, Jorge ~ Vitale, Lito ~ Gonz les, Lucho  - Vidala del cucul¡.mp3
06/06/2011  04:48 p.m.         5.154.619 IBF19 - 17 - Mourashkin, Boris - Joy.mp3
07/02/2012  03:53 p.m.         7.974.912 IBF19 - 18 - OST Chariots Of Fire (Vangelis) - Abraham's Theme.mp3
08/10/2011  01:46 p.m.         6.801.408 IBF19 - 19 - Mascagni (Herbert von Karajan - Coro e Orchestra del Teatro alla Scala) - Cavalleria Rusticana, XVIII. Intermezzo sinfonico.mp3
12/11/2011  01:06 a.m.         6.465.664 IBFC20 - 01 - Fairground Attraction - Ay Fond Kiss.mp3
26/12/2011  11:27 p.m.         6.567.936 IBFC20 - 02 - The Beatles - Yellow Submarine.mp3
26/12/2011  11:27 p.m.         5.414.912 IBFC20 - 03 - The Beatles - All Together Now.mp3
26/12/2011  10:52 p.m.         6.547.456 IBFC20 - 04 - The Beatles - With A Little Help From My Friends.mp3
11/02/2012  07:21 p.m.         6.553.600 IBFC20 - 05 - The Beatles - When I'm Sixty-Four.mp3
11/02/2012  07:25 p.m.         7.047.296 IBFC20 - 06 - Charles, Ray - I've Got A Woman.mp3
10/02/2012  07:23 p.m.         9.433.088 IBFC20 - 07 - Gipsy Kings - A Mi Manera.mp3
23/11/2011  09:47 a.m.         5.095.424 IBFC20 - 08 - Fygi, Laura - That Old Feeling (live).mp3
23/11/2011  09:47 a.m.         3.876.864 IBFC20 - 09 - Fygi, Laura - All Of Me (live).mp3
23/11/2011  09:48 a.m.         4.032.512 IBFC20 - 10 - Fygi, Laura - Diamonds Are A Girl's Best Friend (live).mp3
10/02/2012  04:56 p.m.         4.622.713 IBFC20 - 11 - Koro.mp3
23/11/2011  09:48 a.m.         5.990.400 IBFC20 - 12 - Fygi, Laura - Corcovado (live).mp3
14/01/2012  07:48 p.m.         8.163.328 IBFC20 - 14 - Melua, Katie - Call Off The Search.mp3
14/01/2012  07:48 p.m.         8.101.888 IBFC20 - 15 - Melua, Katie - Learnin' The Blues.mp3
14/01/2012  07:48 p.m.         8.527.872 IBFC20 - 16 - Melua, Katie - My Aphrodisiac Is You.mp3
14/01/2012  07:48 p.m.         7.444.480 IBFC20 - 17 - Melua, Katie - Mockingbird Song.mp3
30/01/2012  11:45 a.m.        12.038.272 IBFC20 - 18 - Shanti, Oliver & Friends - Tan Xingquing Park.mp3
26/12/2011  11:01 p.m.         8.660.992 IBFC21 - 01 - The Beatles - Hello, Goodbye.mp3
23/11/2011  09:35 a.m.         2.324.608 IBFC21 - 02 - Beethoven (Andr‚ Cluytens - Berliner Philharmoniker) - Freude (Hymne … la joie) [Part] - Sinfonie 9 d-moll, op.125 - 4.mp3
23/11/2011  09:42 a.m.         3.214.836 IBFC21 - 03 - Light, Enoch & The Light Brigade - Charleston.mp3
09/12/2011  10:56 p.m.        10.436.736 IBFC21 - 04 - Barenbo‹m-Mederos-Console - El D¡a en Que me Quieras.mp3
15/01/2012  03:21 a.m.         7.436.416 IBFC21 - 06 - Evora, Cesaria - Carnaval de SÆo Vicente.mp3
09/02/2012  08:13 p.m.         5.456.593 IBFC21 - 07 - Flack, Roberta - When You Smile.mp3
15/01/2012  03:51 a.m.         6.103.168 IBFC21 - 08 - Jackson, Mahalia - When The Saints Go Marchin' In.mp3
23/11/2011  09:36 a.m.         5.464.687 IBFC21 - 09 - Presley, Elvis - My Way (live).mp3
23/11/2011  09:40 a.m.         6.957.056 IBFC21 - 10 - Simone - O AmanhÆ.mp3
18/12/2019  12:37 p.m.        11.186.176 IBFC21 - 11 - Simone & da Vila, Martinho - Danadinho Danado.mp3
23/11/2011  09:39 a.m.         5.297.996 IBFC21 - 12 - Danse de Zorba.mp3
08/02/2012  06:11 p.m.         8.882.176 IBFC21 - 13 - Fygi, Laura - Dream A Little Dream Of Me.mp3
23/11/2011  09:37 a.m.        13.860.992 IBFC21 - 14 - Debussy (Anna Lelkes) - Clair de lune - Suite Bergamasque pour piano, Harp transcription.mp3
10/02/2012  08:50 p.m.        12.480.640 IBFC21 - 15 - McKennitt, Loreena - All Souls Night.mp3
23/11/2011  09:37 a.m.         4.954.112 IBFC21 - 16 - Simone, Nina - Wild Is The Wind.mp3
23/11/2011  09:38 a.m.         7.017.828 IBFC21 - 17 - OST Zorba The Greek - Zorba's Dance.mp3
30/12/2011  03:47 a.m.         5.810.304 IBFC21 - 18 - OST Metello (Morricone, Ennio) - Metello.mp3
`;
var	s = '<tr>';
var	desde = dir.indexOf('IBF'+disco+' - '+pista);
var     hasta = dir.indexOf('mp3', desde);
var     audio = dir.substr(desde,hasta-desde+3);
	hasta = audio.indexOf('-');
var	autor = audio.substr(0, hasta-1);
	desde = hasta+1;
	hasta = audio.indexOf('.mp3');
var	cancion = audio.substr(desde,hasta);
        s += '<td><audio src="'+audio+'" controls>Tu navegador no soporta la etiqueta audio</audio></td>';
	s += '<td>'+disco+'-'+pista+'</td>';
	s += '<td>'+autor+'</td>';
	s += '<td>'+cancion+'</td>';
	s += '<td>'+obs+'</td>';
	s += '</tr>';
        return s;
}
function m32()  {
    var s='';
    s += inicioNivel2('1','LAS RONDAS')+`
<p>Todas las Rondas de Biodanza son ejercicios de comunicación afectiva. Tienen siempre un doble efecto: la integración del grupo y la estimulación de la afectividad.</p>
<p>Lo que cambia es la cualidad de la vivencia, que varia según la consigna. En la práctica, en Biodanza tenemos varios tipos de Rondas, como por ejemplo: Ronda de Integración Inicial, Ronda de Comunicación, Ronda de Contacto Múltiple, Ronda de Mecimiento, Ronda Sinuosa, Ronda de Solidaridad, Ronda de Celebración.</p>
<h4>RONDA DE INICIACIÓN (o RONDA DE INTEGRACIÓN INICIAL)</h4>
<p>Tiene la característica de una ceremonia en el sentido clásico de iniciar algo importante. Representa la unidad de la comunidad humana. Los participantes se toman de las manos y danzan siguiendo la música que puede ser lenta, afectiva, solemne o alegre. Para Rolando, la Ronda Inicial debía acentuar la comunicacion afectiva. Con el tiempo, músicas mas vitales fueron asociadas a esta ronda, con el fin de elevar el humor desde el principio de la clase (cuando fuese necesario).</p>
<p>Música :</p>
<table>`+
oa('01','04','El principio de la mósica es lento, permite la conexion en la mirada y tomarse el tiempo de "llegar". Sin embargo, puede ser difiúcil para verdaderos debutantes.')+
oa('02','13')+
oa('01','18')+
oa('01','12')+
oa('01','21')+
oa('01','19')+
oa('07','21')+
oa('01','16')+
oa('01','07')+
oa('01','06')+
oa('03','09')+
oa('21','11')+
oa('05','02')+
oa('11','05')+
oa('01','14')+
oa('04','10')+
oa('01','01')+
oa('01','09')+
oa('01','03')+
oa('04','06')+
oa('15','15')+
oa('04','02')+
oa('04','16')+
oa('01','13')+
oa('04','01')+
oa('05','04')+
oa('04','17')+
oa('02','12')+
oa('02','14')+
oa('01','11')+
oa('01','17')+
oa('01','10')+
oa('02','10')+
oa('02','21')+`
</table>
<h4>RONDA SINUOSA</h4>
<p>La Ronda Sinuosa puede adquirir características distintas dependiendo de la música. Con una música lenta y dulce (por ejemplo: Tema de amor para Gabrielaá interpretada por Gal Costa y Tom Jobim u Ordinary foolá por Paul Williams) se da la oportunidad a las personas de realizar un contacto y una vinculación mayores, por eso hay que  proponerla en grupos de profundización. En cambio, esta misma Ronda, con una música alegre y euforizante (como Aquarela Brasileira interpretada por Emilio Santiago), es útil especialmente para los cursos de inicio; la música más activa reduce las posibilidades de contacto, de esta manera el alumno nuevo no se siente cohibido, sino más libre y al mismo tiempo en conexión con sus compañeros.</p>
<p>La Ronda Sinuosa puede proponerse como segundo ejercicio después de la Ronda de Iniciación.</p> 
<p><b>Descripción :</b><br>
<p>Puede ser utilizada al comienzo o al final de la sesión (su característica es de saludo, recibirse o despedirse). No es una ronda circular sino fluctuante, que da la posibilidad a los alumnos de acercarse y alejarse de los compañeros, de mirarse y, eventualmente, de darse un beso de saludo. Quedan de todas maneras tomados de las manos de los compañeros de los lados.</p>
<p>Su característica es de permitir una integración más rápida, porque los alumnos se acercan con más confianza y sin miedo, sin que se sientan en peligro, se miran y comienzan a reconocerse: es una ronda interesante para la integración.</p>
<p><b>Note CIMEB :</b><br>
Para que se realice de manera armoniosa, conviene indicar que el movimiento global del grupo debe ser fluído, invitando a los participantes a:
<ul>
<li>evitar paralizar la ronda prolongando el contacto con una sola persona.</li>
<li>evitar de arrastrar a los otros hacia movimientos demasiado acelerados.</li>
<li>evitar de forzar el contacto con una persona lejana en la ronda, arrastrando a los demas e interrumpiendo la armonia general.</li>
</ul></p>
<p>Música :</p>
<table>`+
oa('02','16')+
oa('01','16')+
oa('02','17')+
oa('04','17')+
oa('01','11')+`
</table>
<h4>RONDA "CIRANDA"</h4>
<p><b>Descripción :</b><br>
A la invitación del facilitador, las personas realizan juntas y en ritmo con la música, gestos evocadores de los gestos de los pescadores. El ciranda es un baile folklórico del Norte de Brasil. Puede ser muy interesante incluirla en clases durante las cuales se proponen también danzas creativas en grupo.</p>
<p><b>Objetivo :</b><br>
Estimular la capacidad de coordinación grupal naciendo de la posibilidad de realizar juntos los mismos gestos.</p>
<p>Música :</p>
<table>`+
oa('05','23','La grabación es de calidad mediocre. Se necesita explicar el contexto de la Ciranda en la cultura del Nordeste del Brasil: estar juntos, trabajar juntos, el movimiento conjunto de los pescadores. También se conoce como "Ronda de pescadores".')+`
</table>
<h4>RONDA LÚDICA</h4>
<p><b>Descripción :</b><br>
A veces, dependiendo de la vivencia (el tema de la clase, el nivel del grupo) las rondas iniciales tienen un carácter lúdico que promueve la integración y la alegría de vivir. Para obtener más información, consultar el parágrafo "Rondas Variadas" .</p>
<p>Música :</p>
<table>`+
oa('01','18','Con esta musica, el elemento lúdico viene de la posibilidad de cambiar de dirección, de la vitalidad de la ronda y de las variaciones en el paso, alternando con el movimiento ondulante')+
oa('03','14','Se masajea la espalda de la persona delante de uno, con pequeñas fricciones revitalizantes. La ronda cambia una vez de dirección.')+`
</table>
<h4>RONDA DE TRANSFORMACIONES</h4>
<p>Se forman varias Rondas de 6 personas. Cada Ronda danza con la música Andante, la Tempesta di Mare di Salieri, música alegre y al mismo tiempo sutil. En un cierto momento, un miembro de la Ronda pasa a otra cercana y así se establece un cambio entre las personas que permiten formar nuevas Rondas. </p>
<p>Este ejercicio despierta mucha alegría y simbólicamente representa lo que sucede en el universo, donde pequeños grupos, energías, se intercambian elementos entre ellos. Esto sucede en los distintos ciclos dinámicos del cosmos, en el cual un átomo pasa a un sistema próximo. </p>
<p>Los alumnos tienen que recibir al nuevo miembro con alegría. Esta es una danza global. Cuando uno pasa a otra Ronda, no tiene que hacerlo caminando o corriendo, sino danzando. </p>
<p>Música :</p>
<table>`+
oa('16','20')+`
</table>
<h4>RONDAS CONCÉNTRICAS DE MIRADAS</h4>
<p>Es un ejercicio muy importante, sobre todo para grupos de profundización, porque las personas no tienen la costumbre de mirarse a los ojos y, por lo tanto, la comunión es prácticamente imposible.</p>
<p>Se organizan dos Rondas Concéntricas, una dentro de la otra: las personas en la ronda interior miran hacia afuera. Cada participante debe tener otro adelante, de modo de poder mirarse a los ojos. Cuando la música comienza, cada Ronda gira hacia su derecha muy lentamente. Cada participante mira en los ojos del compañero que pasa frente a él, naturalmente, con inocencia y sin tratar de producir miradas muy expresivas; mirándose como se mira un niño y reconociéndose recíprocamente. Cada parada dura algunos momentos y después se pasa a mirar el compañero siguiente. </p>
<p>Cuando ambas Rondas han hecho el giro completo termina el ejercicio. En este momento se invita a los participantes de abrazar la persona que está enfrente. Es un ejercicio de la Línea de la Afectividad. </p>
<p><b>Objetivo :</b><br>
Prepara las personas a una vinculación más intensa, porque la comunicación se realiza con mayor sinceridad a través de los ojos, más aún que a través de las palabras. </p>
<p>Música :</p>
<table>`+
oa('01','21')+
oa('18','15')+
oa('20','01')+
oa('02','06')+
oa('11','13')+
oa('11','12')+
oa('02','01')+
oa('11','11')+`
</table>
<h4>RONDA DE MECIMIENTO	</h4>
<p>Los alumnos se toman de la mano (cuando es un grupo de inicio) o de la cintura, y con una música lenta y melódica, se mecen suavemente de tal manera que se induce a un semi-trance liviano. La comunión se puede dar, por ejemplo, acercando las cabezas en forma recíproca con los vecinos de lado. Se induce así una vivencia de dulzura y afectividad, sin temor. La búsqueda y realización de estos contactos tiene que ser en feed-back, de manera de disminuir los sentimientos de temor. </p>
<p>Todos los miembros de la Ronda se mecen en sintonía con el grupo para inducir una vivencia de unidad y de armonía.</p>
<p>Música :</p>
<table>`+
oa('12','01')+
oa('11','04')+
oa('11','08')+
oa('11','18')+
oa('11','02')+
oa('11','01')+
oa('11','06')+`
</table>
<h4>RONDA DE CONTACTO MÚLTIPLE</h4>
<p>En esta Ronda las personas cambian de posición, girando su cuerpo hacia un lado y hacia el otro, con la posibilidad de tomar contacto frontalmente con los compañeros de cada lado. También, eventualmente, si la ronda no es muy grande, puede entrar en contacto con otros compañeros más lejanos. No hay desplazamiento, sino un movimiento de mecimiento que permite estos contactos de la cara y el cabello y que permiten el intercambio de besos. Es un ejercicio de la Línea de la Sexualidad.</p>
<p><b>Note CIMEB :</b><br>
<b>Descripción:</b> Se propone la posibilidad de invitar a las personas a formar la ronda poniéndose uno hacia adentro y uno hacia afuera, lo cual puede facilitar y aumentar la intimidad y la variedad de contactos. Las personas están siempre tomadas de las manos. Los contactos se hacen con el movimiento integrado de todo el cuerpo en movimiento.</p>
<p><b>Proyección existencial:</b> La apertura a una afectividad y a un erotismo indiferenciados, de los que pueden surgir nuestras preferencias.</p>
<p><b>Elemento poético:</b> Crear, a través de nuestros contactos y nuestros movimientos suaves, una ola de erotismo y de ternura que se extiende hasta el infinito y regresa amplificada. </p>
<p>Música :</p>
<table>`+
oa('13','06')+
oa('13','21')+
oa('12','04')+
oa('13','05')+
oa('13','07')+
oa('11','20')`
</table>
`+finNivel2()+`
`+inicioNivel2('2','EL GRUPO DE BIODANZA')+`
RONDA DE MECIMIENTO CON ACERCAMIENTO Y CONTACTOS (Ronda de comunián)
Antes llamada  Ronda de Comunicación, ha cambiado de nombre porque he encontrado insuficiente el tÑrmino ñcomunicacióná. La comunicación puede ser a través del telÑfono, de un gesto, de un objeto, pero en realidad no representa el proceso psicológico profundo. Hoy en dóa la comunicación está muy vinculada a los sistemas tecnológicos como la televisión, el telÑfono, Internet, etc. La palabra ñcomunicacióná no rinde la idea de lo que quiero; en este sentido es más preciso hablar de ñcomunióná.
En adelante se llamará: RONDA DE MECIMIENTO CON ACERCAMIENTO Y CONTACTOS.
Las personas se toman de la cintura, al mismo tiempo oscilan con los otros e intercambian contactos a través de rostros y cabeza. El objetivo es producir sensaciones de ternura y confianza recíproca.
Es un ejercicio de la Línea de la Afectividad, donde se aprende a dar y a recibir mensajes de afecto en feedback.
Música :
oa('02','11') Nice To Be Around	Williams, Paul	3:09
oa('13','07') O que serú
Muy lenta, profundamente sensual.	Simone	4:49
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
oa('11','06') The First Time Ever I Saw Your Face	Flack, Roberta	4:18
19-15 Vidala del cuculó	Cumbo, Jorge / Vitale, Lito / Gonzáles, Lucho	7:58
oa('02','10') We've Only Just Begun	Williams, Paul	3:21
09-13 Who Can See It	Harrison, George	3:49
RONDA DE ACTIVACIÓN LENTA
La ronda de activación lenta permite recuperar progresivamente la conciencia de la identidad, cuando los participantes aún están en estado más o menos profundo de regresión, permitiÑndoles conservar la calidad de la comunión con el grupo. Música :
02-20 AndanÓa	Carvalho, Beth	3:47
oa('01','06') Behind That Locked Door	Harrison, George	3:07
oa('02','05') Canto do Povo de um lugar	Veloso, Caetano	4:12
oa('02','04') Coqueiro de Itapoè	Veloso, Caetano	2:37
oa('02','07') I'd Have You Anytime	Harrison, George	2:56
oa('01','02') Let It Be	The Beatles	4:03
oa('02','02') Love	Lennon, John	3:22
oa('04','17') Queixa	Veloso, Caetano	4:27
02-23 Redescobrir	Regina, Elis	4:06
02-18 Se todos fossem iguais a você	de Moraes-Creuza-Toquinho	2:34
oa('02','03') Sete mil vezes	Veloso, Caetano	2:21
14-14 Você abusou	Creuza, Maria	3:57
RONDA DE ACTIVACIÓN		
Al final de la clase, para mantener la cohesión grupal, conviene proponer una activación en ronda. La intensidad de la activación debe tener en cuenta la fisiologóa y la vivencia de las personas, de manera de ser lo más progresiva posible, para que no haya ruptura en la vivencia. Descripción :
La ronda se abre lentamente y el ritmo aparece con mas presencia. El movimiento se vuelve más vital. Puede ser el momento de saludarse y despedirse (de darse besos). Objetivo :
Llevar al grupo hacia una activación final permitiendo un estado de conciencia compatible con las exigencias de la realidad exterior. La activación final debe permitir una celebración, una conclusión que es algo más que una simple activación motora.
Música :
oa('01','18') A de á (Estamos chegando)	Nascimento, Milton
El facilitador puede proponer variaciones como cambiar de dirección o tiempos sin desplazamiento (autoregulación).	3:32
oa('01','12') A Deusa Dos Orixas	Nunes, Clara
La activación es facilitada por el comienzo un poco mÑs lento, antes de la aparición de la cadencia.	2:30
20-07 A Mi Manera	Gipsy Kings	3:54
04-20 A sete chaves/Camarèo que dorme a onda Carvalho, Beth leva/Dor de amor (ao vivo)	4:50
oa('01','19') Allegro - Concerto 'La primavera' in Mi 	Vivaldi, Antonio (1678-1741) Maggiore - 1 (Le quattro stagioni op.8/1, RV 269)	3:29
oa('07','21') An der schínen blauen Donau [Part], 	Strauss II, Johann (1825-1899) op.314	3:01
02-20 AndanÓa	Carvalho, Beth	3:47
02-19 Apos o Amanhecer	Mendes, Sergio
Despertar progresivo hacia una cadencia moderada y ligera (tierra-aire)	3:28
oa('01','16') Aquarela do Brasil	Santiago, Emólio	5:31
05-01 Bate CoraÓao	Ramalho, Elba	3:20
05-21 Batuque	Mercury, Daniela	3:23
oa('01','06') Behind That Locked Door	Harrison, George	3:07
04-08 Canta, Canta minha gente	da Vila, Martinho	2:33
oa('02','05') Canto do Povo de um lugar	Veloso, Caetano	4:12
03-12 Coisa de Pele	Carvalho, Beth	3:26
oa('02','06') Coisa mais linda	Veloso, Caetano	3:12
oa('03','09') Conto de Areia	Nunes, Clara	3:40

oa('02','04') Coqueiro de Itapoè	Veloso, Caetano	2:37
05-09 Eu quero mais	Carvalho, Beth	2:20
05-13 Eu quero meu amor	Ramalho, Elba	2:40
oa('12','01') Eu sei que vou te amar	de Moraes-Creuza-Toquinho	3:30
05-11 Fava de Cheiro	Sivuca	2:37
05-10 Feira de Mangaio	Nunes, Clara	3:19
oa('01','14') Fim de Reinado (ao vivo)	Carvalho, Beth	2:27
oa('04','10') Folhas secas (ao vivo)	Carvalho, Beth	2:27
04-07 ForÓa da imaginaÓèo	Carvalho, Beth	3:12
oa('01','08') Here Comes The Sun	The Beatles	3:06
oa('02','07') I'd Have You Anytime	Harrison, George	2:56
04-15 Isto Aqui O Que ó/ó	Santiago, Emólio	3:54
oa('04','06') Juizio final	Nunes, Clara	2:54
oa('04','02') Lenda das Sereias, Rainha do Mar	Monte, Marisa	4:08
oa('01','02') Let It Be	The Beatles	4:03
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
03-07 My Sweet Lord	Harrison, George	4:41
14-05 Nada por mim/Fullgús	Santiago, Emólio	6:06
03-15 Nèo Enche	Veloso, Caetano	3:31
05-12 O Baile de Bio Laurinda	Sivuca	2:26
oa('01','13') O mar Serenou	Nunes, Clara	3:00
03-16 O quÑ Ñ O quÑ Ñ?	Gonzaguinha	4:21
04-03 Olho por Olho	Carvalho, Beth	3:11
05-03 Paixèo de Beata	do Acordeon, Pinto	3:27
04-11 Pedi ao cÑu	Carvalho, Beth	2:53
04-19 Portela na avenida	Nunes, Clara	3:46
oa('04','01') Preciso me encontrar	Monte, Marisa	3:33
oa('05','04') Que Nem Vem Vem	Ramalho, Elba	2:46
oa('04','17') Queixa	Veloso, Caetano	4:27
oa('03','14') Rumba Azul	Veloso, Caetano	4:02
04-21 Saco de Feijèo/Corda no pescoÓo/Sonhando eu sou feliz (ao vivo)	Carvalho, Beth	5:13
oa('01','15') Samba no quintal	Carvalho, Beth	3:29
04-05 Senhora rezadeira	Carvalho, Beth	3:07
oa('02','03') Sete mil vezes	Veloso, Caetano	2:21
03-08 Sing	Carpenters	3:15
03-13 Sonhando Eu Sou Feliz	Carvalho, Beth	3:53
oa('02','14') Stewball	Baez, Joan	2:59
oa('01','11') Tema de Amor de Gabriela	Costa, Gal / Jobim, Tom	4:04
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
oa('02','15') Trem das cores	Veloso, Caetano	2:26
04-18 Um Canto de AfoxÑ Para O Bloco do Ilê	Veloso, Caetano	3:03
11-17 Vltava (Die Moldau) [Part] - Symphonic Poem nã2  from cycle 'Ma Vlast'	Smetana, Bedúich (1824-1884)	3:52
oa('02','21') Xote das meninas	Monte, Marisa	4:07
 
RONDA DE CELEBRACIÓN
Se propone después de un acto importante como ñel Renacimientoá, de un Desafóo o al final de una clase semanal o un taller. Perfectamente se pueden usan músicas clásicas y alegres, como los ñAllegriá de Vivaldi. Las personas giran tomadas de las manos y con los brazos en alto. Esta Ronda es especialmente indicada para el final de una clase o taller sobre Afectividad, donde se estimula la fraternidad. Los alumnos quedan en un estado de humor triunfante. 
Para la Ronda de Celebración realizada en cursos dedicados a profundizar la Masculinidad Profunda se utiliza la música ñZorbaá, interpretada por Mikis Theodorakis, en la cual todos los hombres danzan con mucha fuerza. Música :
oa('01','19') Allegro - Concerto 'La primavera' in Mi 	Vivaldi, Antonio (1678-1741) Maggiore - 1 (Le quattro stagioni op.8/1, RV 269)	3:29
16-13 Allegro non molto - Concerto 'L'inverno' in Vivaldi, Antonio (1678-1741) fa minore -1 (Le quattro stagioni op.8/4, RV 297)	3:40
oa('01','07') Ballad Of Sir Frankie Crisp (Let It Roll)	Harrison, George	3:49
oa('01','09') Give Me Love (Give Me Peace On Earth)	Harrison, George	3:34
03-19 Gloria in excelsis Deo (Riccardo Muti) - Gloria in Re Maggiore - 1, RV 589	Vivaldi, Antonio (1678-1741)	2:23
03-01 Gracias a la vida	Regina, Elis	4:24
03-02 Gracias a la vida	Sosa, Mercedes	4:22
03-20 Hallelujah - Messiah, HWV 56 - Part II/42	Haendel, Georg Friedrich (1685-1759)	3:40
11-16 Imagine	Lennon, John	3:08
03-03 Todo Cambia	Sosa, Mercedes	4:47
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
04-12 Vai ou nao vai	da Vila, Martinho	3:34
03-05 Vientos del alma	Sosa, Mercedes	3:04
11-17 Vltava (Die Moldau) [Part] - Symphonic Poem nã2  from cycle 'Ma Vlast'	Smetana, Bedúich (1824-1884)	3:52
04-04 Você, Eu e a Orgia	Carvalho, Beth	4:18
03-04 Y dale alegría a mi corazán	Sosa, Mercedes	4:42
16-01 Zorba's Dance	Theodorakis, Mikis (ìûáñ† °¢î£§ôêáñ†)	4:18
RONDA DE SOLIDARIDAD		
Esta ronda se realiza al final  de una clase. La Música debe tener elementos marciales y triunfantes, como ñEl Moldavaá de Smetana. Antes que todo, en la consigna se indica que ñla unión hace la fuerzaá, así se permite una meditación por parte de los alumnos con respecto a la fraternidad, la solidaridad. Durante la danza, en algunos momentos, las personas pueden levantar los brazos en actitud de triunfo. Música :
03-02 Gracias a la vida	Sosa, Mercedes	4:22
11-17 Vltava (Die Moldau) [Part] - Symphonic Poem nã2  from cycle 'Ma Vlast'	Smetana, Bedúich (1824-1884)	3:52
RONDA FINAL		
Las rondas finales tienen caracterósticas de celebración y de despedida feliz. Música :
03-17 Allegro - Concerto 'L'Amoroso' per violono, archi e BC in Mi Maggiore - 1, RV 271	Vivaldi, Antonio (1678-1741)	4:21
oa('01','07') Ballad Of Sir Frankie Crisp (Let It Roll)	Harrison, George	3:49
04-08 Canta, Canta minha gente	da Vila, Martinho	2:33
21-06 Carnaval de Sèo Vicente	Evora, Cesaria	3:50
oa('21','11') Danadinho Danado (com Martinho da Vila)	Simone	4:39
Activacion final alegre.
03-01 Gracias a la vida	Regina, Elis	4:24
03-02 Gracias a la vida	Sosa, Mercedes	4:22
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
03-10 Morena flor	Creuza, Maria	2:52
21-10 O Amanhè	Simone	4:48
oa('01','13') O mar Serenou	Nunes, Clara	3:00
03-16 O quÑ Ñ O quÑ Ñ?	Gonzaguinha	4:21
04-19 Portela na avenida	Nunes, Clara	3:46
oa('01','15') Samba no quintal	Carvalho, Beth	3:29
03-03 Todo Cambia	Sosa, Mercedes	4:47
LA MARCHA		
La rehabilitación del hombre "normal" deberóa comenzar con el aprendizaje de la marcha.
La marcha es la expresión más evidente y más clara de la actitud de un ser humano frente a la vida.
El hombre no camina (avanza) sólo con sus piernas, sino con todo su cuerpo. Centenas de músculos pasan por estados de tensión y de relajamiento para permitir la acción extremadamente compleja que constituye la marcha. Los movimientos de las piernas se realizan en una sinergóa perfecta con relación a los movimientos de los brazos. Además, la posición de la cabeza, la expresión de la cara, la armonía general, la vivacidad de los movimientos, la extensión del paso, la fuerza de propulsión de la pierna trasera, la fluidez, la elasticidad motriz, etc., son expresiones de la estructura global de la personalidad. Para emplear un lenguaje fenomenológico, la marcha representa una manera de "caminar (avanzar) en la vida•.
Pedro Lain Entralgo describió la condición ambulante del hombre con el tÑrmino ñhomo ambulatoriusá.
La marcha es, en sóntesis, una expresión existencial. Una manera de ir hacia y en mundo y las personas. Una calidad inherente del ser humano es que él mismo es, a la vez el caminar y el camino. El análisis de la marcha revela estados internos profundos; todos estos pasos sobre el hilo suspendido por encima del abismo del destino pueden volver a trazar el dibujo infinito de un proyecto existencial jamás cumplido, o la calidad triunfante de una existencia que avanza sin freno. Existe un modo de caminar del depresivo, lento y pesada; o el caminar acelerado del manóaco, hiperactivo y ansioso; o la marcha del histÑrico, del angustiado, del psicótico o del toxicómano. De todos aquellos que caminan (avanzan) en los laberintos de su propia patologóa.
En Biodanza, nuestro objetivo es rehabilitar la marcha del ser integrado, caminando con entusiasmo y sensibilidad el camino de la plenitud.
MARCHA SINóRGICA
Descripción :
Es un caminar natural con música, porque por só misma la marcha integrada es sinÑrgica. El brazo derecho se mueve en sincronóa con la pierna izquierda y el brazo izquierdo con  la pierna derecha. Esta sinergóa reduce al mónimo el desequilibrio del cuerpo en un sentido o en otro, así el organismo gasta menos energóa para moverse. Objetivo :
Aumentar la integración motora, reforzando el sinergismo involuntario entre brazos y piernas durante la marcha.
Música :
06-01 Doctor Jazz	Traditional Jazz Band	3:36
06-02 Hello Dolly!	Traditional Jazz Band	3:38
08-01 Hello, Dolly!	Armstrong, Louis	2:25
07-05 King Porter Stomp
Expresiva	Goodman, Benny	3:07
06-03 Sweet Georgia Brown	The New Orleans Banjo Band	4:11
06-13 The Darktown Strutter's Ball	The New Orleans Banjo Band	3:29
06-06 The Man I Love	Antigua Jazz Band	3:46
04-13 Toda menina baiana	Gil, Gilberto	3:53
06-22 When The Saints Go Marchin' In	The New Orleans Banjo Band	3:39
MARCHA FISIÓLOGICA		
Descripción :
Se trata de marchar estirando al principio el paso, de manera a acentuar el movimiento de los glúteos, volviendo luego a una marcha en la cual la longitud del paso es mas habitual y natural. Objetivo :
Rehabilitación de la marcha natural, integrando en el caminar el movimiento de los glúteos. Inicialmente se trata de caminar alargando los pasos para acentuar el movimiento de los glúteos, volviendo enseguida a caminar con pasos naturales. No se trata de un caminar danzante.
La restauración de la marcha fisiológica regulariza la función motora integral, restableciendo el tono apropiado no sólo de las piernas, sino también de la pelvis, del pecho, de los músculos cervicales y faciales. Además restablece las curvaturas normales de la columna vertebral, induce cambios en el metabolismo y en las funciones genito-urinaria y cardio-respiratoria. Además tiene el efecto de aumentar la confianza en só mismo. Note CIMEB :
Se tarta de mobilizar el cuerpo entero, acentuando la ondulación de la pelvis y de los músculos de los glúteos. Se aconseja caminar acentuando el empuje sobre la pierna de apoyo, como si se quisiera empujar el piso. También se puede aconsejar mover un glúteo contra otro a cada paso. Música :
06-01 Doctor Jazz	Traditional Jazz Band	3:36
06-02 Hello Dolly!	Traditional Jazz Band	3:38
La mÑs adaptada 08-01 Hello, Dolly!	Armstrong, Louis	2:25
07-05 King Porter Stomp	Goodman, Benny	3:07
06-03 Sweet Georgia Brown	The New Orleans Banjo Band	4:11
06-13 The Darktown Strutter's Ball	The New Orleans Banjo Band	3:29
06-06 The Man I Love	Antigua Jazz Band	3:46
04-13 Toda menina baiana	Gil, Gilberto	3:53
MARCHA CON MOTIVACIÓN AFECTIVA		
Descripción :
Se supera la marcha mecánica y el acto de caminar se transforma en un impulso de la totalidad (del ser) que se dirige hacia un objetivo, como el niño que comienza a caminar e inclina el pecho extendiendo los brazos hacia delante, mientras va en dirección a una persona querida (mamá, papá, abuelos, etc.). Este gesto de los niños indica que el impulso de la marcha nace desde la emoción.
La "vivencia" de alegría impetuosa, que avanza hacia el mundo, es inspirada en la experiencia vivida por los "hijos de las flores" en los aÓos 60¶. Objetivo :
Recuperar la  integración afectivo-motora durante la marcha. Caminar con espóritu abierto al mundo sintiendo el impulso que nace desde el pecho, provocado por la emoción inducida por la música. Música :
21-01 Hello, Goodbye	The Beatles	3:29
06-04 Hello, Goodbye [Part]	The Beatles	2:47
CAMINAR EXALTANDO LA PROPIA PRESENCIA (Llamado también ìIluminacián de la propia presenciaî o también ìMarcha con majestuosidadî)
Descripción :
El ejercicio consiste en caminar, uno a la vez, dentro de la ronda, de forma que todos los participantes lo vean. Se trata de caminar con naturalidad, pero expresando fuerza vital, armonía, serenidad y alegría. En realidad se trata de mostrar la belleza de nuestra identidad.
Este ejercicio exalta la seguridad en só mismo y permite de manifestar la fuerza de la identidad. Objetivo :
El ejercicio de marcha con exaltación de la propia presencia estimula la expresión de la identidad. No se trata de manifestar el ego, sino, al contrario, de mostrar con plenitud nuestra identidad, que se manifiesta a través de la seguridad y confianza en uno mismo.
Música :
19-13 Les Voici, les voici, voici la quadrille! 
(March of the Toreadors) - Carmen - Acte 3 - 2íme tableau	Bizet, Georges (1838-1875)	3:57
17-13 Suo Gan (Vocal Ambrosian Junior Choir)	OST Empire Of The Sun	2:18
MARCHA CON DETERMINACIÓN		
 
La determinación, como expresión de una fuerza, es esencial en la progresión hacia objetivos.
La mayoróa del tiempo, cuando no hay determinación, los más ricos proyectos no resisten la adversidad, los obstáculos, las dificultades que se presentan. En el plano existencial, la falta de determinación puede inducir comportamientos  demasiado dispersos o también  una identidad fácilmente influenciable. Ser determinado es tener una dirección, es dar a nuestros deseos, a nuestros proyectos, un eje y una meta posibles. La actitud determinada es esencial para reunir las fuerzas necesarias para la realización de los deseos y la afirmación de só mismo.
Descripción :
La marcha es segura, la tonicidad de las piernas es potente, el paso largo, naturalmente. El ser está totalmente erecto, proyectado hacia su meta, es decir hacia adelante. La mirada firme, potente, sin permitirse distraerse. La determinación no  debe confundirse con la rigidez o la indiferencia hacia los demás.
La marcha puede realizarse de manera colectiva y en este caso, se invita a las personas a ser sensibles también al movimiento de sus compañeros, al grupo. Puede realizarse de manera individual (las personas pasan una después de la otra). En este caso conviene asegurar la preparación de las personas (el coraje de exponerse en el centro y ante la mirada del grupo), y del grupo (la capacidad de estar presente en la vivencia de un compañero). La segunda opción exige una buena preparación vivencial pues ya presenta  un carácter de desafóo. Objetivo :
Estimular la capacidad de avanzar  con dirección, meta, y concentración. Disponibilidad para enfrentar las dificultades. Integración afectivo-motriz. Música :
06-05 End Title [Part]	The New American Orchestra	4:09
MARCHA  SENSUAL (sinuosa)
Descripción :
Esta marcha, como toda marcha integrada, es esencialmente fisiológica con un Ñnfasis sobre la ondula el movimiento "contoneado" y un vivencia de seducción en la marcha. Música :
	19-14 This Girl's In Love With You	Fitzgerald, Ella	ción, 
4:27
MARCHA ALEGRE	
Descripción :
Se trata de una marcha natural con sinergóa. El acento marcha sino sobre la vivencia de la alegría de caminar pasos. Música :
04-08 Canta, Canta minha gente	es puesto no sobre la realización motriz de la  : con la música en el corazón, en el cuerpo, en lo
da Vila, Martinho	s 
2:33
oa('05','02') Esperando Na Janela	Gil, Gilberto	4:21
21-07 When You Smile	Flack, Roberta	3:44
MARCHA CON LENTITUD (Marcha del astronauta)	
La percepción de nuestro entorno se nutre de la percepción sensible de nuestro desplazamiento en el mundo. Ser sensibles en un mundo sensible. Esta "marcha" no tiene ningún propósito, nos permite un simple deambular libre de cualquier preocupación por "llegar a alguna parte", sino más bien dejandose llevar por la corriente transporte actual. Un fluir en el mundo.
Las palabras clave son: Fluidez, Deslizamiento, Lentitud, Errar, Deambular, Rozar el aire. Descripción :
Los participantes empiezan con los ojos cerrados (pudiendo entreabrirlos luego), con los hombros, la cara y el cuello relajados. Caminan lentamente, colocando el talón en el suelo (no la punta del pie) con suave firmeza, y con sinergóa perfecta en los brazos. El movimiento es suave, resbaladizo, integrando los movimientos del cuerpo entero.
Objetivo :
Reforzar la capacidad de desplazarse de manera fluida y la capacidad de desacelerar y moverse más despacio con maestróa del equilibrio y con flexibilidad. Definiciún :
Este ejercicio pertenece a la Extensión Biodanza con NiÓos y Adolescentes. Es a veces presentado en vivencias con adultos para sensibilizarlos al movimiento lento y estimular el equilibrio, el cual es más complejo en la marcha lenta que en la marcha rápida. Música :
09-20 Oxygíne, Pt. 1	Jarre, Jean-Michel	7:41
MARCHA-DANZA DE ADAPTACIÓN		
A menudo, a causa de un estilo de vida gestionado por la preocupación por el rendimiento, la eficiencia y los resultados, experimentamos una presión que nos corta de la escucha interior, es decir, de la percepción de las necesidades de nuestro organismo, de nuestro propio cuerpo. La autorregulación es un sofisticado mecanismo biológico que nos ofrece la oportunidad de movernos en la vida de manera motivada y regulada, ya sea para entregarnos a la pasión y al logro en la acción, o para a abandonarnos a la voluptuosidad, el descanso y el placer. Descripción :
Sobre la música, que tiene tiempos muy diferentes entre los momentos de descanso y los momentos de actividad, la persona alterna entre los movimientos que traducen una acción motivada (caminar o incluso bailar) y los movimientos que reflejan el reposo (dejándose suavemente caer al suelo para abandonarse al placer con el mónimo esfuerzo). El regreso a la acción es "imperativo", como para atender la emergencia. El abandono al placer es más "despreocupado". Objetivo :
Reforzar la capacidad de percibir la necesidad de respetarse y sentir el gasto de energóa vital en el movimiento. Estimular la capacidad de respuesta adaptada a las estimulaciones del entorno. Estimular la percepción de la autoregulación en movimiento. Música :
18-09 I Want You (She's So Heavy)	The Beatles	7:47
Alternancia entre estar alerta y abandonarse: autoregulación.
LOS JUEGOS
Las situaciones lúdicas son muy favorables para la integración de las personas en un grupo. Por su ligereza, por su invitación a poner por delante la espontaneidad, liberan el movimiento y las relaciones. Las personas encuentran de nuevo el placer infantil de disfrutar, de probar, de descubrir sin preocupación de rendimiento. Los juegos deben entonces ser fáciles, tener reglas simples (cuando las tienen), modalidades simples y claras de realización, no presentar situaciones de competición (ganador / perdedor), ni de "cosificación" (servirse del otro o transformarlo en objeto), ni situaciones de exclusión.
JUEGO DE PALMAS EN PARES
La capacidad de euritmia (estar juntos en un mismo ritmo y naturalmente, "ea-rythmos" significa" bello ritmoá) es esencial en la comunicación humana y en la experiencia de una relación social cordial. Se manifiesta fácilmente en la liviandad de las situaciones lúdicas donde las personas recuperan la liviandad y la inocencia del niño interior. Descripción :
Las dos personas, frente a frente, reeditan la situación de un juego que la mayoróa ha practicado en la infancia. Con ritmo se golpean en las manos permitiendo que el entusiasmo y la espontaneidad desborden el simple movimiento de las manos. Se pueden proponer uno o dos cambios.
En este ejercicio, lo importante es sincronizarse. Es entonces importante mantener el ritmo durante todo el juego. Objetivo :
Estimular la capacidad de sincronizarse en ritmo con otra persona así como la coordinación motriz (integración motriz y audio motriz) en un contexto lúdico (comunicación). Música :
15-10 The More I See You	Montez, Chris	2:38
JUEGO DE A TRES (O CINCO)
Descripción :
Con un objetivo similar al juego del espejo en pares, las personas se colocan en grupos de tres y cada una a su vez crea movimientos en coherencia con el color musical, mientras que las otras dos (o cuatro) siguen y adoptan sus iniciativas. Objetivo :
Estimular la expresión creadora y la aptitud para jugar. Liberarse, a través del juego, del miedo al ridóculo. Música :
06-16 Japanese Sandman	Maddox, Johnny	2:12
JUEGOS DE VITALIDAD		
Ver "Juegos de vitalidad y de samba en grupo". Música :
05-15 Me gusta tu rosa roja	Los Wawanco	3:39
05-06 No Som da Sanfona	Ramalho, Elba	2:41
15-10 The More I See You	Montez, Chris	2:38
20-02 Yellow Submarine	The Beatles	2:40
JUEGOS DE VITALIDAD Y DE SAMBA EN GRUPO	
Las situaciones lúdicas favorecen un contacto espontáneo entre las personas y contribuyen a la cohesión del grupo. También preparan la atmósfera de confianza, de complicidad, de liviandad, que les permitirá abandonarse juntos en las propuestas que exigen más intimidad. Estas situaciones también estimulan naturalmente la alegría de vivir y de compartir.
Se trata de ejercicios que euforizan, que desarrollan los lazos en una atmósfera lúdica, poco comprometedora mas propicia al intercambio, al contacto, a la sincronización de los movimientos y de los ritmos. Esta situación es también muy propicia para superar las reservas y la timidez en la toma de iniciativa (cambios rápidos por ejemplo).
Es la música la que sugiere el contexto del juego. El facilitador invita a las personas a danzar libremente con contacto e interacción, con cambios de situación creando un fenómeno de sorpresa, un ligero caos, de 
 
naturaleza lúdica:
Ejemplos de juegos posibles:
Bailes a dos con cambios muy rápidos.
Bailes en pequeños grupos con mimica.
Ronda con cambios de lugar pasando por el centro de la ronda.
Bailes a dos en número impar (Ahora o nunca). Trencitos con cambio de "conductor". Objetivo :
Salir de los movimientos estereotipados, explorar un poco la transgresión. Música :
04-20 A sete chaves/Camarèo que dorme a onda Carvalho, Beth
 
leva/Dor de amor (ao vivo)		
03-12 Coisa de Pele	Carvalho, Beth	3:26
oa('03','09') Conto de Areia	Nunes, Clara	3:40
03-11 Deixa a vida me levar	Pagodinho, Zeca	4:40
05-11 Fava de Cheiro
Danzar en el centro de la ronda	Sivuca	2:37
05-14 Feito de encomenda	Agepß	3:27
05-20 Festa do interior	Costa, Gal	3:13
05-17 Folia Brasileira	Ramalho, Elba	3:03
oa('04','02') Lenda das Sereias, Rainha do Mar	Monte, Marisa	4:08
05-15 Me gusta tu rosa roja
Ver tambiÓn "Cumbia"	Los Wawanco	3:39
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
oa('04','16') Na linha do mar	Nunes, Clara	2:59
4:50
05-06 No Som da Sanfona	Ramalho, Elba	2:41
21-10 O Amanhè	Simone	4:48
05-07 O Encanto do Gantois	Carvalho, Beth	3:36
03-16 O quÑ Ñ O quÑ Ñ?	Gonzaguinha	4:21
04-19 Portela na avenida	Nunes, Clara	3:46
oa('05','04') Que Nem Vem Vem	Ramalho, Elba	2:46
oa('04','17') Queixa	Veloso, Caetano	4:27
04-21 Saco de Feijèo/Corda no pescoÓo/Sonhando eu sou feliz (ao vivo)	Carvalho, Beth	5:13
oa('01','15') Samba no quintal	Carvalho, Beth	3:29
07-11 Sá pra te mostrar	Mercury, Daniela	3:55
UNO, DOS, TRES, CUATRO		
Descripción :
El facilitador indica que a cada número corresponderá una situación diferente:
Uno: las personas bailan individualmente
Dos: las personas bailan de a dos
Tres: las personas forman pequeños trenes
Cuatro: las personas forman pequeÓas rondas
El juego consiste en una alternancia de estas situaciones. El facilitador clama cada número en voz alta y de modo muy lúdico, poniendo aqui en juego capacidad de ser animador. Conviene también sorprender (la sorpresa forma parte del juego) invirtiendo la secuencia de los números, repitiÑndolos, modulando la duración de cada situación. Objetivo :
Facilitar la integración del grupo, los cambios de situación, la toma de iniciativas en un modo lúdico. Música :
05-20 Festa do interior	Costa, Gal	3:13
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
05-06 No Som da Sanfona	Ramalho, Elba	2:41
oa('05','04') Que Nem Vem Vem	Ramalho, Elba	2:46
04-21 Saco de Feijèo/Corda no pescoÓo/Sonhando eu sou feliz (ao vivo)	Carvalho, Beth	5:13
AHORA O NUNCA		
Descripción :
El facilitador procura que el grupo estÑ en número impar. Habrá entonces varios pares que bailarán juntos y una persona estará sin par (sin compaÓera, compañero). Todo el mundo baila al ritmo de la música. De modo improvisado y según intervalos más o menos cortos (para guardar el efecto de sorpresa), el facilitador corta la música durante uno o dos segundos. Las personas deben entonces cambiar muy rápidamente de par, sin pensar, sin ser selectivo, pero "aprovechando las oportunidades". Este juego crea una situación de caos alegre y delicioso, haciendo que las personas bailen las unas con otras de modo muy libre. Objetivo :
Como a menudo decóa Rolando Toro "necesitamos reaprender a actuar dos veces antes de pensar". El objetivo es responder a las oportunidades que nos ofrece la vida teniendo como base nuestra espontaneidad, nuestro impulso, nuestro deseo. Observaciún :
En lugar de decir que de persona va a quedar "sola", podemos decir que estará "disponible". Música :
05-11 Fava de Cheiro	Sivuca	2:37
05-20 Festa do interior	Costa, Gal	3:13
05-17 Folia Brasileira	Ramalho, Elba	3:03
05-16 Me muero por ella	CaÓa Brava	4:55
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
04-19 Portela na avenida	Nunes, Clara	3:46
oa('05','04') Que Nem Vem Vem	Ramalho, Elba	2:46
05-19 Rodopiou	Pereira, NazarÑ	3:23
04-21 Saco de Feijèo/Corda no pescoÓo/Sonhando eu sou feliz (ao vivo)	Carvalho, Beth	5:13
oa('01','15') Samba no quintal	Carvalho, Beth	3:29
JUEGO DE CONTACTO ìCAMINANDOî EN GRUPO
Apoyándose siempre en la dinámica lúdica (la espontaneidad, la inocencia del niño, la sorpresa de lo imprevisto en las situaciones un poco caóticas) la propuesta es facilitar una situación donde las personas se toquen, superando así los tabúes relacionados al tacto. Descripción :
Se invita a las personas a danzar libremente al ritmo de la música y en un espacio relativamente restringido para evitar una dispersión en el espacio donde se danza. Cuando el facilitador nombra una parte del cuerpo, cada persona apoya sus manos en la parte mencionada del cuerpo de otras dos personas cercanas; siempre en movimiento, meneándose al ritmo de la música. El facilitador mezcla de manera imprevista, partes ñrarasá del cuerpo, yendo de las más fáciles a las más comprometedoras, de acuerdo a las posibilidades del grupo. Objetivo :
Integrar la dimensión del tacto a una situación liviana y poco comprometedora. Facilitar la integración afectiva del grupo. Música :
05-06 No Som da Sanfona	Ramalho, Elba	2:41
JUEGO DE CONTACTO (Cumbia)		
Juego inspirado de un gÑnero musical que tiene una historia muy larga en el folklore sudamericano en sus orógenes africanos y quien generó bailes populares en numerosos paóses de AmÑrica Latina. Descripción :
Siguiendo la letra de la música (Me gusta tu rosa roja), el facilitador guóa el juego.
Arriba las manos: las personas danzan levantando los brazos.
Abajo las  manos: las personas danzan bajando los brazos.
Las caras juntitas: danzar mejilla con mejilla (con una sola persona o cambiando de compañero).
Besito en la frente: un besito en la frente (con una sola persona, otra o cambiando de compañero).
Abrazo al hermano: abrazar al hermano (cambiando de compañero).
Silencio profundo: silencio profundo (el dedo sobre la boca®.Shhhhh, con el movimiento corporal que corresponde).
Gritos en el mundo: se grita al mundo (silbidos, ovaciones, gritos, con el movimiento corporal que corresponde).
Y ahora el coro: todos juntos (las personas danzan de a dos con cambios espontáneos, cuerpo a cuerpo, hasta el fin de la música). Objetivo :
Salir de los movimientos estereotipados, explorar un poco la transgresión. Música :
05-15 Me gusta tu rosa roja	Los Wawanco	3:39
JUEGO DEL ABANICO CHINO EN PARES		
El abordaje de la mirada, en nuestra cultura, hace refferencia a muchos tabúes (no mires, mira hacia abajo, ©por quÑ me miras ...?), porque la mirada habla de nosotros sin que nos sea siempre posible controlar los contenidos perceptibles por otras esferas que la de la razón. Lo que estamos tratando de rehabilitar en Biodanza es la comunicación natural a través de la mirada, la cual permite que entre dos personas que se  restablezcan los puentes que de una apertura real a la percepción esencial. Que esa mera percepción "objetiva" de las cosas del mundo, se convierta en percepción vinculante.
Uno de los primeros enfoques es el de facilitar situaciones que son a la vez divertidas, de comunicación espontánea, y sutuaciones de disolucion de las tensiones relacionadas con la dificultad de ser sincero. Asó,  para esta última parte, nos basaremos sobre los movimientos segmentarios,  la conexión óntima con si mismo, y todo lo que se relaciona con la expresión de las emociones: la integración motriz, afectivo-motriz y la comunicación. Teniendo cuidado de no poner demasiado Ñnfasis en la mirada, lo que podria aumentar la dificultad.
Descripción :
Para enfatizar lo afectivo, las dos personas se ubican  frente a frente y ñvelaná su mirada y un poco su cara con las dos manos, dejando los dedos ligeramente separados, como una suerte de biombo calado, o de abanico de encaje. A través de los intersticios, en una danza sensible, las miradas se buscan, se encuentran, a veces con acercamiento del cuerpo, otras alejándose. Poco a  poco, cuando la confianza se instala por la conexión, las manos se separan, dejando aparecer una parte de la cara y de la mirada hasta mostrarse completamente. Las personas se contemplan entonces en su totalidad revelada y pueden tomarse del brazo o bailar juntos (introduciendo elementos de creatividad manteniendo la conexión de la mirada). Objetivo :
El objetivo de esta danza es domesticar la mirada, la capacidad de mirarse, de manera progresiva y afectiva. Darse su tiempo para dejarse descubrir, permitiendo revelarse y descubrir al otro progresivamente. Note CIMEB :
Aunque el ejercicio se llama "juego", no se descarta que la calidad de la vivencia debe ser de conexion, de sinceridad, de feedback en la relación. La sinceridad no es grave, pero es real. El juego es sincero. Esto es en realidad un "juego de revelación progresiva en retroalimentación." Música :
10-15 FascinaÓèo	Regina, Elis	3:03
El elemento "organizador" del diélogo de la relación, (para el Juego del abanico chino en pares), o del tono (para la Danza de Eutonúa), serÑ la fascinación reciproca, la comunión, y no la voluntad.
EL TREN
El tren propone de modo lúdico de vivenciar el contacto en el grupo, con diferentes niveles de proximidad y de intimidad de acuerdo con  la distancia entre las personas, la música y la duración. Descripción :
Las personas se colocan las unas detrás de las otras, tomandose por la cintura, de modo más o menos próximo y, sigueindo el ritmo de la música, avanzan juntas coordinando y ajustando sus ritmos y sus movimientos. Objetivo :
Facilitar el contacto y la "euritmia" grupal.
Observaciún :
Este ejercicio puede ser muy interesante para integrar el grupo, introducir el movimiento sinuoso y el ritmo central, y favorecer (según la música escogida) la autorregulación. Constituye también un pasaje de un momento activo de la vivencia a otro más suave. Música :
05-21 Batuque	Mercury, Daniela	3:23
05-10 Feira de Mangaio	Nunes, Clara	3:19
oa('04','16') Na linha do mar	Nunes, Clara	2:59
03-16 O quÑ Ñ O quÑ Ñ?	Gonzaguinha	4:21
04-03 Olho por Olho	Carvalho, Beth	3:11
oa('04','01') Preciso me encontrar	Monte, Marisa	3:33
oa('03','14') Rumba Azul	Veloso, Caetano	4:02
oa('01','17') Tâ Voltando	Simone	3:57
oa('02','21') Xote das meninas	Monte, Marisa	4:07
COORDINACIÓN RóTMICA EN PARES (llamado también ìCaminar en paresî)
Descripción :
Caminar con el otro tomados de las manos siguiendo el ritmo de la música. El facilitador propone varias veces el cambio de pareja. Objetivo :
Caminar en perfecta coordinación con otra persona, manteniendo el mismo ritmo y una sintonía recíproca. Desarrollar la capacidad de sintonizarse con el otro y de sensibilizarse a su presencia. Proyecciún Existencial :
Estimular la capacidad de crear el camino juntos. Salir del individualismo, de hacer su camino solo, para dirigirse hacia la complementaridad.
Note CIMEB :
La Coordinacion Ritmica en pares es una posibilidad de dialogar con el otro: ir la encuentro de su ritmo, proponerle el nuestro, y adaptarnos ambos. Si dos personas se sienten incómodas en el caminar juntas, pueden tomar iniciativas como cambiar de mano, de dirección, encontrar como mejorar la situación. Podemos desdramatizar la difucultad diciendo que no siempre es fácil encontrar la sintonía, que a veces resulta "creativo" o "caótico" con diferentes personas pero que lo esencial es saborear el placer de descubrir esta relación conjunta que es la coordinación. Música :
06-12 A Wink And A Smile (Harry Cormik Jr)	OST Sleepless In Seattle	2:47
La vivencia resulta levemente romÑntica. 06-15 Ain't She Sweet	The New Orleans Banjo Band	3:21
Cadencia moderada. 06-07 Alexander's Rag Time	The New Orleans Banjo Band	3:59
20-03 All Together Now	The Beatles	2:11
04-08 Canta, Canta minha gente	da Vila, Martinho	2:33
06-01 Doctor Jazz	Traditional Jazz Band	3:36
06-21 Eh-la-Bas	Jazz Caliente	5:18
06-08 Honey Pie [Part]	The Beatles	2:05
06-10 Mississippi Mud	Traditional Jazz Band	3:10
06-03 Sweet Georgia Brown	The New Orleans Banjo Band	4:11
06-11 The Faithful Hussar	Armstrong, Louis	4:13
06-06 The Man I Love	Antigua Jazz Band	3:46
20-05 When I'm Sixty-Four	The Beatles	2:38
21-07 When You Smile	Flack, Roberta	3:44
07-06 When You're Smiling	Maddox, Johnny	1:59
06-09 Who's Sorry Now	The New Orleans Banjo Band	4:22
20-04 With A Little Help From My Friends	The Beatles	2:38
20-02 Yellow Submarine	The Beatles	2:40
SINCRONIZACIÓN RóTMICA EN PARES		
Descripción :
Tomados de las manos, uno frente al otro y mirándose a los ojos, la pareja alterna movimientos rótmicos en relación con la música en forma sinÑrgica, haciendo un desplazamiento liviano en el espacio. De vez en cuando el facilitador propone el cambio de pareja. Objetivo :
Estimular la capacidad de danzar con el otro a través del ritmo. Reforzar el sinergismo y estimular la capacidad rótmica.  Se trata de un ejercicio de integración con el otro. Música :
06-15 Ain't She Sweet	The New Orleans Banjo Band	3:21
20-09 All Of Me (live)	Fygi, Laura	2:40
06-19 Begin The Beguine	Light, Enoch & The Light Brigade	3:18
05-11 Fava de Cheiro	Sivuca	2:37
05-10 Feira de Mangaio	Nunes, Clara	3:19
06-20 In The Mood
RÑpida y eufórica.	Light, Enoch & The Light Brigade	3:31
06-14 Ja-Da	The New Orleans Banjo Band	4:02
06-16 Japanese Sandman	Maddox, Johnny	2:12
16-07 Lost Mind	Krall, Diana	3:47
08-03 L-O-V-E	Cole, Natalie	2:32
05-05 Mambo No. 5	Prado, PÑrez	2:20
20-16 My Aphrodisiac Is You	Melua, Katie	3:32
06-17 My Blue Heaven (vocal Betty Owens)	The Dukes Of Dixieland	2:32
06-18 Oh! Lady Be Good	Goodman, Benny	3:00
oa('04','01') Preciso me encontrar	Monte, Marisa	3:33
Dirigir alternadamente: conducir al otro, dejarse conducir.
06-03 Sweet Georgia Brown	The New Orleans Banjo Band	4:11
07-20 Sweet Lorraine	Traditional Jazz Band	2:46
15-10 The More I See You	Montez, Chris	2:38
06-22 When The Saints Go Marchin' In	The New Orleans Banjo Band	3:39
21-07 When You Smile	Flack, Roberta	3:44
06-09 Who's Sorry Now	The New Orleans Banjo Band	4:22
SINCRONIZACIÓN MELÓDICA EN PARES		
Descripción :
Tomados de las manos, uno frente al otro, las personas se mueven armoniosamente, siguiendo la melodóa de la música. En este ejercicio es importante la interacción afectiva con el otro. Los ojos pueden estar abiertos o cerrados, según la intensidad de la emoción. Objetivo :
Estimular la comunicación afectiva con el otro a través de melodóa. Coordinación con el otro e integración afectiva con la motricidad. Música :
10-04 Blue Moon	Fitzgerald, Ella	3:11
10-08 Body And Soul (Take 1)	Goodman, Benny	3:28
La Música es levemente cadenciada: en la demostración, conviene "deslizar" los pies para que la danza no se convierta en una sincronización rútmica.
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
15-06 Day Dream	Ellington, Duke	3:36
21-13 Dream A Little Dream Of Me	Fygi, Laura	3:40
10-14 For Sentimental Reasons/Tenderly	Cole, Natalie	4:26
10-05 Goodbye	Goodman, Benny	3:25
13-01 I Miss You So	Krall, Diana	4:42
10-03 Laura	Fitzgerald, Ella	3:43
20-15 Learnin' The Blues	Melua, Katie	3:21
10-06 Mood Indigo	Traditional Jazz Band	3:10
10-09 Moonglow (Take 1)	Goodman, Benny	3:24
07-19 Moonlight Serenade	Light, Enoch & The Light Brigade	3:46
10-07 One More Kiss, Dear (Vocal John Bahler)	The New American Orchestra	4:02
Ritmo suave y leve.
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
07-20 Sweet Lorraine	Traditional Jazz Band	2:46
10-01 The Man I Love	Shepherd, Dave & His Quintet	3:26
08-10 Unforgettable	Franklin, Aretha	3:42
08-09 Unforgettable (duet with Nat King Cole)	Cole, Natalie	3:29
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
06-09 Who's Sorry Now	The New Orleans Banjo Band	4:22
DANZA EN FEEDBACK EN PARES		
Descripción :
Dos participantes inician la danza en la posición convencional, o sea uno de los dos toma con la mano derecha la izquierda del compañero, y apoya la propia mano izquierda alrededor de la cintura de este último; al contrario, el compañero apoya la otra mano en la espalda del primero.
Respecto a la posición, es posible además realizar este ejercicio tomándose de las dos manos (uno frente al otro), o también en la posición del abrazo.
Enseguida, con la música, los dos comienzan a hacer pequeÓas variaciones (de acercamiento, alejamiento, giros) siempre en feed-back, ninguno tiene que guiar la danza.  Es importante evitar la eventual tendencia de dirigir los movimientos del otro.
Esta danza es muy agradable, parecida a las danzas latino-americanas o al baile italiano ñil liscioá, pero implica la búsqueda de un feed-back contónuo con el compañero.  Además, no es necesario conocer o respetar los pasos estructurales tópicos de estas danzas, por ende no existe la exigencia de saberlas bailar.
Observaciún :
Este ejercicio es propuesto con músicas cuya estructura es sobre todo melódica.
Podemos proponer la " Danza de a dos en feedback " también con ritmos tropicales, por ejemplo un forr™ o un mambo (una música que presenta una cadencia ondulante). Observaciún :
Nota: Este ejercicio es propuesto con músicas con estructura donde predomina la  melodóa. Música :
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
14-09 Mania de Você-LanÓa Perfume	Santiago, Emólio	4:33
14-05 Nada por mim/Fullgús	Santiago, Emólio	6:06
14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
14-06 Ronda/Sampa	Santiago, Emólio	5:28
14-01 Samba em preludio	de Moraes-Creuza-Toquinho	3:31
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
14-07 Verdade chinesa	Santiago, Emólio	4:52
DANZA EN PARES CON RITMOS TROPICALES
Cuando la ñDanza a dos en feed-backá es propuesta con ritmos tropicales, como por ejemplo samba, forró o mambo, el ejercicio recibe el nombre de ñDanza en pareja con ritmos tropicalesá. Por ende, la descripción del ejercicio es igual al anterior.
Música :
oa('21','11') Danadinho Danado (com Martinho da Vila)	Simone	4:39
05-11 Fava de Cheiro	Sivuca	2:37
05-10 Feira de Mangaio	Nunes, Clara	3:19
05-18 La Bilirrubina	Guerra, Juan Luis y 4.40	4:05
05-16 Me muero por ella	CaÓa Brava	4:55
05-12 O Baile de Bio Laurinda	Sivuca	2:26
05-03 Paixèo de Beata	do Acordeon, Pinto	3:27
05-19 Rodopiou	Pereira, NazarÑ	3:23
05-08 Valente Nordeste	Pereira, NazarÑ	3:33
LIBERACIÓN DEL MOVIMIENTO		
Las personas tienen poca oportunidad de explorar libremente su expresión con un movimiento libre, amplio, total y espontáneo. Esto lleva a  una restricción de la creatividad y a una inhibición global de la expresión creadora, y también  de la expresión en general. Como una suerte de ñrestriccióná, de inhibición de la indentidad. Sin un movimiento libre de todo el cuerpo, es difócil liberar tensiones y bloqueos expresivos de cualquier tipo. La libertad es ante todo moverse libremente sin preocuparse por la performance. Descripción :
Con músicas lúdicas, vitales, expresivas, las personas danzan libremente osando ocupar el espacio y expresando lo que sienten de la atmósfera global de la música. La danza es creativa, expansiva e invita a liberarse de los yugos que limitan la expresión.
Cuando la música es  muy vital y larga, conviene acortarla o invitar a la autorregulación
(cuando se ven signos de fatiga, se pueden disminuir los desplazamientos o la intensidad de los movimientos, los cuales pueden volverse menos perifÑricos). Objetivo :
Reencontrar la espontaneidad, el impulso creador que no busca ningún resultado, ninguna performance. Música :
07-09 Can't Buy Me Love	The Beatles	2:12
20-11 Koro	?	3:13
07-01 La vie en rose [Part]	Jones, Grace	5:49
07-10 Medley: a) Rip It Up - b) Read Teddy	Lennon, John	1:34
03-15 Nèo Enche	Veloso, Caetano	3:31
07-08 Rock Around The Clock	Haley, Bill & His Comets	2:13
07-11 Sá pra te mostrar	Mercury, Daniela	3:55
 
06-03 Sweet Georgia Brown	The New Orleans Banjo Band	4:11
07-16 Tamborins	Os Ritmistas Brasileiros / Luciano Perrone	0:58
06-13 The Darktown Strutter's Ball	The New Orleans Banjo Band	3:29
06-06 The Man I Love	Antigua Jazz Band	3:46
DANZA RóTMICA		
La percepción corporal del ritmo se traduce en un movimiento corporal  integrado, es decir por la capacidad de moverse en adecuación con la cadencia de la música. El movimiento expresa claramente la vuelta cóclica y repetida de esta cadencia, sin rigidez corporal de tipo mecánico. La vivencia del ritmo participa en la integración audio motriz y facilita la relación en feedback. La percepción del ritmo y su expresión están muy reducidas o perturbadas en las culturas caracterizadas por una suerte de sedentarismo y en aquellas donde la danza con percusiones no forma parte del patrimonio gestual o musical. Descripción :
Consiste en danzar a ritmo de la música, con pequeños saltos, deslizándose en el espacio de la sala. Objetivo :
Estimular la capacidad rótmica a través de la integración auditivo-motora.  Este ejercicio estimula también la agilidad.
Observaciún :
Debido a que la música rótmica posee una gran diversidad de estilos podemos utilizar otras piezas musicales a parte de las mencionadas.
Ejemplo de músicas:
-	ñOh Lady be goodá,  Benny Goodman.
-	ñDoctor Jazzá, Traditional Jazz Band Note CIMEB :
Con una música claramente rótmica, las personas danzan con movimientos libres pero que acentúan la repetición cadenciosa del movimiento de acuerdo al ritmo de la música, y la diferenciación entre los tiempos fuertes( que marcan el tempo) y los dÑbiles.  La  primera impulsión debe ser claramente perceptible por el movimiento de las piernas y de los pies. La flexibilidad de las rodillas y de la pelvis (verdaderos cerrojos anatómicos cuando están rógidos) permite que el ritmo se propague, como una onda (más o menos sinuosa) según la música, en todo el cuerpo.
Música :
18-11 African Sanctus	Fanshawe, David	2:55
07-09 Can't Buy Me Love	The Beatles	2:12
21-03 Charleston	Light, Enoch & The Light Brigade	2:09
07-17 Cidade Vazia	Milton Banana Trio	2:53
21-12 Danse de Zorba	?	3:09
07-01 La vie en rose [Part]	Jones, Grace	5:49
03-15 Nèo Enche	Veloso, Caetano	3:31
07-06 When You're Smiling	Maddox, Johnny	1:59
16-01 Zorba's Dance	Theodorakis, Mikis (ìûáñ† °¢î£§ôêáñ†)	4:18
21-17 Zorba's Dance (OST)	Theodorakis, Mikis (ìûáñ† °¢î£§ôêáñ†)	4:07
DANZA  RóTMICA CON MOVIMIENTOS PERIFóRICOS	
Descripción :
Sobre una música rótmica, expresiva y muy vital, las personas son invitadas a responder al ritmo de la música con movimientos perifÑricos (brazos y piernas). Objetivo :
Estimular la vitalidad del movimiento con el ritmo. Observaciún :
Invitar a las personas a mantener los ojos abiertos y a no sacudir la cabeza. Música :
	07-09 Can't Buy Me Love	The Beatles	2:12
07-15 Ensaio Geral	Os Ritmistas Brasileiros / Luciano Perrone	2:31
07-08 Rock Around The Clock	Haley, Bill & His Comets	2:13
	07-16 Tamborins	Os Ritmistas Brasileiros / Luciano Perrone	0:58
DANZA RóTMICA CON MOVIMIENTOS CENTRALES
Con una música rótmica, las personas son invitadas a iniciar la respuesta al ritmo a partir de movimientos que vienen del vientre, de la pelvis, del tronco. El predominio (en occidente y en la mayoróa de las personas) está en los movimiento perifÑricos (brazos y piernas) con una tendencia a la rigidez del tronco y de la pelvis. Objetivo :
Integración del ritmo y de la sensibilidad visceral. Rehabilitación de la movilidad central asociada con la sensibilidad cenestÑsica (propriocepción) Observaciún :
Invitar a las personas a mantener los ojos abiertos y a no sacudir la cabeza. Música :
07-15 Ensaio Geral	Os Ritmistas Brasileiros / Luciano Perrone	2:31
DANZA RóTMICA CON BATUCADA	
Descripción :
Batucada significa "percusión". Se trata de bailar poniendo el Ñnfasis vivencial sobre el ritmo. Objetivo :
Intensificar la vivencia del ritmo y estimular la integración audiomotriz de los elementos  rótmicos de la música. Música :
	07-15 Ensaio Geral	Os Ritmistas Brasileiros / Luciano Perrone	2:31
07-16 Tamborins
Minotauro : Danza Primitiva.	Os Ritmistas Brasileiros / Luciano Perrone	0:58
BATUCADA CON GRITO		
Este es un ejercicio que, como el anterior, estimula fuertemente la vitalidad y su objetivo es de evocar la parte salvaje del ser humano. Para estructurarlo me inspirÑ en ritmos afro-brasileros como la Batucada Fantástica y algunos de los ritmos de Guem; son apropiados también los ritmos africanos de David Fanshawe ñAfrican Sanctusá.
Es una danza individual que puede ser realizada por una persona en el centro en la ronda o por más personas al mismo tiempo. Durante la euforia de la danza, los participantes emiten gritos espontáneos.
Es importante lograr emitir gritos con naturaleza y fuerza, evitando que sean conducidos por la voluntad o que asuman una fuerza teatral. En otros tÑrminos, es necesario que el grito sea autÑntico y coherente con la música y los movimientos.
Descripción :
Batucada significa "percusión". Se trata de bailar poniendo el Ñnfasis vivencial sobre el ritmo. Objetivo :
Intensificar la vivencia del ritmo y estimular la integración audio motriz de los elementos  rótmicos de la música.
Note CIMEB :
Este ejercicio es más apropiado en el Proyecto Minotauro.
SALTO SINóRGICO
Descripción :
Se trata de un ejercicio de integración motriz que consiste en desplazarse con pequeños saltos manteniendo la sinergóa natural entre los brazos y las piernas, siguiendo el ritmo de la música. El grupo se coloca en ronda abriendo el espacio central de la sala. Cada participante puede hacerlo individualmente, a partir de su propio impulso, desplazándose al centro de la ronda y esto, de una tres veces según la dimensión de la sala. Se puede también hacer con dos a tres participantes a la vez. Objetivo :
Este ejercicio de la lónea de vitalidad que tiene como objetivo estimular la integración motriz. Es claro que se hace con los ojos abiertos.
Observaciún :
Es necesario preparar a los participantes la realización del Salto sinÑrgico, con ejercicios de recalentamiento muscular progresivo (Marcha, Coordinación rótmica, Sincronización rótmica, por ejemplo). Los saltos deben ser hechos de modo armonioso y es absolutamente necesario evitar movimientos bruscos que pueden provocar una torsión del tobillo o una rotura del tendón de Aquiles. Música :
oa('01','18') A de á (Estamos chegando)	Nascimento, Milton	3:32
19-02 Down In Belgorod	Winter, Paul	3:02
07-01 La vie en rose [Part]	Jones, Grace	5:49
07-02 Missa Luba. Kyrie	Les troubadours du roi Baudoin	2:06
Minotauro: Expresion del impulso vital. 07-11 Sá pra te mostrar	Mercury, Daniela	3:55
07-03 Tiger Rag	The New Orleans Banjo Band	3:11
07-06 When You're Smiling	Maddox, Johnny	1:59
VARIACIONES  RóTMICAS		
 
Descripción :
Los participantes caminan rótmicamente para calentar sus músculos y después saltan rótmicamente con sinergóa. La danza se crea sobre la base de cuatro movimientos:
1.	caminar con ritmo,
2.	saltar con ritmo y sinergóa,
3.	saltar con giros sobre só mismo y con los brazos abiertos,
4.	saltar con abertura lateral de las piernas y movimientos simultáneos de los brazos, que se abren y se cierran sobre el pecho, mirando el pie que se levanta en forma simultánea. Objetivo :
Adquirir un repertorio de movimientos rótmicos para introducir un elemento de creatividad en la propia danza; estimular la vitalidad (alegría de vivir).
Música :
06-15 Ain't She Sweet	The New Orleans Banjo Band	3:21
07-04 Be-Bop-A-Lula	Lennon, John	2:37
07-05 King Porter Stomp	Goodman, Benny	3:07
19-01 PrÑsence	Guem	5:29
07-03 Tiger Rag	The New Orleans Banjo Band	3:11
Excelente para debutantes. 07-06 When You're Smiling	Maddox, Johnny	1:59
DANZA DEL CABALLO		
Descripción :
Es un trote brioso de desplazamiento en el espacio. La música tiene el ritmo del trote de un caballo: ñDark horse ñ, interpretada por George Harrison. Es una danza de activación y también alegre. Pertenece a la Línea de la Vitalidad. Objetivo :
Adaptar el movimiento a una música rótmica que, a diferencia de otras músicas, sugiere la gestualidad mómica del caballo e incentiva el trote. En este sentido la danza pertenece también a la Línea de la Creatividad.
Note CIMEB :
Es una danza de la linea de creatividad que combina fuerza, fogosidad, tonicidad, agilidad y rapidez. Música :
07-07 Dark Horse	Harrison, George	3:55
DESPLAZAMIENTO CON  LEVEDAD		
Descripción :
Al son de un vals, o de una música de jazz rótmico o melúdico, el  participante se desplaza con ligereza y flexibilidad ocupando todo el espacio de la sala. Objetivo :
Reforzar la capacidad de desplazamiento. Estimular, accesoriamente, la capacidad de autoregulación. Música :
oa('07','21') An der schínen blauen Donau [Part], op.314	Strauss II, Johann (1825-1899)	3:01
06-19 Begin The Beguine	Light, Enoch & The Light Brigade	3:18
07-24 I've Got You Under My Skin	Fitzgerald, Ella	2:41
07-22 Kaiserwalzer, op.437 [Part]	Strauss II, Johann (1825-1899)	4:25
07-19 Moonlight Serenade	Light, Enoch & The Light Brigade	3:46
07-23 Valse - Coppélia - Acte I/2	Delibes, LÑo (1836-1891)	2:21
DANZA  CREATIVA		
Descripción :
Las personas danzan libremente integrando en su danza los contenidos subjetivos de la música. Hay una intensificación de la visibilidad de la emoción de la danza. Se trata pues no solamente de sentir, sino de crearse a só mismo el movimiento, aquó y ahora. Esta danza puede ser una buena preparación para la Radicalización Musical (Mediumnidad musical) porque abre un espacio de libertad. Objetivo :
Estimular la espontaneidad, la expresividad por medio de movimientos libres, matizados y creativos, sin preocupación de estÑtica formal, pero más bien a partir de la estÑtica vivencial de la libertad de expresión. Observaciún :
Segun el contenido de la música, la expresión encontrará variaciones diversas (fantasía, juego, erotismo, profundidad, pasión, expansión, etc.) Música :
16-06 Baby, It's Cold Outside	Ray, Charles & Carter, Betty	4:12
21-05 Dialogue du vent et de la mer - La mer, trois esquisses symphoniques - 3	Debussy, Claude (1862-1918)	8:08
19-03 I Just Wanna Make Love To You	Hines, Earl	3:37
16-19 Mandala	Kitaro (óúÓ)	6:10
16-04 Miss Celie's Blues (Sister) (1922 Jook Joint) (Vocal Tata Vega)	OST The Color Purple	2:29
08-12 One (Finale)	OST A Chorus Line	3:54
19-12 Sundance	Kitaro (óúÓ)	6:21
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
08-11 Years Of Solitude	Piazzolla, Astor / Mulligan, Gerry	4:11
DANZA DE ROMPER ESQUEMAS (o "fuera de los modelos establecidos")
Se trata de una danza de la lónea de la creatividad en formal y explorar libremente lo que la música "extraÓa Música :
16-12 RÑvolution Industrielle, Pt.3	la cual las personas procuran salir del movimiento
o inhabitual" evoca.
Jarre, Jean-Michel	 
4:03
16-11 RÑvolution Industrielle: Ouverture	Jarre, Jean-Michel	5:11
DANZA EN EL CENTRO DE LA RONDA		
Descripción :
Las personas forman un gran córculo, dejando el centro libre para los danzantes. Cada uno, a partir de su propio impulso a responder a la invitación de la música, baila en el centro. Las modalidades pueden variar de acuerdo con la intensidad de la música (para respetar la autorregulación), con la intensidad del desafóo de ver y de ser visto, y en función del número de participantes :
1.	Las personas pasan en pequeños grupos (de modo espontáneo) y bailan con intensidad durante algunos instantes antes de volver al córculo,
2.	Las personas danzan individualmente, uno a la vez. Esta modalidad es más confrontante y  pide haber ya integrado el coraje de mostrarse sin perder la expresión natural. Objetivo :
Estimulalr el coraje de la expresión: ver y ser visto en plena expresón de só mismo refuerza la propia estima y la validación de todas las personas del grupo. Al nivel grupal, es descubrir la diversidad de expresión y confirmar la importancia de la diversidad.
Música :
20-07 A Mi Manera	Gipsy Kings	3:54
05-22 Bumbo da Mangueira	Costa, Gal	5:09
03-11 Deixa a vida me levar	Pagodinho, Zeca	4:40
08-06 Djobi Djoba	Gipsy Kings	3:26
05-16 Me muero por ella	CaÓa Brava	4:55
16-04 Miss Celie's Blues (Sister) (1922 Jook 	OST The Color Purple	2:29
Joint) (Vocal Tata Vega)
Para grupos avanzados en los cuales se manifiesta una buena capacidad de entrega a la musica bajo la mirada de  los demÑs.
05-12 O Baile de Bio Laurinda	Sivuca	2:26
Coraje de ser uno mismo y de ser visto (reforzar la identidad).
DANZA CON INTENSIDAD
Descripción :
Las personas son invitadas a danzar con intensidad que "desborda", que irradia, que calienta. Sin ahorrarse. Para cubrir las necesidades de autorregulación natural, son invitadas, si la necesidad se hace sentir, a reducir la cantidad de movimientos en caso de cansancio pero sin disminuir la intensidad (para no confundir intensidad con velocidad o cantidad). Movimiento intenso no es sinónimo de mucho movimiento. Objetivo :
Recuperar la intensidad de la expresión. La palabra clave "intensidad" tiene con sentido etimológico  " intendere ", es decir " tender dentro ". Danzar con intensidad es un tipo de radicalización de nuestra capacidad de tender hacia dentro del instante presente, abandonándonos a la música y a nuestra respuesta total a Ñsta.
Proyecciún Existencial :
La educación normativa tiende a apagar la riqueza de nuestra expresividad, sobre todo la intensidad de su manifestación. Necesitamos recuperar esta riqueza: expresarse con intensidad, sentir con intensidad, darse con intensidad. Música :
20-07 A Mi Manera	Gipsy Kings
Puede ser propuesta invitando a las personas a danzar en el centro de la ronda. Puede ser utilizada para sugerir el fuego en las danzas de la categoria de los elementos.	3:54
21-12 Danse de Zorba	?	3:09
08-06 Djobi Djoba	Gipsy Kings	3:26
19-09 Epólogo (Final) - Floresta do Amazonas	Villa-Lobos, Heitor (1887-1959)	2:36
20-06 I've Got A Woman	Charles, Ray	2:54
05-16 Me muero por ella	CaÓa Brava	4:55
04-22 Meu Sapato Jú Furou	Nunes, Clara	3:06
19-11 O fortuna - Fortuna Imperatrix Mundi - Carmina Burana - I/1
Minotauro: Desplazamiento con saltos (Primordial)	Orff, Carl (1895-1982)	2:34
08-07 Viento del Arena	Gipsy Kings	5:30
Fuego y aire (con un toque de tierra, por el sonido del bajo profundo)
08-08 Viva la vida	Chico & The Gipsies	3:04
21-08 When The Saints Go Marchin' In	Jackson, Mahalia	3:01
DANZA RóTMICA EXPRESIVA		
Descripción :
Los participantes danzan inventando movimientos y expresiones al son de una música predominantemente rótmica, que contiene también una melodóa discretamente significativa. Objetivo :
Reforzar el ritmo y la expresividad.
Note CIMEB :
Se debe mencionar la autoregulación (la rapidez y la aceleración pueden modularse sin que se pierda la expresividad).
Música :
07-18 After You've Gone (Take 2) Ritmo rÑpido con algunas variaciones.	Goodman, Benny	2:46
20-09 All Of Me (live)	Fygi, Laura	2:40
05-22 Bumbo da Mangueira	Costa, Gal	5:09
07-09 Can't Buy Me Love	The Beatles	2:12
21-03 Charleston	Light, Enoch & The Light Brigade	2:09
20-10 Diamonds Are A Girl's Best Friend (live)	Fygi, Laura	2:47
06-21 Eh-la-Bas	Jazz Caliente	5:18
08-01 Hello, Dolly!	Armstrong, Louis	2:25
07-24 I've Got You Under My Skin	Fitzgerald, Ella	2:41
07-22 Kaiserwalzer, op.437 [Part]	Strauss II, Johann (1825-1899)	4:25
08-03 L-O-V-E	Cole, Natalie	2:32
08-04 Mack The Knife	Fitzgerald, Ella	4:39
20-08 That Old Feeling (live)	Fygi, Laura	3:31
08-02 This Can't Be Love	Cole, Natalie	2:14
08-05 What Is This Thing Called Love?	Fitzgerald, Ella	2:02
DANZA DE EXPRESIVIDAD		
 
Descripción :
Se trata de una danza de la lónea de la creatividad en la cual el acento es puesto sobre la expresividad: los movimientos son variados, correspondiente a la emoción que emana de la música Objetivo :
Aumentar la capacidad de ser percibido. Estimular el coraje de mostrarse, de ser visto. Reforzar la capacidad de expresión en un abanico rico en matices. La expresividad no es estimulada solamente por el ritmo y la melodóa de la música, sino por el conjunto de los matices que Ñsta puede contener. Observaciún :
Conviene particularmente a personas que ya han realizado la fase inicial del proceso de integración motriz y affectivomotora. Música :
07-09 Can't Buy Me Love	The Beatles	2:12
19-03 I Just Wanna Make Love To You	Hines, Earl	3:37
16-09 Ouverture [Part]	OST Le Grand Bleu	2:29
07-08 Rock Around The Clock	Haley, Bill & His Comets	2:13
08-16 Say It (Over and Over Again)	Coltrane, John	4:19
08-10 Unforgettable	Franklin, Aretha	3:42
INTERPRETACIÓN DE LA MELODóA (o "Danza expresiva meládica")
Esta danza forma parte de las danzas libres expresivas y pertenece así a los ejercicios de la esfera de la creatividad y de la expresión. Descripción :
Las danzas creativas tienen como finalidad desarrollar la expresión y la capacidad de innovar, en una interacción entre la motivación, el placer y la espontaneidad. Esta danza surge más particularmente del contacto con la interpretación de la melodóa de la música en todos sus matices expresivos. 
Frecuentemente, en las danzas libres expresivas hay una gran solicitación, el acento es puesto sobre el impulso rótmico, sobre la libertad expresiva, la alegría, la liberación de lo creativo, la intensidad, etc... La "Danza Expresiva Melódica" da toda la prioridad a las caracterósticas melódicas, fluidas, afectivas, estÑticas, simbólicas e interpretativas de la música. Las melodóas son, en la música, lo que deja pasar la profundidad sentimental, la expresión afectiva y romántica, la continuidad del movimiento, al mismo tiempo que la pulsación fluida e intensa. Danzar la melodóa significa "vivir", sentir, ser la música en su parte más intensa y sensible, y percibir el sentimiento que transmite. Objetivo :
Desarrollar la capacidad expresiva, en tÑrminos de profundidad y de intensidad así como la pulsación Yinyang, de acción y de receptividad, de integración entre percepción y motricidad, entre sentir y expresar. Observaciún :
La Danza expresiva melódica se manifiesta sobre todo por movimientos de apertura pectoral,  por movimientos matizados y pulsantes de los brazos, variaciones expresivas, con una modulación sensible de la tonicidad de las manos y de las muÓecas. La vivencia favorece la capacidad de expresar el propio sentir en todos sus matices e intensidad.
Note CIMEB :
Es preciso sin embargo evitar el estilo "recitado" en el cual los gestos se resumen a ser una transcripción de la partitura o de la frase melódica. Música :
oa('11','12')+ Liebestrúum nã3 in As-Dur - Liebestrúume, Liszt, Franz (18oa('11','18')86)	4:31
S.541
08-10 Unforgettable	Franklin, Aretha	3:42
08-09 Unforgettable (duet with Nat King Cole)	Cole, Natalie	3:29
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
08-11 Years Of Solitude	Piazzolla, Astor / Mulligan, Gerry	4:11
DANZA DE EXPRESIÓN AFECTIVA		
Integración de la afectividad y de la creatividad por una danza cuyo punto de partida es la emoción sentida de la música y su expresión a partir de los movimientos del pecho. Se trata de una variación expresiva del movimiento segmentario de integración pecho-brazo, el cual es más delicado. Objetivo :
Integrar la sensación, la emoción y la expresión. Integración de la afectividad y de la creatividad. Elemento PoÓtico :
Cuando nuestro ser entero se llena y desborda de la emoción suscitada por la música, el "exceso" se hace expresión irrepresible de nuestra abundancia interior. Música :
oa('01','20') Adagio - Concerto in re minore per oboe, 	Marcello, Alessandro (1669-1747) archi e BC - 2, SF 935
Radicalizacion de la expresión afectiva, la cual adquiere profundidad, donde intimidad y expresion consituyen una continuidad, del mismo modo que interior y exterior constituyen una unidad.	4:46
oa('01','07') Ballad Of Sir Frankie Crisp (Let It Roll)	Harrison, George
Minotauro: Expresión de la alegrúa paradisúaca.	3:49
oa('01','06') Behind That Locked Door	Harrison, George	3:07
19-19 Cavalleria Rusticana, XVIII. Intermezzo 	Mascagni, Pietro (1863-1945) sinfonico	3:28
21-02 Freude (Hymne ï la joie) [Part] (Cluytens) - Beethoven, Ludwig van (1770-1827)	1:04
Sinfonie 9 d-moll, op.125 - 4
Minotauro: Expresión de la alegrúa paradisúaca.
03-20 Hallelujah - Messiah, HWV 56 - Part II/42	Haendel, Georg Friedrich (1685-1759)	3:40
Minotauro: Expresión de la alegrúa paradisúaca.
oa('02','07') I'd Have You Anytime	Harrison, George	2:56
Minotauro: Expresión de la alegrúa paradisúaca.
03-07 My Sweet Lord
Minotauro: Expresión de la alegrúa paradisúaca.	Harrison, George	4:41
DANZA CREATIVA EN PARES		
Descripción :
La danza se le hace de a dos con una gran libertad de iniciativas, de todas las posibilidades de distancia, de contacto y de variaciones, en coherencia con la estimulación musical y la estimulación relacional. La danza puede tener un gran valor coreográfico o lúdico, según la alquimia entre la música y la relación. Objetivo :
Estimular la capacidad de coordinación con el otro en el registro de la expresividad. Definiciún :
La coordinación es la sintonía y la sincronización de todos los movimientos. Traduce el estado de los sistemas que oscilan a la misma frecuencia o son capazes de emitir o de recibir ondas de la misma frecuencia. Se dice de una persona cuyo estado y comportamiento concuerdan perfectamente con su entorno.
Música :
06-19 Begin The Beguine	Light, Enoch & The Light Brigade	3:18
20-10 Diamonds Are A Girl's Best Friend (live)	Fygi, Laura	2:47
06-20 In The Mood	Light, Enoch & The Light Brigade	3:31
08-12 One (Finale)	OST A Chorus Line	3:54
09-06 Rosa	Poyares, Carlos	3:47
Exaltar la belleza del otro. Alternando. 20-08 That Old Feeling (live)	Fygi, Laura	3:31
DANZA CREATIVA TEMñTICA EN GRUPO		
La danza creativa temática en grupo permite superar la tendencia de pensar que la creatividad es un acto de un individuo sólo y percibir que se puede ser creativo en interacción con otras personas y responder juntos a un estómulo temático especófico. Descripción :
Son danzas colectivas en las cuales las personas interactúan basadas en las iniciativas y las improvisaciones de situaciones en grupo a partir de un tema propuesto por el facilitador. Ejemplo: ñExaltación de la alegría de vivirá, ñExpresión del erotismo vitalá, Celebración de la libertad de será® Objetivo :
Desarrollar la capacidad de crear movimientos a partir de un tema propuesto y mantener la sintonía con el movimiento de los compañeros del grupo. Este ejercicio estimula la integración auditiva-motora-rótmica y une el impulso expresivo personal y la comunicación afectiva con los demás. Definiciún :
Referirse a la Danza creativa en pareja. Música :
08-12 One (Finale)	OST A Chorus Line	3:54
DANZAR PARA EL OTRO		
Ser capaces de permanecer profundamente conectados con nuestra propia danza bajo la mirada de otro. 
En el sentido de ofrecer nuestra danza.
O bien, ofrecernos totalmente en nuestra danza sin que este ñofrecerá nos prive de algo de nuestra riqueza interior, sino por el contrario, que sea una amplificación. Descripción :
Las dos personas se eligen sobre la base de una afinidad surgida de la conexión en el instante. Una se sienta en posición receptiva y contemplativa, conectándose con su capacidad de recibir al otro a través de su danza, es decir, en la manifestación de su identidad.
El otro se sitúa delante de la persona sentada y a partir de la impulsión, de la emoción generada  por la música, danza para ella (motivada por el propio placer de danzar) y ofrece esta danza (por el simple hecho de recibir la contemplación que le es ofrecida, saber que su danza es recibida por un destinatario, que llega a otro).
Cuando no reparamos en la forma de la expresión del otro pero recibimos su emoción, su vivencia, su danza, de manera afectiva e incondicional, tenemos acceso a él, o a ella, de manera esencial. 
Al finalizar, la persona que ha contemplado ofrece un abrazo y la situación se invierte. Objetivo :
Este ejercicio tiene por objetivo estimular la capacidad de expresarse sinceramente frente al otro, abriendo así un espacio de comunicación sincera, profunda, óntima y liviana a la vez. Tiene también como efecto reparar las experiencias negativas ligadas a la expresión de só, al miedo al juicio, a la tendencia a juzgar. Estimular el coraje de mostrarse, de revelarse ante la mirada de una persona. Y por otra parte, estimular la capacidad de mirar al otro con empatóa. Aprender a recibir el movimiento del otro como una expresión total de su identidad.
Integración de la identidad y la creatividad.
Note CIMEB :
La elección de la música será orientada de acuerdo con la integración del grupo y de la capacidad de expresión y de intimidad de las personas.
Música :
06-12 A Wink And A Smile (Harry Cormik Jr)	OST Sleepless In Seattle	2:47
16-06 Baby, It's Cold Outside	Ray, Charles & Carter, Betty	4:12
08-10 Unforgettable	Franklin, Aretha	3:42
08-07 Viento del Arena	Gipsy Kings	5:30
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
DANZA DE SEDUCCIÓN
Integracion de las lineas de sexualidad y creatividad : expresión del instinto de seducción. Descripción :
Las personas danzan juntas con movimientos y expresiones que indican la intención de seducir. La danza puede hacerse de a dos, con o sin cambios de pareja. Objetivo :
Atreverse a ser visto, atraer la presencia del otro, ejercer el magnetismo natural al servicio de la seducción. Música :
16-06 Baby, It's Cold Outside	Ray, Charles & Carter, Betty	4:12
15-07 Negro gato	Monte, Marisa	4:46
08-16 Say It (Over and Over Again)	Coltrane, John	4:19
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
08-20 Theme From Taxi Driver (Sax Tom Scott)	OST Taxi Driver	4:11
14-15 Uomo del Sud (Violin)	Piazzolla, Astor / Agri, Antonio	3:58
08-07 Viento del Arena	Gipsy Kings	5:30
Puede hacerse siguiendo la modalidad de ofrecer la danza al otro. Una de las personas se sienta y recibe el regalo de la danza que le es ofrecida, con altos elementos de seducción.
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
DANZA DE SEDUCCIÓN DE LAS MUJERES		
Expresion de los movimientos especificos de la sensualidad y la seducción de las mujeres hacia los hombres. Descripción :
Hay diferentes posibilidades: los hombres se acuestan de espalda, ya sea esparcidos en la sala o en forma de estrella. Las mujeres danzan desplazándose entre los hombres, seduciÑndolos uno tras otro. 
La segunda posibilidad es que los hombres formen dos filas paralelas, y las mujeres danzan en el centro, avanzando mientras seducen a los hombres. Esta seducción debe ser de tipo indiferenciado, se trata de seducir al hombre en general y no en particular. Objetivo :
Reahabilitar los comportamientos naturales de seducción y disminuir el nivel de culpa. Música :
20-15 Learnin' The Blues	Melua, Katie	3:21
DANZA DE SEDUCCIÓN DE LOS HOMBRES		
Se trata de una rehabilitación de la identidad sexual genital. La seducción se expresa de manera indiferenciada: cada hombre expressa su seducción a todas las mujeres y no a una sola. Al final, las mujeres (en grupos de dos o tres según el número) abrazan a los hombres. Descripción :
Las mujeres se colocan en el centro de la sala en un grupo, y los hombres bailan alrededor expresando su poder de seducción. Objetivo :
Este ejercicio tiene como objetivo la rehabilitación de las conductas de seducción y de los movimientos de seducción de los hombres hacia las mujeres: se refuerza el sentido de autoestima genÑrica, para asumirse hombre frente a la mujer. Asumir el propio poder de seducción. Mejora de la autoestima. Música :
08-07 Viento del Arena	Gipsy Kings	5:30
DANZA DE EXTENSIÓN MñXIMA		
La Danza de Extensión Máxima consiste en realizar movimientos con los brazos, las piernas y todo el cuerpo, expresando su máxima posibilidad de extensión y estiramiento:
La ejecución de este ejercicio implica un esfuerzo muscular voluntariamente guiado. El efecto visual de esta danza posee una fuerte cualidad figurativa de valor coreográfico, por lo que se aplica también en la Línea de la Creatividad, a pesar de ser un ejercicio de integración corporal. Objetivo :
Activar tendones, músculos y articulaciones, estimulando la integración motora y del equilibrio.
Observaciún :
Invitar a las personas a hacer esta extensión sin la ayuda del apoyo de las manos en el suelo, sino en equilibrio total sobre ambas piernas. Los cambios de punto de apoyo y peso responden entonces cuando es necesario para mantener el equilibrio durante toda la danza. Note CIMEB :
La proyección existencial de este ejercicio es que la integración motriz crea una sensación de expansión, debido a que la persona va más allá de los lómites restringidos de los movimientos estrechos. Música :
08-14 Europa (Earth's Cry Heaven's Smile)	Barbieri, Gato	4:50
08-18 In A Sentimal Mood	Ellington, Duke / Coltrane, John	4:18
08-17 Love Theme	The New American Orchestra	4:17
08-13 My Little Brown Book [Part]	Ellington, Duke / Coltrane, John	4:56
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
08-20 Theme From Taxi Driver (Sax Tom Scott)	OST Taxi Driver	4:11
08-19 You Don't Know Me	James, Bob & Sanborn, David	5:36
DANZA DE EXTENSIÓN ARMÓNICA		
Descripción :
La danza de Extensión Armónica consiste en la realización de movimientos amplios y armoniosos. Se trata de movimientos voluntarios de los brazos realizados lentamente, de modo de procurar un sentimiento de armonía; Ñstos deben ser ñredondeadosá, evitando los gestos angulosos. Eventualmente los movimientos pueden parecerse al gesto de estirarse. Esta danza debe ser realizada con los ojos abiertos y con la posibilidad de cerrarlos esporádicamente cuando se intensifica la vivencia. En este ejercicio se integran funciones conscientes y vivenciales. El efecto subjetivo final es el un sentimiento generalizado de armonía. Objetivo :
El objetivo de este ejercicio es restablecer la función moduladora de la corteza cerebral, generalmente hóperestimulada por un estilo de vida descompensado y sin armonía. Música :
15-06 Day Dream	Ellington, Duke	3:36
08-14 Europa (Earth's Cry Heaven's Smile)	Barbieri, Gato	4:50
08-18 In A Sentimal Mood	Ellington, Duke / Coltrane, John	4:18
08-13 My Little Brown Book [Part]	Ellington, Duke / Coltrane, John	4:56
12-18 Nature Boy	Peixoto, Araken	3:19
08-15 Quintessence	Jones, Quincy & His Orchestra	4:26
08-16 Say It (Over and Over Again)	Coltrane, John	4:19
15-05 Self Portrait (Of The Bean)	Ellington, Duke / Hawkins, Coleman	3:52
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
08-19 You Don't Know Me	James, Bob & Sanborn, David	5:36
ELASTICIDAD INTEGRATIVA		
Descripción :
El ejercicio de Elasticidad Integrativa consiste en rodar lentamente sobre el suelo, estirándose y contrayÑndose con movimientos flexibles que comprometen todo el cuerpo. Este es un ejercicio muy importante considerando su efecto integrante que nace de una variación contónua de la tensión muscular. En efecto, el movimiento de rodar es compuesto por una sucesión de posiciones, donde cada una requiere un nivel diferente de tensión muscular. La alternancia de esta tensión permite integrar dinámicamente los miembros y el tronco, generalmente disociados entre ellos. Lo esencial es que en el movimiento estÑ comprometido todo el cuerpo y no sus partes aisladas, de modo de obtener un estado general de elasticidad corporal. El ejercicio necesita un nivel de tensión muscular que sea capaz de sostener el cuerpo en forma armónica, sin que caiga bajo su peso durante el movimiento de rodar. Objetivo :
Se estimula la integración motora a través de variaciones de los niveles de tensión muscular.
El ejercicio tiene un efecto de rehabilitación de la postura: la activación del tono muscular en forma integrante refuerza la función normal de sostÑn del cuerpo realizada por el sistema muscular. Música :
15-06 Day Dream	Ellington, Duke	3:36
08-14 Europa (Earth's Cry Heaven's Smile)	Barbieri, Gato	4:50
08-17 Love Theme	The New American Orchestra	4:17
08-15 Quintessence	Jones, Quincy & His Orchestra	4:26
08-16 Say It (Over and Over Again)	Coltrane, John	4:19
15-05 Self Portrait (Of The Bean)	Ellington, Duke / Hawkins, Coleman	3:52
08-20 Theme From Taxi Driver (Sax Tom Scott)	OST Taxi Driver	4:11
DANZA DE BRAZOS SENSIBLES		
Este es un ejercicio en la lónea de la trascendencia que tiene como objetivo sensibilizar los brazos a través de una mayor integración sensitivo-motriz (entre la sensibilidad y las habilidades motoras). Es una danza donde predominan los movimientos lentos y sensibles de los brazos, donde no hay impulsos voluntarios (estos pueden estar presentes en una forma mónima y sólo en el comienzo del ejercicio). Descripción :
El movimiento de los brazos induce una ligera participación del torso. La tonicidad es leve. El ejercicio se hace sin desplazarse en el espacio, relajados y con los ojos cerrados. Objetivo :
Integracion sensitivo-motriz. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
17-06 Blue Lotus	Berglund, Erik	5:12
RADICALIZACIÓN DE LA VIVENCIA MUSICAL (Mediumnidad musical)
A lo largo de la historia de la danza, lo más predominante ha sido la voluntad de formar a buenos bailarines que son capaces de lograr, a través de la enseÓanza y la práctica, altos niveles de optimización en el control, la maestróa y la belleza del movimiento.
Hay una alternativa radicalmente opuesta, que es una transformación de la persona danzante en danza. Esta vóa fue descubierta en ocasiones en las ceremonias de las religiones arcaicas, en ciertas danzas mósticas o de Ñxtasis, y en algunos estados inducidos por la absorción de ácido lisÑrgico (LSD), de mescalina o de psilocibina. En estos estados de conciencia, la música es innecesaria ya que el tono y la armonía del biosistema entran en conexión inmediata con la armonía cósmica. En estos casos, el individuo no danza una música determinada (traduciendo los sonidos en los movimientos), sino que entra en un estado vivencial en el cual él mismo es la música.
Es la música que danza a la persona. El individuo y la música dejan de existir, solo queda la danza. La identidad se disuelve en una especie de matriz del universo, el cual también está en pleno movimiento orgánico total, en el que cada elemento es parte de una danza más grande. La danza cósmica es un conjunto de interacciones entre todas las fuerzas que viven.
Ser una danza es una experiencia de trascendencia: el biosistema humano entra en armonía con el biosistema cósmico. Esta es la fuente más poderosa de renovación y activación orgánica. Descripción :
Para llegar al estado de trance que permitirá a la persona conseguir "ser la danza", será necesario comenzar a partir de un estado de casi-inmovilidad, y un estado de tonicidad abierta a los impulsos propioceptivos espontáneos. Un estado incondicional y receptivo, libre de cualquier proyecto. En tales condiciones, el ego desaparece y el individuo "permite" que la música entre en su cuerpo e induzca un estado cenestÑsico.
Escuchar la música con todo el cuerpo e iniciar una danza partiendo de las sensaciones profundas y viscerales que se despiertan y se intensifican en la medida que uno más se entrega a la danza, hasta la fusión completa con la música. Ser la música, ser danzado por la danza. Objetivo :
Alcanzar un nivel mayor de integración entre la música y el movimiento hasta llegar al estado más elevado de mediumnidad musical. Definiciún :
Es una danza que nos invita a la entrega cenestÑsica a la música, con movimientos orientados por la vivencia en una progresiva fusión con los sonidos hasta ñtornarseá música, permitiendo que la danza dance en uno mismo y ser el mÑdium del poder transformador de la música.
Elemento PoÓtico :
Mi danza es la música en forma palpable, sensible, visible. Esta danza permite ñconstelará el arquetipo de Orfeo y activar las fuerzas transformadoras de la música. Música :
08-10 Unforgettable	Franklin, Aretha	3:42
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
RESPIRACIÓN EN BIODANZA		
Muchas disciplinas utilizan la intervención voluntaria en el acto respiratorio.  Podróan ser ejemplos: 
respiración ñnormativaá del Tai Chi Chuan; respiración ñholotrópicaá (hiperventilación, que produce una alcalosis temporánea); distintos  ejercicios del yoga; el control respiratorio del faquir; los ejercicios de la gimnasia clásica.
No comparto estas intervenciones sobre el acto respiratorio. De hecho, Biodanza se basa sobre el respecto profundo de las funciones orgánicas naturales. Por ende, en Biodanza hay solamente dos ejercicios de respiración: ñRespiración danzanteá y ñRespiración Abdominalá.  Muchos ejercicios de Biodanza actúan indirectamente sobre el mecanismo respiratorio: con la disminución de la angustia y del ansia se disuelven las tensiones respiratorias.
En la respiración intervienen algunos mecanismos involuntarios, a pesar que el individuo puede intervenir voluntariamente sobre Ñsta.  Desde el punto de vista fisiológico, la respiración se encuentra en perfecta coordinación con cada movimiento del cuerpo.  El centro respiratorio, que se encuentra en el bulbo cerebral, es programado para enviar estómulos precisos a la caja torácica para proporcionar la cantidad exacta de oxógeno en relación con el respectivo consumo energÑtico del organismo.
RESPIRACIÓN DANZANTE
En el ejercicio de Respiración Danzante que he estructurado, la respiración no es normativa como en la propuesta en el Tai Chi Chuan, sino, al contrario, es cenestÑsica y de conexión profunda con uno mismo. Descripción :
Para realizar este ejercicio es necesario conectarse consigo mismo y sensibilizarse para percibir el ritmo natural de la propia respiración.
A través de una danza armoniosa, dulce, con música de estructura predominantemente melódica, se invoca la felicidad respiratoria, sin intervenir voluntariamente en la propia respiración, evitando agredir con intervenciones voluntarias el proceso respiratorio natural.
Consigna: De pie con ojos cerrados y relajados. Enseguida comienzan movimientos muy sensibles de brazos, en armonía con el ritmo respiratorio propio natural. No es necesario que los gestos coincidan precisamente con las inspiraciones y aspiraciones. Tampoco es necesario intensificar estas últimas. Objetivo :
La finalidad de este ejercicio consiste en la vivencia respiratoria misma. Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
17-01 La petite fille de la mer	Vangelis	5:54
oa('15','15') Largo - Concerto 'La primavera' in Mi 
Maggiore - 2 (Le quattro stagioni op.8/1, RV 269)	Vivaldi, Antonio (1678-1741)	2:47
09-06 Rosa	Poyares, Carlos	3:47
09-05 She	Zamfir, Gheorghe	4:01
RESPIRACIÓN ABDOMINAL		
Es el único otro ejercicio de respiración que existe en Biodanza además de la ñRespiración danzanteá. Descripción :
Se trata de un ejercicio que se desarrolla en pareja. Uno de los participantes se tiende en el suelo mientras el otro, sentado o arrodillado al lado, pone delicadamente su mano sobre el abdomen del primero, para acompaÓar así el movimiento natural ascendente y descendente del abdomen durante la respiración.
Este ejercicio se realiza sin música.
Objetivo :
Se utiliza principalmente como ejercicio de rehabilitación respiratoria.
Muchas personas tienden a respirar involucrando solamente una parte de los pulmones y casi sin mover el diafragma; esta tendencia, en general, indica que el individuo se encuentra en una condición de escasa oxigenación.
La angustia, el miedo y los estados de tensión paralizan el diafragma y la respiración resulta insuficiente. Este ejercicio, entonces, rehabilita la función respiratoria natural.
LA FLUIDEZ
Los movimientos de fluidez comprometen todo el cuerpo en un proceso de deslizamiento sensible en el espacio, de modo que se produzca una conexión táctil con el aire.
Los ejercicios de Fluidez tienen ciertas semejanzas con los movimientos del Tai Chi Chuan, pero en su objetivo, en su gÑnesis lómbico-hipotalámica y en sus efectos vivenciales, son completamente diferentes. Uno de los efectos importantes de los ejercicios de fluidez es la desaceleración y la armonización orgánica. El objetivo de las danzas de fluidez es estimular la vivencia de integración con el universo. Por esta razón considero la fluidez el camino real para alcanzar el estado de Ñxtasis.
Es la capacidad de permitir el flujo contónuo de la energóa. La fluidez es una categoróa del movimiento contraria a la rigidez.
Las personas que poseen fluidez en el comportamiento, evitan fácilmente los obstáculos. Las personas rógidas, al contrario, chocan contra ellos y viven con un inútil gasto de energóa.
En el curso del ajustamiento corporal, que se verifica durante el acto amoroso, la fluidez tiene una función muy importante en el sentido de intensificar la sensación de formar un solo cuerpo con el otro.
La fluidez eleva la calidad de las relaciones humanas en los aspectos intelectual, afectivo y sexual. Como resultado aumenta la flexibilidad en la comunicación y la disposición a encontrar una solución a los conflictos cuando se presentan; mejora también la adaptación recíproca de los cuerpos en el curso del acto sexual.
La fluidez es una categoróa universal del movimiento, se puede observar en la naturaleza: los róos, el viento y  los movimientos de muchos animales como la serpiente, el tigre y los peces.
También es una caracteróstica del elemento agua, que alquómicamente representa la disolución de los sólidos y cuyo equivalente psicológico es el poder de encontrar una "solución" a los conflictos, el agua disuelve quómicamente la sal, originando una solución. Las personas que simbólicamente tienen mucha agua como componente caracterológico, o sea que tienen fluidez, poseen mayor capacidad para resolver los problemas.
FLUIDEZ : SERIE I
La Serie de Fluidez 1 estimula la conexión consigo mismo.
Los movimientos de fluidez se realizan en modo lento y continuo.
La secuencia de fluidez prepara para una danza libre de fluidez o para otras danzas de sensibilidad o de creatividad. Objetivo :
Estimular la conexión consigo mismo. Note CIMEB :
La realización de la secuencia completa, cuando es integrada, favoriza también la integración yin-yang del movimiento.
Etapas de la Danza :
1 Posicián inicial
Parados, los pies separados el ancho de las propias caderas, los  brazos descienden naturalmente a lo largo del cuerpo.
2 Primer movimiento
Movimiento de manos y brazos hacia delante y arriba, el dorso de las manos hacia arriba. Los brazos deben mantener la flexibilidad al nivel de las articulaciones de la muÓeca y del codo. Al llegar a la altura de los hombros, las manos giran en modo que las palmas quedan hacia delante y se inicia el movimiento de las manos y brazos hacia abajo, ñacariciando el aireá. Este movimiento continúa hacia atrás hasta su lómite natural y luego se continúa con el movimiento inverso, o sea hacia delante. Se debe recordar mantener la flexibilidad de los brazos, en las articulaciones de la muÓeca y del codo. AcompaÓar con las piernas, que se flexionan y extienden de modo natural, mientras los brazos oscilan hacia delante y atrás. 
Se repite algunas veces el primer movimiento.
3 Segundo movimiento
Manos y brazos hacia delante y arriba, y hacia abajo y atrás, alternándose el brazo izquierdo y el brazo derecho. Las piernas se pueden separar ligeramente; manteniÑndolas flexibles (ver primer movimiento).
Se repite algunas veces el segundo movimiento.
4 Tercer movimiento
Manos y brazos hacia un lado y hacia el otro lado. Comenzando hacia la derecha, el brazo derecho se dispone en actitud ñyiná, receptiva (como sosteniendo un bebÑ), mientras el brazo izquierdo, en actitud ñyangá, lo penetra (palma de la mano abierta, hacia el lado), mientras la parte superior del tronco gira sobre la cintura. Luego se inicia el giro de la cintura hacia la izquierda, cambiando la actitud de los brazos: el brazo izquierdo será ñyiná y el derecho será ñyangá.
5 Tercer movimiento (alternativo)
El giro hacia la derecha se realiza sobre el talón del pie derecho, la punta del pie elevada, pierna derecha flexionada en la rodilla. La mayor parte del peso del cuerpo está sobre el pie izquierdo, apoyado en la tierra con firmeza, mientras la pierna izquierda está ligeramente flexionada a la altura de la rodilla. El giro hacia la izquierda se inicia disponiendo el pie derecho hacia delante y apoyándolo con firmeza en la tierra. Se desplaza el peso del cuerpo sobre pierna y pie derechos. Luego continuar el giro levantando la punta del pie izquierdo, que ahora gira sobre el talón izquierdo. El movimiento de brazos y manos es el mismo ya descrito.
Se repite algunas veces el tercer movimiento. Música :
09-11 Be Here Now	Harrison, George	4:08
oa('01','01') Free As A Bird	The Beatles	4:02
09-12 Ooh Baby (You Know That I Love You)	Harrison, George	3:59
16-09 Ouverture [Part]	OST Le Grand Bleu	2:29
09-20 Oxygíne, Pt. 1	Jarre, Jean-Michel	7:41
FLUIDEZ : SERIE II		
Observaciún :
La Serie 2 induce la apertura al mundo externo (hacia los demás). La mirada sigue el movimiento de brazos y manos.
Los movimientos de fluidez se realizan de modo lento y continuo.
La secuencia de fluidez prepara para una danza libre de fluidez o para otras danzas de sensibilidad o de creatividad.
Etapas de la Danza :
1 Posicián inicial
La misma ya descrita en la Serie 1.
2 Primer movimiento
Los brazos paralelos y flexibles se desplazan hacia la derecha y atrás, luego hacia la izquierda y atrás, ligeramente separados del cuerpo. Las manos sensibles ñacariciando el aireá y  ñabriÑndose al mundoá. El movimiento de las piernas: ver Tercer Movimiento (alternativo) de la Serie 1.
Se repite algunas veces el primer movimiento.
3 Segundo movimiento
Los brazos paralelos y flexibles se desplazan hacia la derecha y atrás, luego hacia la izquierda y atrás, separándolos del cuerpo hasta elevarlos apenas sobre los hombros. Las manos sensibles. El movimiento de las piernas: ver Primer movimiento.
Se repite algunas veces el segundo movimiento.
4 Tercer movimiento
Los brazos paralelos y flexibles, las manos con las palmas enfrentadas se desplazan hacia adelante y arriba. Al llegar sobre la cabeza, los brazos se abren y descienden extendidos hacia su lado correspondiente (brazo derecho a la derecha, brazo izquierdo a la izquierda). Las manos con las palmas hacia  afuera siempre sensibles. Las piernas pueden separarse un poco.
Se repite algunas veces el tercer movimiento.
5 
Música :
09-12 Ooh Baby (You Know That I Love You)	Harrison, George	3:59
16-09 Ouverture [Part]	OST Le Grand Bleu	2:29
09-15 The Light Thas Has Lighted The World	Harrison, George	3:29
FLUIDEZ : SERIE III		
 
La Serie 3 induce un aumento del equilibrio dinámico, creando energóa.
Los movimientos de fluidez se realizan en forma lenta y continua. En este caso la velocidad a veces puede aumentar ligeramente como consecuencia del aumento de la energóa vital.
La secuencia de fluidez  prepara para una danza libre de fluidez o para otras danzas de sensibilidad o de creatividad. Objetivo :
Aumentar el equilibrio dinámico. Activación y renovación de la energóa vital, energetización, o sea aumento de la energóa vital. Percepción del propio magnetismo bipolar: la bipolaridad de la energóa magnÑtica. Se entiende por magnetismo bipolar la tensión magnÑtica entre las distintas partes del cuerpo. Etapas de la Danza :
1 Posicián inicial
La misma descrita en la Serie 1.
2 Primer movimiento
Brazo y pierna derecha se elevan al mismo tiempo, flexionados, hasta casi hacer tocar rodilla con codo. Pie y mano derechas ligeramente tensas, la punta del pie hacia arriba, la palma de la mano hacia delante. El peso del cuerpo descansa sobre pierna izquierda, ligeramente flexionada. Luego se realiza el mismo movimiento, esta vez con brazo y pierna izquierda.
Se repite algunas veces el primer movimiento.
3 Segundo movimiento
Los brazos abiertos y extendidos horizontalmente en lónea de los hombros. Se realiza un movimiento inspirado en el movimiento de las aspas del molino de viento, girando sobre la cintura en modo horizontal y oblicuo, hacia delante y atrás, a la derecha y a la izquierda. Las piernas están flexionadas y flexibles.
Se repite algunas veces el segundo movimiento.
4 Tercer movimiento
El magnetismo de las manos. Se dispone la mano derecha, centrada delante el cuerpo, más o menos a la altura de la pelvis, con la palma hacia arriba, el brazo relajado. La mano izquierda a la altura del pecho con la palma hacia abajo, el brazo izquierdo flexionado naturalmente, apoyado sobre el cuerpo. Es una posición de reposo, sin otra tensión que aquella generada por el magnetismo que se activa entre las manos. Para sentir el magnetismo se sugiere de acercar y alejar suavemente las manos. Se inicia entonces un movimiento de transporte de las manos así dispuestas, delante del cuerpo, hacia la derecha. Luego se continúa con el movimiento hacia la izquierda. Al pasar por la lónea vertical central imaginaria del cuerpo, se alterna la posición de las manos: la mano derecha va arriba con la palma hacia abajo, y la mano izquierda va abajo con la palma hacia arriba. Se continúa el movimiento hacia la izquierda.
Se repite algunas veces el tercer movimiento.
5 
Música :
09-11 Be Here Now	Harrison, George	4:08
16-09 Ouverture [Part]	OST Le Grand Bleu	2:29
DANZA DE FLUIDEZ CON IMñGENES
Descripción :
La Danza de Fluidez con Imágenes tiene un carácter mómico y constituye una poÑtica del gesto. Algunos gestos poseen una gran pureza expresiva, entre ellos elegó, para demostración de esta danza, los siguientes:
-	Abrir una puerta
-	Indicar una nube
-	Abrir una ventana en el cielo - Indicar un pájaro en vuelo
En la consigna se sugiere a los alumnos crear sus propios gestos, utilizando libremente su  imaginación. Note CIMEB :
Nuestro lenguaje gestual está a menudo muy empobrecido por la falta de libertad de expresión autÑntica de nosotros mismos y por el carácter rutinario de la mayoróa de nuestras acciones y gestos cotidianos. Nuestros pensamientos y nuestra imaginación se disocian de lo que hacemos y sentimos. Esta danza facilita la conexión entre lo imaginario y la creación sensible, la inspiración.
Objetivo: Integrar el movimiento a la conciencia. La integración ideo-motriz. Dar realidad a la imaginación, y abrir nuestro movimiento y nuestras danzas al universo de la imaginación. Estimular la creatividad. Música :
09-19 Adagio - Concerto Brandebourgeois 1 - 2,  F-Dur BWV 1046	Bach, Johann Sebastian (1685-1750)	4:07
Radicalización de la vivencia en todos los casos.
19-16 Andantino Siciliano - Concerto nã1 per chitarra e archi in La Maggiore op.30 - 2	Giuliani, Mauro (1781-1829)	6:21
17-10 Caravansary	Kitaro (óúÓ)	4:36
17-01 La petite fille de la mer	Vangelis	5:54
09-05 She	Zamfir, Gheorghe	4:01
DANZA DE FLUIDEZ EN PARES		
Descripción :
Este es el ejercicio más importante de ajustamiento corporal entre dos personas, porque en cada momento de la danza permite una adaptación dinámica de los cuerpos. Cuando dos personas se encuentran corporalmente y una es fluida, mientras la otra es rógida, se puede hablar de "desencuentro". La "Fluidez en apres" representa la más perfecta comunión y reciprocidad en el encuentro corporal. Objetivo :
Sensibilizar a las personas al ajustamiento sensual. Este ajustamiento tiene como efecto la disminución del egocentrismo, pues debe producirse un cuidado recóproco de los movimientos. Cuando es posible fluir en pareja se entra en un estado sincero de Ñxtasis amoroso. Proyecciún Existencial :
Los amantes que pueden fluir tienen posibilidad de ser felices, porque cada uno acepta las iniciativas del otro.
Elemento PoÓtico :
La vivencia de Fluidez en Pareja es como navegar en el cuerpo del otro. Note CIMEB :
Descripción: Dos personas bailan muy cerca el uno del otro, cara a cara. Su danza es creada por un contacto sensible y cada una de ellas, movida por su sensibilidad, se desliza y se acomoda en los espacios que quedan disponibles en los movimientos de su compañero. De alguna manera, las dos personas "navegan" en el movimiento del cuerpo de la otra. Música :
oa('02','09') Learning To Love You	Harrison, George	4:13
12-18 Nature Boy	Peixoto, Araken	3:19
09-12 Ooh Baby (You Know That I Love You)	Harrison, George	3:59
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
DANZA LIBRE DE FLUIDEZ		
 
Podemos decir que una persona que danza con fluidez, sabe danzar.
Descripción :
Las personas se mueven lentamente, con un movimiento armónico no sólo de las piernas sino del cuerpo entero. La sinergóa (piernas/ronco) está presente, los movimientos son redondeados y el desplazamiento de la base (es decir los pies) se hace en un juego sutil de equilibrio y desequilibrio. Se recomienda a las personas de apoyar el talón y no la punta de los pies al cambiar de lugar. La evolución no se consigue solamente hacia adelante y en linea recta, sino al azar, explorando todos los niveles espaciales (vertical, frontal, posterior, superior, inferior). La danza se lleva a cabo en su totalidad en una posición de pie y se caracteriza por la estabilidad de la base, la ligereza de la parte superior del cuerpo, la libertad de movimiento y la modulación de tono entre los momentos yin y los momentos yang. Objetivo :
Poner en práctica la vivencia de fluidez ya descrita, desplazándose en forma fluida y sensible por el espacio. Aprender a danzar con gracia, armonía y levedad. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
17-10 Caravansary	Kitaro (óúÓ)	4:36
11-09 Earth Born [from Asia]	Kitaro (óúÓ)	2:32
09-20 Oxygíne, Pt. 1	Jarre, Jean-Michel	7:41
09-06 Rosa	Poyares, Carlos	3:47
09-05 She	Zamfir, Gheorghe	4:01
09-14 The Answer's At The End	Harrison, George	5:32
09-15 The Light Thas Has Lighted The World	Harrison, George	3:29
09-13 Who Can See It	Harrison, George	3:49
FLUIDEZ EN GRUPO CON CONTACTO SENSIBLE
Descripción :
Es un primer paso de aceptación de la diversidad. Es una forma sutil de contacto, con elementos afectivos y trascendentes. Posee un elemento indiferenciado, orientado hacia una comunión intra-especie.
Se trata de fluir delicadamente desplazándose entre los compañeros (el contacto que se establece es de naturaleza fugaz).
Produce un efecto regresivo de nivel medio. Objetivo :
Conseguir la aceptación de la diversidad. En este sentido transforma la patologóa racista en inteligencia social, o sea tolerancia y simpatóa en relación con personas diferentes. Proyecciún Existencial :
La aceptación de la diversidad enriquece la vida personal, porque permite la interacción con personas que tienen caracterósticas muy diferentes y que aportan los matices de la propia identidad. Elemento PoÓtico :
Es la vivencia de navegar en medio a la especie humana y de sentir el instinto de la manada, o sea el instinto de solidaridad intra-especie, que es la base de la afectividad. Música :
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
14-18 Mood Indigo	Fitzgerald, Ella	3:26
oa('02','11') Nice To Be Around	Williams, Paul	3:09
EJERCICIOS DE EUTONóA		
Los Ejercicios de Eutonóa en Biodanza pueden ser realizados de tres formas:
-	En pareja
-	En grupo de 3 - En ronda
La EUTONâA EN PARES comprende cuatro ejercicios: Danza de eutonóa (de los óndices), de manos, de pies, de todo el cuerpo.
Los Ejercicios de Eutonóa tienen por objetivo la ecualización del tono muscular, para que el nivel de tensión y relajación entre las personas que participan pueda igualarse. Este efecto puede ser medido por el electromiógrafo después de una vivencia de Eutonóa. El resultado es la superación progresiva de la tendencia a establecer relaciones interpersonales de dominación-sumisión.
Recuperar la capacidad de establecer relaciones interpersonales basada en la reciprocidad, sin que exista una parte dominante y una sumisa.
DANZA DE OPOSICIÓN ARMÓNICA
Descripción :
Las dos personas frente a frente, se ubican de manera de sentir la estabilidad de su base, las piernas separadas, las rodillas flexibles para bajar el centro de gravedad del cuerpo al vientre, el torso erguido, y la concentración de la fuerza en el vientre. Las personas juntan sus manos, las palmas tónicas y apoyadas una contra la otra bien planas, en total adherencia.
La conexión se hace a la vez en la mirada, que expresa la determinación de posicionarse con potencia, y  la complicidad. Ambas ejercen una presión pulsante en las manos, lo que permite un movimiento pulsante de ida y vuelta en el cual participa el cuerpo entero. La finalidad no es ñhacer caer al otroá o ñmostrarle quien es el más fuerteá sino permitir un diálogo a su vez afectivo y potente. Observar que la fuerza viene del centro (vientre, plexo, tronco) y no sólo de las manos.
A medida que transcurre la danza, puede haber desplazamiento de la base de apoyo con el fin de mantener el equilibrio. Es conveniente también indicar a las personas que el hecho de inclinar demasiado el busto hacia adelante compromete el equilibrio necesario para la manifestación de un tono potente.
Alternativa: Puede haber una variación de la posición. Las dos personas ubican su brazo derecho, codo ligeramente replegado (como un escudo) delante de ellas. El contacto se hace entonces con el brazo, como en una posición de lucha. La vivencia está más orientada a la confrontación pero hay siempre una búsqueda de armonía y de reconocimiento de la fuerza del otro. Objetivo :
Esta danza tiene como objetivo permitirle a la persona exprimir (expresar) la parte yang y poderosa de su tonicidad y encontrar el equivalente en el otro. Se trata de un juego sutil y afectivo de diálogo entre dos fuerzas que poco a poco se armonizan. Es siempre la afectividad que sale ganadora. Esta danza tiene como objetivo tanto aprender a expresar nuestras diferencias frente al otro como frente a só mismo, y a escucharlas. Con un feedback perfecto con el fin de alcanzar un equilibrio progresivo gracias a ajustes sucesivos. Definiciún :
El diálogo que se establece entre dos personas cuando están en contacto o cuando  se  tocan está constituódo por varios elementos entre los cuales la percepción del tono juega un rol esencial. El tono puede ser liviano y orientar el diálogo hacia la delicadeza. Puede ser pesado y tornar el diálogo pesado. Puede ser potente y llevar a una suerte de confrontación (distinguir de un enfrentamiento). El tono nos informa recíprocamente sobre la orientación emocional, psicológica y relacional de la situación de este encuentro. La oposición forma parte de las múltiples facetas del encuentro en la relación con  el otro. Informa sobre la divergencia de posiciones y sobre la determinación que posee cada uno para hacer valer la propia. Es armoniosa cuando abre la puerta al diálogo, permitiendo que se establezca una pulsación eutónica simÑtrica: cada uno es escuchado en lo que tiene que expresar, aún con fuerza.
Ninguno tiene la intención de anular al otro. La capacidad de vivenciar la oposición sin romper por eso el diálogo nutre una afectividad madura.
Hay, en toda relación entre una identidad sana y asumida a otra identidad sana y fuerte , momentos donde nos oponemos. Nuestra capacidad para vivir estos momentos con serenidad forma parte del reconocimiento de nuestra propia dignidad y la del otro. Asó se neutraliza la violencia generada por la frustración de no saber cómo posicionarse. Esta danza es, en cierta forma, equiparable al yang de la danza de eutonóa de las manos. Aquó, uno y otro están en contacto con su propia fuerza, pero esta no apunta a debilitar al otro.
Uno y otro armonizan, con el tono, el encuentro de sus potencias respectivas. Música :
15-08 Adios nonino	Piazzolla, Astor	3:24
12-19 As Time Goes By	Peixoto, Araken	2:57
15-11 Crime Of The Century [Part, long]	Supertramp	4:30
19-09 Epólogo (Final) - Floresta do Amazonas MÑs comprometedora.	Villa-Lobos, Heitor (1887-1959)	2:36
15-09 Zdrowas Mario	OST Chamanka	4:21
DANZA DE EUTONóA
La Danza de Eutonóa se realiza a través de la unión de los óndices de la mano derecha de dos personas.  Con los óndices unidos se realiza una danza lenta, con pasos breves que le confieren un carácter ligero.
Es importante conservar unidos los óndices, a pesar de los cambios de posición generados por los desplazamientos durante la danza. Este ejercicio implica la comunicación afectiva a través de la mirada. 
Eventualmente se pueden cerrar los ojos cuando la emoción es muy intensa. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
10-15 FascinaÓèo	Regina, Elis	3:03
09-18 Larghetto (Transcr for Flute-Organ) Violin sonata Nã 13 D Major - 3, op.11 HWV 371	Haendel, Georg Friedrich (1685-1759)	3:32
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
09-16 Reigen Seliger Geister [Part 1] (From 'Orfeo ed Euridice')	Van Leer, Thijs	2:09
09-17 Reigen Seliger Geister [Part 2] (From 'Orfeo ed Euridice')	Van Leer, Thijs	3:54
09-06 Rosa	Poyares, Carlos	3:47
EUTONóA DE MANOS		
La Eutonóa de Manos se realiza a través de la unión de las palmas de las manos. Con las palmas unidas, dos personas danzan a la búsqueda de una armonía. Inicialmente se aplica una cierta presión sobre las palmas del compañero, para lograr una conexión perfecta,  sucesivamente se realizan variaciones creativas sobre el movimiento inicial. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
oa('02','07') I'd Have You Anytime	Harrison, George	2:56
EUTONóA DE PIES		
Descripción :
La Eutonóa de Pies se realiza a través de la unión de las plantas de los pies. Tendidas sobre el suelo,  dos personas unen las plantas de los pies buscando mantener una distancia que permita el juego de los movimientos de las piernas en forma de ñbicicletaá. Se realizan variaciones creativas sobre la base del movimiento inicial. Todo el ejercicio es realizado con lentitud. Objetivo :
Estimular la sensibilidad de los pies y sensibilizarse a la tonicidad de las piernas. La posición también tiene por efecto estimular la irrigación de los órganos internos de toda la zona pélvica y abdominal.
Note CIMEB :
Es importante invitar a regular la distancia entre las personas, de modo que la posición no produzca tensión muscular en las piernas, los muslos o la espalda durante el ejercicio. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
EUTONóA EN GRUPO DE TRES		
Descripción :
Tres personas forman una pequeÓa ronda unidas por los óndices y realizan una danza con movimientos muy lentos y armoniosos. Durante la danza se produce una aproximación entre dos de ellos, mientras que el tercero, sin separar los óndices, protege la relación de los otros dos.
Esta situación se repite sucesivamente, de modo que cada uno de los participantes asume el rol de ñtercero que protege la relacióná. Asó se produce una forma de comunicación afectiva sin competencia, y la afectividad puede encontrar la apertura a una dimensión social. Objetivo :
Se estimula la apertura a un modo de comunicación afectiva sin competencia agregando un elemento de complejidad, o sea la tercera persona. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
09-18 Larghetto (Transcr for Flute-Organ) Violin sonata Nã 13 D Major - 3, op.11 HWV 371	Haendel, Georg Friedrich (1685-1759)	3:32
EUTONóA DE TODO EL CUERPO		
La Eutonóa de todo el cuerpo se realiza a través de la unión frontal de dos personas. En este contacto frontal es necesario adherirse completamente uno con el otro, sin el auxilio de las manos, buscando formar un solo cuerpo en movimiento. Durante la realización del ejercicio los movimientos deben ser muy lentos,  manteniendo una adherencia perfecta de los cuerpos. Objetivo :
El equilibrio de la tonicidad muscular, para que el nivel de tensión y de relajación de cada persona pueda regularse. Sensibilizarse a la tonicidad de todo el cuerpo en una posición que es a la vez de equilibrio y de adherencia, modulando la presión y el peso. Note CIMEB :
Este ejercicio debe ser preparado con una buena sensibilización a la capacidad de lentitud y de feedback. Música :
13-03 Atrús da porta	Caymmi, Nana	3:44
09-03 Bilitis	Zamfir, Gheorghe	4:30
12-17 Estate	Peixoto, Araken	3:30
12-03 Eu e a brisa	Creuza, Maria	3:05
16-05 I'm Just A Lucky So-And-So	Merril, Helen	3:08
12-06 Manhè de carnaval	Santiago, Emólio	3:12
12-18 Nature Boy	Peixoto, Araken	3:19
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
RONDA DE EUTONóA		
Descripción :
Los participantes del grupo forman una ronda, uniendo los dedos óndices de ambas manos con los de sus compañeros vecinos, y realizan movimientos lentos y armoniosos, buscando mantener la unión eutónica de los óndices durante todo el ejercicio. El efecto general de este ejercicio consiste en una ronda fluida, graciosa y ligera que sugiere la idea de una comunidad humana feliz y armoniosa. Objetivo :
Se aumenta la coordinación y la armonía entre los participantes del grupo. Observaciún :
Para evitar que la gente se sienta demasiado incómoda o que se creen tensiones en los brazos y los hombros, conviene invitaral grupo a ajustar la distancia entre ellos (si necesitan más espacio) para moverse con facilidad . La danza se hace con los ojos cerrados.
Variación posible: una de cada dos personas gira hacia el exterior. En esta formación escalonada, la unión del óndice parece más fácil y permite una mayor cercanóa entre las personas. Por lo tanto, puede ser propuesta cuando el grupo se siente cómodo con la intimidad del contacto. Esta variante se realiza con los ojos cerrados. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
09-06 Rosa	Poyares, Carlos	3:47
13-02 When I Fall In Love	Merril, Helen	3:22
SAMBA EN GRUPOS DE 5 (EUTONóA DE CADERAS EN GRUPO 5)
El contacto próximo y el ritmo cadencioso son dos elementos del placer compartido en el grupo. No se trata aquó de ñdanzar el sambaá, sino de pulsar al unósono con los otros, con los otros cuerpos, en una cadencia  ondulante, con una música sensual. Para algunas personas, el hecho de sentir el movimiento de los compañeros que se encuentran a la derecha y a la izquierda puede ayudarlas a sentir el propio movimiento; a aminorar cuando están aceleradas, a mover la pelvis en resonancia con el movimiento del grupo, mientras que solas podróan tener dificultades.
La situación indiferenciada permite abandonarse más fácilmente y reencontrar un sentimiento de pertenencia, de complicidad; una situación como la de este ejercicio contribuye a la disminución del sentimiento de culpa asociado a placer y a la desdramatización de las situaciones de contacto y de placer en el contacto.
Descripción :
Se forman grupos de cinco personas; se toman de la cintura y se acercan de manera de reducir el espacio entre ellas y de sentir sus caderas en contacto. Con la música, el movimiento suavemente cadencioso de la pelvis (rotación lenta) en eutonóa con las dos personas vecinas se propaga al conjunto de este córculo. Las personas cierran los ojos y se abandonan a esta ola ondulante colectiva. Las rodillas están relajadas, los ojos cerrados y el movimiento pélvico es suave y continuo. Es posible apoyar la cabeza en el hombro de una u otra de las personas que están cercanas. Esta versión del ejercicio puede realizarse con un número más grande de participantes.
En una versión más profunda, una persona pasa al centro y se dÑj´ llevar por el movimiento ondulante de los compañeros cuyos cuerpos se pegan al suyo. De manera fluida, las personas se alternan en el centro cuando el facilitador los invita. Según el número de participantes en el grupo, es posible realizar  el mismo ejercicio de a 6 ó 4 personas. Objetivo :
Integración motriz por movilización pélvica. Preparación a las situaciones indiferenciadas del grupo compacto. Integración erótico-afectiva. Música :
14-04 Anos dourados/Eu sei que vou te amar	Santiago, Emólio	5:28
oa('01','16') Aquarela do Brasil	Santiago, Emólio	5:31
oa('12','04') ComeÓaria tudo outra vez	Simone	3:06
14-10 De onde vens	Creuza, Maria	2:55
14-13 Foi a noite	Creuza, Maria	2:15
14-09 Mania de Você-LanÓa Perfume	Santiago, Emólio	4:33
14-12 Mas que doidice	Creuza, Maria	3:27
14-05 Nada por mim/Fullgús	Santiago, Emólio	6:06
14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
14-11 Queixas	Creuza, Maria	3:00
14-06 Ronda/Sampa	Santiago, Emólio	5:28
04-18 Um Canto de AfoxÑ Para O Bloco do Ilê	Veloso, Caetano	3:03
14-14 Você abusou	Creuza, Maria	3:57
MOVIMIENTOS  SEGMENTARIOS
Los movimientos de este grupo de ejercicios apuntan a segmentos especificos del cuerpo, donde las tensiones cronicas tienden a acumularse.
Disolver las tensiones musculares, muchas de las cuales existen en forma crónica.
MOVIMIENTO SEGMENTARIO DE CINTURA (nombre poético: el Junco)
Descripción :
Se realiza con los pies juntos para limitar la superficie de apoyo al suelo, los brazos están en alto y los ojos abiertos. Oscilar el cuerpo como un junco movido por el viento. Objetivo :
Integrar la parte superior del cuerpo con la parte inferior para recuperar la unidad del individuo a menudo disociado al nivel de la cintura. Esta disociación es tópica de las neurosis histÑrica y obsesiva, las cuales son consecuencia de la represión sexual. Música :
09-06 Rosa	Poyares, Carlos	3:47
09-07 Sweet Leilany	AddÑo, LÑo	2:22
MOVIMIENTO SEGMENTARIO DE CUELLO		
Descripción :
Girar lenta y continuamente la cabeza, con el cuello relajado, los ojos cerrados y la boca semi-abierta. Evocar la vivencia del abandono (de dejarse ir). Durante la rotación de la cabeza, es importante no forzar la extensión hacia atrás. El giro debe ser lento y dulce. Objetivo :
Relajar la musculatura cervical. Estimulación del nervio vago (parasimpático) para inducir un estado de semi-trance. Disolver la tensión ocular, oral y del rostro en general.
Música :
09-19 Adagio - Concerto Brandebourgeois 1 - 2,  F-Dur BWV 1046
Radicalizacion de la vivencia, en todos los casos.	Bach, Johann Sebastian (1685-1750)	4:07
09-01 Because	The Beatles	2:46
09-03 Bilitis	Zamfir, Gheorghe	4:30
oa('02','01') Oh My Love	Lennon, John	2:48
09-13 Who Can See It	Harrison, George	3:49
MOVIMIENTO SEGMENTARIO DE HOMBROS
Descripción :
Hacer la rotación de los hombros desde adelante hacia atrás, con los ojos y la boca semi-abierta, evocando una vivencia de liberación, como si nos librásemos de un estado de tensión. Objetivo :
Relajar la musculatura de los hombros y de la región dorsal, generalmente tensa por causa de los mecanismos defensivos y del sentimiento de opresión. Música :
09-19 Adagio - Concerto Brandebourgeois 1 - 2,  Bach, Johann Sebastian (1685-1750) F-Dur BWV 1046	4:07
Radicalizacion de la vivencia, en todos los casos.
	09-01 Because	The Beatles	2:46
	09-03 Bilitis	Zamfir, Gheorghe	4:30
	14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
	09-13 Who Can See It	Harrison, George	3:49
MOVIMIENTO SEGMENTARIO DE PECHO-BRAZOS	
Descripción :
Se trata de mover los brazos pasivamente, recibiendo los impulsos que vienen desde la emoción. Los brazos no hacen movimientos intencionales, se mueven como por un reflejo de los impulsos que llegan desde pecho.  Al inicio se apoyan las manos sobre el pecho, sintiendo la emoción de la música y, sucesivamente, se abren delicadamente los brazos que se moverán bajo el estómulo de los impulsos del pecho. Objetivo :
Integración afectivo-motora, o sea el movimiento de los brazos se inicia en el pecho y no en los hombros. El objetivo entonces es que la emoción organice el movimiento de los brazos, permitiendo una expresión sincera.
Isadora Duncan fue la primera que puso el centro de la danza en el pecho, introduciendo así la dimensión afectiva a la danza. Cuando las personas mueven los brazos en forma disociada del pecho, sus acciones son puramente mentales.
Música :
09-11 Be Here Now	Harrison, George	4:08
09-01 Because	The Beatles	2:46
09-03 Bilitis	Zamfir, Gheorghe	4:30
09-04 Elsha	Zamfir, Gheorghe	4:19
09-18 Larghetto (Transcr for Flute-Organ) Violin sonata Nã 13 D Major - 3, op.11 HWV 371 Movimiento segmentario compartido.	Haendel, Georg Friedrich (1685-1759)	3:32
11-07 MÑditation de Thañs (d'aprís Jules Massenet)	Zamfir, Gheorghe	5:07
09-17 Reigen Seliger Geister [Part 2] (From 'Orfeo ed Euridice')	Van Leer, Thijs	3:54
09-05 She	Zamfir, Gheorghe	4:01
09-15 The Light Thas Has Lighted The World	Harrison, George	3:29
MOVIMIENTO SEGMENTARIO DE PELVIS
Descripción :
Realizar en secuencia los siguientes movimientos:
-	Movimiento posterior de la pelvis
-	Movimiento lateral
-	Movimiento antero-posterior (de báscula) - Movimiento de rotación de la pelvis
La secuencia es con ojos cerrados y boca semi-abierta, evocando sensaciones eróticas. Objetivo :
Activar y armonizar los movimientos de la pelvis, generalmente tensos por causa de estados crónicos por represión sexual. Note CIMEB :
Las personas pueden poner las manos sobre su propio cuerpo para sentir mejor sus propios movimientos. Música :
12-12 GraÓas a deus	Creuza, Maria	3:40
09-08 Muito [Part]	Veloso, Caetano	2:06
09-07 Sweet Leilany	AddÑo, LÑo	2:22
MOVIMIENTOS SEGMENTARIOS COMPARTIDOS
Los movimientos  segmentarios de a dos (compartidos) estimulan vivencias complementarias en la persona que acompaÓa (proteger, sensibilizarse, acompaÓar sin dirigir, feedback muy refinado), y en aquella que es acompaÓada (recibir protección, abandonarse a la presencia del otro, confiar, recibir la intención benevolente en vez de fijarse en la forma que debe tener el acompaÓamiento).
La necesidad de acompaÓamiento y de protección no está exclusivamente presente en relaciones afectivas de amistad, sino también en la dimensión afectiva de relaciones más especóficas, como una relación amorosa. En este sentido, los movimientos segmentarios de a dos pueden constituir una progresión hacia la intimidad y la confianza para el trabajo de la lónea de la sexualidad.
Se trata de los movimientos segmentarios propuestos a dos y en los cuales se diferencian dos vivencias: la de acompaÓar y la de ser acompaÓado. Ambas situaciones deben ser descritas así claramente por el facilitador en su explicación.
Disolver las tensiones musculares que, en su mayoróa, se presentan  de forma crónica, en el contexto afectivo del acompaÓamiento. Esta situación permite que la disolución de las tensiones se haga al mismo tiempo que la reparentalización, que es la posibilidad de resignificar las experiencias de la priemra infancia, y están ligadas a las funciones parentales protectoras.
MOVIMIENTO SEGMENTARIO DE CUELLO DE A DOS
Descripción :
La persona que va a realizar el movimiento se ubica en la misma posición que la descripta en el MS individual. La persona que acompaÓa se ubica adelante, (bastante cerca para comunicar protección, sin perturbar el movimiento) y coloca sus manos de un lado y del otro de la base de la cabeza (bajo las orejas, y ligeramente hacia atrás de la cara). Las manos tienen forma de cuna, tiernas, suaves y sin tensión. Los brazos despegados del torso y sin tensión. El contacto no es simbólico, es real aunque liviano. La persona acompaÓa sin guiar el movimiento del compañero. Conviene estar atento a no dirigir ni limitar el movimiento. Lo importante es invocar la vivencia de protección y benevolencia. Las dos personas tienen los ojos cerrados.
Cuando la música termina, la persona acompaÓante ofrece un abrazo contenedor con dulzura y profundidad. Luego, sin hablar, las dos personas proceden a cambiar para efectuar la reciprocidad de la situación.
Objetivo :
El objetivo de disolución de las tensiones es el mismo que cuando realizado individualmente. Pero a dos, eso está reforzado por el abandono en confianza con el otro. Alló donde el MS individual estimulaba una forma liviana de trance autoinducido, el MS acompaÓado favorece un trance liviano inducido por la afectividad. Para que uno se abandone, el otro vigila en calidad de protector.
Note CIMEB :
En algunas ocasiónes excepcionales,en este ejercicio Rolando proponóa al acompaÓante que se ubicara detrás.
Música :
09-01 Because	The Beatles	2:46
Los movimientos segmentarios compartidos constituyen uno de los niveles mÑs progresivos de la integración entre la afectividad y la sexualidad diferenciada, a travÓs del contacto y de la intimidad.
MOVIMIENTO SEGMENTARIO DE HOMBROS DE A DOS
Las consideraciones de consigna y de contexto son las mismas que para el ejercicio precedente. Es la calidad de la relación y de la confianza que son aquó evocadas. Descripción :
La persona acompaÓante se sitúa detrás de la que va a realizar el movimiento. Las manos se ponen sobre los hombros, sin pesar, de manera que en posición de cuna, envuelvan tiernamente cada hombro. 
Siguiendo el impulso de moverse de la persona que realiza la danza, acompaÓándola, sin dirigirla, sino con la sensibilidad reactiva de su propio movimiento, confiriÑndole más amplitud. Los brazos del acompaÓante son livianos y móviles para no bloquear sino seguir el movimiento, hasta en lo más liviano, en lo más sutil. Al final de la música, la persona puede inclinarse ligeramente hacia atrás apoyando su cabeza sobre el hombro de su ñprotectorá. Este breve instante puede contribuir a reforzar el sentimiento de protección y la manifestación de gratitud. Luego, como en el ejercicio precedente, se ofrece un abrazo. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
MOVIMIENTO SEGMENTARIO PECHO-BRAZOS DE A DOS
 
Las consideraciones de consigna y de contexto son las mismas que para el ejercicio precedente. Es la cualidad de la relación y de la confianza la que es evocada aquó. La vivencia es la de proteger y la de ser protegido. Según el nivel vivencial del grupo y el tema de la sesión, esta  danza puede devenir una invocación del ángel guardián, del ángel protector. Descripción :
La persona que va a realizar su danza se coloca en posición de intimidad, ojos cerrados, manos sobre el pecho. La persona que acompaÓa se ubica detrás con las palmas de sus manos apoyadas delicadamente sobre el antebrazo del compañero, cerca de las manos.
Conviene no pesar, sino establecer un contacto real y liviano que no limite ni aprisione. No se trata tampoco de acariciar los brazos. Cuando la música comienza, la persona comienza a realizar un movimiento pulsante de apertura y de conexión con ella misma, pero luego abandona esta pulsación regular para fundirse en su danza, en la percepción óntima de una continuidad total entre los impulsos que vienen del pecho y los movimientos de los brazos como respuesta. Los movimientos son delicados y lentos con un tono de levedad. La persona que acompaÓa, por empatóa, se vuelve el doble perfecto de ese movimiento con un acompaÓamiento de todo el cuerpo.
Como en los ejercicios precedentes, al final de la música y luego de un instante durante el cual, la persona puede inclinarse hacia atrás (como dejándose abrazar por detrás) y descansar su cabeza en el hombro de su compañero, será recibida con un abrazo antes de proceder a la reciprocidad del intercambio. Objetivo :
El hecho de realizar una danza que integre el pecho (motivaciones afectivas profundas) y los brazos (acción motivada e integrada) estando acompaÓado sin ser guiado, contribuye a dar  de nuevo confianza en la autenticidad: podemos expresarnos sinceramente y seguir siendo amados. La autenticidad se vuelve un valor para integrar en nuestras relaciones. Música :
09-11 Be Here Now	Harrison, George	4:08
09-03 Bilitis	Zamfir, Gheorghe	4:30
INTEGRACIÓN DE LOS TRES CENTROS		
Los tres centros son: Intelectual, Afectivo y Sexual.
Se trata aqui de uno de los objetivos mayores de la Biodanza. En el plano motriz, es alcanzar la unidad motora gracias a la disolucion de las tensiones cronicas, la movilidad de todos los segmentos corporales y la facilidad de movimiento a tracvÑs de la rehabilitacion de categorias de movimiento como la sinuosidad, la sensualidad, la flexibilidad, la fluidez, la elasticidad, el equilibrio y la armonia del tono muscular. En el plano existencial, es reencontrar la unidad entre Pensar, Sentir y Actuar, es decir la coherencia existencial.
La Integración de los Tres Centros puede ser realizada de dos modos:
-	Integración motora de los tres centros
-	Integración cenestÑsica de los tres centros
Integrar el intelecto a la afectividad y a la sexualidad. Este ejercicio es propuesto comúnmente después de la realización de, por lo menos, tres de los  Movimientos Segmentarios (por ejemplo: cuello, hombros y pelvis).
INTEGRACIÓN MOTORA DE LOS TRES CENTROS
Descripción :
Se danza la música con movimientos ondulantes que parten desde las caderas (rotación lenta de la pelvis) y que, progresivamente, comprometen los otros centros (pecho, cabeza y, por extensión, piernas y brazos) de manera cadenciosa y armónica. El movimiento se vuelve como una ola que atraviesa el cuerpo entero. Objetivo :
Integrar la motricidad de los segmentos activados a través de los Movimientos Segmentarios, estimulando la vivencia de unidad y armonía. Estimular las funciones neuromotoras aferentes, o sea  las vóas neurológicas que van desde los centros motores del cerebro y desde el cerebro hacia los músculos.  Se experimenta la vivencia de unidad y armonía. Observaciún :
Con ñAquarela brasileiraá de Emilio Santiago el ejercicio es más activador, y a veces es llamado ñIntegración motora en cascadaá. Música :
oa('01','16') Aquarela do Brasil	Santiago, Emólio	5:31
oa('02','06') Coisa mais linda	Veloso, Caetano	3:12
09-08 Muito [Part]	Veloso, Caetano	2:06
09-12 Ooh Baby (You Know That I Love You)	Harrison, George	3:59
09-13 Who Can See It	Harrison, George	3:49
INTEGRACIÓN CENESTóSICA DE LOS TRES CENTROS
Descripción :
Se danza la música con movimientos sensibles, evocando al mismo tiempo sensaciones de placer cenestÑsico. Ojos cerrados, boca semi-abierta. Ademas, la reducción de los movimientos voluntarios y perifÑricos favoriza los movimientos centrales y sensibles. Objetivo :
Integrar la sensibilidad, o sea las vóas neurológicas aferentes que van desde la piel hacia las vósceras.  Evocar la vivencia de placer cenestÑsico, es decir el placer de moverse.
Música :
12-12 GraÓas a deus	Creuza, Maria	3:40
14-17 What A Diff'rence A Day Made	Franklin, Aretha	3:31
Intensidad progresiva de la Música.
LOS ENCUENTROS
Los ejercicios de encuentro tienen el carácter de un rito de vinculación afectiva y son uno de los más importantes de Biodanza, constituyen un aprendizaje de los comportamientos de aproximación, comunicación y contacto.  
La capacidad de establecer una vinculación afectiva puede ser perfeccionada solamente en un encuentro ritual.  Es necesario distinguir entre los encuentros formales de la vida cotidiana y el encuentro ritual que se realiza en Biodanza, acompaÓado de una música adecuada y en un contexto de intensa afectividad. La vivencia del Encuentro constituye un reaprendizaje en el ámbito afectivo que estimula el respeto, la reverencia y la ternura hacia los otros.
Es posible que dos personas que no se conocen y que realizan el ejercicio del Encuentro en una sesión de Biodanza se despierten a una experiencia completamente nueva, en la cual el "extraÓo" se transforma en un "semejante". Este ejercicio estimula una forma indiferenciada de afectividad, que tiende a reducir lentamente los comportamientos discriminatorios y los prejuicios, de este modo se abre un espacio afectivo de carácter universal.
Durante la vivencia del Encuentro se intensifica la manifestación de la identidad de las dos personas comprometidas en el ejercicio. Al Encuentro cada uno va con su energóa emotiva: al realizarse el abrazo las energías se combinan y nace una tercera energóa de cualidad diferente, de mayor intensidad emotiva. Los ejercicios de Encuentro consisten en una experiencia existencial en la cual la interacción afectiva con el otro facilita e intensifica la percepción de só mismo.
El feedback: La condición básica del ejercicio del Encuentro es la regla del "feedback": la reciprocidad de los gestos de aceptación y aproximación.  Si una de las dos personas comprometidas en el ejercicio expresa una intencionalidad afectiva fuerte, mientras la otra manifiesta discretamente seÓales de limitación, se debe buscar una situación de encuentro que no lleva a ninguna forma de invasión al otro.
Puede suceder que uno de los participantes no estÑ suficientemente preparado para recibir afectivamente al otro, en este caso, un Encuentro excesivamente intenso  puede ser percibido con un matiz de violencia; definimos esto como ñinvasióná.  
El aprendizaje de la regla del "feedback" evita la invasión porque implica la sensibilidad, el respeto del otro y la capacidad de expresar con claridad las seÓales de limitación para no ser invadido.
Es importante que el ejercicio del encuentro se haga con progresividad, en varias clases sucesivas, por medio de diferentes formas de encuentro preparatorio con poco contacto corporal.
Objetivo: Dar a la situación de Encuentro una cualidad ritual, en la cual sea posible descubrir nuevas formas de comunicación afectiva y de contacto.
El aspecto más importante del Encuentro es, sin duda, la vivencia de recibir y ser recibido, la cual implica un aumento cuantitativo y cualitativo de la energóa afectiva de cada uno.  Estos ejercicios inducen el pasaje de un posible estado de soledad a uno de comunión afectiva.
El vónculo afectivo necesita un marco ritual para el acceso a su manifestacion más refinada. En efecto, es necesario distinguir entre los encuentros formales que se producen como parte de la vida cotidiana y el ejercicio del Encuentro como se puede experimentar durante una sesión de Biodanza. Dentro de este marco, las personas viven una inmersón en un contexto de profunda afectividad, donde son sostenidos por la música y las instrucciones, las cuales facilitan la apertura, la disponibilidad, la iniciativa y la apertura a los demás.
ENCUENTRO FUGAZ
El instante presente está dotado de una calidad preciosa: la presencia. Pero a menudo atravesamos  esos instantes de la vida como anestesiados, insensibilizados. Todo nos parece ñnormalá,ñadquiridoá. El instante, entonces, no es más que otro momento en la aritmÑtica existencial. Ahora bien, es importante reencontrar la sensibilidad al valor del instante. Un valor que no se posee sino que se vive. Cuando dos personas se encuentran verdaderamente, cualquiera sea la duración de este encuentro, por más fugaz que sea, son transformadas.
Descripción :
Cuando la música comienza, las personas se encuentran con la mirada y la mano extendida. El tacto es sensible, liviano. El encuentro es fugaz, y sin embargo, se invita a las personas a estar totalmente conectadas con lo que están viviendo en ese instante. La corriente de encuentros es continua permitiendo vivenciar la fuerza y la fugacidad de cada instante. Este encuentro puede preparar para el minuto de eternidad. Y  puede ser seguido o precedido por una ronda concÑntrica de miradas. Objetivo :
Estimular la capacidad de presencia total en cada instante. Sumergirse en una corriente continua de presencia.
Música :
oa('01','21') Air (on the G-string) - Orchester-Suite 3 D-	Bach, Johann Sebastian (1685-1750) Dur - 2, BWV 1068
Encuentro de manos y miradas. Conexion de miradas, diélogo, mensajes de las manos (contexto de 	5:19
profundización de la intimidad).		
13-04 Apelo	Creuza, Maria	3:44
oa('20','01')+ Ay Fond Kiss	Fairground Attraction	3:20
oa('11','05') Evening Fallsá	Enya	3:49
17-01 La petite fille de la mer	Vangelis	5:54
10-11 Nobody Does It Better (vocal Carly Simon)	OST The Spy Who Loved Me	3:30
oa('02','01') Oh My Love	Lennon, John	2:48
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
ENCUENTRO DE MANOS Y MIRADAS	
Descripción :
Las dos personas se aproximan progresivamente y se toman las manos, mirándose a los ojos. Al separarse, después del Encuentro, se alejan lentamente con un gesto dulce de saludo. Música :
11-14 Consolation nã3 en RÑ bÑmol Majeur 	Liszt, Franz (18oa('11','18')86) (Lento placido) - Six consolations, S 172	4:12
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / Console, HÑctor	4:18
18-07 Eric's Theme	Vangelis	4:17
oa('11','05') Evening Fallsá	Enya	3:49
11-16 Imagine	Lennon, John	3:08
oa('11','08') Magie d'amour	Posit, Jean-Pierre	4:43
ENCUENTRO CON ABRAZO		
Descripción :
Dos personas se acercan progresivamente, mirándose a los ojos, para realizar un abrazo.  Luego de un momento de interacción afectiva, los dos se separan lentamente con un delicado gesto de saludo.
La comunicación afectiva se realiza de forma progresiva por medio de gestos de aceptación y acogida. 
Estas seÓales se trasmiten a través de la mirada, la sonrisa y el gesto de recibir al otro. Música :
12-08 Corcovado	Santiago, Emólio	4:07
oa('12','01') Eu sei que vou te amar	de Moraes-Creuza-Toquinho	3:30
10-15 FascinaÓèo	Regina, Elis	3:03
10-12 Feelings	Albert, Morris	4:01
10-14 For Sentimental Reasons/Tenderly	Cole, Natalie	4:26
10-11 Nobody Does It Better (vocal Carly Simon)	OST The Spy Who Loved Me	3:30
10-13 The Very Thought Of You	Cole, Natalie	4:17
10-10 Theme From Summer Of '42	Legrand, Michel	3:56
ENCUENTROS PULSANTES		
Descripción :
El encuentro pulsante (en la pulsación de la intensidad, de la proximidad o la distancia, del tono, del nivel de intimidad, del diálogo) requiere una integración del feedback, para que las dos personas pueden establecer un diálogo armonioso en el cual es posible a la vez escuchar al otro, escuchar el deseo propio, y expresarlo ambos de la manera más natural y vivencial, sin tener que pensar.
Música :
12-08 Corcovado	Santiago, Emólio	4:07
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / Console, HÑctor	4:18
10-14 For Sentimental Reasons/Tenderly	Cole, Natalie	4:26
20-15 Learnin' The Blues	Melua, Katie	3:21
10-16 MoÓa	Wando	4:15
oa('02','11') Nice To Be Around	Williams, Paul	3:09
10-10 Theme From Summer Of '42	Legrand, Michel	3:56
ENCUENTROS TRASCENDENTES		
 
Descripción :
Desde una postura abierta y de gran disponibilidad, las personas se encuentran y toman mucho tiempo para contemplar la cara y los ojos del otro. Se debe permitir que la vivencia de conexión en la mirada adquiera intensidad antes de fundirse en el abrazo. Óste debe ser de total aceptación. El encuentro no es la expresión trascendente de un deseo, sino una disponibilidad incondicional. Objetivo :
Inducir una percepción esencial del otro, del encuentro, en el sentido de una revelación epifánica. Música :
oa('11','13')+ Impromptu nã3 in Ges-Dur (Andante) - Impromptus op.90 D 899	Schubert, Franz (1797-1828)	6:18
17-13 Suo Gan (Vocal Ambrosian Junior Choir)	OST Empire Of The Sun	2:18
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as 
Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
UN MINUTO DE ETERNIDAD (Para siempre)		
ñEn un aÓo pueden pasar muchas cosas que caerán en la trampa del olvido cotidiano. Mas uno puede recordar durante aÓos un beso que duró algunos segundosá (Rolando Toro).
La intimidad simple que proviene de la presencia total de só y del otro en el encuentro es una vivencia emocionante y poderosa de conexión. Algunas personas, cuando se  acercan unas a otras, o cuando se toman en sus brazos, lo hacen realmente si sentir la dimensión de este gesto: en el abrazo, los corazones se acercan, la energóa afectiva de uno se mezcla con la de otro, y crea una unidad viva única. La vivencia de intimidad es el pasaje a la autenticidad: recibir y ser recibido incondicionalmente por lo que uno es, nos invita a relaciones sinceras. Aquellas que nacen sobre la base de la simplicidad: no tenemos nada más precioso que ofrecer que nosotros mismos, seamos quien seamos. Descripción :
Dos personas, a partir de una sintonía inmediata en la mirada, se acercan, se abrazan de manera complementaria, corazón a corazón, con contacto de los tres centros. Permanecen inmóviles, sin balanceos, sin caricias, ni ningún otro movimiento más que el abrazo. La profundidad de este instante fugaz que dura sólo un minuto en el tiempo cronológico, puede proyectarlos a la eternidad, porque una forma parte de la otra: el aquó y el ahora es todo el tiempo y todo el espacio de la vivencia. Cada segundo con valor de eternidad. Objetivo :
Estimular la capacidad de presencia total en la intimidad. Ofrecer una presencia que confiera más presencia. Música :
17-11 September Fifteenth (dedicated to Bill 	Metheny, Pat & Mays, Lyle	2:03
Evans) [Part]
Es importante reservar esta Música ónicamente para este ejercicio.
ENCUENTRO EPIFñNICO
La epifanóa es la súbita revelación de la grandeza de la vida en lo cotidiano, que nos conduce a la percepción ampliada de la realidad y nos pone en contacto con lo sagrado presente en todo lo que existe. Es la comprensión iluminada de la divinidad del mundo, de la naturaleza sobrenatural y del amor como el gran milagro.
Descripción :
Las personas son invitadas a seguir todas las etapas de la ceremonia del encuentro en Biodanza (ya anteriormente descriptas en la introducción) y a ampliar el sentido del encuentro como epifanóa amorosa. Objetivo :
A través del encuentro, vivenciar la epifanóa amorosa, la revelación de lo sagrado en cada uno de nosotros. Elemento PoÓtico :
Cuando la ola de emoción frente a la belleza esencial del otro nos sumerge, eso es la epifania. Esta danza posibilita que a través de la percepción sensible de lo divino en el otro, podamos entrar en contacto con lo divino en nosotros mismos.
Música :
oa('18','15')+ Allegro maestoso - Ballet Don Juan - 4	Gluck, Christoph Willibald (1714-1787)	2:00
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / Console, HÑctor	4:18
ENCUENTROS DIVERSOS		
Bajo el nombre de "Encuentros variados" se proponen, cuando el grupo ha alcanzado un nivel importante de capacidad de feedback, situaciones de encuentros en los que las personas responden libremente a su propia vivencia (en coherencia con el contexto de la sesión y la música). El facilitador no indica ninguna modalidad particular, como es el caso con otros ejercicios de este grupo. Música :
12-05 A noite do meu bem	Caymmi, Nana	2:35
Profunda y sensual, invita naturalmente a la caricia y a un encuentro intenso. La voz de Nana invita a la proximidad corporal y a la intesidad. Contiene romantismo, pero tambien un aspecto determinado, radical.
oa('01','20') Adagio - Concerto in re minore per oboe, archi e BC - 2, SF 935	Marcello, Alessandro (1669-1747)	4:46
17-08 Amora	Creuza, Maria	3:50
11-15 Andante con moto (Version 2) - Klaviertrio nã2 in Es-Dur - 2, op.100 D 929	Schubert, Franz (1797-1828)	4:58
11-03 Araguaia	de BelÑm, Fafá	3:30
20-14 Call Off The Search	Melua, Katie	3:23
oa('12','04') ComeÓaria tudo outra vez Muy lenta y profundamente sensual.	Simone	3:06
12-14 Doce presenÓa	Caymmi, Nana	4:07
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / Console, HÑctor	4:18
Encuentro progresivo con gestos delicados. Fecundar el gesto. DespuÓs de un momento de conexión profunda en la mirada, cada uno ofrece su mejilla a la mano tendida; caricias delicadas, gestos de ternura y abrazo antes de separarse.
12-03 Eu e a brisa	Creuza, Maria	3:05
oa('12','01') Eu sei que vou te amar	de Moraes-Creuza-Toquinho	3:30
10-15 FascinaÓèo	Regina, Elis	3:03
10-12 Feelings	Albert, Morris	4:01
03-19 Gloria in excelsis Deo (Riccardo Muti) - Gloria in Re Maggiore - 1, RV 589	Vivaldi, Antonio (1678-1741)	2:23
03-02 Gracias a la vida Profunda y dulce.	Sosa, Mercedes	4:22
03-20 Hallelujah - Messiah, HWV 56 - Part II/42	Haendel, Georg Friedrich (1685-1759)	3:40
13-01 I Miss You So	Krall, Diana	4:42
11-16 Imagine	Lennon, John	3:08
oa('11','13')+ Impromptu nã3 in Ges-Dur (Andante) - Impromptus op.90 D 899	Schubert, Franz (1797-1828)	6:18
10-17 Improvisasion	Franz, Charles	5:37
12-07 Insensatez	Santiago, Emólio	4:51
10-21 Largo - Prélude nã4 en mi mineur - 24 Préludes, op. 28	Chopin, FrÑdÑric (1810-1849)	2:21
oa('02','09') Learning To Love You	Harrison, George	4:13
oa('11','12')+ Liebestrúum nã3 in As-Dur - Liebestrúume, Liszt, Franz (18oa('11','18')86) S.541	4:31
oa('11','08') Magie d'amour	Posit, Jean-Pierre
Encuentro de manos y miradas. Intensidad luminosa.	4:43
12-06 Manhè de carnaval	Santiago, Emólio	3:12
21-18 Metello	Morricone, Ennio	2:22
12-02 Minha Namorada	de Moraes-Creuza-Toquinho
Rolando la usaba a veces para Rondas concÓntricas de miradas.	3:48
03-07 My Sweet Lord	Harrison, George	4:41
oa('02','11') Nice To Be Around	Williams, Paul	3:09
10-11 Nobody Does It Better (vocal Carly Simon)	OST The Spy Who Loved Me	3:30
10-18 Poco Allegretto - Sinfonie 3 F-Dur - 3, op.90 Brahms, Johannes (1833-1897)	6:17
13-18 Proposta	Simone	2:56
14-01 Samba em preludio	de Moraes-Creuza-Toquinho	3:31
02-18 Se todos fossem iguais a você	de Moraes-Creuza-Toquinho	2:34
10-13 The Very Thought Of You	Cole, Natalie	4:17
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
13-02 When I Fall In Love	Merril, Helen	3:22
CONTACTO Y CARICIAS		
En este capótulo se enumeran los principales ejercicios en los que el contacto y las caricias son el corazón de la vivencia, sea Ñsta predominantemente afectiva, sexual o de trascendencia, o con una combinación más compleja. Conjuntos como la Eutonóa, la Fluidez con contacto, los Movimientos segmentarios compartidos, el Grupo compacto y las Danzas de amor no son parte de este conjunto, sino que se encuentran en sus capitulos especóficos.
BAUTISMO DE LUZ
Descripción :
De pie, uno frente al otro. El que recibe el bautismo permanece con los ojos cerrados en actitud receptiva, mientras su compañero eleva los brazos sobre su cabeza y los desciende lentamente a lo largo de todo el cuerpo con un contacto delicado, en actitud de transmitirle la propia luz (que es una metáfora del amor).
El gesto se asemeja al de imposición de manos, pero en este caso, las palmas  se deslizan suavemente sobre el cuerpo del compañero desde la cabeza hasta los pies. Enseguida, desde los hombros hasta las manos (sin agarrarlas).
Terminando el ejercicio, se suspende el contacto por algunos segundos, lo que contribuye a profundizar la vivencia.
DespuÑs de un abrazo breve, las personas invierten los roles. Objetivo :
Despertar el sentimiento de sacralidad de las personas mediante el ejercicio de su capacidad de autodonación. El simbolismo de la luz representa los sentimientos humanos de generosidad y bondad. Transmitir la propia luz significa donar al otro lo mejor de só mismo.
Este ejercicio presenta una forma de comunicación trascendente, considerando que la manifestación de generosidad sólo es posible cuando se trasciende el propio ego. Observaciún :
Este ejercicio consiste en una ceremonia de donación, no de curación, por lo tanto se realiza solamente de frente al otro.  Eventualmente, pueden producirse fenómenos de curación, aunque no sea Ñste el objetivo del ejercicio.
Pregunta frecuente: ©Por quÑ no se hacen descender las manos también en el lado posterior? Respuesta: Porque es un ejercicio de carácter simbólico (y no una lluvia de caricias) y porque la parte delantera del cuerpo es la más receptiva. Note CIMEB :
Este ejercicio tiene dos niveles de valoración: la del dador (que se conecta a los mejores y más luminosos aspectos de su identidad), y la del destinatario (su presencia es reconocida y exaltada, iluminada). La propiedad de la luz es hacer visible lo que de otro modo permaneceróa en la oscuridad.
Elemento poético: A veces no somos más sensibles a nuestra propia luz interior. La benevolencia del otro, su disponibilidad y su apertura, operan una inversión completa que nos permite abrirnos a todo lo que el universo tiene de luz.
Música :
19-19 Cavalleria Rusticana, XVIII. Intermezzo sinfonico	Mascagni, Pietro (1863-1945)	3:28
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
11-14 Consolation nã3 en RÑ bÑmol Majeur (Lento placido) - Six consolations, S 172	Liszt, Franz (18oa('11','18')86)	4:12
15-18 Reigen Seliger Geister (From 'Orfeo ed Euridice')	Van Leer, Thijs	7:49
DANZA DE CONTACTO MóNIMO (o "Danza de contacto sensible")
El feedback en el contacto abre a una gran gama de intercambios. Ahora bien, a menudo, cuando las personas son muy entusiastas o poco sensibles, el contacto que ofrecen en los encuentros puede ser un poco rudo, pesado, insistente. Lo que no representa un defecto en só mismo, pero puede no convenir a veces en ciertas situaciones más delicadas.
El contacto liviano, sensible, aÑreo, mónimo, en el lómite mismo de la piel, es un contacto que permite una vivencia de tipo transcendente pues ventila (es vaporoso) y abre la percepción de los lómites corporales. La percepción toma la cualidad de una ≠ percepción en membrana •. El tacto diáfano, de tipo yin, torna la piel  muy receptiva. A menudo, un tacto liviano predispone más a las personas a la caricia, mejor que un tacto penetrante.
Descripción :
La danza se realiza de a dos. Los dos compañeros están frente a frente, en una postura distendida, y suficientemente cerca para que los cuerpos se toquen ligeramente, sin presión, sin peso. Con los ojos cerrados danzan lentamente, los brazos livianos, las manos livianas, rozándose suavemente de manera indiferenciada, es decir sin detenerse en una parte del cuerpo en especial. La danza posee la cualidad de la fluidez y la liviandad del aire. Objetivo :
Sensibilizar la piel con un tacto liviano, con un tono liviano. Facilitar la vivencia de fusión con el medio ambiente a través de una percepción de lómites corporales difusos. Percibir la esencia del otro "por la piel", siendo Ñsta más que el simple continente de la identidad.
Esto permite también disminuir las tendencias manipuladoras que vienen de la ansiedad de querer poseer al otro, imponiÑndole un contacto profundo, sin sensibilidad y sin feedback. Observaciún :
La "Danza de contacto mónimo", como la "Danza de brazos sensibles " y la " Sintonóa silenciosa",  tiene como objetivo preparar al participante a ejercicios más profundos de contacto. Música :
17-06 Blue Lotus	Berglund, Erik
La cualidad del tocar es la del agua. Como una lluvia suave y leve.	5:12
21-14 Clair de lune - Harp transcription, Suite 	Debussy, Claude (1862-1918) Bergamasque pour piano	5:41
19-05 I Wanna Be Loved	Horn, Shirley	4:37
10-21 Largo - Prélude nã4 en mi mineur - 24 	Chopin, FrÑdÑric (1810-1849) Préludes, op. 28	2:21
DANZA DE TRANSPORTE DE CORAZÓN A CORAZÓN
Descripción :
Dos participantes abrazados juntan respectivamente sus pechos y hacen movimientos lentos anteroposteriores, con el objetivo de entregar simbólicamente el corazón al otro, y recibirlo abriendo el pecho. En la continuidad de la danza, las dos personas se mueven formando un solo cuerpo, abandonando el movimiento antero-posterior. Poco a poco, cuando se sintonizan, abandonan el movimiento de vaivÑn y se entregan, en una vivencia donde forman uno solo, a un movimiento pulsante de los dos cuerpos juntos. Objetivo :
Ofrecer simbólicamente el corazón al otro y obtener la vivencia de fusión afectiva. Música :
17-08 Amora
PoÓtica y romÑntica.	Creuza, Maria	3:50
13-03 Atrús da porta Sensual.	Caymmi, Nana	3:44
10-12 Feelings	Albert, Morris	4:01
10-14 For Sentimental Reasons/Tenderly	Cole, Natalie	4:26
11-07 MÑditation de Thañs (d'aprís Jules Massenet)
Afectiva.	Zamfir, Gheorghe	5:07
21-09 My Way (live)	Presley, Elvis	3:45
oa('02','11') Nice To Be Around	Williams, Paul	3:09
17-05 Ponteio	Branco, Waltel	2:21
oa('11','20') Pra dizer adeus	Jobim, Tom e Lobo, Edú	4:42
13-02 When I Fall In Love	Merril, Helen	3:22
Sensual.
CARICIAS ANÓNIMAS DE MANOS EN GRUPO DE CINCO
Se trata de un ejercicio de afectividad indiferenciada. De hecho, la caricia de las manos en este contexto anónimo aumenta la conciencia de la variedad de posibilidades presentes en el grupo: temperatura de la piel, textura, consistencia, tono, etc. Descripción :
Los participantes forman pequeños grupos de cinco personas que se disponen en córculo.  Cada uno extiende sus manos hacia el centro y las pone de forma alternada sobre las de los compañeros. Se inicia una caricia anónima con ojos cerrados, sin saber a quien pertenecen las manos que se están acariciando.
Este es un ejercicio de afectividad indiferenciada.  La caricia de las manos revela diferentes temperaturas, consistencias, fuerzas, pero, en general, la caricia tiene que ser delicada y tierna. Objetivo :
Vivenciar la oportunidad de amar y cuidar a través de la caricia sin saber quiÑn es el receptor del impulso afectivo. Abrirse al amor indiferenciado. Música :
11-19 A noite do meu bem	Creuza, Maria	2:41
oa('11','04') Little Girl Blue	Simone, Nina	4:20
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
CARICIAS DE ESPALDA EN PARES		
Descripción :
En pares, uno de los compañeros acaricia la espalda del otro suavemente. No se trata de un masaje, sino, al contrario, de un acto de protección. La realización de las caricias tiene que hacer sentir al compañero que las recibe que está acompaÓado y protegido. El ejercicio termina cuando para la música y entonces se cambia de rol: el compañero que fue acariciado ahora acaricia, mientras el otro recibe. Quien recibe caricias asume una actitud receptiva con los ojos cerrados. Objetivo :
Estimular la capacidad de dar y recibir protección y cuidado afectivo. Estimular la capacidad de entregarse al placer de recibir las caricias.
Observaciún :
Como se dijo anteriormente, la situación de alternancia en la caricia permite a las personas, por un lado, de profundizar en su capacidad de dar y recibir, y por otro lado, aumentar su capacidad de dar ternura, protección y placer.
Cuando el ejercicio es realizado en la posición acostada en el suelo, será necesario ayudar a la persona a darse vuelta para sentarla y darle un abrazo contenedor. (Para la posición correcta que debe adoptarse para dar este abrazo, ver la descripción en el ejercicio "Dar y recibir continente a dos"). Música :
11-19 A noite do meu bem	Creuza, Maria	2:41
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
CARICIAS DE MANOS EN PARES		
Descripción :
En pareja, uno frente al otro, se toman de las manos y comienzan a acariciar sutilmente las manos del compañero.
Cuando la emoción es muy fuerte, se pueden cerrar los ojos y aumentar brevemente la presión de las manos. Este contacto tiene que ser siempre pulsante, nunca rógido y debe tener la caracteróstica de una caricia.
Objetivo :
Este ejercicio despierta un tipo de vivencia sorprendente e intensa, porque es como conectar dos centros de energóa que lentamente se transforman en una única energóa. Se pasa así del contacto a la caricia, para terminar en una vivencia de comunión. Note CIMEB :
Es especialmente adecuado proponer este ejercicio como una preparación para una vivencia que requiere más sensibilidad, confianza y compromiso en la relación diferenciada. Muchas vivencias de a dos constituyen una iniciacion al contacto y al diálogo en eutonia con el otro. Sin embargo, la transición del contacto a la caricia abre el camino para vivencias de gran intensidad y a un diálogo poderoso. Música :
12-12 GraÓas a deus	Creuza, Maria	3:40
oa('11','20') Pra dizer adeus	Jobim, Tom e Lobo, Edú	4:42
12-13 Pra voce	Caymmi, Nana	3:47
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
13-02 When I Fall In Love	Merril, Helen	3:22
21-16 Wild Is The Wind	Simone, Nina	3:23
CARICIAS DE PIES EN PARES		
Descripción :
Dos personas se eligen para hacer este ejercicio juntos. Uno de ellos se acuesta de espalda y se entrega con los ojos cerrados a recibir, mientras el otro se sienta a sus pies, colocándo Ñstos sobre sus muslos. Ambos pies son acariciados al mismo tiempo y el contacto se mantiene durante toda la duración de la música. Cuando la emoción es intensa, la persona que ofrece la caricia puede cerrar los ojos. Las caricias son pulsantes, variando entre levedad e intesidad. Objetivo :
Muchos ejercicios de Biodanza están dirigidos para que la persona renuncie al ñegoá temporalmente, poniéndose en una actitud de dedicación profunda hacia otra persona.
En la vivencia de devoción y humildad se esconde una fuerza que exalta la belleza de los dos participantes: del recibe el tributo y la caricia, así como del que acaricia. También podemos describir esta vivencia como una búsqueda de comunión, de una calidad particularmente profunda. Proyecciún Existencial :
Es una acción de amor, de amor humanitario. Cuando Magdalena lavó los pies de Cristo con aceite y los secó con sus cabellos, estableció un vónculo profundo y misterioso, donde habóa una mezcla de humildad y amor, no habóa arrogancia ni alarde, sino dulzura y ternura. En realidad, acariciar los pies de la persona amada es una ceremonia de vónculo extraordinariamente profunda. Música :
13-20 I See Your Face Before Me	Merril, Helen	2:37
CARICIAS DEL ROSTRO EN PARES		
Descripción :
Es una ceremonia altamente diferenciada. Recóprocamente los participantes acarician la frente, mejillas, orejas y labios del compañero. Es un acto vivencial muy intenso pero, al mismo tiempo, actúa también la conciencia. Se toma conciencia repentina de la forma del rostro del compañero, de sus detalles, que muchas veces expresan sufrimiento, tristeza, sensualidad, inocencia, etc.
Como siempre, los ojos están abiertos, pero cuando se profundiza la vivencia, la persona espontáneamente cierra los ojos.
La caricia  del rostro tiene dos modalidades: puede ser recíproca y simultánea o sucesiva, donde uno recibe y el otro entrega. Objetivo :
Aprender a acariciar el rostro con delicadeza es una tarea importante en la vida. En el momento que acariciamos un rostro, nos damos cuenta que todos los rostros tienen belleza, una belleza no formal, sino una belleza emotiva, una estÑtica expresiva, etc. Note CIMEB :
La caricia recíproca tiende más a la linea de sexualidad, mientras que la caricia alternada tiende más hacia la afectividad. Se trata de una ceremonia altamente diferenciada: conocer al otro, único y diferente, a través de la caricia.
Música :
oa('13','06') Almost Blue	Baker, Chet	3:14
21-14 Clair de lune - Harp transcription, Suite Bergamasque pour piano	Debussy, Claude (1862-1918)	5:41
Facilita el tocar yin, sensible y delicado, con la cualidad del aire.
oa('11','05') Evening Fallsá	Enya	3:49
13-20 I See Your Face Before Me	Merril, Helen	2:37
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','20') Pra dizer adeus	Jobim, Tom e Lobo, Edú	4:42
12-13 Pra voce	Caymmi, Nana	3:47
12-09 Simples carinho	Simone	4:10
oa('11','06') The First Time Ever I Saw Your Face	Flack, Roberta	4:18
CARICIAS DE LAS PROPIAS MANOS		
Ciertas personas generalmente se proyectan sólo hacia fuera, hacia la acción por la acción misma. Son personas que se ocupan solamente de las cosas útiles y no se conceden el tiempo de estar consigo mismas. 
Durante el ejercicio pueden tener una vivencia de gran intensidad, puesto que la unión tierna de las manos crea un poderoso campo de intercambio de energóa afectiva.
Es un ejercicio de la lónea de Afectividad. Descripción :
A partir de una conexión profunda consigo misma, la persona acerca lentamente sus dos manos y las dÑj´ dialogar con ternura, con caricias sensibles y delicadas. Las dos manos pueden en ciertos momentos abrazarse, acunarse. La mirada puede acompanar la caricia o los ojos pueden cerrarse. Objetivo :
Se entra en contacto afectivo con uno mismo. La posibilidad de contacto de una mano con la otra permite al participante una aparición lenta de la sutil emoción de estar conectado con uno mismo, de ser ñuno mismoá. Música :
oa('01','20') Adagio - Concerto in re minore per oboe, 	Marcello, Alessandro (1669-1747) archi e BC - 2, SF 935
Gran profundidad. Conviene a grupos con buen nivel de integración.	4:46
09-03 Bilitis	Zamfir, Gheorghe
Esta Música posee una semantica particular que la vuelve adecuada a muchas situaciones y favoriza diferentes niveles de integración. Conviene a todos los niveles.	4:30
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','11')+ Watermark	Enya	2:25
CARICIAS DEL PROPIO CUERPO (Autoacariciamiento)
A raóz del tabú ligado al contacto y al placer, que caracteriza nuestra cultura y nuestra educación, la relación con el propio cuerpo está a menudo ligada a situaciones de ñplacer solitarioá, a la masturbación y por extensión a la culpa. Muchas personas se han privado de la conexión con su cuerpo y este no es amado. Sólo tiene valor si los otros lo aman, si el placer viene de los otros, si la confirmación nos viene de los cumplidos recibidos. Ahora bien, es una búsqueda vana, esperar corresponder a lo que suponemos gustará a los otros. Es importante vivenciar de manera natural, afectiva e inocente la relación óntima con nuestro propio cuerpo.
Esto constituye un verdadero proceso de rehabilitación no sólo de la autoestima sino también de la imagen de uno mismo. El  amor que se profesa a uno mismo, se traduce  en actos, en elecciones esenciales que traducen este amor.
Según la música utilizada, la vivencia estará diferentemente orientada al autoerotismo o a la transcendencia. Pero siempre a partir de una matriz afectiva. Descripción :
La persona está de pie, ojos cerrados. Las manos apoyadas en el pecho y en el vientre, en actitud de recogimiento. Cuando comienza la música, la persona acaricia suavemente con sensibilidad y con ternura todo su cuerpo, dejándose ir progresivamente a una vivencia profunda de intimidad en la que se realice un circuito completo entre la acción
(las manos que acarician) y la sensibilidad (el cuerpo acariciado). Es un acto profundo de reconocimiento de uno mismo a través del placer.
Objetivo :
Vivenciar la percepción del propio cuerpo como dotado de valor intrónseco y como espacio de placer. Música :
11-14 Consolation nã3 en RÑ bÑmol Majeur 
(Lento placido) - Six consolations, S 172 Afectividad y transcendencia.	Liszt, Franz (18oa('11','18')86)	4:12
oa('13','07') O que serú
Sexualidad (Auto-erotismo)	Simone	4:49
12-09 Simples carinho	Simone	4:10
CARICIAS SENSIBLES DE CABELLOS EN PARES
Si una persona aprende a acariciar sensiblemente los cabellos, aprende el secreto de la caricia y en el futuro puede tocar cualquier parte del cuerpo con sensibilidad. Descripción :
Las caricias sensibles de cabellos son superficiales, realizadas con gran dulzura y sensibilidad. La persona que da la caricia se pone en frente de quien la recibirá. La persona que recibe cierra los ojos para sentir mejor la caricia. Es muy importante aclarar que no se trata de una caricia reciproca: primero uno de los compañeros es activo y acaricia al otro, que es pasivo y recibe. DespuÑs, cuando termina la música, se invierten los roles.
Cuando ambos los compañeros hacen el ejercicio simultáneamente, se dan caricias recíprocas, se produce una complicidad en la cual se da y se recibe simultáneamente, pero disminuye la intensidad de esta vivencia.
Objetivo :
Recibir pasivamente las caricias significa acoger estómulos centrópetas de gran intensidad.  Dar caricias significa, al contrario, ejercitar estómulos desde el exterior hacia el interior.
Música :
11-19 A noite do meu bem	Creuza, Maria
A causa de su semÑntica, esta Música solo puede ser utilizada en situaciones de reparentalización.	2:41
oa('13','06') Almost Blue	Baker, Chet	3:14
17-08 Amora	Creuza, Maria	3:50
oa('11','05') Evening Fallsá	Enya	3:49
19-05 I Wanna Be Loved	Horn, Shirley	4:37
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','20') Pra dizer adeus	Jobim, Tom e Lobo, Edú	4:42
12-13 Pra voce	Caymmi, Nana	3:47
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
COMPRESIÓN Y DESCOMPRESIÓN DE LAS MANOS
La percepción de la pulsación en el contacto es un elemento del feedback. Descripción :
Se realiza de a dos. Las dos personas establecen un primer contacto tomandose las manos y conectándose en las miradas. Cuando empieza la música, cierran los ojos e interactúan en diálogo por medio de un contacto pulsante de las manos, en una respuesta en feedback, sin separarse. A este impulso del contacto corresponde un movimiento pulsante de todo el cuerpo, que permite modular el grado de intimidad y la intensidad de este diálogo que, desde las manos, poco a poco involucra a todo el ser. Objetivo :
Percibir por medio del contacto los matices en el diálogo psicotónico con el otro, en las modulaciones del tono yendo desde la sensibilidad y la delicadeza a la intensidad del contacto intenso y profundo, hasta integrar la pulsación en un diálogo que incluya los matices de la vivencia. Música :
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / 	4:18
Console, HÑctor Gran sensibilidad al feedback, "pasar por la puerta del yin".
 
DAR Y RECIBIR CONTINENTE EN PARES (o ìAcunar en el regazo" o ìAcunar al otroî)
 
Por lo general, en nuestra cultura, las personas no son abrazadas ni mucho menos acunadas. Ya sea en la familia o con amigos, prácticamente no tienen oportunidades para ofrecer o recibir continente en un abrazo de corazón a corazón. Algunos viven ese intercambio con personas muy queridas y muy cercanas, pero demasiado raramente, y la gran mayoróa puede pasar aÓos sin vivir esta experiencia, sin recibir ni ofrecer un continente real.
Y sin embargo, recibir continente es un tipo de alimento afectivo esencial e indispensable para la autoregulacion orgánica. De acuerdo con la medicina psicosomática, muchas enfermedades (como asma, alergias, artritis, insomnio, ciertas enfermedades del corazón), se deben a la falta de continente afectivo. Y tanto los adultos como y los niños lo necesitan. Descripción :
Sentados, uno de los participantes toma al otro en su regazo de manera de poderlo acunar suavemente y contenerlo en sus brazos. La persona que está recibiendo el continente está en una posición casi perpendicular a la del compañero.  
La posición óptima para dar continente consiste en que las dos personas  se sienten uniendo un lado de la cadera (pelvis) mirando en dirección opuesta. La persona que da continente abraza al compañero que está recibiendo, mientras este último se abandona a la protección del otro y se dÑj´ sostener. Objetivo :
Aprender, reaprender a dar continente y a recibirlo. Fortalecer la vivencia de la propia capacidad de cuidar. Fortalecer la vivencia de entregarse y disfrutar sentirse protegido. Estimular la vivencia de abandonarse en confianza y la vivencia de reparentalizacion. La situación de la alternancia de reciprocidad estimula en cada uno la pulsacion entre la capacidad de dar, darse, recibir y ser recibido.
Observaciún :
El facilitador debe asegurarse de indicar precisamente la posición para que las personas consigan llegar a un buen ajuste corporal. Esto creará condiciones favorables para poder abandonarse y para la vivencia de ser contenido. Porque al igual que muchas personas reciben muy poco continente, muchos son los que revelan una gran torpeza al ofrecerlo, a pesar de sus buenas intenciones. Un poco como si los gestos arquetópicos de acunar a un niño, tomarlo en brazos, hubiesen sido olvidados. Música :
09-03 Bilitis
Afectiva y levemente romÑntica.	Zamfir, Gheorghe	4:30
11-14 Consolation nã3 en RÑ bÑmol Majeur 
(Lento placido) - Six consolations, S 172 Afectiva y trascendente. Muy profunda.	Liszt, Franz (18oa('11','18')86)	4:12
oa('11','04') Little Girl Blue	Simone, Nina	4:20
21-18 Metello	Morricone, Ennio	2:22
17-02 My Darling Child	O'Connor, SinÑad	3:05
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
17-05 Ponteio	Branco, Waltel	2:21
oa('11','01') Tamba-Tajú	de BelÑm, Fafá	3:02
REGRESIÓN AL ESTADO DE INFANCIA POR CARICIAS DE ROSTRO Y CABEZA
El vónculo primal es, según Rof Carballo, el proceso neurológico de integración del infante en relación al continente afectivo recibido de la madre. Una estructuración del vónculo primal deficiente causa secuelas en el desarrollo de la identidad.
La persona que experimenta la vivencia de regresión al estado de infancia reedita la situación perinatal, a nivel psicológico y neurobiológico, en un contexto de profunda afectividad. De este modo se genera un proceso de compensación afectiva que puede  equilibrar eventuales formas de carencia afectiva de origen infantil, propiciando un nuevo equilibrio afectivo. Este proceso de compensación afectiva denomónase ñreparentalizacióná.
En el ejercicio de Regresión al Estado de Infancia por Caricias del Rostro, la persona que acaricia asume simbólicamente el papel de padre cuando es hombre, o de madre cuando es mujer; la persona que es acariciada asume simbólicamente el papel de reciÑn nacido.
Descripción :
En pareja, uno se sienta en el piso, apoyando la espalda en la pared y con las piernas entreabiertas; el otro se tiende apoyando su cabeza sobre el regazo del primero. El que está sentado acaricia el rostro y la cabeza del compañero con delicadeza y el que es acariciado se abandona en un estado regresivo.
Se alternan dos tipos de caricia durante todo el tiempo de realización del ejercicio:
- Deslizar suavemente las yemas de los dedos desde la parte central del rostro hacia la parte perifÑrica.  
Este tipo de caricia induce una vivencia de disolución (disminución de la conciencia de la propia identidad). - Apoyar, sin presionar, las palmas de las manos sobre la mejilla y la frente.  Este tipo de caricia induce a una vivencia de protección (de sentirse protegido), que predispone al estado regresivo.
Terminado el ejercicio, se suspenden las caricias  y después de algunos segundos el profesor sugiere a las personas que han hecho la regresión, hacer una respiración profunda y, si lo desean, estirar los miembros como en el acto de despertar. Luego pueden abrazar al compañero. Enseguida se invierten los roles. Objetivo :
Inducir el estado de regresión y reparentalización.
Reparentalización: Muchas personas sufrieron el estrÑs de la primera infancia y/o el abandono materno o paterno y no consiguieron establecer plenamente el ñvónculo primalá. Observaciún :
Se trata solamente de caricias y no de masajes o de activación de puntos de energóa.  Es conveniente no acariciar los ojos ni la boca, para no estimular el estado de vigilancia, el cual impide la regresión.
Esta vivencia puede abrir el camino para manifestaciones emocionales intensas. Es importante invitar a las personas que están investidos de la función de "padres" a estar muy atentos durante todas las etapas del ejercicio, en la calidad del tacto y en la postura que debe ser claramente afectiva y de protección. Cuando el "niño" abre los ojos, sus ojos deben estar disponibles inmediatamente. Es a menudo durante este primer contacto, de esta primera "huella", que se vive reparentalisation: la posibilidad de conexión inmediata a la vida y el afecto en los ojos de alguien que nos ha acompaÓado, protegido, acariciado. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
17-01 La petite fille de la mer	Vangelis	5:54
oa('11','04') Little Girl Blue	Simone, Nina	4:20
La letra es complicada: describe la tristeza de una niña pequeña que se siente terriblemente sola. Debe evitarse su uso con póblico de habla inglesa.
17-02 My Darling Child	O'Connor, SinÑad	3:05
oa('11','06') The First Time Ever I Saw Your Face	Flack, Roberta	4:18
PROTECCIÓN AFECTIVA CON CARICIAS DE PECHO Y BRAZOS
Descripción :
En pareja se sientan en el piso, uno apoya su espalda en el pecho del otro. Quien que está sentado atrás acaricia el pecho y los brazos del compañero.
Las caricias son afectivas y alternan entre caricias que parten desde el centro del pecho, envuelven los hombros y descienden a lo largo de los brazos (ofreciendo una sensación de apertura hacia la periferia) y un toque moderado de contencion en el cual las manos se depositan con una presión suave, con simple presencia.
Objetivo :
Dar y recibir continente afectivo.
Observaciún :
Es importante tomarse el tiempo para ajustar las posiciones de manera que la cabeza de la persona que va a ser acariciada pueda apoyarse en un hombro de la que dará la caricia, y que Ñsta pueda, sin tensión, tener acceso a los hombros, brazos y pecho que va a acariciar.
Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
21-18 Metello	Morricone, Ennio	2:22
17-05 Ponteio	Branco, Waltel	2:21
oa('11','20') Pra dizer adeus	Jobim, Tom e Lobo, Edú	4:42
CARICIAS DE UN COMPAóERO EN GRUPO DE TRES
 
Descripción :
Los participantes forman grupos de tres personas. Este ejercicio se propone de preferencia en la parte regresiva de la clase, en grupos donde ya existen las condiciones de profundización vivencial, para que se pueda alcanzar un nivel más profundo de intensidad afectivo-sexual y de intimidad.
El ejercicio puede realizarse de pie o acostado según la proposición del facilitador, y en cada caso presentara caracterósticas vivenciales diferentes. Objetivo :
Autorizarse a entregarse y a ser acariciado en todo el cuerpo, con la posibilidad de alcanzar una sensación de unidad, de sensibilidad, de afectividad y sensualidad. Todo lo que en la caricia presenta un efecto integrante. Este ejercicio favorece la posibilidad de la experiencia de integración afectivo-sensual. Observaciún :
Cuando es realizado de pie, una de las personas está entre sus dos compañeros, con los pies paralelos, con estabilidad, con las rodillas levement flexionadas, con los ojos cerrados y la boca, el cuello y los hombros relajados, en posicion de receptividad. Los dos compañeros comienzan a acariciarla sobre todo el cuerpo de manera altamente sensible, con delicadeza y sobre todo con mucha ternura. Alternan calidades diferentes de contacto, consistente pero leve y sensible. Primero, un contacto seguro en forma de presión suave sobre todo el cuerpo (los movimientos son suaves, sin intención "anatómica"), para sensibilizar el cuerpo entero. DespuÑs, el contacto adquiere una calidad de ternura indiferenciada, a traves del cual las caricias generan una sensación de disolución y de unificación. Una ternura que invita a fundirse y a aceptar el don de "recibir". Los dos compañeros acarician libremente, cuidando de bien repartir las caricias sobre todo el cuerpo, sin olvidar por ejemplo las piernas y los pies, o bien cuidando de no concentrarse los dos sobre las mismas partes del cuerpo. Es importante que la persona que es acariciada pueda tener la sensación de ser protegida y no "fragmentada" si algunas partes de su cuerpo son "abandonadas". Estas caricias pueden conducir a sensaciones profundas de placer y de erotismo, integradas a la afectividad. Las vivencias de erotismo sensible y con gran integración afectivo-sensual pueden crear las condiciones de paz reencontrada con el propio cuerpo y producir una reconciliación corporal consigo mismo. La vivencia del propio cuerpo se vuelve una experiencia de placer y erotismo, pudiendo generar respuestas neurofisiológicas de curación. Podemos identificar esta experiencia como "el amor que cura", tanto en el campo afectivo como en el de la sensualidad, la sexualidad y el erotismo.
Debemos considerar que en la posición de pie el estado de regresión será menor que en la posición acostado, la cual induce un contexto de vivencia mas erótica tanto para los que la ofrecen como para quien la recibe.
Puede suceder que la persona que es acariciada entre en tal estado de abandono y entrega afectivotrascendente, que le sea dificil permanecer de pie. En este caso, los dos compañeros la ayudan a acostarse y continuan acariciándola acostada hasta el fin de la música. Esto es frecuente en los grupos mas avanzados donde el erotismo indiferenciado constituye para algunos una forma de trance, y para otros una entrega transcendente.
Cuando el ejercicio se propone acostado, la persona que recibe las caricias se acuesta en el piso entre sus dos compañeros, los cuales están sentados confortablemente. La caricia es como ya se describió. La persona que es acariciada puede cambiar de posición durante el ejercicio, el facilitador puede dar la indicación de darse vuelta. Realizado en el suelo, este ejercicio puede alcanzar niveles mas profundos de entrega y de intensidad; sera entonces necesario prever mas tiempo para los cambios y la activación. Música :
19-05 I Wanna Be Loved	Horn, Shirley	4:37
13-08 Isso e aquilo	Caymmi, Nana	2:00
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
13-19 Summertime	Merril, Helen	3:27
CARICIAS DE UN COMPAóERO EN GRUPO DE CINCO
Descripción :
Este ejercicio se hace siguiendo las mismas modalidades que en grupo de tres.
El abandono y la disolución facilitados por un grupo de cinco produce en ciertas personas una afectividad diferenciada con, a veces, pÑrdida de los limites corporales. Para otras, produce un acceso a un nivel de erotismo y de sensualidad indiferenciada, un verdadero "Eros indiferenciado". Música :
19-05 I Wanna Be Loved	Horn, Shirley	4:37
13-08 Isso e aquilo	Caymmi, Nana	2:00
12-10 Jura secreta	Simone	4:22
12-15 O Amor Ñ chama	Caymmi, Nana	4:34
oa('13','07') O que serú	Simone	4:49
13-12 Por causa de voÓê	Caymmi, Nana	3:22
13-19 Summertime	Merril, Helen	3:27
13-09 Voz e Suor	Caymmi, Nana	3:55
CARICIAS (situaciones diversas de caricias)		
 
Descripción :
En esta sección se encuentran todas las situaciones donde puede haber caricias sin que esto estÑ vinculado a un ejercicio especófico o con un objetivo particular. Por ejemplo, los encuentros después de un grupo compacto, en el que la música induce fácilmente el intercambio de caricias, sin que esto sea especificado. También se encuentran en este grupo las músicas que se puede adaptar cuidadosamente al contexto grupal, a la vivencia y al nivel de profundización, y a otros ejercicios de caricias del catálogo (como el Grupo compacto de caricias, el Túnel de caricias, Caricias en grupo de cinco, etc ). Música :
oa('13','06') Almost Blue
Afectiva y sensual (muy delicada)	Baker, Chet	3:14
17-08 Amora	Creuza, Maria	3:50
oa('13','21') Angel Eyes	Merril, Helen	5:04
17-16 Ave Maria (after Johann Sebastian Bach)	Gounod, Charles (1818-1893)	3:23
17-06 Blue Lotus
Muy sensible, afectiva -  Lluvia de caricias.	Berglund, Erik	5:12
12-11 Eu disse adeus
Sensual	Creuza, Maria	2:56
13-22 I'll Be Around	Merril, Helen	2:44
12-10 Jura secreta
Sensual con un toque de afectividad	Simone	4:22
12-18 Nature Boy
Sensualidad liviana	Peixoto, Araken	3:19
13-15 Nunca mais
Sensualidad profunda	Caymmi, Nana	3:01
12-15 O Amor Ñ chama
Sensualidad profunda	Caymmi, Nana	4:34
13-12 Por causa de voÓê
Sensualidad profunda	Caymmi, Nana	3:22
13-13 Por toda minha vida
Sensualidad profunda	Caymmi, Nana	3:19
13-18 Proposta	Simone	2:56
Sensualidad y afectividad profunda (evoca el compromiso)	
13-16 Rama de nuvens	Caymmi, Nana
Sensualidad profunda	3:48
13-19 Summertime	Merril, Helen
Minotauro: asumir la identidad sexual.	3:27
13-14 Valerú a pena	Caymmi, Nana
Sensualidad profunda	1:50
CONTACTO INDIFERENCIADO
 
El Grupo Compacto tiene como antecedentes antropologicos la orgia primitiva y la danza de conexión con los ancestros (indios norteamericanos del siglo XVI). En los ejercicios de grupo compacto, el individuo abandona su singularidad, delega su identidad en el grupo, para convertirse en uno con él. La identidad de cada nuo desaparece en favor de la identidad del todo.
El Grupo compacto de conexion anónima disuelve las identidades particulares y pone a todos en contacto con todos y con el Todo. Esta es una forma privilegiada de inducir el estado de trance y de Ñxtasis, es decir la vivencia de sentirse en vida palpitante en un universo completo e ilimitado. Parece por lo tanto ser un ejercicio fundamental para aprender a autoregular el contacto interpersonal. La evolución de contacto va desde el tocar indiferenciado hasta un contacto más diferenciado e intencional que encesita más progresividad y reciprocidad (retrouceso de la inhibición). En este contexto, cada miembro del grupo es absolutamente responsable de lo que le pasa y se lo que hace.
En el Grupo compacto, no puede haber vóctimas ni perpetradores, sino un contacto sincero, delicado, progresivo y recíproca. Cada miembro del grupo aprende a vivenciar el grado de libertad personal que él o ella se siente capaz, aquó y ahora. El proceso de liberación y auto-control son uno. La duración e intensidad de los grupos compactos debe ser decidida con anticipación por el director del grupo (facilitador), quien debe tener en cuenta los niveles de represión y la culpa, las posibles patologias emergentes, así como el nivel de integración del grupo.
Debe ser un aprendizaje gradual. Proponer un grupo compacto prolongado a principiantes seróa un error grave por parte del facilitador.
Las músicas asociadas con el Grupo compacto se debe elegir de acuerdo a la vivencia indiferenciada que se quiere inducir, la lónea de vivencia trabajada y el nivel de integración vivencial de las personas ( principalmente, la intimidad del contacto y la retroalimentación).
GRUPO COMPACTO DE MECIMIENTO
En el ejercicio de Grupo Compacto, el individuo abandona su identidad y la delega a la identidad del grupo. Cada uno de los miembros al abandonarse se torna anónimo, los ojos están cerrados y el contacto con otros es casual. Descripción :
Durante el Grupo Compacto de Mecimiento se produce el estado de trance leve o mediano, con regresión integrativa.  El grupo tiene el carácter simbólico de útero materno.
Este ejercicio es la situación de partida para la inducción de trances más profundos, como el trance de abandono y mecimiento, en el cual uno de los miembros del grupo es acunado (mecido) por los demás.
Una variedad de este ejercicio es la práctica del Coro de CaÓa Divina en Grupo Compacto. En este caso el trance puede resultar más profundo.
Para iniciar el ejercicio, se pide a uno de los participantes que sirva de pivote (eje). Para eso se coloca al centro y comienza a mecerse lentamente al compás de la música. Todos los participantes se van aproximando a él en estado de relajación hasta hacer contacto; se pide al grupo adaptarse dulcemente al movimiento del miembro-pivote. El movimiento es en cámara lenta, suave y armónico. Cuando el grupo ha adquirido cohesión y se mece unitariamente, el sujeto que hace de pivote se abandona también al movimiento global.
La tÑcnica del Grupo Compacto está sujeta a los siguientes preceptos:
1.	El contacto es anónimo. Las personas, con ojos cerrados, entran en contacto casual.
2.	El mecimiento se hace en estado de relajación, tratando de conservar el ritmo lento colectivo.
3.	Cada uno colabora con su movimiento a la unidad y armonía del mecimiento.
4.	A cada participante se le pide no restringir la libertad de movimiento de otros miembros del grupo, aprisionándolos con sus brazos o cargándolos con el peso de su propio cuerpo. El contacto más óntimo de manos, rostros o piernas, debe estar sujeto a una progresividad que cada uno pueda permitirlo o desplazarse hacia otro lugar.
5.	Aquellos que desean menos contacto se ubican en la periferia y regulan, por só mismos, el grado de aproximación.
6.	Quienes desean un mayor contacto se van abandonando hacia el centro.
7.	La disminución de la conciencia de só mismo se produce cuando todos los miembros del grupo unifican el mecimiento y se entregan a un contacto confiado. Música :
09-11 Be Here Now	Harrison, George	4:08
17-14 el-HADRA - The Mystik Dance I [Part]	Wiese, Klaus with Ted De Jong & Mathias 
Grassow	3:49
17-01 La petite fille de la mer	Vangelis	5:54
oa('11','04') Little Girl Blue	Simone, Nina	4:20
oa('11','08') Magie d'amour	Posit, Jean-Pierre	4:43
oa('11','18') Photographs	Mouskouri, Nana (Nêëí ìîïñóîòôñ)	3:18
oa('11','02') Pode entrar	de BelÑm, Fafá	4:19
13-12 Por causa de voÓê	Caymmi, Nana	3:22
13-16 Rama de nuvens	Caymmi, Nana	3:48
oa('02','03') Sete mil vezes	Veloso, Caetano	2:21
GRUPO COMPACTO DE CARICIAS		
El Grupo Compacto de Caricias tiene como antecedentes antropológicos la orgóa primitiva y las danzas para tomar contacto con los antepasados (Indios norteamericanos del siglo XVI). Descripción :
Es un ejercicio de caricias indiferenciadas que permite la vivencia de sentirse inmerso en la especie humana. Las personas, con los ojos cerrados, establecen entre ellas contactos indiferenciados y anónimos. Objetivo :
Se acepta la diversidad humana.
Se descubre la propia identidad sexual a través del contacto con diversas personas.
Se despierta la fuente del deseo. Se induce un estado regresivo. Observaciún :
En la consigna es importante indicar a los participantes que no permanezcan en un lugar fijo, estableciendo contactos con una sola persona, sino que circulen en el grupo para aumentar la diversidad de los contactos.
Despertando la fuente del deseo, los participantes mejoran la propia funcionalidad erótica. Al asumir la identidad sexual, cada persona puede conocerse mejor y orientar su comportamiento de seducción con mayor lucidez.
Elemento PoÓtico :
El Grupo Compacto de Caricias es un recuerdo lejano de la orgóa primitiva de celebración de la fertilidad. Música :
11-19 A noite do meu bem	Creuza, Maria	2:41
oa('13','21') Angel Eyes	Merril, Helen	5:04
12-19 As Time Goes By	Peixoto, Araken	2:57
13-03 Atrús da porta	Caymmi, Nana	3:44
oa('12','04') ComeÓaria tudo outra vez	Simone	3:06
12-14 Doce presenÓa	Caymmi, Nana	4:07
12-20 Flamingo	Peixoto, Araken	3:24
12-12 GraÓas a deus	Creuza, Maria	3:40
19-05 I Wanna Be Loved	Horn, Shirley	4:37
13-08 Isso e aquilo	Caymmi, Nana	2:00
12-10 Jura secreta	Simone	4:22
13-17 Medo de Amar Nò 2	Creuza, Maria	3:53
13-11 Neste mesmo lugar	Caymmi, Nana	2:37
12-15 O Amor Ñ chama	Caymmi, Nana	4:34
oa('13','07') O que serú	Simone	4:49
13-12 Por causa de voÓê	Caymmi, Nana	3:22
13-16 Rama de nuvens	Caymmi, Nana	3:48
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
10-02 The Man I Love	Fitzgerald, Ella	3:26
Minotauro: Grupo de eutonúa, Conexion a la especie.	
13-14 Valerú a pena	Caymmi, Nana	1:50
13-10 Velho Piano	Caymmi, Nana	3:41
13-09 Voz e Suor	Caymmi, Nana	3:55
 
12-21 Who Needs Forever	Peixoto, Araken	3:18
GRUPO COMPACTO DE TRANCE		
La pulsación de la identidad entre un estado de consciencia intensificada de só mismo y el estado de regresión, es uno de los instrumentos de transformación más importantes en Biodanza. La vivencia de la expansión de la consciencia es el efecto deseado después del retorno del trance. Además, se evitan en Biodanza los trances de caracter solipsista, solitario. Descripción :
Todo el grupo se aproxima progresivamente y a través del contacto y del movimiento lento y repetitivo se va entrando en un estado de intensificación de trance que induce al aumento de regresión y a la inducción del estado de fusión con la totalidad. Objetivo :
Intensificar el estado de trance y posibilitar la vivencia de disminución progresiva de la consciencia de si mismo y consecuente entrada en un estado de regresión hasta alcanzar el estado de fusión con el grupo y con la totalidad.
Observaciún :
Es importante informar que no se transfiera el peso del propio cuerpo para los compañeros. 
Progresivamente todo el grupo se deja bajar acostándose suavemente en el suelo. Puede ocurrir de que algunas personas se ñcaigan" en trance más rápidamente que otras. Elemento PoÓtico :
Este ejercicio permite revivir la unidad con el todo y conectarse con la ñnostalgia del paraóso perdidoá. Música :
17-14 el-HADRA - The Mystik Dance I [Part]	Wiese, Klaus with Ted De Jong & Mathias 
Grassow	3:49
18-06 Rainbow Voice	The Harmonic Choir	7:55
TóNEL DE CARICIAS		
La autoestima y el amor por la vida estan fuertemente ligados al erotismo. Vivirse a só mismo como espacio de placer, de erotismo, de ternura; y vivir la vida como una travesóa del erotismo y la ternura. Ser acariciado tiene efectos profundos y transformadores en la identidad humana. La caricia nos torna más vivos, confiantes y amorosos. Descripción :
El grupo forma un túnel de dos lineas separadas por una distancia que permite pasar a una persona. Cada participante a su vez entra en el "túnel" con los ojos cerrados y avanza lentamente dejándose acariciar por sus compañeros. Al llegar al final es recibido en un abrazo por alguien que le reintegra en el túnel para acariciar a los que siguen. Objetivo :
Reaprender a vincularse por el contacto y por la caricia, estar receptivo y disfrutar del placer en ser acariciado. Aumentar la autoestima y disolver corazas caracterológicas. Porgresar en el erotismo indiferenciado.
Observaciún :
Cada participante que pasa, camina lentamente sin interrumpir el flujo, para que todo el grupo pueda tener la oportunidad en vivenciar el pasaje. Proyecciún Existencial :
Caminar en un túnel de caricias induce a una vivencia del mundo maravilloso, a una experiencia del paraóso aquó y ahora y el sentido de sacralidad del cuerpo y de la belleza de la vida. Música :
12-14 Doce presenÓa
Sensual.	Caymmi, Nana	4:07
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
12-15 O Amor Ñ chama
Sensual.	Caymmi, Nana	4:34
12-13 Pra voce
Sensual.	Caymmi, Nana	3:47
10-20 V podveëer (At Twilight), Idyll for 	Fibich, Zdùnek (1850-1900)	2:27
Orchestra - Op.39 {Mistaked Known as 
Poíme op.41, No.6}
13-09 Voz e Suor	Caymmi, Nana	3:55
Sensual.
NIDO ECOLÓGICO (también llamado "Nido de la especie")
El contacto indiferenciado en la situación del nido activa el instinto gregario, el arquetipo del clan. Esta es una vivencia muy arcaica (la matriz original que ofrece calidez, protección, contenimiento y nutrición se encuentra en la "cueva primitiva") y también muy óntima y cercana (amigos, momentos de reposo de la infancia, la cercanóa del cuerpo de los compañeros de juego, etc.) Descripción :
Los participantes son invitados a acostarse cerca los unos de los otros, en contacto afectivo, con los ojos cerrados, para abandonarse juntos en el calor y la protección del grupo. Objetivo :
Estimular el instinto gregario, la conexión al grupo, al clan o a la especie, en un estado de entrega y reposo. Observaciún :
De acuerdo con una evolución gradual y dependiendo de la capacidad de intimidad y de abandono en el grupo, el nido se puede ofrecer con variantes:
1.	Las personas en la ronda, se dan vuelta todos hacia la derecha, y asi se acuestan con la cabeza hacia el centro, como en posicion de "cucharita".
2.	El nido se va creando con una persona que es invitada primero en acostarse, y los otros se situarán de manera a que todo el mundo estÑ en contacto (recibiendo u ofreciendo el contacto con su cuerpo: hombros, brazos, estómago, como apoyo). Aquellos que necesitan más distancia o desean menos proximidad tendrán cuidado en ponerse hacia la periferia.
3.	El nido se crea de forma espontánea cuando las personas, de pie (y ya en una vivencia de abandono) se dejan lentamente caer al suelo y se amontonan unos contra otros.
La música establece el tono de la vivencia del nido (afectividad, sexualidad, trascendencia). Música :
17-06 Blue Lotus	Berglund, Erik	5:12
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
17-01 La petite fille de la mer	Vangelis	5:54
DANZA DE TRANCE		
Descripción :
La persona cierra los ojos y se deja ser danzado por la música, en un estado de disponibilidad total, dejando de lado cualquier control de su movimiento, la forma o la apariencia de Ñste, y dejandose totalmente ser danzado por la música. En el caso de músicas rótmicas, se debe invitar a la gente a comenzar a moverse desde el interior: liberar el cuello, las rodillas, la mandóbula y evitar movimientos perifÑricos, permitiendo que el cuerpo reciba los impulsos que vienen de la mobilizacion cenestÑsica visceral. El hecho de agitar o sacudir la cabeza en un estado de tensión no induce un trance integrante; lo que induce el trance integrante es la disolución gradual del control a través del placer de ser danzado por la música. Definiciún :
Como en la Radicalización de la vivencia musical (Mediumnidad musical), para llegar al estado de trance que permitirá a la persona alcanzar el estado de "ser bailado", se necesita una casi-inmovilidad, un estado de tonicidad abierto a los impulsos propioceptivos espontáneos; un estado incondicional y receptivo, libre de cualquier proyecto. En tales condiciones, el ego desaparece y el individuo "permite" a la música insinuarse a través de todo su cuerpo e inducir un estado cenestÑsico.
Ser la danza es una experiencia de trascendencia: el biosistema humano entra en armonía con el biosistema cósmico. Esta es la fuente más poderosa de renovación y activación orgánica. Música :
18-10 Bismillah ar-Rahman	GÆvenØ, OruØ & TÆmata	10:00
17-14 el-HADRA - The Mystik Dance I [Part]	Wiese, Klaus with Ted De Jong & Mathias 
Grassow	3:49
19-10 Maybe God Is Tryin' To Tell You Somethin' OST The Color Purple (Vocal Tata Vega)
Minotauro: Transe rútmico y autoregulación.	4:39
07-13 Voyage dans l'au-delï	Baroty & Dieng	6:13
DANZA YIN Y DANZA YANG
La Danza Yin y la Danza Yang son complementarias y conviene proponer ambas, sucesivamente, en la misma clase. Es necesario realizar en primer lugar la Danza Yang, que estimula el sistema simpáticoadrenÑrgico y después se propone la Danza Yin, que estimula el sistema parasimpático-colinÑrgico. Esta es la secuencia más orgánica.
Los conceptos "yin" y "yang" pertenecen a la filosofóa Taoósta, según la cual "yin" y "yang" son las dos fuerzas de la Naturaleza que se complementan formando el Tao, la "Unidad Suprema".  Según esta concepción el principio "yin" es "lo femenino, pasivo, fróo, oscuro y receptivo". Y el principio "yang" es "lo masculino, activo, caliente, luminoso y creador".
En Biodanza utilicÑ los conceptos "yin" y "yang" solamente como metáfora para designar las dos grandes fuerzas creativas del Universo, ya que no comparto la concepción filosófica Taoósta en su totalidad.  Atribuyo al  "yin" las siguientes acepciones: lo femenino, la receptividad, la gestación; el aspecto "lunar", lo cóclico, lo orgánico, la sensibilidad y la inspiración. Al ñyangá atribuyo las siguientes acepciones: lo masculino, el penetrante, el fecundador; el aspecto "solar", la capacidad de lucha, de realización y de construcción.
Los dos arquetipos, femenino y masculino, se encuentran en todas las culturas con pequeÓas variaciones. (Corresponden además a las dos primeras cartas del Tarot: El Mago y la Papesa).
En el ñI Ching,- el libro de las mutacionesá - el "yin" corresponde al exagrama 2, El Principio Receptivo, y el "yang" corresponde al exagrama 1, El Principio Creativo.
La gran mayoróa de las personas en nuestra civilización tiene un comportamiento "yang", que deriva de la lucha y la competencia en el ambiente de trabajo. La observación demuestra que un estilo de vida excesivamente "yang" es estresante, y además el exceso de "yang" disminuye la fascinación personal y la capacidad de expresar el erotismo con delicadeza.
DANZA YANG
La Danza Yang se caracteriza por los atributos asociados a lo masculino. Si la Danza Yin estimula la inspiración creativa, la Danza Yang estimula la capacidad de realización. La inspiración, de origen "yin", consiste en un impulso primordial que puede animar una obra de arte, un proyecto, un sueÓo. La fuerza "yang" permite, a su vez, convertir un sueÓo en realidad, a partir del impulso primordial "yin", y de realizar una obra de arte que existe solo como proyecto. Descripción :
La Danza Yang es dinámica y se realiza a través del aumento del tono muscular y de la intencionalidad que se expresa en el movimiento. La Danza Yang no es solamente expresión de fuerza, velocidad y potencia, sino también expresión de un impulso interior instintivo y emotivo, pleno de vitalidad.
Esta danza es libre porque cada participante es invitado a expresar su energóa "yang" con estilo personal. La Danza Yang se realiza moviÑndose siempre hacia adelante y con los ojos abiertos. Objetivo :
Aumentar la capacidad de realización, el coraje, la seguridad y la confianza en só mismo.
Por lo tanto la Danza Yang es especialmente indicada para personas que tienen dificultad de enfrentar obstáculos y de expresar la su identidad. Música :
15-11 Crime Of The Century [Part, long]	Supertramp
Minotauro: Conexión con la propia energúia.	4:30
15-01 Einleitung (Introduction) - Also sprach 	Strauss, Richard (1864-1949) Zarathustra op.30	1:58
19-09 Epólogo (Final) - Floresta do Amazonas Villa-Lobos, Heitor (1887-1959) Danza Yang para mujeres - el Yang femenino (expansion).	2:36
15-13 Polovtsian dance Nã 17-d [Part] - Opera 	Borodin, Alexander (1833-1887) Prince Igor (2nd dance of the men), Orchestral version
Minotauro: Danza de la fuerza.	2:08
15-12 Presto - Concerto 'L'estate' in sol minore - 	Vivaldi, Antonio (1678-1741) 3 (Le quattro stagioni Op.8/2, RV 315)	3:01
Minotauro: Caminar en la vida.
DANZA YANG CON GRITO
La Danza yang con grito es una danza individual, pero que realiza todo el grupo en forma simultánea.  Los alumnos hacen gestos yang, fuertes, vigorosos, con los brazos, que implican proporcionalmente todo el cuerpo. Con la realización de los movimientos se emiten gritos también vigorosos, con la posibilidad de desplazamientos hacia delante en el espacio. Es importante que los gritos sean lo más natural posible, que salgan desde la profundidad y que no tengan un carácter teatral. Objetivo :
Profundizar la expresión de la propia fuerza es muy importante porque en muchas personas está reprimida y, por ende, la identidad está continuamente amenazada. Observaciún :
Proyecto Minotauro (Radicalización de la vivencia). Observaciún :
Nota: Este ejercicio es más apropiado para el Proyecto Minotauro. Música :
15-02 Japanese Drums	Kitaro (óúÓ)	3:17
Minotauro: Marcar el territorio.
20-11 Koro	?	3:13
19-12 Sundance	Kitaro (óúÓ)	6:21
DANZA YIN		
La Danza Yin se caracteriza por atributos asociados a lo femenino: receptividad, sensibilidad, capacidad de gestación, tensión centrópeta, intimidad. Descripción :
Esta danza se realiza con movimientos muy lentos y sensibles, sin desplazamiento, cerrando los ojos cuando aumenta la intensidad de la vivencia. La Danza Yin induce una vivencia de profunda receptividad al estimulo musical. Objetivo :
Desarrollar el aspecto "yin" del comportamiento, induciendo una desaceleración y una mayor sensibilidad frente a la vida. La Danza Yin induce un estado de armonía profunda y de reducción de la ansiedad. Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
15-16 Adagio molto - Concerto 'L'autunno' in Fa Maggiore - 2 (Le quattro stagioni op.8/3, RV 293)	Vivaldi, Antonio (1678-1741)	2:17
Proyecto Minotauro: fase de latencia de la semilla.
19-19 Cavalleria Rusticana, XVIII. Intermezzo sinfonico	Mascagni, Pietro (1863-1945)	3:28
oa('15','15') Largo - Concerto 'La primavera' in Mi 
Maggiore - 2 (Le quattro stagioni op.8/1, RV 269)	Vivaldi, Antonio (1678-1741)	2:47
15-18 Reigen Seliger Geister (From 'Orfeo ed Euridice')	Van Leer, Thijs	7:49
09-17 Reigen Seliger Geister [Part 2] (From 'Orfeo ed Euridice')	Van Leer, Thijs	3:54
DANZA DE INTEGRACIÓN YIN~YANG		
La Danza Yin y la Danza Yang realizadas por separado tienen solamente un valor didáctico y terapÑutico para las personas que presentan un desequilibrio entre estas dos formas de expresión.
Durante la Danza de Integración Yin-Yang es necesario que el pasaje de una a otra forma de expresión se realice sin interrupción. Son acentuadas sucesivamente la expresión de cada una de las dos fuerzas: "yin" y "yang". De este modo, la danza adquiere variaciones de intensidad que son propias a la creatividad individual.
Descripción :
Durante la Danza de Integración Yin-Yang, la fase "yang" puede ser realizada con los ojos abiertos, pudiendo cerrarse eventualmente durante la fase "yin". El paso de una polaridad a otra debe ser claro y sin embargo mantener una continuidad, sin ruptura de la danza.
Objetivo :
Se obtiene la estimulación de la capacidad creativa en hombres y mujeres. Es importante comprender que la fuerza "yang" y la fuerza "yin" se encuentran en todos los seres humanos, en distintas proporciones, independientemente del sexo y de la identidad sexual. Note CIMEB :
Objetivo: Integrar el hemisferio izquierdo y el hemisferio derecho del cerebro; la motricidad voluntaria y la motricidad sensible; la tonicidad "tónica" y la tonicidad "sensibile".
Música :
15-14 Allegro con brio [Part] (William Bowles) - Sinfonie 5 c-moll op.67 - 1	Beethoven, Ludwig van (1770-1827)	1:29
08-11 Years Of Solitude	Piazzolla, Astor / Mulligan, Gerry	4:11
DANZAS DE LOS CUATRO ANIMALES		
Las danzas de los 4 Animales en Biodanza representan arquetipos motores altamente diferenciados. Permiten un enriquecimiento del repertorio motor (Línea de la Vitalidad) y representan también un estómulo a la creatividad (Línea de la Creatividad). En esencia, estos animales poseen esquemas motores arquetópicos, que son estructuras de movimientos propias de determinados animales, y que además permiten una relación simbólica con los 4 elementos alquómicos.
El Tigre tiene un simbolismo vinculado con el fuego, la Garza con el aire, la Serpiente con la tierra y el Hipopótamo con el agua.
DANZA DE LA SERPIENTE
Está asociada al simbolismo de la tierra y el arquetipo motriz que representa es la armonía. La danza de la serpiente debe ser, sin duda, una danza de armonía con todo el cuerpo. Tiene también la facultad de seducir y fascinar, y la voracidad. Se puede asociar al acto de seducción amorosa y de conquista de la ñpresaá amorosa. Tiene algo que ver con el amor, porque quien ama quiere ñdevorará a su ser amado.
Otros simbolismos asociados a la serpiente son lo sagrado y el poder. En las coronas de los Faraones está la serpiente como sómbolo sagrado del poder. La serpiente forma parte también del caduceo, sómbolo de la medicina. Una imagen muy notoria es de la serpiente que se muerde la cola, indicando que el fin representa también el comienzo. Simboliza los ciclos de un proceso que se repiten. Descripción :
La danza de la serpiente es armoniosa. Comienza en el piso con movimientos ondulantes, levantándose de apoco, exponiendo la cabeza y el pecho con actitudes de seducción. Algunas formas expresivas de la serpiente son el silbido y el sacar la lengua para transmitir su deseo de devorar.
Note CIMEB :
Objetivo: Expresar la capacidad de seducción, de fascinación. Aumentar el propio magnetismo. Música :
08-14 Europa (Earth's Cry Heaven's Smile)	Barbieri, Gato	4:50
08-13 My Little Brown Book [Part]	Ellington, Duke / Coltrane, John	4:56
15-07 Negro gato	Monte, Marisa	4:46
08-15 Quintessence	Jones, Quincy & His Orchestra	4:26
DANZA DEL TIGRE		
La danza del tigre tiene algunas caracterósticas  propias del animal: armonía del felino, potencia de sus movimientos, agilidad. 
Estas cualidades no tienen que ser confundidas con la agresividad violenta hacia un compañero. En realidad, el tigre es agresivo cuando necesita capturar una presa para alimentarse. Durante esta danza, se debe tener tensión en los brazos y Ñsta viene de los hombros y de la parte dorsal. La energóa concentrada en la espalda se dirige hacia los brazos y manos, dando una sensación de tensión interior. Objetivo :
Este ejercicio tiene el objetivo de aumentar la agilidad y la armonía dinámica.
En el pasado se hablaba de ñsacar afuera el tigreá cada vez que era necesario responder a una agresión. He eliminado esta expresión porque la agresividad se imponóa en la danza de muchos alumnos por sobre otras caracterósticas del tigre, como el atractivo de su belleza, su fuerza y el sinergismo de sus movimientos. El simbolismo del tigre es el fuego.
Note CIMEB :
Descripcion: Se trata de desplazamientos lentos con un control ágil del poder y de la sinuosidad en un equilibrio dinámico. El movimiento esta habitado de tensión que traduce la intención (de captura, de caza). Esta tensión emana de los hombros y de la parte superior dorsal (del triangulo dorsal). La energia concentrada en la espalda se dirige hacia los brazos y las manos, danso una sensación de tensión interior. La mirada traduce la acuidad, la agudeza de una determinación tranquila. Los movimientos se caracterizan por su elegancia. Música :
15-03 Have A Cigar	Pink Floyd	5:08
08-20 Theme From Taxi Driver (Sax Tom Scott)	OST Taxi Driver	4:11
DANZA DEL HIPOPÓTAMO		
Lo he elegido como sómbolo del agua, para que el participante logre vincularse más con el placer de sumergirse en el agua y en el lodo. Además se considera un animal social y ecológico, en el sentido que los pájaros comen sobre su piel y es muy sociable con sus semejantes. Representa también la voracidad en alimentarse, dado que come alrededor de cien kilos de hierba al dóa. Esta dieta vegetal no diminuye para nada su agresividad; cuando está furioso por una amenaza es capaz de grandes destrucciones. Puede ser muy manso y, al mismo tiempo, muy violento.
Algunas personas piensan que el simbolismo del agua tendróa que ser un pez, pero para los objetivos de Biodanza el Hipopótamo es el más idóneo. El pez no representa el placer de estar sumergido en el agua y en el lodo de manera tan evidente como el hipopótamo, permaneciendo casi en Ñxtasis por horas y horas. Además los peces son de sangre fróa, se desplazan en cardúmenes y también solos, mientras que el hipopótamo vive siempre en manada.
Descripción :
La dinámica de la danza está concentrada en la panza. El participante comienza acariciando su propia panza, después continúa acariciando, con movimientos lentos y fraternos, la panza de los compañeros. Note CIMEB :
Objetivo: Despertar el instinto de saciedad. La vivencia esta relacionada al placer viceral, a la alimentación, y a abandonar la culpa relativa al placer de los sentidos (sensualidad). Música :
19-04 Ray's Blues	Charles, Ray	2:56
15-05 Self Portrait (Of The Bean)	Ellington, Duke / Hawkins, Coleman	3:52
DANZA DE LA GARZA		
Representa la gracia del movimiento, la levedad, la potencia de la ascensión y la armonía. Los movimientos de la danza parten desde el centro del pecho. El vuelo posee la energóa del pecho, es un acto de abertura hacia el espacio. La Garza tiene la gracia del vuelo y el dominio de los espacios. La vivencia es de levedad, de falta de gravedad, de lenta ascensión y elevación. Representa también la visión desde la altura.
En psicologóa se habla mucho sobre la ñvisión con profundidad o abisalá, sin considerar la visión de la altura. Debemos acostumbrarnos a mirar las cosas desde la altura, donde las dificultades se dejan ver menos amenazadoras y es posible ver la situación en su totalidad.
El simbolismo de la garza es el aire. Objetivo :
Incorporar la vivencia de levedad y libertad, para compensar una realidad a menudo estrecha, una percepcion a menudo limitada. El pajaro es simbolo de la libertad de ir y venir en un espacio sin limites. Proyecciún Existencial :
La danza del ave nos conecta al arquetipo de la levedad: esa que nace de la visión de altura, del vuelo, de la percepción del horizonte abierto e infinito.
Note CIMEB :
Descripcion: Los pies separados a la distancia de la cadera, un pie un poco mas atras que el otro; las rodillas flexibles para permitir un movimiento pulsante de elevación y descenso (el impulso de ascención nace de la posibilidad de descender y echarse a volar). Los brazos evocan un movimineto suave y ligero de elevación, de alas. Es fundamental que el movimeinto nazca del plexo y no de los hombros. Los ojos estan cerrados.
Música :
19-18 Abraham's Theme	Vangelis	3:18
09-03 Bilitis	Zamfir, Gheorghe	4:30
09-04 Elsha	Zamfir, Gheorghe	4:19
15-04 Oikan Ayns Bethlehem (Birth In Bethlehem) Christian, Emma	5:14
DANZAS DE SHIVA, DE VISHNU Y DE BRAHMA
 
Estas danzas se desarrollan dentro del contexto de la trilogóa de la divinidad hindú denominada ñTrimurtiá, formada por Shiva, Vishnu y Brahma.
Shiva es el dios de la danza y de los cambios.  Es un arquetipo, por lo tanto vive y muere.  Es un arquetipo de lo creativo, de la renovación permanente.
Vishnu es el arquetipo de la conservación, de mantener en vida las cosas positivas y buenas, conservar lo maravilloso que tiene la vida propia. 
Brahma es el dios de la creación y posee una gestualidad caracteróstica que alude a la creación del mundo y de los seres.
Cada persona tiene dentro de só estos tres componentes arquetópicos en diversas proporciones.  Algunas personas son cambiantes, inestables,, cambian de propósitos, de amor, de trabajo, están deseando cambios permanentemente.  Otras personas son al revÑs, tratan que su vida sea estable permanentemente, que los cambios sean leves y mantener una misma lónea.
Esta trilogóa tiene tres danzas de formas diferentes:
LA DANZA DE SHIVA se hace manteniendo el cuerpo en equilibrio sobre una pierna, al mismo tiempo se mueven los brazos en forma armoniosa, de modo que todo el cuerpo está en movimiento y en un equilibrio inestable.
LA DANZA DE VISHNU tiene un predominio de movimientos estables, simÑtricos y de protección del propio mundo.  La esencia es la vivencia de conservar el mundo personal.
LA DANZA DE BRAHMA es vigorosa y expansiva, llena de fuerza y de estructura. 
Estas danzas pueden realizarse en forma consecutiva una después de la otra o en forma separada, pero siempre debe hacerse referencia a la trilogóa hindú.
DANZA DE LAS TRANSFORMACIONES Y EL MITO DE SHIVA
Shiva pertenece a la trilogóa de dioses hindúes integrada por Brahma, el Creador, y Vishnu, el Conservador de la Vida. Shiva simboliza la eterna transformación del universo, que consiste en la cóclica destrucción y creación.  Es el dios de la danza y de las transformaciones.
El proceso cósmico es muerte y resurrección, eterna renovación de la vida. Dentro de nosotros mismos, la acción de Shiva seróa la de morir para nuestro viejo cuerpo y renacer a un nuevo ciclo de vida. La danza de Shiva tiene por tema la actividad cósmica, la eterna transformación.
Ananda Coomaraswamy describe las cinco actividades divinas de Shiva:
1.	La creación continua del Universo, originada en el ritmo.
2.	Conservación, basada en el equilibrio y mesura de los movimientos.
3.	Destrucción de las formas ya superadas mediante el fuego interior.
4.	La eterna renovación.
5.	La encarnación de la vida.
Llama la atención que el Dios de la Danza, Shiva Nataraja, sea, al mismo tiempo, el Dios de los Cambios, lo que implicaróa que los cambios son inducidos por la danza.
Shiva se representa con el pie derecho aplastando a un demonio, lo que simboliza la victoria sobre las fuerzas demonóacas de la destrucción, y el izquierdo en el aire, representado el equilibrio y el impulso de ascensión.  La imagen de Shiva posee cuatro brazos, con los cuales realiza la creación y destrucción cóclica del mundo.  Está rodeada por un córculo de fuego.  La danza de Shiva es, por lo tanto, un movimiento que destruye para generar el proceso de creación.
Inspirado en las Danzas de Shiva y en su simbologóa de transformación, Rolando Toro Araneda creó la ñDanza de las Transformacionesá, que posee tres atributos esenciales del movimiento: Unidad, Equilibrio y Armonóa.
Unidad: Significa que todo el cuerpo se mueve en perfecta coordinación, integrando sus partes y conectándose a todo lo viviente.  Desde el punto de vista psicomotor, requiere una integración de las vóas piramidales y extrapiramidales.
Equilibrio: Plantea la exigencia del movimiento en relación con la fuerza de gravedad de la tierra, reajustando en todo momento las estructuras posturales.  Todas las variaciones se realizan en equilibrio inestable sobre una pierna, lo que requiere la integración de los receptores del equilibrio del oódo interno con las estructuras córtico-cerebelosas.
Armonóa: Los movimientos deben hacerse en perfecta fusión con la música, dando al cuerpo la pulsación de la vida.
En la etapa de aprendizaje se integran las estructuras sensorio-motoras, auditivas, visuales y vestibulares.  En etapas más avanzadas se produce la ampliación del estado de consciencia, por el intenso proceso de integración que induce.
La Danza de las Transformaciones propuesta en Biodanza incluye, una vez establecido el patrón arquetópico, desplazamiento a través del espacio con gran riqueza de variaciones, creatividad y armonía.
El simbolismo de la Danza de las Transformaciones sugiere la destrucción del viejo cuerpo rógido y reprimido, para nacer en un cuerpo nuevo, tierno y libre.  No puede haber mudanzas si no hay destrucción del pasado, o transformación de él.
El valor de los tres atributos del movimiento (Unidad, Equilibrio y Armonóa), no es sólo de integración motora.  Hay un proceso de trascendencia en esta danza que integra niveles altamente diferenciados, lo que tiene una resonancia metafósico-existencial:
Unidad: Todo el cuerpo está en acción.  No hay disociación posible.  La bioenergóa fluye, reforzando la estabilidad dinámica del organismo.
Equilibrio: No es sólo una función laberóntico-cerebeloso, sino también psóquica: equilibrio ante distintas opciones o tentaciones de cambio.  Siempre hay posibilidades de cambiar de lugar, de trabajo, de amor, etc.   Dentro de esas polaridades magnÑticas (cambio y conservación), cada uno debe estar conectado con su centro.  Esa cualidad de equilibrio existencial surge de la resonancia con un centro de equilibrio interior.
Armonóa: Es la perfecta relación en ñfeed-backá; conexión y transmisión de un estómulo-respuesta a todo el mundo exterior, de modo que el mundo interior palpite en resonancia, hasta que la barrera entre lo exterior e interior desaparezca.
Si se cumplen estos tres atributos, se inicia una nueva etapa de renovación existencial.  Realizada con gran entrenamiento, activa no sólo las áreas y vóas corticales, motoras y sensoriales, sino también los centros lómbicos relacionados con la conciencia cósmica. Note CIMEB :
Esta danza puede ser realizada en pares, tomandose las manos, cara a cara. También puede ser realizada en ronda, en cuyo caso adquiere una cualidad mas lúdica.
Objetivo: La realizacion de esta danza pasa por fases diferentes. Durante el aprendizaje s eintegran las estructuras sensorio-motoras, auditivas, visuales y vestibulares (oido interno). En las fases mas avanzadas puede producirse una expansión del estado de conciencia, justamente como consecuencia del intenso proceso de integración inducido. Música :
16-15 Raga Adana	Shankar, Ravi & Previn, AndrÑ
El comienzo de la Música permite experimentar con el equilibrio en un movimiento lento antes de ser proyectado en la intensidad de los juegos de equilibrio y desequilibrio propios a la danza de Shiva.	3:33
20-18 Tan Xingquing Park	Shanti, Oliver & Friends	4:59
16-16 The Mahabharata	OST The Mahabharata	3:38
16-14 Vandana	Shankar, Ravi	2:32
DANZA DE LA CONSERVACIÓN Y EL MITO DE VISHNU
Vishnu es el dios de la conservación de los ciclos vitales.  Representa la fuerte inercia biológica que reitera y conserva la vida y el universo.  Es la belleza de lo permanente, lo que genera seguridad y confianza.  Todos los dóas al amanecer aparece el mismo sol para brindar la vida; todas las noches la luna en la oscuridad; la misma secuencia de las estaciones; la notable estabilidad de las estrellas en la bóveda celeste.  Los seres queridos permaneciendo en nosotros; la felicidad de ver siempre un mismo rostro.  Las variaciones que se dan con armonía dentro de los mismos patrones.
Vishnu establece los ejes dentro de un sistema y da el equilibrio a nuestro cuerpo sobre ambas piernas.
Basados en el simbolismo de Vishnu, Rolando Toro Araneda y Cecilia Luzzi, crearon la ñDanza de la Conservación de la Vidaá.
Asó como para dar un salto evolutivo (transtasis), hay que cambiar las formas de equilibrio (Shiva), la conservación del nuevo equilibrio conquistado la ultra estabilidad- requiere de la homeostasis de Vishnu.  Asó como las funciones ergotrópicas necesitan de la fuerza de Shiva, las funciones trofotrópicas requieren la fuerza de Vishnu.  En algunas personas predomina lo que podróamos denominar el ñespóritu de Shivaá y están en permanente cambio; mientras que en otras predomina el ñespóritu de Vishnuá, creando un córculo de protección de todo aquello que tienen y aman.
La Danza de la Conservación está cuidadosamente estructurada para inducir ese estado de serena armonía.
Etapas de la Danza: Objetivo :
La Danza de la Conservación induce la profunda necesidad de movernos dentro de patrones de estabilidad, con referencia a un centro afectivo adherente, pleno de continente.  El cuidado del calor óntimo de la vida y del hogar, guardar el fuego dentro de nosotros, permanecer en el Ñxtasis de lo cotidiano, conectados a la tierra y rechazando los cambios, dar a la vida la solemnidad indispensable para hacer de ella un hogar de crecimiento y maduración. Etapas de la Danza : 1 Bôsqueda del centro
Con los pies apoyados en el suelo, se oscila con movimientos leves en sentido lateral y antero-posterior, hasta encontrar el centro.  Se obtiene así un sentimiento de estabilidad.
2	Variaciones simÑtricas
Los brazos se mueven con movimientos simÑtricos en torno al eje central del cuerpo.
3	Variaciones asimÑtricas
Los brazos se mueven con movimientos asimÑtricos en torno al eje central del cuerpo, sin desplazamiento.
4 Posicián de Vishnu
El cuerpo de piÑ, apoyado sobre la cadera y pierna izquierda (la pierna derecha está semi-flexionada).  La mano izquierda tocando el borde externo del hueso coxal izquierdo. La mano derecha levantada a la altura del pecho, con la palma hacia el frente, en delicado gesto de detener elementos externos.
5 Rechazo a los cambios
La mano derecha avanza en suave gesto de rechazo al cambio.  Es un movimiento que se realiza con decisión y satisfacción.
6 Danza simÑtrica, con movimientos amplios
El movimiento se inicia ampliando la base de sustentación, separando un poco la pierna derecha. Puede haber desplazamientos minimos causados por los cambios de apoyo. Los brazos realizan movimientos amplios y simÑtricos. La persona ejerce la maestria de sus movimientos y de su equilibrio.
7 Danza asimÑtrica con movimientos amplios
Se pone a prueba la estabilidad con cambios mayores, pero conservando siempre el eje interior. 
Movimientos amplios y asimÑtricos, cambio de base de apoyo, equilibrio en el cambio siempre en referencia al eje interior, al centro. 8 Cuidando el fuego
Se forma con las manos una esfera invisible mantenida por el magnetismo natural del cuerpo, se traslada de izquierda a derecha. 9 Guardando el fuego
Se lleva la esfera hacia el pecho, en un gesto de intimidad.  Los valores afectivos se conservan dentro del pecho.
10 Córculo de proteccián
Los brazos caen suavemente desde el centro y, levantándose por los lados, generan un córculo que se cierra sobre la cabeza.  Asó, el mundo propio está protegido y a salvo.
11 Posicián de Vishnu
Las manos descienden de nuevo, las palmas se juntan, y se vuelve a la posicion de Vishnu (ver N∞4). El gesto de "rechazar los cambios" es mas sereno y confiante. Música :
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
16-17 Rosa das Rosas	Les Musiciens de Provence	2:57
Consonancia medieval.
17-13 Suo Gan (Vocal Ambrosian Junior Choir)	OST Empire Of The Sun	2:18
DANZA DE BRAHMA		
Dios de la Creación, Brahma es el primer creado y el creador de todas las cosas.  Frecuentemente es representado con cuatro brazos y cuatro cabezas, que simbolizan la omnipresencia y omnisciencia.
La Historia:
Brahma recibe el don de la creación de parte del Innombrable y lo guarda en su corazón.  Luego Brahma duerme y sueÓa, y su sueÓo es el mundo.  Su sueÓo es tan bello que, cuando despierta, decide crear el mundo que soÓó.  Asó, crea todas las cosas hacia las cuatro direcciones cardinales, ejerciendo el don recibido.  Finalmente, satisfecho con su trabajo, contempla su obra y la ofrece a Krishna (o Vishnu, dios de la conservación del mundo).  Confiando que su creación está a salvo y  feliz por haberla ofrecido, vuelve a dormirse.
Descripción :
La persona está de piÑ, en posición de Identidad.  Cuando comienza la música, ambas manos se extienden hacia delante en un gesto de recibir el don de la creación y luego se llevan junto al pecho, en un acto de guardar el don junto al corazón.  Los ojos se cierran y la cabeza se abandona hacia delante, en actitud de reposo.
Poco a poco los ojos se abren, la cabeza se levanta y se gira lentamente hacia un lado y hacia otro, abarcando con su mirada todo el espacio circundante.
Posteriormente la mano y el brazo derecho se abren hacia delante y hacia su mismo lado, con un movimiento circular y amplio, en un gesto de ejercer el don de la creación, mientras la mirada acompaÓa el gesto.  Luego la mano vuelve hacia el pecho.
Se continúa con la apertura de la mano y el brazo izquierdo hacia su mismo lado.  La mirada siempre acompaÓa el movimiento.  La mano izquierda vuelve hacia el pecho.
Sucesivamente el gesto se amplóa hasta alcanzar el espacio posterior: primero por la derecha, luego por la izquierda.  La mirada siempre abarca un espacio más amplio, infinito.
Se retorna a la posición inicial. La pierna derecha avanza con la rodilla levemente flexionada; el brazo y la mano derecha, palma hacia arriba, se alzan en un gesto de oferta.  La mano izquierda acompaÓa levemente más abajo.  La mirada se dirige hacia arriba, pues Brahma ofrece su creación a Vishnu.  Observar que, mientras todo el cuerpo tiende hacia delante y arriba, la rodilla derecha flexionada se dispone a una actitud de respeto y humildad.
Retorno lento a la posición inicial;  los pies juntos, las manos sobre el pecho, la cabeza reposando levemente hacia delante y los ojos cerrados. Objetivo :
-	Valorizar la propia capacidad creativa.
-	Tener la vivencia de generosidad; crear es ofrecer los propios frutos al universo y  a la vida. - Tener la conciencia amplificada de só mismo como creador, como centro de la creación. Note CIMEB :
Definicion: Invocación de la fuerza creadora en su aspecto generoso y organizado (Cosmos), en comparación con el aspecto destructor de Shiva (Caos). Etapas de la Danza :
1 Posicián de identidad
Recepción del don de la creación. 2 Posicián de intimidad Brahma se reposa y sueÓa.
3 Despertar y descubrir con la mirada el espacio que nos rodea Brahma despierta y ve que el mundo soÓado no existe.
4 Gestos de oferta hacia la derecha y la izquierda
Brahma decide crear todas las cosas soÓadas. (El gesto evoca el de sembrar generosamente a partir de lo que se tiene en el corazon).
5	Gestos de oferta mús amplios Que alcanzan el espacio posterior.
6	Retorno a la posicián de identidad y contemplacián Brahma satisfecho contempla su creación.
7	Gesto de oferta hacia la derecha y arriba con ambas manos Brahma ofrece su creación a Vishnu con generosidad y confianza.
8 Posicián de intimidad
Una vez terminada su obra, Brahma se reposa. Música :
16-18 Heaven & Hell, 3rd Movement - Theme From The TV Series "Cosmos"	Vangelis	4:09
EJERCICIOS SIN Música		
Bajo este capótulo se agrupan los ejercicios que se llevan a cabo sin la inducción vivencial de una música exterior. Se realizan ya sea mediante la emisión de la voz, el canto, el habla o en silencio (ya sea en la sala o en la naturaleza).
COROS RóTMICOS
Los ñCoros rótmicosá se realizan utilizando dos mantras diferentes: ñSamba-Cananda-Camina-Bum-Baá Y ñAse-Sita-Humá.  Este ejercicio es de la Línea de la Trascendencia. Descripción :
Los participantes en córculo, tomados de las manos, cierran los ojos y pronuncian las sólabas de uno de los mantras, acompaÓándose con el ritmo marcado por los pies en el piso.  Mientras los participantes repiten rótmicamente el mantra, el profesor se asegura que ninguno de los participantes se disperse en iniciativas personales, sino que todos canten al mismo tiempo estas palabras.
El ritmo se hace progresivo y tiene que adquirir una gran unidad sonora, una polifonóa sonora, conservando hasta el final la misma matriz rótmica.   
Sucesivamente, en una segunda etapa, los participantes pueden soltarse de las manos de la ronda y proseguir en forma individual, todos juntos, la danza de este ritmo producido por el grupo. El ritmo se apodera de la percepción de los participantes y, eventualmente, se pueden producir estados de trance rótmico liviano.
Se realiza sin música.
CORO DE CAóA DIVINA
Descripción :
El grupo, en ronda, ensaya emitir la voz desde el vientre y no desde la garganta.  Luego los participantes se invitan a emitir, suavemente, el sonido de la letra ñAá, junto al aire de la expiración.  Se crea así una monofonóa que, lentamente, deviene a polifonóa debido a las variaciones de tonalidad del sonido que cada uno emite.  De este modo se genera un coro polifónico.
Los participantes se mantienen con los ojos cerrados, en estado de relajamiento corporal.  Hay que solicitar al grupo que se mantenga la armonía del coro, evitando la eventual tendencia a destacarse elevando excesivamente la voz. Objetivo :
Inducción de estado de trance y de regresión a lo indiferenciado dentro de un contexto móstico.  Lo indiferenciado se refiere a la disminución de la percepción del propio lómite corporal.  El contexto móstico alude al sentimiento de fusión con el universo. Observaciún :
Eventualmente puede suceder que alguno de los participantes se tienda en el suelo debido a la intensificación del estado de trance. El profesor, por ende, tiene que estar atento para poder ayudar a quien eventualmente lo desee. En este caso se le retira delicadamente de la ronda y se designa a un compañero para que le dÑ continente.
El coro de caÓa divina es un ejercicio de lónea de la Transcendencia que puede ser utilizado en distintas modalidades. En grupo indiferenciado, como descrito aquó, o en espiral (ver ejercicio con mismo nombre) o con emergente (ver ejercicio de mismo nombre). Las tres variaciones se hacen sin música. Elemento PoÓtico :
Este ejercicio es inspirado en ceremonias tibetanas.  La metáfora ñcaÓa divinaá alude a las caÓas de bambú, que ñcantaná por efecto del viento.  No son las caÓas las que cantan, sino ñAlgoá que canta en ellas. Con esto se quiere evidenciar la falta de intencionalidad en la emisión de las voces, en la cual las personas emiten un sonido sintiendo que no son ellos los que cantan, sino es algo que canta dentro de ellos, así como el viento en las caÓas. Para los tibetanos ñAlgoá es la divinidad. En Biodanza es sólo una metáfora de la armonía cósmica. Note CIMEB :
Este ejercicio alcanza aún mas su objetivo cuando las personas han adquirido la capacidad de fundirse con el grupo, cuando la necesidad de diferenciarse desaparece.
CORO DE CAóA DIVINA EN ESPIRAL
Descripción :
Otra forma consiste en cantar la letra áaá a partir de una ronda en la que dos participantes se sueltan de las manos, y una de ellas comienza entonces a girar muy lentamente sobre ella misma, sosteniendo la mano de un compañero, de un solo lado, lo que tiene por efecto inducir un enrollamiento de todo el grupo en espiral. Un grupo compacto se forma y las personas cesan entonces de desplazarse para permanecer ñenrolladosá. La constitución de una espiral tiende a acentuar el efecto de trance inducido por este ejercicio. Convendrá pues hacer de manera que la persona que estará en el corazón de la espiral estÑ totalmente apta para abandonarse.
CORO DE CAóA DIVINA CON EMERGENTE
Descripción :
En una primera forma, los participantes en ronda emiten el sonido de la letra ñaá, buscando armonizar el volumen sin que nadie domine con su propia voz sobre la de los demás. El sonido debe ser profundo, visceral y no venir de la garganta. Cuando las personas se han armonizado, una de ellas puede entrar en el córculo, con los ojos cerrados y dejar emerger su canto mientras que las otras mantienen la base constante. Cuando ella ha terminado, permanece algunos instantes en silencio y vuelve a la ronda. Será entonces remplazada por otra persona en el centro. Esta realización demanda una buena preparación afectiva del grupo para que ninguno de  los participantes monopolice el centro.
CANTO DEL PROPIO NOMBRE
Descripción :
El participante va al centro de la ronda y, en profunda conexión consigo mismo, comienza a cantar su nombre (lo hace varias veces), con gran emoción y tratando de escuchar la resonancia interior de la palabra que representa su nombre/identidad. Objetivo :
Este es un ejercicio de refuerzo de la propia identidad que puede conducir al intasis (estado de conciencia intensificada de só mismo y de estar vivo). Observaciún :
Nota: este es un ejercicio especófico del Proyecto Minotauro. Cuando es realizado fuera de ese contexto, el facilitador deberá reservar este ejercicio para circunstancias muy especiales (por ejemplo un aniversario, un cumpleaÓos) y crear una atmósfera ritual, para que la vivencia de cantar el propio nombre no se transforme en algo superficial o trivial.
Proyecciún Existencial :
Cantar el propio nombre es una vivencia de profunda conexión con uno misno: dar al nombre con el que otros nos llaman el eco del llamado que nos ofrecemos a nosotros mismos, y reconocerse en este llamado. Elemento PoÓtico :
El sonido de cada nombre es único cuando vibra en la voz del que lo lleva. Observaciún :
Se realiza sin música.
CANTO DEL NOMBRE DE UN COMPAóERO
Descripción :
El grupo se toma de las manos en una ronda bien cerrada, uniendo sus hombros con los del compañero del lado. Un voluntario sale al centro y elige un compañero para cantar su nombre, colocándose frente a él. En una conexión profunda consigo mismo, con los ojos cerrados, el participante voluntario emite una melodóa ajustada al nombre del compañero; cuando la melodóa lo exige, se alargarán las vocales para que sea una perfecta integración entre esta última y el nombre de compañero. Una vez concluódo el canto los dos compañeros se abrazan y se reintegran a la ronda, de manera que otro voluntario pueda elegir ir al centro para ofrecer el canto del nombre a otro compañero.
Este ejercicio pertenece a la Línea de la Afectividad. Objetivo :
Refuerzo de la identidad de la persona que canta a través de la expresión afectiva hacia un compañero. Además se refuerza la identidad de la persona que lo recibe a través de la vivencia de recibir el regalo afectivo del canto de su nombre. Observaciún :
Se realiza sin música.
 
Note CIMEB 
Este ejercicio es una verdadera ceremonia de confirmación afectiva. Puede ser propuesto dentro de una secuencia que tiene como objetivo celebrar a una persona en una ocasión especial (desafio, Minotauro, momento especial de la vida del grupo, etc).
Este ejercicio puede también hacerse en ronda: una persona va al centro y canta (llama) el nombre de un compañero. El que es asi llamado viene al centro y se acerca al primero, desde donde llama el nombre de otro compañero, ayudado también por el primero. Asi, con iniciativa del ultimo en llegar y ayudado por todos los que estan en el centro, uno a uno el grupo entero es llamado al centro por su nombre. El facilitador permanece fuera para sostener con su presencia a los que seran llamados últimos.
Y también puede hacerse en ronda, donde un voluntario es invitado a ir al centro y cantar el nombre de un compañero. Todo el grupo se une cantando en coro la melodóa. Se hace sin música.
DIñLOGOS DE VOCES
Este Ejercicio pertenece a la Línea de la Afectividad. Se realiza en pareja, preferentemente con ojos cerrados. Revela la capacidad de resonancia con el otro al prescindir de la palabra. Se trata de un diálogo sonoro, un diálogo de voces y no de palabras.
Se caracteriza por la búsqueda de una perfecta conexión sensible, de una resonancia del uno con el otro.  El ejercicio induce una comunicación afectiva profunda.  As dos personas transmiten recíprocamente estados de ánimo sutiles y emociones a través de la voz. Descripción :
Uno frente al otro, separados por una distancia mediana, uno a la vez hacen una breve emisión vocal que puede constituir una pequeÓósima frase melódica. A tal emisión de voz, el otro tiene que responder con total coherencia, no desde el ego, sino, al contrario, escuchando lo que el otro está diciendo con su voz. Se tiene que originar una respuesta armónica y coherente que se origina desde adentro, que puede ser constituida también por una breve frase melódica.
Simultáneamente, cada uno se mueve en dirección de la voz del otro con pasos lentos. Cuando los dos participantes están muy cerca, el ejercicio se concluye y pueden darse un abrazo.
Se realiza sin música.
POESóA-CANCIÓN
Antes se propone la composición de una poesóa a través del ejercicio de la Línea de la Creatividad llamado: ñLa poesóa eres túá.
Una vez que la poesóa está escrita, el alumno trata de poner melodóa a las palabras, tomando solamente algunos versos que se reiteran y se modulan en relación con la extensión de la melodóa (por ejemplo: se alargan algunas vocales para ajustar las palabras a la melodóa).
Se elige un tema y se hacen algunas variaciones sobre el mismo.  Dichas variaciones se tienen que referir al tema y a la melodóa inicial.  Por ende, hay que evitar variaciones que se escapan del tema.  Se realiza sin música.
Nota: Este ejercicio es más apropiado para la extensión de Biodanza ñLaboratorio de Creatividadá. Observaciún :
Este ejercicio es sobre todo parte de profundizaciones vivenciales como el "Laboratorio de creatividad", "Proyecto Minotauro" y "Arbol de los deseos".
POESóA-CANCIÓN-DANZA
En este ejercicio se integran tres formas de expresión creativas: la poesóa, el canto y la danza.  El participante primero tiene que escribir una poesóa usando el ejercicio de la Línea de la Creatividad llamado ñEl poema eres túá.
DespuÑs, crea la melodóa sobre la base de la poesóa que creó (no es necesario usar toda la poesóa, sino una frase llena de belleza y significado).
En seguida, en una tercera fase,  el participante danza mientras canta la poesóa que escribió. Es necesario intentarlo varias veces hasta llegar a la perfecta integración de los tres componentes. Se realiza sin música. Observaciún :
Este ejercicio es sobre todo parte profundizaciones vivenciales como el "Laboratorio de creatividad", "Proyecto Minotauro" y "Arbol de los deseos".
EL POEMA ERES Tó
Descripción :
Dos personas se eligen mutuamente por afinidad. Se sientan uno frente al otro y entran cada uno en la contemplación del otro. Se abren el misterio del otro, sensibilizándose a la esencia, al estado de ánimo, a las emociones que expresa su rostro, a todo lo que emerge como esencial. Entonces, mientras se mantiene la proximidad, cada uno expresa en el lenguaje poético su vivencia a ver al otro. Tú eres el poema: tú eres el centro de mi percepción. Tú eres la razón de mi poema. Objetivo :
Desarrollar el lenguaje afectivo y poético y la capacidad de exaltar la presencia del otro.
Observaciún :
Se realiza preferentemente sin música para no influenciar la inspiración de las personas con el contenido semántico emocional de Ñsta. Sin embargo, es preparado por una música y es también concluódo con la misma música, la cual indica el marco inicial de conexión e intimidad y el marco final del tiempo del ritual.
DANZA INTERIOR (sin môsica)
La "Danza interior" se hace sin música, dando asi prioridad a la conexión profunda con uno mismo, a partir de movimientos cenestÑsicos inducidos por la escucha profunda de uno mismo. Descripción :
Se trata de una danza de gran intimidad con caracterósticas muy personales, tanto en la forma como en la vivencia. Los movimientos son muy lentos y de escucha profunda de uno mismo. La percepción interna y la profunda conexión con la propia intimidad inducen, en la esfera del silencio, la percepción de la musicalidad y del sonido interno. Mediante la reducción de los movimientos voluntarios y los gestos expresivos intencionales, se acentúan los movimientos cenestÑsicos que hacen nacer una danza interior.
Cuando este ejercicio se propone en la naturaleza, la respuesta interna es mucho mayor, ya que se ve acentuada por la estimulación sensorial y sonora que viene del medioambiente.
En "Biodanza y Voz", del flujo respiratorio propio a cada uno (del ritmo o frecuencia respiratoria), del propio aliento vital, en la escucha silenciosa y sensible, uno puede experimentar la vivencia intensa y trascendente del "aliento de vida" en todos sus matices y posibilidades sonoras. Objetivo :
La "Danza interior" requiere un buen nivel de integración sensitivomotora e integración de la fluidez. Su objetivo principal es profundizar la auto-percepción, el movimiento de la intimidad con uno mismo y la conexión con los diferentes elementos sensoriales y sensibles de nuestra percepción.
DIBUJO SENSIBLE
El desarrollo de la "percepción sensible" es la primera condición para crear imágenes a través del dibujo.
Cuando queremos dibujar un rostro, un paisaje, un objeto real o imaginario, estamos solicitando por lo general lo que se llama el "canal ocular-motor", poniÑndolo al servicio de representaciones pre-establecidas , de esquemas almacenados en nuestra memoria como en una computadora: construimos y elaboramos partiendo de nuestro propio repertorio de formas aprendidas. El resultado es un diseÓo rógido y sin vida,sin alma, una especie de esquema simple y obvio. La complejidad de la imagen, la que que se refiere a la morfogÑnesis, está ausente.
No hay ninguna conexión entre el grupo de signos y el significado intrónseco de la forma. Se trata de una disociación entre los aspectos semióticos y los aspectos semánticos. Carece de emoción. Carece de vida.
Si tomamos como punto de partida para la morfogÑnesis nuestra"percepción del objeto", abordándolo con sensibilidad en el trato con sus alusiones inmediatas, asi se trate de sombras o de formas unidas en el espacio, logramos descubrir el sentido de la imagen.
El artista, al igual que el explorador, se mueve un territorio a otro uniendo en la misma lónea, del mismo trazo, las estructuras que emergen delante de sus ojos, revelando la forma en toda su complejidad.
Cuando se dibuja un esquema que tenemos en la memoria, el diseÓo es rógido. Si dibujamos sin mantener nuestra mirada fija en el papel sino tratando de capturar algo del sujeto, sus formas vivas, vibrantes y expresivas, nos revelan la esencia.
La tÑcnica apropiada para hacer esto es la percepción sensible del objeto, es decir, una percepcion no formal. La mirada ligeramente desenfocada, la mirada que recorre lentamente los contornos, ya sea de un florero, un rostro, una planta, etc.
La propuesta se realiza en dos etapas. El ejercicio se lleva a cabo en pares. Las personas se sientan frente a frente y uno tras otro dibujan como es su costumbre, sin instrucción especófica del facilitador, el retrato de su compañero. A continuación, dejando a un lado sus diseÓos, se compenetran sensiblemente de la cara del otro (esta parte puede ser precedida por la Caricia del rostro en pares). En una hoja nueva, realizan el "retrato sensible" del compañero, tratando de no mirar el papel sino dejando que el trazo exprese lo esencial de su percepción.
Las personas entonces se ofrecen un momento de contemplación de sus respectivas obras. A continuación, todos los dibujos son llevados al centro, cada uno colocando su dibujo formal cerca de su diseÓo sensible, y el grupo forma una ronda que se mueve alrededor para sensibilizarse a través de la contemplación. Objetivo :
Desbloquear el dibujo de los lómites de la percepción formal para permitir una percepción sensible y esencial de los seres y las cosas. En la creatividad la percepción sensible es subjetiva y por lo tanto, es original y única.
Observaciún :
Este mismo ejercicio puede realizarse dibujando un objeto.
DANZAS ESPECóFICAS (por orden alfabÑtico)
 
Bajo este capótulo se agrupan danzas que estan en relación con las extensiones o con situaciones muy especóficas. A veces son variaciones del Catálogo de base de danzas de IBF (Rolando Toro Araneda) y, a veces, están relacionadas con la radicalización vivencial. Las extensiones o situaciones de radicalización son, por ejemplo:
Los Cuatro Elementos, el Proyecto Minotauro, Biodanza Acuática, Biodanza en la Naturaleza, Los caminos de Ñxtasis, El árbol de los deseos, Feminidad y Masculinidad profundas, etc.
Algunas de estas danzas se inspiran en aplicaciones especóficas, tales como la Biodanza para NiÓos y Adolescentes.
ABDOMINALES (llamada ìDanza del astronautaî cuando es propuesta a niños)
Descripción :
Este ejercicio consiste en tenderse en el suelo apoyado sólo en la parte baja de la espalda mientras se mantiene el tronco, la cabeza y las extremidades elevadas. En esta posición, se balancea ligeramente el cuerpo, subiendo y bajando el tronco (sin tocar el suelo) y moviendo ligeramente las piernas y los brazos como si estuviera en condiciones de gravedad cero, con el fin de parecerse a un astronauta que fluye o flota en el espacio.
Observaciún :
Se trata de un ejercicio especófico de la metodologóa de Biodanza para niños. Evoca la sensación de flotar en el espacio sin fuerza de gravedad y por lo tanto, en la consigna, se sugiere al niño la imagen del astronauta. Música :
09-06 Rosa	Poyares, Carlos	3:47
BIOGENERADOR (Biodanza Clónica)		
El Biogenerador consiste en una ceremonia inspirada a los antiguos ritos antropológicos de curación. Este ejercicio invoca la capacidad de curación que pertenece al ser humano. Antes de proponer el Biogenerador, es necesario preparar a los participantes con la realización de ejercicios de afectividad y de trascendencia, para estimularlos hacia un estado de ánimo de amor y paz.
 
Se forman dos rondas concÑntricas. Los participantes de la ronda interior están frente a los de la ronda exterior. La ronda interna es formada por personas que se encuentran en un momento de dificultad caracterizado por enfermedades, dolores, angustias y preocupaciones.  Estas personas pueden llevar una mano a la parte del propio cuerpo que corresponde a su dificultad.  Por ejemplo: si se tratara de un sufrimiento de amor, el participante lleva la mano en su propio pecho cerca del corazón; si se tratara de problemas profesionales, pone la mano en la cabeza; si los problemas son con los órganos genitales, se pone la mano ahó; etc.
Los participantes de la ronda exterior se mueven lentamente hacia un lado parándose frente a uno de los compañeros de la ronda interna y acarician la zona afligida.
Los miembros de la ronda externa no tienen que quedarse por largo tiempo frente a la misma persona (máximo un minuto), de modo que la ronda generadora de vida (o sea la externa) pueda moverse fluidamente sin bloquearse. Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
18-03 Largo - Concerto in re minore - 2 (Il cimento dell'armonia e dell'inventione op.8/7, RV 242)	Vivaldi, Antonio (1678-1741)	2:13
CANTO SOBRE EL CUERPO		
Se trata de un ejercicio especófico propuesto en el contexto de la sanación en Neo-chamanismo. Descripción :
Una persona recibe, en posicion acostada, un baÓo de sonido sobre todo su cuerpo. El sonido es la emision visceral y el aliento de cinco (o siete) de sus compañeros. Estas personas se conectan con su capacidad de dar y transforman su expresión afectiva en expresión vocal visceral. La voz es una vibración, esta vibración lleva la intención real de las personas y "envuelve" totalmente a la persona quien, en un estado de abandono que facilita el trance, se vuelve "permeable" y absorbe la vibración. Se crea gradualmente una armonía entre todos, y la percepción de la vibración de la armonía tiene un efecto armonizador a un nivel orgánico muy profundo.
Al final de la ceremonia, la persona recibe un toque contenedor en todo el cuerpo y a continuación es recibida, sentada, en abrazos alternados que le dan cada vez más identidad. Objetivo :
Inducir un estado de trance profundo por medio de la vibración de las voces sobre el cuerpo.
CONEXIÓN A LA GLORIA DE VIVIR
Desafio del Proyecto Minotauro. Descripción :
Esta danza tiene el significado de una celebración ontológica, de celebrar el hecho de estar vivo. Permitir la plena manifestación de la euforia interna y profunda que proviene del acto de vivir. Estar vivo es un gran triunfo que debemos celebrar con intensidad. Música :
21-02 Freude (Hymne ï la joie) [Part] (Cluytens) - Beethoven, Ludwig van (1770-1827)	1:04 Sinfonie 9 d-moll, op.125 - 4
03-19 Gloria in excelsis Deo (Riccardo Muti) - Gloria in Re Maggiore - 1, RV 589
Proyecto Minotauro	Vivaldi, Antonio (1678-1741)	2:23
CONEXIÓN CON LA PROPIA FUERZA		
La falta de conexión con su propia fuerza es, a menudo, el origen de un sentimiento de debilidad y limita considerablemente la plena expresión de só. Todas las personas está dotadas de una fuerza vital. La vivencia de sentir la fuerza de la vida en só mismo participa en la rehabilitación de la confianza en la vida. Ahora bien, a menudo, la fuerza está asociada a la agresividad, la rabia o la cólera. Es entonces importante diferenciar esta vivencia para otorgarle de nuevo el lugar y el valor que le son propios en el sentido de un proceso de rehabilitación de una identidad sana y potente.
Concentración de la fuerza:
Sentir nuestra fuerza sin  desparramarla. Sin hacer nada más. Como el guerrero que se prepara toda su vida, manteniÑndose listo para el momento en el que necesitará esta fuerza. Los movimientos son intensos. Los ojos cerrados. No hay desplazamientos, o gestos ñparasitariosá inútiles.
Expresión de la fuerza: Es alló donde la fuerza conectada, mantenida, va a expresarse en una danza tónica, yang, intensa, ojos abiertos, con desplazamientos enraizados, consistentes.
Hay coherencia de la tonicidad en todo el cuerpo: a la fuerza de los brazos corresponde la de las piernas y la intensidad en la mirada. La expresión de la fuerza es luminosa, apasionada.
No está asociada a la cólera. Objetivo :
Estimular la percepción de la propia fuerza por el tono, el equilibrio, la expresión y la intensidad.
Observaciún :
Es interesante proponer las  dos danzas (Concentración y expresión) de manera consecutiva.
Música :
18-07 Eric's Theme	Vangelis	4:17
15-19 Finlandia 'Symphonic poem' op. 26 (Munih) Sibelius, Jean (1865-1957)	8:34
15-12 Presto - Concerto 'L'estate' in sol minore - 	Vivaldi, Antonio (1678-1741) 3 (Le quattro stagioni Op.8/2, RV 315)	3:01
19-12 Sundance	Kitaro (óúÓ)	6:21
Expresión de la propia fuerza (expansión).
DANZA CUBISTA
Laboratorio de Creatividad. Descripción :
Esta danza evoca la escuela del cubismo del arte contemporáneo: moviminetos angulosos, asimÑtricos. Música :
16-10 RÑvolution, rÑvolutions [Part]	Jarre, Jean-Michel	2:08
DANZA DEL CHAMñN
Las caracterósticas del chamán son complejas y múltiples: incluyen la naturaleza y los elementos, la libertad con respecto al tiempo y al espacio, la capacidad de transformación y de transmutación de la identidad mediante el trance, la experiencia de la muerte y el renacimiento, y la preservación de la identidad psóquica de la comunidad. Las herramientas de curación son también complejas y múltiples, y están relacionadas con la capacidad de desdiferenciación.
La danza es para el chamán el camino del conocimiento y del viaje en las diferentes dimensiones de la vida. Descripción :
La danza es una inmersión en el aquó y ahora, un olvido total de só mismo. Sin embargo, como todo trance, está codificada por la dirección deseada. Aquó, es la identificación mediante la fusión con los elementos, con las máscaras y pinturas faciales, o con el animal totÑmico. Observaciún :
Extensión Biodanza y Chamanismo. Observaciún :
La música es creada por el uso del tambor por el danzante mismo, o bien por alguien en el grupo que sabe tocar el tambor. También se puede usar la música de encantamiento de los indios Navajo. VÑase también en la serie BA, la pieza BA 36-05 (Double Drumming With Callback II [Part]) Música :
07-12 Riacho [Part]	Guem	3:26
DANZA DEL CAOS A LA ARMONóA (o del Caos al Orden)
En su definicion de la Creatividad (tanto artóstica como existencial), Rolando Toro la describe como el camino del caos al orden. En su enfoque de la afectividad, el amor es la única fuerza que puede ayudarnos a transmutar las situaciones más oscuras. En su enfoque de la trascendencia, nos invita a la intimidad con el orden dentro de lo indiferenciado, lo increado, lo desconocido ... de todo lo que nuestra percepción limitada no puede ver y sin embargo existe. Nuestro camino de humanidad está en nuestra capacidad de encontrar orden y armonía en cualquier situación; de tener el coraje de la intimidad con el Caos. El coraje es, junto con el amor y la iluminación, uno de los elementos del inconsciente numinoso.
La persona danza dejándose hundir en el caos, en la oscuridad, en una danza donde sus fuerzas la abandonan, y la tristeza la puede invadir. Es invitada a percibir en la música el momento en el que el caos se invierte y la danza se convierte en una expresión de la transmutación, con una elevación hacia la luz y la armonía. Objetivo :
Familiarizarse con las fuerzas vitales capaces de permitirnos encontrar el principio atractor que nos "saca" del caos hacia el orden y la armonía. El orden es la fuerza del amor. Definiciún :
Transformación del caos en armonía. Música :
15-20 The Great Gig In The Sky Minotauro: Danza del Caos.	Pink Floyd	4:40
DANZA DE OPRESIÓN-LIBERACIÓN		
A menudo somos el más grande opresor de nuestros impulsos vitales, de nuestros deseos y nuestros instintos. Esto se debe a las prohibiciones y condicionamientos introyectados de nuestra educación: cuanto más rigida haya sido Ñsta, más fuerte es el dictador interior. Tenemos que encontrar dentro de nosotros mismos la fuerza para liberarnos de las cadenas que impiden el progreso hacia nuestra identidad. Descripción :
La persona se coloca de rodillas en el piso, con la frente hacia el suelo, coloca sus manos detrás de la espalda y se agarra ambas muÓecas con fuerza, como dos esposas. Se conecta a su fuerza de autoopresión para transformarla poco a poco en fuerza de auto-liberación. El momento de la liberación debe ser un momento de júbilo y de triunfo. La duración total de la música debe servir para aumentar la intensidad de una rebelión interna contra el opresor en su interior. Objetivo :
Estimular la fuerza de auto-liberación. Observaciún :
Esta danza es especifica del Proyecto Minotauro y constituye un desafio existencial. Música :
19-08 Daphnis et ChloÑ (Ozawa) - Danse finale Bacchanale - Ballet, 3íme tableau - III Minotauro: Conexión a la furia (rabia-cólera).	Ravel, Maurice (1875-1937)	4:13
DANZA PARA UN SER AUSENTE		
Aplicación en el Proyecto Minotauro y en grupos preparados a la radicalización vivencial. Descripción :
La persona danza en coherencia con el contenido semántico de la música, evocando a un ser ausente (evitar la invocación de una persona fallecida) y simbólicamente le ofrece su danza. Objetivo :
La ausencia puede ser llenada evocando la presencia de un ser querido. A menudo,  fenómenos de tipo telepático se producen cuando se evoca fuertemente la presencia de un ser querido. Música :
17-12 Adagietto 'sehr langsam' [Part] (Anton 	Mahler, Gustav (1860-1911) Nanut) - Sinfonie 5 cis-moll - 4
Nivel de profundización y radicalización de la vivencia.	6:12
16-08 CanÓèo de Amor - Floresta do Amazonas	Villa-Lobos, Heitor (1887-1959)	4:01
Intensidad de la expresión para transformar cualquier emoción: la falta de expresividad tiende causar que el danzante se abruma en la emoción, en vez de permitir una transmutación.
DANZA SURREALISTA		
Laboratorio de Creatividad. Música :
16-11 RÑvolution Industrielle: Ouverture	Jarre, Jean-Michel	5:11
DECIR NO-ESTABLECER LóMITES		
Desafio del Proyecto Minotauro.
La persona es invitada, desde la posición de la identidad y con los ojos abiertos, a expresar un NO a los cuatro puntos cardinales, con un gesto firme en coherencia con con el tono de la voz y el movimiento del cuerpo entero. Objetivo :
Afirmar con poder, con determinación, con serenidad y con seguridad la capacidad de decir que no, de oponerse y de establecer lómites. Música :
15-02 Japanese Drums	Kitaro (óúÓ)	3:17
EXPRESIÓN DE LA FEMINIDAD		
Enfoque especófico de la identidad de gÑnero. La feminidad profunda. Descripción :
Las mujeres danzan en conexión profunda con ellas mismas y en consonancia con el pulso de la música, invocando mediante su danza lo que es caracteróstico de lo femenino: la profundidad, la sensualidad, la dulzura, la apertura, el recibimiento, el don generoso de si misma .. a fin de profundizar para só mismas la vivencia de sentirse mujer asumida en toda su grandeza. El facilitador evitará darle demasiado peso a su demostración y propondrá una expresión sincera de só misma y la aceptación de la diversidad de las expresiones. Objetivo :
Integrar la expresión propia al gÑnero femenino de manera arquetópica y no estereotipada. Música :
19-05 I Wanna Be Loved	Horn, Shirley	4:37
16-03 Insensatez	Getz, Stan with Astrud & Joõo Gilberto	3:25
16-07 Lost Mind	Krall, Diana	3:47
16-04 Miss Celie's Blues (Sister) (1922 Jook Joint) (Vocal Tata Vega)	OST The Color Purple	2:29
EXPRESIÓN DE LA MASCULINIDAD		
Enfoque especófico de la identidad de gÑnero. Masculinidad profunda. Descripción :
Los hombres danzan en conexión profunda con ellos mismos y en consonancia con el pulso de la música, invocando mediante su danza lo que es caracteróstico de lo masculino: la profundidad, la sensualidad, el vigor, la apertura, el recibimiento, el don generoso de só mismo .. a fin de profundizar para só mismos la vivencia de sentirse hombre asumido en toda su grandeza. El facilitador evitará darle demasiado peso a su demostración y propondrá una expresión sincera de só mismo y la aceptación de la diversidad de las expresiones. Objetivo :
Integrar la expresión propia al gÑnero masculino de manera arquetópica y no estereotipada. Música :
14-16 Libertango	Piazzolla, Astor	2:54
16-02 Once Again (Outre Vez)	Getz, Stan with Astrud & Joõo Gilberto	6:46
07-13 Voyage dans l'au-delï	Baroty & Dieng	6:13
16-01 Zorba's Dance	Theodorakis, Mikis (ìûáñ† °¢î£§ôêáñ†)	4:18
21-17 Zorba's Dance (OST)	Theodorakis, Mikis (ìûáñ† °¢î£§ôêáñ†)	4:07
FETALIZACIÓN CÓSMICA
Desafóo del Proyecto Minotauro y ejercicio de profundización de la trascendencia de la extensión "Biodanza en la Naturaleza". No se debe confundir con la Posicion Generatriz "Flotar en el lóquido amniótico".
AULLAR COMO LOBOS
Proyecto Minotauro, Biodanza en la Naturaleza y Laboratorio de Creatividad.
MANDALA
Extension "Los caminos del Ñxtasis". Música :
16-19 Mandala	Kitaro (óúÓ)	6:10
 
APERTURA DEL ESPACIO VITAL (o Crear el espacio del propio crecimiento)
Cierto estilo de vida y ciertos hábitos reducen la movilidad existencial. Las personas, aún aquellas que no se sienten nutridas por su medio (afectivo o profesional), no osan ampliar su horizonte. Otras se satisfacen de lo adquirido o de una forma reducida de seguridad. Cesan entonces de evolucionar, de crecer. Conviene estimular el instinto de exploración: desplazarse, osar expresarse, ver más lejos, tornarse curioso, dar a las motivaciones un espacio amplio para sus expresiones. Descripción :
Esta danza se caracteriza por desplazamientos determinados, apasionados, voluntarios, a partir del centro afectivo. Los movimientos son amplios, la mirada abraza el espacio. La tonicidad se adapta según las impulsiones: algunas más livianas, otras más potentes. La vivencia invocada es la de la expansión, del impulso vital, de potencia, de compromiso. Observaciún :
De acuerdo con la música elegida, esta danza puede ser seguida por una danza de extensión (armónica o máxima) que es también apertura del espacio vital. Música :
14-16 Libertango	Piazzolla, Astor	2:54
07-19 Moonlight Serenade	Light, Enoch & The Light Brigade	3:46
PINTURA ESTILO CUBISMO		
Laboratorio de Creatividad. Música :
16-09 Ouverture [Part]	OST Le Grand Bleu	2:29
PINTURA IMPRESIONISTA		
Laboratorio de Creatividad. Música :
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
PERCEPCIÓN DE LA NATURALEZA CON LOS CINCO SENTIDOS	
Ejercicio de la extension "Biodanza en la Naturaleza".	
PERCEPCIÓN ESTóTICA DEL OTRO (Calificacián del otro)	
Las personas tienen dificultad para percibir el estado interior de los otros, generalmente se quedan en la percepción de los aspectos externos, superficiales y formales, sin captar los estados de alegría, tristeza, miedo, sufrimiento, erotismo y afectividad.
Asó como existe una estÑtica aplicada en las artes (poesóa, teatro, literatura, etc.) -estÑtica es la percepción del bello- he propuesto una ñEstÑtica Antropológica como la percepción de la belleza del ser humanoá. Descripción :
Sentados en rondas de 6 personas; uno de los miembros comienza la comunicación con el compañero del lado. Se pone frente a él y toma sus manos; después expresa verbalmente y con afectividad, la percepción de los aspectos más bellos que descubre en el otro. Objetivo :
Aprender a percibir profundamente los aspectos más positivos de las personas; aumentar la capacidad de comprensión humana. Observaciún :
Sin música Música :
oa('01','20') Adagio - Concerto in re minore per oboe, 	Marcello, Alessandro (1669-1747)	4:46
archi e BC - 2, SF 935
Se realiza sin musica. Sin embargo, esta musica puede servir a la preparación, al encuentro que prepara la sintonización y la comunión que preceden la comunicación emocionada de lo que se percibe vivencialmente del otro.
PERCEPCIÓN DEL OTRO CON LOS CINCO SENTIDOS
A menudo estamos limitados en nuestra percepción de los demás y de nosotros mismos, por a prioris relacionados con el cuerpo. Nuestros sentidos son las puertas que están abiertas al mundo, al mundo del otro. Abrir las puertas de nuestra percepción sensorial nos da acceso a la realidad del otro. Descripción :
Las personas forman pares y hacen juntos la secuencia completa (vista, olfato, oódo, gusto y tacto). Más que un ejercicio, se trata de una verdadera ceremonia de descubrimiento del otro y de entrega de só mismo en el descubrimiento (para la persona que se abandona a "ser percibida o ser sentida" en toda su corporeidad). Objetivo :
Superar los tabúes relacionados con el cuerpo y abrir nuestra percepción total. Por otra parte, superar nuestras inhibiciones de ser vistos en toda nuestra naturalidad y sin artificios. Esta percepción del otro con los cinco sentidos es una apertura hacia la aceptación total y hacia la intimidad. Observaciún :
La música acompaÓa todas las etapas excepto la del Oódo que se hace en silencio para permitir la percepción de los sonidos más sutiles. Al final de la ceremonia, la persona que se ha ofrecido es recibida en un abrazo por su pareja antes del cambio de posiciones. Elemento PoÓtico :
Ningún aroma, ningún paisaje, ningún perfume, ninguna textura, ninguna música no podróan ser más bellas que las que la creación puso al centro de nuestros cuerpos vivos. Son una expresión de la vida misma. Recibirlas es un honor.
Etapas de la Danza :
1 La vista
Frente a su compañero que esta sentado en posicion receptiva y ofrece toda su atención, la persona danza y es vista en todo su despliegue. No es una danza de seducción, es vivenciar la realidad de ver y ser visto.
2 El oódo
Ahora, la persona se acuesta de espalda en posición receptiva y permanece asi a lo largo de las etapas sucesivas. El otro acerca la oreja a las partes del cuerpo que están dotadas de sonidos naturales: el aliento, el corazón, las tripas. Cada sonido es la música a la vida. Cada música es única.
3 El olfato
Recorrer del cuerpo del compañero oliendo el olor de su piel y de las partes más expresivas (axilas, fosas nasales, comisuras de los labios, cabello, cuello). Ninguna parte del cuerpo es un tabú. Ningún olor es un tabú. Cada persona tiene un perfume único.
4 El gusto
Cada piel tiene un sabor. Navegar por la piel con nuestros labios y con el roce de nuestra lengua para percibir los sabores (de las manos, del hueco de su cuello, los codos, etc ®.) con suavidad y voluptuosidad. Con veneración. Cada persona tiene un sabor único.
5 El tacto
Dejar que nuestras manos, con ternura y conexión profunda, perciban lo que los ojos no pueden captar. El contacto se convierte en caricia y en adoración. Cabe seÓalar que el contacto no es exploratorio, sino un encantamiento del descubrimiento y de la intimidad. Música :
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
Música correspondiente a la primera etapa.
19-05 I Wanna Be Loved
Música correspondiente a las etapas 3, 4 y 5.	Horn, Shirley	4:37
RENACIMIENTO		
Proyecto Minotauro. Descripción :
Este es un ritual para hacer frente y transmutar el miedo de la vejez y el temor a la muerte. Para la consigna completa, se debe referirse al libro "Proyecto Minotauro".
Música :
oa('01','19') Allegro - Concerto 'La primavera' in Mi 
Maggiore - 1 (Le quattro stagioni op.8/1, RV 269)	Vivaldi, Antonio (1678-1741)	3:29
17-06 Blue Lotus	Berglund, Erik	5:12
11-07 MÑditation de Thañs (d'aprís Jules Massenet)	Zamfir, Gheorghe	5:07
SINTONóA SILENCIOSA		
Es un ejercicio extremamente importante porque induce una vivencia de profunda receptividad a los estómulos externos y especialmente al contacto humano. Pertenece a la Línea de la Afectividad. Descripción :
Se realiza en pareja. Uno de los dos es pasivo y cierra los ojos evocando un estado de extrema sensibilidad. El otro es activo y da toques livianósimos y delicados en algunas partes del cuerpo de su compañero, el cual responderá sensiblemente, moviendo la parte tocada.  Asó, por ejemplo, si el otro le toca una mano, el participante mueve la misma mano con extrema sensibilidad.  De esta forma cada toque hará mover la parte tocada con armonía y sensibilidad. Una vez concluódo el ejercicio, se invierten los roles. Objetivo :
Estimulación de la integración sensoriomotora a través de la afectividad. Sensibilización a los estómulos del medio ambiente. Observaciún :
La persona que tiene el papel activo es invitada a no sobreestimular a su pareja, es decir, no tocar varias partes del cuerpo a la vez o muy rápidamente, ya que no dejaróa lugar a una expresión sensible. Observaciún :
Este ejercicio se realiza sin música. Sin embargo, es posible proponerlo con música: en este caso, referirse a la "Danza de sensibilizacion en pares".
POSICIONES GENERATRICES
INTRODUCCIóN
Desde el principio de la historia humana hasta nuestros dóas, el hombre realiza algunos ñgestos eternosá. Estos gestos ñarquetópicosá aparecen en los bajorrelieves, esculturas y pinturas de todos los tiempos.  Se trata de gestos de adoración, maternidad, reverencia, trabajo, intimidad, etc.
Rudolf von Laban afirma que ñlos movimientos de la danza son los movimientos de la vidaá. Etienne Decroux seleccionó 22 posiciones como partes fundamentales que generan el movimiento del Arte de la Mómica.
En Biodanza seleccionÑ tres códigos de Posiciones Generatrices, que permiten crear danzas espontáneas de gran riqueza y profundidad humana. Cada una de estas posiciones tiene un significado psicológico profundo.
Los gestos arquetópicos pertenecen al inconsciente colectivo descrito por C. G. Jung y constituyen verdaderas matrices expresivas.  
Los tres códigos de posiciones generatrices que propongo en Biodanza son producto de una larga búsqueda en el repertorio gestual de distintas culturas: hindú, egipcia, greco-romana y occidental moderna.  SeleccionÑ las que para mó representan gestos altamente evolucionados  -capaces de inducir vivencias profundas y trascendentes- que tienen el poder de generar ñdanzas internasá.  LlamÑ a estos gestos arquetópicos ñPosiciones Generatricesá porque pueden generar danzas especóficas.
La danza expresiva común es una combinación de movimientos organizados por la vivencia personal del danzarón. Las danzas que surgen de la combinación de posiciones generatrices poseen una dimensión más universal y se refieren a la grandeza del hombre. La combinación de tres, o más posiciones generatrices, dan origen a danzas de una extraordinaria belleza y pureza expresiva.
La realización de las posiciones generatrices tiene que durar aproximadamente un minuto. En seguida se sugiere a los alumnos realizar una danza libre, haciendo variaciones sobre la respectiva posición generatriz.
El criterio para separar los tres códigos es el aumento progresivo de complejidad de la vivencia.  Las posiciones del primer código aluden a la relación del hombre con lo sagrado y está muy próximo a las necesidades humanas más básicas.  El segundo código se refiere a los estados de regresión. El tercer código induce estados de expansión de conciencia.
 
La postura básica de casi todas las Posiciones Generatrices es la Posicion de Identidad, de la cual partimos y a la cual regresamos al final. Las piernas separadas a la distancia de las caderas, la cabeza derecha sobre sus hombros, los brazos relajados.
La división en tres Códigos distintos se refiere también a la creciente capacidad vivencial del biodanzante. De hecho, una inmadurez vivencial no permite el acceso completo a los objetivos de las Posiciones Generatrices de los Códigos II o III.
POSICIONES GENERATRICES - CÓDIGO 1
VALOR (o Proteccián del Valor)
PuÓos cerrados, brazos extendidos, cabeza derecha y actitud serena. Se cruzan los brazos con lentitud y firmeza en el pecho, en acto de mantener el poder y defender un valor interno. El gesto se refiere al valor interior de la persona como criatura trascendente.  
Esta posición induce danzas que expresan la identidad. Se asume el ñsi mismoá. Los ojos miran hacia delante y los pies están levemente separados. Observaciún :
Tomarse el tiempo con los brazos a lo largo del cuerpo y los puÓos cerrados antes de llegar a cruzarlos frente al pecho. Esta PG se refiere a la capacidad de tener sentimientos, pensamientos, sensaciones y deseos propios. Durante las variaciones, la danza siempre sugiere la protección, la defensa (parecida a un arte marcial). Música :
15-01 Einleitung (Introduction) - Also sprach 	Strauss, Richard (1864-1949)	1:58
Zarathustra op.30
Cuando las personas son invitadas a realizar la danza sigue a la PG, poner Ónfasis en los gestos claros de autoestima, de protección del valor propio, de la propia identidad.
CONEXIÓN CON EL INFINITO
Descripción :
PiÑ izquierdo adelante. Los brazos se levantan lentamente, tratando de tocar con la punta de los dedos un lugar imaginario en el cielo. Las manos con las palmas opuestas y los ojos abiertos. Este gesto induce la vivencia de vincularse con lo desconocido e insondable. Objetivo :
Esta posición genera una danza móstica con movimientos de ascensión, nos inicia al misterio. Observaciún :
La PG se realiza una vez y luego la danza comienza con, como referencia, la elevación, la conexión hacia arriba. En la danza, a fin de establecer una pulsación, hay momentos de retorno a la posición de identidad alternando con variaciones que sugieren la ascensión. Música :
18-01 Shine On You Crazy Diamond, P1 [Part 1]	Pink Floyd	3:54
INTIMIDAD		
Las manos se acercan al pecho lentamente, como para proteger el mundo óntimo; la cabeza se inclina con devoción. Este gesto genera una vivencia de intimidad consigo mismo, como si uno se disolviera en su interior. Pies unidos. Los ojos se cierran cuando se intensifica la vivencia.
La posición de intimidad genera danzas de recogimiento e interioridad que tienden a un estado de intasis. Es el despertar con ñlo más óntimo de lo óntimoá (S. Agustón). Observaciún :
Tras la realización de la PG durante un minuto, la danza ofrece las variaciones de la intimidad, de pie o en cuclillas, en una pulsacion yin/yang, apertura/ intimidad. Es conveniente proponer a las personas que tienen dificultades con la vivencia de intimidad, de tratar de ponerse en contacto real con las partes del cuerpo más óntimas, poco expuestas o poco tocadas, poniendo sus manos sobre su propio cuerpo, o abrázandose. 
Esta sugerencia puede ser apenas visible en la demostración danzada del facilitador. Música :
oa('01','20') Adagio - Concerto in re minore per oboe, 	Marcello, Alessandro (1669-1747)	4:46
archi e BC - 2, SF 935
17-15 Adagio - Streichquintett in C-Dur - 2, 	Schubert, Franz (1797-1828)	4:43
op.post.163 D 956
El contacto con uno mismo ha sido previamente profundizado. Esta Música se adapta mejor a las personas que ya vivenciaron la PG con la Música mÑs fÑcil como "Danza de los espúritus bienaventurados" de Gluck.
17-16 Ave Maria (after Johann Sebastian Bach)	Gounod, Charles (1818-1893)	3:23
11-14 Consolation nã3 en RÑ bÑmol Majeur (Lento placido) - Six consolations, S 172	Liszt, Franz (18oa('11','18')86)	4:12
10-21 Largo - Prélude nã4 en mi mineur - 24 Préludes, op. 28	Chopin, FrÑdÑric (1810-1849)	2:21
15-18 Reigen Seliger Geister (From 'Orfeo ed Euridice')	Van Leer, Thijs	7:49
09-17 Reigen Seliger Geister [Part 2] (From 'Orfeo ed Euridice')	Van Leer, Thijs	3:54
18-02 Selig sind, die da leid tragen [Part] - Ein deutsches Requiem op.45 - 1	Brahms, Johannes (1833-1897)	4:29
PEDIR		
La pierna derecha adelantada, la pierna izquierda se pliega levemente en la rodilla. Ojos abiertos. El brazo derecho se eleva hacia delante a 140±, la palma de la mano vuelta hacia arriba. El brazo izquierdo queda atrás. La mirada y la cara se dirigen, con dignidad, en dirección de la mano derecha.
La actitud de pedir es aún más difócil que la de dar o recibir, en especial para las personas que sufren sentimientos de inferioridad.
Note CIMEB :
Anteriormente, Rolando seÓalaba que se debia "poner una rodilla en el suelo". Cambió de parecer, y la posicion que resulta es inestable e incómoda. Interrogado, Rolando dijo que só es incómodo pedir, y que cuando una persona se ve obligada a pedir en la vida es que se encuentra en una posición inestable e incómoda. Es importante poner de manifiesto la sinceridad y la dignidad del gesto de pedir (todo pedido, todo deseo es bello en el sentido de que es una expresión de la vida). La posición se realiza de forma individual (no nos encontramos frente a una compañero); sin embargo, se puede hacer en dos grupos de modo que todo el mundo sea acogido en un abrazo al final. No se propone la danza generada. Música :
oa('11','11')+ Watermark	Enya	2:25
DAR-DARSE		
Estas dos posiciones evocan sensaciones de generosidad y auto-donación. A menudo son propuestas de manera sucesiva. Descripción :
Dar: 
Pies separados. Los brazos se elevan lentamente hacia adelante hasta un ángulo de 35±.  Manos abiertas en la actitud generosa de dar. Ojos abiertos.
Darse: 
El mismo movimiento más amplio: el cuerpo se abandona hacia atrás en acto de ofrecerse completamente.  La posición generatriz de darse pone en práctica la difócil prueba de donarse al otro, sin miedo. Cerrar los ojos cuando se intensifica la vivencia. Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
oa('11','13')+ Impromptu nã3 in Ges-Dur (Andante) - Impromptus op.90 D 899	Schubert, Franz (1797-1828)	6:18
10-21 Largo - Prélude nã4 en mi mineur - 24 Préludes, op. 28	Chopin, FrÑdÑric (1810-1849)	2:21
RECIBIR		
Partiendo de la posición de Identidad se pasa a la de ñDará donde los brazos se levantan hacia delante en un ángulo de 90±, para después abrirse en un acto receptivo. Ojos abiertos y pies ligeramente separados.
Este gesto complementa al anterior y está en relación al equilibrio de dar è recibir.  Las personas que solo saben dar tienen problemas graves, así también las que saben solo recibir.
Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
17-05 Ponteio	Branco, Waltel	2:21
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as 
Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
PROTEGER LA VIDA		
 
El movimiento es lento y delicado como acunando a un niño. Los ojos permanecen abiertos, contemplando el espacio-cuna formado por los brazos, y los pies liegramente separados. 
Esta posición genera vivencias de ternura y encantamiento frente a todo ser y activa los sentimientos de maternidad y paternidad. Estimula la sensación universal de reverencia y respeto por la vida.  
Cuando se realiza la danza libre con variaciones generada por la posición, se sugiere simbolizar el cuidado y la atención que se da a toda forma de vida (un pájaro, una flor, una persona en dificultad, un ciego, la tierra, etc.).
Música :
17-16 Ave Maria (after Johann Sebastian Bach)	Gounod, Charles (1818-1893)	3:23
Profundización en Proyecto Minotauro.
17-05 Ponteio	Branco, Waltel	2:21
TRABAJOS PRIMORDIALES		
Brazo derecho atrás en acto de lanzar un objeto. El gesto consiste en dar un impulso vigoroso a algo que se encuentra en la mano. El brazo izquierdo acompaÓa naturalmente el movimiento, moderando la fuerza del brazo opuesto. La pierna derecha está hacia atrás en perfecto sinergismo. La posición favorece los movimientos de los trabajos manuales, agrócolas y movimientos del deporte.
Es interesante la utilización de esta posición para estimular la sincronización y euritmia del grupo.  Las coreografóas libres que se inducen se relacionan con ceremonias colectivas de trabajo.
Se trata de rehabilitar la dignidad del trabajo, la conexión entre el trabajador y su labor o su obra. Relizados con lentitud, estos gestos evocan danzas, y son de gran riqueza para trabajar la linea de Creatividad.
Observaciún :
En esta PG, no se trata en realidad de estar "trabajando" sino de expresar de modo estilizado los gestos del trabajo. En las variaciones, se puede danzar con movimientos tales como:
- Transportar una carga sobre la espalda; tirar de una cuerda, una red de pesca, maniobrar un barco, alzar un mástil, izar una vela, tejer, enrollar una cuerda, hachar madera, dibujar, remar, cosechar, sembrar ® Todo tipo de oficios y trabajos manuales que evocan el contacto directo entre la mano y la materia. Música :
18-13 Shine On You Crazy Diamond, P1 [Part 2]	Pink Floyd	4:49
POSICIONES GENERATRICES - CÓDIGO 2		
		
DETERMINACIÓN		
Se empieza en la Posición de Identidad. Todo el cuerpo se extiende hacia delante: la pierna derecha da un paso con la rodilla levemente doblada, el brazo derecho extendido hacia delante, la mano abierta con la palma vuelta hacia abajo. La pierna izquierda tendida hacia atras como preparándose al impulso. El brazo izquierdo con la mano abierta extendido a lo largo de la pierna izquierda. Los ojos están abiertos mirando hacia adelante como apuntando a un blanco, y la tensión muscular aumenta progresivamente con la intensidad de la música.  
La vivencia es de proyección hacia el futuro y de predisposición a la acción. Observaciún :
Cuando la tensión muscular ha alcanzado un nivel tal que la transición a la acción se impone, la persona arranca, como una flecha, en una marcha determinada acompaÓada por la música. DespuÑs de a un corto peróodo de tiempo durante el cual es posible vivenciar la determinación en acción, se vuelve a la posición inicial de identidad. Esta posición de deteminación es una metáfora del arco tendido hacia una meta. El danzante es a la vez arquero, arco, flecha y trayectoria.
Música :
18-14 Allegro [Part] - Sinfonie 6 F-Dur op.68 - 4 	Beethoven, Ludwig van (1770-1827)	3:50 (Gewitter-Sturm)
Se lleva a cabo de forma individual en el Proyecto Minotauro. También podrÑ proponerse una variante colectiva para preparar, por ejemplo, la danza de "Decir NO". En este caso, sólo un minuto de Música es suficiente.
EXPANSIÓN (ìEl Hombre Estrellaî)
De pie en la PG de Identidad, con los brazos al costado del cuerpo y la mirada hacia delante. Desplazando hacia el lado el pie izquierdo, se separan las piernas y, simultáneamente, se cierran los puÓos llevándolos al pecho y apoyándolos uno al otro. En seguida se abre el brazo y la mano derecha hacia el costado en alto, después del mismo modo el brazo y la mano izquierda; la mirada sigue cada vez el movimiento de la mano. DespuÑs de mantener algunos instantes esta posición en estrella, se regresa a la posición inicial.
Esta posición se basa en el dibujo del Hombre de Vitruvio de Leonardo da Vinci. Se refiere al hombre cósmico. Sólo puedo sentirme uno con el cosmos cuando me abro a él. El movimiento no se detiene donde alcanzan mis dedos, sino que se extiende más allá. En la danza generada por la posición se invita a las variaciones, se puede desplazarse, darse vuelta, rotar, en movimientos en gran expansión. Sin embargo, debemos tener cuidado de no cerrar los puÓos, incluso si retornamos a momentos de conexión con uno mismo. Esta posición tiene esencialmente por objetivo existencial la apertura y la expansión de la identidad. 
Una identidad cósmica. Música :
18-07 Eric's Theme	Vangelis	4:17
15-19 Finlandia 'Symphonic poem' op. 26 (Munih) Sibelius, Jean (1865-1957)	8:34
18-08 Finlandia 'Symphonic poem' op. 26 [End Part] (Karajan)	Sibelius, Jean (1865-1957)	1:24
16-18 Heaven & Hell, 3rd Movement - Theme From The TV Series "Cosmos"	Vangelis	4:09
07-23 Valse - Coppélia - Acte I/2	Delibes, LÑo (1836-1891)	2:21
ATEMPORALIDAD		
Sentados inidvidualmente con las piernas plegadas y con las plantas de los pies unidas. Las manos se ponen una sobre otra con las palmas vueltas hacia arriba, apoyadas sobre los pies. La cabeza, dulcemente relajada, se inclina hacia el pecho. Se queda en esta posición a lo máximo un minuto. En seguida es necesario que el facilitador proponga que se tiendan en el piso para relajar la musculatura.   
Esta posición, acompaÓada de música adecuada, induce una vivencia de eternidad, o sea la percepción del tiempo dilatado. Por eso la posición generatriz de atemporalidad puede ser considerada una forma de meditación.
Se trata de una vivencia "fuera del tiempo", donde el tiempo se libera de cualquier medida. Se inspira en el yoga y la vivencia surge de la sensación muy sutil de la concentración de energóa llevada a cabo sin ningún esfuerzo. Para la gente que tiene dificultades posturales, se debera invitarlas a adaptarse a sus posibilidades motrices (incluyendo hacerla sentado en una silla). Sin embargo, la demostración del facilitador debe cumplir con la consigna. Esta posición no es seguida de una danza generada. Música :
18-05 Daphnis et ChloÑ (Levine) - Danse lente et 	Ravel, Maurice (1875-1937)	2:06
mystÑrieuse des Nymphes [Part] - Ballet, 
1er tableau - VI
CONEXIÓN CON LO PRIMORDIAL
Con los ojos abiertos y agachado, con las rodillas flexionadas, se acaricia el suelo con las manos. La mirada está dirigida hacia las propias manos.
Esta posición evoca el artesano con la arcilla, la selección de semillas y la preparación de alimentos. En el plano visceral y fisiológico evoca el parto natural, la micción y la defecación.
Esta es una posición particularmente incómoda para los llamados seres civilizados de nuestras ciudades. Por ello es necesario, en primer lugar, que no exceda de 1 minuto y, en segundo lugar, adaptarla si es necesario:
En lugar de tener los pies en paralelo, las personas pueden tenerlos abiertos, o permanecer sobre las puntas de los pies. Si la posición es todavóa difócil, es posible poner una rodilla en el suelo.
Mientras las manos acarician el suelo,se hacen pequeños movimientos de desplazamiento, siempre agachados. Esta PG es particularmente adecuada en Biodanza en la Naturaleza y Biodanza y Arcilla. Al final de la danza, ofrecemos a la gente un momento para acostarse sobre su costado y luego estirarse. Música :
18-12 Song Of Lamentation [Part] {End Part of 'Sanctus. Bwala Dance'}	Fanshawe, David	1:02
FLUCTUAR EN EL LóQUIDO AMNIÓTICO		
 
En posición fetal de lado, con los ojos cerrados y la boca semiabierta, se comienza con lentos movimientos de fluctuación, como un feto en el amnios.
Durante la realización de este ejercicio se gira lentamente hacia el lado opuesto, apoyando completamente la columna vertebral y la cabeza en el suelo, mientras se pasa de un lado al otro. Esta oscilación puede repetirse dos o tres veces, siguiendo el movimiento regresivo creado por la música. Todos los movimientos tienen que evocar la vivencia de fluctuación.
A medida que se gira hay una progresión del movimiento apoyados sobre la espalda, las piernas se alejan unas de otras (como un bebÑ, acostado sobre su espalda, las rodillas dobladas sobre el vientre). Las manos se encuentran cerca de la boca y de la nariz. La cabeza no se levanta del suelo. Esta posición es particularmente regresiva, conviene proponerla en dos grupos para que todos puedan ser recibidos en un abrazo de mecimiento en el suelo durante aproximadamente 2,5 minutos.
Este ejercicio induce una vivencia de regresión, de retorno al origen de la vida. Es volver a la experiencia indiferenciada del peróodo perinatal, con las percepciones que la acompaÓaban: la percepción de la separación o de la des-fusión se desvanece, dando paso a una percepción indiferenciada. Música :
18-04 Prélude Electronique	OST 2001: A Space Odyssey	5:29
 
DISPOSICIÓN A SER FECUNDADA (indicada para el sexo femenino)
 
Recostadas de espalda sobre el suelo, con las piernas semiabiertas y las rodillas ligeramente dobladas en actitud receptiva. Los brazos están naturalmente abandonados en el suelo, los ojos cerrados y la boca semiabierta.
Los movimientos son lentos y cadenciosos para facilitar una receptividad activa. Progresivamente los movimientos aumentan  de intensidad, siguiendo el ñcrescendoá de la música. Las piernas se ponen en posición semi-doblada que permite levantar la pelvis. 
Se inician movimientos de levantar y bajar espontáneamente la pelvis: este movimiento no debe ser mecánico, sino  responder al impulso interior.  
La posición generatriz de disposición genital se refiere a las ceremonias primitivas de fecundación, en las cuales las mujeres tendidas en los surcos de los campos invocaban la fuerza fecundadora del cielo que se manifestaba con la lluvia y la luz solar.
Esta posición a menudo sigue a la de Conexión con lo Primordial. Como está indicada sólo para las mujeres, los hombres presentes serán invitados a acompaÓarlas: cada hombre se pone en una actitud de profundo respeto por una de las mujeres. Al final de la danza, con gran delicadeza y cuidado, la acogerá en sus brazos para un abrazo de protección.
A veces, durante la misma música, se puede invitar a los hombres a hacer de nuevo la posición de la Conexión con lo Primordial, mientras que las mujeres realizan su danza de entrega. En todos los casos, se debe proponer en dos grupos para que cada mujer pueda ser acogida al final de su danza.
Esta posición permite recuperar el sentido sagrado de la feminidad. Aquel que ha sido testigo de este abandono también puede conectarse a esta dimensión sagrada del misterio. Cuando el hombre contempla la danza, da gracias por el don de la posibilidad de ver revelada delante de sus ojos la feminidad profunda de sus compaÓeras. Su participación también fortalece el sentido de la protección de las mujeres en posición de entrega total.
La posición no está separada de la danza. En los movimientos, se trata de una búsqueda interior, para encontrar una expresión activa de la receptividad. Música :
18-11 African Sanctus	Fanshawe, David	2:55
Conviene reservar esta musica ónicamente para este ejercicio, a fin de conservar su impacto.
ENCUENTRO CON EL HERMANO
Partiendod e la posicion de Identidad, se extienden los brazos hacia adelante, con el pecho abierto, con el gesto de recibir a una persona con una cordial disposición. Los brazos se extienden todavóa un poco más, mientras se avanza un paso adelante.
La vivencia estimula la actitud receptiva para con los otros.  Este gesto genera una nueva forma de vinculación afectiva.
Esta posición despierta en nosotros una forma de expresión espontanea de la hospitalidad, del recibimiento. Es dar una información completa, llena y entera, de nuestra disponibilidad. La vida cotidiana y la rutina a menudo nos alejan de la celebración del otro cuando llega nuestras vidas. Lo que genera esta posición no es estrictamente una danza sino más bien un encuentro (que por cierto es el ejercicio más adecuado para ofrecer continuación). Música :
03-19 Gloria in excelsis Deo (Riccardo Muti) - Gloria in Re Maggiore - 1, RV 589	Vivaldi, Antonio (1678-1741)	2:23
03-20 Hallelujah - Messiah, HWV 56 - Part II/42	Haendel, Georg Friedrich (1685-1759)	3:40
POSICIONES GENERATRICES - CÓDIGO 3		
		
CONEXIÓN CIELO-TIERRA		
A partir de la Posicion de Identidad, se levanta lentamente el brazo derecho hacia el cielo, simultáneamente se da un paso con el pie derecho. El brazo izquierdo se mantiene con la palma de la mano vuelta hacia el suelo. Los ojos están abiertos o semicerrados. La boca está semiabierta.
En esta posición se recoge la energóa del cielo con la mano derecha y con la izquierda se la descarga en la tierra. El gesto se realiza de manera leve, fluida y pulsante. Para generar la pulsación se hace un ligero, lento y continuo movimiento de flexión de las rodillas.
Objetivo :
Esta posición generatriz induce la vivencia de ser un puente, un ñmÑdiumá, una vóa de conexión entre el cielo y la tierra.  En las simbologóas de distintas culturas, el matrimonio entre el cielo y la tierra, o sea el matrimonio cósmico, simboliza la unión entre lo masculino, lo femenino y la fecundación.  Algunos antecedentes móticos y antropológicos aluden a esta metáfora cósmica.  La unión entre el rey y la reina;  los dos primeros sómbolos del Y' Ching: C¶ißn, el cielo y C¶ußn la tierra;  el matrimonio entre el cielo y la tierra. En la danza de los derviches se realiza esta posición considerada el ñAxis Mundiá.
La posición generatriz Conexión Cielo è Tierra estimula entonces la conexión óntima con las dos grandes fuerzas de la naturaleza:  lo masculino y lo femenino (Yang è Yin). Música :
16-13 Allegro non molto - Concerto 'L'inverno' in Vivaldi, Antonio (1678-1741)	3:40
fa minore -1 (Le quattro stagioni op.8/4, RV 297)
EVOCACIÓN Y LIBERACIÓN DE LA ENERGóA INTERNA
 
De pie, se acercan lentamente las manos abiertas con las palmas vueltas hacia el pecho, donde se apoyan una sobre otra, en gesto de intimidad. En seguida lentamente se abren los brazos, extendiendo levemente el pecho hacia delante, de manera de permitir la expansión del potencial afectivo. Los ojos están cerrados y la boca semicerrada.
Esta posición induce una vivencia de expresión de la energóa amorosa hacia el mundo.
Al final de la posicion y antes de la danza de variaciones, las manos regresan a posarse en el pecho. 
Durante las variaciones, se establece una pulsacion entre los momentos de evocación de la energóa (sensible, con las manos en el pecho, la conexión con uno mismo) y los de liberación (de apertura, ampliación). En los momentos de conexión con uno mismo, evitar enrrollarse sobre uno mismo ahondando el pecho, lo cual podróa causar una vivencia de cerrarse. Música :
18-03 Largo - Concerto in re minore - 2 (Il cimento dell'armonia e dell'inventione op.8/7, RV 242)	Vivaldi, Antonio (1678-1741)	2:13
ELEVACIÓN		
La posición se realiza de pie, brazos junto al tronco, antebrazos levantados en ángulo recto hacia delante y levemente hacia afuera. Las manos con las palmas hacia arriba y los dedos apenas abiertos. La boca semiabierta y los ojos abiertos.  
Cuando la vivencia se intensifica, el pecho se abre un poco mas y la cabeza se echa levemente hacia atras para permitir la elevación de la mirada.
Es un gesto de ñelevacióná que genera una vivencia de levedad. La idea de ñelevacióná alude a una fuerza ascendente de pureza.  Este estado de ánimo está alimentado por la posibilidad de elevarse por sobre las dificultades existenciales y ver los hechos de la vida con una visión de altura, desde un punto de vista de totalidad.
Música :
09-19 Adagio - Concerto Brandebourgeois 1 - 2,  F-Dur BWV 1046	Bach, Johann Sebastian (1685-1750)	4:07
oa('01','21') Air (on the G-string) - Orchester-Suite 3 DDur - 2, BWV 1068	Bach, Johann Sebastian (1685-1750)	5:19
INSPIRACIÓN
De pie en la posicion de Identidad, la mano izquierda posada sobre el pecho. La mano derecha ligeramente hacia adelante, en un gesto extremadamente sensible, como si se tocara el aire. Los ojos abiertos, mirando adelante sin intencionalidad.  
Esta posición genera un estado de incubación creativa, o sea el momento en que se produce el acto creador. Con la mano izquierda en el pecho se alude a la conexión óntima con uno mismo (inspiración) y con la mano derecha se sugiere el inicio de la acción creadora. 
La vivencia de inspiración tiene la cualidad del estado de Ñxtasis creativo que se caracteriza por la emoción de expresarse.
Es como un gesto que se esboza, que toca el aire. Esta posición es tan delicada, tan mónima, que es necesario que la integración afectivo-motriz estÑ bien avanzada. De hecho, sin ella, el gesto no tiene sentido cuando es solo gesto. La mano izquierda sobre el corazón hace justamente referencia a la fuente emocional de la creación. Hacer lo que sentimos. La integración entre la emoción, la inspiración y la realización. La danza que sigue se asemeja a una danza yin, muy sensible en los movimientos, los gestos que delicadamente tocan el aire. Una receptividad sutilmente activa. Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
RECIBIR LA GRACIA		
Sentados con las piernas cruzadas (en posicion de semi-loto), las manos apoyadas sobre las rodillas y las palmas hacia arriba. La cabeza tiene que estar levemente abandonada hacia atrás (sin esforzarse), los ojos cerrados y la boca semiabierta.
Esta posición induce a una vivencia de beatitud que se manifiesta como un regalo, un don recibido: ñla gracia de existirá. La persona puede percibir una sensación de armonía con lo que la rodea y, si la vivencia se hace en la naturaleza, de armonía con el universo. Esta posición generatriz puede ser considerada una forma de meditación.
Esta posición no es seguida por una danza. Sin embargo, existe la posibilidad de introducir cambios cuando se intensifica la vivencia, como movimientos pulsantes de mecerse hacia adelante y atrás, o movimientos suaves de la cabeza. Rolando dice a menudo, cuando presenta esta posición, que la vivencia de la gracia es "descendiente", es decir, que desciende hacia nosotros en respuesta a otra "ascendente", cuando el ser entero se eleva en una actitud de agradecer. En esta posición, no hay nada que hacer, nada que esperar. 
La gracia es lo que le llega a quien dice gracias. Música :
11-14 Consolation nã3 en RÑ bÑmol Majeur (Lento placido) - Six consolations, S 172	Liszt, Franz (18oa('11','18')86)	4:12
oa('11','13')+ Impromptu nã3 in Ges-Dur (Andante) - Impromptus op.90 D 899	Schubert, Franz (1797-1828)	6:18
MAGNETISMO		
De pie, las palmas de las manos vueltas una hacia la otra, se acercan y se alejan, como sosteniendo una esfera invisible. Este gesto tiene que ser realizado muy lentamente, en búsqueda de la percepción de la energóa magnÑtica polarizada entre las dos manos.
Esta posición induce la vivencia de la creación de una esfera de energóa pulsante.
Los ojos están abiertos. La mirada sigue el movimiento de las manos. La danza que sigue consiste en una pulsación de este movimiento con la esfera, y se extiende poco a poco a una danza con la esfera o dentro de la esfera de energóa.
Música :
18-03 Largo - Concerto in re minore - 2 (Il 	Vivaldi, Antonio (1678-1741) cimento dell'armonia e dell'inventione op.8/7, RV 242)	2:13
oa('11','12')+ Liebestrúum nã3 in As-Dur - Liebestrúume, Liszt, Franz (18oa('11','18')86) S.541	4:31
 
ILUMINACIÓN
A partir de la posicion de Identidad, la persona junta ambas manos unidas sobre su pecho en una actitud de intimidad. Los ojos abiertos. Las manos se separan levemente y se dan vuelta las palmas hacia delante con extrema sensibilidad.
Este gesto produce una intensificación sutil de la percepción. La posición crea un espacio para la contemplación y revela el esplendor del universo.
Esta posición representa el resultado posible de la conexión profunda con uno mismo, en el sentido de que la iluminación se inicia con un estado de claridad interior. La danza consiste en crear un espacio de contemplación, como si se estuviera mirando también con las manos y con el corazón. El estado de iluminación se traduce por una sensación de ligereza y de transparencia. 
Es interesante proponer el "bautismo de luz" antes de esta posición generatriz. Música :
17-16 Ave Maria (after Johann Sebastian Bach)	Gounod, Charles (1818-1893)	3:23
11-14 Consolation nã3 en RÑ bÑmol Majeur (Lento placido) - Six consolations, S 172	Liszt, Franz (18oa('11','18')86)	4:12
oa('11','13')+ Impromptu nã3 in Ges-Dur (Andante) - Impromptus op.90 D 899	Schubert, Franz (1797-1828)	6:18
DANZAS SECUENCIALES		
 
Estas danzas combinan diferentes lóneas de vivencia y se realizan siguiendo una secuencia especófica que, en un proceso progresivo de integración, llevan a profundas vivencias de contenido tanto gestual como simbólico. Se trata de verdaderas coreografóas del momento, y estimulan fuertemente la expresión y el compromiso genuino con la danza.
DANZA DE LA SEMILLA
La ñVivencia de Crecimientoá es una de las más profundas y bellas que un ser humano puede experimentar. Desarrollar cada dóa las potencialidades desconocidas o no reveladas. Crecer hasta el fin de nuestros dóas, florecer y dar frutos. De este modo, la vida humana se puede parecer a un árbol que brota de una semilla, se hace fuerte y fecunda, nutrido por la linfa inmemorable del amor. Florece y da frutos en forma tan generosa, que sus ramas se rompen por el peso de sus frutos, hasta su muerte.
La semilla contiene el proceso de la vida y se transmite a través de millones de aÓos. En cada etapa nacen nuevos brotes, nuevas capacidades. En cada edad recibimos la gracia de nuevas visiones. Todos los momentos de nuestra existencia tienen un valor intrónseco que es necesario saber descubrir. Descripción :
La persona se coloca en el suelo, en la posición de la semilla: de rodillas, el pecho completamente inclinado hacia delante, la frente hacia abajo y con sus brazos debajo de ella, o bien alrededor de sus muslos (segun sus capacidades fósicas, se puede ajustar la posición;  la clave está en que parta de una posición "recogida" hacia un despliegue gradual y ascendente). No se trata de "representar" imitándolo, el desarrollo de un pequeÓo árbol. Es la música que debe proporcionar el ómpetu para el crecimiento, no nuestra voluntad. Debemos llegar a ser la música en só y desplegarnos hacia arriba, desde las entraÓas oscuras de la tierra hasta la luz. "Algo" crece en nosotros. Nuestra sabiduróa es permitir que la energóa ascendente se manifieste.
Objetivo :
Volver a conectarse con las infinitas posibilidades de crecer y evolucionar desde el propio potencial. El ejercicio de crecimiento lleva a una vivencia de una fuerza excepcional.
Música :
16-13 Allegro non molto - Concerto 'L'inverno' in Vivaldi, Antonio (1678-1741) fa minore -1 (Le quattro stagioni op.8/4, RV 297)	3:40
17-07 Clair de lune [Orchestral version] Suite 	Debussy, Claude (1862-1918) Bergamasque pour piano - 3	4:42
ECLOSIÓN (o 'Despliegue")
Descripción :
La danza de la eclosión a la vida es una danza muy cercana, en su esencia, a la danza de la semilla. Sin embargo, se realiza con acompaÓamiento: con protección y especialmente con la estimulación ofrecida por el otro. Es un compañero que estimula la eclosión a la vida con estimulación delicada y la orientación por las caricias y un toque muy sensible.
La persona (el danzante) se coloca en el suelo en una posición semi-fetal (diferente de la posición inicial de la danza de la semilla, que es de rodillas e inclinado sobre só mismo y en una posición de profunda conexión con la fuerza visceral, que hace posible y natural la expansión ascendente que seguirá).
En la danza de eclosión a la vida, la posición semi-fetal se debe a que es la presencia y el estómulo ofrecido por el otro (el cuidador) que constituyen la fuerza de inducción del despliegue. Las fuerzas no provienen de nosotros, sino de la receptividad a los estómulos emocionales del mundo. Por lo tanto, la persona que quiere desplegarse dÑj´ un poco suspendidos sus propios impulsos y tendencias de crecer por só mismo. No es pasiva, sino receptiva. Se dÑj´ llevar por las fuerzas intrónsecas del nacimiento y de la expansión en su encuentro con el mundo.
El cuidador empieza a tocarlo con cuidado y movimientos muy delicados, transmitiÑndole su calor, su contacto, su presencia. Su objetivo es entrar en profunda sintonía con el danzante con el fin de facilitar el movimiento, que se desarrolla gradualmente hasta desplegarse y amplificarse. Lo ayuda a asegurar que este despliegue se haga en continuidad y con la fluidez de una secuencia natural (como el florecimiento de una flor).
Estos delicados toques y caricias ayudan a dar apoyo y orientación a abrirse hasta encontrar la posición acostado de espaldas y abierto, listo para ser fertilizado por el aire y la luz. Continuando con el acompaÓamiento con el contacto y los abrazos que le dan amor y apoyo, se lo ayuda a plegar las piernas (para preparar el momento de levantarse) y el ayudante se coloca detrás (hacia la cabeza) para levantar al danzante a la posición sentado sosteniendo con firmeza su espalda y la cabeza. Siempre con abrazos y comunicando seguridad, se lo ayuda a ponerse de pie. De hecho, por su apoyo, el cuidador se coloca en una posición de tutor y de contenedor que ayudará al danzante a desplegarse. Tan pronto como el danzante muestra los primeros intentos de abrir gradualmente sus ojos, el ayudante le muestra los primeros pasos, lo incentiva a caminar y luego a danzar. A danzar la vida. Luego viene el paso crucial de comunicarle el coraje y el encanto de danzar solo, a dejar ir la mano, a alejarse para danzar su propia vida, no danzando para el compañero que lo ayudó, pero en el mundo y para el mundo. Música :
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
DANZA DE LA CREACIÓN		
Este ejercicio pertenece a la Línea de la Creatividad y es distinta de la Danza de Brahma, la cual es puramente simbólica. Se comienza en la posición de la semilla, inclinándose sobre el propio cuerpo, con la cabeza agachada.
La música ñFinlandiaá de Sibelius, transmite una potencia creciente al movimiento. El participante asciende con determinada energóa, siguiendo ciertas etapas que reiteran la cosmogonóa de la aparicion del hombre.
Descripción :
El origen del mundo es un enigma insondable para la mente humana.
Algunas religiones orientales intuyen un movimiento primordial de un gesto. La Creación emerge de una danza generatriz.  En otras religiones, como en el GÑnesis judeocristiano, el origen del mundo es el soplo divino, la voz, el aliento de la vida, la palabra que designa el nombre de las cosas, dándoles identidad y rescatándolas de lo informe, del caos.
Las cosmogonóas en distintos pueblos tienen, por lo tanto, una filiación ñcorporalá o bien ñespiritualá. Espóritu, respiración, aliento, alma, soplo, prana universal.
La danza de Shiva, que destruye y crea los Universos, pertenece a las cosmogonóas del movimiento. El GÑnesis bóblico, que dice: ñEn el principio fue el verboá, pertenece a la lónea cognitivo-verbal.
Posiblemente estas dos lóneas representan las opciones iniciales del drama de la consciencia frente a un misterio insondable. Más, si somos consecuentes con la intuición de una unidad primordial, la bifurcación de lo corporal y de lo espiritual no tiene razón de ser y representaróa más bien una catástrofe antropológica: la primera gran disociación.
Sin embargo, en todas las cosmogonóas se parte de un principio único, que luego se desdobla y pasa a ser una dualidad, trinidad o cuaternidad. Ese principio único puede ser un demiurgo solitario, un dios innominado e ininteligible, el huevo primordial, la simiente de la vida, etc.  Es decir, se describe el proceso que va de la unidad a la diversidad y que ha sido llamado por los filósofos la ñUnidad Múltipleá. Asó, en la cosmogonóa egipcia, el dios Ra separa a los hermanos de Nut y Geb, creando el espacio de la vida y la bóveda celeste. En Oriente, el Tao está formado por la dualidad Ying-Yang.  N el GÑnesis bóblico, Jehová separa los cielos de la tierra, la luz de las tinieblas. Las cosmogonóas griegas intuyen los principios cósmicos, llegando a la cuaternidad de Anaximandro, formada por los elementos Tierra, Aire, Fuego y Agua.
El principio general de las cosmogonóas consiste en la diferenciación progresiva a partir de un principio único que, al diversificarse, va generando una realidad cada vez más compleja. En el sentido de Teilhard de Chardin, se va perfeccionando evolutivamente la creación, desde lo simple a lo complejo, desde lo indiferenciado a lo diferenciado; mientras en el Oriente este proceso es cóclico y representa la sucesión milenaria de revoluciones kármicas. En el Cristianismo este proceso es lineal y se desarrolla históricamente para terminar con la Parúsia, el regreso de Dios para el Juicio Final.
Frente a la dificultad de unificar la experiencia cosmogónica es un sentido abarcador, he tomado los elementos más universales para reproducir en una danza, la vivencia personal de la creación del mundo, las series de movimientos que conducen del caos al cosmos. Este proceso, en nuestra concepción, no se desenvuelve en un ciclo cerrado o lineal; responde a un modelo evolutivo en espiral logarótmico. El Universo, así, se perfecciona a través de sucesivos procesos de integración en circuitos vitales cada vez más diferenciados. El mecanismo integrador es el amor comunitario, la conexión con la vida. Objetivo :
Inducir la vivencia de la creación cosmogónica y despertar en el danzante la potencialidad y exaltación creadora.
Observaciún :
Tiempo total de la musica 8:33. Version del CD 14 de Marcelo Mur (antigua coleccion IBF). Etapas de la Danza :
1 Semilla primordial
El dios-semilla, respirando en el espacio cósmico, comienza a despertar y  crecer, manifestando sus potencialidades.
2 Fecundacián de los espacios con la energóa genital Los movimientos expresan la expansión de la fuerza genital.
3 Aparicián de la dualidad
Danza Yin y Danza Yang. Del caos originario se separan el Principio Femenino y el Principio Masculino.
1:02 - Yin
1:21 - Yang
1:58 - Danza yin/yang
 
4 Danza integrada Yin-Yang
Formada la dualidad se produce el matrimonio cósmico, las nupcias entre lo femenino y lo masculino, entre la luz y las tinieblas, entre el cielo y la tierra.
3:04 - Separación del Cielo y de la Tierra
3:34 - Separación de la Tierra y de la Aguas
5 Creacián de los 4 elementos
La Tierra, el Agua, el Fuego y el Aire. De la dualidad surge la proliferación de lo múltiple, en un proceso de diferenciación cada vez mayor.
3:44 - Tierra
4:04 - Agua
4:29 - Fuego
4:50 - Aire
6 Creacián del firmamento. Creacián de plantas y animales
5:00 - Creación del firmamento
5:16 - Creación de plantas y animales
7 Aparicián del hombre en constante evolucián
5:38
8 Formacián de la comunidad humana.
Triunfo del amor
7:16 Descubrimiento des prójimo y primeros rituales de encuentro y solidaridad 7:46 - E triunfo del amor®hasta el final Música :
15-19 Finlandia 'Symphonic poem' op. 26 (Munih) Sibelius, Jean (1865-1957)	8:34
Minotauro
DAR Y RECIBIR LA FLOR
Descripción :
Es un ejercicio de a dos. Un compañero hace el gesto de ofrecer al otro una flor. El otro hace el gesto de recibirla. Los gestos mómicos de dar la flor indican si Ñsta es sacada del suelo, del aire o de alguna parte del cuerpo (desde el corazón, por ejemplo). Al gesto de recibir, se agregan los gestos que indican el lugar donde el compañero pone la flor en su cuerpo. Luego se invierten los papeles. Objetivo :
Se estimula la expresión creativa mediante la mómica gestual y la expresividad.
Se induce vivencia en la Línea de la Afectividad, al establecer una forma de comunicación gestual que expresa la relación entre el acto de dar y el de recibir. Activa en el nivel simbólico estas dos funciones afectivas fundamentales. Observaciún :
A través de este ejercicio se revelan aspectos caracterológicos de los participantes, por ejemplo: Quien toma la Flor: ©De que lugar se toma la flor?, ©Del cielo, de la tierra, de la mente o del corazón?. Quien la recibe: ©En que lugar de su propio cuerpo coloca la flor?, ©En el pelo, en el pecho, en la pelvis, etc.?. De esta forma se crea una fenomenologóa simple y clara de dar y recibir. Tiene un efecto simbólico inconsciente, que está en relación con el equilibrio de estas dos funciones.
Por otra parte, esta danza es una representación de gran transferencia afectiva, que tiene un carácter poético en el gesto de dar y recibir una flor.
Música :
17-09 MÑditation - Entracte de l'acte II (OpÑra Thañs)	Massenet, Jules (1842-1912)	5:12
15-18 Reigen Seliger Geister (From 'Orfeo ed Euridice')	Van Leer, Thijs	7:49
09-06 Rosa	Poyares, Carlos	3:47
DANZA DE LA AMISTAD
La amistad es uno de los sentimientos más profundos y nobles del ser humano. En la amistad se combinan la afectividad, el sentimiento estÑtico, la lealtad y la sintonía de la conciencia.
Cuando se preguntó a Ronald Laing: ñ©QuÑ es un hombre enfermo?á, él respondió: ñUn hombre enfermo es quien no tiene amigosá.
La amistad es un sentimiento que permite al otro ser libre. No hay celos en la amistad, hay profundo respeto por lo que el amigo siente. La amistad es, como vemos, un sentimiento complejo que se profundiza con el pasar del tiempo.
Platón expresaba: ñNo hay que dejar crecer las malezas en el camino de la amistadá. Esto significa que hay que cuidar al amigo. ñAmigo es algo para guardarse en el lado izquierdo del pecho bajo siete llavesá, dice la canción brasilera de Milton Nascimento.
Durante la amistad se crea una red mental, un código que sólo lo comprenden los amigos. La fecundación de cerebros es un fenómeno real, y se manifiesta en aspectos intelectuales y existenciales.  La amistad es esencialmente creadora.
Un hombre sin verdaderos amigos es afectivamente inconsistente. Tener un amigo es una bienaventuranza, un maravilloso don de la existencia.
En Biodanza se propone la ñDanza del Amigoá que tiene los siguientes pasos:
1)	Encuentro del Amigo.
2)	Mirar el Mundo Juntos.
3)	Oposición.
4)	Sembrar Juntos.
5)	Cosechar Juntos.
6)	Escuchar el Corazón del Otro.
7)	Llevar Siempre al Amigo en el Corazón, aunque se encuentren lejos. Etapas de la Danza :
1 Descubrir al amigo
Un sentimiento de simpatóa y afinidad inicia la amistad. A veces, esta afinidad  puede tener un componente de admiración o de complementación psicológica. 
Las personas se elogen para esta danza a dos. El grupo se mezcla y cada uno se pasea por el mundo, disponible. En una mirada, los amigos se descubren y se "reconocen" en una danza de encuntro progresivo de maravillamiento recóproco. 2 Mirar el mundo juntos
Es interesante observar que, generalmente, los amigos tienen una visión semejante  sobre el mundo, a pesar de sus diferencias. Por esta razón sienten agrado en compartir la compaÓóa. Sentirse verdaderamente acompaÓado brinda felicidad.
Las personas parten juntas a descubrir el mundo con su mirada común, admirando y maravillándose de las mismas cosas. 3 Oposicián
Eventualmente los amigos tienen conflictos y puntos de vista diferentes frente a la  realidad. En estos casos se produce un desacuerdo que, durante la danza, se expresa en una confrontación de fuerzas oponiendo recíprocamente los antebrazos.    A través de esta dialÑctica de oposición se alcanza un consenso debido a que entre los amigos no hay rigidez. Esta lucha termina con un abrazo de reconciliación. 4 Sembrar juntos
Se trata de realizar algunas tareas o proyectos juntos y con objetivos comunes. Crear juntos en base al respto de la diferencia, que la riqueza de la amistad. Relizan juntos gestos de creación, de proyectos con objetivos comunes, ayudándose. 5 Cosechar juntos
Consiste en recibir el producto del esfuerzo común, sin egoósmo. Se trata  de una celebración de la unidad de acciones recíprocas.
6 Escuchar el corazán del amigo
Es ser capaz de identificarse con los sentimientos del otro. Empatóa, comprensión y comunión son caracterósticas afectivas de la amistad. Cada uno escucha el corazón del otro.
7 Llevar siempre al amigo en el corazán
Consiste en una forma de belleza interior que conserva la fidelidad del  sentimiento, el recuerdo y la gratitud recíproca, a pesar de estar muchas veces distantes. Cada par de amigos se separa después del último abrazo y parte al encuentro de otros amigos. Música :
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
17-09 MÑditation - Entracte de l'acte II (OpÑra Thañs)	Massenet, Jules (1842-1912)	5:12
11-07 MÑditation de Thañs (d'aprís Jules Massenet)	Zamfir, Gheorghe	5:07
DANZA DE AMOR 1 - CONDUCTA DE LA PAREJA ESTABLE
Es una danza secuencial realizada en pareja que tiene significados importantósimos para la convivencia amorosa. Descripción :
Cada participante elige un compañero para realizar la danza. La elección responde a un criterio de afinidades, Ñsta es intuitiva y constituye una especie de quómica emocional donde se mezclan simpatóa y atracción.
Objetivo :
Representa un conjunto de conceptos básicos para descubrir y conservar el amor en pareja. Si el participante pudiera integrar los principios que están implócitos en la secuencia de los movimientos de esta danza, tendróa grandes posibilidades para la felicidad en la vida de pareja. Etapas de la Danza :
1 Descubrimiento de la persona amada
Tiene un carácter epifánico, la aparición de algo maravilloso. Epifanóa es la revelación. Las dos personas, a distancia, establecen la conexión a través de la mirada y se acercan progresivamente hasta llegar a tomarse de las manos. 2 Ocupar los espacios vacóos
Se trata de una Danza de Fluidez en Pareja en la cual cada uno introduce los brazos ocupando los espacios vacóos que se producen durante la realización de los movimientos. Esta etapa simboliza el complemento recóproco.
3 Caricias sensibles durante la danza de fluidez en pareja
Tiene un simbolismo erótico: la intimidad erótica viene de la complementaridad. 4 Proteccián
Uno de los integrantes de la pareja se coloca atrás y abraza con firmeza al otro, mientras la persona protegida hace gestos de fragilidad, pero sintiendo paulatinamente la fuerza de la protección recibida. Las posiciones se invierten y se repite el mismo ritual. El significado de esta etapa es de estar disponible para cuidar al compañero en momentos de fragilidad, ofreciÑndole apoyo y contención afectiva.
5 Sostener al otro
En la convivencia siempre hay que cargar el peso y las responsabilidades. En este caso, el ejercicio consiste en sostener al compañero con la espalda, en un acto que no tiene que ser violento, sino dulce, en el que uno se extiende sobre la espalda del otro que está inclinado hacia abajo. Se realiza en forma recíproca. Esta etapa se hace con precisión y concentración. Quien recibe el peso del compañero puede doblar levemente las rodillas para mantener el equilibrio. Las diferencias de carácter y temperamento que hay entre la pareja muchas veces constituyen un ñpesoá existencial. Sostener al otro consiste en aguantar estas diferencias en la espalda, con comprensión y afecto.
6 Escuchar el corazán del otro
Los amantes escuchan recíprocamente el corazón del compañero; primero uno, después el otro. El simbolismo es de comprensión afectiva: saber lo que el otro siente, adivinar lo que siente. 7 Autodonacián
Las parejas se disponen uno frente al otro, tomados de la cintura. Uno sostiene con firmeza y seguridad al otro, quien se abandona hacia atrás. Este movimiento también es recóproco.
8 Abrazo
En este momento los amantes establecieron una relación muy profunda e intercambian un abrazo. El simbolismo es de comprensión y aceptación recíproca completa.  
Cuando las personas cumplen estos momentos arquetópicos en su convivencia amorosa, generalmente la pareja queda unida.
Música :
11-19 A noite do meu bem	Creuza, Maria	2:41
10-12 Feelings	Albert, Morris	4:01
12-12 GraÓas a deus	Creuza, Maria	3:40
oa('02','09') Learning To Love You	Harrison, George	4:13
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
DANZA DE AMOR 2 - LA SEPARACIÓN Y RECONCILIACIÓN
 
El aprendizaje fundamental de esta danza es que la separación tiene que ser amigable y nunca violenta. A veces un amor se puede transformar en una gran y profunda amistad. Etapas de la Danza :
1 Separacián
Los amantes, uno frente al otro y tomados de las manos, comienzan lentamente a separarse, sin violencia pero con dolor y tristeza.
2 Sufrimiento y nostalgia
Los protagonistas realizan una danza solitaria, expresando dolor y sufrimiento.
3 Bôsqueda de un nuevo amor
Los protagonistas caminan por el mundo en búsqueda de otras opciones amorosas y hacen danzas de seducción delante de algunos miembros del grupo. Estos encuentros tienen un carácter pasajero, de algo sin fuerza, sin permanencia.
4 Redescubrimiento del amor en la multitud
DespuÑs de varias pruebas sin logros, los protagonistas se descubren de nuevo en la multitud; se sienten fuertemente atraódos el uno del otro. Se acercan en feedback hasta abrazarse.
5 Encuentro sensual con caricias muy intensas
Un miembro de la pareja se pone atrás y posee al otro, haciendo movimientos puramente genitales. Se realizan otras expresiones de contacto, incluyendo también aquellas en el piso. Esta etapa representa simbólicamente una apasionada posesión.
6 Reconciliacián
Los amantes se abrazan dulcemente, creando una sensación de paz y armonía. DespuÑs pasean juntos por el mundo tomados de las manos. Música :
14-19 Is He The One	OST Somewhere In Time	3:11
13-17 Medo de Amar Nò 2	Creuza, Maria	3:53
12-15 O Amor Ñ chama	Caymmi, Nana	4:34
DANZA DE AMOR 3 - POSICIONES SECUENCIALES DE PLACER
Es una sóntesis de las posiciones del acto sexual inspirada en el Kamasutra y de la Ananda Ranga. El  número de las posiciones obviamente está reducido y constituye un punto de partida para aplicar la fantasía y creatividad en el encuentro sexual.
Las etapas aquó referidas se realizan pasando de una posición a otra con fluidez, para evitar actitudes mecánicas en el acto sexual. Es necesario que los participantes descubran la creatividad en el acto de amor y no caigan en la monotonóa, que termina por disminuir la fuerza de la atracción en la pareja.
La Danza de Amor 3 tiene un carácter estrictamente simbólico y didáctico, de manera que su realización resulta solamente a nivel figurado y no realista. Se realiza siguiendo una estructura gestual de la postura, que contribuye al aprendizaje de nuevas adaptaciones corporales durante el acto sexual. Objetivo :
El objetivo didáctico de la Danza de Amor III es que las personas tomen más iniciativas en el contacto, que no sean repetitivas ni monótonas en su sexualidad,  y que utilicen la fantasía erótica. Las propuestas implócitas en este ejercicio, en la realidad, hay que hacerlas con elementos fetichistas: ropa interior especial, etc.
Etapas de la Danza : 1 Caricias preliminares
Es una especie de preparación al erotismo. Los amantes están sentados, uno frente al otro, acariciándose.
2 El hombre arriba
Ambos están acostados, pero el hombre está sobre la mujer. Se pueden mirar a los ojos e intercambiar besos, los genitales están en contacto. Esta posición tiene la ventaja de ofrecer una mayor personalización de la relación. La mujer, al estar abajo, puede abrir las piernas, levantar la pelvis y exponer los genitales. Es una posición de dominio del hombre sobre la mujer, por ende el hombre tiene que evitar caer con todo su peso sobre la compaÓera y debe apoyarse sobre sus  manos. Se desarrollan caricias recíprocas que lentamente llevan a los cuerpos a la próxima posición.
El hombre posee a la mujer desde atrás. Es una posición más anónima, más instintiva, menos personalizada, pero que tiene la ventaja -para el hombre- de poder disfrutar el placer del contacto con los glúteos femeninos, la posibilidad de tomar los senos de la compaÓera y también de masturbarla. Muchas mujeres prefieren esta posición en vez de la frontal, porque se excitan mejor y porque pueden masturbarse (o ser masturbadas por el hombre).
3 El hombre posee a la mujer desde atrús
Es una posición más anónima, más instintiva, menos personalizada, pero que tiene la ventaja -para el hombre- de poder disfrutar el placer del contacto con los glúteos femeninos, la posibilidad de tomar los senos de la compaÓera y también de masturbarla. Muchas mujeres prefieren esta posición en vez de la frontal, porque se excitan mejor y porque pueden masturbarse (o ser masturbadas por el hombre).
4 Posicián invertida o en oposicián
Cada uno de los amantes está con la boca cerca del genital del otro.  Es una posición muy importante porque revela la confianza recíproca de asumir totalmente la genitalidad del otro y muchas veces sirve para preparar el orgasmo. Este ejercicio es una excelente preparación para una penetración más óntima. Lentamente se pasa a la siguiente posición.
5 La mujer arriba
El hombre acostado en el piso, boca arriba, recibe a la mujer que se sienta sobre sus genitales, en posición dominante. La mujer tiene la posibilidad de mayor libertad de movimiento, sin tener la opresión del peso del compañero. Además, es ella quien conduce su orgasmo haciendo los movimientos que necesita.  A algunas mujeres les gusta solamente esta posición; es un hecho natural que habla del placer de dominar el hombre. Hay un elemento de autoafirmación.
6 Posicián mixta
Es una de las más importantes. La mujer que está acostada boca arriba, flexiona la pierna izquierda. El hombre, que está arriba, pasa su pierna derecha fuera de la pierna flexionada de la mujer. Esta posición es altamente personalizada, porque los rostros están uno frente al otro y porque el hombre tiene acceso a los senos.
La mujer expone totalmente sus genitales; la penetración del hombre es completa y la mujer experimenta intensamente su virilidad. El hombre siente el contacto de las nalgas de la mujer y tiene acceso al rostro y a los senos; por eso se denomina ñposición mixtaá.
7 Posicián de lado
El hombre y la mujer abrazados con mucha delicadeza, están acostados reposando uno al lado del otro, con ternura, paz y serenidad.
Música :
10-12 Feelings	Albert, Morris	4:01
12-12 GraÓas a deus	Creuza, Maria	3:40
19-05 I Wanna Be Loved	Horn, Shirley	4:37
oa('02','09') Learning To Love You	Harrison, George	4:13
13-17 Medo de Amar Nò 2	Creuza, Maria	3:53
12-15 O Amor Ñ chama	Caymmi, Nana	4:34
TRANCE  DE  SUSPENSIÓN
La situación  simbólica del trance de suspensión es que permite recrear de manera ritual las condiciones de la gestación intrauterina:
El grupo representa  la matriz caliente, segura, protectora en la que la persona se encuentra en una situación de dependencia total (con como corolario la confianza) y delega totalmente a sus compañeros la responsabilidad de lo más primordial de su identidad:  los comportamientos de vigilancia para sobrevivir, y por ende todas las funciones biosociológicas que les son asociadas. El grupo toma todas las iniciativas que tomaróa la persona y realiza  todos los actos normalmente a cargo de conciencia de vigilia y de vigilancia  necesarias para sobrevivir (equilibrio, motricidad voluntaria, evaluación del medio ambiente por la percepción para tomar la decisión). Lo que permite  a la persona abandonarse (una madre simbólica cuida) para que se activen las funciones ya no de vigilancia sino de metabolización, de reparación orgánica : efectivamente, en la matriz el bebÑ recibe todo lo que necesita (calor, alimento, protección, estómulos) sin tener que anticipar sobre su necesidad ni instaurar  una estrategia para su satisfacción.
En este espacio, en un lapso de tiempo muy corto desde el punto de vista de la duración, pero totalmente dilatado del punto de vista de la vivencia, la persona realiza una suerte de  vuelta hacia la fuente de sus propias potencialidades, a  una etapa anterior a su desarrollo, sobre todo anterior a los ñrasguÓosá debidos al proceso mismo de enfrentamiento de diferentes dificultades y condicionamientos resultantes de todo ser en el mundo. Estar en el mundo exige una adaptación (fósica, fisiológica, afectiva y del comportamiento). Si esta adaptación tiene como efecto ñmodelará el cerebro  y enriquecer las conexiones sinápticas (sin el otro no hay identidad), esta engendra stress múltiples de orógenes variados que constituyen lo que Rolando Toro nombra como los ñecofactores negativos del desarrolloá.
La regresión inducida en Biodanza constituye una suerte de ñdesdiferenciacióná en comparación con el proceso ontogenÑtico, y este constituye un proceso de diferenciación evolutiva.
En esta ñvuelta hacia la fuenteá la persona retoma contacto con el argumento vital primero, en la medida en que las condiciones, a la vez internas (la capacidad a abandonarse no constituye un desafóo sino un placer) y externas  (la cualidad acompaÓante del grupo) están reunidas.
Es la razón por la que el facilitador estará atento para crear las condiciones de lo que constituye un verdadero ritual de renacimiento. Estas condiciones no son un intento de crear la perfección: toda exigencia de perfección de las condiciones tanto de parte del facilitador como del grupo o de la persona que va a vivenciar la propuesta es la expresión de una rigidez que impedirá la vivencia de abandono.
Bastará con invitar a todos los protagonistas a estar presentes lo mejor que puedan, facilitando, en la vivencia de preparación, a la vez la inocencia, la liviandad, la aceptación, la receptividad Y la intimidad, la sensibilidad, el don de só, la generosidad, la empatóa.
Huelga decir entonces que el ejercicio será propuesto a grupos que ya hayan realizado un proceso de iniciación en Biodanza por lo tanto de integración afectiva importante.
Con respecto a la invitación efectuada al alumno, hay varias alternativas posibles:
-Se trata de un dóa particular, y el grupo ofrece la ceremonia a la persona (cumpleaÓos, momento existencial clave). En este caso, la persona sabe que va a vivir  este trance de suspensión y es importante que estÑ de acuerdo.
-Se trata del proceso normal del grupo y en ese caso, el facilitador dÑj´ el centro libre a toda persona que desee  vivir esta ceremonia. Deberá solamente explicar que una sola persona podrá vivirlo. Es una razón suplementaria para asegurarse de la integración afectiva del grupo en la medida en que todos serán llamados a cuidar a uno solo, aún cuando ellos hubieran deseado estar en su lugar. En esta situación, conviene valorizar mucho la experiencia de los que componen la matriz.
En estos dos primeros casos, se aconseja precisar al grupo que conviene ofrecerse a esta ceremonia cuando esta no constituye un desafóo. Efectivamente, el miedo será una barrera casi con certeza para el abandono.
-Se trata de un ñdesafóoá del Proyecto Minotauro o del órbol de los Deseos. En este caso, el facilitador sabe cual persona será llamada, según la encuesta realizada y de su propia intuición. La persona debe tener la posibilidad de aceptar o rehusarse.
La explicación se hace previamente y todas las etapas son descriptas, si fuera necesario representadas (la primera vez) para que el facilitador no tenga más que hablar- o muy poco, durante la ceremonia. Si debe hacerlo, tendrá una voz suave, contenedora y tranquilizante. Para evitar  una exigencia de perfección, puede informar a la persona que recibirá  la ceremonia, que cada uno hará lo mejor posible y que todo el grupo pide ternura por las eventuales  imperfecciones  del acompaÓamiento. Efectivamente,  ciertas personas aumentan su baja autoestima, en el caso en que el grupo manifieste torpeza (ñtenóa que pasarme a mó. De todas maneras, mi madre nunca supo ocuparse bien de mó®áetc.
De  la misma manera, será conveniente  precisar que como en todo ejercicio de Biodanza, se trata de un proceso y no hay motivo para juzgar la propia experiencia en tÑrminos de ñtrance aprobadoá, de ñbuen tranceá o ñmal tranceá. La persona no tiene en absoluto el dominio conciente o voluntario sobre la profundidad de su abandono.
El facilitador debe asegurarse que el lugar de trabajo estÑ suficientemente protegido en tÑrminos de intimidad y que no hay observadores. Observaciún :
El facilitador puede sugerir que la persona que ha vivido la experiencia, pueda escribir en los dóas siguientes, su experiencia, sus sueÓos, sus deseos y eventualmente sus tomas de conciencia. Si la experiencia tuvo lugar en una sesión semanal, es esencial que la persona estÑ presente en la sesión siguiente y Ñsta se abra con un tiempo de compartir el relato existencial.
Músicas asociadas por secuencia : 
≠ Adagio String Quartet •, Schubert è (abandono y giros en la matriz)
≠ Ave Maria • - Gounod (Suspensión y giro por le grupo)
≠ Ave Maróa • - (Depositar a la persona en el suelo y crear el cordón umbilical)
≠ Bilitis • - Zamfir è (Caricias continentes en todo el cuerpo)
≠ Adagio • A. Marcello è (Caricias continentes en todo el cuerpo)≠ L¶horloge de ma vie • JP Posit è Abrazos sucesivos de pie
≠ L¶horloge de ma vie • JP Posit è Primeros pasos y presentación al grupo.
≠ La Primavera • Vivaldi è Integración a la comunidad y celebración.
≠ Gloria • Vivaldi è Integración a la comunidad y celebración. Etapas de la Danza : 1 Creacián de la matriz
Formar el córculo, las personas se toman de la cintura, hombro contra hombro. El córculo es la encarnación de la matriz en la que la persona se abandona. Es conveniente  pedir a las personas que aseguren su estabilidad, sacarse lo anteojos y toda otra joya que pueda causar una sensación desagradable.
2 Abandonarse en la matriz del grupo
Abandono en el centro del útero del grupo: dar giros sobre só en el sentido antihorario apoyándose sobre la pared formada por el grupo. Simbolismo: regresión al origen (remontarse en el  tiempo). El facilitador entra en el córculo con la persona y la invita con palabras suaves que la invitan a vivir esta ceremonia de retorno a la fuente de aquello más inocente que existe en ella, vivo y naturalmente sano. Es conveniente mostrar claramente a la persona la modalidad de esta rotación. Las piernas están flexionadas, la  boca relajada. La persona puede elegir una persona que será quien le sostenga la cabeza. Esa elección puede ser hecha por el facilitador.
3 Suspensián y giros
Levantar a la persona cuando sus piernas ya no la llevan (ocho personas por lo menos) y hacer entre 4 y 8 giros siempre en el sentido antihorario. Simbolismo: remontarse al origen de la propia vida. Este porte debe hacerse con sensibilidad y seguridad. Es entonces importante que el facilitador designe a las personas capaces de asegurar este porte con calidad. Deberá indicar previamente y de manera clara la modalidad de este porte. El cuerpo de la persona debe estar relajado. Sus brazos deben reposar sobre su vientre y no caer a los costados o ser bloqueados por los portadores. El porte de la cabeza debe ser particularmente sensible. Es conveniente también invitar a las personas portadoras a tener la espalda derecha para no transmitir sus propias tensiones. Los giros no son  demasiado rápidos ni lentos. Pueden estar seguidos de algunos balanceos (longitudinales). Efectos fisiológicos en el oódo interno con pÑrdida de referencias espacio-temporales.
4 Poner en el suelo y la formacián del cordán
Recostar a la persona (si es posible sobre una manta o una colchoneta). Simbólicamente es el momento de reposo donde cesa  toda solicitación, toda estimulación. Es importante el piso no estÑ fróo, lo que podróa estimular micro temblores para calentar el cuerpo.  Desde el momento en que la persona se recuesta en el piso, las personas que forman la  matriz, y la mantienen formada durante toda la ceremonia descienden también al piso (se sientan juntas en córculo manteniendo el contacto entre ellas.
5 Ahondamiento del trance
El facilitador sostiene la mano de la persona de manera de cerrar el cordón formando por los participantes que se toman de las manos. Simbolismo del cordón umbilical. Toda experiencia de trance (de viaje) está asociada al sómbolo del Psicopompo: el que se ocupa del lazo entre losá diferentes mundosá y asegura el retorno. Es el hilo de Ariadna que permite a Teseo entrar en el laberinto pero sobre todo del cordón umbilical que une el feto a la madre y le asegura el alimento que necesita para su vida en el seno de esta matriz. Es durante esta fase que la persona vive su trance (su viaje al origen). Se pueden observar movimientos de sus párpados, la profundidad de su respiración y en algunos casos un sudor ligeramente fróo en la palma de sus manos (lo que indica una fuerte actividad del sistema nervioso autónomo). Es una fase delicada. Si el facilitador observa una inversión de la experiencia hacia algo desagradable y que podróa tornarse disociante, puede abreviar la experiencia, ofreciendo abrazos, sentando a la persona e invitándola suavemente a abrir los ojos. Es por esto que al principio de la ceremonia, hay que aclarar que no hay un resultado a alcanzar, ni fracaso ni Ñxito en esta vivencia.
6 Restituir la identidad por las caricias
Caricias de contención: caricias que marcan el lómite corporal. Simbolismo: contacto lento, profundo y envolvente que prepara a la persona para sentir sus propios lómites corporales, y por lo tanto a ñrecuperará progresivamente su identidad. Es importante indicar de no apoyar las manos sobre la cara ni el sexo. Efectivamente, el rostro es muy identitario y solicitarlo por el contacto en ese momento llevaróa a una activación demasiado brusca. Las caricias sobre el sexo podróan tener un doble mensaje: la persona es asimilada a un bebÑ y los compañeros, al adulto que protege y materna. Caricias de tipo sexual podróan inducir confusión vivencial y activar el sistema de vigilancia. Ahora bien, la persona no está en este momento de la vivencia, en condiciones de evaluar  la situación  y responder en reciprocidad, en feedback.
7 Abrazos
La persona  está sentada: un compañero la recibe con un abrazo: el facilitador  u otro compañero ayuda  colocándose detrás sosteniÑndole delicadamente la frente y ubicando sus brazos delicadamente en una posición cómoda. Simbólico: la activación progresiva  continua en un contexto afectivo indicando que el mundo está feliz de recibirlo en su seno. El abrazo es la manera más sutil y profunda para manifestar la acogida y la benevolencia. Es el momento fuerte de reparentalización.
8 Levantar a la persona
La persona es levantada a la posición de pie: antes  de que no estÑ ñdespiertaá, un compañero  la recibe de pie en un abrazo que contiene y sostiene. La posición de pie y sostenida es una invitación a retomar progresivamente la autonomóa. Simbólicamente, esto significa que la matriz no retiene indefinidamente y que hay una suave invitación a comenzar a poner los pies en el piso, a retomar la verticalidad, a crecer. El abrazo por ende debe ser sostenedor, firme y suave a la vez. Esta es la fase donde la persona necesita tutores para ponerse de pie. Los compañeros hacen todo todavóa en su lugar.
9 Restituir la identidad por los abrazos
Abrazos breves y profundos se suceden. Cuando la persona ñvuelveá en só demostrando iniciativa en sus abrazos, pasamos a la etapa siguiente. Simboliza la autonomóa creciente y al mismo tiempo, permite a las personas del grupo manifestar su apoyo, su felicidad de recibir a un amigo que vuelve de su trance. La sucesión de abrazos , contribuye, en un clima afectivo, a restituir los lómites identitarios  y a acceder  progresivamente a la reciprocidad de gestos de ternura y de gratitud. Es un momento fuerte de reparentalización extendida y que prepara para una forma de socialización ritualizada. La persona se siente bienvenida y protegida por todos sus compañeros. El mundo es benevolente. Esta fase contribuye a la expansión de la consciencia que la persona vivencia al salir del trance y cuando ella abra sus ojos encontrará la mirada de sus compañeros. Los abrazos pueden ser  profundos y cada vez más breves. Efectivamente, si el abrazo se prolonga demasiado, puede existir la tentación de ñrecaerá en el trance, es decir de retornar a la matriz. Los compañeros van dejando  la iniciativa en  los abrazos y en los intercambios de abrazos.
10 Prepararse para descubril el mundo
El facilitador ofrece un último y breve abrazo y le presenta el mundo: Ñste son las personas presentes que ella percibe de manera esencial, más allá de la apariencia, de la forma. Esta fase simboliza la acogida de la persona, en la comunidad humana, con su ñidentidadá recobrada. Es un momento de fuerte cohesión en el grupo y si la persona pudo abandonarse, las personas del grupo tienen también la posibilidad de vivir momentos de expansión de consciencia. Efectivamente, la mirada inocente que se posa en cada uno de los participantes de la matriz, los reconecta con su propia inocencia.
11 Integracián a la comunidad
El facilitador lo integra a la comunidad humana representada por la ronda. facilitador presenta a la persona en el centro de la ronda, para luego integrarlo  a Ñsta, y se ubica cerca de la persona con el fin de regular  la intensidad de los movimientos del grupo supervisando que la euforia pueda vivirse libremente teniendo en cuenta la ñfragilidadá de la persona que sale del trance.
12 CélÑbration par tout le groupe
Todo el grupo celebra. Es importante que todo el grupo participe en esta celebración que constituye un momento de reparentalización esencial en la medida en que la persona se sienta bienvenida a este mundo. Donde se siente festejada. Se invita a los compañeros a expresar la alegría de recibir el reciÑn llegado en su comunidad  y de haber participado en la ceremonia. Música :
oa('01','20') Adagio - Concerto in re minore per oboe, 	Marcello, Alessandro (1669-1747) archi e BC - 2, SF 935	4:46
17-15 Adagio - Streichquintett in C-Dur - 2, 	Schubert, Franz (1797-1828) op.post.163 D 956	4:43
oa('01','19') Allegro - Concerto 'La primavera' in Mi 	Vivaldi, Antonio (1678-1741) Maggiore - 1 (Le quattro stagioni op.8/1, RV 269)	3:29
17-16 Ave Maria (after Johann Sebastian Bach)	Gounod, Charles (1818-1893)	3:23
09-03 Bilitis	Zamfir, Gheorghe
Anteóltima etapa: cuando el facilitador muestra el mundo a la persona que sale de su trance, antes de incorporarla de nuevo a la comunidad (a la ronda).	4:30
17-07 Clair de lune [Orchestral version] Suite 	Debussy, Claude (1862-1918) Bergamasque pour piano - 3	4:42
17-19 Gloria in excelsis Deo (Trevor Pinnock) - Vivaldi, Antonio (1678-1741) Gloria in Re Maggiore - 1, RV 589 Ultima etapa, celebración final.	2:19
17-04 L'horloge de ma vie	Posit, Jean-Pierre	4:43
Etapa de depositar en el suelo, formación del cordón umbilical y restitución de los limites identitarios con caricias contenedoras en todo el cuerpo (menos la cara). 
DANZAS DE LOS ñNGELES
CONCEPTO DE ANGEL : El ángel es un arquetipo, un habitante inconsciente inherente al ser humano.  
Como arquetipo está presente en todas las culturas. Existen ángeles en las tradiciones del Cristianismo, Judaósmo e Islam.  En Egipto, Grecia, Japón, India, también están presentes las criaturas aladas. El ángel, más que una imagen de orden visual, es un sentimiento, una forma luminosa del ama que brinda afecto, descanso y tranquilidad.
El arquetipo es multifacÑtico y puede abarcar diferentes contenidos emocionales dentro de una estructura global.  ñLos arquetipos son las formas o lechos en los cuales el róo de los fenómenos psóquicos corre desde siempre (...).  El arquetipo es una forma psóquica inconsciente, pero que tiene existencial real, independientemente de la posición tomada por la conciencia (...).  Es una existencia anómica que, como tal, no puede ser confundida con un concepto metafósicoá (Carl Gustav Jung).
Se puede aceptar o rechazar la existencia de los ángeles, no obstante ellos existen, y siempre han existido, en el inconsciente.
NECESIDAD DEL ANGEL : La necesidad de autoevaluación de los seres humanos, la búsqueda de lo extraordinario, el sentido de belleza interior, constituyen algunos de los impulsos que conducen a la invocación de los ángeles.  Este es el contexto psóquico favorable a la inducción de procesos integrativos a través de la invocación del ángel.
El arquetipo del ángel crea un fondo emotivo para la integración cuerpo-alma, una especie de atmósfera saturada de energóa, belleza y diafanidad.  La idea de considerar los ángeles como entidades aisladas y separadas del ser humano mantiene, en forma lamentable, el drama de la disociación cuerpo-alma.
El arquetipo del ángel permite una conexión con aspectos sutiles de la realidad.  Integra la sensibilidad con la afectividad, frecuentemente disociadas.
Para merecer la compaÓóa de los ángeles es necesario invocarlos con amor y mantener un contacto permanente con ellos.  El contacto con los ángeles es un compromiso de amor, una solicitud recíproca que se cultiva cada dóa.
COMUNIóN CON EL ANGEL : La comunión con el ángel es una experiencia móstica.  Se percibe una nueva cualidad del universo, atravesando por fuerzas leves y sutiles que rodean los objetos, plantas y seres.  El estado de amor móstico conduce fácilmente a la comunión con el ángel.  El sentimiento de Unidad se hace presente como Epifanóa.
INCORPORACIóN DEL ANGEL : Incorporar el ángel es, en el fondo, devenir el ángel.  Este es un proceso lento y progresivo.  Su invocación frecuente  termina por crear un estado de ánimo feliz y ligero. La expresión angelical es dulce y serena.
El ángel humano posee la capacidad de concentrar y proyectar energóa benÑfica. Su incorporación no es solamente psicológica, sino también un modo orgánico de funcionar como generador de vida.
Las danzas de los óngeles en Biodanza y la invocación cotidiana del ángel interior son los medios para incorporarlo en la existencia de cada uno.
LOS óNGELES SON DE ESTE MUNDO : Se sostiene que los ángeles son intermediarios entre el mundo sobrenatural y el mundo natural, pero ambos  en realidad son uno sólo.  El mundo natural es mucho más amplio de lo que generalmente se cree.  Lo maravilloso existe en el mundo natural y la necesidad de esplendor interior es parte del alma.
Los ángeles son de este mundo.  Peregrinos de la tierra y el cielo, los seres humanos hacen su trayectoria existencial e invocan las fuerzas desconocidas que, en forma de ángeles, los protegen y guóan.  El mundo está poblado de ángeles, sólo que no los vemos porque son invisibles.  En realidad, los ángeles son un presentimiento, una especie de energóa ligera que se agita dentro del pecho cuando se hacen presentes.
Todas las personas tienen un ñángelá.  En la presencia fósica, a veces derrotada y otras esplÑndidas, se deslinda una especie de atmósfera en la que se presiente el ángel oculto.  Aprender a ver el ángel de las personas es una forma de evolución.  La percepción de lo invisible es lo que hace trascender las apariencias.
DANZA BóSICA DEL ANGEL : El ángel es el arquetipo de pureza.  Es una forma de la afectividad que se vincula a la integridad, a lo autÑntico y, por otra parte, a la inocencia, a la buena fe,  a la confianza en los demás.  El cuerpo se torna leve y los brazos se agitan suaves como alas.  Hay una actitud de elevación.  El movimiento general del cuerpo se hace con cierta contención.
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión.
DANZA DEL ñNGEL
 
El Presentimiento del óngel - Extensión de Biodanza
El ángel es un arquetipo, un residente del inconsciente inherente al ser humano. El ángel, más que una imagen visual, es un sentimiento, una forma de luz del alma que ofrece afecto, alivio y tranquilidad.
El arquetipo del ángel crea un fondo emocional para la integración entre el cuerpo y el alma, una especie  atmósfera saturada de energóa, hermosa y diáfana. La idea de considerar a los ángeles como entidades aisladas y separadas del ser humano mantiene, de manera lamentable, el drama de la disociación cuerpoalma.
El arquetipo del ángel permite una conexión con los aspectos sutiles de la realidad. Integra la sensibilidad con la afectividad, con frecuencia separadas. Para merecer la compaÓóa de los ángeles, se debe invocarlos con amor y mantener un contacto permanente con ellos. El contacto con los ángeles es un compromiso de amor, una preocupación recíproca que crece dóa a dóa. Descripción :
En la danza de base del ángel, el cuerpo es ligero y los brazos se mueven suavemente como alas. Hay una actitud de elevación. El movimiento general del cuerpo es reservado (no expansivo, sino discreto) como se puede ser frente a algo frágil y sensible. Objetivo :
El ángel es un arquetipo de la pureza. Incorporarlo en una danza despierta una forma de afectividad que conecta por un lado a la integridad y la autenticidad y, por otro lado, a la inocencia, la buena fe, la confianza en el otro.
Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
oa('18','15')+ Allegro maestoso - Ballet Don Juan - 4	Gluck, Christoph Willibald (1714-1787)	2:00
18-17 Andante - Klavierkonzert 21, (Andrús Schiff), C-Dur KV 467 - 2	Mozart, Wolfgang Amadeus (1756-1791)	6:45
DANZA DEL ñNGEL DEL AMOR		
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Descripción :
El amor es lo que sostiene y permite la conexión, el enlace. Cuando amamos, dialogamos por medio de "ángeles interpuestos", por luz interpuesta. Porque es la parte angelical de cada uno que va hacia el otro. Y es cuando los ángeles hablan que los seres humanos pueden unirse. La danza evoca la profundidad, la presencia, la apertura incondicional al otro y al mundo. Invocar el ángel del amor es convertirse en el amor, es ser danzado por el amor. Objetivo :
Predisponernos a todo lo que nos conecta unos con otros, a nuestra parte luminosa. Introducir esta parte de nosotros mismos como "previa" al encuentro y a la comunicación. Tenemos tendencia a enfatizar nuestros temores o los defectos de los demás. Música :
21-04 El Dóa en Que me Quieras	Barenbo¨m, Daniel / Mederos, Rodolfo / 	4:18
Console, HÑctor
oa('11','12')+ Liebestrúum nã3 in As-Dur - Liebestrúume, Liszt, Franz (18oa('11','18')86)	4:31
S.541
DANZA DEL ñNGEL DEL óXTASIS
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión.
Descripción :
El Ñxtasis es un cambio de estado de conciencia que corresponde a maravillarse. Evocar este estado de conciencia es recordar nuestro asombro viendo un árbol, una flor, un niño, un ser querido. Se trata de un llamamiento suave y sutil a este estado de percepción. Por lo tanto, no es una exigencia ni una solicitud - por lo tanto tampoco una invocación -, sino la evocación de un estado de armonía suave, sostenido por la música. Objetivo :
Cambio en la percepción de la realidad y de nosotros mismos en esta realidad. Aprender a familiarizarse con el Ñxtasis.Predisponernos a todo lo que nos conecta unos con otros, a nuestra parte luminosa. Introducir esta parte de nosotros mismos como "previa" al encuentro y a la comunicación. Tenemos tendencia a enfatizar nuestros temores o los defectos de los demás. Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
DANZA DEL ñNGEL DE LA FUERZA		
 
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Descripción :
En nuestra cultura, la fuerza es a menudo mal vista. Puede estar para muchos asociada a la violencia o a la dominación. Y es para eso que se la utiliza a menudo. Nuestra cultura da tanta importancia al sufrimiento, tanto reconocimiento a nuestra parte vóctima, que la gente se olvida la via de conexión a su propia fuerza que es la fuerza de la vida. Esta danza es precedida por una invocación: me conecto a la fuerza que viene de lo más poderoso del mundo, de los seres, del universo. La fuerza que, conectada a la vida y al servicio de ella, es capaz de mover las montaÓas de nuestras dudas y pensamientos limitantes. Los movimientos son poderosos, intensos, expresando una energia serena y radiante. Objetivo :
Transformar la duda y el miedo en fuerza y fe. Música :
15-13 Polovtsian dance Nã 17-d [Part] - Opera 
Prince Igor (2nd dance of the men), 
Orchestral version	Borodin, Alexander (1833-1887)	2:08
DANZA DEL ñNGEL DE LA ILUMINACIÓN		
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Descripción :
El sentimiento de estar iluminado o ser luminoso realmente puede generar luz. Muchos experimentos biológicos muestran que nuestros cuerpos tienen su propia luz. En la naturaleza, las luciÑrnagas, algunos peces, algunos vegetales emanan luz. Las reacciones biológicas producen energóa radiante. Algunas personas demuestran su percepción del aura. Rita Levi Montalcini dijo que "el Espóritu es un haz de luz que pasa a través de nuestro cerebro". Un rayo de luz en el cuerpo. Objetivo :
La danza viene de la conexión que nos da la sensación de ser luminosos. El ángel es la parte más clara, más transparente, lúcida, de nosotros mismos. Esa que ve lo que lo racional no puede ver. Esa que ve más allá de todas las opacidades.
Como para los otras danzas de los ángeles, esta es precedida por la invocación de la luz interior, y la danza refleja la vivencia de una "energóa radiante", de una luz proyectada sobre el mundo y otros. Elemento PoÓtico :
Chopin dijo: "No hay nada que hacer, solo recibir para que descienda y se derrame sobre nosotros la gracia, que no es sino la generosidad de la vida manifestada." Música :
09-19 Adagio - Concerto Brandebourgeois 1 - 2,  F-Dur BWV 1046	Bach, Johann Sebastian (1685-1750)	4:07
18-16 Largo - Concerto da camera in Re 
Maggiore RV 93 - 2 (per lute, 2 violini e BC)	Vivaldi, Antonio (1678-1741)	5:51
18-03 Largo - Concerto in re minore - 2 (Il cimento dell'armonia e dell'inventione op.8/7, RV 242)	Vivaldi, Antonio (1678-1741)	2:13
DANZA DEL ñNGEL DEL RENACIMIENTO		
 
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Descripción :
La danza comienza con una invocación de la capacidad de "reverdecer" , de "florecer de nuevo", de "renacer" de todo y siempre. A continuación, los gestos evocan una vivencia de elevación y expansión. Música :
17-07 Clair de lune [Orchestral version] Suite Bergamasque pour piano - 3	Debussy, Claude (1862-1918)	4:42
DANZA DEL ñNGEL DE LA MAóANA		
El Presentimiento del óngel - Extensión de Biodanza
Algunas danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Descripción :
Las depresiones matinales son peores que las del resto del dóa. Los depresivos endógenos se suicidan desgraciadamente a menudo en la madrugada. Pero a veces, sin estar deprimido, es posible que tengamos que enfrentar despertares sin entusiasmo, dóas sin gracia. Es entonces que podemos invocar al ángel de la aurora, de la esperanza, del despertar a la vida. Esto se hace invocando la fuerza ascendente y expansiva de un estado de ánimo que coincide con un humor ligero, alegre, expansivo, de esperanza y optimismo. Los movimientos son ligeros y ascendentes.
Rolando Toro dijo, hablando del "óngel de la maÓana", que era nuestra capacidad de empezar cada nuevo dóa con una mirada nueva, nuestra capacidad diaria de maravillarnos. Y que tenemos que invocar a este ángel todas las maÓanas, antes de ir hacia los demás y hacia el mundo. La Danza del óngel de la maÓana es la invocación de la frescura de nuestra inocencia.
Note CIMEB :
Para la referencia musical, ver Catalogo CIMBEB - Argentina BA01 - 04 
Morgenstimmung (Au matin) (Esa-Pekka Salonen) - Peer Gynt, Suite 1-1, Op.46 - Grieg, Edvard (18431907) Música :
oa('18','15')+ Allegro maestoso - Ballet Don Juan - 4	Gluck, Christoph Willibald (1714-1787)	2:00
DANZA DEL ñNGEL  GUARDIñN		
La falta de transcendencia se manifiesta a menudo por una falta de confianza en só mismo, en el otro y en la vida. Esta falta de confianza puede generar la sensación de estar expuestos a todos los peligros, de ser olvidado. La invocación del ángel puede constituir una poderosa estimulación de  las potencialidades interiores de protección de la propia vida: nuestra parte más luminosa (confiada y en conexión profunda con la vida) es capaz de cuidar de la parte más frágil de nosotros (la que pierde esta conexión, el camino). La invocación del ángel guardián es la invocación de nuestra  capacidad natural de intuición de lo que va en el sentido de la protección de la vida. Es la evocación del guardián en só, como el padre protector ha sido el guardián del pequeÓo.
Descripción :
Esta danza se realiza de a dos. Una de las dos personas será protegida por la otra, en sus movimientos y en sus desplazamientos. La que invoca al ángel (la potencialidad innata) tendrá los ojos cerrados y avanzará sensiblemente, en una danza o marcha liviana e ñintuitivaá. Una de sus manos estará apoyada con confianza en la mano del ñóngelá, la otra mano puede quedar libre al costado o apoyarse sobre el corazón (evocando la  capacidad para orientarse a partir de las motivaciones profundas como fuerzas de la intuición).
La persona percibirá los mensajes por presiones en la mano por su compañero, cada vez que está cerca de un obstáculo. Ella deberá detenerse y orientar su paso de otra forma en un espacio seguro, sin obstáculos. La persona que cuida, quien encarna al ángel guardián, será benevolente, atenta a no guiar sino a proteger, siguiendo los pasos de su protegido/a, le manifestará signos mediante presiones en las manos cada vez que se presente un obstáculo (una pared, un compañero, etc.).
Al terminar la música, se abrazan y la situación es invertida permitiendo a cada uno vivenciar los dos polos de la vivencia. Objetivo :
Integrar la vivencia de poseer en uno todas las posibilidades de proteger la vida, de cuidarla y de sentir cual es el camino hacia la vida.
Note CIMEB :
Avanzar en la vida "con ojos cerrados" es una expresión de gran confianza. Sin embargo, si esto es demasiado difócil para algunas personas, se puede abrir los ojos y poco a poco domesticar la vivencia de avanzar con los ojos cerrados. Música :
18-16 Largo - Concerto da camera in Re 
Maggiore RV 93 - 2 (per lute, 2 violini e BC)	Vivaldi, Antonio (1678-1741)	5:51
DANZA DEL ñNGEL GUóA		
A veces, como obnubilados, atentos a nuestros proyectos o a lo que confundimos con nuestros deseos, ya  no vemos lo que nos rodea, no sentimos más la fuerza vital que tiene por único propósito guiarnos hacia la vida. Perdemos nuestra capacidad de conexión con la vida. La invocación del óngel Guóa, es la invocación de nuestra aptitud  natural para dejarnos guiar por la sabiduróa de la vida, por nuestro inconciente vital y no sólo por nuestra voluntad. Esta danza puede constituir una suerte de desafóo para personas muy voluntariosas, poco sensibles y que adelantan todo, se precipitan sin sentir y no aceptan ser guiados, ni siquiera por amor. Descripción :
Esta danza se realiza de a dos. Uno cierra los ojos y la mano en la de su ñángelá, se deja guiar en una danza liviana. La otra persona, benevolente, la guóa en una danza liviana sin por esto inducir manipulación, sin ponerla en situación de desafóo, sino de manera de facilitarle el abandono en la confianza, la posibilidad de dejarse guiar y de sentir la alegría que esto provoca. Objetivo :
Vivenciar la posibilidad de confiar en la vida dejándose guiar por ñseÓalesá que vienen de nuestra sensibilidad profunda. Superar el miedo de la incertidumbre. Disminuir la influencia de la voluntad como única guóa de nuestras acciones. Música :
10-20 V podveëer (At Twilight), Idyll for 
Orchestra - Op.39 {Mistaked Known as 
Poíme op.41, No.6}	Fibich, Zdùnek (1850-1900)	2:27
DIñLOGO DE ñNGELES		
Descripción :
Cuando la parte mas luminosa de nosotros mismos es mostrada al el otro, para encontrarse con la parte luminosa del otro, podemos decir que nuestros ángeles "dialogan". Llegan al otro antes cualquier otro aspecto de nuestra identidad. Objetivo :
Ir hacia el otro a partir de nuestra esencia más luminosa y amorosa. Proyecciún Existencial :
Nuestras relaciones se nutren de la parte luminosa de cada uno cuando nuestros ángeles son los mensajeros que preceden nuestros actos.
Música :
oa('18','15')+ Allegro maestoso - Ballet Don Juan - 4	Gluck, Christoph Willibald (1714-1787)	2:00
17-06 Blue Lotus	Berglund, Erik	5:12
RONDA DE ñNGELES		
 
En el cuadro de Botticelli que representa La Natividad, los ángeles danzan sobre el pesebre en una ronda de alegría y celebración. La ñRonda de ángelesá de Biodanza se inspira en esta escena. La celebración óntima del nacimiento del niño interior es un rito.
La ronda debe realizarse con movimientos leves, armónicos y ascendentes.  Genera un sentimiento de felicidad epifánica (manifestación de lo divino). Música :
17-15 Adagio - Streichquintett in C-Dur - 2, op.post.163 D 956	Schubert, Franz (1797-1828)	4:43
oa('18','15')+ Allegro maestoso - Ballet Don Juan - 4	Gluck, Christoph Willibald (1714-1787)	2:00
18-17 Andante - Klavierkonzert 21, (Andrús Schiff), C-Dur KV 467 - 2	Mozart, Wolfgang Amadeus (1756-1791)	6:45
LOS ELEMENTOS		
Las danzas de los cuatro elementos forman parte de la extensión de Biodanza "Identidad y los Cuatro Elementos". Las danzas se enumeran aquó, pero no son detalladas como ejercicios básicos de la práctica de Biodanza.
DANZA DE LA TIERRA
Descripción :
La tierra se refiere a la base, a la materia, a lo que es concreto y estable. La dinámica de la danza es hacia abajo (hacia la base), con la apertura de la zona pélvica y una vivencia de estabilidad y peso (consistencia). Observaciún :
Extensión de Biodanza "Identidad y los Cuatro Elementos". Las danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Música :
07-14 Appel des esprits [Part]	Baroty & Dieng	5:10
El ritmo cambia durante la Música.
19-02 Down In Belgorod	Winter, Paul	3:02
07-15 Ensaio Geral	Os Ritmistas Brasileiros / Luciano Perrone	2:31
19-01 PrÑsence	Guem	5:29
07-12 Riacho [Part]	Guem	3:26
07-13 Voyage dans l'au-delï	Baroty & Dieng	6:13
DANZA DEL FUEGO		
Descripción :
El fuego es lo más vivo, lo luminoso, lo caliente, lo apasionado. La danza, según la música, expresa las cualidades predominantes de fuego. Observaciún :
Extensión de Biodanza "Identidad y los Cuatro Elementos". Las danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión.
Observaciún :
De acuerdo con la propuesta de la música, la danza puede ser expresiva (fuego expansivo) o más sensible e internalizada (protección del fuego interior).
Música :
15-08 Adios nonino	Piazzolla, Astor	3:24
19-07 Cancián del amor dolido (Vocal Teresa Berganza)	de Falla, Manuel (1876-1946)	1:24
19-06 Danza ritual del fuego	de Falla, Manuel (1876-1946)	4:04
08-06 Djobi Djoba	Gipsy Kings	3:26
18-07 Eric's Theme	Vangelis	4:17
07-25 Harpa paraguúia	Bordón, Luis	2:19
14-16 Libertango	Piazzolla, Astor	2:54
Con desplazamientos. 14-15 Uomo del Sud (Violin)	Piazzolla, Astor / Agri, Antonio	3:58
DANZA DEL AGUA		
Descripción :
El agua es el elemento asociado a la comida, el abrigo, la matriz de las aguas primordiales, la emoción, la sensualidad cenestÑsica (las aguas interiores), la profundidad. También se asocia con la fluidez, lo que evita los obstáculos y que es redondo y cuya forma se adapta a todos los contenedores. La danza, según la música, evoca las cualidades predominantes del agua. Observaciún :
Extensión de Biodanza "Identidad y los Cuatro Elementos". Las danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Música :
12-19 As Time Goes By	Peixoto, Araken	2:57
17-06 Blue Lotus
Para una danza de agua con tendencia muy yin.	Berglund, Erik	5:12
21-14 Clair de lune - Harp transcription, Suite Bergamasque pour piano	Debussy, Claude (1862-1918)	5:41
10-17 Improvisasion	Franz, Charles	5:37
19-17 Joy	Mourashkin, Boris	3:33
12-16 Someone To Watch Over Me	Peixoto, Araken	4:27
DANZA DEL AIRE
Descripción :
El aire está asociado con una ligera expansión, con la facilidad, la libertad, la imaginación, la elevación. 
danza del aire, de acuerdo con la música elegida, refleja diferentes cualidades del elemento. Observaciún :
Extensión de Biodanza "Identidad y los Cuatro Elementos". Las danzas de esta extensión sólo se mencionan en este catálogo. Su descripción detallada es parte de los documentos relativos a esta extensión. Música :
	19-18 Abraham's Theme	Vangelis	La 3:18
	07-22 Kaiserwalzer, op.437 [Part]	Strauss II, Johann (1825-1899)	4:25
15-04 Oikan Ayns Bethlehem (Birth In Bethlehem) Christian, Emma	5:14
	07-23 Valse - Coppélia - Acte I/2	Delibes, LÑo (1836-1891)	2:21
	oa('11','11')+ Watermark	Enya	2:25
DANZA DE TIERRA Y AIRE	
Descripción :
Extensión de Biodanza "Identidad y los Cuatro Elementos". 
mencionan en este catálogo. Su descripción detallada extensión. Música :
19-02 Down In Belgorod	Las danzas de esta extensión sólo se es parte de los documentos relativos a esta 
Winter, Paul	3:02
07-02 Missa Luba. Kyrie	Les troubadours du roi Baudoin	2:06
PROCEDIMIENTOS DE FACILITACIÓN		
Se trata de situaciones de transición que permiten un acceso más fácil a ciertos ejercicios. Estos procedimientos de facilitación permiten, si se utilizan adecuadamente, dar más fluidez  y continuidad a la secuencia de ejercicios.
ANIMACIÓN DEL MOVIMIENTO
Animación significa "poner en vida, dar vida". Animar el movimiento es expresar la vitalidad en el movimiento.
Descripción :
Se trata de una danza libre con una música vital y alegre, para "ponerle más vida" (animar) a nuestro movimiento. Objetivo :
Estimular la alegría de vivir y la vitalidad.
Música :
20-07 A Mi Manera	Gipsy Kings	3:54
Puede ser utilizada en la animación final cuando se quiere elevar el nivel de euforia y de celebración, con una vivencia de libertad (de movimiento).
05-21 Batuque	Mercury, Daniela
Para diversas danzas alegres, vitales, estimulante (en ronda, individual, en grupo o de a dos).	3:23
05-22 Bumbo da Mangueira	Costa, Gal
Facilita un movimiento vital de integración de los tres centros.	5:09
21-06 Carnaval de Sèo Vicente	Evora, Cesaria
Facilita un movimiento ligero, amplio y central a la vez, con desplazamientos fluidos.	3:50
21-03 Charleston	Light, Enoch & The Light Brigade
Ritmo obsoleto de Charleston (agilidad de las piernas y variación de moviminetos).	2:09
07-17 Cidade Vazia	Milton Banana Trio	2:53
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
03-11 Deixa a vida me levar	Pagodinho, Zeca
Animación en el sentido de un movimiento lleno de la vida.	4:40
08-04 Mack The Knife	Fitzgerald, Ella	4:39
05-06 No Som da Sanfona	Ramalho, Elba	2:41
04-11 Pedi ao cÑu	Carvalho, Beth	2:53
04-14 Quilombo, O Eldorado Negro	Gil, Gilberto	4:43
Puesta en movimiento con ritmo tropical.
oa('03','14') Rumba Azul	Veloso, Caetano	4:02
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
ANIMACIÓN DE A DOS		
Animación significa "poner en vida, dar vida". Animar el movimiento es expresar la vitalidad en el movimiento. Realizado de a dos, se aÓade una nota de afectividad con caracter lúdico y alegre. Descripción :
Se trata de una danza libre en pares con una música vital y alegre. Puede haber cambios. Definiciún :
No es un ejercicio propiamente dicho, sino un "procedimiento de facilitación" que puede incluirse en el concepto genÑrico de activación. Proyecciún Existencial :
Animarse o activarse mutuamente es un poco como "contagiarse de vida" el uno al otro. Música :
oa('02','17') Bem Leve	Monte, Marisa	2:32
oa('21','11') Danadinho Danado (com Martinho da Vila)	Simone	4:39
05-09 Eu quero mais	Carvalho, Beth	2:20
05-13 Eu quero meu amor	Ramalho, Elba	2:40
05-17 Folia Brasileira	Ramalho, Elba
Euforizante.	3:03
03-06 Have You Ever Realy Loved A Woman?	Adams, Bryan
Animación progresiva en pares hacia el fin de la clase.	4:54
05-15 Me gusta tu rosa roja	Los Wawanco	3:39
05-16 Me muero por ella	CaÓa Brava	4:55
05-03 Paixèo de Beata	do Acordeon, Pinto
Sinuosa.	3:27
oa('05','04') Que Nem Vem Vem	Ramalho, Elba	2:46
DANZA LIBRE
Descripción :
Con una música que presenta una amplia variedad de tonalidades, la persona es invitada a danzar libremente. La danza se propone cuando las personas ya ha hecho un proceso de recuperación de sus habilidades motoras naturales; de lo contrario, tienden a reproducir estereotipos o disociaciones. Objetivo :
Permitir que la gente pueda danzar sin tener que preocuparse por el rendimiento o la performance, al mismo tiempo descubriendo poco a poco un estilo personal. Música :
03-11 Deixa a vida me levar	Pagodinho, Zeca	4:40
05-16 Me muero por ella	CaÓa Brava	4:55
21-10 O Amanhè	Simone	4:48
DANZA EN PARES		
 
La danza en pares tiene una configuración más libre que la sincronización rótmica o la sincronización melódica en pares. Descripción :
Las personas son invitadas a danzar con iniciativas recíprocas y compartidas, en coherencia con la estimulación musical y tratando de mantener un diálogo entre ellas en todos los niveles: expresión, ritmo, distancia, espontaneidad, sensibilidad. Objetivo :
Promover la capacidad de sintonizarse con el otro coordenando las iniciativas, los gestos y la expresión. Música :
14-04 Anos dourados/Eu sei que vou te amar	Santiago, Emólio	5:28
13-04 Apelo	Creuza, Maria	3:44
12-19 As Time Goes By	Peixoto, Araken	2:57
20-14 Call Off The Search	Melua, Katie	3:23
oa('12','04') ComeÓaria tudo outra vez	Simone	3:06
oa('03','09') Conto de Areia	Nunes, Clara	3:40
oa('02','04') Coqueiro de Itapoè	Veloso, Caetano	2:37
12-08 Corcovado	Santiago, Emólio	4:07
oa('21','11') Danadinho Danado (com Martinho da Vila)	Simone	4:39
21-13 Dream A Little Dream Of Me	Fygi, Laura	3:40
oa('05','02') Esperando Na Janela	Gil, Gilberto	4:21
12-11 Eu disse adeus	Creuza, Maria	2:56
05-09 Eu quero mais	Carvalho, Beth	2:20
oa('12','01') Eu sei que vou te amar	de Moraes-Creuza-Toquinho	3:30
05-11 Fava de Cheiro	Sivuca	2:37
05-10 Feira de Mangaio	Nunes, Clara	3:19
oa('04','10') Folhas secas (ao vivo)	Carvalho, Beth	2:27
10-14 For Sentimental Reasons/Tenderly
Tonalidad romÑntica.	Cole, Natalie	4:26
03-06 Have You Ever Realy Loved A Woman?	Adams, Bryan	4:54
13-01 I Miss You So	Krall, Diana	4:42
16-05 I'm Just A Lucky So-And-So	Merril, Helen	3:08
20-15 Learnin' The Blues	Melua, Katie	3:21
14-09 Mania de Você-LanÓa Perfume	Santiago, Emólio	4:33
10-16 MoÓa	Wando	4:15
20-17 Mockingbird Song	Melua, Katie	3:05
05-12 O Baile de Bio Laurinda	Sivuca	2:26
14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
14-01 Samba em preludio	de Moraes-Creuza-Toquinho	3:31
oa('02','03') Sete mil vezes	Veloso, Caetano	2:21
oa('01','11') Tema de Amor de Gabriela	Costa, Gal / Jobim, Tom	4:04
08-10 Unforgettable	Franklin, Aretha	3:42
08-07 Viento del Arena	Gipsy Kings	5:30
12-21 Who Needs Forever	Peixoto, Araken	3:18
SINCRONIZACIÓN RóTMICA SUAVE		
 
La transición del ritmo a la melodóa representa un paso significativo en el proceso de integración motriz. Del mismo modo, esta misma transición en las danzas con el otro da lugar a  una mayor sensibilidad en el diálogo. Mientras el ritmo le da una base, la melodóa sostiene los matices y variaciones de ese diálogo. Descripción :
La posición es la misma que para la sincronización rótmica en pares. El ritmo es más oscilante, más central. Los movimientos son más sinuosos o sensibles. El ritmo queda un poco "relegado". Esta danza puede ser una interesante transición hacia la sincronización melódica, la cual invita a una mayor intimidad. El ritmo es suavmente "erotizado". Música :
oa('02','16') Alta Noite	Monte, Marisa	3:55
DANZA DE ARMONIZACIÓN EN PARES		
La armonía es la manifestación de la unidad. La sensación de armonía es un sentimiento de continuidad con lo y los que nos rodean, y con quienes nos relacionamos. Descripción :
Dos personas danzan, con los ojos cerrados o abiertos (pulsación de la mirada de acuerdo a la vivencia), tomados de las manos, con movimientos sensibles y de comunión. Se hace hincapiÑ en la posibilidad de hacerse uno juntos, de fusionarse en lugar de diferenciarse. La danza puede ser comparada a una danza de brazos sensibles de a dos. Objetivo :
Lograr la vivencia de unidad en só mismo y con los demás. Observaciún :
La danza puede parecerse a una sincronización melódica extremadamente sensible y sin desplazamiento. Música :
oa('01','19') Allegro - Concerto 'La primavera' in Mi 
Maggiore - 1 (Le quattro stagioni op.8/1, RV 269)	Vivaldi, Antonio (1678-1741)	3:29
oa('13','06') Almost Blue	Baker, Chet	3:14
02-20 AndanÓa	Carvalho, Beth	3:47
14-04 Anos dourados/Eu sei que vou te amar	Santiago, Emólio	5:28
13-03 Atrús da porta	Caymmi, Nana	3:44
oa('02','04') Coqueiro de Itapoè	Veloso, Caetano	2:37
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
05-10 Feira de Mangaio	Nunes, Clara	3:19
16-03 Insensatez	Getz, Stan with Astrud & Joõo Gilberto	3:25
14-09 Mania de Você-LanÓa Perfume	Santiago, Emólio	4:33
09-08 Muito [Part]	Veloso, Caetano	2:06
14-05 Nada por mim/Fullgús	Santiago, Emólio	6:06
05-03 Paixèo de Beata	do Acordeon, Pinto	3:27
14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
14-06 Ronda/Sampa	Santiago, Emólio	5:28
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
INTEGRACIÓN DE CUELLO Y HOMBROS		
Descripción :
Para mayor progresividad, puede ser muy interesante proponer una integración del movimiento continuo de rotación de la cabeza (Movimiento Segmentario del cuello) y la rotación anteroposterior de los hombros (Movimiento Segmentario de hombros), porque a menudo sucede que la gente hace el segundo movimiento (hombros) causando rigidez en el cuello, cambiando la tensión de lugar. En esta danza, se trata de iniciar una rotación suave del cuello y poco a poco, sin detener el movimiento, integrar el movimiento de los hombros, con flexibilidad en la espalda.
Música :
09-03 Bilitis	Zamfir, Gheorghe	4:30
ACTIVACIÓN DESPUóS DE GRUPO COMPACTO
El momento de la reactivación después de un grupo compacto es muy difócil porque las personas tienen que ser activadas y al mismo tiempo es necesario conservar los beneficios del abandonarse en el seno del grupo.
Descripción :
La activación después de un grupo compacto se puede hacer de varias maneras. Las personas pueden ser alentadas a tomarse de las manos de dos personas cercanas y así la ronda se vuelve a formar con suavidad y se abre. También pueden ser invitados a acercarse a una persona y entonces la activación se produce de a dos. O la activación se hace por pequeños grupos: del grupo grande vamos formando grupos más pequeños para ir haciendo  encuentros (lo más común) o hacia una ronda. En muy raras ocasiones se hace una propuesta de danza individual. Objetivo :
DespuÑs de la disolución en lo indiferenciado y en la regresión, la posibilidad de volver a la percepción de los lómites de identidad claros, mientras se mantiene el beneficio de la regresión. Promover la expansión de la conciencia que habrá permitido la fusión grupal. Definiciún :
No es un ejercicio propiamente dicho, sino un "procedimiento de facilitación" que puede incluirse en el concepto genÑrico de la activación. Música :
oa('02','16') Alta Noite	Monte, Marisa	3:55
12-08 Corcovado	Santiago, Emólio	4:07
11-09 Earth Born [from Asia]	Kitaro (óúÓ)	2:32
oa('02','03') Sete mil vezes
Muy lenta y afectiva.	Veloso, Caetano	2:21
13-02 When I Fall In Love	Merril, Helen	3:22
ACTIVACIÓN PROGRESIVA (levantarse del nido o de la regresián en el suelo)
Descripción :
Las personas comienzan a moverse suavemente, estimulándose con caricias suave, con contacto dulce y afectivo y/o sensual, según el contexto vivencial del nido y la inducción de la música. Se ayudan a sentarse y estando siempre en contacto, se levantan juntos. Objetivo :
Permitir un retorno gradual hacia la autonomóa y la iniciativa después de la regresión, de manera armoniosa. Definiciún :
No es un ejercicio propiamente dicho, sino un "procedimiento de facilitación" que puede incluirse en el concepto genÑrico de activación. Música :
oa('02','05') Canto do Povo de um lugar	Veloso, Caetano	4:12
11-09 Earth Born [from Asia]	Kitaro (óúÓ)	2:32
09-08 Muito [Part]	Veloso, Caetano	2:06
13-18 Proposta	Simone	2:56
A la vez profunda y delicada. Evoca una vivencia de abandono en confianza.
11-10 To Go Beyond, Pt. 2	Enya	3:00
DANZA DE ACTIVACIÓN EN PARES		
Descripción :
Son danzas de a dos (con o sin cambios) que progresivamente inducen la activación a través de la relación con el otro. La ternura, las caricias, la coordinación, la sincronización serán elementos de esta activación. No se trata de encuentros propiamente dichos porque las personas son invitadas a danzar con las personas que están más cerca de ellas sin salir completamente de la regresión. Es sólo gradualmente que la elección interviene de nuevo en los intercambios. Objetivo :
Activation después de la regresión o del estado indiferenciado, a través de la relación diferenciada. Música :
oa('02','17') Bem Leve	Monte, Marisa	2:32
Sensualidad dulce. Ritmo cadencioso. Ideal para la activación progresiva.
14-02 Corcovado (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	4:17
20-12 Corcovado (live)	Fygi, Laura	4:08
oa('21','11') Danadinho Danado (com Martinho da Vila)	Simone	4:39
14-09 Mania de Você-LanÓa Perfume	Santiago, Emólio	4:33
14-08 PÑrola Negra-Bem que se Quis	Santiago, Emólio	4:54
14-11 Queixas	Creuza, Maria	3:00
14-03 The Girl From Ipanema (feat. Astrud Gilberto)	Getz, Stan / Gilberto, Joõo	5:16
oa('02','15') Trem das cores	Veloso, Caetano	2:26
14-14 Você abusou	Creuza, Maria	3:57
MARCHA EN PARES (para autoregulacián)		
Cuando al final de un ejercicio muy vital, queremos invitar a las personas a disfrutar de un momento de autoregulación en movimiento, es decir, permitir que la estimulación cardiovascular se calme lentamente, podemos invitarlos a caminar en su propio ritmo con grandes movimientos respiratorios hasta que sientan el momento de parar.
Este no es un ejercicio de Biodanza en sentido estricto, sino un "procedimiento de facilitación". Este 
 
caminar puede ser acompaÓado de música o no. Música :
14-03 The Girl From Ipanema (feat. Astrud 
Gilberto)
 
Getz, Stan / Gilberto, Joõo	5:16
 



`+finNivel2()+`
`+inicioNivel2('3','FUNCIONES DEL GRUPO DE BIODANZA')+`
`+finNivel2()+`
`+inicioNivel2('4','INTEGRACIÓN DEL GRUPO DE BIODANZA')+`
`+finNivel2()+`
`+inicioNivel2('5','PRIMEROS MOMENTOS')+`
`+finNivel2()+`
`+inicioNivel2('6','INTEGRACIÓN ORGÁNICA DE BASE AFETIVA')+`
`+finNivel2()+`
`+inicioNivel2('7','DINÁMICA DEL GRUPO DE BIODANZA')+`
`+finNivel2()+`
`+inicioNivel2('8','ACTUAR SOBRE LA PARTE SANA')+`
`+finNivel2()+`
`+inicioNivel2('9','SOBRE LA PARTICIPACIÓN EN EL CURSO SEMANAL Y LA SUPERACIÓN DE LOS MECANISMOS DE DEFENSA')+`
`+finNivel2()+`
`+inicioNivel2('10','FUNCIÓN DE LA PARTE TEÓRICA EN LA INTEGRACIÓN DEL GRUPO')+`
`+finNivel2()+`
`+inicioNivel2('11','RELATO DE VIVENCIAS')+`
`+finNivel2()+`
`+inicioNivel2('12','ENTREVISTA INDIVIDUAL')+`
`+finNivel2()+`
`+inicioNivel2('13','PARTICIPACIÓN DEL PROFESOR DE BIODANZA EN LAS SESIONES QUE DIRIGE')+`
`+finNivel2()+`
`+inicioNivel2('14','ACTITUD DEL PROFESOR DURANTE LAS SESIONES QUE DIRIGE')+`
`+finNivel2()+`
`+inicioNivel2('15','RELACIÓN ENTRE EL MICRO MUNDO GRUPAL Y EL MACRO MUNDO SOCIAL')+`
`+finNivel2()+`
`+inicioNivel2('16','ASPECTOS EXPERIMENTALES Y FENOMENOLÓGICOS DE BIODANZA')+`
`+finNivel2();
return s;
}
// MÚSICA IBF
