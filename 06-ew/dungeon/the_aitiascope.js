Options.Triggers.push({
    zoneId: ZoneId.TheAitiascope,
    timelineFile: 'the_aitiascope.txt',
    triggers: [
        {
            id: 'Aitiascope Livia Frustration',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6448', source: 'Livia the Undeterred', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6448', source: 'Livia (?:der|die|das) Glühend(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6448', source: 'Livia', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6448', source: '愛執のリウィア', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Aitiascope Livia Aglaea Climb NE/SW',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6442', source: 'Livia the Undeterred', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6442', source: 'Livia (?:der|die|das) Glühend(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6442', source: 'Livia', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6442', source: '愛執のリウィア', capture: false }),
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Back Right / Front Left',
                    de: 'hinten rechts / vorne links',
                    fr: 'Derrière à droite / Devant à gauche',
                    ko: '오른쪽 아래 / 왼쪽 위',
                },
            },
        },
        {
            id: 'Aitiascope Livia Aglaea Climb NW/SE',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6443', source: 'Livia the Undeterred', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6443', source: 'Livia (?:der|die|das) Glühend(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6443', source: 'Livia', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6443', source: '愛執のリウィア', capture: false }),
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Back Left / Front Right',
                    de: 'hinten links / vorne rechts',
                    fr: 'Derrière à gauche / Devant à droite',
                    ko: '왼쪽 아래 / 오른쪽 위',
                },
            },
        },
        {
            id: 'Aitiascope Livia Aglaea Bite',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6449', source: 'Livia the Undeterred' }),
            netRegexDe: NetRegexes.startsUsing({ id: '6449', source: 'Livia (?:der|die|das) Glühend(?:e|er|es|en)' }),
            netRegexFr: NetRegexes.startsUsing({ id: '6449', source: 'Livia' }),
            netRegexJa: NetRegexes.startsUsing({ id: '6449', source: '愛執のリウィア' }),
            response: Responses.tankCleave('alert'),
        },
        {
            id: 'Aitiascope Livia Ignis Odi',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '644D', source: 'Livia the Undeterred' }),
            netRegexDe: NetRegexes.startsUsing({ id: '644D', source: 'Livia (?:der|die|das) Glühend(?:e|er|es|en)' }),
            netRegexFr: NetRegexes.startsUsing({ id: '644D', source: 'Livia' }),
            netRegexJa: NetRegexes.startsUsing({ id: '644D', source: '愛執のリウィア' }),
            response: Responses.stackMarkerOn(),
        },
        {
            id: 'Aitiascope Rhitahtyn Tartarean Impact',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6455', source: 'Rhitahtyn the Unshakable', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6455', source: 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6455', source: 'Rhitahtyn', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6455', source: '宿執のリットアティン', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Aitiascope Rhitahtyn Shield Skewer',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6450', source: 'Rhitahtyn the Unshakable', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6450', source: 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6450', source: 'Rhitahtyn', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6450', source: '宿執のリットアティン', capture: false }),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Hide behind broken crystal',
                    de: 'Hinter dem gebrochenen Kristall verstecken',
                    fr: 'Cachez-vous derrière le cristal brisé',
                    ko: '검은색 수정이 부서지면 그 자리에 숨기',
                },
            },
        },
        {
            id: 'Aitiascope Rhitahtyn Shrapnel Shell',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6452', source: 'Rhitahtyn the Unshakable', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6452', source: 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6452', source: 'Rhitahtyn', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6452', source: '宿執のリットアティン', capture: false }),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Away from Crosshairs',
                    de: 'Weg von den Zielmarkierungen',
                    fr: 'Éloignez-vous de la zone de ciblage',
                    ko: '원형 장판에서 멀리 떨어지기',
                },
            },
        },
        {
            id: 'Aitiascope Rhitahtyn Anvil of Tartarus',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6456', source: 'Rhitahtyn the Unshakable' }),
            netRegexDe: NetRegexes.startsUsing({ id: '6456', source: 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)' }),
            netRegexFr: NetRegexes.startsUsing({ id: '6456', source: 'Rhitahtyn' }),
            netRegexJa: NetRegexes.startsUsing({ id: '6456', source: '宿執のリットアティン' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Aitiascope Sinking Regret Lost Opportunity',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6B1F', source: 'Sinking Regret' }),
            netRegexDe: NetRegexes.startsUsing({ id: '6B1F', source: 'Versunken(?:e|er|es|en) Reue' }),
            netRegexFr: NetRegexes.startsUsing({ id: '6B1F', source: 'Regret Enfoui' }),
            netRegexJa: NetRegexes.startsUsing({ id: '6B1F', source: 'サンクン・リグレト' }),
            condition: (data) => data.CanStun(),
            response: Responses.stun(),
        },
        {
            id: 'Aitiascope Amon Dark Forte',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6464', source: 'Amon the Undying' }),
            netRegexDe: NetRegexes.startsUsing({ id: '6464', source: 'Amon' }),
            netRegexFr: NetRegexes.startsUsing({ id: '6464', source: 'Amon' }),
            netRegexJa: NetRegexes.startsUsing({ id: '6464', source: '異執のアモン' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Aitiascope Amon Ysayle\'s Spirit Dreams of Ice',
            type: 'Ability',
            netRegex: NetRegexes.ability({ id: '6C6C', source: 'Ysayle\'s Spirit', capture: false }),
            netRegexDe: NetRegexes.ability({ id: '6C6C', source: 'Ysayles Seele', capture: false }),
            netRegexFr: NetRegexes.ability({ id: '6C6C', source: 'Âme D\'Ysayle', capture: false }),
            netRegexJa: NetRegexes.ability({ id: '6C6C', source: 'イゼルの魂', capture: false }),
            alertText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Hide Behind Ice',
                    de: 'hinter dem Eis verstecken',
                    fr: 'Cachez-vous derrière la glace',
                    ko: '얼음 뒤에 숨기',
                },
            },
        },
        {
            id: 'Aitiascope Amon Entr\'acte',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6465', source: 'Amon the Undying', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6465', source: 'Amon', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6465', source: 'Amon', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6465', source: '異執のアモン', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Aitiascope Amon Right Firaga Forte',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6460', source: 'Amon the Undying', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6460', source: 'Amon', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6460', source: 'Amon', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6460', source: '異執のアモン', capture: false }),
            response: Responses.goRight(),
        },
        {
            id: 'Aitiascope Amon Left Firaga Forte',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '6461', source: 'Amon the Undying', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '6461', source: 'Amon', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '6461', source: 'Amon', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '6461', source: '異執のアモン', capture: false }),
            response: Responses.goLeft(),
        },
    ],
    timelineReplace: [
        {
            'locale': 'en',
            'replaceText': {
                'Left Firaga Forte/Right Firaga Forte': 'Left/Right Firaga Forte',
            },
        },
        {
            'locale': 'de',
            'replaceSync': {
                'Aethershot': 'Ätherschuss',
                'Amon the Undying': 'Amon',
                'Livia the Undeterred': 'Livia (?:der|die|das) Glühend(?:e|er|es|en)',
                'Rhitahtyn the Unshakable': 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)',
                'Sinking Regret': 'Versunken(?:e|er|es|en) Reue',
                'The Central Observatory': 'Hauptwarte',
                'The Midnight Downwell': 'Wirbelstrom',
                'The Saltcrystal Strings': 'Kristalline Flur',
                'Ysayle\'s Spirit': 'Ysayles Seele',
            },
            'replaceText': {
                '\\(proximity\\)': '(Distanz)',
                'Aglaea Bite': 'Aglaia-Biss',
                'Aglaea Climb': 'Aglaia-Aufstieg',
                'Aglaea Shot': 'Aglaia-Schuss',
                'Antistrophe': 'Antistrophe',
                'Anvil of Tartarus': 'Amboss des Tartarus',
                'Curtain Call': 'Klimax',
                'Dark Forte': 'Dunkelung Forte',
                'Disparagement': 'Verunglimpfung',
                'Dreams of Ice': 'Eisige Träume',
                'Entr\'acte': 'Entracte',
                'Epode': 'Epode',
                'Eruption Forte': 'Eruption Forte',
                'Frustration': 'Frustration',
                'Ignis Amoris': 'Ignis Amoris',
                'Ignis Odi': 'Ignis Odi',
                '(?<!Tartarean )Impact': 'Begraben',
                'Left Firaga Forte': 'Linkes Firaga Forte',
                'Odi et Amo': 'Odi et Amo',
                'Right Firaga Forte': 'Rechtes Firaga Forte',
                'Shield Skewer': 'Schildspieß',
                'Shrapnel Shell': 'Schrapnell-Geschoss',
                '(?<!Anti)Strophe': 'Strophe',
                'Tartarean Impact': 'Schlag des Tartarus',
                'Tartarean Spark': 'Funken des Tartarus',
                'Thundaga Forte': 'Blitzga Forte',
                'Vexillatio': 'Vexillatio',
            },
        },
        {
            'locale': 'fr',
            'replaceSync': {
                'Aethershot': 'Projectile d\'éther',
                'Amon the Undying': 'Amon',
                'Livia the Undeterred': 'Livia',
                'Rhitahtyn the Unshakable': 'Rhitahtyn',
                'Sinking Regret': 'Regret Enfoui',
                'The Central Observatory': 'Observatoire central',
                'The Midnight Downwell': 'Turbulences éthérées',
                'The Saltcrystal Strings': 'Enchevêtrements cristallins',
                'Ysayle\'s Spirit': 'âme d\'Ysayle',
            },
            'replaceText': {
                '\\?': ' ?',
                '\\(proximity\\)': '(proximité)',
                'Aglaea Bite': 'Morsure d\'Aglaia',
                'Aglaea Climb': 'Flambée d\'Aglaia',
                'Aglaea Shot': 'Tir d\'Aglaia',
                'Antistrophe': 'Antistrophe',
                'Anvil of Tartarus': 'Tartarus enclume',
                'Curtain Call': 'Rappel',
                'Dark Forte': 'Ténèbres forte',
                'Disparagement': 'Dénigrement',
                'Dreams of Ice': 'Illusions glacées',
                'Entr\'acte': 'Entracte',
                'Epode': 'Épode',
                'Eruption Forte': 'Éruption forte',
                'Frustration': 'Frustration',
                'Ignis Amoris': 'Ignis Amoris',
                'Ignis Odi': 'Ignis Odi',
                '(?<!Tartarean )Impact(?! )': 'Ensevelissement',
                'Left Firaga Forte(?!/)': 'Méga Feu forte gauche',
                'Left Firaga Forte/Right Firaga Forte': 'Méga Feu forte gauche/droite',
                'Odi et Amo': 'Odi et Amo',
                '(?<!/)Right Firaga Forte': 'Méga Feu forte droit',
                'Shield Skewer': 'Perce-bouclier',
                'Shrapnel Shell': 'Obus shrapnel',
                '(?<!Anti)Strophe': 'Strophe',
                'Tartarean Impact': 'Impact de Tartarus',
                'Tartarean Spark': 'Étincelle de Tartarus',
                'Thundaga Forte': 'Méga Foudre forte',
                'Vexillatio': 'Vexillatio',
            },
        },
        {
            'locale': 'ja',
            'missingTranslations': true,
            'replaceSync': {
                'Aethershot': 'エーテル弾',
                'Amon the Undying': '異執のアモン',
                'Livia the Undeterred': '愛執のリウィア',
                'Rhitahtyn the Unshakable': '宿執のリットアティン',
                'Sinking Regret': 'サンクン・リグレト',
                'The Central Observatory': '主観測室',
                'The Midnight Downwell': '星海乱流域',
                'The Saltcrystal Strings': '星海結晶域',
                'Ysayle\'s Spirit': 'イゼルの魂',
            },
            'replaceText': {
                'Aglaea Bite': 'アグライアバイト',
                'Aglaea Climb': 'アグライアクライム',
                'Aglaea Shot': 'アグライアショット',
                'Antistrophe': 'アンティストロペー',
                'Anvil of Tartarus': 'タルタロスアンヴィル',
                'Curtain Call': '終幕の熱狂',
                'Dark Forte': 'フォルテダーク',
                'Disparagement': 'ディスペレッジメント',
                'Dreams of Ice': '氷結の幻想',
                'Entr\'acte': '幕間の風狂',
                'Epode': 'エポードス',
                'Eruption Forte': 'フォルテエラプション',
                'Frustration': 'フラストレーション',
                'Ignis Amoris': 'イグニス・アモリス',
                'Ignis Odi': 'イグニス・オディー',
                '(?<!Tartarean )Impact': '衝撃',
                'Left Firaga Forte': 'レフト・フォルテファイガ',
                'Odi et Amo': 'オディー・エト・アモー',
                'Right Firaga Forte': 'ライト・フォルテファイガ',
                'Shield Skewer': 'シールドスキュワー',
                'Shrapnel Shell': '榴散弾',
                '(?<!Anti)Strophe': 'ストロペー',
                'Tartarean Impact': 'タルタロスインパクト',
                'Tartarean Spark': 'タルタロススパーク',
                'Thundaga Forte': 'フォルテサンダガ',
                'Vexillatio': 'ウェクシッラティオ',
            },
        },
    ],
});
