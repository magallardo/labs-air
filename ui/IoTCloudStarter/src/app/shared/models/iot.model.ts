export class PropertyValue {
  type: string;
  readWrite: string;
  minimum: string;
  maximum: string;
  defaultValue: string;
  size: string;
  word: string;
  lsb: string;
  mask: string;
  shift: string;
  scale: string;
  offset: string;
  base: string;
  assertion: string;
  signed: string;
  precision: string;
}

export class PropertyUnit {
  type: string;
  readWrite: string;
  defaultValue: string;
}

export class ResourceProperty {
  value: PropertyValue;
  units: PropertyUnit;
}

export class ResourceAttribute {
  Interface: string;
  Pin_Num: string;
  Type: string;
}

export class Resource {
  description: string;
  name: string;
  tag: string;
  properties: ResourceProperty;
  attributes: ResourceAttribute;
}

export class CommandResponse {
  code: string;
  description: string;
  expectedValues: string[];
}

export class CommandOp {
  path: string;
  responses: CommandResponse[];
  parameterNames: string[];
}

export class Command {
  id: string;
  name: string;
  get: CommandOp;
  put: CommandOp;
}

export class Profile {
  created: string;
  name: string;
  description: string;
  id: string;
  manufacturer: string;
  model: string;
  deviceResources: Resource[];
  deviceCommands: Command[];
}

export class Service {
  created: string;
  description: string;
  name: string;
}


export class Device {
  created: string;
  modified: string;
  origin: string;
  description: string;
  id: string;
  name: string;
  adminState: string;
  operatingState: string;
  profile: Profile;
  service: Service;
}

export class Subscription {
  uid: number;
  origin: number;
  created: number;
  modified: number;
  name: string;
  consumer: string;
  destination: string;
  protocol: string;
  method: string;
  address: string;
  port: number;
  path: string;
  format: string;
  enabled: boolean;
  user: string;
  password: string;
  topic: string;
  encryptionAlgorithm: string;
  encryptionKey: string;
  initializingVector: string;
  compression: string;
  deviceIdentifierFilter: string;
  valueDescriptorFilter: string;
}

export class Gateway {
  createdts: string;
  updatedts: string;
  uuid: string;
  address: string;
  latitude: number;
  longitude: number;
  subscriptions: Subscription[];
}

export class Reading {
  value: string;
  created: number;
}

export class ChartTSData {
  x: string;
  y: number;

  constructor(x: string, y: number) {
    this.x = x;
    this.y = y;
  }

}