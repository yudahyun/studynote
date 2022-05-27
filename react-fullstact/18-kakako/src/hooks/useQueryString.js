import { useLocation } from "react-router-dom";

const useQueryString = () => {
    //QueryString 문자열 추출함
    const { search } = useLocation();
    // console.log(search);

    //QueryString 문자열을 객체로 변환
    const params = new URLSearchParams(search);
    // console.log("파람스는"+new URLSearchParams(search));
    //모든 key와 value의 쌍을 for ...in 반복문 처리 가능한 [key,value]쌍으로 반환
    const entries = params.entries();
    // console.log(params.entries)
    //리턴할 빈 객체
    const result = {}
    for(const [key,value] of entries){
        result[key] = value;
    }
    return result;
};

export { useQueryString };