export default interface Song{
    id: string,
    name: string,
    artist: string,
    album: string
}
export default interface Playlist{
    id:string,
    name:string,
    songIds:[]
}

// export enum Pages{
//     AllSongsPage = "AllSongsPage"
// } 

export interface Props{
    page: string
}