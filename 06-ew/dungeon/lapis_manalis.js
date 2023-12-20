const albionWildBeastMapEffectFlag = '00020001';
const albionWildBeastMapEffectLocations = {
  '21': ['west', 'north'],
  '22': ['west', 'middlenorth'],
  '23': ['west', 'middlesouth'],
  '24': ['west', 'south'],
  '25': ['east', 'north'],
  '26': ['east', 'middlenorth'],
  '27': ['east', 'middlesouth'],
  '28': ['east', 'south'],
};
Options.Triggers.push({
  id: 'LapisManalis',
  zoneId: ZoneId.LapisManalis,
  timelineFile: 'lapis_manalis.txt',
  timelineTriggers: [
    {
      id: 'Lapis Manalis Cagnazzo Tsunami',
      regex: /Tsunami/,
      beforeSeconds: 5,
      response: Responses.bigAoe(),
    },
  ],
  triggers: [
    // ---------------- first trash ----------------
    {
      id: 'Lapis Manalis Albus Griffin Winds of Winter',
      type: 'StartsUsing',
      netRegex: { id: '8011', source: 'Albus Griffin', capture: false },
      response: Responses.aoe(),
    },
    // ---------------- Albion ----------------
    {
      id: 'Lapis Albion Wild Beasts',
      type: 'MapEffect',
      netRegex: {
        flags: albionWildBeastMapEffectFlag,
        location: Object.keys(albionWildBeastMapEffectLocations),
      },
      durationSeconds: 8,
      infoText: (_data, matches, output) => {
        const beasts = albionWildBeastMapEffectLocations[matches.location];
        if (beasts === undefined || beasts[0] === undefined || beasts[1] === undefined)
          return output.text({ dir: output.unknown(), row: output.unknown() });
        return output.text({
          dir: output[beasts[0]](),
          row: output[beasts[1]](),
        });
      },
      outputStrings: {
        east: Outputs.east,
        west: Outputs.west,
        north: Outputs.north,
        south: Outputs.south,
        unknown: Outputs.unknown,
        middlenorth: {
          en: 'Middle-North',
          de: 'Norden-Mittig',
          fr: 'Milieu-Nord',
          ja: '中央ー北',
          cn: '中央-上 (北)',
          ko: '중앙-북쪽',
        },
        middlesouth: {
          en: 'Middle-South',
          de: 'Süden-Mittig',
          fr: 'Milieu-Sud',
          ja: '中央ー南',
          cn: '中央-下 (南)',
          ko: '중앙-남쪽',
        },
        text: {
          en: 'Stampede from ${dir} (${row} Row)',
          de: 'Stampede von ${dir} (${row} Reihe)',
          fr: 'Ruée depuis ${dir} (${row})',
          ja: '${dir}から突進 (${row}行)',
          cn: '${dir}冲锋 (${row} 行)',
          ko: '${dir}에서 돌진 (${row} 줄)',
        },
      },
    },
    {
      id: 'Lapis Manalis Albion Albion\'s Embrace',
      type: 'StartsUsing',
      netRegex: { id: '7A85', source: 'Albion' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Lapis Manalis Albion Right Slam',
      type: 'StartsUsing',
      netRegex: { id: '802D', source: 'Albion', capture: false },
      response: Responses.goLeft(),
    },
    {
      id: 'Lapis Manalis Albion Left Slam',
      type: 'StartsUsing',
      netRegex: { id: '802E', source: 'Albion', capture: false },
      response: Responses.goRight(),
    },
    {
      id: 'Lapis Manalis Albion Icebreaker',
      type: 'StartsUsing',
      netRegex: { source: 'Albion', id: '7A81', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away from tethered rock',
          de: 'Weg vom verbundenen Felsen',
          ja: '線の繋がる石回避',
          cn: '躲避连线石头',
          ko: '선 연결된 돌 피하기',
        },
      },
    },
    {
      id: 'Lapis Manalis Albion Icy Throes',
      type: 'StartsUsing',
      netRegex: { id: '7A83', source: 'Albion' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Lapis Manalis Albion Roar of Albion',
      type: 'StartsUsing',
      netRegex: { id: '7A84', source: 'Albion', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Hide Behind Boulder',
          de: 'Hinter Felsen verstecken',
          fr: 'Cachez-vous derrière le rocher',
          ja: 'ボルダーの後ろに',
          cn: '躲在石头后',
          ko: '돌 뒤에 숨기',
        },
      },
    },
    // ---------------- Galatea Magna ----------------
    {
      id: 'Lapis Manalis Galatea Magna Waxing Cycle',
      type: 'StartsUsing',
      netRegex: { id: '7A91', source: 'Galatea Magna', capture: false },
      response: Responses.getOutThenIn(),
    },
    {
      id: 'Lapis Manalis Galatea Magna Waning Cycle',
      type: 'StartsUsing',
      netRegex: { id: '7F6E', source: 'Galatea Magna', capture: false },
      response: Responses.getInThenOut(),
    },
    {
      id: 'Lapis Manalis Galatea Magna Soul Nebula',
      type: 'StartsUsing',
      netRegex: { id: '7A9E', source: 'Galatea Magna', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Lapis Manalis Galatea Soul Scythe',
      type: 'StartsUsing',
      netRegex: { id: '7A9A', source: 'Galatea Magna', capture: false },
      response: Responses.getBehind(),
    },
    {
      id: 'Lapis Manalis Galatea Magna Doom',
      // D24 = Doom
      type: 'GainsEffect',
      netRegex: { effectId: 'D24', source: 'Galatea Magna' },
      condition: (data) => data.CanCleanse(),
      alertText: (data, matches, output) =>
        output.text({ player: data.party.member(matches.target) }),
      outputStrings: {
        text: {
          en: 'Esuna ${player}',
          de: 'Medica ${player}',
          fr: 'Guérison sur ${player}',
          ja: '${player} にエスナ',
          cn: '驱散: ${player}',
          ko: '${player} 에스나',
        },
      },
    },
    {
      id: 'Lapis Manalis Galatea Magna Glassy-eyed',
      // DB7 = Glassy-eyed
      type: 'GainsEffect',
      netRegex: { effectId: 'DB7', source: 'Galatea Magna' },
      delaySeconds: (_data, matches) => parseFloat(matches.duration) - 3,
      suppressSeconds: 1,
      response: Responses.lookAway(),
    },
    {
      id: 'Lapis Manalis Galatea Magna Tenebrism',
      type: 'Ability',
      netRegex: { id: '7A96', source: 'Galatea Magna', capture: false },
      suppressSeconds: 1,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get towers',
          de: 'Türme nehmen',
          fr: 'Prenez les tours',
          ja: '塔へ',
          cn: '踩塔',
          ko: '기둥 들어가기',
        },
      },
    },
    {
      id: 'Lapis Manalis Galatea Magna Dark Harvest',
      type: 'StartsUsing',
      netRegex: { id: '7A9F', source: 'Galatea Magna' },
      response: Responses.tankBuster(),
    },
    // ---------------- Cagnazzo ----------------
    {
      id: 'Lapis Manalis Cagnazzo Stygian Deluge',
      type: 'StartsUsing',
      netRegex: { id: '79A3', source: 'Cagnazzo', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Body Slam',
      // immune to knockback resist
      type: 'StartsUsing',
      netRegex: { id: '7992', source: 'Cagnazzo' },
      delaySeconds: (_data, matches) => parseFloat(matches.castTime) - 5,
      response: Responses.knockback(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Hydrofall',
      type: 'StartsUsing',
      netRegex: { id: '7A90', source: 'Cagnazzo' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Neap Tide',
      // D01 = Neap Tide, source from environment
      type: 'GainsEffect',
      netRegex: { effectId: 'D01' },
      condition: Conditions.targetIsYou(),
      delaySeconds: (_data, matches) => parseFloat(matches.duration) - 5,
      response: Responses.spread(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Spring Tide',
      // D00 = Spring Tide, source from environment
      type: 'GainsEffect',
      netRegex: { effectId: 'D00' },
      delaySeconds: (_data, matches) => parseFloat(matches.duration) - 5,
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Voidcleaver',
      type: 'StartsUsing',
      netRegex: { id: '7986', source: 'Cagnazzo', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Lapis Manalis Cagnazzo Void Torrent',
      type: 'StartsUsing',
      netRegex: { id: '798E', source: 'Cagnazzo' },
      response: Responses.tankCleave(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Left Slam/Right Slam': 'Left/Right Slam',
        'Waxing Cycle/Waning Cycle': 'Waxing/Waning Cycle',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Albion': 'Albion',
        'Albus Griffin': 'Albus-Greif',
        'Cagnazzo': 'Cagnazzo',
        'Deepspine': 'Erdseim-Dornen',
        'Galatea Magna': 'Galatea Magna',
        'No more games!': 'Das ist euer Untergang!',
        'The Forum Messorum': 'Forum Messorem',
        'The Silvan Throne': 'Thron der Schneebestie',
      },
      'replaceText': {
        'Albion\'s Embrace': 'Albions Umarmung',
        'Antediluvian': 'Vorsintflutlich',
        'Body Slam': 'Bodenwelle',
        'Burst': 'Explosion',
        'Call of the Mountain': 'Ruf des Berges',
        'Cursed Tide': 'Fluch der Fluten',
        'Dark Harvest': 'Dunkle Ernte',
        'Hydraulic Ram': 'Hydroramme',
        'Hydrofall': 'Hydro-Sturz',
        'Hydrovent': 'Hydrovent',
        'Icebreaker': 'Eisbrecher',
        'Icy Throes': 'Eisige Agonie',
        'Knock on Ice': 'Eisklopfer',
        'Left Slam': 'Linker Arm von Albion',
        'Lifescleaver': 'Lebensschlitzer',
        'Neap Tide': 'Nipptide',
        'Right Slam': 'Rechter Arm von Albion',
        'Roar of Albion': 'Albion-Brüllen',
        'Scarecrow Chase': 'Bewegung & Kreuz',
        'Soul Nebula': 'Seelennebel',
        'Soul Scythe': 'Seelensense',
        'Spring Tide': 'Springtide',
        'Stony Gaze': 'Magisches Steinauge',
        'Stygian Deluge': 'Stygische Sintflut',
        'Tenebrism': 'Tenebrismus',
        'Tsunami': 'Tsunami',
        'Void Miasma': 'Nichtsfäule',
        'Void Torrent': 'Nichtshagel',
        'Voidcleaver': 'Nichtsschlitzer',
        'Waning Cycle': 'Kreis & Explosion',
        'Waxing Cycle': 'Explosion & Kreis',
        'Wildlife Crossing': 'Wilde Tiere',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Albion': 'Albion',
        'Albus Griffin': 'griffon de l\'Albus',
        'Cagnazzo': 'Cagnazzo',
        'Deepspine': 'Épines céruléennes',
        'Galatea Magna': 'Galatea Magna',
        'The Forum Messorum': 'Forum Messorem',
        'The Silvan Throne': 'Trône de la Bête des neiges',
        'No more games!': 'Vous voulez voir quand je m\'énerve!?',
      },
      'replaceText': {
        'Albion\'s Embrace': 'Étreinte d\'Albion',
        'Antediluvian': 'Antédiluvienne',
        'Body Slam': 'Charge physique',
        'Burst': 'Explosion',
        'Call of the Mountain': 'Appel bestial',
        'Cursed Tide': 'Maléfice submersif',
        'Dark Harvest': 'Sombre récolte',
        'Hydraulic Ram': 'Hydrotambourinage',
        'Hydrofall': 'Pilonnage hydrique',
        'Hydrovent': 'Hydro-exutoire',
        'Icebreaker': 'Briseur de glace',
        'Icy Throes': 'Jeté de glace',
        'Knock on Ice': 'Toucher de la glace',
        'Left Slam': 'Claque gauche d\'Albion',
        'Lifescleaver': 'Couperet vital',
        'Neap Tide': 'Mortes-eaux submersives',
        'Right Slam': 'Claque droite d\'Albion',
        'Roar of Albion': 'Rugissement d\'Albion',
        'Scarecrow Chase': 'Mouvement et croix',
        'Soul Nebula': 'Nébuleuse animique',
        'Soul Scythe': 'Faux animique',
        'Spring Tide': 'Vives-eaux submersives',
        'Stony Gaze': 'Œil pétrifiant maudit',
        'Stygian Deluge': 'Déluge stygien',
        'Tenebrism': 'Ténébrisme',
        'Tsunami': 'Raz-de-marée',
        'Void Miasma': 'Miasmes du néant',
        'Void Torrent': 'Torrent du néant',
        'Voidcleaver': 'Couperet du néant',
        'Waning Cycle': 'Cercle et explosion',
        'Waxing Cycle': 'Explosion et cercle',
        'Wildlife Crossing': 'Traversée',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Albion': 'アルビオン',
        'Albus Griffin': 'アルバス・グリフィン',
        'Cagnazzo': 'カイナッツォ',
        'Deepspine': '青炎の棘',
        'Galatea Magna': 'ガラテア・マグナ',
        'The Forum Messorum': 'フォルム・メッソルム',
        'The Silvan Throne': '雪獣の帝座',
        'No more games!': '俺様の本気を……くらいやがれェ！！',
      },
      'replaceText': {
        'Albion\'s Embrace': 'アルビオンハグ',
        'Antediluvian': 'アンテディルヴィアン',
        'Body Slam': 'ボディスラム',
        'Burst': '爆発',
        'Call of the Mountain': 'ビーストコール',
        'Cursed Tide': '水禍の呪い',
        'Dark Harvest': 'ダークハーベスト',
        'Hydraulic Ram': 'ハイドロラミング',
        'Hydrofall': 'ハイドロフォール',
        'Hydrovent': 'ハイドロベント',
        'Icebreaker': 'アイスブレイカー',
        'Icy Throes': 'アイススロー',
        'Knock on Ice': 'ノックオンアイス',
        'Left Slam': 'レフト・アルビオンスラム',
        'Lifescleaver': 'ライフクリーバー',
        'Neap Tide': '水禍の小潮',
        'Right Slam': 'ライト・アルビオンスラム',
        'Roar of Albion': 'アルビオンロア',
        'Scarecrow Chase': 'ムーブ＆クロス',
        'Soul Nebula': 'ソウルネビュラ',
        'Soul Scythe': 'ソウルサイズ',
        'Spring Tide': '水禍の大潮',
        'Stony Gaze': '呪いの石眼',
        'Stygian Deluge': 'スティギアンデリージュ',
        'Tenebrism': 'テネブリズム',
        'Tsunami': 'つなみ',
        'Void Miasma': 'ヴォイドの瘴気',
        'Void Torrent': 'ヴォイドトーレント',
        'Voidcleaver': 'ヴォイドクリーバー',
        'Waning Cycle': 'サークル＆バースト',
        'Waxing Cycle': 'バースト＆サークル',
        'Wildlife Crossing': '駆け抜け',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Albion': '白雪兽',
        'Albus Griffin': '白岭狮鹫',
        'Cagnazzo': '凯纳槽',
        'Deepspine': '青炎棘刺',
        'Galatea Magna': '大型伽拉忒亚人偶',
        'The Forum Messorum': '收割广场',
        'The Silvan Throne': '雪兽皇座',
        'No more games!': '我要用出全部力量！',
      },
      'replaceText': {
        'Albion\'s Embrace': '雪兽拥抱',
        'Antediluvian': '古洪将至',
        'Body Slam': '猛撞',
        'Burst': '爆炸',
        'Call of the Mountain': '野性呼唤',
        'Cursed Tide': '凶水之咒',
        'Dark Harvest': '黑暗收割',
        'Hydraulic Ram': '水力冲撞',
        'Hydrofall': '水瀑',
        'Hydrovent': '水涌',
        'Icebreaker': '碎冰',
        'Icy Throes': '投冰',
        'Knock on Ice': '敲击冰面',
        'Left Slam': '左侧猛击',
        'Lifescleaver': '生命劈砍',
        'Neap Tide': '凶水小潮',
        'Right Slam': '右侧猛击',
        'Roar of Albion': '雪兽怒号',
        'Scarecrow Chase': '人偶追逐',
        'Soul Nebula': '灵魂星云',
        'Soul Scythe': '灵魂钐割',
        'Spring Tide': '凶水大潮',
        'Stony Gaze': '诅咒石眼',
        'Stygian Deluge': '冥河泛滥',
        'Tenebrism': '暗色主义',
        'Tsunami': '大海啸',
        'Void Miasma': '虚无瘴气',
        'Void Torrent': '虚无洪流',
        'Voidcleaver': '虚无劈砍',
        'Waning Cycle': '环割圆切',
        'Waxing Cycle': '圆切环割',
        'Wildlife Crossing': '奔驰',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Albion': '알비온',
        'Albus Griffin': '알부스 그리핀',
        'Cagnazzo': '카냐초',
        'Deepspine': '푸른불 가시',
        'Galatea Magna': '갈라테아 마그나',
        'The Forum Messorum': '수확자의 광장',
        'The Silvan Throne': '눈짐승의 왕좌',
        'No more games!': '내 진짜 실력을…… 받아라!!',
      },
      'replaceText': {
        'Albion\'s Embrace': '알비온의 포옹',
        'Antediluvian': '태고의 물',
        'Body Slam': '몸통 박기',
        'Burst': '폭발',
        'Call of the Mountain': '짐승 부르기',
        'Cursed Tide': '수마의 저주',
        'Dark Harvest': '어둠의 수확',
        'Hydraulic Ram': '수력 격돌',
        'Hydrofall': '물 쏟기',
        'Hydrovent': '솟구치는 물',
        'Icebreaker': '얼음 부수기',
        'Icy Throes': '얼음 던지기',
        'Knock on Ice': '얼음 두드리기',
        'Left Slam': '알비온의 왼주먹',
        'Lifescleaver': '생명의 살육자',
        'Neap Tide': '수마의 작은물',
        'Right Slam': '알비온의 오른주먹',
        'Roar of Albion': '알비온의 포효',
        'Scarecrow Chase': '이동 십자베기',
        'Soul Nebula': '영혼의 성운',
        'Soul Scythe': '영혼의 낫',
        'Spring Tide': '수마의 큰물',
        'Stony Gaze': '석화 저주의 눈',
        'Stygian Deluge': '지저 대홍수',
        'Tenebrism': '테네브리즘',
        'Tsunami': '해일',
        'Void Miasma': '보이드의 독기',
        'Void Torrent': '보이드 급류',
        'Voidcleaver': '보이드의 살육자',
        'Waning Cycle': '회전 연속베기',
        'Waxing Cycle': '연속 회전베기',
        'Wildlife Crossing': '짐승 질주',
      },
    },
  ],
});
