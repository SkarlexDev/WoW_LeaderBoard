export interface RankingsData {
  rankings: {
    tank: RoleData;
    heal: RoleData;
    mdps: RoleData;
    rpds: RoleData;        
    [key: string]: RoleData;
  };  
}


export interface RoleData {
  S: Role[];
  A: Role[];
  B: Role[];
  C: Role[];
  D: Role[];
  F: Role[];
  [key: string]: Role[];
}

export interface Role {
  name: string;
  code: string;
}
