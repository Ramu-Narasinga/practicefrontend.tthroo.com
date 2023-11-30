export type StepType = {
  "description": string
}

export type ChapterType = { 
  "id": number,
  "title": string,
  "description": string,
  "unitId": number,
  "unit": {
    "title": string
  }
  "steps": StepType[]
}