
export interface Pilot {
  Id: number;
  Callsign: string;
  Plane: string;
  ImageUrl: string;
};

export type Pilots = { [pilot_id: string]: Pilot };

export type deletePilot = (pilot_id: string) => void;
