import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { UnreachableCode } from '../../../../../resources/not_reached';
import Outputs from '../../../../../resources/outputs';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export interface Data extends RaidbossData {
  purgationDebuffs: { [role: string]: { [name: string]: number } };
  purgationDebuffCount: number;
}

// effect ids for inviolate purgation
const effectIdToOutputStringKey: { [effectId: string]: string } = {
  'CEE': 'spread',
  'D3F': 'spread',
  'D40': 'spread',
  'D41': 'spread',
  'CEF': 'stack',
  'D42': 'stack',
  'D43': 'stack',
  'D44': 'stack',
};

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.AbyssosTheSeventhCircleSavage,
  timelineFile: 'p7s.txt',
  initData: () => ({
    purgationDebuffs: { 'dps': {}, 'support': {} },
    purgationDebuffCount: 0,
  }),
  triggers: [
    {
      id: 'P7S Condensed Aero II',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '7836', source: 'Agdistis' }),
      response: Responses.sharedTankBuster(),
    },
    {
      id: 'P7S Dispersed Aero II',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '7835', source: 'Agdistis', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: 'Split Tankbusters',
      },
    },
    {
      id: 'P7S Hemitheos\'s Aero IV',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '7A0B', source: 'Agdistis', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'P7S Immature Stymphalide Tether',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '0011', source: 'Immature Stymphalide', capture: false }),
      // ~9s between tether and Bronze Bellows (no cast) in all cases.
      delaySeconds: 4,
      // Just give this to everyone.  People in towers or elsewhere can be safe.
      suppressSeconds: 1,
      response: Responses.knockback(),
    },
    {
      id: 'P7S Spark of Life',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '7839', source: 'Agdistis', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: 'aoe + bleed',
      },
    },
    {
      id: 'P7S Inviolate Bonds',
      type: 'GainsEffect',
      // CEC/D45 = Inviolate Winds
      // CED/D56 = Holy Bonds
      netRegex: NetRegexes.gainsEffect({ effectId: ['CEC', 'D45'] }),
      condition: Conditions.targetIsYou(),
      durationSeconds: 20,
      response: (_data, matches, output) => {
        // cactbot-builtin-response
        output.responseOutputStrings = {
          stackThenSpread: Outputs.stackThenSpread,
          spreadThenStack: Outputs.spreadThenStack,
        };

        const longTimer = parseFloat(matches.duration) > 9;
        if (longTimer)
          return { infoText: output.stackThenSpread!() };
        return { infoText: output.spreadThenStack!() };
      },
    },
    {
      id: 'P7S Inviolate Purgation',
      type: 'GainsEffect',
      // CEE = Purgatory Winds I
      // D3F = Purgatory Winds II
      // D40 = Purgatory Winds III
      // D41 = Purgatory Winds IV
      // CEF = Holy Purgation I
      // D42 = Holy Purgation II
      // D43 = Holy Purgation III
      // D44 = Holy Purgation IV
      netRegex: NetRegexes.gainsEffect({ effectId: ['CE[EF]', 'D3F', 'D4[01234]'] }),
      preRun: (data, matches) => {
        data.purgationDebuffCount += 1;

        const role = data.party.isDPS(matches.target) ? 'dps' : 'support';
        const debuff = data.purgationDebuffs[role];
        if (!debuff)
          return;
        debuff[matches.effectId.toUpperCase()] = parseFloat(matches.duration);
      },
      durationSeconds: 55,
      infoText: (data, _matches, output) => {
        if (data.purgationDebuffCount !== 20)
          return;

        // Sort effects ascending by duration
        const role = data.role === 'dps' ? 'dps' : 'support';
        const unsortedDebuffs = Object.keys(data.purgationDebuffs[role] ?? {});
        const sortedDebuffs = unsortedDebuffs.sort((a, b) => (data.purgationDebuffs[role]?.[a] ?? 0) - (data.purgationDebuffs[role]?.[b] ?? 0));

        // get stack or spread from effectId
        const effects = sortedDebuffs.map((effectId) => effectIdToOutputStringKey[effectId]);

        const [effect1, effect2, effect3, effect4] = effects;
        if (!effect1 || !effect2 || !effect3 || !effect4)
          throw new UnreachableCode();

        return output.comboText!({
          effect1: output[effect1]!(),
          effect2: output[effect2]!(),
          effect3: output[effect3]!(),
          effect4: output[effect4]!(),
        });
      },
      outputStrings: {
        comboText: {
          en: '${effect1} => ${effect2} => ${effect3} => ${effect4}',
          de: '${effect1} => ${effect2} => ${effect3} => ${effect4}',
        },
        spread: Outputs.spread,
        stack: Outputs.stackMarker,
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Condensed Aero II/Dispersed Aero II': 'Condensed/Dispersed Aero II',
      },
    },
    {
      'locale': 'de',
      'missingTranslations': true,
      'replaceSync': {
        'Agdistis': 'Agdistis',
        'Immature Io': 'unreif(?:e|er|es|en) Io',
        'Immature Minotaur': 'unreif(?:e|er|es|en) Minotaurus',
        'Immature Stymphalide': 'unreif(?:e|er|es|en) Stymphalides',
      },
      'replaceText': {
        '--chasing aoe--': '--verfolgende AoEs--',
        '--eggs--': '--Eier--',
        'arrow': 'Pfeil',
        'close': 'Nahe',
        'far': 'Entfernt',
        'Blades of Attis': 'Schwertblatt des Attis',
        'Bough of Attis': 'Ast des Attis',
        'Bronze Bellows': 'Böenschlag',
        'Bullish Slash': 'Bullenansturm',
        'Bullish Swipe': 'Bullenfeger',
        'Condensed Aero II': 'Gehäuftes Windra',
        'Dispersed Aero II': 'Flächiges Windra',
        'Forbidden Fruit': 'Frucht des Lebens',
        'Hemitheos\'s Aero III': 'Hemitheisches Windga',
        'Hemitheos\'s Aero IV': 'Hemitheisches Windka',
        'Hemitheos\'s Glare(?! III)': 'Hemitheische Blendung',
        'Hemitheos\'s Glare III': 'Hemitheisches Blendga',
        'Hemitheos\'s Holy(?! III)': 'Hemitheisches Sanctus',
        'Hemitheos\'s Holy III': 'Hemitheisches Sanctga',
        'Hemitheos\'s Tornado': 'Hemitheischer Tornado',
        'Immortal\'s Obol': 'Zweig des Lebens und des Todes',
        'Inviolate Bonds': 'Siegelschaffung',
        'Light of Life': 'Aurora des Lebens',
        'Multicast': 'Multizauber',
        'Roots of Attis': 'Wurzel des Attis',
        'Shadow of Attis': 'Lichttropfen des Attis',
        'Spark of Life': 'Schein des Lebens',
        'Static Path': 'Statischer Pfad',
        'Stymphalian Strike': 'Vogelschlag',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Agdistis': 'Agdistis',
        'Immature Io': 'io immature',
        'Immature Minotaur': 'minotaure immature',
        'Immature Stymphalide': 'stymphalide immature',
      },
      'replaceText': {
        'Blades of Attis': 'Lames d\'Attis',
        'Bough of Attis': 'Grandes branches d\'Attis',
        'Bronze Bellows': 'Frappe rafale',
        'Bullish Slash': 'Taillade catabatique',
        'Bullish Swipe': 'Balayage catabatique',
        'Condensed Aero II': 'Extra Vent concentré',
        'Dispersed Aero II': 'Extra vent étendu',
        'Forbidden Fruit': 'Fruits de la vie',
        'Hemitheos\'s Aero III': 'Méga Vent d\'hémithéos',
        'Hemitheos\'s Aero IV': 'Giga Vent d\'hémithéos',
        'Hemitheos\'s Glare(?! III)': 'Chatoiement d\'hémithéos',
        'Hemitheos\'s Glare III': 'Méga Chatoiement d\'hémithéos',
        'Hemitheos\'s Holy(?! III)': 'Miracle d\'hémithéos',
        'Hemitheos\'s Holy III': 'Méga Miracle d\'hémithéos',
        'Hemitheos\'s Tornado': 'Tornade d\'hémithéos',
        'Immortal\'s Obol': 'Branche de vie et de mort',
        'Light of Life': 'Éclair de vie',
        'Roots of Attis': 'Racines d\'Attis',
        'Shadow of Attis': 'Rai d\'Attis',
        'Spark of Life': 'Étincelle de vie',
        'Static Path': 'Chemin statique',
        'Stymphalian Strike': 'Assaut stymphalide',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Agdistis': 'アグディスティス',
        'Immature Io': 'イマチュア・イーオー',
        'Immature Minotaur': 'イマチュア・タウロス',
        'Immature Stymphalide': 'イマチュア・ステュムパリデス',
      },
      'replaceText': {
        'Blades of Attis': 'アッティスの刃葉',
        'Bough of Attis': 'アッティスの巨枝',
        'Bronze Bellows': 'ガストストライク',
        'Bullish Slash': 'ブルスラッシュ',
        'Bullish Swipe': 'ブルスワイプ',
        'Condensed Aero II': 'アグリゲート・エアロラ',
        'Dispersed Aero II': 'スプレッド・エアロラ',
        'Forbidden Fruit': '生命の果実',
        'Hemitheos\'s Aero III': 'ヘーミテオス・エアロガ',
        'Hemitheos\'s Aero IV': 'ヘーミテオス・エアロジャ',
        'Hemitheos\'s Glare(?! III)': 'ヘーミテオス・グレア',
        'Hemitheos\'s Glare III': 'ヘーミテオス・グレアガ',
        'Hemitheos\'s Holy(?! III)': 'ヘーミテオス・ホーリー',
        'Hemitheos\'s Holy III': 'ヘーミテオス・ホーリガ',
        'Hemitheos\'s Tornado': 'ヘーミテオス・トルネド',
        'Immortal\'s Obol': '生滅の導枝',
        'Light of Life': '生命の極光',
        'Roots of Attis': 'アッティスの根',
        'Shadow of Attis': 'アッティスの光雫',
        'Spark of Life': '生命の光芒',
        'Static Path': 'スタティックパース',
        'Stymphalian Strike': 'バードストライク',
      },
    },
  ],
};

export default triggerSet;
