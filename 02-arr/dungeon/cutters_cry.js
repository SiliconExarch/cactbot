Options.Triggers.push({
    zoneId: ZoneId.CuttersCry,
    triggers: [
        {
            id: 'Chimera Ram Voice',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '450', source: 'Chimera', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '450', source: 'Chimära', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '450', source: 'Chimère', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '450', source: 'キマイラ', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '450', source: '奇美拉', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '450', source: '키마이라', capture: false }),
            response: Responses.outOfMelee(),
        },
        {
            id: 'Chimera Dragon Voice',
            type: 'StartsUsing',
            netRegex: NetRegexes.startsUsing({ id: '5A2', source: 'Chimera', capture: false }),
            netRegexDe: NetRegexes.startsUsing({ id: '5A2', source: 'Chimära', capture: false }),
            netRegexFr: NetRegexes.startsUsing({ id: '5A2', source: 'Chimère', capture: false }),
            netRegexJa: NetRegexes.startsUsing({ id: '5A2', source: 'キマイラ', capture: false }),
            netRegexCn: NetRegexes.startsUsing({ id: '5A2', source: '奇美拉', capture: false }),
            netRegexKo: NetRegexes.startsUsing({ id: '5A2', source: '키마이라', capture: false }),
            response: Responses.getIn(),
        },
    ],
});
