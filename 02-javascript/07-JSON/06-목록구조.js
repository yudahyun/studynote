const bbs = {

    title : " 공지사항",
    count : 4,
    item : [
        {id : 1, subject :"첫 번째 게시물"},
        {id : 2, subject :"두 번째 게시물"},
        {id : 3, subject :"세 번째 게시물"},
        
    ]
}

// for(let i = 0; i < bbs.item.length;i++){
//     console.log(bbs.item[i].id);
// }

let i = 0;
for(const i of bbs.item){
 console.log(bbs.item[i].id);
 i++;
    }