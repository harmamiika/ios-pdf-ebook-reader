MyPDFBooks, on PDF-tiedostonlukija iOS:lle, joka on tehty PDF-muotoisten kirjojen lukemisen helpottamiseksi. Applen Books-appi ei anna lukea paikallisia tiedostoja, vaan kirjat täytyy ostaa apin sisältä. En myöskään löytänyt paikallisten tiedostojen lukemiseen sopivaa appia sovelluskaupasta, josta syntyi idea appiin. Oikeastaan appi on IOS kopio Androidille saatavasta ReadEra-sovelluksesta.

Appi on hyväksytty ja jakelussa App storessa: https://apps.apple.com/fi/app/mypdfbooks-pdf-reader/id1661658985?l=fi, mikä oli oikeastaan tämän projektin suurin tavoite. Päivittäisiä käyttäjiä on tällä hetkellä keskimäärin noin 10. Kehitys on tällä hetkellä paussilla.

Stack:
Apin stackki on React Native + TypeScript, luotu Create React Native App (ei expo). Appilla ei ole omaa backendiä, vaan data tallentuu mobiililaitteen muistiin. Sovellus käyttää kuitenkin googlen apeja mainoksia ja analytiikkaa varten.

Apin main featureita:
-PDF-lukija, joka pyrkii hyvään lukukokemukseen nimenomaan kirjojen tapauksessa. Se käsittelee tiedostoa sivu kerrallaan, sivua käännetään painamalla reunaa tai swaippaamalla (kuten ReadErassa androidilla). Pdf-lukijassa on myös zoom, kirjanmerkin pikalisäys, edistymisen, sivut ja kirjanmerkit näyttävä progress bar, josta kirjaa voi myös kelata.
-PDF-kirjasto, joka näyttää luettavat kirjat ja niihin liittyvää tietoa listalla
-Mainokset google admobista

Incoming jos jaksaa jatkaa deviä:
-Epub-tuki olisi seuraavan version main feature, muistinkäyttöön liittyvien parannusten lisäksi

TUNNIT: >175h

Mennyt esim:

- Koodaus
- React Nativen ja sen ekosysteemeihin liittyvä tiedonhaku (Ensimmäinen kerta react nativea)
- Appin jakeluun liittyvä konfiguraatio xcodessa ja apple developer portaalissa
- Mainosten näyttämiseen vaadittava konfiguraation admobissa

# työaikakirjanpito

YHTEENSÄ: 185

|   päivä    | aika | mitä tein                                                                                                                                                                      |
| :--------: | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2022-05-10 | 3    | React nativen ja toteutukseen vaadittavien kirjastojen tutkiminen googlailu ja tutkiminen                                                                                      |
| 2022-05-11 | 5    | Appin luonti, navigaation lisäys, pdf lukijan lisäys, kirjan valintaelementin lisäys                                                                                           |
| 2022-05-13 | 5    | Reduxin opiskelu ja setuppaus, kirjan säilöminen reduxiin ja localstorageen                                                                                                    |
| 2022-05-14 | 3    | Kirjan sivun vaihto reduxin kautta                                                                                                                                             |
| 2022-05-15 | 3    | Ui-kitten ui kirjastoksi, kirjalistan rendauksen uudistaminen                                                                                                                  |
| 2022-05-26 | 4    | Fonttien ja fontawesomeikonien lisäys, kirjatiedostopicker refaktorointi                                                                                                       |
| 2022-05-27 | 7    | Lisää ikoneita, mm. kirjasto. Typescript tuki, kirjalistaus parannukset. Kirjan sivun vaihto pyyhkimisgesturella, kirjan keskityks keskelle ruutua. Pdf-lukijan refaktorointia |
| 2022-05-31 | 3    | Kirjan zoomauksen toteuttaminen, haasteita                                                                                                                                     |
| 2022-06-03 | 5    | Kirjan zoom mvp toimii, sivun vaihdon refaktorointi. Pdf-lukijan refaktorointia                                                                                                |
| 2022-06-04 | 3    | Tyyppien ja datamallien suunnittelua, bookListItem ensimmäinen versio                                                                                                          |
| 2022-06-06 | 2    | Uusia koponentteja kirjalistan luomiseen                                                                                                                                       |
| 2022-06-07 | 2    | Kirjalista-item-komponentin kehitystä                                                                                                                                          |
| 2022-06-09 | 5    | Kirjalistaitemin kehitystä, nappien lisäilyä, layoutin säätöä, overflowmenu, onpress-interaktioita, reduxin refaktorointi typescriptiin reduxtoimintojen                       |
| 2022-06-10 | 3    | Kirjalistaitemin kehitystä, paragraph-komponentti, kirjan poisto, logiikan parannus: mm. päivämäärien formatointi                                                              |
| 2022-06-11 | 10   | Kirjanmerkit feature - mvp, google admob mainoksien konfigurointi ja lisäys, redux persist datan tallentamiseen, pdf viewer typescriptiin,                                     |
| 2022-06-12 | 4    | Main menu mvp                                                                                                                                                                  |
| 2022-06-13 | 7    | Thumbnailien generointi kirjoista, uusia screenejä                                                                                                                             |
| 2022-06-15 | 3    | Kirjan sivun vaihtologiikan parannus, onclick vaihto feature, asettelun kanssa säätäminen                                                                                      |
| 2022-06-23 | 3    | Uusi layout                                                                                                                                                                    |
| 2022-06-24 | 3    | App-headerin parannuksia, kirjanmerkit bugifiksailua                                                                                                                           |
| 2022-06-28 | 3    | Kirjan valinnan parannuksia, edge casejen handlaus, tyylimuutoksia                                                                                                             |
| 2022-07-02 | 5    | Pikkupanannuksia ympäri appia, edge casejen handlaus eri puolella (esim labeleissa), kirjanmerkin poisto,                                                                      |
| 2022-07-07 | 4    | Pdf viewer korjauksia, zoomin söilytys muistissa, sivuttain käytön poisto, version päivitys                                                                                    |
| 2022-08-08 | 5    | Zoomin bugien korjailua, thumbnail-kuvien tallennus muistiin                                                                                                                   |
| 2022-08-17 | 5    | File systeemin ja kirjatiedostojen tallennuksen kanssa kamppailua                                                                                                              |
| 2022-08-23 | 4    | Vieläkin jumissa filesysteemin ja kirjatiedostojen tallennuksen kanssa, apupyyntö applelle                                                                                     |
| 2022-12-27 | 6    | P1:Kirjan tallennus toimii vihdoin, full screen kirjanlukumode, tyhjän kirjastosivun handlaus, ikonimuutoksia, refaktorointi, puuttuvan thumbnailin handlaus,                  |
| 2022-12-27 | 6    | P2: projektin metatietojen ja konfiguraatiotiedostojen kanssa säätäminen app-storeen julkaisua varten. Muuta julkaisuun liittyvää säätöä                                       |
| 2022-12-28 | 10   | Mainoksien consent-ikkunan lisäys ja konffaus, refauktorointia ja bugifiksejä, appin conffin ja metatietotiedostojen kanssa säätöä. Appin julkaisu                             |
| 2022-12-29 | 10   | Tiedostonimet handlaavat nyt myös spacet, lukuisia muita julkaisun yhteyydessä havaittuja bugeja korjattu. User guide                                                          |
| 2023-01-07 | 4    | App info - screen                                                                                                                                                              |
| 2023-01-08 | 9    | Reading view parannuksie, v.1.0.3 julkaisu. Dark moden handlaus mm. statusbarissa. IPadille julkaisua varten vaadittavaa refaktorointia                                        |
| 2023-01-09 | 9    | Page jumper -komponentti. Fiksejä mm. kirjanmerkkien järjestyksen rendaukseen, edge casejen hanlaukseen                                                                        |
| 2023-01-10 | 7    | Bugifixejä mm. thumbnailin poistoon liittyen, kadonneiden tiedostojen handlaus, uusi versio ulos                                                                               |
| 2023-01-10 | 6    | Nyt appi luo joka kirjasta kopion omaan sisäiseen muistiinsa, haluaisin sen sijaan tallentaa ainoastaan referenssin tiedostopolkuun, tuottaa haasteita                         |
| 2023-01-11 | 9    | Kirjojen tallennuksen kanssa kamppailua huonolla menestyksellä. Hämärä virhetila c-compilerissa, jota ei saa korjattua, luovutus                                               |
