export default interface Song{
    id: string,
    name: string,
    artist: string,
    album: string
}
export interface Playlist{
    id:string,
    name:string,
    songsId:number[]

}

// export enum Pages{
//     AllSongsPage = "AllSongsPage"
// } 

export interface Props{
    page: string
}