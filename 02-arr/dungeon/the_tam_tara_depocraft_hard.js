Options.Triggers.push({
  zoneId: ZoneId.TheTamTaraDeepcroftHard,
  triggers: [
    {
      id: 'Tam-Tara Hard Inhumanity',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '956', source: 'Liavinne', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stack (ignore adds)',
          de: 'Sammeln (Adds ignorieren)',
          fr: 'Packez-vous: ne tuez pas les Adds',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Liavinne': 'Liavinne',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Liavinne': 'Liavinne la dame d\'honneur',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Liavinne': '立会人リアヴィヌ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Liavinne': '证婚人 莉亚维娜',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Liavinne': '입회인 리아빈',
      },
    },
  ],
});
