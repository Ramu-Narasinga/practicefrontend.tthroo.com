export type UnitType = {
  "id": number,
  "title": string,
  "description": string,
  "courseId": number
}

export type CourseType = {
  "id": number,
  "title": string,
  "description": string,
  "units": UnitType[]
}