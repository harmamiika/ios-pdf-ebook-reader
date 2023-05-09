MyPDFBooks, on PDF-tiedostonlukija iOS:lle, joka on tehty PDF-muotoisten kirjojen lukemisen helpottamiseksi. Applen Books-appi ei anna lukea paikallisia tiedostoja, vaan kirjat täytyy ostaa apin sisältä. En myöskään löytänyt paikallisten tiedostojen lukemiseen sopivaa appia sovelluskaupasta, josta syntyi idea appiin. Oikeastaan appi on IOS kopio Androidille saatavasta ReadEra-sovelluksesta.

Appi on hyväksytty ja jakelussa App storessa, mikä oli oikeastaan tämän projektin suurin tavoite. Päivittäisiä käyttäjiä on tällä hetkellä keskimäärin peräti noin 10. Kehitys on tällä hetkellä paussilla, koska en saa devbundlea enää buildattua palattuani projektiin parin kuukauden jälkeen. Jos sattuisi osata auttamaan tässä, niin olen kyllä kiinnostunut! (stackoverflow ja google kahlattu jo läpi)
(Error: CompileC /Users/miikaharma/Library/Developer/Xcode/DerivedData/mybookpdf-fuxggahnjvjikvcrctkvecdssqma/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/Yoga.build/Objects-normal/arm64/Yoga.o /Users/miikaharma/code/22projects/mybookpdf/node_modules/react-native/ReactCommon/yoga/yoga/Yoga.cpp normal arm64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'Yoga' from project 'Pods')
(1 failure))

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

AIKAKIRJAUKSET:

| 10e22c5 | Miika Härmä | 2022-05-11 | app inited and working |
| e2749c1 | Miika Härmä | 2022-05-11 | added navigation, need to import react |
| f7644f1 | Miika Härmä | 2022-05-11 | navigation perhaps working?? |
| 8359bc1 | Miika Härmä | 2022-05-11 | pdf viewer added |
| d5082d0 | Miika Härmä | 2022-05-11 | filepicker, booklistitem |
| 2d6c16f | Miika Härmä | 2022-05-11 | redux & toolkit wired up |
| 545fca4 | Miika Härmä | 2022-05-11 | prettier config and add book to list action |
| a1454dc | Miika Härmä | 2022-05-11 | book list start |
| 8242a21 | Miika Härmä | 2022-05-11 | tryint to view selected files |
| 746d05a | Miika Härmä | 2022-05-11 | can pick files to show |
| 9935ccd | Miika Härmä | 2022-05-11 | refactor to src |
| 0351666 | Miika Härmä | 2022-05-13 | added redux etc pre bugged state |
| f26ead0 | Miika Härmä | 2022-05-13 | some redux stuff is working i think |
| 004d954 | Miika Härmä | 2022-05-13 | get books async thunk working |
| f5a8176 | Miika Härmä | 2022-05-13 | store almost making sense now |
| bee54d6 | Miika Härmä | 2022-05-13 | okay redux stor & local storage working vey nicely |
| 4b8c93e | Miika Härmä | 2022-05-13 | book data model created, uuid |
| 166dd11 | Miika Härmä | 2022-05-14 | some current page saving struggles |
| ab6cd53 | Miika Härmä | 2022-05-14 | Page change works ! |
| 66e217b | Miika Härmä | 2022-05-14 | reducer fix |
| 0393da7 | Miika Härmä | 2022-05-14 | cleaning |
| 61f6107 | Miika Härmä | 2022-05-15 | before switching to ui kitten |
| 12c22de | Miika Härmä | 2022-05-15 | book list rendered a bit bettter |
| 2afe857 | Miika Härmä | 2022-05-26 | fonts added properly |
| 203a354 | Miika Härmä | 2022-05-26 | font awesome5 icon to header |
| d171a10 | Miika Härmä | 2022-05-26 | refactored filepicker to header |
| 37f21c0 | Miika Härmä | 2022-05-26 | some more icons added |
| 79ee69f | Miika Härmä | 2022-05-27 | library icon added |
| 55ccf14 | Miika Härmä | 2022-05-27 | added bookicon |
| f8f0dab | Miika Härmä | 2022-05-27 | installed ts |
| bf3c8d5 | Miika Härmä | 2022-05-27 | add ts, refactor navigation |
| cc58280 | Miika Härmä | 2022-05-27 | library list improvements |
| 006614a | Miika Härmä | 2022-05-27 | swipe gestures i, centered book finally well |
| 0da2120 | Miika Härmä | 2022-05-27 | pdf page change on gestures |
| d2bf84b | Miika Härmä | 2022-05-27 | small pdf clean |
| 2f6155c | Miika Härmä | 2022-05-31 | some progress but zoomstate is not working |
| 21c9655 | Miika Härmä | 2022-05-31 | some debug stuff, no progress really |
| de9d15e | Miika Härmä | 2022-06-03 | zoom MVP |
| 3afad72 | Miika Härmä | 2022-06-03 | page change with panresponder insted of library |
| 56e2b24 | Miika Härmä | 2022-06-03 | pdfviewer cleanup |
| b9de680 | Miika Härmä | 2022-06-04 | readme, some store typing thinkning, book total pa |
| cb65738 | Miika Härmä | 2022-06-04 | log updatning |
| bb48c87 | Miika Härmä | 2022-06-04 | readme planning, custom booklistitem initial |
| 03399bd | Miika Härmä | 2022-06-06 | some new components to create booklist |
| 4eddd20 | Miika Härmä | 2022-06-06 | book name remove fiel extension |
| 6c7502f | Miika Härmä | 2022-06-07 | booklistitem progress |
| fd0d7e9 | Miika Härmä | 2022-06-09 | some pretty nice progress on list item css |
| 61f9f99 | Miika Härmä | 2022-06-09 | some ideas written down |
| fbe595c | Miika Härmä | 2022-06-09 | button well on with content |
| dab26b4 | Miika Härmä | 2022-06-09 | good layout |
| 7b7f76f | Miika Härmä | 2022-06-09 | icons to overflow menu |
| 8518397 | Miika Härmä | 2022-06-09 | some ui progress, on press |
| 0e79c9d | Miika Härmä | 2022-06-09 | redux to ts |
| 914c2b3 | Miika Härmä | 2022-06-10 | paragraph component - noticed the listItem bug |
| 60530fc | Miika Härmä | 2022-06-10 | delete book |
| 2858dc4 | Miika Härmä | 2022-06-10 | some list item details logic, date fns |
| f28242a | Miika Härmä | 2022-06-11 | bookmarks icon for marking active book |
| 08cd684 | Miika Härmä | 2022-06-11 | google admob working |
| 378bf03 | Miika Härmä | 2022-06-11 | initialized ads succesfullly |
| f552abf | Miika Härmä | 2022-06-11 | bannerad used almost prperly |
| ac3c621 | Miika Härmä | 2022-06-11 | sprint planning |
| 97e13bc | Miika Härmä | 2022-06-11 | initial setup |
| 11b1f9b | Miika Härmä | 2022-06-11 | redux persist, datamodel changes |
| ce9291f | Miika Härmä | 2022-06-11 | some file reordering |
| c85416d | Miika Härmä | 2022-06-11 | pdfviewer to ts |
| 57fe2b0 | Miika Härmä | 2022-06-11 | initial pdf viewer no activebook feedback |
| 5be866e | Miika Härmä | 2022-06-11 | booklistitem bugfix!!! |
| 979e51a | Miika Härmä | 2022-06-11 | styles small changes |
| 0a25ea3 | Miika Härmä | 2022-06-11 | bookmarks mvp |
| 3c87f44 | Miika Härmä | 2022-06-12 | menu list mvp |
| 55e48ca | Miika Härmä | 2022-06-12 | icons for app build |
| 21a1d85 | Miika Härmä | 2022-06-13 | add some screens |
| 7a21f22 | Miika Härmä | 2022-06-13 | some menu screens |
| c78886c | Miika Härmä | 2022-06-13 | thumbnails working !!!!!!!!!!!!! |
| 1c80ba3 | Miika Härmä | 2022-06-15 | onclick change page, image positioning struggles |
| 4a7a599 | Miika Härmä | 2022-06-23 | New layout |
| 88ef7bd | Miika Härmä | 2022-06-23 | layout v 2 |
| 5036fd9 | Miika Härmä | 2022-06-23 | cleaned up styles |
| a41f053 | Miika Härmä | 2022-06-24 | header to touchable opacity, header final form |
| 275bd78 | Miika Härmä | 2022-06-24 | bookmarks mpv fix |
| 650fdc7 | Miika Härmä | 2022-06-28 | readme, testflight v0.1 changes |
| e255832 | Miika Härmä | 2022-06-28 | file picker usage improvements and ts |
| e8fd3a3 | Miika Härmä | 2022-06-28 | buttons padding |
| f0b814c | Miika Härmä | 2022-07-02 | small improvements |
| 3a23661 | Miika Härmä | 2022-07-02 | delete bookmark |
| 5f1188e | Miika Härmä | 2022-07-02 | book name max length fix |
| ea2d5fa | Miika Härmä | 2022-07-02 | menuitem border fix |
| 4b55868 | Miika Härmä | 2022-07-07 | pdf viewer size fix |
| 324c209 | Miika Härmä | 2022-07-07 | zoom persist fix |
| c87ebbf | Miika Härmä | 2022-07-07 | small changes |
| a3d3424 | Miika Härmä | 2022-07-07 | prevent sideways view |
| 5302ed0 | Miika Härmä | 2022-07-07 | vresion update |
| daa7c32 | Miika Härmä | 2022-08-06 | zoom bugging |
| 146cac4 | Miika Härmä | 2022-08-08 | zoom fix |
| 699c8d0 | Miika Härmä | 2022-08-08 | images persist in store! / pdfs not yet |
| e427461 | Miika Härmä | 2022-08-17 | uri improvements |
| 1c8b710 | Miika Härmä | 2022-08-17 | shiit |
| 372db26 | Miika Härmä | 2022-08-23 | send to support commit |
| bbd5992 | Miika Härmä | 2022-08-23 | md |
| 2c721c5 | Miika Härmä | 2022-12-27 | save working? maybe? |
| 0f243f6 | Miika Härmä | 2022-12-27 | add possibility to for full screen mode pdf view |
| 367341c | Miika Härmä | 2022-12-27 | add full screen toggle trigger |
| efa1570 | Miika Härmä | 2022-12-27 | handle file path that cant be reached |
| 350bb49 | Miika Härmä | 2022-12-27 | delete book working |
| 66b4b6e | Miika Härmä | 2022-12-27 | add library empty feedback, improve simplescreen |
| 1c1e671 | Miika Härmä | 2022-12-27 | small change to simplescreen |
| b7c3745 | Miika Härmä | 2022-12-27 | make header title to be a component |
| c54982b | Miika Härmä | 2022-12-27 | change icon colors |
| 3ac96e6 | Miika Härmä | 2022-12-27 | untested logic for recreating missing thumbnail |
| 1c260cc | Miika Härmä | 2022-12-27 | cleanup, remove todo stuff from ui |
| 0f8131d | Miika Härmä | 2022-12-27 | change icons, launch screen, info.plist |
| 95f6d67 | Miika Härmä | 2022-12-27 | project name fix consistency |
| c94da73 | Miika Härmä | 2022-12-27 | change name |
| 5d89ec2 | Miika Härmä | 2022-12-27 | change name also in app |
| 71b3b2f | Miika Härmä | 2022-12-27 | updates |
| 8e5bcb4 | Miika Härmä | 2022-12-27 | ad changes |
| 7caf542 | Miika Härmä | 2022-12-27 | changes |
| 3a00d18 | Miika Härmä | 2022-12-28 | small changes |
| 11ee83b | Miika Härmä | 2022-12-28 | add ads consent |
| 176266e | Miika Härmä | 2022-12-28 | reafactor a bit |
| 4879cbb | Miika Härmä | 2022-12-28 | ciriticatl bugfix |
| 2e5ec5b | Miika Härmä | 2022-12-28 | update appinfo, new icons |
| f9d423e | Miika Härmä | 2022-12-28 | new icons, change project version |
| 985df9c | Miika Härmä | 2022-12-29 | fixed filenames with spaces bug :) |
| 4374903 | Miika Härmä | 2022-12-29 | a lot of small fixes |
| d291070 | Miika Härmä | 2022-12-29 | make first book autoselect |
| b3f4375 | Miika Härmä | 2022-12-29 | double press navigates to reading view |
| 4e9a889 | Miika Härmä | 2022-12-29 | improve delete modal, add help section |
| 3f7d8c8 | Miika Härmä | 2022-12-29 | small header improvement |
| 636a079 | Miika Härmä | 2022-12-29 | 1 more add to userguide |
| f12c8f4 | Miika Härmä | 2022-12-29 | update version |
| 6ef6864 | Miika Härmä | 2023-01-06 | change project version number |
| 02aa39a | Miika Härmä | 2023-01-07 | add made in finland to app info |
| 0c1b3ad | Miika Härmä | 2023-01-07 | booklistitem top padding to themed |
| aa62e1d | Miika Härmä | 2023-01-07 | improve app info |
| 7f5ebd6 | Miika Härmä | 2023-01-08 | improvements to reading view, 1.0.3 release |
| 2d6e9f4 | Miika Härmä | 2023-01-08 | statusbar works correctly in dark mode |
| 5d812ce | Miika Härmä | 2023-01-08 | ipad support |
| e5ce3b3 | Miika Härmä | 2023-01-08 | add overflowmenubuttons to update state |
| 11f729b | Miika Härmä | 2023-01-08 | library ui v2 |
| d7d96ba | Miika Härmä | 2023-01-08 | few more small ui changes |
| 4f6ddf7 | Miika Härmä | 2023-01-08 | disable book reset after finishing book |
| 6374a4a | Miika Härmä | 2023-01-08 | change list item top color |
| a225f05 | Miika Härmä | 2023-01-08 | fix icon |
| fe1147a | Miika Härmä | 2023-01-08 | add ipad support stuff try1 |
| b5b1ae8 | Miika Härmä | 2023-01-09 | change file not found -text |
| 847803e | Miika Härmä | 2023-01-09 | slider initial |
| 8338fce | Miika Härmä | 2023-01-09 | style improvements |
| 49ec2eb | Miika Härmä | 2023-01-09 | finish page jumper v1 |
| b368a26 | Miika Härmä | 2023-01-09 | handle book title better on tablet |
| 92c6e31 | Miika Härmä | 2023-01-09 | change version, add library top border |
| bb30baf | Miika Härmä | 2023-01-09 | bookmarks are ordered inside booklistitem, version change ipad thumbnail fix |
| f4c7092 | Miika Härmä | 2023-01-09 | fix foreign characters in file name bug |
| a818b5f | Miika Härmä | 2023-01-10 | bugfixes, version update |
| 9b0da7d | Miika Härmä | 2023-01-10 | thumbnail delete succesful, file exist helper, etc |
| f29228d | Miika Härmä | 2023-01-10 | try to be smart, just make a mess also cleaned up some lecacy stuff from data model |
| f78acce | Miika Härmä | 2023-01-10 | change second admob ad id |
| fb0c440 | Miika Härmä | 2023-01-11 | memory mess fixes |
| bb70f2d | Miika Härmä | 2023-01-11 | shieet |
