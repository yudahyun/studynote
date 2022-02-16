module.exports.name = "노드";
module.exports.property = {id:'노트',type :'javascript'};
module.exports.say = function (){
    console.log("hellow World");

    
}

module.exports.home={
    prostcode : "123",
    addres : "주소",
    getAddres: function(){
        console.log(this.prostcode +''+this.addres);
    }
}
