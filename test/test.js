import {
  mermaidLanguage,
  mindmapLanguage,
  pieLanguage,
  flowchartLanguage,
  sequenceLanguage,
  journeyLanguage,
  requirementLanguage,
  ganttLanguage,
  timelineLanguage,
  quadrantLanguage,
  sankeyLanguage,
  xychartLanguage,
  packetLanguage,
  kanbanLanguage,
  blockLanguage,
  architectureLanguage,
  classLanguage,
  stateLanguage,
  erLanguage,
  gitLanguage,
  c4Language,
} from '../dist/index.js';
import { fileTests } from '@lezer/generator/dist/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const languages = [
  mermaidLanguage,
  mindmapLanguage,
  pieLanguage,
  flowchartLanguage,
  sequenceLanguage,
  journeyLanguage,
  requirementLanguage,
  ganttLanguage,
  timelineLanguage,
  quadrantLanguage,
  sankeyLanguage,
  xychartLanguage,
  packetLanguage,
  kanbanLanguage,
  blockLanguage,
  architectureLanguage,
  classLanguage,
  stateLanguage,
  erLanguage,
  gitLanguage,
  c4Language,
];

let testDir = path.dirname(fileURLToPath(import.meta.url));

for (const lang of languages) {
  const fileName = lang.name + '.txt';

  describe(lang.name, () => {
    for (const { name, run } of fileTests(
      fs.readFileSync(path.join(testDir, fileName), 'utf8'),
      fileName
    ))
      it(name, () => run(lang.parser));
  });
}
