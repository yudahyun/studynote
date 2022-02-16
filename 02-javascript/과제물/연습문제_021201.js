class Solution {
    constructor(k,n,m){
        this._k = k;
        this._n = n;
        this._m = m;

    }
    getMoney(){
        //만약에 30 * 4 가 100보다 크면
        if(this._k * this._n > this._m){
            return  console.log("동수가 부모님께 받아야하는 돈은 %d원입니다.",this._k * this._n - this._m);
        }
        //아니면
        else{
            return  console.log("동수가 부모님께 받아야하는 돈은 0원입니다.");
        }
    }
}

const 용돈1 = new Solution (30,4,100);
용돈1.getMoney();

const 용돈2 = new Solution (250,2,140);
용돈2.getMoney();

const 용돈3 = new Solution (20,6,120);
용돈3.getMoney();

const 용돈4 = new Solution (20,10,320);
용돈4.getMoney();
