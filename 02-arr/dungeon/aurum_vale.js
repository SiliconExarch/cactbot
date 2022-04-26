Options.Triggers.push({
  zoneId: ZoneId.TheAurumVale,
  triggers: [
    {
      id: 'Aurum Vale GoldLungs/Burrs',
      type: 'GainsEffect',
      // Count `0[2-9]` here is to filter out the first stack
      netRegex: NetRegexes.gainsEffect({ effectId: ['12E', '12F'], count: '0[2-9]' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Eat Fruit',
          fr: 'Mangez 1 fruit',
        },
      },
    },
  ],
});
