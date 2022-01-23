Options.Triggers.push({
    zoneId: ZoneId.AkadaemiaAnyder,
    timelineFile: 'akadaemia_anyder.txt',
    timelineTriggers: [
        {
            id: 'Anyder Lash',
            regex: /Lash/,
            beforeSeconds: 5,
            suppressSeconds: 10,
            response: Responses.miniBuster(),
        },
        {
            id: 'Anyder Putrid Breath',
            regex: /Putrid Breath/,
            beforeSeconds: 5,
            response: Responses.awayFromFront('info'),
        },
    ],
    triggers: [
        {
            id: 'Anyder Aquatic Lance',
            type: 'HeadMarker',
            netRegex: NetRegexes.headMarker({ id: '0087' }),
            condition: Conditions.targetIsYou(),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'puddle on you',
                    de: 'Fläche auf DIR',
                    fr: 'Zone au sol sur VOUS',
                    ja: '自分に水溜り',
                    cn: '水球点名',
                    ko: '징 대상자',
                },
            },
        },
        {
            id: 'Anyder Puncture',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E04', source: ['クラドセラケ', 'ドリオドゥス'] }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E04', source: ['裂口鲨', '原祖鲨'] }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E04', source: ['클라도셀라케', '돌리오두스'] }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Anyder Tidal Guillotine',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E0A', source: 'クラドセラケ', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E0A', source: '裂口鲨', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E0A', source: '클라도셀라케', capture: false }),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Away From Swimming Shark',
                    de: 'Weg vom schwimmenden Hai',
                    fr: 'Éloignez-vous du requin qui nage',
                    ja: '水中サメから離れる',
                    cn: '远离水中BOSS',
                    ko: '물 속 상어 멀리 떨어지기',
                },
            },
        },
        {
            id: 'Anyder Pelagic Cleaver',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E0B', source: 'ドリオドゥス', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E0B', source: '原祖鲨', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E0B', source: '돌리오두스', capture: false }),
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'Sides of Swimming Shark',
                    de: 'Zu den Seiten vom schwimmenden Hai',
                    fr: 'Sur les côtés du requin qui nage',
                    ja: '水中サメの側へ',
                    cn: '去水中BOSS的两侧',
                    ko: '물 속 상어 측면으로 피하기',
                },
            },
        },
        {
            id: 'Anyder Marine Mayhem',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E06', source: ['クラドセラケ', 'ドリオドゥス'], capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E06', source: ['裂口鲨', '原祖鲨'], capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E06', source: ['클라도셀라케', '돌리오두스'], capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Anyder Sap Shower',
            type: 'HeadMarker',
            netRegex: NetRegexes.headMarker({ id: '0078' }),
            condition: Conditions.targetIsYou(),
            response: Responses.spread(),
        },
        {
            id: 'Anyder Arbor Storm',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E17', source: 'Morbol Marquis', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E17', source: 'Marquis-Morbol', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E17', source: 'Marquis Morbol', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E17', source: 'マーカス・モルボル', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E17', source: '侯爵魔界花', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E17', source: '몰볼 후작', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Anyder Noahionto',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '430C', source: 'Evil Armor' }),
            netRegexDe: NetRegexes.startsUsing({ id: '430C', source: 'Bös(?:e|er|es|en) Kampfmaschine' }),
            netRegexFr: NetRegexes.startsUsing({ id: '430C', source: 'Armure Maléfique' }),
            netRegexJa: NetRegexes.startsUsing({ id: '430C', source: 'イビルアーマー' }),
            netRegexCn: NetRegexes.startsUsing({ id: '430C', source: '恶魔装甲' }),
            netRegexKo: NetRegexes.startsUsing({ id: '430C', source: '사악한 갑옷' }),
            condition: (data) => data.CanStun() || data.CanSilence(),
            response: Responses.interrupt(),
        },
        {
            id: 'Anyder Shockbolt',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E23', source: 'Quetzalcoatl' }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E23', source: 'Quetzalcoatl' }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E23', source: 'Quetzalcóatl' }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E23', source: 'ケツァクウァトル' }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E23', source: '克察尔科亚特尔' }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E23', source: '케찰코아틀' }),
            response: Responses.tankBuster(),
        },
        {
            id: 'Anyder Thunderbolt',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E24', source: 'Quetzalcoatl', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E24', source: 'Quetzalcoatl', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E24', source: 'Quetzalcóatl', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E24', source: 'ケツァクウァトル', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E24', source: '克察尔科亚特尔', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E24', source: '케찰코아틀', capture: false }),
            response: Responses.aoe(),
        },
        {
            id: 'Anyder Thunderstorm',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '3E1A', source: 'Quetzalcoatl', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '3E1A', source: 'Quetzalcoatl', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '3E1A', source: 'Quetzalcóatl', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '3E1A', source: 'ケツァクウァトル', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '3E1A', source: '克察尔科亚特尔', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '3E1A', source: '케찰코아틀', capture: false }),
            delaySeconds: 4.7,
            infoText: (_data, _matches, output) => output.text(),
            outputStrings: {
                text: {
                    en: 'grab orbs',
                    de: 'Orbs nehmen',
                    fr: 'Prenez les orbes',
                    ja: '雷丸を得る',
                    cn: '吃球',
                    ko: '구슬 줍기',
                },
            },
        },
    ],
    timelineReplace: [
        {
            'locale': 'de',
            'replaceSync': {
                'Morbol Marquis': 'Marquis-Morbol',
                'Evil Armor': 'bös(?:e|er|es|en) Kampfmaschine',
                'Quetzalcoatl': 'Quetzalcoatl',
                'Doliodus': 'Doliodus',
                'Cladoselache': 'Cladoselache',
                'Ichthyology': 'Ichthyologie',
                'Phytobiology': 'Phytobiologie',
                'Phantomology': 'Phantomologie',
            },
            'replaceText': {
                'Winding Current': 'Spulenstrom',
                'Tidal Guillotine': 'Gezeitenguillotine',
                'Thunderstorm': 'Gewitter',
                'Thunderbolt': 'Donnerkeil',
                'Shocking Plumage': 'Elektrisierendes Gefieder',
                'Shockbolt': 'Blitzbogen',
                'Sap Shower': 'Pflanzensaftregen',
                'Reverse Current': 'Gegenstrom',
                'Putrid Breath': 'Fauliger Atem',
                'Protolithic Puncture': 'Paläolithische Punktion',
                'Pelagic Cleaver': 'Pelagische Pein',
                'Marine Mayhem': 'Meereschaos',
                'Lash': 'Peitschenschlag',
                'Extensible Tendrils': 'Streckende Ranken',
                'Blossom': 'Blüte',
                'Arbor Storm': 'Dornensturm',
                'Aquatic Lance': 'Aquaspeer',
                'Carcharian Verve': 'Haifischschwung',
            },
        },
        {
            'locale': 'fr',
            'replaceSync': {
                'Morbol Marquis': 'Marquis morbol',
                'Evil Armor': 'Armure maléfique',
                'Quetzalcoatl': 'Quetzalcóatl',
                'Doliodus': 'Doliodus',
                'Cladoselache': 'Cladoselache',
                'Ichthyology': 'département d\'ichtyogénie',
                'Phytobiology': 'département de phytogénie',
                'Phantomology': 'département de phantasmagénie',
            },
            'replaceText': {
                'Winding Current': 'Volte-courant',
                'Tidal Guillotine': 'Marée-guillotine',
                'Thunderstorm': 'Feu purificateur',
                'Thunderbolt': 'Éclair',
                'Shocking Plumage': 'Plumage voltaïque',
                'Shockbolt': 'Arc d\'éclair',
                'Sap Shower': 'Averse de sève',
                'Reverse Current': 'Contre-courant',
                'Putrid Breath': 'Haleine putride',
                'Protolithic Puncture': 'Ponction paléolithique',
                'Pelagic Cleaver': 'Fendoir pélagique',
                'Marine Mayhem': 'Mutilation marine',
                'Lash': 'Coup de fouet',
                'Extensible Tendrils': 'Cep extensible',
                'Blossom': 'Floraison',
                'Arbor Storm': 'Tempête de charmilles',
                'Aquatic Lance': 'Lance aquatique',
                'Carcharian Verve': 'Verve carcharienne',
            },
        },
        {
            'locale': 'ja',
            'replaceSync': {
                'morbol marquis': 'マーカス・モルボル',
                'Evil Armor': 'イビルアーマー',
                'Quetzalcoatl': 'ケツァクウァトル',
                'Doliodus': 'ドリオドゥス',
                'Cladoselache': 'クラドセラケ',
                'Ichthyology': '水棲生物創造場',
                'Phytobiology': '草木生物創造場',
                'Phantomology': '幻想生物創造場',
            },
            'replaceText': {
                'Winding Current': 'ループカレント',
                'Tidal Guillotine': 'タイダルギロチン',
                'Thunderstorm': 'サンダーストーム',
                'Thunderbolt': 'サンダーボルト',
                'Shocking Plumage': 'ショッキング・プルーミッジ',
                'Shockbolt': 'ショックボルト',
                'Sap Shower': 'サップシャワー',
                'Reverse Current': 'リバースカレント',
                'Putrid Breath': '忌まわしい嘆息',
                'Protolithic Puncture': 'プロトリシックパンクチャー',
                'Pelagic Cleaver': 'ペラジッククリーヴ',
                'Marine Mayhem': 'マリーンメイヘム',
                'Lash': 'ムチ打ち',
                'Extensible Tendrils': 'つるのムチ',
                'Blossom': 'ブロッサム',
                'Arbor Storm': 'アーバーストーム',
                'Aquatic Lance': 'アクアランス',
                'Carcharian Verve': 'カルカリアンヴァーヴ',
            },
        },
        {
            'locale': 'cn',
            'replaceSync': {
                'Morbol Marquis': '侯爵魔界花',
                'Evil Armor': '恶魔装甲',
                'Quetzalcoatl': '克察尔科亚特尔',
                'Doliodus': '原祖鲨',
                'Cladoselache': '裂口鲨',
                'Ichthyology': '水生生物创造场',
                'Phytobiology': '草木生物创造场',
                'Phantomology': '幻想生物创造场',
            },
            'replaceText': {
                'Winding Current': '绕组电流',
                'Tidal Guillotine': '怒潮断头台',
                'Thunderstorm': '雷暴',
                'Thunderbolt': '霹雳',
                'Shocking Plumage': '羽翼震击',
                'Shockbolt': '雷电震击',
                'Sap Shower': '喷洒汁液',
                'Reverse Current': '反转电流',
                'Putrid Breath': '腐烂之息',
                'Protolithic Puncture': '原始穿孔',
                'Pelagic Cleaver': '深海切割者',
                'Marine Mayhem': '海之骚动',
                'Lash': '鞭打',
                'Extensible Tendrils': '藤条抽打',
                'Blossom': '花丛',
                'Arbor Storm': '树木风暴',
                'Aquatic Lance': '水之枪',
                'Carcharian Verve': '鲨之气魄',
            },
        },
        {
            'locale': 'ko',
            'replaceSync': {
                'Morbol Marquis': '몰볼 후작',
                'Evil Armor': '사악한 갑옷',
                'Quetzalcoatl': '케찰코아틀',
                'Doliodus': '돌리오두스',
                'Cladoselache': '클라도셀라케',
                'Ichthyology': '수생 생물 창조장',
                'Phytobiology': '초목 생물 창조장',
                'Phantomology': '환상 생물 창조장',
            },
            'replaceText': {
                'Winding Current': '원형전류',
                'Tidal Guillotine': '해일 단두대',
                'Thunderstorm': '번개 폭풍',
                'Thunderbolt': '낙뢰',
                'Shocking Plumage': '충격 깃털',
                'Shockbolt': '충격 전류',
                'Sap Shower': '수액 세례',
                'Reverse Current': '역전류',
                'Putrid Breath': '불길한 탄식',
                'Protolithic Puncture': '원시 찌르기',
                'Pelagic Cleaver': '대양의 도끼날',
                'Marine Mayhem': '바다의 파괴력',
                'Lash': '채찍',
                'Extensible Tendrils': '덩굴 채찍',
                'Blossom': '개화',
                'Arbor Storm': '나무 폭풍',
                'Aquatic Lance': '수창',
                'Carcharian Verve': '상어의 기백',
            },
        },
    ],
});
