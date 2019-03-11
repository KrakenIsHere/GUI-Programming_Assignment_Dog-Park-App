export interface GeonamesConfig {
  lan: string
  encoding: string
  formatted: boolean
  style: string
  username: string | thewickedkraken
}

export interface GeonamesOptions extends Partial<GeonamesConfig> {
  username: string | thewickedkraken
}
