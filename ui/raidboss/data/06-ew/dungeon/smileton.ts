import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

// TODO: Big Cheese Bomb directions?
// TODO: Big Cheese Bombs are only spawned once, is it possible the fast one is always the same id?

export interface Data extends RaidbossData {
  smileyFace: boolean;
  frownyFace: boolean;
}

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.Smileton,
  timelineFile: 'smileton.txt',
  initData: () => {
    return {
      smileyFace: false,
      frownyFace: false,
    };
  },
  triggers: [
    {
      id: 'Smileton Face Off My Lawn',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: ['6C5E', '673E'], source: 'Face', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['6C5E', '673E'], source: 'Fratze', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['6C5E', '673E'], source: 'Visage Imperturbable', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['6C5E', '673E'], source: 'フェイス', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Knockback (one row)',
          de: 'Rückstoß (eine Reihe)',
          fr: 'Poussée (une ligne)',
          ko: '넉백 (한 칸)',
        },
      },
    },
    {
      id: 'Smileton Face Temper\'s Flare',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6743', source: 'Face', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6743', source: 'Fratze', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6743', source: 'Visage Imperturbable', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6743', source: 'フェイス', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Smileton Face Heart on Fire IV',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6742', source: 'Face' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6742', source: 'Fratze' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6742', source: 'Visage Imperturbable' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6742', source: 'フェイス' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Smileton Face Smiley Face Gain',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: 'ACB', source: 'Relatively Small Face' }),
      condition: Conditions.targetIsYou(),
      run: (data) => data.smileyFace = true,
    },
    {
      id: 'Smileton Face Smiley Face Lose',
      type: 'LosesEffect',
      netRegex: NetRegexes.losesEffect({ effectId: 'ACB', source: 'Relatively Small Face' }),
      condition: Conditions.targetIsYou(),
      run: (data) => data.smileyFace = false,
    },
    {
      id: 'Smileton Face Frowny Face Gain',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: 'ACC', source: 'Relatively Small Face' }),
      condition: Conditions.targetIsYou(),
      run: (data) => data.frownyFace = true,
    },
    {
      id: 'Smileton Face Frowny Face Lose',
      type: 'LosesEffect',
      netRegex: NetRegexes.losesEffect({ effectId: 'ACC', source: 'Relatively Small Face' }),
      condition: Conditions.targetIsYou(),
      run: (data) => data.frownyFace = false,
    },
    {
      id: 'Smileton Face MixedFeelings',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6738', source: 'Face', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6738', source: 'Fratze', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6738', source: 'Visage Imperturbable', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6738', source: 'フェイス', capture: false }),
      suppressSeconds: 1,
      infoText: (data, _matches, output) => {
        if (data.smileyFace)
          return output.frowny!();
        if (data.frownyFace)
          return output.smiley!();
        return output.either!();
      },
      outputStrings: {
        smiley: {
          en: 'Get hit by blue smiley',
          de: 'Von der blauen Grinsen treffen lassen',
          fr: 'Faites-vous toucher par un sourir bleu',
          ko: '파란색 얼굴이 쏘는 빔 맞기',
        },
        frowny: {
          en: 'Get hit by red frowny',
          de: 'Von dem roten Grimigen treffen lassen',
          fr: 'Faites-vous toucher par un visage en colère rouge',
          ko: '빨간색 얼굴이 쏘는 빔 맞기',
        },
        either: {
          en: 'Get hit by red or blue face',
          de: 'Von irgendeiner Farbe treffen lassen', // FIXME
          fr: 'Faites-vous toucher par une couleur', // FIXME
          ko: '아무 색의 빔 하나 맞기', // FIXME
        },
      },
    },
    {
      id: 'Smileton Frameworker Circular Saw',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6745', source: 'Frameworker', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6745', source: 'Rahmenwerker', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6745', source: 'Ouvrier Modeleur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6745', source: 'フレームワーカー', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Smileton Frameworker Steel Beam',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6744', source: 'Frameworker' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6744', source: 'Rahmenwerker' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6744', source: 'Ouvrier Modeleur' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6744', source: 'フレームワーカー' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Smileton The Big Cheese Violent Discharge',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6752', source: 'The Big Cheese', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6752', source: 'Bittelächeln', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6752', source: 'Béatotron', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6752', source: 'ビッグチーズ', capture: false }),
      response: Responses.goRight(),
    },
    {
      id: 'Smileton The Big Cheese Right Disassembler',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '674F', source: 'The Big Cheese', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '674F', source: 'Bittelächeln', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '674F', source: 'Béatotron', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '674F', source: 'ビッグチーズ', capture: false }),
      response: Responses.goRight(),
    },
    {
      id: 'Smileton The Big Cheese Left Disassembler',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6750', source: 'The Big Cheese', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6750', source: 'Bittelächeln', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6750', source: 'Béatotron', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6750', source: 'ビッグチーズ', capture: false }),
      response: Responses.goLeft(),
    },
    {
      id: 'Smileton The Big Cheese Piercing Missile',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6751', source: 'The Big Cheese' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6751', source: 'Bittelächeln' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6751', source: 'Béatotron' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6751', source: 'ビッグチーズ' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Smileton The Big Cheese Leveling Missile',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6755', source: 'The Big Cheese' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6755', source: 'Bittelächeln' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6755', source: 'Béatotron' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6755', source: 'ビッグチーズ' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Smileton The Big Cheese Electric Arc',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6753', source: 'The Big Cheese' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6753', source: 'Bittelächeln' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6753', source: 'Béatotron' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6753', source: 'ビッグチーズ' }),
      response: Responses.stackMarkerOn(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Left Disassembler/Right Disassembler': 'Left/Right Disassembler',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        '(?<!Excavation )Bomb': 'Bombe',
        'Excavation Bomb': 'Sprengladung',
        'Face': 'Fratze',
        'Frameworker': 'Rahmenwerker',
        'Printed Worker': 'Druckwerker',
        'Smileport': 'Tor des Breiten Lächelns',
        'The Big Cheese': 'Bittelächeln',
        'The Frame': 'Hauptrahmen',
        'The Welcome Wheel': 'Herzlich-Willkommen-Halle',
      },
      'replaceText': {
        'Circular Saw': 'Rundstreich',
        'Dispense Explosives': 'Schusslegung',
        'Electric Arc': 'Elektrischer Bogen',
        'Excavated': 'Schusssprengung',
        'Explosive Power': 'Schusszündung',
        'Explosives Distribution': 'Bombenladung',
        'Heart on Fire IV': 'Flackerndes Feuka',
        'Iron Kiss': 'Eiserner Kuss',
        'Leap Forward': 'Vorwärtssprung',
        'Left Disassembler': 'Linker Demontier-Arm',
        'Leveling Missile': 'Planierrakete',
        'Lines of Fire': 'Kommando Feuer',
        'Mixed Feelings': 'Fluch des Fressens',
        'Off My Lawn': 'Hinausdrängen',
        'Omnidimensional Onslaught': 'Omnidimensionale Offensive',
        'Piercing Missile': 'Förderrakete',
        'Print Workers': 'Werkerdruck',
        'Right Disassembler': 'Rechter Demontier-Arm',
        'Steel Beam': 'Frontalstreich',
        'Temper\'s Flare': 'Flackerndes Flare',
        'Temper, Temper': 'Flackernde Flamme',
        'Upside Down': 'Kommando Drehen',
        'Violent Discharge': 'Heftige Entladung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        '(?<!Excavation )Bomb': 'bombe',
        'Excavation Bomb': 'mine de forage',
        'Face': 'Visage Imperturbable',
        'Frameworker': 'ouvrier modeleur',
        'Printed Worker': 'ouvrier manufacturé',
        'Smileport': 'Porte de la Gaieté',
        'The Big Cheese': 'Béatotron',
        'The Frame': 'Matrice du Bonheur',
        'The Welcome Wheel': 'Place de l\'Hospitalité',
      },
      'replaceText': {
        'Circular Saw': 'Assaut tailladant omnidirectionnel',
        'Dispense Explosives': 'Explosifs de forage',
        'Electric Arc': 'Arc électrique',
        'Excavated': 'Mine de forage',
        'Explosive Power': 'Pose de mines de forage',
        'Explosives Distribution': 'Distributeur de charges explosives',
        'Heart on Fire IV': 'Giga Feu crépitant',
        'Iron Kiss': 'Charge explosive',
        'Leap Forward': 'Assaut plongeant avant',
        'Left Disassembler/Right Disassembler': 'Atomiseur gauche/droit',
        'Leveling Missile': 'Missile de nivellement',
        'Lines of Fire': 'Extériorisation',
        'Mixed Feelings': 'Humeur instable',
        'Off My Lawn': 'Bourrade amicale',
        'Omnidimensional Onslaught': 'Assaut omnidirectionnel en deux temps',
        'Piercing Missile': 'Missiles foreurs',
        'Print Workers': 'Manufacture d\'ouvrier',
        'Steel Beam': 'Assaut tailladant avant',
        'Temper\'s Flare': 'Brasier crépitant',
        'Temper, Temper': 'Flammes crépitantes',
        'Upside Down': 'Saute d\'humeur',
        'Violent Discharge': 'Décharge forcée',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        '(?<!Excavation )Bomb': '爆弾',
        'Excavation Bomb': '採掘爆弾',
        'Face': 'フェイス',
        'Frameworker': 'フレームワーカー',
        'Printed Worker': 'プリンテッドワーカー',
        'Smileport': '笑顔あふれる正門',
        'The Big Cheese': 'ビッグチーズ',
        'The Frame': 'ビッグチーズ',
        'The Welcome Wheel': '大歓迎の玄関',
      },
      'replaceText': {
        'Circular Saw': '全体斬攻撃',
        'Dispense Explosives': '採掘爆弾設置',
        'Electric Arc': 'アーク放電',
        'Excavated': '採掘爆弾爆発',
        'Explosive Power': '採掘爆弾起爆',
        'Explosives Distribution': '爆弾供給',
        'Heart on Fire IV': 'メラメラファイジャ',
        'Iron Kiss': '着弾',
        'Leap Forward': '前方跳躍攻撃',
        'Left Disassembler': '左腕分解砲',
        'Leveling Missile': '整地ミサイル',
        'Lines of Fire': '斉射の号令',
        'Mixed Feelings': 'ペロペロの呪い',
        'Off My Lawn': '押し出し',
        'Omnidimensional Onslaught': '連続多方向攻撃',
        'Piercing Missile': '採掘ミサイル',
        'Print Workers': 'ワーカー・プリントアウト',
        'Right Disassembler': '右腕分解砲',
        'Steel Beam': '前方斬攻撃',
        'Temper\'s Flare': 'メラメラフレア',
        'Temper, Temper': 'メラメラフレイム',
        'Upside Down': '回転の号令',
        'Violent Discharge': '強制放電',
      },
    },
  ],
};

export default triggerSet;
