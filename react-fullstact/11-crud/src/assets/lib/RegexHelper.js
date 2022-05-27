/**
 * @filename    : RejexHelper.js
 * @autor       : 유다현 (ekgus1129@gmail.com);
 * @description : 정규표현식 검사 수행
 */

class RegexHelper {
  /**
   * *값의 존재 여부를 검사한다.
   * *@param {string} selector  검사할 대상의 css 선택자
   * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
   */

  value(selector, msg) {
    const content = document.querySelector(selector).value;
    if (
      content == undefined ||
      content == null ||
      (typeof content == "string" && content.trim().length == 0)
    ) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  /**
   * *입력값이 지정된 글자수 미만인지 검사
   * *@param {string} selector  검사할 대상의 css 선택자
   * *@param {int}    len       최대 글자수
   * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
   */

  minLength(selector, len, msg) {
    this.value(selector, msg);

    let content = document.querySelector(selector).value;
    if (content.trim().length < len) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }
  /**
   * *입력값이 지정된 글자수 이상인지 검사
   * *@param {string} selector  검사할 대상의 css 선택자
   * *@param {int}    len       최대 글자수
   * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
   */
  maxLength(selector, len, msg) {
    this.value(selector, msg);

    let content = document.querySelector(selector).value;
    if (content.trim().length > len) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }
  /**
   * *입력값이 정규표현식을 충족하는지 검사
   * *@param {string} selector  검사할 대상의 css 선택자
   * *@param {string} msg       값이 없을 경우 표시할 메시지 내용
   * *@param {object} regexExpr 검사할 정규표현식
   */
  field(selector, msg, regexExpr) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;
    const src = content.trim();

    if (!regexExpr.test(src)) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }
  /**
   * *입력값이 핸드폰번호 형식에 맞는지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  phoneNum(selector,msg){
    return this.field(selector,msg,/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/);
  }



  /**
   * *입력값이 숫자인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  num(selector, msg) {
    return this.field(selector, msg, /^[0-9]*$/);
  }
  /**
   * *입력값이 지정된 영어인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  eng(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z]*$/);
  }
  /**
   * *입력값이 지정된 숫자영어 조합인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  engNum(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
  }
  /**
   * *입력값이 지정된 지정된 특수문자와 숫자 영어 조합인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  regExpEngNum(selector, msg) {
    return this.field(selector, msg, /^[a-z0-9_-]*$/);
  }
  /**
   * *입력값이 지정된 지정된 특수문자와 숫자 영어 조합인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  allRegExpEngNum(selector, msg) {
    return this.field(
      selector,
      msg,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
    );
  }
  /**
   * *입력값이 지정된 한글인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  korEng(selector, msg) {
    return this.field(selector, msg, /^[a-z|A-Z|ㄱ-ㅎ|가-힣]+$/);
  }
  /**
   * *입력값이 4글자의 숫자인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 아닐 표시할 메시지 내용
   */
  numYear(selector, msg) {
    return this.field(selector, msg, /^\d{4}$/);
  }
  /**
   * *입력값이 체크 되어있는지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  check(selector, msg) {
    const content = document.querySelector(selector);
    const selectedOption = content.options[content.selectedIndex].value;

    // return alert(selectedOption);
    if (selectedOption == 0) {
      throw new BadRequestException(msg, selector);
    }
  }

  /**
   * *입력값이 1~ 31일 인지 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  numDay(seletor, msg) {
    return this.field(seletor, msg, /^(0[1-9]|[12][0-9]|3[01])$/);
  }

   /**
   * *입력값이 있으면 이메일 형식을 검사
   * *@param {string} selector 검사할 대상의 css 선택자
   * *@param {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  email(selector, msg) {
    const content = document.querySelector(selector).value;
    if (content == "") {
      return true;
    } else {
      return this.field(
        selector,
        msg,
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      );
    }
  }
  /**
   * *입력값이 지정된 값과 일치하는지 검사
   * *@param {string} origin   원본
   * *@param {string} compare  비교대상
   * *@param {string} msg      값이 다를 경우 표시할 메시지 내용
   */
  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    var src = document.querySelector(origin).value.trim();
    var dsc = document.querySelector(compare).value.trim();

    if (src != dsc) {
      throw new BadRequestException(msg, origin);
    }
    return true;
  }
}
