import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ADWMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GreenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ADW {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ADW, ADWMetaData>);
  static copyOf(source: ADW, mutator: (draft: MutableModel<ADW, ADWMetaData>) => MutableModel<ADW, ADWMetaData> | void): ADW;
}

export declare class Green {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Green, GreenMetaData>);
  static copyOf(source: Green, mutator: (draft: MutableModel<Green, GreenMetaData>) => MutableModel<Green, GreenMetaData> | void): Green;
}