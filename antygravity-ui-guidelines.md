# Antygravity UI / Design System Alapfájl

## Cél
Ez a dokumentum azt írja le, hogy az alkalmazás vagy weboldal új felületi elemei a **főoldalon már meglévő vizuális stílust** kövessék. A cél egy következetes, rendezett, újrafelhasználható komponensrendszer kialakítása, amely könnyen bővíthető és egységes megjelenést biztosít.

---

## Általános elvárások

- A **főoldal stílusa legyen az alap** minden új oldalhoz és komponenshez.
- A dizájn legyen **letisztult, konzisztens, egységes**.
- A komponensek legyenek **újrafelhasználhatóak**, ne egyedi, szétszórt megoldások készüljenek minden új blokkhoz.
- A layout, a térközök, a tipográfia, a gombok és a dobozok mindenhol ugyanazt a rendszert kövessék.
- Amit csak lehet, **Tailwind CSS-sel** kell megoldani.
- Inline style csak akkor legyen, ha valami Tailwind-del nem oldható meg tisztán.
- A felület legyen jól strukturált, fejlesztőbarát, könnyen karbantartható.

---

## Stílusforrás

- A **főoldal** vizuális megoldásai szolgálnak referenciaként.
- Az ott használt:
  - betűméretek
  - színek
  - gombstílusok
  - árnyékok
  - lekerekítések
  - spacing rendszer
  - kártya / box / tile stílusok
  legyenek újrahasznosítva az egész projektben.
- Új elemek tervezésekor ne teljesen új stílus szülessen, hanem a meglévő designrendszer legyen továbbépítve.

---

## Komponensrendszer

A komponensek legyenek logikusan szétválasztva és újrafelhasználhatóak.

### Elvárt komponens-felosztás

Lehetőség szerint külön komponensek legyenek legalább ezekhez:

- `HeadingH1`
- `HeadingH2`
- `HeadingH3`
- `PrimaryButton`
- `SecondaryButton`
- `Section`
- `Container`
- `Card`
- `Tile`
- `InfoBox`
- `Badge`
- `Input`
- `Textarea`
- `Label`
- `Modal`
- `EmptyState`
- `PageHeader`

### Fontos szabályok

- A `h1`, `h2`, `h3` **mind külön komponens** legyen.
- A fő gombok és másodlagos gombok **központilag definiáltak** legyenek.
- A dobozok / boxok / tile elemek ne oldalspecifikusan legyenek újraírva, hanem közös komponensként működjenek.
- Az ismétlődő mintákból mindig közös komponens készüljön.
- Egy új UI elem készítése előtt mindig azt kell vizsgálni, hogy egy meglévő komponens bővíthető-e.

---

## Tipográfia

A tipográfia legyen következetes és központilag meghatározott.

### Címsorok

- `HeadingH1`: főoldali hero vagy elsődleges oldalcím
- `HeadingH2`: szekciócím
- `HeadingH3`: alblokkok vagy kisebb kiemelt címek

### Szabályok

- Ne legyen össze-vissza használva a címsorhierarchia.
- Egy oldalon általában 1 darab `h1` legyen.
- A `h2` és `h3` vizuálisan és szemantikailag is különüljön el.
- A heading komponensek Tailwind utility classokkal legyenek megoldva.
- A body szövegekhez is egységes méret- és színrendszer tartozzon.

### Javasolt példa

- `h1`: erős, hangsúlyos, nagy méret
- `h2`: jól elkülönülő szekciócím
- `h3`: kisebb, de markáns alcím
- `p`: normál szöveg jól olvasható sortávval
- `small`: segédszöveg, meta információ

---

## Gombrendszer

A gombok egységes rendszert kövessenek.

### Kötelező típusok

- `PrimaryButton`
- `SecondaryButton`
- opcionálisan:
  - `GhostButton`
  - `DangerButton`
  - `IconButton`

### Szabályok

- Az elsődleges gomb mindenhol ugyanúgy nézzen ki.
- A másodlagos gomb mindenhol ugyanúgy nézzen ki.
- Hover, focus, active, disabled állapotok legyenek következetesek.
- Azonos border-radius, padding, font-weight és transition rendszer legyen használva.
- A gombok Tailwind alapú osztályokkal legyenek definiálva, lehetőleg központi variánslogikával.

### Elvárás

Ne legyen olyan, hogy ugyanarra a szerepre több különböző gombstílus készül.

---

## Spacing rendszer

A marginok és paddingek ne legyenek véletlenszerűek.

### Szabályok

- Legyen egységes spacing scale.
- Ugyanazok a térközök ismétlődjenek a teljes projektben.
- Kerülni kell az esetleges, össze-vissza `mt-[13px]`, `px-[17px]` jellegű megoldásokat, ha standard Tailwind spacing használható.
- A szekciók, kártyák, belső elemek és grid gap-ek egységes rendszer szerint épüljenek fel.

### Javasolt spacing logika

- kis belső térköz: `p-2`, `p-3`
- normál belső térköz: `p-4`, `p-6`
- nagyobb blokk térköz: `p-8`, `p-10`, `p-12`
- elemek közti függőleges ritmus: `space-y-2`, `space-y-4`, `space-y-6`
- szekciótávolság: `py-12`, `py-16`, `py-20`

A pontos értékek a projekt stílusához igazodhatnak, de legyenek **rendszerszinten egységesek**.

---

## Layout és konténerek

- Központi `Container` komponens legyen a szélességek és vízszintes paddings kezelésére.
- Központi `Section` komponens kezelje a függőleges térközöket.
- A grid-ek és flex layoutok rendezettek legyenek.
- A tartalom ne tapadjon a szélekhez.
- Mobil és desktop nézetben is következetes töréspontok legyenek használva.

### Elvárás

- Egységes max-width rendszer
- Egységes responsive padding
- Egységes grid gap és oszlopkezelés

---

## Kártyák, boxok, tile elemek

Az ismétlődő vizuális blokkok közös designrendszert kövessenek.

### Lehetséges közös komponensek

- `Card`
- `Tile`
- `InfoBox`
- `FeatureCard`
- `StatCard`

### Közös vizuális szabályok

- egységes háttérkezelés
- egységes border vagy border nélküli rendszer
- egységes shadow rendszer
- egységes border-radius
- egységes belső padding
- egységes cím + leírás + action struktúra

### Elvárás

Ne legyen minden oldalon másféle doboz ugyanarra a funkcióra. A kártyaelemek legyenek variálhatóak, de ugyanabból a komponenscsaládból épüljenek fel.

---

## Színkezelés

A színek legyenek központilag kezelve, hogy később egyszerűen módosíthatóak legyenek.

### Elvárás

A projektben a színeket lehessen könnyen megadni vagy módosítani.

### Javasolt struktúra

- `primary`
- `primary-foreground`
- `secondary`
- `secondary-foreground`
- `accent`
- `accent-foreground`
- `background`
- `foreground`
- `muted`
- `muted-foreground`
- `border`
- `card`
- `card-foreground`
- `success`
- `warning`
- `danger`

### Kitölthető színminta

```md
primary: #
primary-foreground: #
secondary: #
secondary-foreground: #
accent: #
accent-foreground: #
background: #
foreground: #
muted: #
muted-foreground: #
border: #
card: #
card-foreground: #
success: #
warning: #
danger: #
```

### Technikai ajánlás

- Tailwind theme extension vagy CSS változók használata
- ne legyenek szétszórva hardcoded színek a komponensekben
- ahol lehet, design token alapú megközelítés legyen

---

## Tailwind irányelvek

A cél, hogy amit lehet, Tailwind-del oldjunk meg.

### Szabályok

- Utility-first megközelítés
- Ne legyen indokolatlan egyedi CSS
- Ismétlődő class struktúrák esetén érdemes közös komponensbe vagy helperbe szervezni
- A responsive viselkedés Tailwind breakpointokkal legyen kezelve
- A hover / focus / disabled / dark mode állapotok is egységesek legyenek

### Kerülendő

- szétszórt, nem újrafelhasználható class halmok
- oldalanként eltérő spacing logika
- hasonló elemekhez eltérő class-struktúrák
- random egyedi pixelértékek indokolatlan használata

---

## Fájlszervezési javaslat

```txt
components/
  typography/
    HeadingH1.tsx
    HeadingH2.tsx
    HeadingH3.tsx
  buttons/
    PrimaryButton.tsx
    SecondaryButton.tsx
    IconButton.tsx
  layout/
    Container.tsx
    Section.tsx
    PageHeader.tsx
  ui/
    Card.tsx
    Tile.tsx
    InfoBox.tsx
    Badge.tsx
    Input.tsx
    Textarea.tsx
    Label.tsx
    EmptyState.tsx
```

Ha van közös variánslogika, akkor lehet külön:

```txt
lib/
  ui/
    buttonVariants.ts
    cardVariants.ts
    spacing.ts
    theme.ts
```

---

## Elvárt fejlesztési szemlélet

Új képernyő vagy oldal készítésekor:

1. Először a főoldali dizájnrendszert kell figyelembe venni.
2. Meg kell nézni, van-e már meglévő újrafelhasználható komponens.
3. Ha nincs, új komponens készüljön úgy, hogy később újrahasználható legyen.
4. Nem szabad egyedi, csak egy helyen működő UI-megoldásokat halmozni.
5. A spacing, typography, colors, buttons és cards ugyanazt a rendszert kövesse.

---

## Rövid utasítás Antygravity számára

Az összes új felület a főoldalon meglévő stílust kövesse. A dizájn legyen egységes, rendezett és újrafelhasználható komponensekre építve. A `h1`, `h2`, `h3` külön komponensek legyenek. A primary és secondary gombok központilag definiált, egységes stílust kapjanak. A marginok és paddingek ne legyenek esetlegesek, hanem következetes spacing rendszer szerint épüljenek fel. A card, box, tile és egyéb design elemek közös komponensekből álljanak. Amit lehet, Tailwind-del kell megoldani. A színeket központilag lehessen megadni és módosítani.

---

## Opcionális extra kérés, ha Antygravity támogatja

Ha lehet, a generált kód:

- legyen tiszta és jól olvasható
- kerülje a duplikációt
- komponensalapú legyen
- könnyen bővíthető legyen
- mobilon és desktopon is konzisztensen működjön
- használjon egységes design token vagy Tailwind theme alapú rendszert

