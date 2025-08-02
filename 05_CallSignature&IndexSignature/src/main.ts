// Call Signature
// interface getLikeNumber {
//     (like: number): number;
// }

// interface Post {
//     id: number;
//     title: string;
//     getLikeNumber: getLikeNumber;
// }

// const post1: Post = {
//     id: 1,
//     title: 'post 1',
//     getLikeNumber(like: number) {
//         return like;
//     } 
// }

// post1.getLikeNumber(1);



// Index Signature
interface Post {
    [key: string]: unknown;
    id: number;
    title: string;
}

const post1: Post = {
    id: 1,
    title: 'post 1',
}

post1['description'] = 'description 1';
post1['pages'] = 300;


// 배열을 위한 인덱스 시그니처
interface Names {
    [item: number]: string;
}

const userNames = ['John', 'Kobe', 'Doe'];
userNames[0] === 'John'