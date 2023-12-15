export type StepType = {
  "description": string
}

export type ChapterType = { 
  "id": number,
  "title": string,
  "description": string,
  "unitId": number,
  "img": string,
  "unit": {
    "title": string
  }
  "steps": StepType[]
}