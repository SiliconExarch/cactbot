import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  id: 'AacLightHeavyweightM3Savage',
  zoneId: ZoneId.AacLightHeavyweightM3Savage,
  timelineFile: 'r3s.txt',
  triggers: [],
};

export default triggerSet;