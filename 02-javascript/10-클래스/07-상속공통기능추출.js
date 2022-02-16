class Protoss {
    constructor(user,hp , dps){
        this._user= user;
        this._hp = hp;
        this._dps = dps;
        console.log("[%s]체력 : %d,공격력 : %d",user,hp,dps);
    }
    move(position){
        console.log(this._user+"이가"+position+"까지 이동합니다.");
    }

    attack(target){
        console.log(this._user+"이가"+target+"을 공격합니다.");
    }
}

class Zealot extends Protoss{
    sword(taget){
        this.attack(taget);
        console.log(">>검으로 찌르기");
    }
}


class Dragoon extends Protoss{
    fire(taget){
        this.attack(taget);
        console.log(">>불공격");
    }
}


var z1 = new Zealot ("질럿1",300,20);
z1.move('본진');
z1.sword('본진');