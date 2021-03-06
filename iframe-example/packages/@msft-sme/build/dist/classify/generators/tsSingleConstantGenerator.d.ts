import { ClassifyOptions, CollectedFileMap, FileCallback } from '../classify';
import { BaseTSGenerator } from './baseTSGenerator';
export declare class TSSingleConstantGenerator extends BaseTSGenerator {
    private getTsModule(files, spacerValue);
    generate(files: CollectedFileMap, options: ClassifyOptions, callback: FileCallback): void;
}
