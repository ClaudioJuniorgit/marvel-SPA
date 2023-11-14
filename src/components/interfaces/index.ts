interface BaseMedia {
  title: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface Comics extends BaseMedia {
  pageCount: number
}

export interface Hero {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    items: {
      resourceURI: string
    }[]
  }
}

export interface Events extends BaseMedia {
  description: string
  start: string
}
