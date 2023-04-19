Options.Triggers.push({
  id: 'TheFellCourtOfTroia',
  zoneId: ZoneId.TheFellCourtOfTroia,
  timelineFile: 'the_fell_court_of_troia.txt',
  triggers: [
    {
      id: 'Troia Evil Dreamer Dark Vision',
      type: 'StartsUsing',
      netRegex: { source: 'Evil Dreamer', id: ['73BB', '73B8'], capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Eye Lasers',
          de: 'Weiche dem Augenlaser aus',
          fr: 'Évitez les lasers',
          ja: '目からビーム',
          cn: '躲避视线激光',
          ko: '눈이 쏘는 레이저 피하기',
        },
      },
    },
    {
      id: 'Troia Beatrice Void Gravity',
      type: 'StartsUsing',
      netRegex: { source: 'Evil Dreamer', id: '73BA' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Troia Evil Dreamer Unite Mare',
      type: 'StartsUsing',
      netRegex: { source: 'Evil Dreamer', id: '73BC', capture: false },
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kill One Eye',
          de: 'Besiege ein Auge',
          fr: 'Tuez une tête',
          ja: '安置になる目を攻撃',
          cn: '击杀一只小怪',
          ko: '눈 하나 집중해서 잡기',
        },
      },
    },
    {
      id: 'Troia Beatrice Death Forseen Self',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '747D' },
      response: Responses.lookAwayFromSource(),
    },
    {
      id: 'Troia Beatrice Death Forseen Other',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '7484', capture: false },
      // TODO: calling out twice seems noisy, but not sure what else to say
      suppressSeconds: 10,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look Away from Rings',
          de: 'Schau von den Ringen weg',
          fr: 'Ne regardez pas l\'anneau',
          ja: '輪の目から視線回避',
          cn: '视线避开圆环',
          ko: '고리 모양 눈 시선 피하기',
        },
      },
    },
    {
      id: 'Troia Beatrice Beatific Scorn',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '7475', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away From Exploding Lines',
          de: 'Weg von den explodierenden Linien',
          fr: 'Éloignez-vous des lignes explosives',
          ja: '線から離れる',
          cn: '避开即将爆炸的线',
          ko: '폭발하는 선 멀리 피하기',
        },
      },
    },
    {
      id: 'Troia Beatrice Hush',
      type: 'StartsUsing',
      // Does not cleave.
      netRegex: { source: 'Beatrice', id: '7480' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Troia Beatrice Void Nail',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '747F' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Troia Beatrice Eye of Troia',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '747A', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Troia Beatrice Antipressure',
      type: 'StartsUsing',
      netRegex: { source: 'Beatrice', id: '79E8' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Troia Scarmiglione Cursed Echo',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7631', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'aoe + bleed',
          de: 'AoE + Blutung',
          fr: 'AoE + Saignement',
          ja: 'AoE + 出血',
          cn: 'AOE + 流血',
          ko: '전체 공격 + 도트',
        },
      },
    },
    {
      id: 'Troia Scarmiglione Rotten Rampage',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7619' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Troia Scarmiglione Vacuum Wave',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '761C', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Knockback Into Wall',
          de: 'Rückstoß in eine Wand',
          fr: 'Faites-vous pousser sur un mur',
          ja: '壁にノックバック',
          cn: '击退到护栏',
          ko: '벽으로 넉백되기',
        },
      },
    },
    {
      id: 'Troia Scarmiglione Blighted Bladework',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7633', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Behind and Out',
          de: 'Geh nach Hinten und Raus',
          fr: 'Passez derrière et extérieur',
          ja: '後ろの外側へ',
          cn: '去背后远离',
          ko: '보스 뒤 바깥쪽으로',
        },
      },
    },
    {
      id: 'Troia Scarmiglione Blighted Sweep',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7635', capture: false },
      response: Responses.getBehind(),
    },
    {
      id: 'Troia Scarmiglione Void Vortex',
      type: 'StartsUsing',
      // 7623 during add phase, 762E after
      netRegex: { source: 'Scarmiglione', id: ['7623', '762E'] },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Troia Scarmiglione Void Gravity',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7622' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Troia Scarmiglione Firedamp',
      type: 'StartsUsing',
      netRegex: { source: 'Scarmiglione', id: '7637' },
      response: Responses.tankCleave(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Beatrice': 'Beatrice',
        'Evil Dreamer': 'bös(?:e|er|es|en) Träumer',
        'Penitence': 'Sühneshalle',
        'Scarmiglione': 'Scarmiglione',
        'The Seat Of The Foremost': 'Sitz der Hohepriesterin',
        'The Garden Of Epopts': 'Garten der Schwestern',
      },
      'replaceText': {
        'Antipressure': 'Nichtsdruck',
        'Beatific Scorn': 'Seliger Zorn',
        'Blighted Bedevilment': 'Verderbte Verhexung',
        'Blighted Bladework': 'Verderbtes Fechten',
        'Blighted Sweep': 'Verderbter Schwung',
        'Corruptor\'s Pitch': 'Morast des Verderbers',
        'Creeping Decay': 'Schleichendes Siechtum',
        'Cursed Echo': 'Fluches Hall',
        'Dark Vision': 'Dunkle Vision',
        'Death Foreseen': 'Tödliche Vorsehung',
        'Endless Nightmare': 'Ewiger Albtraum',
        'Eye of Troia': 'Auge von Troia',
        'Firedamp': 'Grubengas',
        'Hush': 'Totenstill',
        'Nox': 'Nox',
        'Rotten Rampage': 'Fauliger Amok',
        'Toric Void': 'Nichts-Torus',
        'Unite Mare': 'Alltraum',
        'Vacuum Wave': 'Vakuumwelle',
        'Void Gravity': 'Nichts-Gravitas',
        'Void Nail': 'Nichtsnagel',
        'Void Vortex': 'Nichtssog',
        'Voidshaker': 'Nichtsstoß',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Beatrice': 'Béatrice',
        'Evil Dreamer': 'rêveur maudit',
        'Penitence': 'Salle des admonestations',
        'Scarmiglione': 'Scarmiglione',
        'The Seat Of The Foremost': 'Salle des primiciers',
        'The Garden Of Epopts': 'Enclos des sœurs',
      },
      'replaceText': {
        'Antipressure': 'Pression du néant',
        'Beatific Scorn': 'Lueur mystique',
        'Blighted Bedevilment': 'Pirouette nécrophage',
        'Blighted Bladework': 'Lacération nécrophage',
        'Blighted Sweep': 'Balayage nécrophage',
        'Corruptor\'s Pitch': 'Bourbier corrupteur',
        'Creeping Decay': 'Déclin rampant',
        'Cursed Echo': 'Écho maudit',
        'Dark Vision': 'Vision cauchemardesque',
        'Death Foreseen': 'Œil de la faucheuse',
        'Endless Nightmare': 'Cauchemar sans fin',
        'Eye of Troia': 'Œil de Troïa',
        'Firedamp': 'Vapeur de feu',
        'Hush': 'Mise sous silence',
        'Nox': 'Nox',
        'Rotten Rampage': 'Ravage putride',
        'Toric Void': 'Tore du néant',
        'Unite Mare': 'Cauchemar traumatique',
        'Vacuum Wave': 'Vague de vide',
        'Void Gravity': 'Gravité du néant',
        'Void Nail': 'Clou du néant',
        'Void Vortex': 'Vortex du néant',
        'Voidshaker': 'Secousse du néant',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Beatrice': 'ベアトリーチェ',
        'Evil Dreamer': 'ドリームエビル',
        'Penitence': '責罪広場',
        'Scarmiglione': 'スカルミリョーネ',
        'The Seat Of The Foremost': '筆頭神官の間',
        'The Garden Of Epopts': '姉妹たちの園',
      },
      'replaceText': {
        'Antipressure': 'ヴォイドプレッシャー',
        'Beatific Scorn': '魔光閃',
        'Blighted Bedevilment': '死喰剣・旋転',
        'Blighted Bladework': '死喰剣・断裁',
        'Blighted Sweep': '死喰剣・払除',
        'Corruptor\'s Pitch': 'コラプターズ・ピッチ',
        'Creeping Decay': '腐屍招来',
        'Cursed Echo': 'カースドエコー',
        'Dark Vision': '夢魔の視線',
        'Death Foreseen': '死の魔眼',
        'Endless Nightmare': '死重爆',
        'Eye of Troia': 'トロイアの魔眼',
        'Firedamp': 'ファイアダンプ',
        'Hush': 'ハッシュスイング',
        'Nox': 'ノックス',
        'Rotten Rampage': 'ロトンランページ',
        'Toric Void': 'ヴォイドトーラス',
        'Unite Mare': '重魂爆',
        'Vacuum Wave': '真空波',
        'Void Gravity': 'ヴォイド・グラビデ',
        'Void Nail': 'ヴォイドネイル',
        'Void Vortex': 'ヴォイドヴォーテックス',
        'Voidshaker': 'ヴォイドシェイカー',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Beatrice': '贝雅特丽齐',
        'Evil Dreamer': '梦祸',
        'Penitence': '责罪广场',
        'Scarmiglione': '斯卡米留尼',
        'The Seat Of The Foremost': '首席神官之间',
        'The Garden Of Epopts': '姐妹之园',
      },
      'replaceText': {
        'Antipressure': '虚无强压',
        'Beatific Scorn': '魔光闪',
        'Blighted Bedevilment': '食死剑·回旋',
        'Blighted Bladework': '食死剑·裁断',
        'Blighted Sweep': '食死剑·横扫',
        'Corruptor\'s Pitch': '腐败沥青池',
        'Creeping Decay': '召唤腐尸',
        'Cursed Echo': '诅咒回声',
        'Dark Vision': '梦祸视线',
        'Death Foreseen': '死亡魔眼',
        'Endless Nightmare': '死重爆',
        'Eye of Troia': '特罗亚魔眼',
        'Firedamp': '沼气',
        'Hush': '静寂一挥',
        'Nox': '夜',
        'Rotten Rampage': '腐烂狂怒',
        'Toric Void': '虚无环',
        'Unite Mare': '重魂爆',
        'Vacuum Wave': '真空波',
        'Void Gravity': '虚空重力',
        'Void Nail': '虚无钉',
        'Void Vortex': '虚无旋涡',
        'Voidshaker': '虚无摇动',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Beatrice': '베아트리체',
        'Evil Dreamer': '몽마',
        'Penitence': '문책 광장',
        'Scarmiglione': '스카르밀리오네',
        'The Seat Of The Foremost': '최고신관의 방',
        'The Garden Of Epopts': '자매의 뜰',
      },
      'replaceText': {
        'Antipressure': '보이드의 압력',
        'Beatific Scorn': '마광섬',
        'Blighted Bedevilment': '죽음을 먹는 검: 회전',
        'Blighted Bladework': '죽음을 먹는 검: 처단',
        'Blighted Sweep': '죽음을 먹는 검: 휩쓸기',
        'Corruptor\'s Pitch': '부패자의 늪',
        'Creeping Decay': '썩은 시체 소환',
        'Cursed Echo': '저주받은 메아리',
        'Dark Vision': '몽마의 시선',
        'Death Foreseen': '죽음의 마안',
        'Endless Nightmare': '죽음의 융합 폭발',
        'Eye of Troia': '트로이아의 마안',
        'Firedamp': '폭발 가스',
        'Hush': '정숙',
        'Nox': '암야',
        'Rotten Rampage': '썩은 광란',
        'Toric Void': '보이드의 고리',
        'Unite Mare': '융합 폭발',
        'Vacuum Wave': '진공파',
        'Void Gravity': '보이드 그라비데',
        'Void Nail': '보이드의 손톱',
        'Void Vortex': '보이드의 돌풍',
        'Voidshaker': '요동치는 보이드',
      },
    },
  ],
});
