import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import Outputs from '../../../../../resources/outputs';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export interface Data extends RaidbossData {
  seenLovingEmbrace?: boolean;
}

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheDeadEnds,
  timelineFile: 'the_dead_ends.txt',
  triggers: [
    {
      id: 'DeadEnds Grebuloff Miasmata',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '653C', source: 'Caustic Grebuloff', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '653C', source: 'Typhoid Der Endzeit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '653C', source: 'Grébuloff En Stade Terminal', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '653C', source: 'グレビュオフ・メルター', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'DeadEnds Grebuloff Certain Solitude',
      type: 'Ability',
      // Corresponds with 0037 headmarker that comes out ~0.5s later.
      netRegex: NetRegexes.ability({ id: '6EBD', source: 'Caustic Grebuloff' }),
      netRegexDe: NetRegexes.ability({ id: '6EBD', source: 'Typhoid Der Endzeit' }),
      netRegexFr: NetRegexes.ability({ id: '6EBD', source: 'Grébuloff En Stade Terminal' }),
      netRegexJa: NetRegexes.ability({ id: '6EBD', source: 'グレビュオフ・メルター' }),
      condition: Conditions.targetIsYou(),
      response: Responses.doritoStack(),
    },
    {
      id: 'DeadEnds Grebuloff Blighted Water',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6542', source: 'Caustic Grebuloff' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6542', source: 'Typhoid Der Endzeit' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6542', source: 'Grébuloff En Stade Terminal' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6542', source: 'グレビュオフ・メルター' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'DeadEnds Grebuloff Befoulment',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6544', source: 'Caustic Grebuloff' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6544', source: 'Typhoid Der Endzeit' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6544', source: 'Grébuloff En Stade Terminal' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6544', source: 'グレビュオフ・メルター' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'DeadEnds Grebuloff Necrosis',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: 'B95' }),
      condition: (data) => data.CanCleanse(),
      infoText: (data, matches, output) => output.text!({ player: data.ShortName(matches.target) }),
      outputStrings: {
        text: {
          en: 'Esuna ${player}',
          de: 'Medica ${player}',
          fr: 'Guérison sur ${player}',
          ja: '${player} にエスナ',
          cn: '驱散: ${player}',
          ko: '"${player}" 에스나',
        },
      },
    },
    {
      id: 'DeadEnds Pox Flail',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6540', source: 'Caustic Grebuloff' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6540', source: 'Typhoid Der Endzeit' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6540', source: 'Grébuloff En Stade Terminal' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6540', source: 'グレビュオフ・メルター' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'DeadEnds Peacekeeper Decimation',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6550', source: 'Peacekeeper', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6550', source: 'Friedenswächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6550', source: 'Pacificateur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6550', source: 'ピースキーパー', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'DeadEnds Peacekeeper Infantry Deterrent',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6EC7', source: 'Peacekeeper' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6EC7', source: 'Friedenswächter' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6EC7', source: 'Pacificateur' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6EC7', source: 'ピースキーパー' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'DeadEnds Peacekeeper No Future Spread',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6548', source: 'Peacekeeper' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6548', source: 'Friedenswächter' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6548', source: 'Pacificateur' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6548', source: 'ピースキーパー' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'DeadEnds Peacekeeper Order To Fire',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6EBF', source: 'Peacekeeper', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6EBF', source: 'Friedenswächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6EBF', source: 'Pacificateur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6EBF', source: 'ピースキーパー', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Stand Between Bits',
          de: 'Zwichen den Satelliten stehen',
          ko: '비트 사이에 자리잡기',
        },
      },
    },
    {
      id: 'DeadEnds Peacekeeper Eclipsing Exhaust',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '654B', source: 'Peacekeeper', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '654B', source: 'Friedenswächter', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '654B', source: 'Pacificateur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '654B', source: 'ピースキーパー', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'DeadEnds Peacekeeper Elimination',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '654F', source: 'Peacekeeper' }),
      netRegexDe: NetRegexes.startsUsing({ id: '654F', source: 'Friedenswächter' }),
      netRegexFr: NetRegexes.startsUsing({ id: '654F', source: 'Pacificateur' }),
      netRegexJa: NetRegexes.startsUsing({ id: '654F', source: 'ピースキーパー' }),
      // TODO: this is maybe worth promoting to responses?
      response: (data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          tankLaserOnYou: {
            en: 'Tank Laser on YOU',
            de: 'Tank Laser auf DIR',
            fr: 'Tank laser sur VOUS',
            ja: '自分にタンクレーザー',
            cn: '坦克激光点名',
            ko: '탱 레이저 대상자',
          },
          tankLaserOnPlayer: {
            en: 'Tank Laser on ${player}',
            de: 'Tank Laser auf ${player}',
            ko: '${player} 탱 레이저',
          },
          avoidLaserOnPlayer: {
            en: 'Avoid Laser on ${player}',
            de: 'Weiche dem Laser von ${player} aus',
            ko: '${player} 탱 레이저 피하기',
          },
        };

        if (data.me === matches.target)
          return { alertText: output.tankLaserOnYou!() };
        if (data.role === 'healer')
          return { alertText: output.tankLaserOnPlayer!({ player: data.ShortName(matches.target) }) };
        return { info: output.avoidLaserOnPlayer!({ player: data.ShortName(matches.target) }) };
      },
    },
    {
      id: 'DeadEnds Ra-La Warm Glow',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '655E', source: 'Ra-la', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '655E', source: 'Ra-La', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '655E', source: 'Ra-La', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '655E', source: 'ラーラー', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'DeadEnds Ra-La Pity',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '655D', source: 'Ra-la' }),
      netRegexDe: NetRegexes.startsUsing({ id: '655D', source: 'Ra-La' }),
      netRegexFr: NetRegexes.startsUsing({ id: '655D', source: 'Ra-La' }),
      netRegexJa: NetRegexes.startsUsing({ id: '655D', source: 'ラーラー' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'DeadEnds Ra-la Benevolence',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '655A', source: 'Ra-la' }),
      netRegexDe: NetRegexes.startsUsing({ id: '655A', source: 'Ra-La' }),
      netRegexFr: NetRegexes.startsUsing({ id: '655A', source: 'Ra-La' }),
      netRegexJa: NetRegexes.startsUsing({ id: '655A', source: 'ラーラー' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'DeadEnds Ra-la Loving Embrace Right',
      type: 'StartsUsing',
      // The first Loving Embrace is a left/right cleave while the boss is in the middle of the room,
      // so give a left/right call to the safe side.  The remaining Loving Embrace casts are when
      // the boss has jumped all the way to an edge and the players are (probably) facing it and so
      // reverse the calls here.
      netRegex: NetRegexes.startsUsing({ id: '6557', source: 'Ra-la', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6557', source: 'Ra-La', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6557', source: 'Ra-La', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6557', source: 'ラーラー', capture: false }),
      alertText: (data, _matches, output) => data.seenLovingEmbrace ? output.right!() : output.left!(),
      run: (data) => data.seenLovingEmbrace = true,
      outputStrings: {
        left: Outputs.left,
        right: Outputs.right,
      },
    },
    {
      id: 'DeadEnds Ra-la Loving Embrace Left',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6558', source: 'Ra-la', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6558', source: 'Ra-La', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6558', source: 'Ra-La', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6558', source: 'ラーラー', capture: false }),
      alertText: (data, _matches, output) => data.seenLovingEmbrace ? output.left!() : output.right!(),
      run: (data) => data.seenLovingEmbrace = true,
      outputStrings: {
        left: Outputs.left,
        right: Outputs.right,
      },
    },
    {
      id: 'DeadEnds Ra-la Still Embrace',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '655C', source: 'Ra-la' }),
      netRegexDe: NetRegexes.startsUsing({ id: '655C', source: 'Ra-La' }),
      netRegexFr: NetRegexes.startsUsing({ id: '655C', source: 'Ra-La' }),
      netRegexJa: NetRegexes.startsUsing({ id: '655C', source: 'ラーラー' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'DeadEnds Ra-la Doom Cleanse',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: '6E9' }),
      condition: (data) => data.CanCleanse(),
      alertText: (data, matches, output) => output.cleanse!({ player: data.ShortName(matches.target) }),
      outputStrings: {
        cleanse: {
          en: 'Heal ${player} to Full',
          de: 'Heile ${player} voll',
          ko: '${player} 풀피 채우기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Caustic Grebuloff': 'Typhoid der Endzeit',
        'Golden Wings': 'golden(?:e|er|es|en) Schmetterling',
        'Peacekeeper': 'Friedenswächter',
        'Perpetual War Machine': 'automatisiert(?:e|er|es|en) Exterminator',
        'Ra-la': 'Ra-la',
        'The Deterrence Grounds': 'Hügel der Abschreckung',
        'The Shell Mound': 'Verfallenes Muschelhaus',
        'The World Tree': 'Garten des Weltenbaums',
        'Weeping Miasma': 'Pestbeule',
      },
      'replaceText': {
        '\\(circles\\)': '(Kreise)',
        '\\(spread\\)': '(Verteilen)',
        'Befoulment': 'Brackwasserbombe',
        'Benevolence': 'Philanthropie',
        'Blighted Water': 'Brackige Seele',
        'Certain Solitude': 'Einsame Verzweiflung',
        'Cough Up': 'Mutagene Giftlache',
        'Decimation': 'Omnidirektionalschuss',
        'Disengage Hatch': 'Speicherlukenöffnung',
        'Eclipsing Exhaust': 'Atomare Druckwelle',
        'Electromagnetic Repellant': 'Elektro-Massenentladung',
        'Elimination': 'Mörderischer Lichtstrahl',
        'Infantry Deterrent': 'Flächenbombe',
        'Lamellar Light': 'Phosphoreszenz',
        'Lifesbreath': 'Ode an das Leben',
        'Loving Embrace': 'Barmherzige Schwingen',
        'Miasmata': 'Exponentielles Gift',
        'Necrotic Fluid': 'Giftiger Spritzer',
        'No Future': 'Endloses Bombardement',
        'Order to Fire': 'Feuerbefehl',
        'Peacefire': 'Friedenskanonade',
        'Pity': 'Herzensgüte',
        'Pox Flail': 'Pockenschlag',
        'Prance': 'Schmetterlingsschwarm',
        'Small-bore Laser': 'Kleinkaliberstrahl',
        'Still Embrace': 'Schwingen des Seelenfriedens',
        'Warm Glow': 'Erlösendes Licht',
        'Wave of Nausea': 'Giftstrom',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Caustic Grebuloff': 'Grébuloff en stade terminal',
        'Golden Wings': 'papillon d\'or',
        'Peacekeeper': 'Pacificateur',
        'Perpetual War Machine': 'drone antipersonnel',
        'Ra-la': 'Ra-la',
        'The Deterrence Grounds': 'Colline des Dés jetés',
        'The Shell Mound': 'Amas coquillier naufragé',
        'The World Tree': 'Jardin de l\'Arbre-Monde',
        'Weeping Miasma': 'boule de toxine',
      },
      'replaceText': {
        'Befoulment': 'Bombe de pus',
        'Benevolence': 'Philanthropie',
        'Blighted Water': 'Eau contaminée',
        'Certain Solitude': 'Désespoir solitaire',
        'Cough Up': 'Épanchement pleural',
        'Decimation': 'Rayonnement incinérateur',
        'Disengage Hatch': 'Ouverture des écoutilles',
        'Eclipsing Exhaust': 'Purge des gaz',
        'Electromagnetic Repellant': 'Hyperdécharge électromagnétique',
        'Elimination': 'Laser antipersonnel',
        'Infantry Deterrent': 'Bombardement de terrassement',
        'Lamellar Light': 'Phosphorescence',
        'Lifesbreath': 'Vitalisme',
        'Loving Embrace': 'Aile de la bienveillance',
        'Miasmata': 'Propagation de la toxine',
        'Necrotic Fluid': 'Explosion de fiel',
        'No Future': 'Pas d\'avenir',
        'Order to Fire': 'Ordre d\'attaquer',
        'Peacefire': 'Dispenseur de paix',
        'Pity': 'Miséricorde',
        'Pox Flail': 'Poing variolé',
        'Prance': 'Cabriole',
        'Small-bore Laser': 'Laser à faisceau étroit',
        'Still Embrace': 'Aile du repos éternel',
        'Warm Glow': 'Lumière de la miséricorde',
        'Wave of Nausea': 'Torrent de toxine',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Caustic Grebuloff': 'グレビュオフ・メルター',
        'Golden Wings': '黄金蝶',
        'Peacekeeper': 'ピースキーパー',
        'Perpetual War Machine': '自動殺傷兵器',
        'Ra-la': 'ラーラー',
        'The Deterrence Grounds': '抑止の丘',
        'The Shell Mound': '消えゆく貝塚',
        'The World Tree': '世界樹の庭',
        'Weeping Miasma': '腐毒素',
      },
      'replaceText': {
        'Befoulment': '膿汁弾',
        'Benevolence': '博愛',
        'Blighted Water': '腐水塊',
        'Certain Solitude': '孤独の絶望',
        'Cough Up': '胸水流',
        'Decimation': '焼却光線',
        'Disengage Hatch': '格納ハッチ開放',
        'Eclipsing Exhaust': '大噴射',
        'Electromagnetic Repellant': '超電磁放射',
        'Elimination': '対人光線',
        'Infantry Deterrent': '対地爆弾',
        'Lamellar Light': '燐光',
        'Lifesbreath': '生気',
        'Loving Embrace': '慈愛の翼',
        'Miasmata': '腐毒素飛散',
        'Necrotic Fluid': '死腐毒飛散',
        'No Future': 'ノーフューチャー',
        'Order to Fire': '攻撃命令',
        'Peacefire': '平和砲',
        'Pity': '慈悲',
        'Pox Flail': '痘瘡の拳',
        'Prance': '躍動',
        'Small-bore Laser': '小口径光線',
        'Still Embrace': '安寧の翼',
        'Warm Glow': '慈光',
        'Wave of Nausea': '病の激流',
      },
    },
  ],
};

export default triggerSet;
